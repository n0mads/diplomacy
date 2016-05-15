import { Meteor } from 'meteor/meteor'

import { Characters } from '../imports/collections'


Meteor.publish('characters', () =>
  Characters.find({})
)
