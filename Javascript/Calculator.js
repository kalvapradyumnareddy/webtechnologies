function add() {
  
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var sum = parseInt(a)+parseInt(b) ;
  document.getElementById("res").innerHTML=sum;

}
function subtract(){
  
	var  a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var difference = parseInt(a)-parseInt(b) ;
  document.getElementById("res").innerHTML=difference;
}
function multiply(){

	var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var  product = parseInt(a)*parseInt(b) ;
  document.getElementById("res").innerHTML=product;
}
function divide(){
	 var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var sum = parseInt(a)/parseInt(b) ;
  document.getElementById("res").innerHTML=sum;
}
/*var req1=document.getElementById("num1").value

var req2=document.getElementById("num2").value

var number1=parseInt(req1)
var number2=parseInt(req2)
function cnadd( number1,number2=1 )
{
    var cnSum=number1+number2
    document.getElementById("addCnRes").innerHTML=cnSum
}

?????????????????????????doubt?????????????????????????????
*/

function calculate() {
var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var sum = parseInt(a)+parseInt(b) ;
  document.getElementById("addc").innerHTML=sum;
/*=======================difference=============================*/

  var difference = parseInt(a)-parseInt(b) ;
  document.getElementById("subc").innerHTML=difference;


/*=============================product=========================*/
  var product = parseInt(a)*parseInt(b) ;
  document.getElementById("mulc").innerHTML=product;
/*=============================divide============================*/

  var divide = parseInt(a)/parseInt(b) ;
  document.getElementById("divc").innerHTML=divide;

/*============================================================*/

}
console.log("hey");





