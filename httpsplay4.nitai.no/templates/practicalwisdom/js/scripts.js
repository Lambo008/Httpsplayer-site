// Declare Global vars
// var rndCorners;
var showhideTrigger;

// Start JQuery section
(function($) {

  sifVideos = function(context) {
    var mainframe = $('#mainframe', context);
    var $videoTags = $("iframe[src^='https://www.youtube.com']," +
      "iframe[src^='http://www.youtube.com']," +
      "iframe[src^='//www.youtube.com']," +
      "iframe[src^='https://player.vimeo.com']," +
      "iframe[src^='//player.vimeo.com']", context);

    // Figure out and save aspect ratio for each video
    $videoTags.each(function() {
      $(this).data('container_element', $(this).data('container') ? $(this).closest($(this).data('container')) : $(this).parent());
      $(this).data('aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
      if (!$(this).parent('.video-container').length) {
        $(this).wrap('<div class="video-container"></div>');
      }
    });

    $(window).resize(function() {
      // Resize all videos according to their own aspect ratio
      $videoTags.each(function() {
        var newWidth = $(this).data('container_element').width();
        $(this).width(newWidth ? newWidth : null).height(newWidth ? newWidth * $(this).data('aspectRatio') : null);
      });
    }).resize();
  }

  // Show/Hide Trigger
  showhideTrigger = function(id) {
    var cont = $('#'+id+'-cont');
    var trig = $('#'+id+'-trig');
    var isInvis = (cont.css('display') == 'none');
    var trigText = (isInvis ? 'Show Less' : 'Show More');
    trig.text(trigText);
    cont.stop().slideToggle(100, "swing", function() {
      rndCorners(true);
    });

    return false;
  }
  
  // Subnav animation
  subnavAnimate = function(context) {
    $('li.parent', context).on({
      mouseenter: function() {
        $(this).children("ul.nav-child").stop().fadeIn(200);
      },
      mouseleave: function() {
        $(this).children("ul.nav-child").stop().fadeOut(200);
      }
    });
  }
  
  // On DOM Ready
  $(document).ready(function()  {
    // Mobile Menu
    $('#menu-mobile .menu-mobile-head').click(function() {
      $(this).parent().toggleClass('expanded');
    });
  
    sifVideos($('body'));

    // Call Function subnavAnimate()
    subnavAnimate($('#sidebar'));
  });

// END JQuery section
})(jQuery);