requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["jquery", "lodash", "hbs", "bootstrap", "firebase", "addFam", "delFam", "q"],
  function($, _, Handlebars, bootstrap, _firebase, addFam, delFam, Q) {
    var myFirebaseRef = new Firebase("https://nss-jer-family.firebaseio.com/");
    myFirebaseRef.on("value", function(snapshot) {
      console.log(snapshot.val());

      var familyMembers = snapshot.val();

      var familyArray = [];
      for (var i in familyMembers) {
        familyArray[familyArray.length] = familyMembers[i];
      }


      require(['hbs!../templates/family'], 
      function(familyTemplate) {
      $("#main").append(familyTemplate(familyMembers));

        ///styling effects for movie containers ////
          $('.movie-info').on('mouseover', function(){
              $(this).addClass('shadow'); 
            });
          $('.movie-info').on('mouseout', function(){
            $(this).removeClass('shadow');
          });
      });
    });


  $('#main').on("click",".delButton", function() {
     var retVal = confirm("This will delete your family member. Click ok to continue");
     if (retVal === true) {
       var getKey = $(this).closest(".fams").attr("data-key");
       delFam.delFamMember(getKey);     
     } else {
       return false;
       }
  });
});
