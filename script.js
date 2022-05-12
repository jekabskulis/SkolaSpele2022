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

//Spēlētaja punkti
let points = 0;
let pointsOld = -1;

let colourID;
let ctxX = 0, ctxY = 0;
let colourList = ["black", "blue", "green", "cyan", "red", "magenta", "yellow", "white", "beige"];
let colourSet = [];
let colourSetOrgin = [];
let clearID;

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

//Pārkopē krāsu sarakstu uz krāsu array, kuru nemainīs.
for (let i = 0; i < colourSet.length; i++)
{
	colourSetOrgin[i] = colourSet[i];
}

let gameStarted = 0;
function startColour() 
{
	if(gameStarted == 0)
	{
		gameStarted++;
		const startDate = new Date();
	
		let getInterval = setInterval(function()
		{
			let startTime = startDate.getTime();
			const nowTime = new Date().getTime();
	
			let interval = Math.floor((nowTime - startTime) / 1000);
			if (interval == 1)
			{
				startGame();
				clearInterval(getInterval);
			}
		});
	}
}
//Spēles apstādināšanas funkcija
function endTime()
{
	points = String(points);

	localStorage.setItem("playerP", points);


	alert("Spēles beigas\nIegūtais punktu skaits: " + points);
	document.location.href = "./addToTop.html";
}
function startGame()
{
	
	//Apstādina spēli pēc minūtes 60000ms = 60s
	setTimeout(endTime, 10000);
	
	changeColour();

	//Atzīmētā taisnstūra maiņa un tā izcelšana.
	//Krāsu maiņa.
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
				
				const changeTime = new Date().getTime();
				gameChange(clearID, changeTime);

				default:
					return;
		}
		event.preventDefault();
	}, true);
}
let inputColourCheck = 0;
function gameChange(clearColour, changeTime)
{
	if (colourSet[clearColour] != colourSetOrgin[clearColour])
	{
		return;
	}
	if (inputColourCheck == 0)
	{
		setTimeout(function()
		{
			let changeNowTime = new Date().getTime();
			let interval = Math.floor((changeNowTime - changeTime) / 1000);
			if (interval == 1 && colourSet[clearColour] == colourSetOrgin[clearColour])
			{
				points++;
				pointsOld++;
				console.log("Punkti:", points);
					
				changeColour();
			}
		}, 1000)
	}
}

//Iztukšo laukumus
function changeColour()
{
	clearID = Math.floor(Math.random() * 16);
	let xClear = 0;
	let yClear = 0;
	xClear = 40*clearID;
	if (xClear >= 320)
	{
	yClear = 80;
	}
	xClear = xClear % 320;
	
	colourSet[clearID] = colourList[8];
	ctx.fillStyle = colourList[8];
	ctx.fillRect(xClear, yClear, 40, 80);
}
