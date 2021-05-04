


function timer(){
	var st=document.getElementById("time").value;
var s=parseInt(st);
	function timer2(s){

document.getElementById("dis").innerHTML=s;
s--;

	if (s==0) 
	{
		clearInterval(instance);

	}

}

	var instance=setInterval(timer2,1000)
}


	



