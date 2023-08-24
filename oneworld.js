let operations = [
				 ["add","express","1.1"],
				 ["add","async","1.0"],
				 ["add","express","1.0"],
				 ["add","express","1.0"],
				 ["install"],
				 ["add","express","1.2"],
				 ["install"]
				 ];

let array = [];




	function solution(operations){
		
		for(let i = 0 ; i < operations.length ; i++){
			let string = "";
			for(let j = 0 ; j < operations[i].length; j++){
				// let string = "";
				// console.log(operations[i][j]);
				if (operations[i].length > 1) {
					string+=operations[i][1]+"-"+operations[i][2];

				}
				break;
			}
			if (operations[i].length > 1) {
				array.push(string);
			}
			
		}
		array = [...new Set(array)];
		console.log(array.sort());
	}			 


	solution(operations);


// function solution(n) {
// let n_ConvertTostring  = n.toString();
// let array = [];

// array = n_ConvertTostring.split('');

// let firstInput = array[0];
// let secondInPut = array[1];


// let result = firstInput + secondInPut ;

// return result;
// }
/*
CodeSignal Add Two Digits Problem:
You are given a two-digit integer n. Return the sum of its digits.
Example
For n = 29, the output should be
addTwoDigits(n) = 11.
Input/Output
[execution time limit] 4 seconds (js)
[input] integer n
A positive two-digit integer.
Guaranteed constraints:
10 ≤ n ≤ 99.
[output] integer
The sum of the first and second digits of the input number.
*/

// Solution :

function addTwoDigits(n) {
  // Takes number in n and converts it to string i.e. 29 becomes '29'
  let str = n.toString();
  // Creates array where each string in str is an array element i.e 29 becomes ['2', '9']
  let arr = str.split('');
  
  let arr0 = arr[0];
  let arr1 = arr[1];
  
  // Unary operator converts ['2', '9'] to [2, 9] when added
  // Adds 2 + 9 to get correct answer of 11
  return +arr[0] + +arr[1];
}


console.log(addTwoDigits(29));

let board = [
            ['s','o','s','o'],
            ['s','o','o','s'],
            ['s','s','s','s']
            ];
let word ="sos";

let countOnRow = 0;
            
function solution(board, word) {

for(let i = 0 ; i < board.length ; i++){
    let rowInString = "";
    for(let j = 0 ; j < board[i].length ; j++){
        
        rowInString += board[i][j];
    }
    
    if(rowInString.includes(word)){
        countOnRow ++;
        console.log(rowInString);
    }
}
// console.log(countOnRow);
}


// console.log(solution(board, word));
solution(board, word);


function solution(operations) {
let result = []; 
console.log(result.legnth);

for(let i = 0 ; i < operations.length ; i ++){
    
    let putEntriesInAString = "";
    for(let j = 0 ; j < operations[i].length; j++){
        
        if(operations[i].length ==  3){
            putEntriesInAString += operations[i][1]+"-"+operations[i][2];
        }
        break;
    }
    if(operations[i].length > 1){
        result.push(putEntriesInAString);
    }
}

result = [...new Set(result)];
final = [];
let row ,column;
let librarie = "";

for(let i = 0 ; i < result.legnth ; i ++){
    librarie  = result[i]
    
    for( row = 0 ; row < operations.length ; row ++){
    let obtainedlibraie = "";
    for(column = 0 ; column < operations[row].length ; column ++ ){
        obtainedlibraie += operations[row][column];
        
               console.log(obtainedlibraie);
    }
    
    if((librarie == obtainedlibraie) && (librarie != "async")){
        
        for(let t=1 ; t < operations[i].length ; t++ ){
            if (operations[i][0] != "install"){
                result.splice(i,1);
                final = result;
            }
        }
    }
    
    
}
    
}


console.log(result.legnth);
return result;

}


let myArray = solution(operations);
console.log(myArray);


function solution(n, m) {

    let number = (m % n);
    let result = (m - number)
    
    return result;
    }

console.log(solution(3,10));




