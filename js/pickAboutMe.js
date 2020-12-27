// pickAboutMe.js

ABOUT_ME_LINES = [
    "I'm Rahul, the restless.",
    "I'm Rahul, the rambunctious.",
    "The sole San Diegan sans surfing skills.",
    "A determined disciple of the digital domain.",
    "A connoisseur of chips, both computed and consumed.",
    "The name is Malavalli. Rahul Malavalli.",
    "An aspiring artist of ambiguous ability.",
    "An eager enthusiast of electronics."
];


function pickAboutMe(lines, targetId) {
    var numLines = lines.length;
    if (numLines > 0) {
        var sel = Math.floor((Math.random() * numLines));
        var item = document.getElementById(targetId);

        transitionEndCallback = function (e) {
            item.removeEventListener("transitionend", transitionEndCallback);
            item.innerHTML = lines[sel];
            item.classList.toggle("fade");
        }

        item.addEventListener("transitionend", transitionEndCallback);
        item.classList.toggle("fade");
    }
}

setInterval(
    function () {
        pickAboutMe(ABOUT_ME_LINES, "aboutMeLine");
    },

    // interval in milliseconds
    30 * 1000
);

