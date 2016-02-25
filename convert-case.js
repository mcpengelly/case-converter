// read the first command line argument
var arg = process.argv[2];
var word = '';
var curr_char = 0;
var curr_arg = 2; // skip first two indicies
var field = '';

var _ = require('lodash');

// todo refactor
// reads the current strings characters and formats the output to snake case
function readCharacters (callback) {
  if (!arg) throw Error('input argument is undefined');

  // cache length
  var argsLength = process.argv.length - 1;
  var wordLength = arg.length - 1;
  while (curr_arg <= argsLength) {
    while (curr_char <= wordLength) {
      word += arg[curr_char];
      curr_char += 1;
    }
    curr_char = 0; // reset current character index
    curr_arg += 1; // increment argument index
    field += word; // concat field with new word
  }

  callback(field);
}

readCharacters(console.log);
