//DRY is Don't Repeat Yourself. Main goal is to reduce reptition of software patterns to avoid redundancy. JavaScript, HTML, CSS

//const : variable does not change
//let : variable change
//var : variable change. not commonly used now

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log (a<b);
console.log (c>d);
console.log ('Name' === 'Name');
console.log (a<b<c);
console.log ((a===a)<d); 
console.log (e != 'Kevin');
console.log (48 == '48');
console.log (f != e);

let g = 0;
console.log(g); 

g = b + c; // no need to declare variable let const or var if you want to change or update the variable to a new value
console.log (g); 

// let; as the number can change
// no error, it changes the value inside the variable
// error

console.log ( a < (b||f) && e!==c); //ask this question

//Section 3

//Yes it is an infinite loop because user did not include a terminal/terminating condition
//It is an finite loop as user has included a terminal/terminating condition. Output will be "Do not run this loop"

let letters = "A";
let i = 0;

//starts a while loop to run as long as i is less than 20
while (i < 20) {
    letters += "A";
	// add 1 to i
    i++;
}

//prints the value letters 
console.log(letters); //shows 20 As

//SECTION 4
// for loop is used when you know how many times to loop; but while loop you dont know how many times

// First part of control loop : let i =0
// Second part of control loop: i < 100
// Third part of control loop: i++

for (let i=0; i<1000; i++){
    console.log(i);
}

// backlash is to prevent javascript reading it as the end of the string

for (let i = 999; i>=0; i--){
    console.log(i);
}

for (let i = 1; i<=10; i++){
    console.log("The value of i is: " + i + " of 10" );
}

for (let i = 1; i<=10; i++){
    console.log(`The value of i is: ${i} of 10` );
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++){ //use i+=2 to skip two counters, otherwise i+2 will give infinte loop
    console.log(StarWars[i]);
}    