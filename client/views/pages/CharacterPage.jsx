import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Characters } from '../../../imports/collections'
import { openModal } from '../../imports/modals'

import Page from './Page'
import Modal from '../Modal'
import Spinner from '../Spinner'
import Dashboard from '../layout/Dashboard'
import CharacterDetail from '../CharacterDetail'

import AssignResourceForm from '../AssignResourceForm'


class CharacterPage extends Page {

  render() {
    const { character } = this.props

    if (! character) {
      return <Spinner />
    }

    return <Dashboard>
      <div className="btn-group m-b" role="group" aria-label="...">
        <div className="btn btn-primary" onClick={ this.onAssignClick }>Asignar Recurso</div>
      </div>

      <CharacterDetail character={ character } />
    </Dashboard>
  }

  onAssignClick() {
    const { character } = this.props

    openModal(<Modal title="Asignar recurso">
      <AssignResourceForm characterId={ character._id } />
    </Modal>)
  }
}


function getData(props) {
  const characterId = props.params.characterId

  Meteor.subscribe('characters', [ characterId ])

  return {
    character: Characters.findOne({ _id: characterId })
  }
}


export default createContainer(getData, CharacterPage);
