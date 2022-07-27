import React from 'react'

function PresentStudentList(props) {
    return (
        <div className="presentstu" style={{ border: "2px solid tomato", textAlign: "center", margin: "0 1em" }}>
            <h2 style={{ margin: "0" }}>Present Student</h2>
            <ul style={{ margin: "0", padding: "0" }}>
                {props.stuList.filter(stu => stu.isPresent == true).map(stu => (<li style={{ listStyle: "none" }}>
                    <span>{stu.name}</span>
                    <button onClick={() => {
                        props.togglePresentMode(stu.id)
                    }}>Accidentally Added</button>
                </li>))}
            </ul>
        </div>
    )
}

export default PresentStudentList