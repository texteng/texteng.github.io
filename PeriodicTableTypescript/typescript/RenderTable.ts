// This is where we start next

const MainTable: Table = new Table();
const WideTable: Table = new Table(tableMatrix.wide);

class renderTable {
    table:Row[];
    constructor(table: Table) {
       this.table = table.data; 
       this.createRows();
    }

    private createRows() {
        for (let row in this.table) {
            let rowDiv: HTMLElement = document.createElement("div");
            this.addRowClass(rowDiv, row);
            this.addSections(row, rowDiv);
            document.getElementById('table').append(rowDiv)
        }
    }

    private addRowClass(rowDiv: HTMLElement, row: string) {
        rowDiv.id = "row-" + row;
        rowDiv.classList.add('row');
    }

    private addSections(row: string, rowDiv: HTMLElement) {
        let sections: HTMLElement[] = this.table[row].sections.map((section) => section.getHtmlElement());
        for (let section of sections) {
            rowDiv.appendChild(section);
        }
    }
}

var periodicTable = new renderTable(MainTable);

//--------------------------------- Navbar Stuff -------------------------------------
$("#wideLink").click(function() { 

    $('#table').html('');
    if($("#container").hasClass('standardsize')) {
        $("#wideLink").html("Standard");
        $("#container").removeClass('standardsize').addClass('widesize');
        new renderTable(WideTable);
        
    } else {
        $("#wideLink").html("Wide");
        $("#container").addClass('standardsize').removeClass('widesize');
        new renderTable(MainTable);
    }
    changeCategory(colorType[$(".active")[0].id]);
});
