define(["jquery"], function($){
  $(document).ready(function() {
    $( "#addFamMember" ).click(function() {
      var list = {
          "name":$("#fullName").val(),
          "age":$("#age").val(),
          "gender":$("#gender").val(),
          "skills": [$("#skills").val().split(", "),
          ]
      };
      $.ajax({
        url: "https://nss-jer-family.firebaseio.com/family.json",
        method: "POST",
        data: JSON.stringify(list)
      })
      .done(function(){
        location.reload();
      });
    });
  });
});