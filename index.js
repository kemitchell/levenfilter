var leven = require('leven')
var Transform = require('stream').Transform
require('util').inherits(LevenFilter, Transform)

function LevenFilter(string, threshold) {
  if (!(this instanceof LevenFilter)) {
    return new LevenFilter(string, threshold) }
  this.string = string
  this.threshold = threshold
  Transform.call(this, { objectMode: true }) }

LevenFilter.prototype._transform = function(chunk, encoding, done) {
  chunk = typeof chunk === 'string' ? chunk : chunk.toString()
  if (leven(chunk, this.string) <= this.threshold) {
    this.push(chunk) }
  done() }

module.exports = LevenFilter
