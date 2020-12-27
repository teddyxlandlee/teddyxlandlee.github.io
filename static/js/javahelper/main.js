var myapp = "<h3 class='common bold'>We recommend the latest Java version.</h3><script type='text/html' src='late-ap.html' />";
var mc = "<div class='common center bold'>Are you using HMCL?</div><li><a class='common center' href='?java=8and10'>Yes</a></li><li><a class='common center' href='?java=8_'>No</a></li>";
var spm = "<div class='common center bold'>Are you using HMCL?</div><li><a class='common center' href='?java=10'>Yes</a></li><li><a class='common center' href='?java=10_'>No</a></li>";
var none = "<script type='text/html' src='all-archives.html' />";

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(null);
}

//if (getQueryVariable("java") == null) {
	switch (getQueryVariable("why")) {
	case "myapp":
		document.getElementById("question").innerHTML = myapp;
		break;
	case "mc":
		document.getElementById("question").innerHTML = mc;
		break;
	case "spm":
		document.getElementById("question").innerHTML = spm;
		break;
	case "none":
		document.getElementById("queston").innerHTML = none;
		break;
	default:
	}
//}

/**
 * 8_     mc  non-hmcl
 * 8and10 mc  no-hmcl
 * 10_    spm non-hmcl
 * 10     spm hmcl
 */
switch (getQueryVariable("java")) {
	case "8_":
	document.getElementById("question").innerHTML = "<h3 class='common bold'>Minecraft requires Java 8 or above.</h3><script type='text/html' src='8_.html' />";
	break;
	case "8and10":
	document.getElementById("question").innerHTML = "<h3 class='common bold'>HMCL requires Java 8 or 10.</h3><script type='text/html' src='8and10.html' />";
	break;
	case "10_":
	document.getElementById("question").innerHTML = "<h3 class='common bold'>We recommend you to install Java 10 or above to run Sweet Potato Mod.</h3><script type='text/html' src='10_.html' />";
	break;
	case "10":
	document.getElementById("question").innerHTML = "<h3 class='common bold'>We recommend you to install Java 10 to run Sweet Potato Mod with HMCL.</h3><script type='text/html' src='10.html' />";
	default:
}
