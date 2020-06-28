class Table {
    tableLocations: rawTableLocation;
    data: Row[];

    constructor (rawTableLocation: rawTableLocation = tableMatrix.standard) {
        this.createRows(rawTableLocation);
        // console.log(this.data);
    }

    createRows (tableLocations: rawTableLocation): this {
        this.data = tableLocations.map((rawRow: rawTableRow, key:number) => new Row(rawRow, key));
        return this;
    }
}