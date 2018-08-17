// **********************Pacman, Map and Monster Notes********************************    
// Initial Direction
//     L = left
//     R = right
//     T = top
//     B = bottom

// Strategy
//     CCW = counterclockwise movement
//     CW = clockwise movement

//0= blank space
//1= coin
//2= wall
//3= cherry

// //**********************Large Difficult World **************************************
var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,3,1,1,1,1,1,1,1,1,1,1,1,3,2],
    [2,1,2,2,1,2,2,2,2,1,2,2,2,1,2],
    [2,1,2,3,1,1,1,1,1,1,1,3,2,1,2],
    [2,1,2,1,2,2,2,1,2,2,2,1,1,1,2],
    [2,1,1,1,2,1,1,1,1,1,2,1,2,1,2],
    [2,1,2,1,1,1,2,1,2,1,1,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,1,2,1,2,1,2],
    [2,1,2,1,1,1,2,1,2,1,1,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,1,2,1,1,1,2],
    [2,1,1,1,2,2,2,1,2,2,2,1,2,1,2],
    [2,1,2,3,1,1,1,1,1,1,1,3,2,1,2],
    [2,1,2,2,2,1,2,2,2,2,1,2,2,1,2],
    [2,3,1,1,1,1,1,1,1,1,1,1,1,3,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]

var pacman = {
    x:7,
    y:7,
    direction:"R"
}


var monsterArray=[
    // outer ring
    {x:1, y:1, direction:"R", strategy: "CW"},
    {x:13, y:13, direction:"L", strategy: "CW"},
    {x:1, y:13, direction:"R", strategy: "CCW"},
    {x:13, y:1, direction:"L", strategy: "CCW"},
    //middle ring
    {x:3, y:3, direction:"R", strategy: "CCW"},
    {x:11, y:11, direction:"L", strategy: "CW"},
    //inner ring
    {x:9, y:5, direction:"D", strategy: "CW"}, 
];

// **********************Small Easy Level **************************************
// var world = [
//     [2,2,2,2,2,2,2,2,2,2,2,2],
//     [2,3,1,1,1,1,1,1,1,1,3,2],
//     [2,1,2,2,1,2,2,1,2,2,1,2],
//     [2,1,2,3,1,1,1,1,3,2,1,2],
//     [2,1,1,1,2,2,1,2,1,1,1,2],
//     [2,1,2,1,1,0,1,2,1,2,1,2],
//     [2,1,2,1,2,1,1,1,1,2,1,2],
//     [2,1,1,1,2,1,2,2,1,1,1,2],
//     [2,1,2,3,1,1,1,1,3,2,1,2],
//     [2,1,2,2,1,2,2,1,2,2,1,2],
//     [2,3,1,1,1,1,1,1,1,1,3,2],
//     [2,2,2,2,2,2,2,2,2,2,2,2]
//     ]

// var pacman = {
//     x:5,
//     y:5,
//     direction:"R"
// }

// var monsterArray=[
//     {x:10, y:1, direction:"L", strategy: "CCW"}, 
//     {x:8, y:3, direction:"D", strategy: "CW"}, 
//     {x:1, y:10, direction:"R", strategy: "CCW"},
//     {x:2, y:8, direction:"R", strategy: "CCW"},
//     {x:10, y:2, direction:"D", strategy: "CW"}
// ];
//*********************End of basic map *********************************************
//Determines basic dimensions of level
var worldColumnLength = world.length;
var worldRowLength = world[0].length;

//Creates a matrix that tracks the location of the monsters
var monsters = []
for(var i = 0; i < worldColumnLength; i++){
    monsters[i] = [];
    for(var j = 0; j < worldRowLength; j++){
        monsters[i][j] = 0;
    }
}
var monsternum = monsterArray.length;

//determines the width of header and scorebox
var PageWidth = worldRowLength;
document.getElementById("header").style.width = (PageWidth) * 40+"px";
document.getElementById("scorebox").style.width = (PageWidth-2) * 40+"px";

//*******************************Points************************************/
//PointValues
var score = 0;
var lives = 3;
var coinValue = 10;
var cherryValue = 50;

//Maximum Points Calculation
var maximumPoints= 0;
for(var i=0; i<worldColumnLength; i++){
    for(var j=0; j<worldRowLength; j++){
        if(world[i][j] == 2){
            continue;
        }
        else if(world[i][j] == 1){
            maximumPoints +=coinValue;
        }
        else if(world[i][j] == 0){
            continue;
        }
        else if(world[i][j] == 3){
            maximumPoints += cherryValue;
        }
    }
}
console.log("The maximum points you can score on this page is " + maximumPoints);

