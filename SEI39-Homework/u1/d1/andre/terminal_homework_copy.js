//SECTION 1
//1. Dry stands for don't repeat yourself.
//It avoids redundancy by reducing repetition of code.
//Dry can be applied to all languages including HTML, CSS and Javascript that we learnt.

//2. const, let and var are declaration types.
//const are meant for non-mutable variables while let and var are mutable.
//var is also global scoped while let is block scoped.


//SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a===b);
console.log(c<=d);
console.log('bob'==='joe');
console.log(a===b===c);
console.log(a===a===d);
console.log(e==='kevin');
console.log(48==='48');
console.log(f===e);

let g = 0;
console.log(g);
g = b + c;
console.log(g);
//1. Used let for g since it is a variable
//2. Error, assignment to constant variable
//3. Error, invalid left-hand side in assignment
console.log(a <= (b || f) === !f && e !== c);


//SECTION 3
//1. Yes, it is an infinite loop.
//Loop will continue to be true as there is no terminating condition.
//2. Loop 2 is infinite as well.
//Similarly, loop continues to be true.
//Though runProgram is reassigned false, it is a const and will remain as true.

let letters = "A";
let i = 0;

// start a while loop that will run as long as q is lesser than 20
while (i < 20) {
    // adds a letter A to the variable letters
	letters += "A";
    //increments the value of i by 1
	i++;
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false    
}

//expected to print 21 A's
console.log(letters);
console.log(letters === "AAAAAAAAAAAAAAAAAAAAA");

//SECTION 4
//loop 1
//1.The first part of the control panel is:index
//2.The second part of the control panel is:condition
//3.The third part of the control panel is:increment

//loop2
for (let k=0; k<1000; k++) {
    console.log(k);
}

// backslash is used to recognise special symbols
// forward is used for commenting

//more counting
let val = 1;
for (let p=10; p>0; p--) {
    console.log(`The value of i is: ${val} of 10`);
    val++;
}

//Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i=0; i<StarWars.length; i++) {
    console.log(`${StarWars[i]} has an index of ${i}`);
}

for (let i=0; i<StarWars.length; i+=2) {
    console.log(StarWars[i]);
}

//Section 5
# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
//cd desktop
//mkdir galaxy_far_far_away
# Create a directory called `death_star`
//cd galaxy_far_far_away
//mkdir death_star
# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
//cd death_star
//touch darth_vader.txt princess_leia.txt storm_trooper.txt
# In `galaxy_far_far_away`, make a directory named `tatooine`
//cd ..
//mkdir tatooine
# and create the following files in it:
# luke.txt
# ben_kenobi.txt
//cd tatooine
//touch luke.txt ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
//mkdir millenium_falcon
//cd millenium_falcon
//touch han_solo.txt
//touch chewbaca.txt
# Rename `ben_kenobi.txt` to `obi_wan.txt
//cd ..
//mv ben_kenobi.txt obi_wan.txt
# Copy `storm_trooper.txt` from `death_star` to `tatooine`
//cp ~/Desktop/galaxy_far_far_away/death_star/storm_trooper.txt ~/Desktop/galaxy_far_far_away/tatooine/storm_trooper.txt
# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
//mv ~/Desktop/galaxy_far_far_away/tatooine/luke.txt ~/Desktop/galaxy_far_far_away/tatooine/millenium_falcon/luke.txt
//mv ~/Desktop/galaxy_far_far_away/tatooine/obi_wan.txt ~/Desktop/galaxy_far_far_away/tatooine/millenium_falcon
# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
//mv ~/Desktop/galaxy_far_far_away/tatooine/millenium_falcon ~/Desktop/galaxy_far_far_away/millenium_falcon
# Move `millenium_falcon` into `death_star`
//mv ~/Desktop/galaxy_far_far_away/millenium_falcon ~/Desktop/galaxy_far_far_away/death_star/millenium_falcon
# Move `princess_leia.txt` into the `millenium_falcon`
//mv ~/Desktop/galaxy_far_far_away/death_star/princess_leia.txt ~/Desktop/galaxy_far_far_away/death_star/millenium_falcon/princess_leia.txt
# Delete `obi_wan.txt`
//cd ~/Desktop/galaxy_far_far_away/death_star/millenium_falcon
//rm obi_wan.txt
# In `galaxy_far_far_away`, make a directory called `yavin_4`
//cd ../..
//mkdir yavin_4
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
//mv ~/Desktop/galaxy_far_far_away/death_star/millenium_falcon ~/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon
# Make a directory in `yavin_4` called `x_wing`
//cd yavin_4
//mkdir x_wing
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
//mv ~/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt ~/Desktop/galaxy_far_far_away/yavin_4/princess_leia.txt
//mv ~/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon/luke.txt ~/Desktop/galaxy_far_far_away/yavin_4/x_wing/luke.txt
# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
~/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon ~/Desktop/galaxy_far_far_away/millenium_falcon
~/Desktop/galaxy_far_far_away/yavin_4/x_wing ~/Desktop/galaxy_far_far_away/x_wing
# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
//cd ~/Desktop/galaxy_far_far_away/death_star
//mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
# Move `darth_vader.txt` into `tie_fighter_1`
//mv darth_vader.txt tie_fighter_1/darth_vader.txt
# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
//cp storm_trooper.txt tie_fighter_2/storm_trooper.txt
//cp storm_trooper.txt tie_fighter_3/storm_trooper.txt
# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
//mv tie_fighter_1 ../tie_fighter_1
//mv tie_fighter_2 ../tie_fighter_2
//mv tie_fighter_2 ../tie_fighter_2
# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
//rm -r tie_fighter_2 tie_fighter_3
# Touch a file in "**x_wing**" called "**the_force.txt**".
//cd ~/Desktop/galaxy_far_far_away/x_wing
//touch the_force.txt
# Destroy the "**death_star**" and anyone inside of it.
//rm -r death_star
# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
//mv ~/Desktop/galaxy_far_far_away/x_wing ~/Desktop/galaxy_far_far_away/yavin_4/x_wing
//mv ~/Desktop/galaxy_far_far_away/millenium_falcon ~/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon
# Celebrate!