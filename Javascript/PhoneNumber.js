function phoneNumber(){


	var phoneNumber=document.getElementById("phoneNumber").value;
	var phoneNumberLength=phoneNumber.length;




	if (phoneNumberLength>0) {


		document.getElementById("btn").removeAttribute("disabled");
	}

	else{
		document.getElementById("btn").setAttribute("disabled","true");
	}

}
