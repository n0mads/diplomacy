import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import View from '../View'


class Sidebar extends View {

  render() {
    return <ul className="nav nav-pills nav-stacked">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Messages</a></li>
    </ul>
  }

}


function getData() {
  return {}
}


export default createContainer(getData, Sidebar);


