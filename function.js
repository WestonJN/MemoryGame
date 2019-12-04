var memArray= ["A","A","B","B","C","C","D","D","E","E","F","F"];
var memValues=[];
var memTileId=[];
var tilesFlipped =0;

Array.prototype.memTileShuffle = function(){
    var i = this.length, j, temp;
    while (--i > 0){
        j= Math.floor(Math.random() * (i+1));
        temp= this[j];
        this[j]=this[i];
        this[i]=temp;
    }
}
function newBoard(){
    tilesFlipped =0;
    var output ='';
    memArray.memTileShuffle();
    for (var i = 0; i < memArray.length; i++){
        output += '<div id="tile_'+i+'" onclick="memoryFlipTile(his,\''+memArray[i]+'\')"></div>';
    }
    document.getElementById('memBoard').innerHTML=output;
}

function memoryFlipTile(tile,val){
    if(tile.innerHTML == "" && memValues.length < 2){
        tile.style.background == '#FFF';
        tile.innerHTML = val;
        if(memValues.length == 0){
            memValues.push(val);
            memTileId.push(tile.id);
        }else if(memValues.length == 1){
            memValues.push(val);
            memTileId.push(tile.id);
            if(memValues[0] == memValues[1]){
                tilesFlipped += 2;

                memValues = [];
                memTileId = [];

                if(tilesFlipped == memArray.length){
                    alert("Board cleared... Generating new board");
                    document.getElementById('memBoard').innerHTML = "";
                    newBoard();
                }
            }else{
                function flip2Back(){
                    var tile_1 = document.getElementById(memTileId[0]);
                    var tile_2 = document.getElementById(memTileId[1]);
                    tile_1.style.background = 'url(car1.png) no-repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(car1.png) no-repeat';
                    tile_2.innerHTML = "";
                    memValues = [];
                    memTileId = [];
                }
                setTimeout(flip2Back, 700);
                function flip2Back(){
                    var tile_1 = document.getElementById(memTileId[0]);
                    var tile_2 = document.getElementById(memTileId[1]);
                    tile_1.style.background = 'url(car1.png) no-repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(car1.png) no-repeat';
                    tile_2.innerHTML = "";
                    memValues = [];
                    memTileId = [];
                }
            }
        } 
    }
}