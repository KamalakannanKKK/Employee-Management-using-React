
import './App.css';
import EmployeeTable from './EmployeeTable';
import AddEmployee from './AddEmployee';
import {useNavigate,Route,Routes} from 'react-router-dom'
import UpdateEmployee from './updateEmployee';


function App() {

  const navigate=useNavigate();

  const handleAddEmployee=()=>{
    navigate('/addEmployee')
  }


  return (
    <>
    <div className="App">
      <div className="navbar navbar-dark bg-dark">
       <h3 className="titleName">EMPLOYEE RECORDS</h3>
       <div className="addbutton">
               <button className="btn btn-primary" onClick={handleAddEmployee} >Add Employee</button>
       </div>
       </div>
    </div>
    <div className="mainContent">
       <Routes>
        <Route path='' element={<EmployeeTable/>}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/updateEmployee/:employeeId' element={<UpdateEmployee/>}/>
      </Routes>
    </div></>
  );
}

export default App;
