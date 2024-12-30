import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import './Calendar.css';

const Calendar = () => {
    return (
        <div className="calendar">
            <h1>Public Activity on Github</h1>
            <p>Last Updated N/A</p>
            <GitHubCalendar 
            username="imELVEE" 
            showWeekdayLabels={['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']}
            fontSize={20}
            blockSize={18}
            theme={{
                dark: ['rgb(100,100,100)', 'rgb(233, 13, 189)'],
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