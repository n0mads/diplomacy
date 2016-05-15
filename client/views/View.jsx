import React from 'react'


export default class View extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

    // Auto-bind all methods defined in View subclasses:
    for (let p = this; p !== View.prototype; p = Object.getPrototypeOf(p)) {
      bindMethods(this, p)
    }
	}

	set(key, value) {
		if (value !== undefined) {
			return this.setState({ [key]: value })
		} else {
			return (value) => this.set(key, value)
		}
	}

	setEvent(key, event) {
		if (event !== undefined) {
			return this.setState({ [key]: event.target.value })
		} else {
			return (event) => this.setEvent(key, event)
		}
	}
}


function bindMethods(instance, prototype) {
  for (let key of Object.getOwnPropertyNames(prototype)) {
    if (typeof prototype[key] !== 'function') continue

    if (! instance.hasOwnProperty(key)) {
      instance[key] = prototype[key].bind(instance)
    }
  }
}
