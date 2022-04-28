
let cookieTest = document.cookie;

function getCookie(name) 
{
    return (document.cookie.match('(?:^|;)\\s*'+name.trim()+'\\s*=\\s*([^;]*?)\\s*(?:;|$)')||[])[1];
}

console.log(cookieTest);




console.log(localStorage.getItem("topPlayerN"));

let playerAge = getCookie("playerA");
let playerName = getCookie("playerN");
let playerRegion = getCookie("playerR");
let playerPoints = getCookie("points");

console.log(playerAge);
console.log(playerName);
console.log(playerRegion);
console.log(playerPoints);

console.log("LocalStorageTest");

let topOpen = playerNameArr.length;

if(topOpen == 0)
{
    let playerNameArr = [];
    let playerAgeArr = [];
    let playerRegionArr = [];
    let playerPointsArr = []; 
    localStorage.setItem("topPlayerN", playerNameArr);
    localStorage.setItem("topPlayerA", playerAgeArr);
    localStorage.setItem("topPlayerR", playerRegionArr);
    localStorage.setItem("topPlayerP", playerPointsArr);
}


playerNameArr = localStorage.getItem("topPlayerN");
playerAgeArr = localStorage.getItem("topPlayerA");
playerRegionArr = localStorage.getItem("topPlayerR");
playerPointsArr = localStorage.getItem("topPlayerP");

playerNameArr[playerNameArr.length] = playerName;
playerAgeArr[playerAgeArr.length] = playerAge;
playerRegionArr[playerRegionArr.length] = playerRegion;
playerPointsArr[playerNameArr.length] = playerPoints;

localStorage.setItem("topPlayerN", playerNameArr);
localStorage.setItem("topPlayerA", playerAgeArr);
localStorage.setItem("topPlayerR", playerRegionArr);
localStorage.setItem("topPlayerP", playerPointsArr);

console.log(localStorage.getItem("topPlayerN"));
console.log(localStorage.getItem("topPlayerA"));
console.log(localStorage.getItem("topPlayerR"));
console.log(localStorage.getItem("topPlayerP"));