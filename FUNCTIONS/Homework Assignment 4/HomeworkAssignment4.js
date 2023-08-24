/* 

Homework Assignment #4: Functions


Details:
 
Let's go back to your syllogism (logical argument) examples from Homework #3. 
Now it's time to turn those loose bits of logic into functions. Rather than having procedure that 
demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a 
boolean (True or False) representing whether that name identifies a man 
who is mortal or not. Your function to gracefully handle unexpected inputs 
(such as an unrecognized name or a name that is a not a string at all) 
without throwing an exception.


Extra Credit:

If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.




*/



const syllogismTest = (name) => {


 
	const living_And_Non_living_Thing ={

		'torch' : "nonLiving",
		'laptop' : "nonLiving",
		'hardDisc' : "nonLiving",
		'cactus' : "plant",
		'cat' : "animal",
		'andrew' : "man",
		'N123' : "numeric",
		'socrate' : "man",
		'henAndcow' : "animals"
	};

	


	
const isMortal = ["plant","animal","man"];

const things  = Object.getOwnPropertyNames(living_And_Non_living_Thing)


// console.log(things)
if( typeof name != 'string')
{
	return 'not a string';
}

else if(things.includes(name))
{
	if(isMortal.includes(living_And_Non_living_Thing[name])){
		return true;
	}else{
		return false;
	}
	
}else{
	
	return 'do not exist';
}


}



console.log(syllogismTest('cat'));
console.log(syllogismTest('socrate'));
console.log(syllogismTest(123));
console.log(syllogismTest('kaksa'));
console.log(syllogismTest('henAndcow'));


/*

Extra Credit:


 */

const flavours ={vanilla: true, chocolate : false};

const getFlavours = Object.getOwnPropertyNames(flavours);



const Cake = (flavour,isChocolate) => {

	 if(!isChocolate){
      
     return`If the cake is ${getFlavours[0]}, therefore the cake is not ${getFlavours[1]} `;

	 }else{
     
     return`If the cake is ${getFlavours[1]}, therefore the cake is not ${getFlavours[0]}`;

	 }

}

console.log(Cake(getFlavours,false));