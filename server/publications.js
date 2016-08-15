import { Meteor } from 'meteor/meteor'

import { Characters, Resources } from '../imports/collections'


Meteor.publish('characters', (ids = null) => {
  return (ids != null)
    ? Characters.find({ _id: {$in: ids} })
    : Characters.find({})
})


Meteor.publish('resources', (ids = null) => {
  return (ids != null)
    ? Resources.find({ _id: {$in: ids} })
    : Resources.find({})
})
