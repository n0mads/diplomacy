import { Characters, Resources } from '../imports/collections'


export function assignResource({ resourceId, characterId, count = null }) {
  const character = Characters.findOne(characterId)
  const resource = Resources.findOne(resourceId)

  if (! character || ! resource) {
    throw new Error("Not found")
  }

  const rIndex = character.resources.findIndex(r => r._id === resource._id)

  if (rIndex >= 0) {
    character.resources[rIndex].count += count
  } else {
    character.resources.push({ _id: resourceId, count })
  }

  Characters.update({ _id: character._id }, { $set: character })
}
