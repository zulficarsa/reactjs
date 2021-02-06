import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Img from './Component/img'
import Main from './Component/main'
import Pro from './Component/porogram'


class App extends Component {
       render(){


    return (
      <BrowserRouter>
     <div className="App">
       <Img/>
     <Route exact path="/" component={Main}/>
     <Route exact path="/pro" component={Pro}/>
    
     </div>
      </BrowserRouter>
    );
  }
};

export default App;

