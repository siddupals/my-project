(function (factory) {
  factory(jQuery);
})(function ($) {
  $.fn.slider = function (opts) {
      var options = $.extend({},opts);

      return this.each(function () {
      var $slider = $(this);
      var $sliderinner = $slider.find('.slider-inner');
      var $slideritems = $sliderinner.find('.slider-items');
      var currentslider=0;
      var numberOfslider =$slideritems.length;
      var itemwidth = $sliderinner.first().width();
      var innerwidth = itemwidth * numberOfslider;

      $sliderinner.width(innerwidth);

      $slideritems.each(function(index,slide){
        var $slide = $(slide);
        $slide.width(itemwidth);
      });
      

    });
  };
});
