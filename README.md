```shellsession
$ npm install --global levenfilter
$ levenfilter voice 1 < /usr/share/dict/words
vice
voice
voiced
voices
voile
```

```javascript
var LevenFilter = require('levenfilter')
streamOfWords.pipe(new LevenFilter('voice', 1))
```
