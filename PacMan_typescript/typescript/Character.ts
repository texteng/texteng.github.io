abstract class Character{
    x: number;
    y: number;
    direction: Direction;
    htmlId: string;
    static boxSize: number;

    get location(): characterLocation {
        return {x: this.x, y: this.y, direction: this.direction}
    }

    set location(characterLocation:characterLocation) {
        this.x = characterLocation.x;
        this.y = characterLocation.y;
        this.direction = characterLocation.direction;
        this.display();
    }

    move(newMapLocation:characterLocation, direction: Direction): this {
        this.location = newMapLocation;
        this.direction = direction;
        this.display();
        return this;
    }

    displayLocation(): this {
        document.getElementById(this.htmlId).style.left = this.x * Character.boxSize + "px";
        document.getElementById(this.htmlId).style.top = (this.y + 2) * Character.boxSize + "px";
        return this;
    }

    static findMoveLocation(direction: Direction, location: characterLocation): characterLocation {
        switch (direction) {
            case 'L':
                location.x--;
                break
            case 'R':
                location.x++;
                break
            case 'U':
                location.y--;
                break
            case 'D':
                location.y++;
                break
        }
        return location;
    }

    abstract display();
    
}