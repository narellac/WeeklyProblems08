// a)

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
"November", "December"];

console.log(months[5]);
console.log(months[11]);

// b)

var order = months.sort();

console.log(order);

// c)

var beginning, end;
beginning = months.unshift('months');
end = months.push('Whole year');

console.log(months);

// d)

var deleteBeginning, deleteEnd;
deleteBeginning = months.shift();
deleteEnd = months.pop();

console.log(months);

// e)

var backFowards = months.reverse();

console.log(months);

// f)

console.log(months.join('-'));

// e)

var original = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
"November", "December"];

var selection = original.slice(4,11);

console.log(selection);
