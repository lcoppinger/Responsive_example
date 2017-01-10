var EvenHeightHelper = (function($) {
  function setHeights(className) {
    var heights = $(className).map(function() {
      $(this).height('auto');
      return $(this).height();
    }).get();
    var maxHeight = Math.max.apply(null, heights);
    $(className).height(maxHeight);
  }

  $(document).ready(function() {
      setHeights('.js-even-height');
  });

  $(window).resize(function() {
      setHeights('.js-even-height');
  });

  return {
    makeEvenHeight: function(className) {
      setHeights(className);
    }
  };
})(jQuery);
