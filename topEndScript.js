
const highScoresList = document.getElementById("playerTopList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


highScoresList.innerHTML = highScores.map( score =>
{
    return `<li> ${score.name}    ${score.age}    ${score.region}    ${score.score}</li>`;
}).join("");
