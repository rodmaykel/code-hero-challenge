module.exports = function(array, sum) {
	for (var i = 1; i<array.length; i++) {
		x = 0;
		y = i;
		while(y < array.length) {
			//console.log(x + "," + y);
			if (array[x] + array[y] == sum) {
				return [array[x],array[y]];
			}
			x = x+1;
			y = y+1;
		}
	}
	return undefined;
}
;
