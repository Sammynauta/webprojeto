import React from 'react'
import Navbar from './componentes/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Services from './componentes/pages/Services';
import Home from './componentes/pages/Home';
import ContactUs from './componentes/pages/Contact';
import Products from './componentes/pages/Products';
import SignUp from './componentes/pages/SignUp';
import Marketing from './componentes/pages/Marketing';
import Consulting from './componentes/pages/Consulting';
import Development from './componentes/pages/Development';
import Design from './componentes/pages/Design';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/products' exact component={Products} />
          <Route path='/design' exact component={Design} />
          <Route path='/development' exact component={Development} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/marketing' exact component={Marketing} />
          <Route path='/consulting' exact component={Consulting} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
