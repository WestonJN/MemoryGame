var memArray= ["car1.png","car2.png","car3.png"];
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
        output += '<div '
    }
}