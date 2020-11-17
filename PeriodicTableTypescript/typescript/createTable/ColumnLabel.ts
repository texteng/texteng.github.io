const casIndex = [
    "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "&#9486;&#8212;&#8212;", "VIIIB", "&#8212;&#8212;&#9490;", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"
];

class ColumnLabel extends NonElementSection {
    constructor(x:number, y:number) {
        super(sectionType.ColumnLabel, x, y);
    }

    protected addLabel(nonElementSection: HTMLElement) {
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
        let cas: HTMLElement = document.createElement('h5');
        if (this.x !== 8 && this.x !== 10) {
            cas.style.fontFamily = "Times New Roman, Times, serif";
        }
        cas.innerHTML = casIndex[this.x - 1];
        link.appendChild(cas);
    }
}