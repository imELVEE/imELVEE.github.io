import React from 'react'
import { ActivityCalendar } from 'react-activity-calendar';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ErrorBoundary } from 'react-error-boundary';

import 'react-tooltip/dist/react-tooltip.css';
import './Calendar.css';

const Calendar = () => {
    return (
        <div className="calendar">
            <h1>Public Activity on Github</h1>
            <ErrorBoundary FallbackComponent={<ActivityCalendar loading={true}/>}>
                <GitHubCalendar 
                    username="imELVEE" 
                    showWeekdayLabels={['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']}
                    fontSize={20}
                    blockSize={18}
                    theme={{
                        dark: ['rgb(0, 0, 0)', 'rgb(75, 75, 75)', 'rgb(130, 130, 130)', 'rgb(210, 210, 210)', 'rgb(255, 255, 255)'],
                    }}
                    renderBlock={(block, activity) =>
                        React.cloneElement(block, {
                            'data-tooltip-id': 'react-tooltip',
                            'data-tooltip-html': `${activity.count} activities on ${activity.date}`
                        })
                    }
                />
            </ErrorBoundary>
            <ReactTooltip id="react-tooltip" />
        </div>
    )
}

export default Calendar;