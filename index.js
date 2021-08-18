#!/usr/bin/env node
const cuid = require('cuid')
const PREFIX = 'rec'

module.exports = {
  generate,
  isRecordId
}

function generate () {
  const id = (PREFIX + cuid.slug() + cuid.slug())
  return Buffer.alloc(17, id).toString()
}

function isRecordId (uuid) {
  if (typeof uuid !== 'string') return false
  if (uuid.startsWith(PREFIX)) return true

  return false
}

if (require.main === module) console.log(generate())
