import React from 'react'

import View from './View'


export default class CharacterList extends View {

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