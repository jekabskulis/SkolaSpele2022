 

function setTopInfo()
{
    let playerData = JSON.parse(localStorage.getItem("playerData")) || [];
    
    const highScores = JSON.parse(localStorage.getItem("playerTop")) || [];
    
    const score =
    {
        name:   playerData[0],
        age:    playerData[1],
        region: playerData[2],
        score:  playerData[3]
    }
    highScores.push(score);
    
    highScores.sort( (a,b) => b.score - a.score);
    
    highScores.splice(5);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));

}