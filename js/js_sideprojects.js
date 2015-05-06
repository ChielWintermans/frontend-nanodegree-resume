var name = "Chiel Wintermans";
var role = "Front End Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var skills = ["video", "audio", "mastering", "front end development"];

var work = {
	"jobs" : [
		{
			"title" : "customer service agent",
			"employer" : "Ziggo",
			"dates" : "november 2014 - now",
			"location" : "Eindhoven",
			"description" : "Customer service agent for a triple-play service provider"

		},
		{
			"title" : "customer service agent",
			"employer" : "KPN",
			"dates" : "june 2013 - november 2014",
			"location" : "Eindhoven",
			"description" : "Customer service agent for a triple-play service provider"

		}
		]
};

var projects = {
	"project" : [
		{
			"title" : "title1",
			"dates" : "dates1",
			"description" : "the first project",
			"images" : "http://placekitten.com/500/600"
		},
		{
			"title" : "title2",
			"dates" : "dates2",
			"description" : "the second project",
			"images" : "http://placekitten.com/400/600"
		},
		{
			"title" : "title3",
			"dates" : "dates3",
			"description" : "the third project",
			"images" : "http://placekitten.com/500/700"
		}
	]

};

var bio = {
	"name" : "Chiel Wintermans",
	"role" : "Front End Developer",
	"age" : 39,
	"contacts" : {"email" : "mikefrost@free4thefree.net", "mobile" : "06-45815791", "github" : "ChielWintermans", "location" : "Eindhoven"},
	"skills" : ["video", "audio", "mastering", "front end development"],
	"img" : "https://drive.google.com/file/d/0B0SXl-c49R8VblVqZElNSGU5V0E/view?usp:sharing",
	"welcomeMessage" : "Hello World"
};

var education = {
	"schools" : [
		{
			"name" : "Eindhovens Dag Avond College",
			"dates" : "1993 - 1994",
			"location" : "Eindhoven",
			"degree" : "high-school",
			"major" : "high-school"
		},
		{
			"name" : "Academie voor Beeldende Vorming",
			"dates" : "1994 - 1998",
			"location" : "Tilburg",
			"degree" : "bachelor of arts",
			"major" : ["audio", "video", "film"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Developer",
			"school" : "Udacity.com",
			"dates" : "march 2015 - now",
			"url" : "udacity.com"
		}
	]
};

/*
var myName = HTMLheaderName.replace("%data%", "Chiel Wintermans");
console.log(myName);
$("#header").append(myName);

var myRole = HTMLheaderRole.replace("%data%", "Front End Developer");
console.log(myRole);
$("#header").append(myRole);
*/

//$("#main").append(work["position"]);
//$("#main").append(education.city);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

/*
for (i=0; i<work.jobs.length; i++){
	$("#workExperience").append(HTMLworkStart);
	var formattedFull = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
	$(".work-entry:last").append(formattedFull);
}
*/


function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedFull = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formatWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formatWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formatWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedFull);
		$(".work-entry:last").append(formatWorkDates);
		$(".work-entry:last").append(formatWorkLoc);
		$(".work-entry:last").append(formatWorkDesc);
	}
}
displayWork();
$(document).click(function(loc) {console.log(loc.pageX, loc.pageY);});

$("#main").append(internationalizeButton);

function inName(){
	var nameArray = name.split(" ");
	var lastName = nameArray[1];
	var bigLastName = lastName.toUpperCase();
	var newName = nameArray[0].concat(" ", bigLastName);
	console.log(newName);
	return newName;
}

projects.display = function(){
	for(proj in projects.project){
		$("#projects").append(HTMLprojectStart);
		var projTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		var projDate = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		var projDesc = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		var projImg = HTMLprojectImage.replace("%data%", projects.project[proj].images);
		$(".project-entry:last").append(projTitle);
		$(".project-entry:last").append(projDate);
		$(".project-entry:last").append(projDesc);
		$(".project-entry:last").append(projImg);
	}
}
projects.display();

$("#mapDiv").append(googleMap);

function getRelationship(x, y){
	var xtype = typeof x;
	var ytype = typeof y;
	if (xtype != "number"){
		if (ytype != "number"){
			return("Can't compare relationships because " + x + " and " + y + " are not numbers");
		}else{
			return("Can't compare relationships because " + x + " is not a number");
		}
	}else if (ytype != "number"){
		return("Can't compare relationships because " + y + " is not a number");
	}else if (x > y){
		return(">");
	}else if (x < y){
		return("<");
	}else if (x === y){
		return("=");
	}
}

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
	var sortedArray = [];
    for (name in names){
      	var splitName = names[name].split(" ");
    	var firstName = splitName[0];
    	var lastName = splitName[1];
    	var reversedName = lastName.concat(", ", firstName);
    	sortedArray.push(reversedName);
    }
    sortedArray.sort();
}

alphabetizer(moonWalkers);

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
	var allArray = Object.getOwnPropertyNames(results);
	console.log(allArray);
	for (i=0; i<allArray.length; i++){
		console.log(results[allArray[i]]);
		if (typeof results[allArray[i]] === "object"){
			console.log("ok");
		}
	}
//	var test = results[allArray[0]];
//	console.log(test);
//	var test1 = results[allArray[1]];
//	console.log(test1);
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var rawBytes = results.pageStats;
    var addedBytes = 0;
    for (value in rawBytes){
    	if (value.match("Bytes")){
    		var newBytes = Number(rawBytes[value]);
    		addedBytes = addedBytes + newBytes;
    	}
    }
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));