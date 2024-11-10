import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const increaseQuantity = (item) => {
    setCart(cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeFromCart(item);
    } else {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  const goToMenu = () => {
    navigate('/menu'); // Navigate back to the Menu page
  };

  return (
    <div>
      <Button variant="contained" onClick={goToMenu}>Back to Menu</Button>
      <h1>Your Cart</h1>
      <Box>
        {cart.length === 0 ? (
          <Typography>No items in the cart</Typography>
        ) : (
          cart.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Typography>{item.name} - ₹{item.price}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                <IconButton onClick={() => decreaseQuantity(item)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => increaseQuantity(item)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button variant="outlined" onClick={() => removeFromCart(item)}>Remove</Button>
            </Box>
          ))
        )}
      </Box>
    </div>
  );
};

export default CartPage;

