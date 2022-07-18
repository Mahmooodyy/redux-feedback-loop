import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';


import './App.css';


import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  
  return (
    <div className='App'>
      
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <main className='App-main'>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/question1">
            <Feeling />
          </Route>
          <Route path="/question2">
            <Understanding />
          </Route>
          <Route path="/question3">
              <Support />
          </Route>
          <Route path="/question4">
            <Comments />
          </Route>
          <Route path="/reviewFeedback">
            <ReviewFeedback />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;