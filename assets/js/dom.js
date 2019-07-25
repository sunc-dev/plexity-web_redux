var keylines = document.querySelector(".keylines-matte");
keylines.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (keylines) {
        // remove the class
        keylines.classList.remove("animation-go");

        // force reflow
        void keylines.offsetWidth;

        // re-add the animated cl
        keylines.classList.add("animation-go");
    }

});


var os = new OnScreen({
    tolerance: 0,
    debounce: 100,
    container: window
});

$('.about-mission-matte').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function () {
        $('.about-mission-matte').classList.add("animation-go");
    },
    doOut: function () {
        $('.about-mission-matte').classList.remove("animation-go");
    },
    tolerance: 0,
    throttle: 50,
    toggleClass: 'onScreen',
    lazyAttr: null,
    lazyPlaceholder: 'someImage.jpg',
    debug: false
});