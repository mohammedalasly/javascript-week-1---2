///// This is the second HomeWork from JS (for loop). /////

//1. (Square numbers from [1] to [100]).

for (let i = 1; i <= 100; i++) {

    console.log(`The square of ${i} is ${i * i}`);
}


//2. (sum of numbers from [1] to [100]).


for (let i = 1; i <= 100; i++) {

    console.log(`The sum of numbers from [1] to [100] is ${i}`);
}


//3. (sum of squares of Odd numbers from [1] to [100]).

for (let i = 1; i <= 100; i = i + 2) {

    console.log(`The sum of squares of Odd numbers from [1] to [100] is: ${i * i}`);
}



//4. (sum of squares of Even numbers from [1] to [100]).

for (let i = 0; i <= 100; i = i + 2) {

    console.log(`The sum of squares of Even numbers from [1] to [100] is: ${i * i}`);
}