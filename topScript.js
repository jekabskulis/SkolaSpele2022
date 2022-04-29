
let newNameTop = localStorage.getItem("playerN");
let newAgeTop = localStorage.getItem("playerA");
let newRegionTop = localStorage.getItem("playerR");
let newPointsTop = localStorage.getItem("playerP");

let playerTop = []; //2d array
let newTopArr = [newNameTop, newAgeTop, newRegionTop, newPointsTop];

if (playerTop.length == 0)
{
    playerTop[playerTop.length] = newTopArr;
}

for(let i = playerTop.length - 1; i > 0; i++)
{
    if(playerTop[i][3] < newTopArr[3])
    {
        playerTop[i] = playerTop[i+1];
        playerTop[i] = newTopArr;
    }
}
console.log(playerTop);

/*
Tops piecās daļās, katrā daļā ir array, kurā ir visa informācija par spēlētāju.
Punkti atrodas beigās.
*/ 
