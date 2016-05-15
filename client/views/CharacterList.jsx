import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Characters } from '../../imports/collections'


class CharacterList extends Component {

  render() {
    return <pre>{ JSON.stringify(this.props.characters, null, 2) }</pre>
  }

}


function getData() {
  Meteor.subscribe('characters')

  return {
    characters: Characters.find({}).fetch(),
  }
}


export default createContainer(getData, CharacterList);
