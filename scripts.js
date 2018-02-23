window.onscroll = navPosition;
console.log(window);

function navPosition() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("nav").className = "navbar fixed";
    } else {
        document.getElementById("nav").className = "navbar initial";
    }
}