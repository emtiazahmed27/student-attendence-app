import React, { useContext } from 'react'
import { StudentContext } from '../contexts/student'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection() {
    const { stuList, setStuList } = useContext(StudentContext)

    const togglePresentMode = (id) => {
        setStuList(stuList.map(stu => {
            if (stu.id === id) {
                stu.isPresent = !stu.isPresent
            }
            return stu;
        }))
    }

    return (
        <div className="studentSection" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <AllStudentList />
            <PresentStudentList
                togglePresentMode={togglePresentMode}
            />
            <AbsentStudentList
                togglePresentMode={togglePresentMode}
            />
        </div>
    )
}

export default StudentSection