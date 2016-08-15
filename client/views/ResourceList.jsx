import React from 'react'

import View from './View'
import ResourceCard from './ResourceCard'


export default class ResourceList extends View {

  render() {
    const { resources } = this.props

    return <div className="resource-list">{
      resources.map(this.renderItem)
    }</div>
  }

  renderItem(resource, index) {
    return <ResourceCard resource={ resource } key={ index } />
  }

}
