
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
		
		savePlayerInfo();

		window.location.href = "topPlayers.html";
	}
	else
	{
		alert("Ierakstat spelētēja vārdu un/vai vecumu!");
		window.location.href = "addToTop.html";
	}
}

function savePlayerInfo()
{

	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
		
	const score =
	{
		score:  localStorage.getItem("playerP"),
		name:   playerName.value,
		age:    playerAge.value,
		region: playerRegion.value
	};

	highScores.push(score);
	highScores.sort((a,b) => b.score - a.score);
	highScores.splice(5);
		
	localStorage.setItem("highScores", JSON.stringify(highScores));
}





