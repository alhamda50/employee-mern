import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate()
let clearUser = () => {
  localStorage.removeItem('token');
  navigate('/')
}
  return (
    <>
    <Box sx={{ flexGrow: 1, marginTop: -5, marginLeft: -4, marginRight: -4 }}>
      <AppBar position="static" sx={{backgroundColor: '#BC9F8B'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Link to={'/'}><Button sx={{border: 1, color:'white', margin: 2, '&:hover': { border: 'none', 
          backgroundColor: 'white', color: '#626F47'},'&:focus': {outline: 'none'}}}>Login</Button></Link>

          <Link to={'/home'}><Button sx={{border: 1, color:'white', margin: 2, '&:hover': { border: 'none', 
          backgroundColor: 'white', color: '#626F47'},'&:focus': {outline: 'none'}}}>Home</Button></Link>

          <Link to={'/add'}><Button sx={{border: 1, color:'white', margin: 2, '&:hover': { border: 'none', 
        backgroundColor: 'white', color: '#626F47'},'&:focus': {outline: 'none'}}}>Add</Button></Link>
          <Button sx={{border: 1, color:'white', margin: 2, '&:hover': { border: 'none', 
        backgroundColor: 'white', color: '#626F47'},'&:focus': {outline: 'none'}}} onClick={clearUser}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
  )
}

export default Nav