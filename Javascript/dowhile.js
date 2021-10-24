subjects = new Array("Maths", " English", "Kiswahili");
marks = new Array();
i = 0;
do{
	num = prompt("Enter the Marks for" + subjects[i]);
	marks[i] = parseInt(num);
	i ++ ;
}
while(i < subjects.length);

i = 0;
msg = "";
do {
	msg += subjects[i] + "Marks:==" + marks[i] + "\n";
	i ++ ;
}
while(i < subjects.length);
alert(msg);
