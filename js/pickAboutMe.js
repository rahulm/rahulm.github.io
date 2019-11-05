// pickAboutMe.js

ABOUT_ME_LINES = [
  "I'm the sole San Diegan sans surfing skills.",
  "I'm Rahul."
];


function pickAboutMe(lines, targetId) {
  var numLines = lines.length;
  if (numLines > 0) {
    var sel = Math.floor((Math.random() * numLines));
    document.getElementById(targetId).innerHTML = lines[sel];
  }
}

pickAboutMe(ABOUT_ME_LINES, "aboutMeLine");
