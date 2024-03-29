(function ($) {
  
  App = Backbone.View.extend({

    setup_parallax: function(){
      // call the plugin
      $('#bluestars').parallax({ "coeff":-0.8 });
      $('#clipped_letters').parallax({ "coeff":1.75 });
      $('#clipped_stars').parallax({ "coeff": 0.5 });
      $('#stitched_book_2').parallax({ "coeff":1.2 });
          
    },

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
          label: "Use the form below to tweet what your heart sounds like.<link href='http://www.touchstonesnelson.ca/exhibitions/heartlab/css/tweetbox.css' rel='stylesheet' />",
          height: 100,
          width: 400,
          defaultContent: "",
          onTweet: function(plain, html){  
            window.location.reload();
          }  
                
        });

      });


    },

    initialize: function () {
      this.setup_navigation();
      this.setup_tweetbox();
      this.setup_parallax();
    }
  });

  window.app = new App();
  
})(jQuery);
