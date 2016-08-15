import React from 'react'

import View from './View'


export default class CharacterCard extends View {

  render() {
    const { character } = this.props

    return <div className="character-card panel panel-default">
      <div className="panel-body">
        <img src={ character.picture } className="avatar pull-left m-r" alt={ character.name } />

        <h3 className="name">{ character.name }</h3>
        <p className="title">{ character.description }</p>

        <div className="clearfix" />
      </div>
    </div>
  }

}
