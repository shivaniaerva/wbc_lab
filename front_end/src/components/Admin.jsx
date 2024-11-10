import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { Box, Button, Card, CardMedia, Container, TextField, Typography,Select,MenuItem} from '@mui/material'
import Form from './Form'
import { db } from '../firebase_config';
import { doc, deleteDoc } from "firebase/firestore";
import Nav from './Nav';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

 
const Admin = () => {
  const [fooditems,setfood]=useState([]);
  const [sfilter,setfilter]=useState("");
  const [filterdfoodarray,setfil]=useState([]);
  const [selcat,setcat]=useState("");
  const [bool,setbool]=useState(false);
const getdata=async()=>{
       

const querySnapshot = await getDocs(collection(db, "food"));
let listfood=[];
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
const foodcard={
  id:doc.id,
  ...doc.data()
}
listfood.push(foodcard);
console.log(doc.id, " => ", doc.data());
});
setfood(listfood);
setfil(listfood);
   }

   const applyFilters = () => {
    let filteredFood = fooditems.filter((item) => {
      const matchesName = item.name.toLowerCase().includes(sfilter.toLowerCase());
      const matchesCategory = selcat === "" || item.course === selcat;
      if(!bool){
        return matchesName && matchesCategory;
      }
      const matchesToggle = item.toogle===true;
      return  matchesName && matchesCategory&&matchesToggle; 
       
    });
  
    setfil(filteredFood);
  };
  const deleteitem = async (id) => {
    await deleteDoc(doc(db, "food", id));
    getdata();
  };

  useEffect(() => {
    getdata();
  }, []);
  
  useEffect(() => {
    applyFilters();
  }, [sfilter, selcat, bool]);  
  
return (
  <div>
    <Nav/>
    <Form/>
    <h1>Menu</h1>
     <Container sx={ { 
      marginTop: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap',
     } }>
       
      <TextField label="Search by Item Name"
        variant="outlined"
        
        onChange={e =>setfilter(e.target.value)}
        sx={{ marginBottom: '20px' }}>

      </TextField>
      <FormControlLabel
    control={<Switch checked={bool} onChange={(e)=>setbool(e.target.checked)} />}
     
  />
      <Select  value={selcat} displayEmpty onChange={(e)=>setcat(e.target.value)}>sdft
      <MenuItem value="">All Catergory</MenuItem>
      <MenuItem value="main-course">Main-Course</MenuItem>
      <MenuItem value="starters">Starters</MenuItem>
      <MenuItem value="dessert">Desserts</MenuItem>
      <MenuItem value="beverages">Beverages</MenuItem>
      </Select>
       
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
{filterdfoodarray.map((dish, index) => (
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
      image={dish.img}
      alt={dish.itemname}
    />
    <Typography variant="h6">{dish.name}</Typography>
    <Typography variant="body1">{dish.course}</Typography>
    {dish.toggle ? (
<Typography variant="h6">Vegetarian</Typography>
) : (
<Typography variant="h6">Non-Vegetarian</Typography>
)}

  <Typography variant="body1">₹{dish.price}</Typography>\
  
  <Button variant="contained" onClick={()=>deleteitem(dish.id)}>Delete</Button>
     
     
  </Card>
))}
</Box> 
  </div>
)
}

 

export default Admin
 
 
       