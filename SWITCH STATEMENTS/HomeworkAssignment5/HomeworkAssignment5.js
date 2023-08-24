/*


Homework Assignment #5: Switch Statements


Details:
 
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 

The function should accept 4 parameters:

value1, label1, value2, label2

- value1 and value2 should accept positive integers  

- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

For example your function may be called in any of the following ways:

timeAdder(1,"minute",3,"minutes")

timeAdder(5,"days",25,"hours")

timeAdder(1,"minute",240,"seconds")


Requirements:

1. Your function should include at least one switch

2. Your function must accept any possible combination of inputs 

3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:

return [5,"minutes"]; 

The exact label you choose to return for label3 ("minutes" for example) is up to you.

4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:

timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural

timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types

timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

Extra Credit:

Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value

For example if someone calls:

timeAdder(20,"hours",4,"hours")

You could return: [1,"day"] rather than [24,"hours"]

But if they called

timeAdder(20,"hours",5,"hours")

You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.



*/

addTime = (num1,type1,num2,type2) => {

	let result;
	let array = [];
	let getResult;
	let getSeconds;
	let gatMinutes;
	

	switch(type1){

		case "second":
             
            if (type2 === type1) {

                result = num1 + num2 ;
                array.push(result,"seconds");
				return array; 

            }else if(type2 === "seconds"){

             	    
             	  result= num1 + num2 ;
                     
                     if(result < 60 ){

						                     	array.push(result,type2);
										         return array;

                     }else if(result == 60) {

						                     	 getResult = (result/60);
						                         array.push(getResult,"minute");
										         return array;

                     }else if(result > 60){

							                     	 if((result % 60) == 0){
							                     	 		 getResult = (result/60);
							                     	 		 array.push(getResult,"minutes");
							                                 return array; 	
							                     	 }else{
							                     	 		 array.push(result,"seconds");
							                                 return array;	 		 	

							                     	 }

                     	               }
            }else if((type2 === "minute") || (type2 === "minutes")){

            	    getSeconds = num2 * 60;
            	    result     = getSeconds + num1;

            	    if((result % 60) == 0){
            	    	getResult = (result/60);
            	    	array.push(getResult,"minutes");
            	    	return array;
            	    }else{

            	    	array.push(result,"seconds");
            	    	return array;

            	    }


            }else if((type2 === "hour") || (type2 == "hours")){

            	getSeconds = num2 * 3600;
            	result     = getSeconds + num1;

            	if((result % 3600) == 0){
            		getResult = (result/3600)
            		array.push(getResult,"hours");
            		return array;
            	}else{
            		array.push(result,"seconds");
            		return array;
            	}

            }else if((type2 === "day" || type2 === "days")){

            	getSeconds = num2 * 86400;
            	result     =getSeconds + num1;

            	if((result % 86400) == 0){
            		getResult = (result/86400);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"seconds");
            		return array;
            	}

            }    

             
             break;
      case "seconds": 

      		if (type2 === type1) {

                result = num1 + num2 ;
                array.push(result,type2);
				return array; 

            }else if(type2 === "second"){

             	    
             	  result= num1 + num2 ;
                     
                     if(result < 60 ){

						                     	array.push(result,type2);
										         return array;

                     }else if(result == 60) {

						                     	 getResult = (result/60);
						                         array.push(getResult,"minute");
										         return array;

                     }else if(result > 60){

							                     	 if((result % 60) == 0){
							                     	 		 getResult = (result/60);
							                     	 		 array.push(getResult,"minutes");
							                                 return array; 	
							                     	 }else{
							                     	 		 array.push(result,"seconds");
							                                 return array;	 		 	

							                     	 }

                     	               }
            }else if((type2 === "minute") || (type2 === "minutes")){

            	    getSeconds = num2 * 60;
            	    result     = getSeconds + num1;

            	    if((result % 60) == 0){
            	    	getResult = (result/60);
            	    	array.push(getResult,"minutes");
            	    	return array;
            	    }else{

            	    	array.push(result,"seconds");
            	    	return array;

            	    }


            }else if((type2 === "hour") || (type2 == "hours")){

            	getSeconds = num2 * 3600;
            	result     = getSeconds + num1;

            	if((result % 3600) == 0){
            		getResult = (result/3600)
            		array.push(getResult,"hours");
            		return array;
            	}else{
            		array.push(result,"seconds");
            		return array;
            	}

            }else if((type2 === "day" || type2 === "days")){

            	getSeconds = num2 * 86400;
            	result     =getSeconds + num1;

            	if((result % 86400) == 0){
            		getResult = (result/86400);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"seconds");
            		return array;
            	}

            }    

             
             break;
             case "minute":    

             if (type2 === type1) {

                result = num1 + num2 ;
                array.push(result,type2);
				return array; 

            }else if((type2 === "seconds") || (type2 === "second")){

             	  getSeconds = num1 * 60 ;        
             	  result= getSeconds + num2 ;
                     
                     if((result % 60) == 0){
                     							getResult = (result/60);
						                     	array.push(getResult,"minutes");
										        return array;

                     }else{

						                     	 array.push(result,"seconds");
										         return array;

                     
                     	               }
             }else if((type2 === "minute") || (type2 === "minutes")){

            	    getSeconds = num2 * 60;
            	    result     = getSeconds + num1;

            	    if((result % 60) == 0){
            	    	getResult = (result/60);
            	    	array.push(getResult,"minutes");
            	    	return array;
            	    }else{

            	    	array.push(result,"seconds");
            	    	return array;

            	    }


            }else if((type2 === "hour") || (type2 == "hours")){

            	getMinutes = num2 * 60;
            	result     = getMinutes + num1;

            	if((result % 60) == 0){
            		getResult = (result/60)
            		array.push(getResult,"hours");
            		return array;
            	}else{
            		array.push(result,"minutes");
            		return array;
            	}

            }else if((type2 === "day" || type2 === "days")){

            	getminutes = num2 * 1440;
            	result     = getMinutes + num1;

            	if((result % 1440) == 0){
            		getResult = (result/1440);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"minutes ");
            		return array;
            	}

            }    

             
             break;
             case "minutes":  

             if ((type2 === type1) || (type2 === "minutes")) {

                result = num1 + num2 ;
                array.push(result,type2);
				return array; 

            }else if((type2 === "seconds") || (type2 === "second")){

             	  getSeconds = num1 * 60 ;        
             	  result= getSeconds + num2 ;
                     
                     if((result % 60) == 0){
                     							getResult = (result/60);
						                     	array.push(getResult,"minutes");
										        return array;

                     }else{

						                     	 array.push(result,"seconds");
										         return array;

                     
             }         
            }else if((type2 === "hour") || (type2 == "hours")){

            	getMinutes = num2 * 60;
            	result     = getMinutes + num1;

            	if((result % 60) == 0){
            		getResult = (result/60)
            		array.push(getResult,"hours");
            		return array;
            	}else{
            		array.push(result,"minutes");
            		return array;
            	}

            }else if((type2 === "day" || type2 === "days")){

            	getMinutes = num2 * 1440;
            	result     = getMinutes + num1;

            	if((result % 1440) == 0){
            		getResult = (result/1440);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"minutes ");
            		return array;
            	}

            }    

             
             break;
             case "hour":
				
				if ((type2 === type1) || (type2 == "hours")) {

                result = num1 + num2 ;
                array.push(result,type2);
				return array; 

            }else if((type2 === "seconds") || (type2 === "second")){

             	  getSeconds = num1 * 3600 ;        
             	  result= getSeconds + num2 ;
                     
                     if((result % 3600) == 0){
                     							getResult = (result/3600);
						                     	array.push(getResult,"seconds");
										        return array;

                     }else{

						                     	 array.push(result,"seconds");
										         return array;

                     
                     	               }
             }else if((type2 === "minute") || (type2 === "minutes")){

            	    getSeconds = num1 * 60;
            	    result     = getSeconds + num2;

            	    if((result % 60) == 0){
            	    	getResult = (result/60);
            	    	array.push(getResult,"minutes");
            	    	return array;
            	    }else{

            	    	array.push(result,"seconds");
            	    	return array;

            	    }


            }else if((type2 === "day" || type2 === "days")){

            	getminutes = num2 * 24;
            	result     = getMinutes + num1;

            	if((result % 24) == 0){
            		getResult = (result/24);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"hours");
            		return array;
            	}

            }
            break; 
            case "hours":

				if ((type2 === type1) || (type2 == "hour")) {

                result = num1 + num2 ;
                array.push(result,"hours");
				return array; 

            }else if((type2 === "seconds") || (type2 === "second")){

             	  getSeconds = num1 * 3600 ;        
             	  result= getSeconds + num2 ;
                     
                     if((result % 3600) == 0){
                     							getResult = (result/3600);
						                     	array.push(getResult,"seconds");
										        return array;

                     }else{

						                     	 array.push(result,"seconds");
										         return array;

                     
                     	               }
             }else if((type2 === "minute") || (type2 === "minutes")){

            	    getSeconds = num1 * 60;
            	    result     = getSeconds + num2;

            	    if((result % 60) == 0){
            	    	getResult = (result/60);
            	    	array.push(getResult,"minutes");
            	    	return array;
            	    }else{

            	    	array.push(result,"seconds");
            	    	return array;

            	    }


            }else if((type2 === "day" || type2 === "days")){

            	getminutes = num2 * 24;
            	result     = getMinutes + num1;

            	if((result % 24) == 0){
            		getResult = (result/24);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"hours");
            		return array;
            	}

            }
            break;
            case "day":

            if ((type2 === type1) || (type2 === "days"))  {

                result = num1 + num2 ;
                array.push(result,"type2");
				return array; 

            }else if((type2 === "seconds") || ((type2 === "second"))){

             	    
             	 getSeconds = num1 * 86400;
            	 result     =getSeconds + num2;


            	 		if((result % 86400) == 0){
            		getResult = (result/86400);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"seconds");
            		return array;
            	}

            	      
                     
                    
            }else if((type2 === "minute") || (type2 === "minutes")){

            	    getSeconds = num1 * 1440;
            	    result     = getSeconds + num2;

            	    if((result % 1440) == 0){
            	    	getResult = (result/1440);
            	    	array.push(getResult,"days");
            	    	return array;
            	    }else{

            	    	array.push(result,"minutes");
            	    	return array;

            	    }


            }else if((type2 === "hour") || (type2 == "hours")){

            	getSeconds = num2 * 24;
            	result     = getSeconds + num1;

            	if((result % 24) == 0){
            		getResult = (result/24)
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"hours");
            		return array;
            	}

            }else{
            	return false;
            }

            break;
            case "days":

             if ((type2 === type1) || (type2 === "day"))  {

                result = num1 + num2 ;
                array.push(result,type2);
				return array; 

            }else if((type2 === "seconds") || ((type2 === "second"))){

             	    
             	 getSeconds = num1 * 86400;
            	 result     =getSeconds + num2;


            	 		if((result % 86400) == 0){
            		getResult = (result/86400);
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"seconds");
            		return array;
            	}

            	      
                     
                    
            }else if((type2 === "minute") || (type2 === "minutes")){

            	    getSeconds = num1 * 1440;
            	    result     = getSeconds + num2;

            	    if((result % 1440) == 0){
            	    	getResult = (result/1440);
            	    	array.push(getResult,"days");
            	    	return array;
            	    }else{

            	    	array.push(result,"minutes");
            	    	return array;

            	    }


            }else if((type2 === "hour") || (type2 == "hours")){

            	getSeconds = num2 * 24;
            	result     = getSeconds + num1;

            	if((result % 24) == 0){
            		getResult = (result/24)
            		array.push(getResult,"days");
            		return array;
            	}else{
            		array.push(result,"hours");
            		return array;
            	}

            }else{
            	return false;
            }




         default:
             return false;     

	}
}

