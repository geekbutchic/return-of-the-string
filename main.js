/*******************
 * YOUR CODE HERE! *
 *******************/
yell = (str) => {
  return str + '!'
}
// This method is used to test this code
// const test = yell('Hello')
// test;

getFirstCharacter = (str) => {
  return str[0];
}

getLastCharacter = (str) => {
  return str[str.length -1];
}

getOneCharacter = (str, i) => {
  return str[i];
}

getTwoCharacters = (str, index1, index2) => {
  return str[index1] + str[index2];
}

makeCapitalized = (str) => {
  return str.toUpperCase();
}

yellLouder = (str) => {
  return str.toUpperCase() + '!!!';
  // Uses function to do the work 
  // return makeCapitalized(str) + '!!!';
}

getInitials = (str) => {
  return str[0] + '.' + str[str.indexOf(' ') + 1] + '.';
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
