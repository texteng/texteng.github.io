// var world = [
//     [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
//     [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
//     [2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,1,2],
//     [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
//     [2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,1,2],
//     [2,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,2],
//     [2,1,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2],
//     [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
//     [2,1,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2],
//     [2,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,2],
//     [2,3,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,3,2],
//     [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
// ]

// var world = [
//     [2,2,2,2,2,2,2,2,2,2,2,2,2],
//     [2,0,1,1,1,1,1,1,1,1,1,3,2],
//     [2,1,2,2,1,2,2,2,1,2,2,1,2],
//     [2,1,2,3,1,1,1,1,1,3,2,1,2],
//     [2,1,1,1,2,2,2,1,2,1,1,1,2],
//     [2,1,2,1,1,1,2,1,2,1,2,1,2],
//     [2,1,2,1,2,1,3,1,1,1,2,1,2],
//     [2,1,1,1,2,1,2,2,2,1,1,1,2],
//     [2,1,2,3,1,1,1,1,1,3,2,1,2],
//     [2,1,2,2,1,2,2,2,1,2,2,1,2],
//     [2,3,1,1,1,1,1,1,1,1,1,3,2],	
//     [2,2,2,2,2,2,2,2,2,2,2,2,2]
//     ]

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2],
    [2,3,1,1,1,1,1,1,1,1,3,2],
    [2,1,2,2,1,2,2,1,2,2,1,2],
    [2,1,2,3,1,1,1,1,3,2,1,2],
    [2,1,1,1,2,2,1,2,1,1,1,2],
    [2,1,2,1,1,0,1,2,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,2,1,2],
    [2,1,1,1,2,1,2,2,1,1,1,2],
    [2,1,2,3,1,1,1,1,3,2,1,2],
    [2,1,2,2,1,2,2,1,2,2,1,2],
    [2,3,1,1,1,1,1,1,1,1,3,2],	
    [2,2,2,2,2,2,2,2,2,2,2,2]
    ]

//0= blank space
//1= coin
//2= wall
//3= cherry

// var enemyLocations = [
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

//Pacman and Monsters    
//L = left
//R = right
//T = top
//B = bottom
var score = 0;
var lives = 3;
var pacman = {
    x:5,
    y:5,
    direction:"R"
}


var monster = {
    x:10,
    y:1,
    direction:"L"
}

var monster2 = {
    x:8,
    y:3,
    direction:"D"
}

//determines the width of header and scorebox
var PageWidth = world[0].length;
    console.log(PageWidth);
    document.getElementById("header").style.width = (PageWidth) * 40+"px";
    document.getElementById("scorebox").style.width = (PageWidth-2) * 40+"px";

//PointValues
var coinValue = 10;
var cherryValue = 50;

