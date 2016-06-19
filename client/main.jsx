import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import CharacterPanel from './views/pages/CharacterPanel'


function App() {
  return <Router history={ browserHistory }>
    <Route path="/" component={ CharacterPanel } />    
    <Route path="/characters" component={ CharacterPanel } />    
  </Router>
}


Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
