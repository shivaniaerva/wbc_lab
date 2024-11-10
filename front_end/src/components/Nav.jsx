import { AppBar, Button, Toolbar, Typography, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, provider } from '../firebase_config';
import { signInWithPopup, signOut } from 'firebase/auth';

const Nav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"  sx={{ flexGrow: 1 }}>
            IShaa  
          </Typography>
          <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/Menu" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Menu</Button>
            </Link>
            <Link to="/About" style={{ textDecoration: 'none' }}>
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Contact</Button>
            </Link>
            <Link to="/Admin" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Admin</Button>
            </Link>
            {user ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
