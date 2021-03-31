import React, {useState, useEffect} from 'react';
import '../../scss/landing.scss';
import axios from "axios";


export  function Pizza({pizzaIngredients}){    
  
  
  const [size, setSize] = useState("");
  const [activeSize, setActiveSize] = useState("");

  const [price, setPrice] = useState(0);

  const [toppings, setToppings] = useState([]);
  const [activeToppings, setActiveToppings] = useState([]);

  const [crust, setCrust] = useState("");
  const [activeCrust, setActiveCrust] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [pza, setPza] = useState([]);
;
 
  useEffect(() => {
    let x ="";
    axios.get("/pizza").then(response =>{
      response.data.map((name, index) => {
        x = name;
      });
      setPza(x);
      
    })
    
    
    
  }, []);
  
  
  const addSize = ({target} ) => {    
    const item = target.value;  
    setSize(item);
    setPrice(target.name); 
    setActiveSize(target.value);
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

  const addCrust = ({ target }) => {
    // if(target.id === "crust-0"){
    //   target.className = "btn toppings btn-outline-primary active";
    //   document.getElementById("crust-1").className="btn toppings btn-outline-primary ";     
    // }
    // else if(target.id === "crust-1"){
    //   target.className = "btn toppings btn-outline-primary active";
    //   document.getElementById("crust-0").className="btn toppings btn-outline-primary ";
    // }
    
    const item = target.value;    
    setCrust(item);
    setActiveCrust(target.value);
  };

  let sizeItems = "";
  let crustItems = "";
  let toppingItems = "";
  
  Object.entries(pza).map(([key, val]) =>{
    if(key ==="size"){      
      sizeItems = pza[key].map((name, index) =>
        Object.entries(name).map(([k, v]) =>
          <div key={name} className="col-sm-6 divTop">
            <button className={activeSize === k ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addSize} value={k} name={v} id={"size-" + k}>
              {k}
              <br></br>
              {v}
            </button>
          </div>
        )
      )
      
      // sizeItems = key.map((name, index) => 
      //   <div key={index} className="col-sm-4 ">
      //     <button className={activeSize === name ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addSize} value={name} id={"size-" + index}>{name}</button>
      //   </div>
      // );
    }
    else if( key ==="toppings"){
      toppingItems = pza[key].map((name, index) => 
        <div key={index} className="col-sm-6 divTop">
          <button className={activeToppings.includes(name) ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addTopping} value={name} id={"topping-" + index} >{name}</button>
        </div>
      );
      // const toppingItems = key.map((name, index) => 
      //   <div key={index} className="col-sm-6 divTop">
      //     <button className={activeToppings.includes(name) ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addTopping} value={name} id={"topping-" + index} >{name}</button>
      //   </div>
      // );
    }
    else if(key === "crust"){
      crustItems = pza[key].map((name, index) => 
        <div key={index} className="col-sm-6 divTop">
          <button className={activeCrust === name ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addCrust} value={name} id={"crust-" + index}>{name}</button>
        </div>
      );
      // const crustItems = key.map((name, index) => 
      //   <div key={index} className="col-sm-4">
      //     <button className={activeCrust === name ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addCrust} value={name} id={"crust-" + index}>{name}</button>
      //   </div>
      // );
    }
  });
  
  
  

  const addItem = () => {
    if(size === "" ){
      alert("size required")
    }
    if(crust === "" ){
      alert("crust required")
    }
    if(toppings.length === 0 ){
      alert("toppings required")
    }
    if(size !== "" && toppings.length > 0 && crust !== ""){
      setIngredients([{category: "Pizza"},{size}, {crust}, {toppings}, {price}]);
      setSize("");
      setPrice(0);
      setToppings([]);
      setCrust("");
      setActiveSize("");
      setActiveToppings([]);
      setActiveCrust("");
    }    
    
  };

  useEffect(() => {
    pizzaIngredients(ingredients, "Pizza");
  }, [ingredients]);


      return (
        <div>
            <div className="row">
                <div className="menuPadding">
                    <h3 className="fontcolor"><b>Size</b></h3>
                </div>
                <div className="row menuPadding"> {sizeItems}</div>
                    
            </div>
            
            <div className="row">
                <div className="menuPadding">
                    <h3><b>Crust</b></h3>
                </div>
                <div className="row menuPadding"> {crustItems}</div>
            </div>
            <div className="row ">
                <div className="menuPadding">
                    <h3><b>Toppings</b></h3>               
                </div>
                <div className="row menuPadding"> {toppingItems}</div>
            </div>
            <div className="row">
                <div className=" cartBtn"><button className="cartBtn toppings btn btn-gold" onClick={addItem}>Add to cart</button></div>                
              </div>
        </div>
      );
    
  }

  