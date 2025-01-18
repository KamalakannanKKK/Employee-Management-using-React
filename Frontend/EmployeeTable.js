import {useState,useEffect} from 'react'
import './EmployeeTable.css'
import App from './App'
import {useNavigate,Route,Routes} from 'react-router-dom'

function EmployeeTable(){

    const [employee,SetEmployee]=useState([])
    const [refresh,SetRefresh]=useState(false)
    const navigate=useNavigate();

    useEffect(()=>{
      fetch('http://localhost:7071/api/v1/getAllEmployee').
      then(
        (response)=>response.json())
      .then((json)=>SetEmployee(json))
    },[refresh])
  
    function updateEmployee(data){
          navigate(`/updateEmployee/${data}`)
    }
   
    function deleteEmployee(data){
      fetch(`http://localhost:7071/api/v1/deleteEmployee/${data}`,{
         method: "DELETE",
         headers:{ "content-type":"application/json;charset=UTF-8"}
      }).then((response)=>{
        if(response.ok){
          SetRefresh(!refresh)
        }
      })
      console.log("Deleted Successfully")

    }
return <>

 <div class="tableContent">
<table className="table table-striped">
 <thead>
   <tr>
   <th>Employee Id</th>
   <th>Employee Name</th>
   <th>Age</th>
   <th>Job</th>
   <th>Action</th>
   </tr>
 </thead>
 <tbody>
   {
     employee.map(e=>(
       <tr key={e.employeeId}>
         <td>{e.employeeId}</td>
         <td>{e.name}</td>
         <td>{e.age}</td>
         <td>{e.job}</td>
         <td><button className='btn btn-primary' onClick={()=>updateEmployee(e.employeeId)}>Update</button>
         &nbsp;&nbsp;
         <button className='btn btn-danger' onClick={()=>deleteEmployee(e.employeeId)}>Delete</button></td>
       </tr>
     ))
   }
 </tbody>

</table>
</div>
</>
}

export default EmployeeTable;
