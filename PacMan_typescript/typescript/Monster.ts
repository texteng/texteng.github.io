class Monster extends Character {
    strategy: Strategy;
    id: string;
    constructor(id: string, x: number, y: number, direction: Direction, strategy: Strategy) {
        super();
        this.id = id;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.htmlId = 'm' + id;
        this.strategy = strategy;
    }
    display():this {
        if(document.getElementById(this.htmlId)) {
            this.displayLocation();
            document.getElementById(this.htmlId).style.backgroundImage = `url('monster${this.direction}.gif')`;
        }
        return this;
    }

    static getDirection(nextLocation:Tile, direction:Direction, strategy:Strategy): Direction {
        if (nextLocation !== Tile.Wall) {
            return direction;
        }
        switch (true) { // alternative directions depending on strategy
            case (direction =='L' && strategy == Strategy.Clockwise) || 
                (direction =='R' && strategy == Strategy.Counterclockwise):
                return Direction.Up;
            case (direction =='L' && strategy == Strategy.Counterclockwise) || 
            (direction =='R' && strategy == Strategy.Clockwise):
                return Direction.Down;
            case (direction =='U' && strategy == Strategy.Clockwise) || 
                (direction =='D' && strategy == Strategy.Counterclockwise):
                return Direction.Right;
            case (direction =='U' && strategy == Strategy.Counterclockwise) || 
                (direction =='D' && strategy == Strategy.Clockwise):
                return Direction.Left;
        }
    }
}
