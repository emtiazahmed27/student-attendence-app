import './App.css';
import Form from './Components/Form';
import StudentSection from './Components/StudentSection';

function App() {

  //return
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Student Attendence App</h1>
      <Form />
      <StudentSection />
    </div>
  );
}

export default App;
