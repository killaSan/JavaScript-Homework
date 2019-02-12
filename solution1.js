function sortString(str){
	var arr = str.split('');
	arr.sort();
	arr = arr.join('');
	return arr;
}


function countStrings(str){
	var temp = sortString(str.toLowerCase(str));
	var res = [];
	var cnt = 1;
	for (var i = 0; i < temp.length - 1; i++){
		if (temp[i] == temp[i+1]){
			cnt ++;
		}
		else{
			res.push(cnt);
			cnt = 1;
		}
	}
	res.push(cnt);

	return res
}

function countSpecific(str, symb){
	var res = 0;
	for (var i = 0; i< str.length; i++){
		if (str[i] == symb){
			res += 1;
		}
	}
	return res;
}

function isGood(str){
	for(var i = 0; i < str.length; i++){
		if(str[i] != 0){
			return false;
		}
	}

	return true;
}

function removeNum(str, num){
	var res = [];
	var i = 0;
	for ( i = 0;i<str.length; i++){
		if (str[i] != num){
			res.push(str[i]);
		}
		else{
		i++;
		break;
		}
	}
	newArr = str.slice(i, str.length);
	res = res.concat(newArr);

	return res;
}

function isBad(str, maxEl){
	var arrOutEl = removeNum(str, maxEl);
	console.log(arrOutEl)
	for (var i = 0; i<arrOutEl.length; i++){
		if(Math.abs(arrOutEl[i] - maxEl) != 1)
		{
			return false;
		}
	}

	return true;
}

function res(str){
	var arr = countStrings(sortString(str));
	var diff = [];
	var maxEl = Math.max.apply(Math, arr);
	console.log(maxEl)
	for (var i = 0; i < arr.length - 1; i++){
		diff.push(Math.abs(arr[i] - arr[i+1]));
	}
	if (isGood(diff)){
		console.log('GOOD');
	}else if(isBad(arr,maxEl) && countSpecific(str, maxEl) != 1){
		console.log('BAD');
	}else{
	console.log('UGLY');
	}
}
