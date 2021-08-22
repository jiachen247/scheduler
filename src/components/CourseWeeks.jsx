import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { scroller } from 'react-scroll';

function CourseWeeks({ scheduleData }) {

    const weeks = [];
    Object.keys(scheduleData).forEach((day) => {
        if (!weeks.includes(scheduleData[day].courseWeek)) {
            weeks.push(scheduleData[day].courseWeek);
        }
    })

    const weeksInAMonth = [];
    while(weeks.length) {
    const weekNumbers = weeks.splice(0,4);
        weeksInAMonth.push(weekNumbers);
    }

    return (
        <div className="sidebar-courseweeks">
            <h4>Course Weeks</h4>
            <Nav className="flex-column">
                {weeksInAMonth.map((month) => {
                    const id = `week-${month[0]}-day-1`;
                    return (
                        <Nav.Link
                        onClick={() => scroller.scrollTo( id, {
                            smooth: true,
                            offset: -70,
                            duration: 100,
                        })}
                        >
                        Course Weeks {month[0]} - {month[month.length - 1]}
                        </Nav.Link>
                    )
                })}
            </Nav>
        </div>
    )
}

export default CourseWeeks
