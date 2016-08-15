import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import View from '../View'


class Sidebar extends View {

  render() {
    return <div id="sidebar">
      <SidebarLink to="/characters" label="Characters" />
      <SidebarLink to="/resources" label="Resources" />
    </div>
  }
}


function getData() {
  return {}
}


export default createContainer(getData, Sidebar);


class SidebarLink extends View {

  render() {
    const { to, label } = this.props
    const { location } = this.context
    
    const activePath = '/' + location.pathname.split('/')[1]
    const isActive = (activePath === to)

    return <Link className="sidebar-link" to={ to }>
      <div className={ 'btn btn-block ' + (isActive ? 'btn-primary' : 'btn-default') }>
        { label }
      </div>
    </Link>
  }
}


SidebarLink.contextTypes = {
  location: React.PropTypes.object
}