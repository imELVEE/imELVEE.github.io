import React, { useEffect, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import './Calendar.css';

const Calendar = () => {
    const [data, setData] = useState([
        {
          date: '2024-06-23',
          count: 2,
          level: 1,
        },
        {
          date: '2024-08-02',
          count: 16,
          level: 4,
        },
        {
          date: '2024-11-29',
          count: 11,
          level: 3,
        },
      ]
    );

    useEffect(() => {
        const loadGithubActivity = async () => {
            // 1. Call Github events API
            const githubId = 'imELVEE';
            const githubApi = `https://api.github.com/users/${githubId}/events`;

            const queryParams = {
                per_page: 100,
            };
            const queryString = new URLSearchParams(queryParams).toString();
            const url = `${githubApi}?${queryString}`;

            const headers = {
                'Content-Type': 'application/json',
                'X-GitHub-Api-Version': '2022-11-28'
            };

            const options = {
                method: 'GET',
                headers: headers,
            };
            

            const response = await fetch(url, options);
            const payload = await response.json();
        
            // 2. Report error if there's
            if (payload?.message) {
                return;
            }
        
            // 3. Construct the data array which expects obj with 2 keys
            // date: 'yyyy-MM-dd'
            // activities: array of anything
            let eventObj = {};
            payload.forEach((event) => {
                const date = event.created_at.slice(0, 10);
                if (!eventObj[date]) {
                eventObj[date] = [event];
                } else {
                eventObj[date] = [...eventObj[date], event];
                }
            });
            
            const newData = Object.entries(eventObj).map((entry) => {
                console.log(`${entry[0]} : ${entry[1]}`);
                return {
                    date: entry[0],
                    count: entry[1].length,
                    level: determineLevel(entry[1].length),
                };
            });
            setData(newData);
        }

        loadGithubActivity()
    }, []);

    const determineLevel = (count) => {
        if (count <= 5) {
            return 1;
        } else if (count <= 10) {
            return 2;
        } else if (count <= 15) {
            return 3;
        } else {
            return 4;
        }
    }

    return (
        <div className="calendar">
            <p>Last Updated N/A</p>
            <ActivityCalendar
                data={data} 
                showWeekdayLabels={['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']} 
                fontSize={20}
                blockSize={20}
                labels = {{
                    "months": [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    "weekdays": [
                        'Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                    ],
                }}
                theme={{
                    dark: ['rgb(255,255,255)', 'rgb(214, 16, 174)'],
                }}
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                        'data-tooltip-id': 'react-tooltip',
                        'data-tooltip-html': `${activity.count} activities on ${activity.date}`
                    })
                }
            />
            <ReactTooltip id="react-tooltip" />
        </div>
    )
}

export default Calendar;