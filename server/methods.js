import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Characters } from '../imports/collections'


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

  'resouces.create': (form) => {
    const resource = {
      name       : form.name,
      picture    : form.picture,
      description: form.description,
      countable  : form.countable
    }

    Resources.insert(resource)
    return resource
  }

  // 'resources.transfer': (form) => {
  //   const transfer = {
  //     senderId  : null,
  //     receiverId: form.receiver,
  //     resourceId: form.
  //   }
  // },
})
