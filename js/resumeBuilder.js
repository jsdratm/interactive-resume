// Bio data container
var bio = {
	"name" : "Jonathan Dunder",
	"role" : "Senior Software Engineer",
	"contacts": {
		"mobile": "414-331-7958",
		"email": "jsdratm@gmail.com",
		"github": "jsdratm",
		"twitter": "@jsdratm",
		"location": "Boulder, CO",
	},
	"welcomeMessage": "welcome to my resume",
	"skills": [
		"C#", "SQL", ".NET", "Javascript", "HTML5", "MVC4"
	],
	"bioPic": "images/fry.jpg",
	
	// Function to populate the bio section
	display: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		$("#header").prepend(formattedName);
		
		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		$("#topContacts").append(formattedEmail);
		
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		$("#topContacts").append(formattedGithub);
		
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#topContacts").append(formattedLocation);
		
		var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
		$("#header").append(formattedBioPic);
		
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcome);
		
		$("#header").append(HTMLskillsStart);
		if (this.skills.length > 0) {
			for (skill in this.skills) {
				var formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
		
		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
		
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		$("#footerContacts").append(formattedEmail);
		
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		$("#footerContacts").append(formattedGithub);
		
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
		
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#footerContacts").append(formattedLocation);
	}
};

// Education data container
var education = {
	"schools": [
		{
			"name": "Milwaukee School of Engineering",
			"location": "Milwaukee, WI, US",
			"degree": "BS",
			"majors": [ "Computer Engineering" ],
			"dates": "2003 - 2007",
			"url": "http://www.msoe.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015 - Present",
			"url": "http://www.udacity.com"
		}
	],
	// Function to populate the education section
	display: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
			$(".education-entry:last").append(formattedName);
			
			var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			
			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			
			if (this.schools[school].majors.length > 0) {
				for (major in this.schools[school].majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}
		}
		
		if (this.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (onlineCourse in this.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
				$(".education-entry:last").append(formattedTitle);
				
				var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
				$(".education-entry:last").append(formattedSchool);
				
				var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
				$(".education-entry:last").append(formattedDates);
				
				var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
				$(".education-entry:last").append(formattedURL);
			}
		}
	}
};

// Work data container
var work = {
	"jobs": [
		{
			"employer": "Medtronic",
			"title": "Senior Software Engineer",			
			"dates": "2015 - Present",
			"description": "Working on a remote patient monitoring platform",
			"location": "Boulder, CO, US"
		},
		{
			"employer": "Covidien",
			"title": "Senior Software Engineer",			
			"dates": "2011 - 2014",
			"description": "Working on a remote patient monitoring platform",
			"location": "Boulder, CO, US"
		},
		{
			"employer": "L-3 Communications",
			"title": "Software Engineer II",			
			"dates": "2010 - 2011",
			"description": "Working on government contract related to satellite management",
			"location": "Colorado Springs, CO, US"
		},
		{
			"employer": "Rockwell Collins",
			"title": "Software Engineer",			
			"dates": "2007 - 2010",
			"description": "Working on government contracts related to avionics and radio communication",
			"location": "Cedar Rapids, IA, US"
		}
	],
	// Function to populate the work section
	display: function() {
		if (this.jobs.length > 0) {
			for (job in this.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);
				
				var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				
				var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
};

// Projects data container
var projects = {
	"projects": [
		{
			"title": "Vital Sync",		
			"dates": "2011 - Present",
			"description": "A new product that allows clinicians to remotely monitor patients, manage alarms, write algorithms to analyze trends, and export data to the EMR",
			"images": [
				"images/vitalsync.jpg"
			]
		}
	],
	// Function to populate the projects section
	display: function() {
		if (this.projects.length > 0) {
			for (project in this.projects) {
				$("#projects").append(HTMLprojectStart);
				var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
				$(".project-entry:last").append(formattedTitle);
				
				var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
				$(".project-entry:last").append(formattedDates);
				
				var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
				$(".project-entry:last").append(formattedDescription);
				
				if (this.projects[project].images.length > 0) {
					for (image in this.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}
		}
	}
};


// Calls to display sections of the resume
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);