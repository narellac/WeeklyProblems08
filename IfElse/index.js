// a)

var random = Math.random();

console.log(random);

if (random >=0,5){
  console.log('Greater than 0,5');
}else{
  console.log('Lower than 0,5');
};

// b)

var age = 27;


if (age<2){
  console.log('Baby');
}else if (age>1 && age<13){
  console.log('Kid');
}else if (age>12 && age<20){
  console.log('Teen');
}else if (age>19 && age<31){
  console.log('Young');
}else if (age>30 && age<61){
  console.log('Adult');
}else if (age>60 && age<76){
  console.log('Elderly');
}else{
console.log('Old man');
};