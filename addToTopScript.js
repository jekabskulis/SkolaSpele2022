
//
//
//      Top Players
//
//
/*
let playerTop = document.querySelector("#playerTopList");
*/

function getCookie(name) 
{
    return (document.cookie.match('(?:^|;)\\s*'+name.trim()+'\\s*=\\s*([^;]*?)\\s*(?:;|$)')||[])[1];
}

let points = getCookie("points");

pointsHtml.innerHTML = "Punktu skaits: " + points;

//Pievienot speletaja rezultatu topam.
function inputData()
{
	let playerName = document.getElementById("playerName");
	console.log(playerName.value.toString());
	let playerAge = document.getElementById("playerAge");
	console.log(playerAge.value.toString());
	let playerRegion = document.getElementById("playerRegion");
	console.log(playerRegion.value);
	
	if(playerAge.value != "" && playerName.value != "")
	{
		document.cookie = "playerN=" + playerName.value.toString() + "; SameSite=None; Secure";
		document.cookie = "playerA=" + playerAge.value.toString() + "; SameSite=None; Secure";
		document.cookie = "playerR=" + playerRegion.value.toString() + "; SameSite=None; Secure";
		window.location.href = "topPlayers.html";
	}
	else
	{
		alert("Ierakstat spelētēja vārdu un/vai vecumu!");
		window.location.href = "addToTop.html";
	}
}




/*
localStorage.setItem("playerN", playerName.value);
localStorage.setItem("playerA", playerAge.value);
localStorage.setItem("playerR", playerRegion.value);
*/