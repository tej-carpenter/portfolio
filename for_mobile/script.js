function openNav() {
    document.getElementById("nav").style.width = "60vw";
    document.getElementById("nav").style.padding = "1vw";
    document.getElementById("empty-nav-box").style.display = "none";
    // document.getElementById("open-nav").style.display = "none";
    // document.getElementById("close-nav").style.display = "block";
    // document.getElementById("main").onclick = "closeNav()";
    // console.log(document.getElementById("main").attributes.onclick)
    document.getElementById("main").setAttribute("onclick","closeNav()");
}
function closeNav() {
    document.getElementById("nav").style.width = "0vw";
    document.getElementById("nav").style.padding = "0vw";
    document.getElementById("empty-nav-box").style.display = "none";
    document.getElementById("main").setAttribute("onclick","openNav()");
    document.getElementById("main").onclick = "";
}


window.addEventListener('load', function () {
    const html = this.document.getElementsByTagName("html")[0];
    html.style.transition = "0.5s ease-in-out";
    html.style.background = "black";
    html.style.border = "2vw solid black";
    html.style.borderRadius = "2vw";

    const body = document.body;
    body.style.borderRadius = "2vw";

});
