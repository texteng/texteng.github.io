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
        this.worldRowLength = this.world.length;
        this.numberofedibles= this.calculateEdibles();
        this.tiles = ["empty", "coin", "brick", "cherry"];
        this.pointValues = {
                            1: 10, // Coin 
                            3: 50 // Brick
                            }
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
        this.monsterlocations.forEach((currentMonster) => currentMonster.move());
        return this;
    }
    
    calculateEdibles(){
        let ediblecount = 0;
        this.world.forEach(row =>
            row.forEach(section=>{
                if(section == 1 || section == 3 ){
                    ediblecount++;
                    }
                }
            )
        )
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
        let {style} = document.getElementById("m"+this.number);
        style.left = this.x*currentWorld.standardsize-(currentWorld.standardsize/10)+"px";
        style.top = this.y*currentWorld.standardsize+(1.75*currentWorld.standardsize)+"px";
        style.backgroundImage = "url('monster"+ this.direction +".gif')";
        return this;
    }

    move(){ 
        const {monsterlocationtable} = currentWorld;
        switch (this.direction) {
            case "L":
            if(!newLocationNotWall(this)){
                this.direction = this.strategy == "CCW" ? "D" : "U";
                return this.move();
            }
               monsterlocationtable[this.y][this.x] = 0;
               monsterlocationtable[this.y][this.x-1] = 1; 
               this.x--;
               break;

            case "D":
            if(!newLocationNotWall(this)){
                this.direction = this.strategy == "CCW" ? "R" : "L";
                return this.move();
            }
               monsterlocationtable[this.y][this.x] = 0;
               monsterlocationtable[this.y+1][this.x] = 1; 
               this.y++;
               break;

            case "R":
            if(!newLocationNotWall(this)){
                this.direction = this.strategy == "CCW" ? "U" : "D";
                return this.move();
            }
               monsterlocationtable[this.y][this.x] = 0;
               monsterlocationtable[this.y][this.x+1] = 1; 
               this.x++;
               break;

            case "U":
            if(!newLocationNotWall(this)){
                this.direction = this.strategy == "CCW" ? "L" : "R";
                return this.move();
            }
               monsterlocationtable[this.y][this.x] = 0;
               monsterlocationtable[this.y-1][this.x] = 1; 
               this.y--;
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
        if(direction == "L" && newLocationNotWall(this)){this.x--;}
        else if(direction == "R" && newLocationNotWall(this)){this.x++;}
        else if(direction == "U" && newLocationNotWall(this)){this.y--;}
        else if(direction == "D" && newLocationNotWall(this)){this.y++;}
        else{return;}
        this.eat();
        currentWorld.display();
        this.display().displayScore();
        death();
        return this;
    }
    eat() {
        const {pointValues, world} = currentWorld;
        let location = this.currentlocationinformation();
        for(let points in pointValues){
            if(location == points){
                world[this.y][this.x] = 0;
                currentWorld.numberofedibles--;
                this.score += pointValues[points];
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

function newLocationNotWall(object) {
    switch (object.direction) {
        case "L":
            return currentWorld.world[object.y][object.x - 1] !== 2;
        case "D":
            return currentWorld.world[object.y + 1][object.x] !== 2;
        case "R":
            return currentWorld.world[object.y][object.x + 1] !== 2;
        case "U":
            return currentWorld.world[object.y - 1][object.x] !== 2;
    }
    return false;
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
    else{
        setTimeout(gameloop, 200)
    }
}

gameloop();