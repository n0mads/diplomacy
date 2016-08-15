import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Resources } from '../../../imports/collections'
import { openModal } from '../../imports/modals'

import Page from './Page'
import Modal from '../Modal'
import Spinner from '../Spinner'
import Dashboard from '../layout/Dashboard'
import ResourceList from '../ResourceList'
import ResourceForm from '../ResourceForm'


export default class ResourcePanel extends Page {

  render() {
    const { resources } = this.props

    if (! resources) {
      return <Spinner />
    }

    return <Dashboard>
      <div className="btn-group m-b" role="group" aria-label="...">
        <div className="btn btn-success" onClick={ this.onCreateClick }>Create</div>
      </div>

      <ResourceList resources={ resources } />
    </Dashboard>
  }

  onCreateClick() {
    openModal(<Modal title="Crear recurso"><ResourceForm /></Modal>)
  }
}

function getData() {
  Meteor.subscribe('resources')

  return {
    resources: Resources.find({}).fetch(),
  }
}


export default createContainer(getData, ResourcePanel);
