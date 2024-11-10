// Form.jsx

import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase_config'; // Import db as a named import

const Form = () => {
  const [sname, setName] = useState("");
  const [sprice, setPrice] = useState(0);
  const [simg, setImg] = useState("");
  const [scourse, setCourse] = useState("");
  const [sveg, setVeg] = useState(false);

  // Add a new document to Firestore
  const add = async () => {
    try {
      console.log(sname, sprice);
      const docRef = await addDoc(collection(db, "food"), {
        name: sname,
        price: sprice,
        img: simg,
        course: scourse,
        toggle: sveg // Corrected field name for toggle
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Handle vegetarian toggle input
  const handleVegChange = (e) => {
    const value = e.target.value.toLowerCase();
    setVeg(value === "yes");
  };

  return (
    <div style={{ marginTop: '70px' }}>
      <input
        placeholder="Enter image URL"
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number" // Ensure price is a number
        placeholder="Enter price"
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input
        placeholder="Enter course"
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        placeholder="Is it vegetarian? (yes/no)"
        onChange={handleVegChange}
      />
      <button onClick={add}>Add Item</button>
    </div>
  );
}

export default Form;

