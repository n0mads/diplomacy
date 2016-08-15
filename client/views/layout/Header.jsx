import React from 'react'
import { Link } from 'react-router'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import View from '../View'


class Header extends View {

  render() {
    return <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Diplomacy</a>
        </div>
      </div>
    </nav>
  }
}


function getData() {
  return {}
}


export default createContainer(getData, Header);