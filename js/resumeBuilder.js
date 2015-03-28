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
		"web development",
		"HTML",
		"CSS",
		"JavaScript",
		"jQuery",
		"Git",
		"GitHub",
		"Wordpress",
		"Simply Accounting",
		"technology set up and maintenance",
		"data entry",
		"tech training",
		"template creation",
		"Excel Spreadsheet",
		"Powerpoint"
			],
		
	"bioPic" : "images/fry.jpg"
}


