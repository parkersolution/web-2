
// Define data for the popup
var data = [

  
  {
    username: "PREMIO NACIONAL DE LA JUVENTUD",
    userWebsite_href: 'https://www.youtube.com/watch?v=ISTGNCPuaL8',
    userAvatarUrl_img: 'https://si0.twimg.com/profile_images/2910976341/7d972c32f3882f715ff84a67685e6acf_bigger.jpeg',
    userLocation: 'PARKER DURAN'

  },
  
];

// initalize popup
$('button').magnificPopup({ 
  key: 'my-popup', 
  items: data,
  type: 'inline',
  inline: {
    // Define markup. Class names should match key names.
    markup: '<div class="white-popup"><div class="mfp-close"></div>'+
              '<a class="mfp-userWebsite">'+
                '<div class="mfp-userAvatarUrl"></div>'+
                '<h2 class="mfp-username"></h2>'+
              '</a>'+
              '<div class="mfp-userLocation"></div>'+
            '</div>'
  },
  gallery: {
    enabled: true 
  },
  callbacks: {
    markupParse: function(template, values, item) {
      // optionally apply your own logic - modify "template" element based on data in "values"
      // console.log('Parsing:', template, values, item);
    }
  }
});