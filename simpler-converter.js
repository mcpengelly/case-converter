// assume the user inputs arguments in quotes
var _ = require('lodash');
var index_offset = 2;

function toSnakeCase (field) {
  return field.replace(/\s+/g, '_').toLowerCase();
}

// todo turn each letter after a space to capital, using groups?
function toCamelCase (field) {
  return field.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

function buildObject (str) {
  return {
    comment: str,
    field: toCamelCase(str),
    caption: toSnakeCase(str),
    type: ''
  };
}

function readArguments () {
  if (!process.argv) throw Error('input argument is undefined');

  var fieldList = [];
  _.forEach(process.argv, function (argument) {
    fieldList.push(buildObject(argument));
  });
  return fieldList;
}

var output = readArguments();
console.log(output.slice(index_offset)); // cut out the additional node arguments from the list

