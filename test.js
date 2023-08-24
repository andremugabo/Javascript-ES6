let board = [['s','o','s','o'],
			 ['s','o','o','s'],
			 ['s','s','s','s']];
// let substring = "";
let word ="sos";
let countrow = 0 ;
let countcolumn = 0 ;
let countdiagonal = 0 ;


function checkWord(array,w){
	
	for(let row = 0 ; row < array.length ; row++){
			let substring = "";
		if(w.length < array.length)	{
			for(let column = 0 ; column < array[row].length ; column++){
				substring += array[row][column];
				console.log(substring);
			}
			console.log(substring);
			if(substring.includes(w)){
				countrow++;
				console.log(countrow)
			}
		}

	}
	return countrow;
}

console.log(checkWord(board,word));
checkWord(board,word);