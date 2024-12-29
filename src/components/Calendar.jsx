import React, { useEffect } from 'react'
import { ActivityCalendar } from 'react-activity-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import './Calendar.css';

const Calendar = () => {
    const data = [
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
    ];

    useEffect(() => {
            
    }, []);

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