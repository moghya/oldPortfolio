
personalInfo = {
	"myimg":"my.png",
	"fname":"Shubham",
	"mname":"Parashram",
	"lname":"Sawant",
	"address":{
		"icon":"address.png",
		"list":["Gupta Layout, Mahakali road, Washim, District-Washim, Maharashtra, India 444505 ",
				"'OM' Jaihind colony, Vishrambag, Sangli District-Sangli, Maharashtra, India 416415"]
	},
	"email":
	{
		"icon":"email.png",
		"list":["sawantshubham571@gmail.com"]
	},
	"mob":
	{
		"icon":"phone.png",
		"list":[9881464434,8983316574]
	}
} 
educations=
[
	{
		"icon":"icon/diploma.png",
		"periodStart":"July 2014",
		"periodEnd":"May 2018",
		"course":"B.Tech Information Technology",
		"score":"6.99 CGPA",
		"inst":"Walchand College of Engineering, Sangli",
		"board":"Shivaji University"
	},
	{
		"icon":"icon/diploma.png",
		"periodStart":"April 2013",
		"periodEnd":"May 2014",
		"course":"All India Senior School Examination",
		"score":"89.4%",
		"inst":"Jawahar Navodaya Vidyalaya,Washim",
		"board":"CBSE Chennai"
	},
	{
		"icon":"icon/diploma.png",
		"periodStart":"April 2011",
		"periodEnd":"May 2012",
		"course":"All India Secondary School Examination",
		"score":"10.00 CGPA",
		"inst":"Jawahar Navodaya Vidyalaya,Washim",
		"board":"CBSE Chennai"
	},
];

skills=
[
	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},
	/*	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},
	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},
	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},
	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},
	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},
	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},
	{
		"name":"PHP",
		"level":"Intermediate",
		"sinfo":"Can manage backend of web apps at mid level."
	},*/
];

works = 
[
	{
		"workPosition":"Scout Troop Leader",
        "periodStart":"April 2010",
        "periodEnd":"May 2012",
        "organisation":"JNV,Washim",
        "experience":"It was nice to be a part of Scouting.Arranged camps,hikes and awareness rallies."
	},
	{
		"workPosition":"Asst. Program Director in Events",
        "periodStart":"April 2015",
        "periodEnd":"March 2016",
        "organisation":"Personality Advancement Circle of Engineers.",
        "experience":"Learnt how to organize professional events and actvites, how to manage resources and make most out of everything."
	},
	{
		"workPosition":"Joint. Skills Developer",
        "periodStart":"April 2016",
        "periodEnd":"Present",
        "organisation":"Personality Advancement Circle of Engineers.",
        "experience":"Good to arrange Meet ups for professional skill development of fellow PACErs."
	}
];

projects=
[

	{
		"projectTitle":"Traffic Rules",
		"periodStart":"July 2015",
		"periodEnd":"Nov 2015",
		"toolsUsed":["Blender","Movie Maker"],
		"tags":["blender","animation","3d-modelling","traffic rules"],
		"shortInfo":"Its 3D animation video made using Blender Tool for spreading awareness regarding Traffic rules. Mini project for semester III.",
		"images":["","","",""],
		"objectives":["","",""],
		"futureScope":["","",""],
	},
	{
		"projectTitle":"Smart Hospital Management",
		"periodStart":"Aug 2015",
		"periodEnd":"Sep 2015",
		"toolsUsed":["c++","qt"],
		"tags":["oop","c++","qt","gui","files"],
		"shortInfo":"C++ Qt Standalone Application keeps track of every patient and its visits. Data collected can be used for Projects of Data Mining and Machine Learning as data sets",
		"report":"project/mypro.html",
		"images":["","","",""],
		"objectives":["","",""],
		"futureScope":["","",""],
	},	
	{
		"projectTitle":"Seat Allocation",
		"periodStart":"Dec 2015",
		"periodEnd":"Dec 2015",
		"toolsUsed":["c++"],
		"tags":["c++","gayle-shapely","ds","oop"],
		"shortInfo":"Simulation of college seat allocation process. Choice filling and Seat Allocation are performed. Modified Gayle-Shapely Algorithm implemented. Can be scaled using C++ CGI for deployment.",
		"report":"project/mypro.html",
		"images":["","","",""],
		"objectives":["","",""],
		"futureScope":["","",""],
	},	
	{
		"projectTitle":"Online External Examination Portal",
		"periodStart":"Feb 2016",
		"periodEnd":"May 2016",
		"toolsUsed":["php","js","mysql","html","css","bootstrap"],
		"tags":["php","js","bootstrap","mysql"],
		"shortInfo":"It's a web application developed using PHP , MySQL, Bootstrap, JavaScript etc. for conducting practical exams online.",
		"report":"project/mypro.html",
		"images":["","","",""],
		"objectives":["","",""],
		"futureScope":["","",""],
	},	
	{
		"projectTitle":"LookIn",
		"periodStart":"Mar 2016",
		"periodEnd":"May 2016",
		"toolsUsed":["python","sqllite3","beautifulsoup","requests"],
		"tags":["search engine","python","indexing","web scraping"],
		"shortInfo":"It's a search engine made using Python, Beautifulsoup . Which crawls downloaded websites and indexes them. After one time indexing it delivers search results ",
		"report":"project/mypro.html",
		"images":["","","",""],
		"objectives":["","",""],
		"futureScope":["","",""],
	},
	{
		"projectTitle":"dsalib ",
		"periodStart":"May 2016",
		"periodEnd":"Present",
		"toolsUsed":["c++"],
		"tags":["ds","algo","template","c++"],
		"shortInfo":
		"Its a ready to use data structures and algorithms c++ template library.Many useful data structures and algorithms are implemented . One should just focus on his her project necessity and dsalib will take care of data structures and algorithms.",
		"report":"project/mypro.html",
		"images":["","","",""],
		"objectives":["","",""],
		"futureScope":["","",""],
	},
];


