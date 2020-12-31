let evenNum = () => {
	let arr=[];
	for(i=0; i<51; i++){
		if(i%2===0){
			return arr.push(i);
		}
	}
	return arr;
}
evenNum();
