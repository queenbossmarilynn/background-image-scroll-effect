const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage()
})


/* Code works better with Portrait Image  */

function updateImage() {
    // Changes the Opacity of the Image as you Scroll Down
    bgImageEl.style.opacity = 1 -window.pageYOffset / 900;
    
    // Check Console # starting at 0 and moving up.
    // console.log(window.pageYOffset, 1 - window.pageYOffset / 900);
    
    // Zooms Background Image and keeps the Size of the Image - If in Portrait View
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"


}