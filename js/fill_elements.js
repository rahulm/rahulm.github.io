var experienceList = [
  {
    "image" : {
      "src" : "resources/images/google_logo.png",
      "alt" : "Google"
      },
    "workplace" : "Google",
    "position" : "Software Engineering Intern",
    "duration" : "June 2017 - September 2017"
  },
  {
    "image" : {
      "src" : "resources/images/ucla_health.png",
      "alt" : "UCLA Health"
      },
    "workplace" : "SARP Lab - UCLA Health",
    "position" : "Undergrad CS Researcher",
    "duration" : "April 2016 - September 2016"
  },
  {
    "image" : {
      "src" : "resources/images/playfull.png",
      "alt" : "PlayFull"
      },
    "workplace" : "PlayFull",
    "position" : "Lead Android Developer",
    "duration" : "October 2014 - September 2015"
  },
];

function fillExperience() {
  var workexpdiv = document.getElementById("workexperiencediv");
  console.log(workexpdiv.innerHTML);
  return 0;
}

function fillProjects() {
  var projectsdiv = document.getElementById("projectsdiv");
  console.log(projectsdiv.innerHTML);
  return 0;
}

fillExperience();
fillProjects();