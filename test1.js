// let transposed_Array = [];			 
// let substring1 = "";
// let substring2 = "";
// let word ="sos";
// let countrow = 0 ;
// let countcolumn = 0 ;
// let countdiagonal = 0 ;

// function checkWordrow(array,w){
// 	for(let i = 0 ; i < array.length ; i++){
//           substring1 = "";
// 		for(let j = 0 ; j < array[i].length ; j++){

// 				substring1 += array[i][j];				

// 		}
//               if(substring1.includes(w)){
// 					countrow ++;
// 				}


// 			console.log(substring1);
		
// 	}

// }

// function transposeMatrix(matrix) {
// 	var result = new Array(matrix.length);
// 	for (var i = 0; i < matrix.length; ++i) {
// 		result[i] = new Array(matrix[0].length);
// 	}
// 	for (var i = 0; i < matrix.length; ++i) {
// 		for (var j = 0; j < matrix[0].length; ++j) {
// 			result[j][i] = matrix[i][j];
// 		}
// 	}
// 	return result;
// }

// function printMatrix(matrix) {
// 	var text = '';
// 	for (var i = 0; i < matrix.length; ++i) {
// 		var row = matrix[i];
// 		for (var j = 0; j < row.length; ++j) {
// 			text += row[j] + ' ';
// 		}
// 		text += '\n';
// 	}
// 	console.log(text);
// }

// let tmatrix = transposeMatrix(board)

// function transposedArray(array){
// 	 transposed_Array = new Array(array.length);

// 	for(let i = 0; i < array.length ; ++i){
// 		transposed_Array[i] = new Array(array[0].length);
// 	}

// 	for(let i = 0 ; i < array.length ; ++i){
// 		for(let j = 0 ; j < array[0].length ; ++j){
			
// 				transposed_Array[j][i]=array[i][j];			

// 		}

// 	}
// 	return transposed_Array;
// }

// printMatrix(tmatrix);

// checkWordrow(board,word);
// // checkWordcolumn(board);
// console.log(countrow);
// console.log(transposed_Array);
// transposedArray(board);

// console.log(transposedArray(board));
function createMatrix(width, height) {
	var result = new Array(height);
	for (var i = 0; i < height; ++i) {
		result[i] = new Array(width);
	}
	return result;
} 

function transposeMatrix(matrix) {
	if (matrix.length == 0) {
		return [];
	}
	var matrixRow = matrix[0];
	if (matrixRow == null) {
		throw new Error('Undefined matrix row 1.');
	}
	var matrixWidth = matrixRow.length;
	var matrixHeight = matrix.length;
	var result = createMatrix(matrixWidth, matrixHeight);
	for (var i = 0; i < matrixHeight; ++i) {
		var matrixRow = matrix[i];
      	if (matrixRow == null) {
			throw new Error('Undefined matrix row ' + (i + 1) + '.');
		}
		if (matrixWidth != matrixRow.length) {
			throw new Error('Matrix row ' + (i + 1) + ' has different width than row 1.');
		}
		for (var j = 0; j < matrixWidth; ++j) {
			result[j][i] = matrixRow[j];
		}
	}
	return result;
}

// Helper methods:

function printMatrix(matrix) {
	var text = '';
	for (var i = 0; i < matrix.length; ++i) {
		var row = matrix[i];
		for (var j = 0; j < row.length; ++j) {
			text += row[j] + ' ';
		}
		text += '\n';
	}
	console.log(text);
}

// // Usage example:

// var matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

var matrix = [
	[1, 2, 3, 5],
	[4, 5, 6, 6],
	[7, 8, 9, 7],
	[7, 8, 9, 7]
];
var transposedMatrix = transposeMatrix(matrix);
printMatrix(transposedMatrix);
// function transposeMatrix(matrix) {
// 	var result = new Array(matrix.length);
// 	for (var i = 0; i < matrix.length; ++i) {
// 		result[i] = new Array(matrix[0].length);
// 	}
// 	for (var i = 0; i < matrix.length; ++i) {
// 		for (var j = 0; j < matrix[0].length; ++j) {
// 			result[j][i] = matrix[i][j];
// 		}
// 	}
// 	return result;
// }

// // Helper methods:

// function printMatrix(matrix) {
// 	var text = '';
// 	for (var i = 0; i < matrix.length; ++i) {
// 		var row = matrix[i];
// 		for (var j = 0; j < row.length; ++j) {
// 			text += row[j] + ' ';
// 		}
// 		text += '\n';
// 	}
// 	console.log(text);
// }

// // Usage example:

// var matrix = [
// 	[1, 2, 3, 5],
// 	[4, 5, 6, 6],
// 	[7, 8, 9, 7],
// 	[7, 8, 9, 7]
// ];
// var transposedMatrix = transposeMatrix(matrix);

// printMatrix(transposedMatrix);