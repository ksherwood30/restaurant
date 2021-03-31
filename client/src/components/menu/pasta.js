import React, {useState, useEffect} from 'react';
import '../../scss/landing.scss';
import axios from "axios";

export  function Pasta({pastaIngredients}){    
  
  
  const [noodle, setNoodle] = useState("");
  const [activeNoodle, setActiveNoodle] = useState("");

  const [price, setPrice] = useState(0);

  const [sauce, setSauce] = useState([]);
  const [activeSauce, setActiveSauce] = useState([]);
  
  const [ingredients, setIngredients] = useState([]);

  const [pasta, setPasta] = useState([]);

  useEffect(() => {
    let x ="";
    axios.get("/pasta").then(response =>{
      response.data.map((name, index) => {
        x = name;
        console.log(x);
      });
      setPasta(x);
      
    })
    
    
    
  }, []);
  
  const addNoodle = ({ target }) => {
    const item = target.value;
    setNoodle(item); 
    setPrice(target.name); 
    setActiveNoodle(target.value);
    
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

  let noodleItems = "";
  let sauceItems = "";

  Object.entries(pasta).map(([key, val]) =>{
    if(key ==="noodle"){   
        noodleItems = pasta[key].map((name, index) =>
        Object.entries(name).map(([k, v]) =>
          <div key={name} className="col-sm-6 divTop">
            <button className={activeNoodle === k ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addNoodle} value={k} name={v} id={"size-" + k}>
              {k}
              <br></br>
              {v}
            </button>
          </div>
        )
      )
    }
    else if( key ==="sauce"){
      sauceItems = pasta[key].map((name, index) => 
        <div key={index} className="col-sm-6 divTop">
          <button className={activeSauce.includes(name) ? 'btn toppings btn-outline-primary active' : 'btn toppings btn-outline-primary'} onClick={addSauce} value={name} id={"topping-" + index} >{name}</button>
        </div>
      );
    }
  });


  const addItem = () => {
    if(noodle === "" ){
        alert("noodle required")
      }
    
    if(sauce.length === 0 ){
      alert("sauce required")
    }
    if(noodle !== "" && sauce.length > 0 ){
      setIngredients([{category: "Pasta"}, {noodle}, {sauce}, {price}]);
      setNoodle("");      
      setActiveNoodle("");
      setSauce([]);      
      setActiveSauce([]);
      setPrice(0);
    }    
    
  };

  useEffect(() => {
    pastaIngredients(ingredients, "Pasta");
  }, [ingredients]);


      return (
        <div>
            <div className="row">
                <div className="menuPadding">
                    <h3 className=""><b>Pasta Noodle</b></h3>
                </div>
                <div className="row menuPadding"> {noodleItems}</div>
                    
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

  