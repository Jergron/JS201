define(["firebase"],function(_firebase) {
 return {
   delFamMember: function(argument) {
    console.log(argument);
     var ref = new Firebase("https://nss-jer-family.firebaseio.com/family/" + argument);
     ref.remove();
     location.reload();
   }
 };
});