
if(!localStorage.getItem("uname")){
    alert("please log in")
    window.location="login.html"

}

username=localStorage.getItem("uname")
console.log(username);
output.innerHTML=`welcome ${username}`

function logout(){
    localStorage.removeItem("uname")
    window.location="login.html"
}