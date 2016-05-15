import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import CharacterList from './views/CharacterList'
import CharacterForm from './views/CharacterForm'


function App() {
  return <div className="container">
    <CharacterForm />
    <CharacterList />
  </div>
}


Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
