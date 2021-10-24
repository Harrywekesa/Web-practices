subjects = new Array("Maths", " English", "Kiswahili");
marks = new Array();
i = 0;
while( i < subjects.length ){
	num = prompt(" Enter your Marks in " + subjects[i]);
	marks[i] = parseInt(num);
	i ++;
};
i = 0;
msg = "";
while(i < subjects.length){
	msg += subjects[i] + "Marks:== "+ marks[i] + "\n";
	i ++ ;
};
alert(msg);
