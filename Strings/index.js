// a)

var general = 'exemplification';

var upper = general.toUpperCase();

console.log(upper);

// b)

var subs = general.substr(0,5);
console.log(subs);

// c)

var string = general.substr(12,15);
console.log(string);

// d)

var ford = 'eXEMPLIFICATION';

var mix = (ford.substring(0,1).toUpperCase() + ford.substring(1,15).toLowerCase());

console.log(mix);

// e)

var space = 'Welcome to the Jungle';

console.log(space.indexOf(' '));

// f)

var large = 'sUCCESSFULLY uNDERSTOOD';

console.log(large.indexOf(' '));

var successfully = (large.substring(0,1).toUpperCase() + large.substring(1,12).toLowerCase());

var understood = (large.substring(12,14).toUpperCase() + large.substring(14,23).toLowerCase());

var union = successfully + understood;

console.log(union);