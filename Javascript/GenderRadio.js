	function radioButtonGender(){

	var gender1=document.getElementById("g1").checked;
	var gender2=document.getElementById("g2").checked;

	if(gender1==true){

			document.getElementById("selected-gender").innerHTML="male";

	}
	else if(gender2==true){
		document.getElementById("selected-gender").innerHTML="female";

	}
	else{
		document.getElementById("selected-gender").innerHTML="gender option cant be left empty";
	}




}
