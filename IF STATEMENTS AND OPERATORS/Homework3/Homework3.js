/*
Homework Assignment #3: Statements and Operators

All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types
you see fit, recreate this logical argument. Your code should make 
clear that "socrates" is part of a collection of items referred to as "men",
and that all members of this collection are mortal.
You should also then demonstrate that since Socrates is part of this collection, 
it follows that he is mortal as well.

*/
const Men = true;
const Mortal = true;
const  Man  = true;
const Socrate = true;

if ((Men === Mortal) && (Socrate === Man)){

    console.log("All men are Mortal and Socrate is a Man");
        if(Men === Man){
            console.log("Socrate is among men");
            if ((Men === Man) && (Socrate === Man) && (Socrate === Mortal)) {
               console.log("Therefore , Socrate is mortal");          
             }
        }
               
    }



