var World = (function () {
    function World() {
        this.world = [
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
        ];
        this.monsterlocations = [
            { x: 1, y: 1, direction: "R", strategy: "CW" },
            { x: 13, y: 13, direction: "L", strategy: "CW" },
            { x: 1, y: 13, direction: "R", strategy: "CCW" },
            { x: 13, y: 1, direction: "L", strategy: "CCW" },
            { x: 3, y: 3, direction: "R", strategy: "CCW" },
            { x: 11, y: 11, direction: "L", strategy: "CW" },
            { x: 9, y: 5, direction: "D", strategy: "CW" },
        ];
        this.monsterlocationtable = this.createMonsterTable();
        this.standardsize = 40;
        this.worldRowLength = this.world.length;
        this.numberofedibles = this.calculateEdibles();
        this.tiles = ["empty", "coin", "brick", "cherry"];
        this.pointValues = {
            1: 10,
            3: 50
        };
        this.createMonsters();
        document.getElementById("header").style.width = (this.worldRowLength) * this.standardsize + "px";
        document.getElementById("scorebox").style.width = (this.worldRowLength - 2) * this.standardsize + "px";
    }
    World.prototype.createMonsterTable = function () {
        var monstertable = [];
        for (var i in this.world) {
            monstertable[i] = [];
            for (var j in this.world[i]) {
                monstertable[i][j] = 0;
            }
        }
        return monstertable;
    };
    World.prototype.createMonsters = function () {
        var monsterdivs = "";
        for (var i in this.monsterlocations) {
            var _a = this.monsterlocations[i], x = _a.x, y = _a.y, direction = _a.direction, strategy = _a.strategy;
            monsterdivs += "<div id='m" + i + "' class='monster'></div>\n";
            this.monsterlocations[i] = new Monster(i, x, y, direction, strategy);
        }
        document.getElementById('m').innerHTML = monsterdivs;
        return this;
    };
    World.prototype.moveMonsters = function () {
        this.monsterlocations.forEach(function (currentMonster) { return currentMonster.move(); });
        return this;
    };
    World.prototype.calculateEdibles = function () {
        var ediblecount = 0;
        this.world.forEach(function (row) {
            return row.forEach(function (section) {
                if (section == 1 || section == 3) {
                    ediblecount++;
                }
            });
        });
        return ediblecount;
    };
    World.prototype.display = function () {
        var output = '';
        for (var _i = 0, _a = this.world; _i < _a.length; _i++) {
            var row = _a[_i];
            output += "\n<div class = 'row'\n>";
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var section = row_1[_b];
                output += "<div class='" + this.tiles[section] + "'></div>";
            }
            output += "\n</div>";
        }
        document.getElementById('world').innerHTML = output;
        return this;
    };
    return World;
}());
var Monster = (function () {
    function Monster(_number, x, y, direction, strategy) {
        this.number = _number;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.strategy = strategy;
    }
    Monster.prototype.display = function () {
        var style = document.getElementById("m" + this.number).style;
        style.left = this.x * currentWorld.standardsize - (currentWorld.standardsize / 10) + "px";
        style.top = this.y * currentWorld.standardsize + (1.75 * currentWorld.standardsize) + "px";
        style.backgroundImage = "url('monster" + this.direction + ".gif')";
        return this;
    };
    Monster.prototype.move = function () {
        var monsterlocationtable = currentWorld.monsterlocationtable;
        switch (this.direction) {
            case "L":
                if (!newLocationNotWall(this)) {
                    this.direction = this.strategy == "CCW" ? "D" : "U";
                    return this.move();
                }
                monsterlocationtable[this.y][this.x] = 0;
                monsterlocationtable[this.y][this.x - 1] = 1;
                this.x--;
                break;
            case "D":
                if (!newLocationNotWall(this)) {
                    this.direction = this.strategy == "CCW" ? "R" : "L";
                    return this.move();
                }
                monsterlocationtable[this.y][this.x] = 0;
                monsterlocationtable[this.y + 1][this.x] = 1;
                this.y++;
                break;
            case "R":
                if (!newLocationNotWall(this)) {
                    this.direction = this.strategy == "CCW" ? "U" : "D";
                    return this.move();
                }
                monsterlocationtable[this.y][this.x] = 0;
                monsterlocationtable[this.y][this.x + 1] = 1;
                this.x++;
                break;
            case "U":
                if (!newLocationNotWall(this)) {
                    this.direction = this.strategy == "CCW" ? "L" : "R";
                    return this.move();
                }
                monsterlocationtable[this.y][this.x] = 0;
                monsterlocationtable[this.y - 1][this.x] = 1;
                this.y--;
                break;
        }
        death();
        this.display();
        return this;
    };
    return Monster;
}());
var Pacman = (function () {
    function Pacman() {
        this.x = this.y = 7;
        this.direction = "R";
        this.lives = 3;
        this.score = 0;
    }
    Pacman.prototype.currentlocationinformation = function () {
        return (currentWorld.world[this.y][this.x]);
    };
    Pacman.prototype.currentlocation = function () {
        return ({ y: this.y, x: this.x });
    };
    Pacman.prototype.stats = function () {
        return ({ score: this.score, lives: this.lives });
    };
    Pacman.prototype.move = function (direction) {
        this.direction = direction;
        if (direction == "L" && newLocationNotWall(this)) {
            this.x--;
        }
        else if (direction == "R" && newLocationNotWall(this)) {
            this.x++;
        }
        else if (direction == "U" && newLocationNotWall(this)) {
            this.y--;
        }
        else if (direction == "D" && newLocationNotWall(this)) {
            this.y++;
        }
        else {
            return;
        }
        this.eat();
        currentWorld.display();
        this.display().displayScore();
        death();
        return this;
    };
    Pacman.prototype.eat = function () {
        var pointValues = currentWorld.pointValues, world = currentWorld.world;
        var location = this.currentlocationinformation();
        for (var points in pointValues) {
            if (location == parseInt(points)) {
                world[this.y][this.x] = 0;
                currentWorld.numberofedibles--;
                this.score += pointValues[points];
                return;
            }
        }
    };
    Pacman.prototype.display = function () {
        document.getElementById('pacman').style.left = this.x * currentWorld.standardsize - (currentWorld.standardsize / 10) + "px";
        document.getElementById('pacman').style.top = this.y * currentWorld.standardsize + (1.75 * currentWorld.standardsize) + "px";
        document.getElementById('pacman').style.backgroundImage = "url('PacMan" + this.direction + ".gif')";
        return this;
    };
    Pacman.prototype.displayScore = function () {
        document.getElementById('score').innerHTML = "Score: <span>" + this.score + "</span>";
        return this;
    };
    Pacman.prototype.displayLives = function () {
        document.getElementById('lives').innerHTML = "Lives: <span>" + this.lives + "</span>";
        return this;
    };
    return Pacman;
}());
function death() {
    if ((currentWorld.monsterlocationtable[currentPacMan.y][currentPacMan.x] > 0)) {
        currentPacMan.lives -= 1;
        currentPacMan.x = currentPacMan.y = 7;
        currentPacMan.display().displayLives();
    }
    if (currentPacMan.lives <= 0) {
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Game Over</h1><p>Score = " + currentPacMan.score + "</p></div>";
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
var currentWorld = new World();
var currentPacMan = new Pacman();
currentWorld.display();
currentPacMan.display();
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
        case 65:
        case 100:
            currentPacMan.move("L");
            break;
        case 39:
        case 68:
        case 102:
            currentPacMan.move("R");
            break;
        case 38:
        case 87:
        case 104:
            currentPacMan.move("U");
            break;
        case 40:
        case 83:
        case 98:
            currentPacMan.move("D");
            break;
    }
};
function gameloop() {
    currentWorld.display().moveMonsters();
    if (currentWorld.numberofedibles <= 0) {
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Congratulations!</h1><p>Score = " + currentPacMan.score + "</p></div>";
        return;
    }
    setTimeout(gameloop, 200);
}
gameloop();
//# sourceMappingURL=pacman.js.map