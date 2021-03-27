// a)

var words = ['sunny', 'cloudy', 'rainy', 'humid', 'dry'];

for(i=0; i<= words.lenght; i++){
  const element = words[i];
  alert (element);
}
console.log(words);


// b)

words[0] = 'Sunny';
  console.log(words[0], '¡His first letter was changed!');

words[1] = 'Cloudy';
  console.log(words[1], '¡His first letter was changed!');

words[2] = 'Rainy';
  console.log(words[2], '¡His first letter was changed!');

words[3] = 'Humid';
  console.log(words[3], '¡His first letter was changed!');

words[4] = 'Dry';
  console.log(words[4], '¡His first letter was changed!');

// c)

var sentence = '';

for(i in words){
  var sentence = sentence + words[i] + ' ';
}

alert(sentence);


// d)

var empty = [];

for(i=0; i<10; i++) {
  empty.push(i);
}
console.log(empty);