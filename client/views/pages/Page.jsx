import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Sidebar from '../layout/Sidebar'
import View from '../View'


export default class Page extends View {

  getChildContext() {
    const location = Object.assign({}, this.props.location)
    location.params = this.props.routeParams

    return { location }
  }

}


Page.childContextTypes = {
  location: React.PropTypes.object
}