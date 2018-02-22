window.onscroll = navPosition;

function navPosition() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("work").className = "fixed-nav";
    } else {
        document.getElementById("work").className = "navbar";
    }
}