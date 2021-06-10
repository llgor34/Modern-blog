function changeTheme(blacktheme)
{
    if(blacktheme == false)
    {
        var url = "img/tekst1.png";
        blacktheme = true;

        document.body.style.backgroundImage = "url("+url+")";
        document.getElementById("content").style.backgroundColor = "#323232";
        document.getElementById("content").style.color = "white";
        document.getElementById("h41").style.borderColor = "white";
        document.getElementById("h42").style.borderColor = "white";

        document.getElementById("comments").style.backgroundColor = "#323232";
        document.getElementById("comments").style.color = "white";
        document.getElementById("pl").style.borderColor = "white";
        document.getElementById("border").style.borderColor = "white";

        document.getElementById("theme").setAttribute("onclick","changeTheme("+blacktheme+")");
    }
    else
    {
        var url = "img/tekst.png";
        blacktheme = false;

        document.body.style.backgroundImage = "url("+url+")";
        document.getElementById("content").style.backgroundColor = "whitesmoke";
        document.getElementById("content").style.color = "black";
        document.getElementById("h41").style.borderColor = "black";
        document.getElementById("h42").style.borderColor = "black";

        document.getElementById("comments").style.backgroundColor = "whitesmoke";
        document.getElementById("comments").style.color = "black";
        document.getElementById("pl").style.borderColor = "black";
        document.getElementById("border").style.borderColor = "black";

        document.getElementById("theme").setAttribute("onclick","changeTheme("+blacktheme+")");
    }
}