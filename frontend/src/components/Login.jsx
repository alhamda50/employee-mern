import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosinterceptor'


const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const  navigate = useNavigate()
    let updateUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    let sendData = (event) => {
        // if((user.username == "admin") && (user.password == "1234")){
        //     sessionStorage.setItem("username", "admin");
        //     navigate('/home')
        // }
        // else{
        //     alert('invalid credentials');
        // }

        axiosInstance.post("http://localhost:5000/user/login",user)
        .then((res) => {
            console.log(res);
            alert(res.data.message)
            if(res.data.usertoken){
                localStorage.setItem("token", res.data.usertoken);
                navigate('/home')
            }
        })
    }
  return (
    <div>
    <Box display="flex" >
    <Stack spacing={4} direction="column" sx={{ width: 500, marginLeft: 42}} >
    <Typography variant='h3' sx={{fontWeight: 900, color: '#705C53'}} >Sign In</Typography> 
    <TextField required id="standard-basic" label="Username" variant="standard" name="username" value={user.username} onChange={updateUser}/> <br />
    <TextField id="standard-basic" label="Password" type="Password" variant="standard" name="password" value={user.password} onChange={updateUser}/> <br /> <br />
    <Button size="large" variant="contained" sx={{backgroundColor: '#705C53', '&:hover': { border: 'none', backgroundColor: '#BC9F8B'},
        '&:focus': {outline: 'none'}}} onClick={sendData}>Submit</Button> <br />
    </Stack>
        </Box>
    </div>
  )
}

export default Login