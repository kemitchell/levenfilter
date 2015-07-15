Filter an object stream, piping only chunk string values within a given [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) of a given string.

Command-line interface:

```shellsession
$ npm install --global levenfilter
$ levenfilter
Usage: levenfilter <string> <maximum-distance> < words
$ levenfilter voice 1 < /usr/share/dict/words
vice
voice
voiced
voices
voile
```

JavaScript:

```javascript
var LevenFilter = require('levenfilter')
streamOfWords.pipe(new LevenFilter('voice', 1))
```
