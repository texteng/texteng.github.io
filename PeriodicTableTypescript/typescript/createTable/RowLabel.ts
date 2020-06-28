class RowLabel extends NonElementSection {
    constructor(x:number, y:number) {
        super(sectionType.RowLabel, x, y);
    }

    protected addLabel(nonElementSection: HTMLElement) {
        let stringY: string = this.y.toString();
        nonElementSection.id = 'R' + stringY;
        nonElementSection.classList.add('thin', 'rowlabel', 'h2');

        let link: HTMLAnchorElement= document.createElement('a');
        link.href = `https://en.wikipedia.org/wiki/Period_${stringY}_element`;
        
        let textnode: Text = document.createTextNode(stringY);
        link.appendChild(textnode);
        nonElementSection.appendChild(link);
    }
}