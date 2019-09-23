// Start JQuery section
(function($) {
  sifSlider = function(context) {
    $('.sif-tabs-wrapper', context).each(function() {
      var tabs = $(this);
      var active = '';

      $('.sif-tabs-option', tabs).each(function() {
        var tab = $(this);
        $('.sif-tab', tabs).each(function() {
          if ($(this).data('tab') === tab.data('tab')) {
            tab.data('tab_element', $(this));
            $(this).hide();
          }
        });
        tab.click(function() {
          if ($(this).hasClass('active')) return;
          if ($('.sif-tabs-option.active', tabs).length) {
            $('.sif-tabs-option.active', tabs).removeClass('active').data('tab_element').hide();
          }
          var tab_content = tab.addClass('active').data('tab_element');
          tab_content.fadeIn().find('.flexslider').flexslider({
            animation: "slide",
            slideshow: false,
            controlsContainer: $(".custom-controls-container", tab_content),
            customDirectionNav: $(".custom-navigation a", tab_content)
          });
          $(window).resize();
        });
      });
      $('.sif-tabs-option', tabs).first().click();
      tabs.addClass('processed');
    });
  }

  // On DOM Ready
  $(document).ready(function()  {
    sifSlider($('body'));
  });

// END JQuery section
})(jQuery);