import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import View from './View'
import ResourceCard from './ResourceCard'
import CharacterCard from './CharacterCard'


class CharacterDetail extends View {

  render() {
    const { character, resources } = this.props

    return <div className="character-detail">
      <CharacterCard character={ character } />

      <div className="resources">
        {resources.map(this.renderResource)}
      </div>
    </div>
  }

  renderResource(resource, index) {
    return <ResourceCard resource={ resource } key={ index } />
  }
}


function getData(props) {
  const { character } = props
  const resourceIds = character.resources.map(resource => resource._id)

  console.log('here', resourceIds)
  console.log('here', Resources.find({ _id: {$in: resourceIds} }).fetch())

  Meteor.subscribe('resources', resourceIds)

  return {
    resources: Resources.find({ _id: {$in: resourceIds} }).fetch()
  }
}


export default createContainer(getData, CharacterDetail);
