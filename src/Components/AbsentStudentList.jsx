import React from "react";

function AbsentStudentList(props) {
    return (
        <div
            className="absentStu"
            style={{ border: "2px solid tomato", textAlign: "center" }}
        >
            <h2 style={{ margin: "0" }}>Absent Student</h2>
            <ul style={{ margin: "0", padding: "0" }}>
                {props.stuList
                    .filter((stu) => stu.isPresent == false)
                    .map((stu) => (
                        <li style={{ listStyle: "none" }}>
                            <span>{stu.name}</span>
                            <button
                                onClick={() => {
                                    props.togglePresentMode(stu.id);
                                }}
                            >
                                Accidentally Added
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default AbsentStudentList;
