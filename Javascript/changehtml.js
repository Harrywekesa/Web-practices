document.getElementById("abc").innerHTML = "Hi There I am Harrison Wekesa";
//Statically
function changekala(){
	document.getElementById("btn").setAttribute("style"," color : red");
}

//dynamically
document.getElementById("btn2").addEventListener("click", btnClicked);
function btnClicked(){
	document.getElementById("btn2").setAttribute("style","color : magenta");
}

document.getElementById("abc").addEventListener("mouseover", mouseover);
function mouseover(){
	document.getElementById("abc").setAttribute("style","color : magenta");
}