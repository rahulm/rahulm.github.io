
function fillTemplate(templateElementName, targetDivName, dataName) {
  var projectstemplatestr = document.getElementById(templateElementName);
  var targetdiv = document.getElementById(targetDivName);
  var data = dataDict[dataName]
  var currRow = null;
  
  for (i = 0; i < data.length; ++i) {
    var tmp = document.createRange().createContextualFragment(projectstemplatestr.innerHTML);
    var box = tmp.getElementById("infotemplatebox");
    var exp = data[i];
    
    box.dataset.infoType = dataName;
    box.dataset.infoId = i;
    
    tmp.getElementById("infotemplatebox-image").src = exp["image"]["src"];
    tmp.getElementById("infotemplatebox-image").alt = exp["image"]["alt"];
    
    tmp.getElementById("infotemplatebox-line1").innerHTML = exp["line1"];
    tmp.getElementById("infotemplatebox-line2").innerHTML = exp["line2"];
    tmp.getElementById("infotemplatebox-line3").innerHTML = exp["line3"];
    
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

fillTemplate("infotemplatescript", "workexperiencediv", "experience");
fillTemplate("infotemplatescript", "projectsdiv", "projects");

$(document).on("show.bs.modal","#descriptionModal", function (event) {
  var triggerBox = $(event.relatedTarget);
  var d = dataDict[triggerBox.data("infoType")][triggerBox.data("infoId")];
  
  var modal = $(this);
  modal.find("#descriptionModal-image").attr("src", d["image"]["src"]);
  modal.find("#descriptionModal-image").attr("alt", d["image"]["alt"]);
  
  modal.find("#descriptionModal-line1").text(d["line1"]);
  modal.find("#descriptionModal-line2").text(d["line2"]);
  modal.find("#descriptionModal-line3").text(d["line3"]);
  
  // var descr = "<ul>";
  // descr += d["textarea"].replace(/\- /g, "<li>").replace(/\n/g, "</li>");
  // descr += "</ul>";
  // modal.find("#descriptionModal-textarea").html(descr);
  
  
  if ("textarea" in d) {
    var val = d["textarea"].replace(/\n/g, "<br>");
    modal.find("#descriptionModal-textarea-box").css("display", "block");
    modal.find("#descriptionModal-textarea").html(val);
  } else {
    modal.find("#descriptionModal-textarea-box").css("display", "none");
    modal.find("#descriptionModal-textarea").text("");
  }
  
  
  if ("links" in d) {
    var links = d["links"];
    var vals = [];
    for (i = 0; i < links.length; ++i) {
      vals.push(`<a href="${links[i]}">${links[i]}</a>`);
    }
    var val = vals.join("<br>");
    modal.find("#descriptionModal-links-box").css("display", "block");
    modal.find("#descriptionModal-links").html(val);
  } else {
    modal.find("#descriptionModal-links-box").css("display", "none");
    modal.find("#descriptionModal-links").text("");
  }
});

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
    if (($("#descriptionModal").data('bs.modal') || {})._isShown) {
      $("#descriptionModal").modal("hide");
    }
  }
});
