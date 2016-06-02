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
      $("#krang").show();
    };

    else if (score >= 9 && ears === "No") {
      $("#match").text("Tina Fey!");
      $("#tina").show();
    };

    else if (score < 9 && ears === "No") {
      $("#match").text("Gary Busey!");
      $("#busey").show();
    };

    else if (score <= 9 && ears === "Yes") {
      $("#match").text("Mrs. Butterworth!");
      $("#butterworth").show();
    };

    else {
      alert("You screwed up.")
    }
  });
});
