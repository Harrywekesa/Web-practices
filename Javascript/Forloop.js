subjects = new Array("Maths", " English", "Kiswahili");
marks = new Array();
for(var i = 0; i < subjects.length; i ++){
		num = prompt("Enter your marks in" + subjects[i]);
		marks[i] = parseInt(num);
	};
msg = "";
for( var i = 0; i < subjects.length; i ++)
	msg += subjects[i] + "Marks :==" + marks[i] + "\n";
alert(msg);