function loadEducations()
{
	
	var html = "",i,edu;
	for(i=0;i<educations.length;i++)
	{
		edu = educations[i];
	    html= html +
	    '<div id="" class="edu">\
			<img id="" class="icon" src="'+edu['icon']+'">\
			<span id="" class="course">'+edu['course']+'</span>&nbsp;&nbsp;&nbsp;\
			<span id="" class="period">'+edu['periodStart']+'-'+edu['periodEnd']+'</span><br>\
			<span id="" class="score">'+edu['score']+'</span>&nbsp;&nbsp;\
			<span id="" class="inst">'+edu['inst']+'</span>\
			(<span id="" class="board">'+edu['board']+'</span>)\
		</div>';
	}
	document.getElementById("educations").innerHTML = html;
}
function loadSkills()
{
	
	var html = "",i,skill,stars,level;
	for(i=0;i<skills.length;i++)
	{
		skill = skills[i];
	    html= html +
		'<div id="" class="skill">\
	        <span id="" class="name">'+skill['name']+'</span>&nbsp;&nbsp;\
	    </div> ';
	}
	document.getElementById("skills").innerHTML = html;
}


function loadProjects()
{
	
	var html = "",i,j,project;
	for(i=0;i<projects.length;i++)
	{
		project = projects[i];
		html = html +
		'<div id="" class="project">\
		    <span id="" class="projectTitle"><img class="icon" src="icon/tool-1.png"/>'+project['projectTitle']+'</span>&nbsp;&nbsp;\
	        <span id="" class="period">'+project['periodStart']+'-'+project['periodEnd']+'</span><br>\
	        <span id="" class="shortInfo">'+project['shortInfo']+'</span><br>\
	        <span id="" class="tags">';
	    for(j=0;j<project['tags'].length;j++)
	    	html=html+'#'+project['tags'][j]+'&nbsp;';	    
	    html = html+'</span></div>';


	}
	 document.getElementById("projects").innerHTML=html;
}

function loadWorks()
{
	var html = "",i,work;
	for(i=0;i<works.length;i++)
	{
		work = works[i];
		html = html +
		'<div id="" class="work">\
	        <span id="" class="workPosition"><img class="icon" src="icon/command.png">'+work['workPosition']+'</span>&nbsp;at\
	        <span id="" class="organization">'+work['organisation']+'</span>&nbsp;&nbsp;\
    	    <span id="" class="period">'+work['periodStart']+'-'+work['periodEnd']+'</span><br>\
	        <span id="" class="experience">'+work['experience']+'</span>\
	    </div>';
    }
    document.getElementById("works").innerHTML=html;

}

function loadPersonal()
{

	var html="",icon,obj,i;
	html = html +
	'<div id="" class="propic">\
		<center>\
		<img id="myimg" class="" src="img/'+personalInfo['myimg']+'" />\
		<h1 id="bigname" class="">'+ personalInfo['fname']+ ' ' + personalInfo['mname'] + ' ' + personalInfo['lname']+'</h1>\
		</center>\
	</div>\
    <div id="contact" class="miniinfo">';
  	
  	icon = 'icon/'+personalInfo['address']['icon'];
  	for(i=0;i<personalInfo['address']['list'].length;i++)
	{   
		obj = personalInfo['address']['list'][i];
		html = html + '<img class="icon" src="'+icon+'"><span id="" class="add">'+obj+'</span><br/>';
	}

	icon = 'icon/'+personalInfo['email']['icon'];
	for(i=0;i<personalInfo['email']['list'].length;i++)
	{   
		obj = personalInfo['email']['list'][i];
		html = html + '<img class="icon" src="'+icon+'"><span id="" class="email">'+obj+'</span>';
	}

	icon = 'icon/'+personalInfo['mob']['icon'];
	for(i=0;i<personalInfo['mob']['list'].length;i++)
	{   
		obj = personalInfo['mob']['list'][i];
		html = html + '<img class="icon" src="'+icon+'"><span id="" class="mob">'+obj+'</span>';
	}
    html = html + '</div>';

    document.getElementById("personal").innerHTML=html;
}


loadPersonal()
loadEducations();
loadSkills();
loadProjects();
loadWorks();