getTime = (value1,label1,value2,lable2) => {

	if((value1 > 0) && (value2 > 0)){
                       
          if(value1 >1 && value2 >1){
           switch(label1){

           	case "seconds":
           	case "minutes":
           	case "hours":
           	case "days":
           			switch(lable2){
           				case "seconds":
           				case "minutes":
           				case "hours":
           				case "days":
           				   console.log(addTime(value1,label1,value2,lable2));
           				   break;
           				default :
           				    console.log(false);
           				    break;   
           			}
           			break;
           	default:
           	   console.log(false);
           	   break;		
                 }
             }else if(value1 ==1 && value2 == 1){

             	switch(label1){

           	case "second":
           	case "minute":
           	case "hour":
           	case "day":
           			switch(lable2){
           				case "second":
           				case "minute":
           				case "hour":
           				case "day":
           				   console.log(addTime(value1,label1,value2,lable2));
           				   break;
           				default :
           				    console.log(false);
           				    break;   
           			}
           			break;
           	default:
           	   console.log(false);
           	   break;		
                 }

             }else if(value1 == 1 && value2 > 1){

             	switch(label1){

           	case "second":
           	case "minute":
           	case "hour":
           	case "day":
           			switch(lable2){
           				case "seconds":
           				case "minutes":
           				case "hours":
           				case "days":
           				   console.log(addTime(value1,label1,value2,lable2));
           				   break;
           				default :
           				    console.log(false);
           				    break;   
           			}
           			break;
           	default:
           	   console.log(false);
           	   break;		
                 }
             }else if(value1 > 1 && value2 == 1){

             	switch(label1){

           	case "seconds":
           	case "minutes":
           	case "hours":
           	case "days":
           			switch(lable2){
           				case "second":
           				case "minute":
           				case "hour":
           				case "day":
           				   console.log(addTime(value1,label1,value2,lable2));
           				   break;
           				default :
           				    console.log(false);
           				    break;   
           			}
           			break;
           	default:
           	   console.log(false);
           	   break;		
                 }
             }else{
             	console.log(false + "Incorrect");
             }
                  

	
	}else {
	console.log("Negative value");

  }
}




getTime (1,"second",119,"seconds");
getTime (18998,"second",18119,"hours");
getTime (1,"day",119,"minute");
getTime (1,"hours",119,"minute");
getTime (1,"hour",119,"seconds");
getTime (1212,"days",119,"seconds");
getTime (12,"minutes",119,"days");
getTime (24,"hours",168,"hours");
getTime (23,"hours",1,"hour");
getTime (58,"seconds",2,"seconds");
getTime (58,"minutes",2,"minutes");
getTime (46,"days",2,"days");
