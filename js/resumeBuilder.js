var name = "A Bright";

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "AB",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "1-555-555-5555",
		"email" : "@gmail",
		"github" : "ab",
		"twitter" : "@ab",
		"location" : "town"
	},
	"welcomeMsg" : "lorem ipsum dolor sit amet etc etc etc.",

	"skills":[
		"Web Development",
		"HTML",
		"CSS",
		"JavaScript",
		"jQuery",
		"Git",
		"GitHub",
		"Wordpress",
		"Simply Accounting",
		"Technology Set Up and Maintenance",
		"Data Entry",
		"Tech Training",
		"Template Creation",
		"Excel Spreadsheet",
		"Powerpoint"],
		
	"bioPic" : "images/fry.jpg"
}

$("#main").append(bio.name);
if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[8]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[9]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[10]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[11]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[12]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[13]);
	$("#skills").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[14]);
	$("#skills").append(formattedsSkills);
}

var work = {
	"jobs" : [
	{
		"employer" : "Adobe Enterprises Ltd.",
		"title" : "Office and IT Administrator",
		"location" : "Vernon, BC, Canada",
		"dates" : "2008 - Ongoing",
		"description" : "Computer and technology set up and management, web consulting, custom template creation, Excel spreadsheet, data entry, accounting."
	},
	{
		"employer" : "Fleetwood Development",
		"title" : "IT Consultant",
		"location" : "Surrey, BC, Canada",
		"dates" : "2010 - Ongoing, as needed",
		"description" : "Office technology technician, tech trainer, custom template creation, data entry, accounting."
	},
	{
		"employer" : "Surrey Art Gallery Association",
		"title" : "IT Consultant",
		"location" : "Surrey, BC, Canada",
		"dates" : "2010 - Ongoing, as needed",
		"description" : "Computer and POS systems technician, custom template creation, data entry, accounting, sales processing."
	},
	{
		"employer" : "Canadian International Metaphysical Ministry",
		"title" : "IT Consultant",
		"location" : "Vernon, BC, Canada",
		"dates" : "2013 - Ongoing, as needed",
		"description" : "Office technology consulting, web consulting, logo creation."
	}
			]
		}
function displayWork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

console.log($("#name").text());

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

var projects = {

		"projects":
		[
			{
				"title" : "CIMM Logo",
				"dates" : "2013",
				"description" : "Graphic design of CIMM logo.",
				"images" : ["images/CIMMLogo.jpg"]
			},
			{
				"title" : "Udacity mockup site",
				"dates" : "2015",
				"description" : "Created HTML and CSS to turn a mockup image into a responsive webpage",
				"images" : ["images/Project1Screenshot.jpg"]
			}
		]
};

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}
		
		
	}
};

projects.display();

var education = {
	"schools": [
		{
			"name" : "Fraser Valley Distance Education School",
			"location" : "Chilliwack, BC, Canada",
			"degree" : "Diploma",
			"major" : [],
			"dates" : "2006",
			"site" : "http://www.fvdes.com/"
		},
		{
			"name" : "University of Sedona",
			"location" : "Sedona, Arizona, US",
			"degree" : "Bachelor's in Metaphysical Science B. Msc.",
			"major" : [],
			"dates" : "2013",
			"site" :"https://universityofsedona.com/"
		}
			],
		
		"onlinecourses" :
	[
		{
			"title" : "App Design",
			"school" : "Excel With Business",
			"dates" : "2014",
			"site" : "https://excelwithbusiness.com/course/details/App-Design/RJ7zdr4HQf"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"site" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity",
			"dates" : "2015",
			"site" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "JavaScript Syntax",
			"school" : "Udacity",
			"dates" : "2015",
			"site" : "https://www.udacity.com/course/ud804"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"dates" : "2015",
			"site" : "https://www.udacity.com/course/ud245"
		}
	]
		
};


education.display = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedschoolName);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolDegree);
		if (education.schools[school].major.length > 0){
			for (major in education.schools[school].major){
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[major]);
		$(".education-entry:last").append(formattedschoolMajor);
		}
		}
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolDates);
	}
		$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlinecourses){
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[course].title);
		$(".education-entry:last").append(formattedonlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[course].school);
		$(".education-entry:last").append(formattedonlineSchool);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[course].dates);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[course].site);
		$(".education-entry:last").append(formattedonlineURL);
		}

};

education.display();