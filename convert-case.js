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
    result += word[charIndex];
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
    if (argIndex < argsLength) {
      field += ' ';
    }
    argIndex += 1;
  }
  callback(field, console.log);
}

function toSnakeCase (field, callback) {
  var lowercase = field.toLowerCase();
  var snakeCaseField = lowercase.replace('/s/', '_');
  callback(snakeCaseField);
}

nextArgument(toSnakeCase);

// build js object:
// unmodified
// camel case
// snake case
// type: ''
