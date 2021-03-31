import React, {useState, useEffect} from 'react';
import '../../scss/landing.scss'; 
import {Pizza} from './pizza';
import {Burgers} from './burgers';
import {Wings} from './wings';
import {Pasta} from './pasta';
// import {Tacos} from './tacos';
// import {Sides} from './sides';

import {Cart} from './cart';

export default function Centermenu(props){    
  
  const [cart, setCart] = useState([]); 
  const [name, setName] = useState("");  
  // const [ingredients, setIngredients] = useState();
  
  const addToCart = (ingredients, name) => {    
    setCart(ingredients);
    setName(name);    
  };

  const pageFinder = (props) => {
    if(props.page=== "pizza"){
      return <Pizza pizzaIngredients={addToCart} />
    }
    else if(props.page=== "burgers"){
      return <Burgers burgerIngredients={addToCart} />
    }
    else if(props.page=== "wings"){
      return <Wings wingsIngredients={addToCart} />
    }
    else if(props.page=== "pasta"){
      return <Pasta pastaIngredients={addToCart} />
    }
    // else if(props.page=== "tacos"){
    //   return <Tacos tacoIngredients={addToCart} />
    // }
    // else if(props.page=== "sides"){
    //   return <Sides sidesIngredients={addToCart} />
    // }
  };
  
  
  


      return (
        <div className="container">
          <div className="row cntrMenuPadd">
            <div className="col-md-9">
              {pageFinder(props)}
                    
            </div>
            <div className="col-md-3">
              <div className="row ">
                <Cart cartItems={cart} pageName={name}/>
              </div>
            </div>
          </div>
        </div>
      );
    
  }

  