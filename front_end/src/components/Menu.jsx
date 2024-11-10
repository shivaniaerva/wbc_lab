import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Box, Button, Card, CardMedia, Container, TextField, Typography, Select, MenuItem, FormControlLabel, Switch } from '@mui/material';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import { db, auth } from "../firebase_config";

const Menu = ({ cart, setCart }) => {
  const [fooditems, setfood] = useState([]);
  const [sfilter, setfilter] = useState("");
  const [filterdfoodarray, setfil] = useState([]);
  const [selcat, setcat] = useState("");
  const [bool, setbool] = useState(false);
  const [user, setUser] = useState(null); // Track logged-in user state
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const getdata = async () => {
    const querySnapshot = await getDocs(collection(db, "food"));
    let listfood = [];
    querySnapshot.forEach((doc) => {
      const foodcard = { id: doc.id, ...doc.data() };
      listfood.push(foodcard);
    });
    setfood(listfood);
    setfil(listfood);
  };

  const applyFilters = () => {
    let filteredFood = fooditems.filter((item) => {
      const matchesName = item.name.toLowerCase().includes(sfilter.toLowerCase());
      const matchesCategory = selcat === "" || item.course === selcat;
      if (!bool) {
        return matchesName && matchesCategory;
      }
      const matchesToggle = item.toggle === true;
      return matchesName && matchesCategory && matchesToggle;
    });
    setfil(filteredFood);
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [sfilter, selcat, bool]);

  const addToCart = (item) => {
    if (!user) {
      alert("Please log in to add items to the cart.");
      return;
    }
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const goToCart = () => {
    navigate('/cart'); 
  };

  return (
    <div>
      <Nav />
      <Typography
        variant="h4"
        sx={{
          margin: '20px 0',
          textAlign: 'center',
          animation: 'slideIn 1s ease-out',
        }}
      >
        Discover Your Next Favorite Dish!
      </Typography>
      <Container sx={{
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}>
        <TextField
          label="Search by Item Name"
          variant="outlined"
          onChange={e => setfilter(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <FormControlLabel
          control={<Switch checked={bool} onChange={(e) => setbool(e.target.checked)} />}
        />
        <Select value={selcat} displayEmpty onChange={(e) => setcat(e.target.value)}>
          <MenuItem value="">All Category</MenuItem>
          <MenuItem value="main-course">Main-Course</MenuItem>
          <MenuItem value="starters">Starters</MenuItem>
          <MenuItem value="dessert">Desserts</MenuItem>
          <MenuItem value="beverages">Beverages</MenuItem>
        </Select>
      </Container>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
        marginBottom: '20px',
        height: 'auto',
        padding: '30px',
        gap: '20px',
      }}>
        {filterdfoodarray.map((dish) => (
          <Card
            key={dish.id}
            sx={{
              width: '300px',
              height: '400px',
              marginBottom: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              border: '1px solid #ddd',
              overflow: 'hidden',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={dish.img}
              alt={dish.name}
            />
            <Typography variant="h6">{dish.name}</Typography>
            <Typography variant="body1">{dish.course}</Typography>
            {dish.toggle ? (
              <Typography variant="h6">Vegetarian</Typography>
            ) : (
              <Typography variant="h6">Non-Vegetarian</Typography>
            )}
            <Typography variant="body1">₹{dish.price}</Typography>
            <Button variant="contained" onClick={() => addToCart(dish)}>Add to Cart</Button>
          </Card>
        ))}
      </Box>

      <Button variant="contained" onClick={goToCart}>Go to Cart</Button>
    </div>
  );
};

export default Menu;


