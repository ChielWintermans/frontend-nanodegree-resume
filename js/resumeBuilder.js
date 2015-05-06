var bio = {
	"name" : "Chiel Wintermans",
	"role" : "Front End Developer",
	"age" : 39,
	"contacts" : {"email" : "mikefrost@free4thefree.net", "mobile" : "06-45815791", "github" : "ChielWintermans", "location" : "Eindhoven"},
	"skills" : ["video", "audio", "vinyl mastering", "front end development"],
	"img" : "http://free4thefree.net/img/ChielWintermans_profile.jpg",
	"welcomeMessage" : "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
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
			"title" : "Portfolio site",
			"dates" : "March 2015",
			"description" : "Portfolio site, made using the Bootstrap framework.",
			"images" : "http://free4thefree.net/img/Udacity/project1.jpg",
			"git" : "https://github.com/ChielWintermans/Project1-bootstrap"
		},
		{
			"title" : "Responsive site",
			"dates" : "March 2015",
			"description" : "Site built to be fully responsive.",
			"images" : "http://free4thefree.net/img/Udacity/project2.jpg",
			"git" : "https://github.com/ChielWintermans/BrightonTimes"
		},
		{
			"title" : "Frontend Nanodegree resume site",
			"dates" : "April 2015",
			"description" : "This site, made using javascript & jquery DOM manipulation.",
			"images" : "http://free4thefree.net/img/Udacity/project3.jpg",
			"git" : "https://github.com/ChielWintermans/BrightonTimes"
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
			"url" : "http://www.udacity.com"
		}
	]
};

function displayBio(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	for (var contact in bio.contacts){
		var cType = bio.contacts[contact];
		var contactType = HTMLcontactGeneric.replace("%contact%", contact);
		var contactData = contactType.replace("%data%", cType);
		$("#topContacts").append(contactData);
	}
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.img);
	$("#header").append(formattedbioPic);
	$("#header").append(formattedWelcome);
    if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills){
			var thisSkill = bio.skills[skill];	
			var formattedSkill = HTMLskills.replace("%data%", thisSkill);
			$("#skills").append(formattedSkill);
		}
	}
}

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
		var projLink = HTMLprojectTitle.replace("%data1%", projects.project[proj].git);
		var projTitle = projLink.replace("%data%", projects.project[proj].title);
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
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedEducationTitle);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
 	for (var course in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);	
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlinecourseTitle = formattedTitle + formattedSchool;
		var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedLink = HTMLonlineURL.replace("%data1%", education.onlineCourses[course].url);
		var formattedURL = formattedLink.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlinecourseTitle);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedURL);
	}
}

function displayFooter(){
	for (var contact in bio.contacts){
		var cType = bio.contacts[contact];
		var contactType = HTMLcontactGeneric.replace("%contact%", contact);
		var contactData = contactType.replace("%data%", cType);
		$("#footerContacts").append(contactData);
	}
}

function inName(){
	var oldName = bio.name;
	var nameArray = oldName.split(" ");
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
displayFooter();

