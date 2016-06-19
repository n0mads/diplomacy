import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'


export default function Checkbox({ label, value, ...extraProps }) {
  return <div className="form-group">
    <div className="col-sm-10 col-sm-offset-2">
      <div class="checkbox">
        <label>
          <input type="checkbox" checked={ value } { ...extraProps } /> {label}
        </label>
      </div>
    </div>
  </div>
}
