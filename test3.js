// let board = [
// 			 ['s','o','s','o'],
// 			 // ['s','o','s','o'],
// 			 ['s','o','o','s'],
// 			 // ['s','s','s','s'],
// 			 ['s','s','s','s']
// 			 ];

// let board = [
// 			['a','a'],
// 			['a','a']
//             ];

let board = [
			['l','l','l','l','l'],
			['o','o','o','o','o'],
			['l','l','l','l','l']
			];

// let word ="sos";
// let word ="aa";
let word ="lol";

let i , j , row ;
let countRow = 0;
let countColumn = 0;
let coutDiagonal = 0;
let stringWord = "";


function checkWordOnRow(Array,Word){
	for(i = 0 ; i < Array.length ; i++ ){
		let substring = "";
		for(j = 0 ; j < Array[i].length ; j++){

			substring += Array[i][j];
		} 

		if (substring.includes(Word)) {

			countRow ++;
		}
	}
	return countRow;
}

function checkWordOnColumn(Array,Word){
	for(i = 0 ; i < Array[0].length ; i++){
       let substring = "";
       for(j = 0 , row = i ; j < Array.length ; row++ , j++ ){

       	 substring += Array[j][i];
       }
       // console.log(substring);
       if(substring.includes(Word)){

       		countColumn ++;
       }
	}

	return countColumn;
}

function checkWordOnDiagonal(array,Word){
	for(i = 0 ; i < array.length ; i++){
		let substring = "";
		for(j = 0 ; j < array[i].length ; j++){

			if (i == j ) {

				substring += array[i][j];

			}
             
			 
		}
		stringWord += substring;
		if (stringWord.includes(Word)) {
			coutDiagonal++;
			// console.log(stringWord);
		}
		
	}
	return coutDiagonal;
}


let wordOnRow = checkWordOnRow(board,word);
let wordOnColumn = checkWordOnColumn(board,word);
let wordOnDiagonal = checkWordOnDiagonal(board,word);
let result = wordOnRow + wordOnColumn + wordOnDiagonal ;
 console.log(result);

  