function windowOPerations(){
	var newWindow = window.open("http://www.google.com","NewWindow","height = 100, width = 200");
	newWindow.moveTo(200, 150);
	newWindow.close();
	window.close();
}

function navigatorProperties(){
	document.write("<br>" + navigator.appCodeName);
	document.write('<br>' + navigator.appName);
	document.write('<br>' + navigator.platform);
	document.write('<br>' + navigator.cookieEnabled);
	document.write('<br>' + navigator.product);
}

navigatorProperties();

function locationProperties(){
	document.write("<br>" + location.href);
	document.write("<br>" + location.protocol);
	document.write("<br>" + location.hostname);
	document.write("<br>" + location.pathname);
}

locationProperties();

function historyProperties(){
	document.write( "<br>" + history.back);
	
}