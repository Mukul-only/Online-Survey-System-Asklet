
function verifyPassword(){
    var ps=document.getElementById("password").value;
    var cps=document.querySelector("#con-password").value;
    if(ps.length < 8)
    {
        document.getElementById("messege").classList.add("messege");
        document.getElementById("password").value="";
        document.querySelector("#con-password").value="";
       document.getElementById("messege").innerHTML="** Password length must be grater than 8 characters!";
        return false;
    }
    if(ps.length > 15)
    {
        document.getElementById("messege").classList.add("messege");
        document.getElementById("password").value="";
        document.querySelector("#con-password").value="";
       document.getElementById("messege").innerHTML="** Password length must not exceed 15 characters!";

        return false;
    }
    if(ps != cps)
    {
        document.querySelector("#con-messege").classList.add("messege");
        document.querySelector("#con-messege").innerHTML="** Password not matched!";
        document.getElementById("password").value="";
        document.querySelector("#con-password").value="";
        return false;
    }
}
