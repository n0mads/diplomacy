import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Resources } from '../../../imports/collections'
import { openModal } from '../../imports/modals'

import Page from './Page'
import Dashboard from '../layout/Dashboard'
import ResourceList from '../ResourceList'
import CreateResource from '../modals/CreateResource'
import Spinner from '../Spinner'


export default class ResourcePanel extends Page {

  render() {
    const { resources } = this.props

    if (! resources) {
      return <Spinner />
    }
    console.log(resources)
    return <Dashboard>
      <div className="btn-group m-b" role="group" aria-label="...">
        <div className="btn btn-success" onClick={ this.onCreateClick }>Create</div>
      </div>

      <ResourceList resources={ resources } />
    </Dashboard>
  }

  onCreateClick() {
    openModal(<CreateResource />)
  }
}

function getData() {
  Meteor.subscribe('resources')

  return {
    resources: Resources.find({}).fetch(),
  }
}


export default createContainer(getData, ResourcePanel);
