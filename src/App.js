import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import StudentSection from './Components/StudentSection';

function App() {

  //useState
  const [stuName, setStuName] = useState("");
  const [stuList, setStuList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editable, setEditable] = useState(null);

  //return
  return (
    <div className="App">

      <h1 style={{ textAlign: "center" }}>Student Attendence App</h1>

      <Form 
        stuName={stuName}
        setStuName={setStuName}
        stuList={stuList}
        setStuList={setStuList}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        editable={editable}
        setEditable={setEditable}
      />

      <StudentSection 
          stuName={stuName}
          setStuName={setStuName}
          stuList={stuList}
          setStuList={setStuList}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          editable={editable}
          setEditable={setEditable}
      />

    </div>
  );
}

export default App;
