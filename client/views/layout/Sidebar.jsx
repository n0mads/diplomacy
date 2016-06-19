import React from 'react'
import { Link } from 'react-router'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import View from '../View'


class Sidebar extends View {

  render() {
    return <ul className="nav nav-pills nav-stacked">
      <SidebarLink to="/characters" label="Personajes" />
      <SidebarLink to="/resources" label="Recursos" />
    </ul>
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

    return <li className={ to === activePath ? 'active' : '' }>
      <Link to={ to }>{ label }</Link>
    </li>
  }
}


SidebarLink.contextTypes = {
  location: React.PropTypes.object
}