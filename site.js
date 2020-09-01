/* CURSOR */
const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener("mouseenter", onMouseHover);
    $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, 0.4, {
        x: e.clientX - 15,
        y: e.clientY - 15
    });
    TweenMax.to($smallBall, 0.1, {
        x: e.clientX - 15,
        y: e.clientY - 15
    });
}

// Hover an element
function onMouseHover() {
    TweenMax.to($bigBall, 0.3, {
        scale: 4
    });
}
function onMouseHoverOut() {
    TweenMax.to($bigBall, 0.3, {
        scale: 1
    });
}

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);



document.addEventListener('mousemove', parallax);

var banner = document.getElementById("js-banner")
var bannerProjects = document.getElementById("js-banner-projects");
var mouseOverBanner = false

if(banner!=null) {
    banner.addEventListener('mouseenter', function () {
        mouseOverBanner = true
    });
    banner.addEventListener('mouseleave', function () {
        mouseOverBanner = false
    });
}
if(bannerProjects!=null) {
    bannerProjects.addEventListener('mouseenter', function () {
        mouseOverBanner = true
    });
    bannerProjects.addEventListener('mouseleave', function () {
        mouseOverBanner = false
    });
}
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer=>{
        var speed = layer.getAttribute('data-speed')

        if(mouseOverBanner){
            var x = (window.innerWidth - e.pageX * speed)/100
            var y = (window.innerWidth - e.pageY * speed)/100
            layer.style.transform= 'translateX('+ x +'px) translateY('+ y + 'px)'
        }
    })

}


