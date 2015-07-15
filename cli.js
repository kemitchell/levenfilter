#!/usr/bin/env node

if (process.argv.length !== 4) {
  process.stderr.write('Usage: levenfilter <string> <maximum-distance> < words\n')
  process.exit(1) }

process.stdin
  .pipe(new (require('byline').LineStream)())
  .pipe(new require('./')(
    process.argv[2],
    parseInt(process.argv[3])))
  .on('data', function(matchingString) {
    process.stdout.write(matchingString + '\n') })
  .on('end', function() {
    process.exit(0) })
