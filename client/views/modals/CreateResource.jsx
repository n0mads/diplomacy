import React from 'react'

import Modal from './Modal'
import ResourceForm from '../ResourceForm'


export default class CreateResource extends Modal {

  renderTitle() {
    return <span>Crear Recurso</span>
  }

  renderContent() {
    return <ResourceForm />
  }
}
