// fullscreen mode
var elem = document.documentElement;
const fullScreenButton = document.getElementById("fullscreen");
let fullscreened = false;

fullScreenButton.addEventListener("click", () => {
    if (!fullscreened) {
        openFullscreen();
        fullscreened = true;
    } else {
        closeFullscreen();
        fullscreened = false;
    }
});

/* View in fullscreen */
function openFullscreen() {
    elem.requestFullscreen();
}

/* Close fullscreen */
function closeFullscreen() {
    document.exitFullscreen();
}