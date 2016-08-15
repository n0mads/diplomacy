import 'react-select/dist/react-select.css'

import React from 'react'

import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import CharacterPanel from './views/pages/CharacterPanel'
import CharacterPage from './views/pages/CharacterPage'
import ResourcePanel from './views/pages/ResourcePanel'


function App() {
  return <Router history={ browserHistory }>
    <Route path="/" component={ CharacterPanel } />

    <Route path="/characters" component={ CharacterPanel } />
    <Route path="/character/:characterId" component={ CharacterPage } />

    <Route path="/resources" component={ ResourcePanel } />
  </Router>
}


Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
