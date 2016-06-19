import React from 'react'

import Sidebar from '../layout/Sidebar'
import View from '../View'


export default class Page extends View {

  render() {
    return <div id="page">
      <div className="col-sm-3">
        <Sidebar />
      </div>

      <div className="col-sm-9">
        { this.renderContent() }
      </div>
    </div>
  }

}