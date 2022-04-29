
//
//
//      Top Players
//
//
/*
let playerTop = document.querySelector("#playerTopList");
*/

pointsHtml.innerHTML = "Punktu skaits: " + localStorage.getItem("playerP");

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
		localStorage.setItem("playerN", playerName.value);
		localStorage.setItem("playerA", playerAge.value);
		localStorage.setItem("playerR", playerRegion.value);
		window.location.href = "topPlayers.html";
	}
	else
	{
		alert("Ierakstat spelētēja vārdu un/vai vecumu!");
		window.location.href = "addToTop.html";
	}
}





