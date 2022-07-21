import { useState } from 'react';
import './App.css';
 
function App() {

  //useState
  const [stuName, setStuName] = useState("");
  const [stuList, setStuList] = useState([]);
  const [isEditable, setIsEditable]= useState(false);
  const [editable, setEditable]= useState(null);
  
  //createHandler
  const createHandler = (event) =>{
    event.preventDefault();
    if(stuName){
      const newName={
        id:Date.now(),
        name:stuName,
        isPresent: undefined,
      }
      setStuName(stuName);
      setStuList([newName,...stuList]);
      console.log(stuList);
      setStuName("");
    }
    else{
      alert("You're dumb");
    } 
  }

  //deleteHandler
  const deleteHandler= (id) =>{
    const newStuList= stuList.filter( stu=> stu.id != id)
    setStuList(newStuList);
  }

  //editHandler
  const editHandler= (id) =>{
    const toBeEdited= stuList.find( stu=> stu.id ==id)
    setIsEditable(true);
    setEditable(toBeEdited);
    setStuName(toBeEdited.name);
  }

  // updateHandler
  const updateHandler= (event) =>{
    event.preventDefault();

    if(stuName){
      editable.name= stuName;
      setStuName('');
      setIsEditable(false);
      setEditable(null);
    }
    else{
      alert("you're dumb");
      setIsEditable(false);
      setEditable(null);
    }
  }

  //presentHandler
  const presentHandler=(id) => {
    const stuTobePresent= stuList.find( stu => stu.id===id)
    if(stuTobePresent.isPresent === true) alert("Student is Present Already");
    else if(stuTobePresent.isPresent === false)  alert("Student is Present Already");
    else if(stuTobePresent.isPresent === undefined){
      setStuList(stuList.map(stud => {
        if(stud.id === id) {
          stud.isPresent=true;
        }
        return stud;
      })) 
    }
  }

  //absentHandler
  const absentHandler= (id)=>{
    const stuTobeAbsent= stuList.find( stu => stu.id===id)
    if(stuTobeAbsent.isPresent === true) alert("Student is Present Already");
    else if(stuTobeAbsent.isPresent === false)  alert("Student is Absent Already");
    else if(stuTobeAbsent.isPresent === undefined){
      setStuList(stuList.map(stud => {
        if(stud.id === id) {
          stud.isPresent=false;
        }
        return stud;
      })) 
    }
  }

  const togglePresentMode= (id)=>{
    setStuList(stuList.map( stu =>{
      if(stu.id===id){
        stu.isPresent= !stu.isPresent
      }
      return stu;
    }))
  }

  //return
  return (
    <div className="App">
     <h1 style={{textAlign:"center"}}>Student Attendence App</h1>
     <form onSubmit={(event) => isEditable===true ? updateHandler(event) : createHandler(event)} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <input style={{outline:"none"}} type="text" placeholder='Enter a valid Input' value={stuName} onChange={ (e) =>{setStuName(e.target.value)} }/>
      <button type='submit'>{(isEditable === true) ? "Update Stu" : "Add Stu"}</button>
     </form>


     <div className="studentSection"  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="Addstu" style={{border: "2px solid tomato", textAlign:"center"}}>
          <ul  style={{padding:"0"}}>
          <h2 style={{margin:"0"}}>Add Student</h2>
          {
          stuList.map( stu =>(
            <li style={{listStyle: "none"}}><span>{stu.name}</span> 
            <button onClick={()=> editHandler(stu.id)}>edit</button> 
            <button onClick={()=> {(isEditable!=true) ? deleteHandler(stu.id) : alert("you're dumb")}}>delete</button> 
            <button onClick={()=> {presentHandler(stu.id)}}>Present</button> <button onClick={() =>{absentHandler(stu.id)}}>Absent</button></li>
          ))
          }</ul>
        </div>
        <div className="presentstu" style={{border: "2px solid tomato",textAlign:"center", margin:"0 1em"}}>
          <h2 style={{margin:"0"}}>Present Student</h2>
          <ul style={{margin:"0", padding:"0"}}>
            {stuList.filter(stu => stu.isPresent== true).map( stu => (<li style={{listStyle:"none"}}>
              <span>{stu.name}</span>
              <button onClick={()=>{
                togglePresentMode(stu.id)
              }}>Accidentally Added</button>
            </li>))}
          </ul>
        </div>
        <div className="absentStu" style={{border: "2px solid tomato",textAlign:"center"}}>
          <h2 style={{margin:"0"}}>Absent Student</h2>
          <ul style={{margin:"0", padding:"0"}}>
            {stuList.filter(stu => stu.isPresent== false).map( stu => (<li style={{listStyle:"none"}}>
              <span>{stu.name}</span>
              <button onClick={()=>{
                togglePresentMode(stu.id)
              }}>Accidentally Added</button>
            </li>))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
