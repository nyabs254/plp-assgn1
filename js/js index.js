console.log("Hello world!");
console.log("Iam learning javascript!");
//using var
var name ="hello world";
console.log(name);
//using let
let job ="intern";
console.log(job);

//using const--used to define variables that donot change 
const age = 25;
console.log(age);

//camelCase
 var firstName;
 //snake case
 var last_name;
//variables in javascript are case sensitive 

//undefined data type
var lastName;

console.log(lastName);

let x= 10;
let y = 15;
console.log(x+y);
console.log(x-y);
console.log(x**y);
x++;
console.log(x);
y--;
console.log(y);

//cmparison operators
//equal==
//not equal!=
//strict equal===
//not strict equal!==

//arrays
var cars = ["toyota ","mazda ","volo","nissan"];
console.log(cars);
//position starts from index 0

cars[0] = "toyota";
console.log(cars);

cars[2] = "volvo";
console.log(cars);
cars.pop();//removing the last item from the list
cars unshift("mitsubishi") //add an an itwem at the very beginninng of an array
cars.shift();//remove an item from  the beginning of the list

//conditional statements 
var cash=1000;

if(cash>1000){
    console.log("you can buy the dress ");
}else if (cash==500)
{
    console.log("you can buy the shirt ");
}else {
    console.log("you have insufficient cas ");
}

if (condition...){
//executable code 
}

