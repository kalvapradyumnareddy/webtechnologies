function checkPhone(){

    var phoneNum=document.getElementById("in").value;
    var length=phoneNum.length;
   if (length==10) {
       
    document.getElementById("in").style.backgroundImage="url('images/right.jpg')";
    document.getElementById("in").style.backgroundSize="20px 20px";
    document.getElementById("in").style.backgroundRepeat="no-repeat";
    document.getElementById("in").style.backgroundPosition="right";
    document.getElementById("in").style.backgroundColor="transparent";
    document.getElementById("in").style.boxShadow="2px 2px 2px  2px green"
    document.getElementById("in").focus()
   } else {
    document.getElementById("in").style.backgroundImage="url('images/wrong.jpg')";
    document.getElementById("in").style.backgroundSize="20px 20px";
    document.getElementById("in").style.backgroundRepeat="no-repeat";
    document.getElementById("in").style.backgroundPosition="right";
    document.getElementById("in").style.backgroundColor="transparent";
    document.getElementById("in").style.boxShadow="2px 2px 2px 2px red";
    document.getElementById("in").focus()
   }

}
function alertCall(){
    var phoneNum=document.getElementById("in").value;
    var length=phoneNum.length;
    if (length==0) {
        var txt=prompt("please enter the phonenumber");
        document.getElementById("p").innerHTML=txt;
    }   
        
       
}