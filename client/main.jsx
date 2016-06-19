import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import CharacterList from './views/CharacterList'
import CharacterForm from './views/CharacterForm'
import ResourceForm from './views/ResourceForm'


function App() {
  return <div className="container">
    <ResourceForm />
    <CharacterForm />
    <CharacterList />
  </div>
}


Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
