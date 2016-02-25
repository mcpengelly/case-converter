// assume the user inputs arguments in quotes
var _ = require('lodash');
var index_offset = 2;

function toSnakeCase (field) {
  return field.replace(/\s+/g, '_').toLowerCase();
}

// todo turn each letter after a space to capital
function toCamelCase (field) {
  var temp = field.replace(/s?([a-z])/, '$1').toUpperCase();
  return temp;
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
  var fieldList = [];
  if (!process.argv) throw Error('input argument is undefined');
  _.forEach(process.argv, function (argument) {
    fieldList.push(buildObject(argument));
  });
  return fieldList;
}

var output = readArguments();
console.log(output.slice(index_offset)); // cut out the additional node arguments from the list
