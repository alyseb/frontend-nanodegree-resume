var awesomeThoughts = "I am AB and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

var formattedName = HTMLheaderName.replace("%data%", "AB");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
