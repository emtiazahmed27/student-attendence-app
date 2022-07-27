import React from "react";

function Form(props) {

    //createHandler
    const createHandler = (event) => {
        event.preventDefault();
        if (props.stuName) {
            const newName = {
                id: Date.now(),
                name: props.stuName,
                isPresent: undefined,
            };
            props.setStuName(props.stuName);
            props.setStuList([newName, ...props.stuList]);
            // console.log(stuList);
            props.setStuName("");
        } else {
            alert("You're dumb");
        }
    };

    // updateHandler
    const updateHandler = (event) => {
        event.preventDefault();

        if (props.stuName) {
            props.editable.name = props.stuName;
            props.setStuName("");
            props.setIsEditable(false);
            props.setEditable(null);
        } else {
            alert("you're dumb");
            props.setIsEditable(false);
            props.setEditable(null);
        }
    };

    return (
        <form
            onSubmit={(event) =>
                props.isEditable === true
                    ? updateHandler(event)
                    : createHandler(event)
            }
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <input
                style={{ outline: "none" }}
                type="text"
                placeholder="Enter a valid Input"
                value={props.stuName}
                onChange={(e) => {
                    props.setStuName(e.target.value);
                }}
            />
            <button type="submit">
                {props.isEditable === true ? "Update Stu" : "Add Stu"}
            </button>
        </form>
    );
}

export default Form;
