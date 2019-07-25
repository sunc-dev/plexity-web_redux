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

var taglines = document.querySelector(".about-prime-head");
taglines.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (taglines) {
        // remove the class
        taglines.classList.remove("animation-go");

        // force reflow
        void taglines.offsetWidth;

        // re-add the animated cl
        taglines.classList.add("animation-go");
    }

});