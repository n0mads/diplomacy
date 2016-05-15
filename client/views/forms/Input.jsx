import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'


export default function Input({ label, type = 'text', placeholder, ...extraProps }) {
  return <div className="form-group">
    <label className="col-sm-2 control-label">{ label }</label>
 
    <div className="col-sm-10">
      <input type={ type } className="form-control" placeholder={ placeholder } { ...extraProps } />
    </div>
  </div>
}
