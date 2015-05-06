var bio = {
	"name" : "Chiel Wintermans",
	"role" : "Front End Developer",
	"age" : 39,
	"contacts" : {"email" : "mikefrost@free4thefree.net", "mobile" : "06-45815791", "github" : "ChielWintermans", "location" : "Eindhoven"},
	"skills" : ["video", "audio", "vinyl mastering", "front end development"],
	"img" : "http://free4thefree.net/img/ChielWintermans_profile.jpg",
	"welcomeMessage" : "Hello World"
};

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
		},
		{
			"title" : "stagehand/AV-technician",
			"employer" : "self-employed",
			"dates" : "2011 - november 2012",
			"location" : "Eindhoven",
			"description" : "freelance stagehand & AV technician for various employers"
		},
		{
			"title" : "audiovisual artist",
			"employer" : "self-employed",
			"dates" : "2007 - 2011",
			"location" : "Eindhoven",
			"description" : "producer & performer of electronic music"
		},
		{
			"title" : "video editor/audiovisual designer",
			"employer" : "self-employed",
			"dates" : "1998 - 2010",
			"location" : "Eindhoven",
			"description" : "freelance video editor & audiovisual designer"
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

var education = {
	"schools" : [
		{
			"name" : "Eindhovens Dag Avond College",
			"dates" : "1993 - 1994",
			"location" : "Eindhoven",
			"degree" : "high-school",
			"major" : "(not applicable)"
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

function displayBio(){
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.img);
    $("#header").append(formattedbioPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
}

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

function displaySchools(){
	for (var school in education.schools) {
	   	$("#education").append(HTMLschoolStart);
		var formattedName= HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedEducationTitle = formattedName + formattedDegree + formattedCity;
		$(".education-entry:last").append(formattedEducationTitle);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
 	for (var course in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);	
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlinecourseTitle = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedOnlinecourseTitle);
		var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
}

function inName(){
	var nameArray = name.split(" ");
	var lastName = nameArray[1];
	var bigLastName = lastName.toUpperCase();
	var newName = nameArray[0].concat(" ", bigLastName);
	console.log(newName);
	return newName;
}

$(document).click(function(loc) {console.log(loc.pageX, loc.pageY);});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
displayBio();
displayWork();
projects.display();
displaySchools();

