jQuery(document).ready(function (e) {
    function a(a, t, n) {
        e(a).on("onscreen", function (a, i) {
            i.percentInview > t ? e(n || this).addClass("animation-go") : e(n || this).removeClass("animation-go")
        }

        )
    }

});