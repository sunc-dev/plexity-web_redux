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


/*Animation - Tech - Points*/


var itembox = document.querySelector(".scene-1");
itembox.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (itembox) {
        // remove the class
        itembox.classList.remove("animation-ready");

        // force reflow
        void itembox.offsetWidth;

        // re-add the animated cl
        itembox.classList.add("animation-ready");
    }

});


var itembox2 = document.querySelector(".scene-2");
itembox2.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function (itembox2) {
        // remove the class
        itembox2.classList.remove("animation-ready");

        // force reflow
        void itembox2.offsetWidth;

        // re-add the animated cl
        itembox2.classList.add("animation-ready");
    }

});
