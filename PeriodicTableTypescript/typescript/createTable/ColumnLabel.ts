class ColumnLabel extends NonElementSection {
    constructor(x:number, y:number) {
        super(sectionType.ColumnLabel, x, y);
    }

    protected addLabel(nonElementSection: HTMLElement) {
    //<div id="C17" class="columnlabel boxsize">
    // <a href="https://en.wikipedia.org/wiki/Group_17_element">
    //   <h3>17</h3>
    //   <h5 style="font-family: 'Times New Roman', 'Times', 'serif'">VIIA</h5>
    // </a></div>
        let stringX: string = this.x.toString();
        nonElementSection.id = 'C' + stringX;
        nonElementSection.classList.add('columnlabel');

        let link: HTMLAnchorElement = document.createElement('a');
        link.href = `https://en.wikipedia.org/wiki/Group_${stringX}_element`;

        let columnNumber: HTMLElement = document.createElement('h3');
        let textnode: Text = document.createTextNode(this.x.toString());
        columnNumber.appendChild(textnode);
        link.appendChild(columnNumber);
        this.createCASIndex(link);

        nonElementSection.appendChild(link);            
    }

    // private createColumnLabel(nonElementSection: HTMLElement) {

    private createCASIndex(link: HTMLAnchorElement) {
        const CASindex = [
            "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "&#9486;&#8212;&#8212;", "VIIIB", "&#8212;&#8212;&#9490;", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"
        ];
        let cas: HTMLElement = document.createElement('h5');
        if (this.x !== 8 && this.x !== 10) {
            cas.style.fontFamily = "Times New Roman, Times, serif";
        }
        cas.innerHTML = CASindex[this.x - 1];
        link.appendChild(cas);
    }
}