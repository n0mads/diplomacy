import React from 'react'

import View from './View'
import Avatar from './Avatar'

import Button from './forms/Button'
import Input from './forms/Input'
import Checkbox from './forms/Checkbox'


export default class ResourceForm extends View {

  componentWillMount() {
    this.setState({ name: "", description: "", picture: "", countable: true })     
  }

  submit() {
    const form = Object.assign({}, this.state)
    Meteor.call('resources.create', form)
  }

  render() {
    const { name, description, picture, countable } = this.state

    return <form className="form-horizontal">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <Input
              value={ name }
              label="Nombre"
              placeholder="Agua Dulce"
              onChange={ this.setEvent('name') }
            />

            <Input
              value={ description }
              label="Descripción"
              placeholder="Esencial para la vida"
              onChange={ this.setEvent('description') }
            />

            <Input
              value={ picture }
              label="Ícono"
              onChange={ this.setEvent('picture') }
            />

            <Checkbox
              value={ countable }
              label="Contable"
              onChange={ this.setEvent('countable') }
            />
          </div>

          <div className="row">
            <Button label="Crear" onClick={ this.submit } />
          </div>
        </div>

        <div className="col-sm-4">
          <Avatar src={ picture } />
        </div>
      </div>
    </form>
  }

}