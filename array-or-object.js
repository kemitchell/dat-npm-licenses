var split2 = require('split2')

process.stdin
  .pipe(split2())
  .on('data', function(buffer) {
    var object = JSON.parse(buffer)
    if (!object.hasOwnProperty('name')) {
      return }
    var license = object.license
    var type = (
      Array.isArray(license) ?
        'array' :
        ( typeof license === 'object' ?
            'object' : false ) )
    if (type) {
      process.stdout.write(object.name + '\t' + type + '\n') } })
