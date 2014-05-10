var transformer = require('dat-transformer');
var tBuffer = transformer('buffer');
var tAscii = transformer('ascii');
// require any other modules you may need here.

module.exports = transformer.Conversion(tBuffer, tAscii, convert);

function convert(buffer) {
  return buffer.toString('ascii');
}