//Maximum Points Calculation
var maximumPoints= 0;
for(var i=0; i<world.length; i++){
    for(var j=0; j<world[i].length; j++){
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

//Display Section
function displayWorld(){
var output = '';

for(var i=0; i<world.length; i++){
    output += "\n<div class = 'row'\n>";
    for(var j=0; j<world[i].length; j++){
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

//Note div is slightly enlarged for artistic effect
function displayMonster(){
    document.getElementById('monster').style.left = monster.x*40-4+"px";
    document.getElementById('monster').style.top = monster.y*40+70+"px";
    document.getElementById('monster').style.backgroundImage = "url('monster"+ monster.direction +".gif')";
}

//Note div is slightly enlarged for artistic effect
function displayMonster2(){
    document.getElementById('monster2').style.left = monster2.x*40-4+"px";
    document.getElementById('monster2').style.top = monster2.y*40+70+"px";
    document.getElementById('monster2').style.backgroundImage = "url('monster"+ monster2.direction +".gif')";
}

function displayScore(){
    document.getElementById('score').innerHTML = "Score: <span>"+score+"</span>";
}

function displayLives(){
    document.getElementById('lives').innerHTML = "Lives: <span>"+lives+"</span>";
}

function die(){
    if((pacman.x == monster.x && pacman.y == monster.y||pacman.x == monster2.x && pacman.y == monster2.y)){
        lives -=1;
        displayLives();
        pacman.x = pacman.y = 5;
        displayPacman();
    }
}


// function moveMonster(){
//     if(monster.direction == "L"){
//         if(world[monster.y][monster.x-1]!=2){
//         monster.x -=1;
//         die();
//         displayMonster();
//         }
//         else{
//             monster.direction ="D"
//             moveMonster();
//         }
//     }
//     else if(monster.direction == "D"){
//         if(world[monster.y+1][monster.x]!=2){
//         monster.y +=1;
//         die();
//         displayMonster();
//         }
//         else{
//             monster.direction ="R"
//             moveMonster();
//         }
//     }
//     else if(monster.direction == "R"){
//         if(world[monster.y][monster.x+1]!=2){
//         monster.x +=1;
//         die();
//         displayMonster();
//         }
//         else{
//             monster.direction ="U"
//             moveMonster();
//         }
//     }
//     else if(monster.direction == "U"){
//         if(world[monster.y-1][monster.x]!=2){
//         monster.y -=1;
//         die();
//         displayMonster();
//         }
//         else{
//             monster.direction ="L"
//             moveMonster();
//         }
//     }

// }

function moveMonster(){ //Counterclockwise
    switch (monster.direction) {
        case "L":
            if(world[monster.y][monster.x-1]!=2){
                monster.x -=1;
                displayMonster();
                break;
            }
            else{
                monster.direction ="D";
            }
        case "D":
            if(world[monster.y+1][monster.x]!=2){
                monster.y +=1;
                displayMonster();
                break;
            }
            else{
                monster.direction ="R";
            }
        case "R":
        if(world[monster.y][monster.x+1]!=2){
            monster.x +=1;
                displayMonster();
                break;
            }
            else{
                monster.direction ="U";
            }
        case "U":
            if(world[monster.y-1][monster.x]!=2){
                monster.y -=1;
                displayMonster();
            }
            else{
                monster.direction ="L";
                moveMonster();
            }
            break;
    }
    die();

}

function moveMonster2(){ //Clockwise
    switch (monster2.direction) {
        case "R":
            if(world[monster2.y][monster2.x+1]!=2){
                monster2.x +=1;
                displayMonster2();
                break;
            }
            else{
                monster2.direction ="D";
            }
        case "D":
        if(world[monster2.y+1][monster2.x]!=2){
            monster2.y +=1;
            displayMonster2();
            break;
            }
            else{
                monster2.direction ="L";
            }
        case "L":
            if(world[monster2.y][monster2.x-1]!=2){
                monster2.x -=1;
                displayMonster2();
                break;
            }
            else{
                monster2.direction ="U";
            }
        case "U":
            if(world[monster2.y-1][monster2.x]!=2){
                monster2.y -=1;
                displayMonster2();
            }
            else{
                monster2.direction ="R";
                moveMonster2();
            }
            break;
    }
    die();

}

//Keystroke Section
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
    
    if(world[pacman.y][pacman.x]==1){
        world[pacman.y][pacman.x]=0
        score+=coinValue;
        displayScore();
    }
    if(world[pacman.y][pacman.x]==3){
        world[pacman.y][pacman.x]=0;
        score+=cherryValue;
        displayScore();
    }
    die();
    displayWorld();
    displayPacman();
    
}

//Gameloop section
displayPacman();
function gameloop(){
    if (lives <= 0){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Game Over</h1><p>Score = "+ score+"</p></div>";
        return;
    }
    else if(score >=maximumPoints){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Congratulations!</h1><p>Score = "+ score+"</p></div>";
        return;
    }
    else{
        console.log("gameLoop is running!")
        displayWorld();
        moveMonster();
        moveMonster2();
        setTimeout(gameloop, 200)
   }
}
gameloop();
