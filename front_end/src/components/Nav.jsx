import { AppBar, Button, Toolbar, Typography,Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
 
const Nav = () => {
  return (
        <>
        <AppBar>
            <Toolbar>
                <Typography>App</Typography>
                <Container>
                    <Link to="/Menu"> 
                    <Button color='white'>Menu</Button>
                    </Link>
                     
                    <Link to={"/About"}>
                    <Button color='white'>About</Button>
                    </Link>
                    <Link to={"/Contact"}>
                    <Button color='white'>Contact</Button>
                    </Link>
                    
                    <Button color='white'>Profile</Button>
                     
                </Container>
            </Toolbar>
        </AppBar>
        </>
  )
}

export default Nav