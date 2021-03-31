
import './scss/App.scss';
import  {Navbar} from './components/layout/navbar';
import  {Landing} from './landing';
import  {Checkout} from './components/menu/checkout';
import  Centermenu from './components/menu/centermenu';

import  {Footer} from './components/layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <Route path="/pizza"  render={(props) => <Centermenu page="pizza" {...props} />}/>
        <Route path="/burgers" render={(props) => <Centermenu page="burgers" {...props} />}/>
        <Route path="/wings" render={(props) => <Centermenu page="wings" {...props} />}/>
        <Route path="/pasta" render={(props) => <Centermenu page="pasta" {...props} />}/>
        <Route path="/checkout" component={Checkout}/>
        {/* <Route path="/tacos" render={(props) => <Centermenu page="tacos" {...props} />}/>
        <Route path="/sides" render={(props) => <Centermenu page="sides" {...props} />}/> */}
        <Footer/>      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
