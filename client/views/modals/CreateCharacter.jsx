import React from 'react'

import Modal from './Modal'
import CharacterForm from '../CharacterForm'


export default class CreateCharacter extends Modal {

  renderTitle() {
    return <span>Crear Personaje</span>
  }

  renderContent() {
    return <CharacterForm />
  }
}