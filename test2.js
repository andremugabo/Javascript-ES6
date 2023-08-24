let board = [
			 ['s','o','s','o'],
			 // ['s','o','s','o'],
			 ['s','o','o','s'],
			 ['s','s','s','s']
			 // ['s','s','s','s']
			 ];

let word ="sos";
let i , j , rowt ,row;
let count = 0;
let  b = "";
let e = "";
let c = [];
let d = [];

function checkWordDiagonal(array,w){
	for(let i = 0 ; i < array.length ; i++){
          let substring1 = "";
		for(let j = 0 ; j < array[i].length ; j++){

       				if(i == j){
       					substring1 += array[i][j];
       				}
       								

		}

		         b += substring1; 
              if(substring1.includes(w)){
					count ++;
				}


			// console.log(substring1);
			// console.log(b);
		
	}
	c.push(b);


}
console.log(c);
checkWordDiagonal(board,word);

function checkWord(array,w){
	
	for(let row = 0 ; row < array.length ; row++){
			let substring = "";
		
			for(let column = 0 ; column < array[row].length ; column++){
				substring += array[row][column];
				
			}
			
			if(substring.includes(w)){
				count++;
				
			}
		

	}
	return count;
}

console.log(checkWord(board,word));
console.log(checkWord(c,word));


function MatrixTranspose(matrix,w){


	for( i = 0 ; i < matrix[0].length ; i++){
		let substring = "";
			for( j = 0 ,row = i; j < matrix.length ;row++ , j++){
					substring += matrix[j][i];
					
			}
			console.log(substring);
			if (substring.includes(word)) {
				count++;
			}
			// for(i = 0 ; i < matrix[0].length ; i++){
			// 		d[i] += substring;
			// }
				
		
	}
   // d.push(e);

}

MatrixTranspose(board,word);
// console.log(d);
console.log(count);