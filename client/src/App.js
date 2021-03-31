
import './scss/App.scss';
import  {Navbar} from './components/layout/navbar';
import  {Landing} from './landing';
import  {Checkout} from './components/menu/checkout';
import  Centermenu from './components/menu/centermenu';

import  {Footer} from './components/layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    // <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/pizza"  render={(props) => <Centermenu page="pizza" {...props} />}/>
          <Route exact path="/burgers" render={(props) => <Centermenu page="burgers" {...props} />}/>
          <Route exact path="/wings" render={(props) => <Centermenu page="wings" {...props} />}/>
          <Route exact path="/pasta" render={(props) => <Centermenu page="pasta" {...props} />}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>
        {/* <Route path="/tacos" render={(props) => <Centermenu page="tacos" {...props} />}/>
        <Route path="/sides" render={(props) => <Centermenu page="sides" {...props} />}/> */}
        <Footer/>      
      </div>
    // </Router>
    
  );
}

export default App;
