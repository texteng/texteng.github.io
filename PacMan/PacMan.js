class World{
    constructor(){
        //0= blank space
        //1= coin
        //2= wall
        //3= cherry

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

        // Strategy
        //     CCW = counterclockwise movement
        //     CW = clockwise movement

        // Initial Direction
        //     L = left
        //     R = right
        //     T = top
        //     B = bottom
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
        this.numberofedibles= this.calculateEdibles();
        this.tiles = ["empty", "coin", "brick", "cherry"];
        this.pointValues = {1: 10, 3: 50}
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
            let {x, y, direction, strategy} = this.monsterlocations[i]
            monsterdivs +="<div id='m"+ i + "' class='monster'></div>\n"
            this.monsterlocations[i] = new Monster(i, x, y, direction, strategy)
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
                output += `<div class='${this.tiles[section]}'></div>`;
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
        if(direction == "L" && currentWorld.world[this.y][this.x-1]!=2){
            this.x--;
        }
        else if(direction == "R" && currentWorld.world[this.y][this.x+1]!=2){
            this.x++;
        }
        else if(direction == "U" && currentWorld.world[this.y-1][this.x]!=2){
            this.y--;
        }
        else if(direction == "D" && currentWorld.world[this.y+1][this.x]!=2){
            this.y++;
        }
        this.eat();
        currentWorld.display();
        this.display().displayScore();
        death();
        return this;
    }
    eat() {
        let location = this.currentlocationinformation();
        for(let points in currentWorld.pointValues){
            if(location == points){
                currentWorld.world[this.y][this.x] = 0;
                currentWorld.numberofedibles--;
                this.score += currentWorld.pointValues[points];
                return;
            }
        }
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
    switch (e.keyCode) {
        case 37: case 65: case 100:
            currentPacMan.move("L"); break;
        case 39: case 68: case 102:
            currentPacMan.move("R"); break;
        case 38: case 87: case 104:
            currentPacMan.move("U"); break;
        case 40: case 83: case 98:
            currentPacMan.move("D"); break;
    }
}

// Gameloop section
function gameloop(){
    currentWorld.display().moveMonsters();
    if (currentWorld.numberofedibles <= 0){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Congratulations!</h1><p>Score = "+ currentPacMan.score+"</p></div>";
        return;
    }
    setTimeout(gameloop, 200)
}

gameloop();