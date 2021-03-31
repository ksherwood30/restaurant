import {useState, useEffect} from 'react';
import axios from "axios";

// const pizza = {
//     size: [
//         "Small", "Medium", "Large"
//     ],
    
//     toppings: [
//         "Cheese", "Pepperoni", "Sausage", "Green Pepper", "Mushrooms", "olives", "Spinach", "Sweet Peppers", "Jalapenos"
//     ],

//     crust: [
//         "Regular", "Stuffed"
//     ]    
// }

export function FetchUserData(){
    axios.get("/pizza").then(response =>{
        response.data.map((name, index) => {
          return name;
        });     
        
      })
}