
const highScoresList = document.getElementById("playerTopList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML += highScores.map( score =>
{
    return `<tr><th>${score.name}</th><th>${score.age}</th><th>${score.region}</th><th>${score.score}</th></tr>`;
}).join("");
