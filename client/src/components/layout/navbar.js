import React from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends React.Component {    
    render() {
      return (
        <div>          
          <nav class="navbar navbar-expand-lg navbarColor navbar-light">
            <Link to="/" className="navbar-brand logo">Great Plates</Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <Link to="/pizza" className="nav-item nav-link" >Pizza</Link>
              <Link to="/burgers" className="nav-item nav-link" >Burgers</Link>
              <Link to="/wings" className="nav-item nav-link" >Wings</Link>
              <Link to="/pasta" className="nav-item nav-link" >Pasta</Link>
              <Link to="/checkout" className="nav-item nav-link" >Checkout</Link>
              </div>
            </div>
          </nav>
          
        </div>
      );
    }
  }