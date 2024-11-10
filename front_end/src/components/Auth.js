import React from 'react';
import { auth, provider, signInWithPopup, signOut } from '../firebase_config';
import { Button } from '@mui/material';

const Auth = ({ setUser }) => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set user data to be used globally
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSignIn}>Sign in with Google</Button>
      <Button variant="outlined" onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
};

export default Auth;
