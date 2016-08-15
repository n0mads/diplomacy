import React from 'react'

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import View from './View'
import Avatar from './Avatar'

import Button from './forms/Button'
import Input from './forms/Input'
import Checkbox from './forms/Checkbox'
import Select from './forms/Select'


export default class AssignResourceForm extends View {

  componentWillMount() {
    this.setState({
      resourceId   : null,
      characterId  : null,
      count        : null,
    })
  }

  submit() {
    const form = Object.assign({}, this.state)

    form.count = parseInt(form.count)

    Meteor.call('resources.assign', form)
  }

  render() {
    const { characters, resources } = this.props
    const { resourceId, characterId, count } = this.state

    return <form className="form-horizontal">
      <div className="row">
        <Select
          label    = "Personaje"
          value    = { characterId }
          options  = { characters }
          onChange = { this.set('characterId') }
        />

        <Select
          label    = "Recurso"
          value    = { resourceId }
          options  = { resources }
          onChange = { this.set('resourceId') }
        />

        <Input
          value       = { count }
          label       = "Cantidad"
          placeholder = "1"
          onChange    = { this.setEvent('count') }
        />
      </div>

      <div className="row">
        <Button label="Asignar" onClick={ this.submit } />
      </div>
    </form>
  }

}


function getData() {
  Meteor.subscribe('characters')
  Meteor.subscribe('resources')

  return {
    characters: Characters.find({}).fetch(),
    resources: Resources.find({}).fetch(),
  }
}


export default createContainer(getData, AssignResourceForm);
