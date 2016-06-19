import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Characters } from '../../imports/collections'

import { View } from './View'


class CharacterList extends React.Component {

  render() {
    const { characters } = this.props

    return <div className="character-list">{
      characters.map(this.renderItem)
    }</div>
  }

  renderItem(character, index) {
    return <div className="character-item" key={ index }>
      <img src={ character.avatar } className="avatar pull-left" alt={ character.name } />
      <p className="name">{ character.name }</p>
      <p className="title">{ character.title }</p>
      <div className="clearfix" />
    </div>
  }

}


function getData() {
  Meteor.subscribe('characters')

  return {
    characters: Characters.find({}).fetch(),
  }
}


export default createContainer(getData, CharacterList);
