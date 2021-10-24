function myfunc(){
	var x, text;
	x = document.getElementById("numb").value;
	if(isNaN(x)){
		text  = "Input is not valid";
	}else{
		text = "Input is ok";
	}
	alert(text);
}

