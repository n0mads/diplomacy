import React from 'react'

import View from './View'
import CharacterCard from './CharacterCard'


export default class CharacterList extends View {

  render() {
    const { characters } = this.props

    return <div className="character-list">{
      characters.map(this.renderItem)
    }</div>
  }

  renderItem(character, index) {
    return <CharacterCard character={ character } key={ index } />
  }

}