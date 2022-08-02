import React, { useContext } from "react";
import { StudentContext } from "../contexts/student";

function AllStudentList() {
    const stuCtx = useContext(StudentContext)
    //deleteHandler
    const deleteHandler = (id) => {
        const newStuList = stuCtx.stuList.filter((stu) => stu.id != id);
        stuCtx.setStuList(newStuList);
    };

    //editHandler
    const editHandler = (id) => {
        const toBeEdited = stuCtx.stuList.find((stu) => stu.id == id);
        stuCtx.setIsEditable(true);
        stuCtx.setEditable(toBeEdited);
        stuCtx.setStuName(toBeEdited.name);
    };

    //presentHandler
    const presentHandler = (id) => {
        const stuTobePresent = stuCtx.stuList.find((stu) => stu.id === id);
        if (stuTobePresent.isPresent === true) alert("Student is Present Already");
        else if (stuTobePresent.isPresent === false)
            alert("Student is Present Already");
        else if (stuTobePresent.isPresent === undefined) {
            stuCtx.setStuList(
                stuCtx.stuList.map((stud) => {
                    if (stud.id === id) {
                        stud.isPresent = true;
                    }
                    return stud;
                })
            );
        }
    };

    //absentHandler
    const absentHandler = (id) => {
        const stuTobeAbsent = stuCtx.stuList.find((stu) => stu.id === id);
        if (stuTobeAbsent.isPresent === true) alert("Student is Present Already");
        else if (stuTobeAbsent.isPresent === false)
            alert("Student is Absent Already");
        else if (stuTobeAbsent.isPresent === undefined) {
            stuCtx.setStuList(
                stuCtx.stuList.map((stud) => {
                    if (stud.id === id) {
                        stud.isPresent = false;
                    }
                    return stud;
                })
            );
        }
    };

    return (
        <div className="Addstu" style={{ border: "2px solid tomato", textAlign: "center" }}>
            <ul style={{ padding: "0" }}>
                <h2 style={{ margin: "0" }}>Add Student</h2>
                {stuCtx.stuList.map((stu) => (
                    <li style={{ listStyle: "none" }}>
                        <span>{stu.name}</span>
                        <button onClick={() => editHandler(stu.id)}>edit</button>
                        <button onClick={() => {
                            stuCtx.isEditable != true
                                ? deleteHandler(stu.id)
                                : alert("you're dumb");
                        }}>delete</button>
                        <button onClick={() => presentHandler(stu.id)}>Present</button>
                        <button onClick={() => absentHandler(stu.id)}>Absent</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllStudentList;
