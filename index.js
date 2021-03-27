#!/usr/bin/env node
const { fingerprint, safeCounter } = require('./lib')

const PREFIX = 'rec'

module.exports = {
  generate: airtable,
  isRecordId
}

function airtable () {
  const random = Math.floor(Math.random() * [0, 1].length)
  const timestamp = (new Date().getTime()).toString(36).slice(1)

  const fingerPrint = random ? fingerprint().toUpperCase() : fingerprint().toLowerCase()
  const counter = safeCounter()

  return PREFIX + timestamp + counter + fingerPrint
}

function isRecordId (uuid) {
  if (typeof uuid !== 'string') return false
  if (uuid.startsWith(PREFIX)) return true

  return false
}

if (require.main === module) console.log(airtable())
