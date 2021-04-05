import { getByTitle } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import '../../scss/checkout.scss'; 
import pizza from '../../images/pizza.jpg';
import burger from '../../images/burger.jpg';
import wings from '../../images/wings.jpg';
import pasta from '../../images/pasta.jpg';
import {Link} from 'react-router-dom';
// import { Burgers } from './burgers';

export function Checkout(){    
  
  const [cart, setCart] = useState([]);
  

    useEffect(() => {
        if(localStorage.getItem('cart') !== null){               
            setCart(JSON.parse(localStorage.getItem('cart')));
            
        }

        
    }, []);

    let priceTotal = 0;
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
          priceTotal += Number(value);
          return <div className="cntrText"><b>{key.toUpperCase()}: </b> ${value}</div>
        }       
        else{                      
          return <div ><b>{key.toUpperCase()}: </b> {value}</div>
        }
        
      }
    }
   
    const handleDelete = (indx) => {    
        const x = JSON.parse(localStorage.getItem('cart'));
        x.splice(indx, 1);
        localStorage.setItem('cart', JSON.stringify(x));
        setCart(JSON.parse(localStorage.getItem('cart')));
      };

      const finish = () => {
        setCart([]); 
        localStorage.setItem('cart', JSON.stringify([]));
        window.location = '/';
      }

  return (
      <div className="container">          
          <div className="row menuPadding ">
              <div className="col-md-6">
                <div className="centerAlign"><h3><b>Cart</b></h3></div>
                    <div className="cartBorder">      
                    {cart === null || cart.length === 0 ? <p>Your cart is empty</p> : (
                        
                        cart.map((item, indx) => (
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
                    {cart.length !== 0 ?
                    <div>
                      <div className="cntrText">
                        <h3><b>TOTAL: </b>${priceTotal}</h3>
                      </div> 
                      <div>
                        <button onClick={finish} className="toppings btn btn-gold">Finish Order</button>
                      </div>
                    </div>
                      : 
                      <div></div>}
                           
                    </div>
              </div>
              <div className="col-md-6">
                <div className="centerAlign"><h3><b>Want to add some More?</b></h3></div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="centerAlign">Pizza</h4>
                        <Link to="/pizza" className="">
                            <img className="card-img-top" src={pizza} alt="pizza "/>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <h4 className="centerAlign">Burgers</h4>
                        <Link to="/burgers" className="">
                            <img className="card-img-top" src={burger} alt="pizza "/>
                        </Link>
                    </div>        
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="centerAlign">Wings</h4>
                        <Link to="/wings" className="">
                            <img className="card-img-top" src={wings} alt="pizza "/>
                        </Link>
                    </div>
                    <div className="col-md-6 ">
                        <h4 className="centerAlign">Pasta</h4>
                        <Link to="/pasta" className="">
                            <img className="card-img-top " src={pasta} alt="pizza "/>
                        </Link>
                    </div>      
                </div>
                
              </div>
            
        </div>
      </div>
    
    
  );


  }

  