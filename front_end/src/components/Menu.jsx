import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Box, Button, Card, CardMedia, Container, TextField, Typography, } from '@mui/material'

export const Menu = () => {
     const [filter,setfilter]=useState('');
     const [normalfood,setfood]=useState([]);
     const items = [
        {
          itemname: 'Paneer Butter Masala',
          itemcourse: 'maincourse',
          itemtype: 'veg',
          price: 150,
          image: 'https://th.bing.com/th/id/OIP.-rZiit_GDlRDoR4WZ3AYpAHaLH?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Butter Chicken',
          itemcourse: 'maincourse',
          itemtype: 'non-veg',
          price: 250,
          image: 'https://th.bing.com/th/id/OIP.Mzmy9YiJlPtvVfgSIzyKDQHaLH?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Dal Tadka',
          itemcourse: 'maincourse',
          itemtype: 'veg',
          price: 120,
          image: 'https://th.bing.com/th/id/OIP.FFtgnmkwezLe63vmN4IkwAHaEL?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Fish Curry',
          itemcourse: 'maincourse',
          itemtype: 'non-veg',
          price: 300,
          image: 'https://th.bing.com/th/id/OIP.fw7txsTDDPDkhX6-ulkWoAHaEK?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Chole Bhature',
          itemcourse: 'breakfast',
          itemtype: 'veg',
          price: 100,
          image: 'https://th.bing.com/th/id/OIP.jOh-EGyjBjeTp6w2oOZWrwHaFj?w=1536&h=1152&rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Aloo Paratha',
          itemcourse: 'breakfast',
          itemtype: 'veg',
          price: 90,
          image: 'https://th.bing.com/th/id/OIP.BF_c6FGy1wlK3WOBTqPWEwHaFE?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Mutton Biryani',
          itemcourse: 'maincourse',
          itemtype: 'non-veg',
          price: 350,
          image: 'https://th.bing.com/th/id/OIP.wBu0Xsb774mtzvjhq1C3DgHaE8?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Veg Biryani',
          itemcourse: 'maincourse',
          itemtype: 'veg',
          price: 180,
          image: 'https://th.bing.com/th/id/OIP.qFXmwrhQ2JWZwu4MojnpCAHaFj?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Masala Dosa',
          itemcourse: 'breakfast',
          itemtype: 'veg',
          price: 80,
          image: 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg',
        },
        {
          itemname: 'Chicken Tikka',
          itemcourse: 'starter',
          itemtype: 'non-veg',
          price: 220,
          image: 'https://th.bing.com/th/id/OIP.yqzxq9ucemxo1ATpWQisqgHaE8?rs=1&pid=ImgDetMain',
        },
        {
          itemname: 'Palak Paneer',
          itemcourse: 'maincourse',
          itemtype: 'veg',
          price: 140,
          image: 'https://th.bing.com/th/id/OIP.Hghu2Y5kt4XoOqkYKxYzSAHaEK?w=1000&h=562&rs=1&pid=ImgDetMain',
        },
      ]
      
useEffect(()=>{
setfood(items);
},[]);

const filtereditems=normalfood.filter((item)=>(
         
        item.itemname.toLowerCase().includes(filter.toLowerCase())

));

  return (
     <> 
         <Nav/>
       
        <Container sx={ {marginTop: '80px'} }>
        <h1>Menu</h1>
        <TextField label="Search by Item Name"
          variant="outlined"
          fullWidth
          onChange={e => setfilter(e.target.value)}
          sx={{ marginBottom: '20px' }}>
 
        </TextField>
        </Container>  
        <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '20px',
    height: 'auto',
    padding: '30px',
    gap: '20px',
  }}
>
  {filtereditems.map((dish, index) => (
    <Card
      key={index}
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
        image={dish.image}
        alt={dish.itemname}
      />
      <Typography variant="h6">{dish.itemname}</Typography>
      <Typography variant="body1">{dish.itemcourse}</Typography>
      <Typography variant="body2">{dish.itemtype}</Typography>
      <Typography variant="h6">{dish.price}</Typography>
      <Button variant="contained">Add to Cart</Button>
    </Card>
  ))}
</Box>

         
       </>  
        
    
  )
}
