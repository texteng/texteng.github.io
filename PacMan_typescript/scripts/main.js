var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Tile;
(function (Tile) {
    Tile["Blank"] = "blank";
    Tile["Coin"] = "coin";
    Tile["Wall"] = "wall";
    Tile["Cherry"] = "cherry";
})(Tile || (Tile = {}));
var Direction;
(function (Direction) {
    Direction["Left"] = "L";
    Direction["Right"] = "R";
    Direction["Up"] = "U";
    Direction["Down"] = "D";
})(Direction || (Direction = {}));
var Strategy;
(function (Strategy) {
    Strategy[Strategy["Clockwise"] = 0] = "Clockwise";
    Strategy[Strategy["Counterclockwise"] = 1] = "Counterclockwise";
})(Strategy || (Strategy = {}));
var Map = (function () {
    function Map(level) {
        this.map = this.createMap(level);
    }
    Map.prototype.display = function () {
        this.foodLeft = 0;
        var output = '';
        for (var row in this.map) {
            output += "\n<div id = 'row-" + row + "' class = 'row'\n>";
            for (var _i = 0, _a = this.map[row]; _i < _a.length; _i++) {
                var tile = _a[_i];
                output += "<div class='" + tile + "'></div>";
                this.foodLeft += (tile === Tile.Coin || tile === Tile.Cherry) ? 1 : 0;
            }
            output += "\n</div>";
        }
        document.getElementById('world').innerHTML = output;
        return this;
    };
    Map.prototype.getMapLocation = function (location) {
        return this.map[location.y][location.x];
    };
    Map.prototype.setBlankLocation = function (location) {
        this.map[location.y][location.x] = Tile.Blank;
        var row = document.getElementById("row-" + location.y);
        row.children[location.x].removeAttribute('class');
        row.children[location.x].classList.add(Tile.Blank);
    };
    Map.prototype.createMap = function (level) {
        var levelInterpreter = [
            Tile.Blank,
            Tile.Coin,
            Tile.Wall,
            Tile.Cherry
        ];
        this.mapBoxLength = level[0].length;
        this.setHeaders();
        return level.map(function (row) {
            return row.map(function (number) { return levelInterpreter[number]; });
        });
    };
    Map.prototype.setHeaders = function () {
        var mapPixelLength = (this.mapBoxLength) * Map.boxSize + "px";
        document.getElementById("header").style.width = mapPixelLength;
        document.getElementById("scorebox").style.width = mapPixelLength;
        return this;
    };
    return Map;
}());
var Character = (function () {
    function Character() {
    }
    Object.defineProperty(Character.prototype, "location", {
        get: function () {
            return { x: this.x, y: this.y, direction: this.direction };
        },
        set: function (characterLocation) {
            this.x = characterLocation.x;
            this.y = characterLocation.y;
            this.direction = characterLocation.direction;
            this.display();
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.move = function (newMapLocation, direction) {
        this.location = newMapLocation;
        this.direction = direction;
        this.display();
        return this;
    };
    Character.prototype.displayLocation = function () {
        document.getElementById(this.htmlId).style.left = this.x * Character.boxSize + "px";
        document.getElementById(this.htmlId).style.top = (this.y + 2) * Character.boxSize + "px";
        return this;
    };
    Character.findMoveLocation = function (direction, location) {
        switch (direction) {
            case 'L':
                location.x--;
                break;
            case 'R':
                location.x++;
                break;
            case 'U':
                location.y--;
                break;
            case 'D':
                location.y++;
                break;
        }
        return location;
    };
    return Character;
}());
var PacMan = (function (_super) {
    __extends(PacMan, _super);
    function PacMan(x, y, direction) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.direction = direction;
        _this.htmlId = 'pacman';
        _this.lives = 3;
        _this.score = 0;
        return _this;
    }
    Object.defineProperty(PacMan.prototype, "stats", {
        get: function () {
            return { lives: this.lives, score: this.score };
        },
        enumerable: true,
        configurable: true
    });
    PacMan.prototype.changeScore = function (addPoints) {
        this.score += addPoints;
        document.getElementById('score').innerHTML = "Score: <span>" + this.score + "</span>";
        return this;
    };
    PacMan.prototype.display = function () {
        this.displayLocation();
        document.getElementById(this.htmlId).style.backgroundImage = "url('" + this.htmlId + this.direction + ".gif')";
        return this;
    };
    PacMan.prototype.die = function () {
        this.lives--;
        this.x = 7;
        this.y = 7;
        this.display();
        document.getElementById('lives').innerHTML = "Lives: <span>" + this.lives + "</span>";
        if (this.lives <= 0) {
            document.getElementById('container').innerHTML = "<div id='gameover'><h1>Game Over</h1><p>Score = " + this.score + "</p></div>";
            return;
        }
        return this;
    };
    return PacMan;
}(Character));
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(id, x, y, direction, strategy) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.x = x;
        _this.y = y;
        _this.direction = direction;
        _this.htmlId = 'm' + id;
        _this.strategy = strategy;
        return _this;
    }
    Monster.prototype.display = function () {
        if (document.getElementById(this.htmlId)) {
            this.displayLocation();
            document.getElementById(this.htmlId).style.backgroundImage = "url('monster" + this.direction + ".gif')";
        }
        return this;
    };
    Monster.getDirection = function (nextLocation, direction, strategy) {
        if (nextLocation !== Tile.Wall) {
            return direction;
        }
        switch (true) {
            case (direction == 'L' && strategy == Strategy.Clockwise) ||
                (direction == 'R' && strategy == Strategy.Counterclockwise):
                return Direction.Up;
            case (direction == 'L' && strategy == Strategy.Counterclockwise) ||
                (direction == 'R' && strategy == Strategy.Clockwise):
                return Direction.Down;
            case (direction == 'U' && strategy == Strategy.Clockwise) ||
                (direction == 'D' && strategy == Strategy.Counterclockwise):
                return Direction.Right;
            case (direction == 'U' && strategy == Strategy.Counterclockwise) ||
                (direction == 'D' && strategy == Strategy.Clockwise):
                return Direction.Left;
        }
    };
    return Monster;
}(Character));
var GameState = (function () {
    function GameState(level, monsters) {
        this.boxSize = 40;
        Character.boxSize = Map.boxSize = this.boxSize;
        this.gameMap = new Map(level);
        this.player = new PacMan(7, 7, Direction.Right);
        this.createMonsters(monsters);
        this.display();
    }
    GameState.prototype.display = function () {
        this.player.display();
        this.displayMonsters();
        this.gameMap.display();
    };
    GameState.prototype.displayMonsters = function () {
        this.monsters.map(function (monster) { return monster.display(); });
    };
    GameState.prototype.createMonsters = function (monsters) {
        var monsterdivs = "";
        this.monsters = [];
        for (var i in monsters) {
            monsterdivs += "<div id='m" + i + "' class='monster'></div>\n";
            this.monsters.push(new Monster(i, monsters[i].location.x, monsters[i].location.y, monsters[i].location.direction, monsters[i].strategy));
        }
        document.getElementById('m').innerHTML = monsterdivs;
        return this;
    };
    GameState.prototype.movePacman = function (direction) {
        var playerLocation = this.player.location;
        var newPlayerLocation = Character.findMoveLocation(direction, playerLocation);
        var tileMovingInto = this.gameMap.getMapLocation(newPlayerLocation);
        if (tileMovingInto === 'wall') {
            return this;
        }
        if (tileMovingInto !== 'blank') {
            this.gameMap.setBlankLocation(playerLocation);
            this.player.changeScore(tileMovingInto === 'coin' ? 10 : 30);
            this.gameMap.foodLeft--;
        }
        this.player.move(playerLocation, direction);
        for (var _i = 0, _a = this.monsters; _i < _a.length; _i++) {
            var currentMonster = _a[_i];
            this.isPacmanDead(currentMonster);
        }
        return this;
    };
    GameState.prototype.moveMonsters = function () {
        for (var _i = 0, _a = this.monsters; _i < _a.length; _i++) {
            var currentMonster = _a[_i];
            var originalLocation = __assign({}, currentMonster);
            var monsterLocation = currentMonster.location;
            var newMonsterLocation = Character.findMoveLocation(currentMonster.direction, monsterLocation);
            var tileMovingInto = this.gameMap.getMapLocation(newMonsterLocation);
            var moveDirection = Monster.getDirection(tileMovingInto, monsterLocation.direction, currentMonster.strategy);
            if (tileMovingInto === Tile.Wall) {
                monsterLocation = originalLocation;
                newMonsterLocation = Character.findMoveLocation(moveDirection, monsterLocation);
                tileMovingInto = this.gameMap.getMapLocation(newMonsterLocation);
            }
            currentMonster.move(monsterLocation, moveDirection);
            this.isPacmanDead(currentMonster);
        }
        return this;
    };
    GameState.prototype.isPacmanDead = function (currentMonster) {
        if (currentMonster.x === this.player.x && currentMonster.y === this.player.y) {
            this.player.die();
        }
    };
    return GameState;
}());
var game = new GameState([
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
], [
    { location: { x: 1, y: 1, direction: Direction.Right }, strategy: Strategy.Clockwise },
    { location: { x: 13, y: 13, direction: Direction.Left }, strategy: Strategy.Clockwise },
    { location: { x: 1, y: 13, direction: Direction.Right }, strategy: Strategy.Counterclockwise },
    { location: { x: 13, y: 1, direction: Direction.Left }, strategy: Strategy.Counterclockwise },
    { location: { x: 3, y: 3, direction: Direction.Right }, strategy: Strategy.Counterclockwise },
    { location: { x: 11, y: 11, direction: Direction.Left }, strategy: Strategy.Clockwise },
    { location: { x: 9, y: 5, direction: Direction.Down }, strategy: Strategy.Clockwise },
]);
document.onkeydown = function (e) {
    if (!document.getElementById('gameover')) {
        switch (e.keyCode) {
            case 37:
            case 65:
            case 100:
                game.movePacman(Direction.Left);
                break;
            case 39:
            case 68:
            case 102:
                game.movePacman(Direction.Right);
                break;
            case 38:
            case 87:
            case 104:
                game.movePacman(Direction.Up);
                break;
            case 40:
            case 83:
            case 98:
                game.movePacman(Direction.Down);
                break;
        }
    }
};
function gameloop() {
    if (game.gameMap.foodLeft <= 0) {
        document.getElementById('container').innerHTML = "<div id='gameover'><h1>Congratulations!</h1><p>Score = " + game.player.score + "</p></div>";
        return;
    }
    if (!document.getElementById('gameover')) {
        game.moveMonsters();
    }
    else {
        clearTimeout(this);
    }
    setTimeout(gameloop, 200);
}
var timer = gameloop();
//# sourceMappingURL=main.js.map