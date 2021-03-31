import React from 'react';
import  {Coupons} from './components/coupons';
// import './App.scss'; 
import './scss/landing.scss'; 
import pizza from './images/pizza.jpg';
import burger from './images/burger.jpg';
import wings from './images/wings.jpg';
import pasta from './images/pasta.jpg';
import tacos from './images/tacos.jpg';
import sides from './images/sides.jpg';

export class Landing extends React.Component {    


    render() {
      return (
        <div>
            
            <div className="container" >                
                <div className="row space-out"> 
                    <div className="col-md-6 divTop">
                        <a href="/pizza" className="">
                            <div className="card enlarge" >
                                <img className="card-img-top" src={pizza} alt="pizza "/>
                                <div className="card-body">
                                    <h5 className="card-title">Pizza</h5>
                                    <p className="card-text">Cheesy, melty, tasty. Never a bad time for some pizza</p>                                
                                </div>
                            </div>
                        </a>
                        
                    </div>
                    <div className="col-md-6 divTop">
                        <a href="/burgers">
                            <div className="card enlarge" >
                                <img className="card-img-top" src={burger} alt="burger"/>
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p className="card-text">Think of all those toppings</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </a>
                        
                    </div>
                    
                </div>
                <div className="row space-out">
                    <div className="col-md-6 divTop">
                        <a href="/wings">
                            <div className="card enlarge">
                                <img className="card-img-top" src={wings} alt="wings"/>
                                <div className="card-body">
                                    <h5 className="card-title">Wings</h5>
                                    <p className="card-text">Cripsy, spicy, smokey, you name it</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </a>
                    </div> 
                    <div className="col-md-6 divTop">
                        <a href="/pasta">
                            <div className="card enlarge" >
                                <img className="card-img-top" src={pasta} alt="pasta "/>
                                <div className="card-body">
                                    <h5 className="card-title">Pasta</h5>
                                    <p className="card-text">Just like its sunday dinner</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>



                
            </div>  
        </div>
      );
    }
  }

  