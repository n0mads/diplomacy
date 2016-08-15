import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Characters } from '../../../imports/collections'
import { openModal } from '../../imports/modals'

import Page from './Page'
import Modal from '../Modal'
import Spinner from '../Spinner'
import Dashboard from '../layout/Dashboard'
import CharacterList from '../CharacterList'
import CharacterForm from '../CharacterForm'
import AssignResourceForm from '../AssignResourceForm'


export default class CharacterPanel extends Page {

  render() {
    const { characters } = this.props

    if (! characters) {
      return <Spinner />
    }

    return <Dashboard>
      <div className="btn-group m-b" role="group" aria-label="...">
        <div className="btn btn-success" onClick={ this.onCreateClick }>Crear Personaje</div>
        <div className="btn btn-primary" onClick={ this.onAssignClick }>Asignar Recurso</div>
      </div>

      <CharacterList characters={ characters } />
    </Dashboard>
  }

  onCreateClick() {
    openModal(<Modal title="Crear personaje"><CharacterForm /></Modal>)
  }

  onAssignClick() {
    openModal(<Modal title="Asignar recurso"><AssignResourceForm /></Modal>)
  }
}

function getData() {
  Meteor.subscribe('characters')

  return {
    characters: Characters.find({}).fetch(),
  }
}


export default createContainer(getData, CharacterPanel);
