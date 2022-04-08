
//
//
//      Top Players
//
//
/*
let playerTop = document.querySelector("#playerTopList");
*/


//Pievienot speletaja rezultatu topam.
function inputData()
{
	let playerName = document.getElementById("playerName");
	console.log(playerName.value);
	let playerAge = document.getElementById("playerAge");
	console.log(playerAge.value);
	let playerRegion = document.getElementById("playerRegion");
	console.log(playerRegion.value);
	
	if(playerAge.value != "" && playerName.value != "")
	{
		//window.location.href = "topPlayers.html";
	}
	else
	{
		alert("Ierakstat spelētēja vārdu un/vai vecumu!");
		//window.location.href = "addToTop.html";
	}
}


console.log(localStorage.getItem("points"));

localStorage.setItem("playerN", playerName.value);
localStorage.setItem("playerA", playerAge.value);
localStorage.setItem("playerR", playerRegion.value);