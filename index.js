var Conversion = require('transformer-conversion');
var tBuffer = require('transformer.buffer');
var tAscii = require('transformer.ascii');
// require any other modules you may need here.

module.exports = Conversion(tBuffer, tAscii, convert);

function convert(buffer) {
  return buffer.toString('ascii');
}
