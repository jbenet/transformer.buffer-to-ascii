# transformer.buffer-to-ascii

[Transformer](http://github.com/jbenet/transformer) conversion: buffer to ascii

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '<SAMPLE INPUT>' | transform buffer ascii
<SAMPLE OUTPUT>
```

### Javascript

```js
var transformer = require('dat-transformer');
var tBufferToAscii = transformer('buffer', 'ascii');
tBufferToAscii('<SAMPLE INPUT>'); // '<SAMPLE OUTPUT>'
```
