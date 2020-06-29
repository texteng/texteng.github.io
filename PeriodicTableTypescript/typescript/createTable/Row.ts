class Row {
    sections: (sectionInterface)[];
    rawRow: rawTableRow;
    x: number = 0;
    y: number;
    constructor(rawRow:rawTableRow, y: number) {
        this.rawRow = rawRow;
        this.y = y;
        this.createSections();
    }

    private createSections() {
        this.sections = this.rawRow.map((section) => {
            if (section === 0) {
                section.toString;
            }
            switch (true) {
                case section === 'RL':
                    return new RowLabel (this.x++, this.y);
                case section === 'CL': 
                    console.log("rawrowlength", this.rawRow.length)
                    let wideColumnAdjustment: number = (this.rawRow.length > 19 && this.x > 2) ? this.x + -14 : this.x  // if wide, x needs to be different.
                    this.x++;
                    return new ColumnLabel (wideColumnAdjustment, this.y);
                case section === "Lanthanide" || section === "Actinoid" :
                    // @ts-ignore
                    return new LanthinideActinide(section, this.x++, this.y);;
                case typeof(section) !== 'string' && section !== 0:
                    // @ts-ignore
                    return new AtomicElement(section, this.x++ ,this.y);
                default:
                    let convertSectionType: sectionType = {
                        'thin': sectionType.TallThin,
                        0: sectionType.Blank,
                        "Lanthanide": sectionType.Lanthanide,
                        "SB": sectionType.SlimBottom 
                    } [section];
                    return new NonElementSection(convertSectionType, this.x++, this.y);;
            }
        });
    }
}