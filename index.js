// function functionName (parameter1, parameter2, paramete3) { // function body};

// Think of parameters as variables that can be used only within the function itself. The number and names of the parameters are determined by the programmer, based on what they want the function to do. A function may be defined with several parameters, or no parameters at all.

// parameters are associated with your arguments, but you can sometimes only give one argument even though you have 3 parameters and vice versa.

//let names = ["Lena", "James", "Julio"];

// for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
// }
// we can create a function that  does this for us, we pass names to the function.




// Notice that there is nothing about this function that forces names to actually contain names, or even strings. The function will work the same for any array it is given. Therefore, a better name for this function would be printArray.

function printArray(names) {
   for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
   }
}

printArray(["Lena", "James", "Julio"]);
console.log("---");
printArray(["orange", "apple", "pear"]);

// 10.4.1.1. Returning a Value

// return someVal; where someVal is any value.

function sumToN(n){
  let sum = 0;
  for (let j = 0; j <= n; j++){
    sum +=j;
    console.log(sum);
  }
  return sum;
}
console.log(sumToN(6)); // a ctually dont need console.log for this it'll still return the value to the console because of the return sum

 // Now that we have return statements in our coding toolbox, we will very rarely print anything within a function. If we want to see the value returned by a function then we must print it after calling the function.

//  10.4.1.2. Using return is Optional
// As we saw with our initial examples of function definitions, not every function explicitly returns a value. At its simplest, a function can even have an empty body.

function doNothing() {}

// As written, this function is completely valid, but useless. Although the function doesn't have a return statement, JavaScript still implicitly returns a value.

//A function without a return statement returns the special value undefined.
let returnVal = doNothing();
console.log(returnVal);

// 10.4.1.3. return Terminates Function Execution
// When a return statement executes, the function terminates, regardless of whether or not there is any code following the return statement. This means that you must be careful to use return only when the work of the function has been completed.

function pastThePointOfReturn() {
   return "I'm done!";
   console.log("This will not be printed");
}

console.log(pastThePointOfReturn());

 // We can use the fact that return stops the execution of a function intentionally, to force a function to stop execution.

function countToN(n) {
   let count = 1;
   while (true) {
      if (count > n) {
         return;
      }
      console.log(count);
      count++;
   }
}

countToN(2); // if empty () theb ut wukk be an infinite while loop

// 10.4.1.4. Boolean Functions
// A function that returns a boolean value is known as a boolean function. Perhaps the simplest such function is one that tests an integer to determine if it is even.

// function isEven(n) {
//    if (n % 2 === 0) {
//       return true;
//    } else {
//       return false;
//    }
// }

// function isEven(n) {
//    if (n % 2 === 0) {
//       return true;
//    }
//       return false;
// }
 // --------------- can simpfly further below.
// console.log(isEven(4));
// console.log(isEven(7));

// Since return terminates the function, we can leave out the else clause and have the same effect. This is because if n is even, the return statement in the if block will execute and the function will end. If n is odd, the if block will be skipped and the second return statement will execute.

function isEven(n) {
  return n % 2 === 0 ;
}

console.log(isEven(4));
console.log(isEven(7));

// This version of isEven is better than the first two, not because it is shorter (shorter isn't always better), but because it is simpler to read. We don't have to break down the conditional logic to see what is being returned.

// Most boolean functions can be written so that they return the value of a boolean expression, rather than explicitly returning true or false.

// 10.4.2. Parameters and Arguments

function hello(name) { // name is the parameter and Lamar is the argument. 
   return `Hello, ${name}!`;
}

console.log(hello("Lamar"));


// In this example, name is a parameter. It is part of the function definition, and behaves like a variable that exists only within the function.

// The value "Lamar" that is used when we invoke the function on line 5 is an argument. It is a specific value that is used during the function call.

// The difference between a parameter and an argument is the same as that between a variable and a value. A variable refers to a specific value, just like a parameter refers to a specific argument when a function is called. Like a value, an argument is a concrete piece of data.

//Arguments are optional when calling a function. When a function is called without specifying a full set of arguments, any parameters that are left without values will have the value undefined.

// If your function will not work properly without one or more of its parameters defined, then you should define a default value for these parameters. The default value can be provided next to the parameter name, after =.

function hello2(name = "World") { // name = "World" is the default if there are no arguments.
   return `Hello, ${name}!`;
}

console.log(hello2());
console.log(hello2("Lamar"));

// an example of this is the .slice function: The second argument is missing but it still works.

// returns "Launch"
"LaunchCode".slice(0, 6);

// returns "Code"
"LaunchCode".slice(6);

// also returns "Code"
"LaunchCode".slice(6, 10);

//Just as it is possible to call a function with fewer arguments than it has parameters, we can also call a function with more arguments than it has parameters. In this case, such parameters are not available as a named variable.

function hello3(name = "World") {
   return `Hello, ${name}!`;
}

console.log(hello3("Jim", "McKelvey"));

// This example calls hello with two arguments, even though it is defined with only one parameter.

// These "extra" arguments can still be accessed using a special object named arguments, which is made available to every function. 

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) { // plus 2 + num 4 times.
   a = plusTwo(a);
   console.log(a);
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

function makeSandwich(breadType, fillingType, condiments) {

   let finishedSandwich = breadType + " " + fillingType;

   for (let i = 0; i < condiments.length; i++){
     finishedSandwich += " " + condiments[i] ;
   }

return finishedSandwich;
}

let sanga = makeSandwich("Rye","Chicken",["Mustard","Mayo"]);
console.log(sanga);

////////////////////////////////////////

function makeSandwich2(breadType, fillingType, condiments) {

   return{
     breadType: breadType,
     fillingType: fillingType,
     condiments: condiments};
   
  // can use a constructor to make a new sanwich object.
  // this.breadType = breadType;
  // this.fillingType = fillingType;
  // this.condiments = condiments;
   


}
let sanga1 = makeSandwich2("Rye","Chicken",["Mustard","Mayo"]);
console.log(sanga1);

// let sanga2 = new makeSandwich2("Rye","Chicken",["Mustard","Mayo"]);
// console.log(sanga2);
//  above is done using a constructor with the this.

function removeHyphens(str) {
   let strWithoutHyphens = ''

   for (let i = 0; i < str.length; i++) {
      if (str[i] !== '-') {
         strWithoutHyphens += str[i]; // if you want to reverse you cant use compound operator and strwithouthyphens needs to be on the end.
      }
   }

   return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));

// Where it can be used depends on the context in which it is defined. For variables and parameters within a function, their scope is known as function scope. This means that they are only visible within the function in which they are defined

// this is my palletron function - there is a better way to do it below
function strReverser (stringInput){
let newString = "";
  for (let i = stringInput.length - 1; i >= 0; i--){
    newString = newString + stringInput[i];

    }

  if (newString === stringInput){
  return true;
  } else {
    return false;
  }
  
}

let myString = strReverser("1otto");
console.log(myString);

function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
      reversed = str[i] + reversed; // this is a nuch simpler way of reversing a string because it justs adds what is currently in the string to the end of it.
      console.log(reversed);
   }

   return reversed;
}

console.log(reverse("chris"));

// Another approach is to use the fact that there is a reverse method for arrays, and that the methods split and join allow us to go from strings to arrays and back (this was covered in Array Methods).

function reverse2(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

console.log(reverse2("chris2"));