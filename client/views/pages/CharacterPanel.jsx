import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Characters } from '../../../imports/collections'

import Page from './Page'
import CharacterList from '../CharacterList'
import Spinner from '../Spinner'


export default class CharacterPanel extends Page {

  renderContent() {
    const { characters } = this.props

    if (! characters) {
      return <Spinner />
    }

    return <CharacterList characters={ characters } />
  }

}


function getData() {
  Meteor.subscribe('characters')

  return {
    characters: Characters.find({}).fetch(),
  }
}


export default createContainer(getData, CharacterPanel);
