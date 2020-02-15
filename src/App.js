import React from 'react';
import './App.styl';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import routers from '@/router/index.js'

function App() {
  return (
    <Router>
      <Switch>
        {
          routers.map((item, index)=>{
            return <Route exact={item.exact} key={item.name} path={item.path} component={item.component}></Route>
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
