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

var mix = (ford.substr(0,1).toUpperCase() + ford.substr(1,15).toLowerCase());

console.log(mix);

// e)

var space = 'Welcome to the Jungle';

console.log(space.indexOf(' '));

// f)

/*var large = 'sUCCESSFULLY uNDERSTOOD';

var mixtwo = (large.substr(0,1).toUpperCase() + large.substr(1,12).toLowerCase() + large.substr(12,13).toUpperCase() + large.substr(14,23).toLowerCase());

console.log(mixtwo);*/

