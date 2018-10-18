$(document).ready(function() {

    $("form#quiz").submit(function(event){
      event.preventDefault();
      var age = parseInt($("input#age").val());
      var gender = $("select#gender").val();
      var interests = $("input:radio[name=interests]:checked").val();
        console.log(interests);

      if (age>30 && interests === "sports") {
        $("#sport").show();
      } else if (gender==="female" || interests === "gardening") {
        $("#garden").show();
      } else if (interests === "dancing"){
        $("#dance").show();
      } else{
        $("#cook").show();
      }

    });
});
