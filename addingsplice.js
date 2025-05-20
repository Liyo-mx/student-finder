//adding method with splice
let days = ['Monday', 'Tuesday', 'Thursday', 'Friday'];

days.splice(2,0,'Wednesday');
console.log(days);

//adding numbers
let sequence = [1, 2, 3, 7, 8, 9];

sequence.splice(3,0,4,5,6);
console.log(sequence);

//seassons
let seasons = ['Summer', 'Fall', 'Winter'];

seasons.splice(0,0,'Spring');
console.log(seasons);

//colorss
let rainbow = ['red', 'blue', 'green', 'yellow'];

rainbow.splice(2,0,'purple', 'orange');
console.log(rainbow);

//tjh6jhkt
let instruments = ['piano', 'violin', 'drums', 'flute'];

instruments.splice(2,1,'guitar');
console.log(instruments);

//removing method with splice
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

fruits.splice(1,2);
console.log(fruits);

//remove numbers from end
let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.splice(-3,3);
console.log(numbers);

//remove first element
let colors = ['red', 'blue', 'green', 'yellow'];

colors.splice(0,1);
console.log(colors);

//remove all after 2 index elements
let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

planets.splice(2);
console.log(planets);

let names = ['John', 'Jane', 'Bob', 'Alice', 'Tom'];

names.splice(3,1);
console.log(names);


