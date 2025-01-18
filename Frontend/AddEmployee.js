import { useState } from 'react'
import './AddEmployee.css'
import {useNavigate} from 'react-router-dom'
function AddEmployee(){

    const navigate=useNavigate();

    const [employee,setEmployee]=useState({})

    function submitForm(e){
        fetch('http://localhost:7071/api/v1/addEmployee',{
            method: "POST",
            body: JSON.stringify(employee),
            headers:{ "content-type":"application/json;charset=UTF-8"}
        })
        navigate('/')
    }

   function handleOnChange(e){
    
    const name=e.target.name;
    const value=e.target.value;

    setEmployee((previousState)=>{return {...previousState,[name]:value}})
    }

    return <div className='conatainer'>
        <div className='nested-container'>
        
        <div className="formContent">
        
        <form>
            <h3>EMPLOYEE REGISTERATION</h3>

            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter Employee Name</label>
  <input type="text" className="form-control"name="name" onChange={handleOnChange} />
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter Employee Age</label>
  <input type="text" className="form-control"name="age" onChange={handleOnChange} />
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter Employee job</label>
  <input type="text" className="form-control"name="job" onChange={handleOnChange} />
</div>
            
            <button className="btn btn-primary" onClick={submitForm}>Register</button> 
        </form>
        </div>
        </div>
    </div>
}

export default AddEmployee
