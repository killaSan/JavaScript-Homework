function cntNumbers(arr){
	var cnt = 0;
	for (var i = 0; i < arr.length; i++){
		if(typeof arr[i] == 'number'){
			cnt++;
		}
	}
	return cnt;
}

function reverseStr(el){
	var res = el.split('');
	res = res.reverse();
	return res.join('');
}


function retStr(el){
	return Object.keys(el) + ": "+ Object.values(el);
}

function isNotNested(el){
	for (var i = 0;i < el.length; i++)
	{
		if (typeof el[i] != 'number'){
			return false;
		}
	}
	return true;
}

function flatten(arr) {
  return [].concat(...arr)
}
function unNest(arr) {
	return flatten(arr.map(x=>Array.isArray(x)? unNest(x): x))
}

function sortArr(arr){
	return arr.sort();
}

function checkEqual(arr1, arr2){
	if (arr1.length != arr2.length){
		return false;
	}
	for (var i = 0; i < arr1.length; i++){
		if (arr1[i] != arr2[i] || typeof(arr1[i]) != 'number' || typeof(arr2[i]) != 'number'){
			return false;
		}
	}
	return true;
}

function newArr(arr){
	var res = [];
	if(cntNumbers(arr) != 0){
	res.push(cntNumbers(arr));
	}
	arr = arr.filter(x => typeof x != 'number');
	for (var i = 0 ; i < arr.length; i++){
		if (typeof arr[i] == 'string'){
			res.push(reverseStr(arr[i]));
		}else if(Array.isArray(arr[i])){
			var arrUnnest = unNest(arr[i]);
			if(!checkEqual(arr[i], arrUnnest)){
			res.push(unNest(arr[i]));
			}else{
			res.push(sortArr(arr[i]));
			}
		}else if(typeof(arr[i]) == 'object'){
			res.push(retStr(arr[i]))
		}
		else{ // function
			res.push(arr[i](42));
		}	
	}
	return res;
}
