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


class World{
    constructor(){
        this.world = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,3,1,1,1,1,1,1,1,1,1,1,1,3,2],
            [2,1,2,2,1,2,2,2,2,1,2,2,2,1,2],
            [2,1,2,3,1,1,1,1,1,1,1,3,2,1,2],
            [2,1,2,1,2,2,2,1,2,2,2,1,1,1,2],
            [2,1,1,1,2,1,1,1,1,1,2,1,2,1,2],
            [2,1,2,1,1,1,2,1,2,1,1,1,2,1,2],
            [2,1,2,1,2,1,1,0,1,1,2,1,2,1,2],
            [2,1,2,1,1,1,2,1,2,1,1,1,2,1,2],
            [2,1,2,1,2,1,1,1,1,1,2,1,1,1,2],
            [2,1,1,1,2,2,2,1,2,2,2,1,2,1,2],
            [2,1,2,3,1,1,1,1,1,1,1,3,2,1,2],
            [2,1,2,2,2,1,2,2,2,2,1,2,2,1,2],
            [2,3,1,1,1,1,1,1,1,1,1,1,1,3,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ]
        this.monsterlocations = [
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
        this.monsterlocationtable = this.createMonsterTable();
        this.standardsize = 40;
        this.coinValue = 10;
        this.cherryValue = 50;
        this.numberofedibles= this.calculateEdibles();
        this.createMonsters();
        document.getElementById("header").style.width = (this.worldRowLength) * this.standardsize +"px";
        document.getElementById("scorebox").style.width = (this.worldRowLength-2) * this.standardsize +"px";
    }
    createMonsterTable(){
        let monstertable = [];
        for(let i in this.world){
            monstertable[i] = [];
            for(let j in this.world[i]){
                monstertable[i][j] = 0;
            }
        }
        return monstertable;
    }

    createMonsters(){
        let monsterdivs = "";
        for(var i in this.monsterlocations){
            monsterdivs +="<div id='m"+ i + "' class='monster'></div>\n"
            this.monsterlocations[i] = new Monster(
                i, 
                this.monsterlocations[i].x,
                this.monsterlocations[i].y,
                this.monsterlocations[i].direction,
                this.monsterlocations[i].strategy
                )
        }
        document.getElementById('m').innerHTML= monsterdivs;
        return this;
    }

    moveMonsters(){
        for(var currentMonster of this.monsterlocations){
            currentMonster.move().display();
        }
        return this;
    }
    
    calculateEdibles(){
        let ediblecount = 0;
        for(let row of this.world){
            for(let section of row){
                if(section == 1 || section == 3 ){
                    ediblecount++;
                }
            }
        }
        return ediblecount;
    }

