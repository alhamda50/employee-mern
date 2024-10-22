import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Nav from './Nav';
import axiosInstance from '../axiosinterceptor';

const Add = () => {

  const navigate = useNavigate();

  //array and function to submit data
  const [employees, setEmployee] = useState(
    {
      empId: '',
      empName: '',
      empDesignation: '',
      department: '',
      location: '',
      salary: ''
    }
  )

  const fetchValue=(event) => {
    setEmployee({...employees,[event.target.name]: event.target.value});
  }

  
  const location = useLocation()
  const sendData = () => {
    if(location.state!=null){
      console.log("for updation");

      axiosInstance.put('http://localhost:5000/emp/put/'+location.state.item._id,employees).then((res) => {
        alert("Data updated");
        navigate('/home');
      }).catch((error) => {
        console.log(error);
      })
    }else{
      console.log("inside post");
      axiosInstance.post('http://localhost:5000/emp/post',employees).then((res) => {
        navigate('/home');
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  useEffect(() => {
    if(location.state!=null){
      setEmployee({...employees,
        empId:location.state.item.empId,
        empName:location.state.item.empName,
      empDesignation:location.state.item.empDesignation,
      department:location.state.item.department,
      location:location.state.item.location,
      salary:location.state.item.salary
      })
    }
  },[])


  return (
    <div>
      
      <Nav />
      <h2>Add Course</h2><br />
      <TextField sx={{width: 500}} label="Employee ID" variant="outlined"onChange={fetchValue} name="empId" value={employees.empId}/><br /><br />
        <TextField sx={{width: 500}} label="Employee Name" variant="outlined" onChange={fetchValue} name="empName" value={employees.empName}/><br /><br />
        <TextField sx={{width: 500}} label="Employee Designation" variant='outlined' onChange={fetchValue} name='empDesignation' value={employees.empDesignation}/><br /><br />
        <TextField sx={{width: 500}} label="department" variant='outlined' onChange={fetchValue} name="department" value={employees.department} /><br /><br />
        <TextField sx={{width: 500}} label="location" variant="outlined" onChange={fetchValue} name="location" value={employees.location} /><br /><br />
        <TextField sx={{width: 500}} label="salary" variant="outlined" onChange={fetchValue} name="salary" value={employees.salary} /> <br />
        <Button variant="contained" sx={{backgroundColor:'#705C53',color:'white', margin:2, '&:hover': { border: 'none', backgroundColor: '#BC9F8B'},
        '&:focus': {outline: 'none'}}} onClick={sendData} >Add Employee</Button>
    </div>
  )
}

export default Add