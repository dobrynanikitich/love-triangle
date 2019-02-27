/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;
	preferences.forEach(function(item, i, arr){
		let firstValue = item;
		let secondValue = arr[item - 1];
		let thirdValue = arr[secondValue - 1];
		if(firstValue !== secondValue && firstValue !== thirdValue && secondValue !== thirdValue && thirdValue === i + 1) {
			count++;
		}  
	})
	return count/3;
};
