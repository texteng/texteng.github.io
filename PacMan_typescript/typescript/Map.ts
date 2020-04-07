class Map {
    map: mapArray;
    foodLeft: number;
    mapBoxLength: number;
    static boxSize: number;
    constructor(level: originalMap) {
        this.map = this.createMap(level);
    }

    public display(){
        this.foodLeft = 0;
        let output: string = '';
        for(let row in this.map){
            output += `\n<div id = 'row-${row}' class = 'row'\n>`;
            for(let tile of this.map[row]){
                output += `<div class='${tile}'></div>`;
                this.foodLeft += (tile === Tile.Coin || tile === Tile.Cherry) ? 1 : 0;
            }
            output += "\n</div>";
        }
        document.getElementById('world').innerHTML = output;

        return this;
    }

    public getMapLocation(location: characterLocation) {
        return this.map[location.y][location.x];
    }

    public setBlankLocation(location: characterLocation) {
        this.map[location.y][location.x] = Tile.Blank;
        let row: HTMLElement = document.getElementById("row-" + location.y);
        row.children[location.x].removeAttribute('class');
        row.children[location.x].classList.add(Tile.Blank);
    }

    protected createMap(level: originalMap): mapArray {
        let levelInterpreter: Tile[]= [
            Tile.Blank, 
            Tile.Coin, 
            Tile.Wall, 
            Tile.Cherry
        ];
        this.mapBoxLength = level[0].length;
        this.setHeaders();
        return level.map(row => {
            return row.map(number => levelInterpreter[number]);
        })
    }

    protected setHeaders():this {
        let mapPixelLength: string = (this.mapBoxLength) * Map.boxSize +"px";
        document.getElementById("header").style.width = mapPixelLength;
        document.getElementById("scorebox").style.width = mapPixelLength;
        return this;
    }
}