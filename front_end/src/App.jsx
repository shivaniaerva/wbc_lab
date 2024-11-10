import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { provider } from './firebase_config';  // Adjust the path if necessary
import Menu from './components/Menu';
import CartPage from './components/CartPage';
import Contact from './components/Contact';
import About from './components/About';
import Form from './components/Form';
import Admin from './components/Admin';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const auth = getAuth();

  // Function to handle Google sign-in
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set the authenticated user
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  // Function to handle Google sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user state
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Listen for changes to the user's sign-in state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [auth]);

  return (
    <div>
      <BrowserRouter>
        <header>
          {/* Sign-In/Sign-Out Button */}
          {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button onClick={handleSignIn}>Sign In with Google</button>
          )}
          {user && <p>Welcome, {user.displayName}</p>}
        </header>
        
        <Routes>
          <Route path="/" element={<Menu cart={cart} setCart={setCart} />} />
          <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

