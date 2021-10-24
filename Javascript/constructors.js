//Called when an object is creaed using the new keyword
subjects = new Array("Maths", "English", "Kiswahili");
document.write(subjects);

//Using Constructors
var new Function("a", "b", "return a + b;");


var addFunc = new Function("a", "b", "return a + b;");
var c = addFunc(2, 3);