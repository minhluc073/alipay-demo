
(function ($) {
    "use strict";
  
  
    /* preload
    ------------------------------------------------------------------------------------- */
    const preload = function () {
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
  