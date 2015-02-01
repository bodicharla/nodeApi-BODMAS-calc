function calc(s){

	//infix to postfix 
	var arr= [];
	var arrop=[];
	var op="*/+-()";
	var j=0;
	var ind=-1;
	for( i=0; i<s.length; i++){
		var ch= s.charAt(i);
		if(ch>='0' && ch<='9'){
			arr[j++]=ch;

		}else if (ch=='('){	    
			arrop[++ind]=ch;
		}else if (ch==')'){

			while(ind>=0 && arrop[ind]!='('){
				//console.log(ind);
				//		console.log(arrop[ind]);              
				arr[j++]=arrop[ind--]
			}
			if(ind<0){
				console.log("not valid expression");
				return -1;
			}
			ind=ind-1;

		}else{
			while(ind>=0 && op.indexOf(ch)>=op.indexOf(arrop[ind])){          
				arr[j++]=arrop[ind--]; 
			}
			arrop[++ind]=ch;
		}


	}

	while(ind>=0){
		arr[j++]=arrop[ind--];
	}

	for(k=0; k<j;k++){
		//console.log(arr[k]);
	}

	return arr;

}

module.exports.finresult=function calculate(s, callback){
var res= calc(s);
return final(res);
};

function final(res){

	var st=[];
	var ind= 0;
	var j=0;
	for(k=0; k<res.length;k++){
		var ch= res[k];
		if(ch>='0' && ch<='9'){
			st[j++]=ch;

		}else {
			//	console.log("the charater is "+ch);
			//	console.log("the numbers are "+st[j-2]+" and "+ st[j-1]);
			var fnum =compute(Number(st[j-2]), Number(st[j-1]), ch);
			st[--j]=0;
			st[--j]=0;
			st[j++]=fnum;
		}  

	}

	//console.log("this is finsl result");
	console.log(st[0]);
	return st[0];

};


function compute(num1, num2, op){
	var fin;
	switch (op) {

		case '*':
			fin=num1*num2;
			break;
		case '/':
			fin=num1/num2;
			break;
		case '+':
			fin=num1+num2;
			break;
		case '-':
			fin=num1-num2;
			break;
	}
	return fin;

};




//for(k=0; k<res.length;k++){
//console.log(res[k]);
//}

//calc("(2*3)+(4/5)");
