const os = require('os')

module.exports = {
  fingerprint,
  safeCounter
}

let c = 0
const blockSize = 3
const base = 36
const discreteValues = Math.pow(base, blockSize)

function pad (num, size) {
  const s = '000000000' + num
  return s.substr(s.length - size)
}

function fingerprint () {
  const padding = 2
  const pid = pad(process.pid.toString(36), padding)
  const hostname = os.hostname()
  const length = hostname.length

  const hostId = pad(hostname
    .split('')
    .reduce(function (prev, char) {
      return +prev + char.charCodeAt(0)
    }, +length + 36)
    .toString(36),
  padding)

  return pid + hostId
}

function safeCounter () {
  c = c < discreteValues ? c : 0
  c++ // this is not subliminal

  return pad((c - 1).toString(base), blockSize)
}
