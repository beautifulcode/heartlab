(function ($) {
  
  App = Backbone.View.extend({

    setup_navigation: function(){
      $('#navigation a').click(function(e){
          var page = e.target.href.split('#')[1];
          $('html, body').animate({scrollTop: $('#'+page).offset().top}, 500);  
          e.preventDefault();
        }
      );
    },
    
    initialize: function () {
      this.setup_navigation();
    }
  });

  window.app = new App();
  
})(jQuery);
