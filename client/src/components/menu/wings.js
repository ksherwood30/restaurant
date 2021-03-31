import React, {useState, useEffect} from 'react';
import '../../scss/landing.scss';
import axios from "axios";

export  function Wings({wingsIngredients}){    
  
  
  const [count, setCount] = useState("");
  const [price, setPrice] = useState(0);
  const [activecount, setActiveCount] = useState("");

  const [sauce, setSauce] = useState([]);
  const [activeSauce, setActiveSauce] = useState([]);
  
  const [ingredients, setIngredients] = useState([]);

  const [wing, setWing] = useState([]);

  useEffect(() => {
    let x ="";
    axios.get("/wings").then(response =>{
      response.data.map((name, index) => {
        x = name;
      });
      setWing(x);
      
    })
    
    
    
  }, []);
  
  const addCount = ({ target }) => {
    const item = target.value;
    setCount(item); 
    setActiveCount(target.value);
    setPrice(target.name);
    
  };

  const addSauce = ({ target }) => {
    const item = target.value;
    
    if(sauce.includes(target.value)){
        setSauce((prev) => {
            return prev.filter((item) => item !== target.value);
        }); 
        setActiveSauce((prev) => {
            return prev.filter((item) => item !== target.value);
        }); 
    }
    else{
        setSauce(prev => [item, ...prev]); 
        setActiveSauce(prev => [item, ...prev]); 
    }
    
  };

  let countItems = "";
  let sauceItems = "";

  Object.entries(wing).map(([key, val]) =>{
    if(key ==="count"){   
        countItems = wing[key].map((name, index) =>
        Object.entries(name).map(([k, v]) =>
          <div key={name} className="col-sm-6 divTop">
            <button className={activecount=== k ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addCount} name={v} value={k} id={"size-" + k}>
              {k}
              <br></br>
              {v}
            </button>
          </div>
        )
      )
    }
    else if( key ==="sauce"){
      sauceItems = wing[key].map((name, index) => 
        <div key={index} className="col-sm-6 divTop">
          <button className={activeSauce.includes(name) ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addSauce} value={name} id={"topping-" + index} >{name}</button>
        </div>
      );
    }
  });

  const addItem = () => {
    if(count === "" ){
        alert("Count required")
      }
    
    if(sauce.length === 0 ){
      alert("sauce required")
    }
    if(count !== "" && sauce.length > 0 ){
      setIngredients([{category: "Wings"}, {count}, {sauce},  {price}]);
      setCount("");      
      setActiveCount("");
      setSauce([]);      
      setActiveSauce([]);
      setPrice(0);
      
    }    
    
  };

  useEffect(() => {
    wingsIngredients(ingredients, "Wings");
  }, [ingredients]);


      return (
        <div>
            <div className="row">
                <div className="menuPadding">
                    <h3 className=""><b>Wing Count</b></h3>
                </div>
                <div className="row menuPadding"> {countItems}</div>
                    
            </div>
            
            
            <div className="row">
                <div className="menuPadding">
                    <h3><b>Sauce</b></h3>               
                </div>
                <div className="row menuPadding"> {sauceItems}</div>
            </div>
            <div className="row">
                <div className="col-sm-3 menuPadding"><button className="toppings btn btn-gold" onClick={addItem}>Add to cart</button></div>                
              </div>
        </div>
      );
    
  }

  