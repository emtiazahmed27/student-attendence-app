import React from "react";

function AllStudentList(props) {
    //deleteHandler
    const deleteHandler = (id) => {
        const newStuList = props.stuList.filter((stu) => stu.id != id);
        props.setStuList(newStuList);
    };

    //editHandler
    const editHandler = (id) => {
        const toBeEdited = props.stuList.find((stu) => stu.id == id);
        props.setIsEditable(true);
        props.setEditable(toBeEdited);
        props.setStuName(toBeEdited.name);
    };

    //presentHandler
    const presentHandler = (id) => {
        const stuTobePresent = props.stuList.find((stu) => stu.id === id);
        if (stuTobePresent.isPresent === true) alert("Student is Present Already");
        else if (stuTobePresent.isPresent === false)
            alert("Student is Present Already");
        else if (stuTobePresent.isPresent === undefined) {
            props.setStuList(
                props.stuList.map((stud) => {
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
        const stuTobeAbsent = props.stuList.find((stu) => stu.id === id);
        if (stuTobeAbsent.isPresent === true) alert("Student is Present Already");
        else if (stuTobeAbsent.isPresent === false)
            alert("Student is Absent Already");
        else if (stuTobeAbsent.isPresent === undefined) {
            props.setStuList(
                props.stuList.map((stud) => {
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
                {props.stuList.map((stu) => (
                    <li style={{ listStyle: "none" }}>
                        <span>{stu.name}</span>
                        <button onClick={() => editHandler(stu.id)}>edit</button>
                        <button onClick={() => {
                            props.isEditable != true
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
