import React from 'react'
import ReactSelect from 'react-select'

import { Meteor } from 'meteor/meteor'


export default function Select({ label, options, onChange, ...extraProps }) {

  return <div className="form-group">
    <label className="col-sm-2 control-label">{ label }</label>

    <div className="col-sm-10">
      <ReactSelect
        options  = { options.map(toOption) }
        onChange = { option => onChange(option.value) }

        { ...extraProps }
      />
    </div>
  </div>
}


function toOption(doc) {
  return { value: doc._id, label: doc.name }
}
