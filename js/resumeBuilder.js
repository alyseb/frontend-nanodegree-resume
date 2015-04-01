var formattedName = HTMLheaderName.replace("%data%","AB");

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
		"Powerpoint"
			],
		
	"bioPic" : "images/fry.jpg"
}
$("#main").append(bio.name);
if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[8]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[9]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[10]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[11]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[12]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[13]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[14]);
	$("#skillsH3").append(formattedsSkills);
	var formattedsSkills = HTMLskills.replace("%data%", bio.skills[15]);
	$("#skillsH3").append(formattedsSkills);
}