//*****************Functions that affect the game's display*****************
function displayWorld(){
    var output = '';
    
    for(var i=0; i<worldColumnLength; i++){
        output += "\n<div class = 'row'\n>";
        for(var j=0; j<worldRowLength; j++){
            switch (world[i][j]) {
                case 0:
                output += "<div class='empty'></div>";
                break;
                case 1:
                output += "<div class='coin'></div>";
                break;
                case 2:
                output += "<div class='brick'></div>";
                break;
                case 3:
                output += "<div class='cherry'></div>";
                break;
            }
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
    
}

//Note div is slightly enlarged for artistic effect
function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*40-4+"px";
    document.getElementById('pacman').style.top = pacman.y*40+70+"px";
    document.getElementById('pacman').style.backgroundImage = "url('PacMan"+ pacman.direction +".gif')";
}

//Note the monsters are slightly enlarged and off center for artistic effect
function displayMonster(){
    for(var i = 0; i < monsternum; i++){
        document.getElementById('m' + i).style.left = monsterArray[i].x*40-4+"px";
        document.getElementById('m' + i).style.top = monsterArray[i].y*40+70+"px";
        document.getElementById('m' + i).style.backgroundImage = "url('monster"+ monsterArray[i].direction +".gif')";
    }
}

function displayScore(){
    if(world[pacman.y][pacman.x]==1 && monsters[pacman.y][pacman.x]==0){
        world[pacman.y][pacman.x]=0
        score+=coinValue;
    }
    if(world[pacman.y][pacman.x]==3 && monsters[pacman.y][pacman.x]==0){
        world[pacman.y][pacman.x]=0;
        score+=cherryValue;
    }
    document.getElementById('score').innerHTML = "Score: <span>"+score+"</span>";
}

function displayLives(){
    document.getElementById('lives').innerHTML = "Lives: <span>"+lives+"</span>";
}
// Determines if pacman died
var startX = pacman.x;
var startY = pacman.y;
function death(){
    if((monsters[pacman.y][pacman.x] > 0)){
        lives -=1;
        displayLives();
        //Moves PacMan back to the center when he dies x= 5, y =5 in easy level, x=7 y =7 in hard level
        pacman.x = startX;
        pacman.y = startY;
        displayPacman();
    }
    if (lives <= 0){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Game Over</h1><p>Score = "+ score+"</p></div>";
        return;
    }
}
// Monster Movement
//Direction Monster will move until it hits a wall
//L = left
//R = right
//T = top
//B = bottom
function moveMonster(monster){ 
    switch (monster.direction) {
        case "L":
        if(world[monster.y][monster.x-1]!=2){
            monsters[monster.y][monster.x] = 0;
            monsters[monster.y][monster.x-1] = 1; 
            monster.x -=1;
            break;
        }
        else if(monster.strategy == "CCW"){
            monster.direction ="D";
            moveMonster(monster);
            break;
        }
        else if(monster.strategy == "CW"){
            monster.direction ="U";
            moveMonster(monster);
            break;
        }
        case "D":
        if(world[monster.y+1][monster.x]!=2){
            monsters[monster.y][monster.x] = 0;
            monsters[monster.y+1][monster.x] = 1; 
            monster.y +=1;
            break;
        }
        else if(monster.strategy == "CCW"){
            monster.direction ="R";
            moveMonster(monster);
            break;
        }
        else if (monster.strategy == "CW"){
            monster.direction ="L";
            moveMonster(monster);
            break;
        }
        case "R":
        if(world[monster.y][monster.x+1]!=2){
            monsters[monster.y][monster.x] = 0;
            monsters[monster.y][monster.x+1] = 1; 
            monster.x +=1;
            break;
        }
        else if(monster.strategy == "CCW"){
            monster.direction ="U";
            moveMonster(monster);
            break;
        }
        else if (monster.strategy == "CW"){
            monster.direction ="D";
            moveMonster(monster);
            break;
        }
        case "U":
        if(world[monster.y-1][monster.x]!=2){
            monsters[monster.y][monster.x] = 0;
            monsters[monster.y-1][monster.x] = 1; 
            monster.y -=1;
        }
        else if(monster.strategy == "CCW"){
            monster.direction ="L";
            moveMonster(monster);
            break;
        }
        else if (monster.strategy == "CW"){
            monster.direction ="R";
            moveMonster(monster);
            break;
        }
        break;
    }
}

//***********************Keystroke Section*****************************

// Monster Movement
//Direction PacMan animation will go with each keystroke
//L = left
//R = right
//T = top
//B = bottom

document.onkeydown = function(e){
    //left
    if((e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 100 )&& world[pacman.y][pacman.x-1]!=2){
        pacman.x--;
        pacman.direction = "L";
    }
    //right
    else if((e.keyCode == 39 || e.keyCode == 68 || e.keyCode == 102) && world[pacman.y][pacman.x+1]!=2){
        pacman.x++;
        pacman.direction = "R";
    }
    //up
    else if((e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 104 )&& world[pacman.y-1][pacman.x]!=2){
        pacman.y--;
        pacman.direction = "U";
    }
    //down
    else if((e.keyCode == 40|| e.keyCode == 83 || e.keyCode == 98 ) && world[pacman.y+1][pacman.x]!=2){
        pacman.y++;
        pacman.direction = "D";
    }
    
    displayScore();
    death();
    displayWorld();
    displayPacman();
    
}
//Gameloop section
function gameloop(){
    console.log("gameLoop is running!")
    displayWorld();
    
    //Moves all of the monsters
    for(var i = 0, l = monsterArray.length; i < l; i++){
        moveMonster(monsterArray[i]);
    }
    displayMonster();
    
    death();
    
    if(score >=maximumPoints){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Congratulations!</h1><p>Score = "+ score+"</p></div>";
        return;
    }
    setTimeout(gameloop, 200)
}

//***************************** Starts the game *******************************
monsterdivs = "";
//creates divs in HTML to display monsters
//monsternum = number of monsters in game
for(var i = 0; i < monsternum; i++){
    monsterdivs +="<div id='m"+ i + "' class='monster'></div>"
}
document.getElementById("m").innerHTML= monsterdivs;
displayPacman();
displayMonster();
displayWorld();
gameloop();