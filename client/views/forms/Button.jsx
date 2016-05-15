import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'


export default function Button({ label, ...extraProps }) {
  return <div className="form-group">
    <div className="col-sm-10 col-sm-offset-2">
      <div className="btn btn-primary btn-block" { ...extraProps }>{ label }</div>
    </div>
  </div>
}

