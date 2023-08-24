// Switch Statement

/*
switch(expression){
	case value1:
	 statement to be executed when result of expression matches value1
	 break;
	case value2:
	  .....
	  break; 
    case value3:
	  .....
	  break;
	default:
	  break;   

}


*/

const myFruit = "apple";

switch(myFruit){
	case "apple":
	  console.log("Awesome! I love apples.");
	  break;
	case "orange":
	  console.log("Orange are cool :D");
	  break;
	case "pear":
	  console.log("Pears are good too");
	  break;
	default:
	  console.log("That sounds pretty Ok.");
	  break;         
}

console.log("#########################");


const fruitLogger = (fruit) => {

	switch(fruit){
	case "apple":
	  console.log("Awesome! I love apples.");
	  break;
	case "orange":
	  console.log("Orange are cool :D");
	  break;
	case "pear":
	  console.log("Pears are good too");
	  break;
	default:
	  console.log("That sounds pretty Ok.");
	  return;         
	}

  console.log("Broke out of switch statement");	

} 


fruitLogger("apple");
fruitLogger("orange");
fruitLogger("ttststs");


const fruitLogger1 = (fruit) => {


 switch(fruit){ 
   case "apple":
   case "orange":
   case "pear":
     console.log("I love fruit");
     break;
   default:
     console.log("I didn't understand that but sure :D");
     return;   
  }
  console.log("Broke out of switch statement");

}

fruitLogger1("orange");
fruitLogger1("rtrr");

numChecker = (num) => {
	let value;

	switch(num) {
		case 0 :
		case 1 :
		case 2 :
		  value = "Low range";
		  break;
		case 3 :
		case 4 :
		case 5 :
		  value = "Mid range";
		  break;
		case 6 :
		case 7 :
		case 8 :
		  value = "High range";
		  break;
		default :
		  value = "Input number between 0-8";
		  console.log(value);
		  return;
    }

    console.log(" The value is "+ value);
}

numChecker(1);
numChecker(4);
numChecker(7);
numChecker(11);

numChecker1 = (num) => {
	let value;

	switch(num) {
		case 0 :
		case 1 :
		case 2 :
		  value = "low range";
		  break;
		case 3 :
		case 4 :
		case 5 :
		  value = "mid range";
		  break;
		case 6 :
		case 7 :
		case 8 :
		  value = "high range";
		  break;
		default :
		  value = "Input number between 0-8";
		  console.log(value);
		  return;
    }
    
    setVolume(value);
    
}

setVolume = (n) =>{

	console.log("Volume set at " + n);
}

numChecker1(1);
numChecker1(4);
numChecker1(7);
numChecker1(19);

const donutPicker = (flav) => {

	switch(flav) {
		case "s" :
			return "sprinkles";
		case "c" :
			return "chocolate glazed";
		case "b" :
			return "bear claw";
		default  :
			return null;		
	}
}

const donuts = (selection) =>{

	const selectedDonut = donutPicker(selection);
	if (!selectedDonut) {
		console.log("Incorrect selection");
	}else{
	console.log("You have selected " + selectedDonut);
	}
}

donuts("s");
donuts("c");
donuts("b");
donuts("cdcfr");





 