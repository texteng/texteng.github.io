class LanthinideActinide extends NonElementSection {
    isLanthinde:boolean;
    constructor(section: string, x:number, y:number) {
        let sectionEnum: sectionType = (section === 'Lanthanide') ? sectionType.Lanthanide : sectionType.Actinoid;
        super(sectionEnum, x, y);
        this.isLanthinde = section === 'Lanthanide';
    }

    getHtmlElement() : HTMLElement {
        let lanthActin: HTMLElement = document.createElement("button");
        lanthActin.id = this.isLanthinde ? "lanth" : "actin";
        lanthActin.classList.add(
            'element', 
            'boxsize', 
            'R2', 
            'LanthAct', 
            this.isLanthinde ? "btn-danger": "btn-warning"
        ); // Dont add column

        this.addLabel(lanthActin);
        return lanthActin; 
    }

    protected addLabel(lanthActin: HTMLElement) {
        let textnode: Text = document.createTextNode(this.isLanthinde ? "57-71" : "89-103");
        lanthActin.appendChild(textnode);
    }
}