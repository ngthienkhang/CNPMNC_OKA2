import React,{ Component } from 'react';
import './../css/App.css';
import './../css/Danhsachxe.css';
import './../css/dn.css';
import './../css/dk.css';
import './../css/Lienhe.css';
import './../css/Aboutus.css';
import Navbar from './Navbar';
import Footer from './Footer';
import routes from './../routes';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        {this.showContentMenu(routes)}
        <Footer/>
      </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route,index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />);
      });
    }
    return <Switch>{result}</Switch>
   }
}

export default App;
