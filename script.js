//let difficutly;




//
//
//      Colour Game
//
//

const canvas = document.getElementById("colourCanvas");
const ctx = canvas.getContext("2d");

const canvasH = document.getElementById("colourCanvas");
const highlight = canvasH.getContext("2d");

ctx.fillStyle = "yellowgreen";
ctx.fillRect(0, 80, 320, 80);
ctx.fillStyle = "yellowgreen";
ctx.fillRect(0, 0, 320, 80);

let colourID;
let ctxX = 0, ctxY = 0;
let colourList = ["black", "blue", "green", "cyan", "red", "magenta", "yellow", "white", "beige"];
let colourSet = [];


for (let i = 0; i < 16; i++)
{
	colourID = Math.floor(Math.random() * 8);
	colourSet[i] = colourList[colourID];

	ctxX = 40 * i;
	ctxX = ctxX - 40;
	if (ctxX == 320)
	{
		ctxY = 80;
	}
	ctxX = ctxX % 320;
	console.log(ctxX, "\n", ctxY, "\n", colourSet[i], "\n", i);
	ctx.fillRect(ctxX, ctxY, 40, 80);
	ctx.fillStyle = colourList[colourID];
	
}

//Salabo problēmu ar krāsu uzzīmēšanu spēle.(Pēdējā krāsa nebija)
ctx.fillRect(280, 80, 40, 80);
ctx.fillStyle = colourSet[15];



//
//		PĀRVIETOT ŠO KODU UZ "SĀKT" POGAS FUNKCIJU "StartColour()" !!!!!!
//
let xh = 0, yh = 0, p = 1, cP = 0;
document.addEventListener('keydown', function(event)
{
	if (event.defaultPrevented)
	{
		return;
	}
	highlight.lineWidth = 5;
	highlight.strokeStyle = "orange";
	highlight.strokeRect(xh + 2, yh + 2, 35, 75);
	switch (event.key)
	{
		case "ArrowDown":
			console.log("ArrowDown");
			
			if(yh ==  0)
			{
				
				
				ctx.fillStyle = colourSet[p-1];
				p+=8;
				ctx.fillRect(xh, yh, 40, 80);
				yh+=80;
			}

			highlight.strokeRect(xh + 2, yh + 2, 35, 75);
			break;
		case "ArrowUp":
			console.log("ArrowUp");
			
			if(yh == 80)
			{

				
				ctx.fillStyle = colourSet[p-1];
				p-=8;
				ctx.fillRect(xh, yh, 40, 80);
				yh-=80;
			}

			highlight.strokeRect(xh + 2, yh + 2, 35, 75);
			break;
		case "ArrowLeft":
			console.log("ArrowLeft");
			
			if(xh != 0)
			{

				
				ctx.fillStyle = colourSet[p-1];
				p--;
				ctx.fillRect(xh, yh, 40, 80);
				xh-=40;
			}
			

			highlight.strokeRect(xh + 2, yh + 2, 35, 75);
			break;
		case "ArrowRight":
			console.log("ArrowRight");
			if(xh != 280)
			{

				ctx.fillStyle = colourSet[p-1];
				p++;
				ctx.fillRect(xh, yh, 40, 80);
				
				xh+=40;
			}

			highlight.strokeRect(xh + 2, yh + 2, 35, 75);
			break;
		case "Enter":
			cP++;
			if (cP == 8)
			{
				cP = 0;
			}
			console.log("Return");
			ctx.fillStyle = colourList[cP];
			ctx.fillRect(xh, yh, 40, 80);
			colourSet[p-1] = colourList[cP];
			highlight.strokeRect(xh + 2, yh + 2, 35, 75);
		default:
			return;
	}
	event.preventDefault();
}, true);

//Iztukšo vienu laukumu atmiņas spēlei.

let clearID = Math.floor(Math.random() * 16);
let xClear = 0;
let yClear = 0;

xClear = 40*clearID;
if (xClear == 320)
{
	yClear = 80;
}
xClear = xClear % 320;

colourSet[clearID] = colourList[8];
ctx.fillStyle = colourList[8];
ctx.fillRect(xClear, yClear, 40, 80);


function startColour() 
{
	const startDate = new Date();

	let getInterval = setInterval(function()
	{
		let startTime = startDate.getTime();
		const nowTime = new Date().getTime();

		let interval = Math.floor((nowTime - startTime) / 1000);
		if (interval == 5)
		{
			startGame();
			clearInterval(getInterval);
		}
	});
}
function startGame()
{
	console.log("Start game");
}


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
		window.location.href = "topPlayers.html";
	}
	else
	{
		alert("Ierakstat spelētēja vārdu un/vai vecumu!");
		window.location.href = "addToTop.html";
	}


}
