import React from 'react'

import View from './View'


export default class ResourceCard extends View {

  render() {
    const { resource } = this.props

    return <div className="resource-card panel panel-default">
      <div className="panel-body">
        <img src={ resource.picture } className="avatar pull-left m-r" alt={ resource.name } />

        <h3 className="name">{ resource.name }</h3>
        <p className="title">{ resource.description }</p>

        <div className="clearfix" />
      </div>
    </div>
  }

}
