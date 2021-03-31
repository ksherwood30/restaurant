import React, {useState, useEffect} from 'react';
import '../../scss/landing.scss';
import axios from "axios";

export  function Burgers({burgerIngredients}){    
  
  
  const [condiments, setCondiments] = useState([]);
  const [activecondiments, setActiveCondiments] = useState([]);

  const [price, setPrice] = useState(0);

  const [toppings, setToppings] = useState([]);
  const [activeToppings, setActiveToppings] = useState([]);

  const [patty, setPatty] = useState("");
  const [activePatty, setActivePatty] = useState("");
  
  const [ingredients, setIngredients] = useState([]);

  const [brgr, setBrgr] = useState([]);

  useEffect(() => {
    let x ="";
    axios.get("/burgers").then(response =>{
      response.data.map((name, index) => {
        x = name;
      });
      setBrgr(x);
      
    })
    
    
    
  }, []);
  
  const addCondiment = ({ target }) => {
    const item = target.value;
    
    if(condiments.includes(target.value)){
        setCondiments((prev) => {
            return prev.filter((item) => item !== target.value);
        }); 
        setActiveCondiments((prev) => {
            return prev.filter((item) => item !== target.value);
        }); 
    }
    else{
        setCondiments(prev => [item, ...prev]); 
        setActiveCondiments(prev => [item, ...prev]); 
    }
    
  };

  const addTopping = ({ target }) => {
    const item = target.value;
    
    if(toppings.includes(target.value)){
        setToppings((prev) => {
            return prev.filter((item) => item !== target.value);
        }); 
        setActiveToppings((prev) => {
            return prev.filter((item) => item !== target.value);
        }); 
    }
    else{
        setToppings(prev => [item, ...prev]); 
        setActiveToppings(prev => [item, ...prev]); 
    }
    
  };

  const addPatty = ({target} ) => {    
    const item = target.value;  
    setPatty(item); 
    setActivePatty(target.value);
    setPrice(target.name);
  };

  let condimentItems = "";
  let toppingItems = "";
  let pattyItems = "";

  Object.entries(brgr).map(([key, val]) =>{
    if(key ==="condiments"){   
      condimentItems = brgr[key].map((name, index) => 
        <div key={"condiments-" + index} className="col-sm-6 divTop">
          <button className={activecondiments.includes(name) ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addCondiment} value={name} id={"condiments-" + index} >{name}</button>
        </div>
      );
    }
    else if( key ==="toppings"){
      toppingItems = brgr[key].map((name, index) => 
        <div key={"toppings-" + index} className="col-sm-6 divTop">
          <button className={activeToppings.includes(name) ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addTopping}  value={name} id={"topping-" + index} >{name}</button>
        </div>
      );
    }
    else if( key ==="patties"){
      pattyItems = brgr[key].map((name, index) =>
        Object.entries(name).map(([k, v]) =>
          <div key={k} className="col-sm-6 ">
            <button className={activePatty === k ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addPatty} value={k} name={v} id={"size-" + k}>
              {k}
              <br></br>
              {v}
            </button>
          </div>
        )
      )
    }
  });


  const addItem = () => {
    if(condiments.length === 0 ){
        alert("condiments required")
      }
    
    if(toppings.length === 0 ){
      alert("toppings required")
    }
    if(condiments.length > 0 && toppings.length > 0 ){
      setIngredients([{category: "Burger"},{patty},{condiments}, {toppings}, {price}]);
      setPatty("");
      setActivePatty("");
      setCondiments([]);      
      setActiveCondiments([]);
      setToppings([]);      
      setActiveToppings([]);
      setPrice(0);
    }    
    
  };

  useEffect(() => {
    burgerIngredients(ingredients, "Burger");
  }, [ingredients]);


      return (
        <div>
          <div className="row">
                <div className="menuPadding">
                    <h3 className=""><b>Number of Patties</b></h3>
                </div>
                <div className="row menuPadding"> {pattyItems}</div>
                    
            </div>
            <div className="row">
                <div className="menuPadding">
                    <h3 className=""><b>Condiments</b></h3>
                </div>
                <div className="row menuPadding"> {condimentItems}</div>
                    
            </div>
            <div className="row">
                <div className="menuPadding">
                    <h3><b>Toppings</b></h3>               
                </div>
                <div className="row menuPadding"> {toppingItems}</div>
            </div>
            <div className="row">
                <div className="col-sm-3 menuPadding"><button className="toppings btn btn-gold" onClick={addItem}>Add to cart</button></div>                
              </div>
        </div>
      );
    
  }

  