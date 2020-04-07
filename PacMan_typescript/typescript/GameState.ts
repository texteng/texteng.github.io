class GameState {
    gameMap: Map;
    player: PacMan;
    monsters: Monster[];
    boxSize: number = 40;
    constructor(level: originalMap, monsters: monster[]) {
        Character.boxSize = Map.boxSize = this.boxSize;
        this.gameMap = new Map(level);
        this.player = new PacMan(7, 7, Direction.Right);
        this.createMonsters(monsters);
        this.display();
    }

    display() {
        this.player.display();
        this.displayMonsters();
        this.gameMap.display();
    }

    displayMonsters() {
        this.monsters.map(monster=>monster.display())
    }

    createMonsters(monsters: monster[]):this {
        let monsterdivs: string = "";
        this.monsters = [];
        for(let i in monsters){
            monsterdivs +="<div id='m"+ i + "' class='monster'></div>\n"
            this.monsters.push(
                new Monster(
                    i, 
                    monsters[i].location.x, 
                    monsters[i].location.y, 
                    monsters[i].location.direction, 
                    monsters[i].strategy
                )
            )
        }
        document.getElementById('m').innerHTML= monsterdivs;
        return this;
    }

    movePacman(direction: Direction): this {
        let playerLocation: characterLocation = this.player.location;
        let newPlayerLocation: characterLocation = Character.findMoveLocation(direction, playerLocation);
        let tileMovingInto:Tile = this.gameMap.getMapLocation(newPlayerLocation);
        if (tileMovingInto === 'wall') {
            return this;
        }
        if (tileMovingInto !== 'blank') {
            this.gameMap.setBlankLocation(playerLocation);
            this.player.changeScore(tileMovingInto === 'coin' ? 10 : 30);
            this.gameMap.foodLeft--;
        } 

        this.player.move(playerLocation, direction);
        for(let currentMonster of this.monsters) {
            this.isPacmanDead(currentMonster);
        }
        return this;
    }

    moveMonsters(): this {
        for(let currentMonster of this.monsters) {
            let originalLocation: characterLocation = {...currentMonster};
            let monsterLocation: characterLocation = currentMonster.location;
            let newMonsterLocation: characterLocation = Character.findMoveLocation(currentMonster.direction, monsterLocation);
            let tileMovingInto: Tile = this.gameMap.getMapLocation(newMonsterLocation);
            let moveDirection: Direction = Monster.getDirection(tileMovingInto, monsterLocation.direction, currentMonster.strategy);

            if (tileMovingInto === Tile.Wall){
                monsterLocation = originalLocation;
                newMonsterLocation = Character.findMoveLocation(moveDirection, monsterLocation);
                tileMovingInto = this.gameMap.getMapLocation(newMonsterLocation);
            }
            currentMonster.move(monsterLocation, moveDirection);
            this.isPacmanDead(currentMonster);
        }
        return this;
    }


    private isPacmanDead(currentMonster: Monster) {
        if (currentMonster.x === this.player.x && currentMonster.y === this.player.y) {
            this.player.die();
        }
    }
}

var game: GameState = new GameState(
    [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
        [2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2],
        [2, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 2],
        [2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2],
        [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ], 
    [
        // outer ring
        {location:{x:1, y:1, direction:Direction.Right}, strategy: Strategy.Clockwise},
        {location:{x:13, y:13, direction:Direction.Left}, strategy: Strategy.Clockwise},
        {location:{x:1, y:13, direction:Direction.Right}, strategy: Strategy.Counterclockwise},
        {location:{x:13, y:1, direction:Direction.Left}, strategy: Strategy.Counterclockwise},
        //middle ring
        {location:{x:3, y:3, direction:Direction.Right}, strategy: Strategy.Counterclockwise},
        {location:{x:11, y:11, direction:Direction.Left}, strategy: Strategy.Clockwise},
        //inner ring
        {location:{x:9, y:5, direction:Direction.Down}, strategy: Strategy.Clockwise}, 
    ]
);

document.onkeydown = function(e){
    if (!document.getElementById('gameover')) {
        switch (e.keyCode) {
            case 37: case 65: case 100:
                game.movePacman(Direction.Left);
            break;
            case 39: case 68: case 102:
                game.movePacman(Direction.Right);
            break;
            case 38: case 87: case 104:
                game.movePacman(Direction.Up);
            break;
            case 40: case 83: case 98:
                game.movePacman(Direction.Down);
            break;
        }
    }
}

function gameloop(){
    if (game.gameMap.foodLeft <= 0){
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Congratulations!</h1><p>Score = "+ game.player.score+"</p></div>";
        return;
    }
    if (!document.getElementById('gameover')) {
        game.moveMonsters();
    } else {
        clearTimeout(this);
    }
    setTimeout(gameloop, 200);
}
var timer = gameloop();
