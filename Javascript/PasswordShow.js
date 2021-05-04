function  showPassword() {
	document.getElementById("password").removeAttribute("type");

}
function hidePassword(){
document.getElementById("password").setAttribute("type","password");

}


function showHidePassword(){


var string=document.getElementById("password").getAttribute("type");


if (string=="password") {


	document.getElementById("password").setAttribute("type","text");

}
else{


	document.getElementById("password").setAttribute("type","password")

}
}
