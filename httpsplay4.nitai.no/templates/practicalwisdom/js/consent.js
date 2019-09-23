/* Cookie consent script */
(function($) {
  $(document).ready(function () {

    var cookieName = 'cookie_consent';

    if (!getCookie(cookieName) && !$('body').hasClass('wl_consent_processed')) {
      $('body').addClass('wl_consent_processed');
      window.setTimeout(showBaner, 1000);
    }

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function showBaner() {
      var text = 'We serve cookies on this site to analyse traffic, remember your preferences, and personalise your experience. <a href="/privacy">Learn more</a>';
      var baner = $('<div class="ccompliance"><div class="ccompliance__content"><div class="ccompliance__text">' + text +'</div><div class="ccompliance__button"><button>OK, close</button></div></div></div>').hide();
      $('button', baner).click(function() {
        setCookie(cookieName, 1, 100);
        baner.fadeOut(400);
      });
      baner.appendTo('body').fadeIn(400);
    }
  });
})(jQuery);
