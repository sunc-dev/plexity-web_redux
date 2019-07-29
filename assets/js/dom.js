/*Animation - Header/Landing/Hero */

var keylines = document.querySelector(".keylines-canvas");
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

/*Animation - About - Mission */

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

/*Animation - About - How */

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


/*Animation - About - Approach */

var imgCanvas = document.querySelector(".img-canvas");
imgCanvas.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (imgCanvas) {
        // remove the class
        imgCanvas.classList.remove("animation-go");

        // force reflow
        void imgCanvas.offsetWidth;

        // re-add the animated cl
        imgCanvas.classList.add("animation-go");


    }

});

/*Animation - New - Begin*/

var appContainer = document.querySelector(".approach-content_container");
appContainer.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (appContainer) {
        // remove the class
        appContainer.classList.remove("animation-go");

        // force reflow
        void appContainer.offsetWidth;

        // re-add the animated cl
        appContainer.classList.add("animation-go");
    }

});




