import React from 'react';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.css';

import Home from './component/Home';
import SO2 from "./component/SO2";
import NO2 from "./component/NO2";
import CO from "./component/CO";
import PM10 from "./component/PM10";
import O3 from "./component/O3";
import HavaKalitesi from "./component/HavaKalitesi";
import Analizler from "./component/Analizler";
import FotografGalery from "./component/FotografGalery";
import Hakkimda from "./component/Hakkimda";

const history=createBrowserHistory();

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
          <Router history={history}>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/so2" component={SO2} /> 
          <Route exact path="/no2" component={NO2} /> 
          <Route exact path="/co" component={CO} /> 
          <Route exact path="/pm10" component={PM10} /> 
          <Route exact path="/o3" component={O3} /> 
          <Route exact path="/hkinedir" component={HavaKalitesi} /> 
          <Route exact path="/analizler" component={Analizler} /> 
          <Route exact path="/fotogalery" component={FotografGalery} /> 
          <Route exact path="/hakkimda" component={Hakkimda} /> 

          </Router>
          
      

      
      </div>
    );
  }
  
  }
  
export default App;