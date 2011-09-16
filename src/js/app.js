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

    setup_tweetbox: function(){
      twttr.anywhere(function (T) {

        T("#tweet_box").tweetBox({
          label: "Use the form below to tweet what your heart sounds like.<link href='http://localhost:3000/css/tweetbox.css' rel='stylesheet' />",
          height: 100,
          width: 400,
          defaultContent: ""
        });

      });


    },

    initialize: function () {
      this.setup_navigation();
      this.setup_tweetbox();
    }
  });

  window.app = new App();
  
})(jQuery);
