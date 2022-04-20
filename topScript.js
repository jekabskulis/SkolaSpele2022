
let cookieTest = document.cookie;

function getCookie(name) 
{
    return (document.cookie.match('(?:^|;)\\s*'+name.trim()+'\\s*=\\s*([^;]*?)\\s*(?:;|$)')||[])[1];
}

console.log(cookieTest);

let playerAge = getCookie("playerA");
let playerName = getCookie("playerN");
let playerRegion = getCookie("playerR");
let playerPoints = getCookie("points");

console.log(playerAge);
console.log(playerName);
console.log(playerRegion);
console.log(playerPoints);



localStorage.setItem("topPlayerN", playerNameArr);
localStorage.setItem("topPlayerA", playerAgeArr);
localStorage.setItem("topPlayerR", playerRegionArr);