    display(){
        let output = '';
        for(let row of this.world){
            output += "\n<div class = 'row'\n>";
            for(let section of row){
                switch (section) {
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
        return this;
    }
}

class Monster{
    constructor(_number, x, y, direction, strategy){
        this.number = _number;
        this.x = x; this.y = y;
        this.direction = direction;
        this.strategy = strategy;
    }

    display(){
        document.getElementById("m"+this.number).style.left = this.x*currentWorld.standardsize-(currentWorld.standardsize/10)+"px";
        document.getElementById("m"+this.number).style.top = this.y*currentWorld.standardsize+(1.75*currentWorld.standardsize)+"px";
        document.getElementById("m"+this.number).style.backgroundImage = "url('monster"+ this.direction +".gif')";
        return this;
    }

    move(){ 
        switch (this.direction) {
            case "L":
            if(currentWorld.world[this.y][this.x-1]!=2){
                currentWorld.monsterlocationtable[this.y][this.x] = 0;
                currentWorld.monsterlocationtable[this.y][this.x-1] = 1; 
                this.x--;
                break;
            }
            else if(this.strategy == "CCW"){
                this.direction ="D";
                this.move();
                break;
            }
            else if(this.strategy == "CW"){
                this.direction ="U";
                this.move();
                break;
            }
            case "D":
            if(currentWorld.world[this.y+1][this.x]!=2){
                currentWorld.monsterlocationtable[this.y][this.x] = 0;
                currentWorld.monsterlocationtable[this.y+1][this.x] = 1; 
                this.y++;
                break;
            }
            else if(this.strategy == "CCW"){
                this.direction ="R";
                this.move();
                break;
            }
            else if (this.strategy == "CW"){
                this.direction ="L";
                this.move();
                break;
            }
            case "R":
            if(currentWorld.world[this.y][this.x+1]!=2){
                currentWorld.monsterlocationtable[this.y][this.x] = 0;
                currentWorld.monsterlocationtable[this.y][this.x+1] = 1; 
                this.x++;
                break;
            }
            else if(this.strategy == "CCW"){
                this.direction ="U";
                this.move();
                break;
            }
            else if (this.strategy == "CW"){
                this.direction ="D";
                this.move();
                break;
            }
            case "U":
            if(currentWorld.world[this.y-1][this.x]!=2){
                currentWorld.monsterlocationtable[this.y][this.x] = 0;
                currentWorld.monsterlocationtable[this.y-1][this.x] = 1; 
                this.y--;
            }
            else if(this.strategy == "CCW"){
                this.direction ="L";
                this.move();
                break;
            }
            else if (this.strategy == "CW"){
                this.direction ="R";
                this.move();
                break;
            }
            break;
        }
        death();
        this.display();
        return this;
    }
}

class Pacman{
    constructor(){
        this.x = this.y = 7;
        this.direction = "R"
        this.lives = 3;
        this.score = 0;
    }
    currentlocationinformation(){
        return(currentWorld.world[this.y][this.x]);
    }
    currentlocation(){
        return({y : this.y, x : this.x});
    }
    stats(){
        return({score:this.score, lives: this.lives});
    }
    move(direction){
        this.direction = direction;
             if(direction == "L"){this.x--;}
        else if(direction == "R"){this.x++;}
        else if(direction == "U"){this.y--;}
        else if(direction == "D"){this.y++;}
        if (this.currentlocationinformation() == 1){
            currentWorld.world[this.y][this.x] = 0;
            currentWorld.numberofedibles--;
            this.score += 10;
        }
        else if (this.currentlocationinformation() == 3){
            currentWorld.world[this.y][this.x] = 0;
            currentWorld.numberofedibles--;
            this.score += 50;
        }
        // console.log("your score is", this.score);
        currentWorld.display();
        this.display().displayScore();
        death();
        return this;
    }
    display(){
        document.getElementById('pacman').style.left = this.x*currentWorld.standardsize-(currentWorld.standardsize/10)+"px";
        document.getElementById('pacman').style.top = this.y*currentWorld.standardsize+(1.75*currentWorld.standardsize)+"px";
        document.getElementById('pacman').style.backgroundImage = "url('PacMan"+ this.direction +".gif')";
        return this;
    }
    displayScore(){
        document.getElementById('score').innerHTML = "Score: <span>"+this.score+"</span>";
        return this;
    }
    displayLives(){
        document.getElementById('lives').innerHTML = "Lives: <span>"+this.lives+"</span>";
        return this;
    }
}

function death(){
    if((currentWorld.monsterlocationtable[currentPacMan.y][currentPacMan.x] > 0)){
        currentPacMan.lives -=1;
        //Moves PacMan back to the center when he dies x= 5, y =5 in easy level, x=7 y =7 in hard level
        currentPacMan.x = currentPacMan.y = 7;
        currentPacMan.display().displayLives();
    }
    if (currentPacMan.lives <= 0){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Game Over</h1><p>Score = "+ currentPacMan.score+"</p></div>";
        return;
    }
}
let currentWorld = new World();
let currentPacMan = new Pacman();
currentWorld.display();
currentPacMan.display();

document.onkeydown = function(e){
    //left
    if((e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 100 )&& currentWorld.world[currentPacMan.y][currentPacMan.x-1]!=2){
        currentPacMan.move("L")
        // console.log("L")
    }
    //right
    else if((e.keyCode == 39 || e.keyCode == 68 || e.keyCode == 102) && currentWorld.world[currentPacMan.y][currentPacMan.x+1]!=2){
        currentPacMan.move("R")
    }
    //up
    else if((e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 104 )&& currentWorld.world[currentPacMan.y-1][currentPacMan.x]!=2){
    // else if((e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 104 )){
        currentPacMan.move("U")
    }
    //down
    else if((e.keyCode == 40|| e.keyCode == 83 || e.keyCode == 98 ) && currentWorld.world[currentPacMan.y+1][currentPacMan.x]!=2){
    // else if((e.keyCode == 40|| e.keyCode == 83 || e.keyCode == 98 )){
        currentPacMan.move("D")
    }
}

// Gameloop section
function gameloop(){
    // console.log("gameLoop is running!")
    currentWorld.display().moveMonsters();
    if (currentWorld.numberofedibles <= 0){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Congratulations!</h1><p>Score = "+ currentPacMan.score+"</p></div>";
        return;
    }
    setTimeout(gameloop, 200)
}

gameloop();