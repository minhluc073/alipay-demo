
(function ($) {
    "use strict";
  
  
    /* preload
    ------------------------------------------------------------------------------------- */
    const preloader = function () {
      setTimeout(function () {
        $(".preload").fadeOut("slow", function () {
          $(this).remove();
        });
      }, 800);
    };
  
    /* Dom Ready */
    $(function () {
      preload();
    });
  })(jQuery);
  