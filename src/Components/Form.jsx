import { React, useContext } from "react";
import { StudentContext } from "../contexts/student";

function Form() {

    const stuCtx = useContext(StudentContext)

    //createHandler
    const createHandler = (event) => {
        event.preventDefault();
        if (stuCtx.stuName) {
            const newName = {
                id: Date.now(),
                name: stuCtx.stuName,
                isPresent: undefined,
            };
            stuCtx.setStuName(stuCtx.stuName);
            stuCtx.setStuList([newName, ...stuCtx.stuList]);
            // console.log(stuList);
            stuCtx.setStuName("");
        } else {
            alert("You're dumb");
        }
    };

    // updateHandler
    const updateHandler = (event) => {
        event.preventDefault();

        if (stuCtx.stuName) {
            stuCtx.editable.name = stuCtx.stuName;
            stuCtx.setStuName("");
            stuCtx.setIsEditable(false);
            stuCtx.setEditable(null);
        } else {
            alert("you're dumb");
            stuCtx.setIsEditable(false);
            stuCtx.setEditable(null);
        }
    };

    return (
        <form
            onSubmit={(event) =>
                stuCtx.isEditable === true
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
                value={stuCtx.stuName}
                onChange={(e) => {
                    stuCtx.setStuName(e.target.value);
                }}
            />
            <button type="submit">
                {stuCtx.isEditable === true ? "Update Stu" : "Add Stu"}
            </button>
        </form>
    );
}

export default Form;
