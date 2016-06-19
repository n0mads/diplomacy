import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import CharacterPanel from './views/pages/CharacterPanel'


function App() {
  return <div className="container">
    <CharacterPanel />
  </div>
}


Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
