import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'


export default function Avatar({ src }) {
  return <img className="avatar img-rounded" src={ src } />
}
