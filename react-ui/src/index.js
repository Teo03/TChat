import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {App} from './components/App.js';
import {Chat} from './components/Chat.js';

ReactDOM.render(
    <Router>
      <div>
      <Route exact path='/' component={App}/>
      <Route exact path='/chat' component={Chat}/>
      <Route exact path='/chat/:id' component={Chat}/>
      </div>
    </Router>
   ,
  document.getElementById('app')
);
