// read the first command line argument
var _ = require('lodash');
var index_offset = 2;
var argIndex = 0 + index_offset; // skip first two indicies
var fieldList = [];

// reads the current strings characters and formats the output to camel case
function readCharacters (word) {
  var result = '';
  var charIndex = 0;
  // cache length
  var wordLength = word.length - 1;
  while (charIndex <= wordLength) {
    if (charIndex === 0 && argIndex !== index_offset) {
      result += word[charIndex].toUpperCase();
    } else {
      result += word[charIndex];
    }
    charIndex += 1;
  }
  return result;
}

function nextArgument (callback) {
  if (!process.argv) throw Error('input argument is undefined');

  var word = '';
  var field = '';

  // cache length
  var argsLength = process.argv.length - 1;
  while (argIndex <= argsLength) {
    word = process.argv[argIndex];
    field += readCharacters(word);
    argIndex += 1;
  }
  callback(field);
}

nextArgument(console.log);

// build js object:
// unmodified
// camel case
// snake case
// type: ''
