import { Meteor } from 'meteor/meteor'

import { Characters, Resources } from '../imports/collections'


Meteor.publish('characters', () =>
  Characters.find({})
)


Meteor.publish('resources', () =>
  Resources.find({})
)
