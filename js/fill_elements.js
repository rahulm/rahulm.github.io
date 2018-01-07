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

var projectList = [
  {
    "image" : {
      "src" : "resources/images/stereo_camera_512x512.png",
      "alt" : "Stereo Camera"
      },
    "line1" : "FPGA Depth Perception",
    "line2" : "CS 152B Final Project",
    "duration" : "October 2017 - December 2017"
  },
  {
    "image" : {
      "src" : "resources/images/location-512.png",
      "alt" : "Location Pin"
      },
    "line1" : "Indoor Positioning through Machine Learning on WiFi Fingerprints",
    "line2" : "Research Paper - IPIN 2017",
    "duration" : "February 2017 - September 2017"
  },
  {
    "image" : {
      "src" : "resources/images/knock-200x200.png",
      "alt" : "Door Knock"
      },
    "line1" : "Android Knock Unlock",
    "line2" : "EE3 Final Project",
    "duration" : "April 2016 - June 2016"
  },
  {
    "image" : {
      "src" : "resources/images/porfavor_logo.png",
      "alt" : "PorFavor"
      },
    "line1" : "PorFavor",
    "line2" : "LAHacks 2016 Project",
    "duration" : "April 2016"
  },
  {
    "image" : {
      "src" : "resources/images/hacktech_2016_logo.png",
      "alt" : "Hacktech 2016"
      },
    "line1" : "PoliSense",
    "line2" : "Hacktech (Caltech Hackathon) 2016 Project",
    "duration" : "February 2016"
  },
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
    
    tmp.getElementById("line1").innerHTML = exp["workplace"];
    tmp.getElementById("line2").innerHTML = exp["position"];
    tmp.getElementById("line3").innerHTML = exp["duration"];
    
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
  var projectstemplatestr = document.getElementById("infotemplate");
  var projectsdiv = document.getElementById("projectsdiv");
  var currRow = null;
  
  for (i = 0; i < projectList.length; ++i) {
    var tmp = document.createRange().createContextualFragment(projectstemplatestr.innerHTML);
    var exp = projectList[i];
    
    tmp.getElementById("image").src = exp["image"]["src"];
    tmp.getElementById("image").alt = exp["image"]["alt"];
    
    tmp.getElementById("line1").innerHTML = exp["line1"];
    tmp.getElementById("line2").innerHTML = exp["line2"];
    tmp.getElementById("line3").innerHTML = exp["duration"];
    
    if ((i % 3) == 0) {
      if (currRow != null) {
        projectsdiv.appendChild(currRow);
      }
      currRow = document.createElement("div");
      currRow.classList.add("row");
    }
    currRow.appendChild(tmp);
  }
  
  projectsdiv.appendChild(currRow);
  
  return 0;
}

fillExperience();
fillProjects();