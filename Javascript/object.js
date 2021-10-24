//First Method
function createPerson(){
	var person = new Object();
	person.name = "Harrison Wekesa";
	person.destination = "Kitale";
	person.PhoneNumber = 0741947264;
	return person
}
var mtu = createPerson();

//Second Method
function createPerson2(){
	var person2 = {};
	person2.name = "Harrison Wanjala";
	person2.destination = "Moi's Bridge";
	person2.PhoneNumber = 0747947264;
	return person2
}
var mtu2 = createPerson2();

//Third Method
function createPerson3(){
	var person3 = {};
	person3['name'] = "Harrison Wekesa Wanjala";
	person3['destination'] = "Tongaren";
	person3['PhoneNumber'] = 0710279889;
	return person3
}
var mtu3 = createPerson3();
//alert("Name:  " + mtu3.name + "Destination:  " + mtu3.destination + "Phone number:  " + mtu3.PhoneNumber);

//Fourth Method
function createPerson4(){
	var person4 = {
		name : "Harry",
		destination : "Nairobi",
		PhoneNumber : 0719494192
	};
	return person4
}
var mtu4 = createPerson4();

//alert("Name:  " + mtu4.name + "Destination:  " + mtu4.destination + "Phone number:  " + mtu4.PhoneNumber);

//Creating with constructor function
function Person(){
	this.name = "Weezy Babe";
	this.status = "Single";
}

var mtu5 = new Person();
alert("Name:  " + mtu5.name + "Destination:  " + mtu5.destination + "Phone number:  " + mtu5.PhoneNumber);