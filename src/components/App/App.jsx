// import React from 'react';
// import Axios from 'axios';
// import './App.css';

import React from 'react';
import './App.css';
import Feelings from './../Feelings/Feelings';
import Understanding from './../Understanding/Understanding';
import Support from './../Support/Support';
import Comments from './../Comments/Comments';
import Review from './../Review/Review';
import Success from './../Success/Success';
import {HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Route path='/' />
        <Route />
        <Route path='/Feelings' />
        <Feelings />
        <Route />
        <Route path='/Understanding' />
        <Understanding />
        <Route />
        <Route path='/Support' />
        <Support />
        <Route />

        {/* <Route exact path='/Comments' component={Comments} />
        <Route exact path='/Review' component={Review} />
        <Route exact path='/Success' component={Success} />  */}
      </header>
    </div>
    </Router>
  );
}

export default App;
