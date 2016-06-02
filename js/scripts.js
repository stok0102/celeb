$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var starsignInput = parseInt($("#starsign").val());
    var favDateInput = parseInt($("#favDate").val());
    var favColorInput = parseInt($("#favColor").val());
    var ears = $("#ears").val();
    var score = starsignInput + favDateInput + favColorInput;

    if (score < 9 && ears === "Yes") {
      $("#match").text("Krang from the Ninja Turtles!");
      $(this).siblings().hide();
      $("#krang").show();
    }

    else if (score >= 9 && ears === "No") {
      $("#match").text("Tina Fey!");
      $(this).siblings().hide();
      $("#tina").show();
    }

    else if (score < 9 && ears === "No") {
      $("#match").text("Gary Busey!");
      $(this).siblings().hide();
      $("#busey").show();
    }

    else if (score >= 9 && ears === "Yes") {
      $("#match").text("Mrs. Butterworth!");
      $(this).siblings().hide();
      $("#butterworth").show();
    }

    else {
      alert("You screwed up.")
    }
  });
});
