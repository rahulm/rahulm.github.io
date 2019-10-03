var experienceList = [
  {
    "image" : {
      "src" : "resources/images/flogo_RGB_HEX-1024.png",
      "alt" : "Facebook"
      },
    "line1" : "Facebook",
    "line2" : "Software Engineering Intern",
    "line3" : "June 2018 - September 2018"
  },
  {
    "image" : {
      "src" : "resources/images/builducla.png",
      "alt" : "BuildUCLA Collections Lab"
      },
    "line1" : "BuildUCLA Collections Lab",
    "line2" : "Student Researcher",
    "line3" : "January 2018 - June 2018"
  },
  {
    "image" : {
      "src" : "resources/images/google_logo.png",
      "alt" : "Google"
      },
    "line1" : "Google",
    "line2" : "Software Engineering Intern",
    "line3" : "June 2017 - September 2017"
  },
  {
    "image" : {
      "src" : "resources/images/ucla_health.png",
      "alt" : "UCLA Health"
      },
    "line1" : "SARP Lab - UCLA Health",
    "line2" : "Undergrad CS Researcher",
    "line3" : "April 2016 - September 2016"
  },
  {
    "image" : {
      "src" : "resources/images/playfull.png",
      "alt" : "PlayFull"
      },
    "line1" : "PlayFull",
    "line2" : "Lead Android Developer",
    "line3" : "October 2014 - September 2015"
  }
];

var projectList = [
  {
    "image" : {
      "src" : "resources/images/deep_learning.svg",
      "alt" : "Deep Learning"
      },
    "line1" : "Analysis of VAEs for Reconstructive and Generative Tasks",
    "line2" : "ECE232AS Final Project",
    "line3" : "March 2019"
  },
  {
    "image" : {
      "src" : "resources/images/stereo_camera_512x512.png",
      "alt" : "Stereo Camera"
      },
    "line1" : "FPGA Depth Perception",
    "line2" : "CS 152B Final Project",
    "line3" : "October 2017 - December 2017"
  },
  {
    "image" : {
      "src" : "resources/images/location-512.png",
      "alt" : "Location Pin"
      },
    "line1" : "Indoor Positioning through Machine Learning on WiFi Fingerprints",
    "line2" : "Research Paper - IPIN 2017",
    "line3" : "February 2017 - September 2017"
  },
  {
    "image" : {
      "src" : "resources/images/knock-200x200.png",
      "alt" : "Door Knock"
      },
    "line1" : "Android Knock Unlock",
    "line2" : "EE3 Final Project",
    "line3" : "April 2016 - June 2016"
  },
  {
    "image" : {
      "src" : "resources/images/porfavor_logo.png",
      "alt" : "PorFavor"
      },
    "line1" : "PorFavor",
    "line2" : "LAHacks 2016 Project",
    "line3" : "April 2016"
  },
  {
    "image" : {
      "src" : "resources/images/hacktech_2016-600x600.png",
      "alt" : "Hacktech 2016"
      },
    "line1" : "PoliSense",
    "line2" : "Hacktech (Caltech Hackathon) 2016 Project",
    "line3" : "February 2016"
  },
  {
    "image" : {
      "src" : "resources/images/UCLADining_app_icon_high_res.png",
      "alt" : "UCLA Dining App"
      },
    "line1" : "UCLA Dining App",
    "line2" : "Android Application",
    "line3" : "August 2015"
  },
  {
    "image" : {
      "src" : "resources/images/googlePlayIcon-Amaze.png",
      "alt" : "amaze"
      },
    "line1" : "amaze",
    "line2" : "Android Game",
    "line3" : "July 2014 - August 2014"
  },
];

function fillTemplate(templateElementName, targetDivName, data) {
  var projectstemplatestr = document.getElementById(templateElementName);
  var targetdiv = document.getElementById(targetDivName);
  var currRow = null;
  
  for (i = 0; i < data.length; ++i) {
    var tmp = document.createRange().createContextualFragment(projectstemplatestr.innerHTML);
    var exp = data[i];
    
    tmp.getElementById("image").src = exp["image"]["src"];
    tmp.getElementById("image").alt = exp["image"]["alt"];
    
    tmp.getElementById("line1").innerHTML = exp["line1"];
    tmp.getElementById("line2").innerHTML = exp["line2"];
    tmp.getElementById("line3").innerHTML = exp["line3"];
    
    if ((i % 3) == 0) {
      if (currRow != null) {
        targetdiv.appendChild(currRow);
      }
      currRow = document.createElement("div");
      currRow.classList.add("row");
    }
    currRow.appendChild(tmp);
  }
  
  targetdiv.appendChild(currRow);
}

fillTemplate("infotemplatescript", "workexperiencediv", experienceList)
fillTemplate("infotemplatescript", "projectsdiv", projectList)


