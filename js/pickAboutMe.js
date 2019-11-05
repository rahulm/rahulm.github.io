// pickAboutMe.js

ABOUT_ME_LINES = [
  "I'm Rahul, the restless.",
  "I'm Rahul, the rambunctious.",
  "The sole San Diegan sans surfing skills.",
  "A determined disciple of the digital domain.",
  "A connoisseur of chips, both computed and consumed."
];


function pickAboutMe(lines, targetId) {
  var numLines = lines.length;
  if (numLines > 0) {
    var sel = Math.floor((Math.random() * numLines));
    document.getElementById(targetId).innerHTML = lines[sel];
  }
}

pickAboutMe(ABOUT_ME_LINES, "aboutMeLine");
