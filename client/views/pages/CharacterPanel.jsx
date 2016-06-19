import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Characters } from '../../../imports/collections'
import { openModal } from '../../imports/modals'

import Page from './Page'
import Dashboard from '../layout/Dashboard'
import CharacterList from '../CharacterList'
import CreateCharacter from '../modals/CreateCharacter'
import Spinner from '../Spinner'


export default class CharacterPanel extends Page {

  render() {
    const { characters } = this.props

    if (! characters) {
      return <Spinner />
    }

    return <Dashboard>
      <div className="btn btn-primary" onClick={ this.onCreateClick }>Create</div>
      <CharacterList characters={ characters } />
    </Dashboard>
  }

  onCreateClick() {
    openModal(<CreateCharacter />)
  }
}

function getData() {
  Meteor.subscribe('characters')

  return {
    characters: Characters.find({}).fetch(),
  }
}


export default createContainer(getData, CharacterPanel);
