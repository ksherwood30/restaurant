import React, {useState, useEffect} from 'react';
import '../../scss/cart.scss'; 
import {Link} from 'react-router-dom';

export function Cart(props){    
  
  const [cart, setCart] = useState([]);
  const [name, setName] = useState(""); 
  const [store, setStore] = useState([]);   

    useEffect(() => {
      if(props.cartItems.length != 0){        
        // setCart(prev => [props.cartItems, ...prev]);  
        setCart([props.cartItems]); 
       
      }
      
    }, [props.cartItems]);

    useEffect(() => {
      if(cart.length !== 0){        
        if(localStorage.getItem('cart') === null){
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        else{          
          // setStore([JSON.parse(localStorage.getItem('cart'))]); 
          // setStore(prev => [cart, ...prev]);
          const old = JSON.parse(localStorage.getItem('cart'));
          
          old.push(cart[0]);
          localStorage.setItem('cart', JSON.stringify(old));
          
        }
        setStore(JSON.parse(localStorage.getItem('cart')));
        
      }
      else{

      }
      
    }, [cart]);


    // setStore(prev => [JSON.parse(localStorage.getItem('cart')), ...prev]); 
    //     setStore(prev => [cart, ...prev]);
    //     localStorage.setItem('cart', store);

    

    useEffect(() => {
      setName(props.pageName);     
      setStore(JSON.parse(localStorage.getItem('cart')));
    }, [props.pageName]);
    
    const checkType = (key, value) => {
      if (typeof(value) == "object"){
        return (
          <div >
            <b>{key.toUpperCase()}: </b>
            <ul>
              {value.map((item, index) =>
                <li key={index}>{item}</li>
              )}
            </ul>
          </div>
        )
      }
      else{
        if(key === "category"){
          return <div className="cntrText">{value}</div>
        }
        else if(key === "price"){
          return <div className="cntrText">Price: ${value}</div>
        }
        else{          
          return <div ><b>{key.toUpperCase()}: </b> {value}</div>
        }
        
      }
    }

  // const addItem = ({ target }) => {
  //   const item = target.value;
  //   setCart((prev) => {
  //     return [item, ...prev];
  //   });
  // };

  const handleDelete = (indx) => {    
    const x = JSON.parse(localStorage.getItem('cart'));
    x.splice(indx, 1);
    localStorage.setItem('cart', JSON.stringify(x));
    setCart([]); 
    setStore(JSON.parse(localStorage.getItem('cart')));
  };
  
  
  return (
    <div className="row menuPadding ">
      <div className="centerAlign"><h3><b>Cart</b></h3></div>
      <div className="cartBorder">      
      {store === null || store.length === 0 ? <p>Your cart is empty</p> : (
        
        store.map((item, indx) => (
          <div className="bottomBorder" key = {indx}>   
          <button className="rmvBtn" onClick={() => handleDelete(indx)}>Remove Item</button>         
          {item.map((itemName, index) => (
            Object.entries(itemName).map(([key, val]) => 
            <div key = {key} >  
              {checkType(key, val)}   
            </div>
            )
          ))} 
          </div>         
        ))
        
      )}
      {store.length !== 0 ? <div><Link to="/checkout" className=" toppings btn btn-gold" >Checkout</Link></div>: <div></div>} 
      
      </div>
    </div>
    
  );


  }

  