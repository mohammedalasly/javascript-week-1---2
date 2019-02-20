//1
let hello_indonesia = "Halo, dunia! // Indonesian";
let hello_italian = "Ciao, mondo! // Italian";
let hello_spanish = "Hola, mundo! // Spanish";
let hello_english = "Hello World! // English";

console.log(hello_indonesia, hello_italian, hello_spanish, hello_english);

//2
console.log("I'm awesome");

//3
let myVar = x;

//3.1
myVar = 2;

//3.2
console.log("the value of my variable x will be: ", typeof x);

//3.3
console.log(2);

//3.4
x = 2;

//3.5
console.log("the value of my variable x will be: ", typeof x);

//3.6
console.log(x);

//4
let y = "";

//4.1
console.log("I think the value of y will be: ", typeof y);

//4.2
console.log(y);

//4.3
y = "Hello";

//4.4
console.log("I think the value of y will be: ", typeof y);

//4.5
console.log(y);


//5-5.1
let z = 7.25;

//5.2
console.log(z);

//5.3
let a = Math.round(z);

//5.4
console.log(a);

//5.5
let u;

if (a > z) {
    u = a;
} else {
    u = z;
    
}

//5.6
console.log(u);


//6-6.1
let plurality = [];

//6.2
console.log("I think the type of plurality is: ", typeof plurality);

//6.3
console.log(plurality);

//6.4
let my_perfect_animals = ["dragons"];

//6.5
console.log(my_perfect_animals);

//6.6
my_perfect_animals.push("baby pig");

//6.7
console.log(my_perfect_animals);

//7.2
let myString = "this is a test";
console.log(myString);

//7.3
myString.length;

//7.4
console.log(myString.length);

//8
let group = 10;
console.log('The value of my variable group is: ' + group);
group + 10;

//8.1
var i = [];
var x =  {};
var y = "";
var z = 2;

//8.2
console.log("The value of my variable i is: ", []);
console.log("The value of my variable x is: ", {});
console.log("The value of my variable y is: ", "");
console.log("The value of my variable z is: ", 2);

//8.3
console.log("The value of my variable i is: ",  array);
console.log("The value of my variable x is: ", object);
console.log("The value of my variable y is: ", string);
console.log("The value of my variable z is: ", number);

//8.4
console.log("The value of my variable i is: ", typeof  array);
console.log("The value of my variable x is: ", typeof object);
console.log("The value of my variable y is: ", typeof string);
console.log("The value of my variable z is: ", typeof number);



//8.5
let i, x, y, z = 4;
if (i == 4) {
  console.log("Different type");  
} else {
  console.log("Same type");
}

if (x == 4) {
  console.log("Different type");  
} else {
  console.log("Same type");
}

if (y == 4) {
  console.log("Different type");  
} else {
  console.log("Same type");
}

if ( z== 4) {
  console.log("Different type");  
} else {
  console.log("Same type");
}


//9
let x1 = 7;
x1 = x1 % 3;
console.log(x1);

//9.1
console.log("In computing, the modulo operation finds the remainder after division of one number by another (sometimes called modulus)");
console.log("5 % 2 would evaluate to 1 because 5 divided by 2 leaves a quotient of 2 and a remainder of 1");
console.log("9 % 3 would evaluate to 0 because the division of 9 by 3 has a quotient of 3 and leaves a remainder of 0");


//10-10.1
let myArray = [];
myArray [0] = "Mohammad";
myArray [1] = 28;
myArray [2] = true;

console.log(myArray);

//10.2

if (+Infinity !== -Infinity) {
    console.log("true")
} else {
    console.log("false")
}

6/0 === 10/0;

let y1 = 6/0;
let y2 = 10/0;

if (y1 === y2) {
  console.log("true")
} else {
  console.log("false")
}

 //10.3
console.log("The triple equals sign (===) is used to compare both the Type and the actual Value of a variable");