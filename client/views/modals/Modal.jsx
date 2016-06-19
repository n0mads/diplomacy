import React from 'react'

import { closeModal } from '../../imports/modals'

import View from '../View'


export default class Modal extends View {

  render() {
    return <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={ this.onCloseClick }>&times;</button>
          <h4 className="modal-title">{ this.renderTitle() }</h4>
        </div>

        <div className="modal-body">
          <div className="col-xs-12">{ this.renderContent() }</div>
          <div className="clearfix" />
        </div>

        { this.renderFooter &&
          <div className="modal-footer">{ this.renderFooter() }</div>
        }
      </div>
    </div>
  }

  onCloseClick() {
    closeModal()
  }
}