import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Characters } from '../imports/collections'


Meteor.methods({
  'characters.create': (character) => {
    Characters.insert(character)
  },
})
