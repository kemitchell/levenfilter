var leven = require('leven')
var Transform = require('stream').Transform
require('util').inherits(LevenFilter, Transform)

function LevenFilter(string, maximumDistance) {
  if (!(this instanceof LevenFilter)) {
    return new LevenFilter(string, maximumDistance) }
  this.string = string
  this.maximumDistance = maximumDistance
  Transform.call(this, { objectMode: true }) }

LevenFilter.prototype._transform = function(chunk, encoding, done) {
  chunk = typeof chunk === 'string' ? chunk : chunk.toString()
  if (leven(chunk, this.string) <= this.maximumDistance) {
    this.push(chunk) }
  done() }

module.exports = LevenFilter
