import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Characters, Resources } from '../imports/collections'
import * as actions from './actions'


Meteor.methods({
  'characters.create': (form) => {
    const character = {
      name       : form.name,
      picture    : form.picture,
      description: form.description,

      resources: []
    }

    Characters.insert(character)
    return character
  },

  'resources.create': (form) => {
    const resource = {
      name       : form.name,
      picture    : form.picture,
      description: form.description,
      countable  : form.countable
    }

    Resources.insert(resource)
    return resource
  },

  'resources.assign': (form) => {
    const action = {
      type       : 'assignResource',
      resourceId : form.resourceId,
      characterId: form.characterId,
      count      : form.count
    }

    return executeAction(action)
  },

  // 'resources.transfer': (form) => {
  //   const transfer = {
  //     senderId  : null,
  //     receiverId: form.receiver,
  //     resourceId: form.
  //   }
  // },
})


function executeAction(action) {
  const handler = actions[action.type]
  if (! handler) throw TypeError(`No such action: ${action.type}`)
  return handler(action)
}
