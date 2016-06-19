import React from 'react'
import { Link } from 'react-router'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { getActiveModal, closeModal } from '../../imports/modals'

import View from '../View'
import Sidebar from './Sidebar'


class Dashboard extends View {

  render() {
    const { children, activeModal } = this.props

    return <div id="dashboard" className="container">
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>

        <div className="col-sm-9">{ children }</div>
      </div>

      { activeModal &&
        <div id="modal-container" onClick={ this.onModalBackgroundClick }>{ activeModal }</div>
      }
    </div>
  }

  onModalBackgroundClick(event) {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }
}


function getData() {
  return {
    activeModal: getActiveModal()
  }
}


export default createContainer(getData, Dashboard);