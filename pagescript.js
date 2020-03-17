var i = 0;
var name = "print(Dev.Stan)";

function typeInitial() {
    if (i < name.length) {
        document.querySelector(".logo a").innerHTML += name[i];
        i++;
        setTimeout(typeInitial, 150)
    }
    if (i == name.length) {
        setTimeout(function() {
            var logo = document.querySelector("#header-fg .logo a");
            logo.style.padding = "0 0 0 2%";
            logo.innerHTML = "<img src='images/initials/initial.png' id='initial'>";
        }, 1000)
    }
}
setTimeout(typeInitial, 10000); /*Auto start typing*/

/*type intro-line1*/
var c = 0;
var intro1 = "hello!, i'm stanley.";

function typeIntro1() {
    if (c < intro1.length) {
        document.querySelector("#intro-line1").innerHTML += intro1[c];
        c++;
        setTimeout(typeIntro1, 100)
    }
}
setTimeout(typeIntro1, 2000) /*Auto start typing*/
    /*intro-line1 typing ends*/

/*type intro-line2*/
var x = 0;
var intro2 = "i'm a front-end web developer";

function typeIntro2() {
    if (x < intro2.length) {
        document.querySelector("#intro-line2").innerHTML += intro2[x];
        x++;
        setTimeout(typeIntro2, 100)
    }
}
setTimeout(typeIntro2, 5000) /*Auto start typing*/
    /*intro-line2 typing ends*/

/*Auto show Call-To-Action*/
setTimeout(function() {
    $("#call-to-action").fadeIn(1500)
    $("#call-to-action").toggleClass("animated bounce")
}, 8000)


/*Show/hide dropdown menu*/
function toggleMenu() {
    $(".hamburger").toggleClass("open");
    $("#drop-menu").slideToggle(700);
    $("#drop-menu").toggleClass("animated rubberBand")
}

/*Auto Remove header height*/
setTimeout(() => {
    $("header").css("height", "auto")
}, 10000);


/* add listener on input elements and tweak properties when value > 0 */
var inputs = document.querySelectorAll("#contact form textarea, #contact form input");
for (input of inputs) {
    input.onblur = function() {
        if (this.value.length > 0) {
            this.style.background = 'white';
            this.style.color = 'black'
        } else {
            this.style.background = (document.body.classList.contains("dark")) ? 'black' : '#ff6a00';
            this.style.color = 'white';
        }
    }
}

/**Function to toggle between the default page theme and the dark mode**/
function toggleDarkMode(toggleBtn) {
    $(toggleBtn).toggleClass("fa-toggle-on")
    $("body").toggleClass('dark');
    var svgLine = document.querySelector("svg #line")
    svgLine.setAttribute('points', (svgLine.getAttribute('points') == "0,0 50,60 100,0 100,120 0,120 0,0") ? '0,0 50,60 100,0' : '0,0 50,60 100,0 100,120 0,120 0,0')
    var themeMeta = document.querySelector('meta#theme')
    themeMeta.setAttribute('content', (themeMeta.getAttribute('content') == "#ff5200") ? 'black' : '#ff5200')

}