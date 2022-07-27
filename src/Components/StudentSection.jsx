import React from 'react'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection(props) {

    const togglePresentMode = (id) => {
        props.setStuList(props.stuList.map(stu => {
            if (stu.id === id) {
                stu.isPresent = !stu.isPresent
            }
            return stu;
        }))
    }

    return (
        <div className="studentSection" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <AllStudentList
                stuName={props.stuName}
                setStuName={props.setStuName}
                stuList={props.stuList}
                setStuList={props.setStuList}
                isEditable={props.isEditable}
                setIsEditable={props.setIsEditable}
                editable={props.editable}
                setEditable={props.setEditable}
            />
            <PresentStudentList
                stuList={props.stuList}
                togglePresentMode={togglePresentMode}
            />
            <AbsentStudentList
                stuList={props.stuList}
                togglePresentMode={togglePresentMode}
            />
        </div>
    )
}

export default StudentSection