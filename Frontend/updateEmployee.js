import {useState,useEffect} from 'react'
import './AddEmployee.css'
import {useNavigate,Route,Routes, useParams} from 'react-router-dom'

function UpdateEmployee(){
  
    const {employeeId}= useParams();
    const [employeeData,SetEmployeeData]= useState({})

   

    const navigate=useNavigate();

    useEffect(()=>{
      fetch(`http://localhost:7071/api/v1/getEmployeeById/${employeeId}`).
      then(
        (response)=>response.json())
      .then((json)=>SetEmployeeData(json))
    },[])

    console.log(employeeData)
   

    function submitForm(e){
        fetch(`http://localhost:7071/api/v1/updateEmployee?id=${employeeId}`,{
            method: "PUT",
            body: JSON.stringify(employeeData),
            headers:{ "content-type":"application/json;charset=UTF-8"}
        })
        navigate('/')
    }
    
    function handleOnChange(e){
    
        const name=e.target.name;
        const value=e.target.value;
    
        SetEmployeeData((previousState)=>{return {...previousState,[name]:value}})
        }

 return <div className='conatainer'>
 <div className='nested-container'>
 
 <div className="formContent">
 
 <form>
     <h3>EMPLOYEE DETAILS UPDATE</h3>

     <div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Enter Employee Name</label>
<input type="text" className="form-control"name="name"value={employeeData.name} onChange={handleOnChange} />
</div>

<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Enter Employee Age</label>
<input type="text" className="form-control"name="age" value={employeeData.age}onChange={handleOnChange} />
</div>

<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Enter Employee job</label>
<input type="text" className="form-control"name="job" value={employeeData.job} onChange={handleOnChange} />
</div>
     
     <button className="btn btn-primary" onClick={submitForm}>Update</button> 
 </form>
 </div>
 </div>
</div>
}

export default UpdateEmployee;
