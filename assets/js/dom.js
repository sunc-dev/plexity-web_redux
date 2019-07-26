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

var primeTag = document.querySelector(".about-prime-head");
primeTag.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (primeTag) {
        // remove the class
        primeTag.classList.remove("animation-go");

        // force reflow
        void primeTag.offsetWidth;

        // re-add the animated cl
        primeTag.classList.add("animation-go");
    }

});


var secondTag = document.querySelector(".about-second-head");
secondTag.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (secondTag) {
        // remove the class
        secondTag.classList.remove("animation-go");

        // force reflow
        void secondTag.offsetWidth;

        // re-add the animated cl
        secondTag.classList.add("animation-go");
    }

});
