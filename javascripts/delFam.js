define(["firebase"],function(_firebase) {
 return {
   delFamMember: function(blackList) {
    console.log(argument);
     var ref = new Firebase("https://nss-jer-family.firebaseio.com/family/" + blackList);
     ref.remove();
     location.reload();
   }
 };
});