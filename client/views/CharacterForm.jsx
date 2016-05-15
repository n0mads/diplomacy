import React from 'react'

import View from './View'
import Avatar from './Avatar'

import Button from './forms/Button'
import Input from './forms/Input'


export default class CharacterForm extends View {

  componentWillMount() {
    this.setState({ name: "", title: "", avatar: "" })     
  }

  submit() {
    const form = Object.assign({}, this.state)
    Meteor.call('characters.create', form)
  }

  render() {
    const { name, title, avatar } = this.state

    return <form className="form-horizontal">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <Input
              value={ name }
              label="Nombre"
              placeholder="Sam McCharacter"
              onChange={ this.setEvent('name') }
            />

            <Input
              value={ title }
              label="Título"
              onChange={ this.setEvent('title') }
            />

            <Input
              value={ avatar }
              label="Avatar"
              onChange={ this.setEvent('avatar') }
            />
          </div>

          <div className="row">
            <Button label="Crear" onClick={ this.submit } />
          </div>
        </div>

        <div className="col-sm-4">
          <Avatar src={ avatar } />
        </div>
      </div>
    </form>
  }

}