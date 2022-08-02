import React, { createContext, useState } from 'react';

export const StudentContext = createContext()

function StudentProvider(props) {

    //useState
    const [stuName, setStuName] = useState("");
    const [stuList, setStuList] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [editable, setEditable] = useState(null);

    return (
        <StudentContext.Provider
            value={
                {
                    stuName,
                    setStuList,
                    setStuName,
                    stuList,
                    isEditable,
                    setIsEditable,
                    editable,
                    setEditable
                }
            }>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentProvider