$(document).ready(
  startPage
);

function startPage() {
  $("#belinda").fadeIn(1500);
  $("#long-intro").show();
  $("#popup-about").hide();
  $("#about-button").click(showResume);
  $("#popup-work").hide();
  $("#work-button").click(showWork);
  $("#popup-skills").hide();
  $("#skills-button").click(showSkills);
}

function showResume() {
  $("#popup-about").fadeIn(1500);
  $("#popup-work").hide();
  $("#popup-skills").hide();
  $("#long-intro").hide();
  $("#about-button").click(startPage);
  $("#hide-about").click(startPage);
}

function showWork() {
  $("#popup-work").fadeIn(1500);
  $("#popup-about").hide();
  $("#popup-skills").hide();
  $("#long-intro").hide();
  $("#work-button").click(startPage);
  $("#hide-work").click(startPage);
}

function showSkills() {
  $("#popup-skills").fadeIn(1500);
  $("#popup-about").hide();
  $("#popup-work").hide();
  $("#long-intro").hide();
  $("#skills-button").click(startPage);
  $("#hide-skills").click(startPage);
}
