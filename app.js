function shedareba() {
    let paroli1 = document.getElementById("password").value;
    let paroli2 = document.getElementById("repassword").value;
    console.log (paroli1, paroli2)
    if(paroli1!=paroli2 || paroli1 == "" || paroli2 == ""){
        console.log ("paroli ar emtxveva")
        document.getElementById("answer").innerHTML="არ ემთხვევა"
        document.getElementById("password").style.border = "2px solid #ff0000"
        document.getElementById("repassword").style.border = "2px solid #ff0000"
        document.getElementById("answer").style.color= "#ff0000"
    }
    else {
        console.log("parolebi emtxveva")
        document.getElementById("answer").innerHTML="ემთხვევა"
        document.getElementById("password").style.border = "2px solid #00ff00"
        document.getElementById("repassword").style.border = "2px solid #00ff00"
        document.getElementById("answer").style.color= "#00ff00"

    }
   
    }

   
    const nav = ["Home", "About", "Gallery","Contact"]
    const links = ["index.html", "About.html", "Gallery.html","Contact.html"]

    let text = "<ul class='flex'>";
    
    for(let i=0;i<nav.length;i++){
        text +="<li><a href="+links[i]+">" + nav[i] + "</a></li>";
        console.log(nav[i])
    }
    text+= "</ul>"
    
    document.getElementById("nav").innerHTML=text;
