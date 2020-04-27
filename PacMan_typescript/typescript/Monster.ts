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
            case (direction === Direction.Left && strategy == Strategy.Clockwise) || 
                (direction === Direction.Right && strategy == Strategy.Counterclockwise):
                return Direction.Up;
            case (direction === Direction.Left && strategy == Strategy.Counterclockwise) || 
            (direction === Direction.Right && strategy == Strategy.Clockwise):
                return Direction.Down;
            case (direction === Direction.Up && strategy == Strategy.Clockwise) || 
                (direction === Direction.Down && strategy == Strategy.Counterclockwise):
                return Direction.Right;
            case (direction === Direction.Up && strategy == Strategy.Counterclockwise) || 
                (direction === Direction.Down && strategy == Strategy.Clockwise):
                return Direction.Left;
        }
    }
}
