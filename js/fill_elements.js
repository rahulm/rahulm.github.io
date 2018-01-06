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
  }
];

function fillExperience() {
  var workexptemplatestr = document.getElementById("infotemplate");
  var workexpdiv = document.getElementById("workexperiencediv");
  var currRow = null;
  
  for (i = 0; i < experienceList.length; ++i) {
    var tmp = document.createRange().createContextualFragment(workexptemplatestr.innerHTML);
    var exp = experienceList[i];
    tmp.getElementById("image").src = exp["image"]["src"];
    tmp.getElementById("image").alt = exp["image"]["alt"];
    
    tmp.getElementById("firsttitle").innerHTML = exp["workplace"];
    tmp.getElementById("secondtitle").innerHTML = exp["position"];
    tmp.getElementById("thirdtitle").innerHTML = exp["duration"];
    
    if ((i % 3) == 0) {
      if (currRow != null) {
        workexpdiv.appendChild(currRow);
      }
      currRow = document.createElement("div");
      currRow.classList.add("row");
    }
    currRow.appendChild(tmp);
  }
  
  workexpdiv.appendChild(currRow);
  
  return 0;
}

function fillProjects() {
  // var projectsdiv = document.getElementById("projectsdiv");
  // console.log(projectsdiv.innerHTML);
  return 0;
}

fillExperience();
fillProjects();