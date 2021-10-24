function validate1(){
	var x = document.forms["myform"]["text1"].value;
	if (x == ""){
		alert("All fields must be filled!");
		return false;
	}
}
