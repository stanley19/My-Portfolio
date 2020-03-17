AOS.init({
    offset: 100,
    duration: 850,
    easing: 'ease-in-out',
    delay: 100,
});

/**observer API to know when skills section gets into view**/
var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        $(".skill-value").css({
            animation: "loadProgress 2s ease-in-out"
        })
    } else if (entries[0].isIntersecting === false) {
        $(".skill-value").css({
            animation: "none"
        })
    }
}, {
    threshold: [1]
})
observer.observe(document.querySelector(".skill-value"));