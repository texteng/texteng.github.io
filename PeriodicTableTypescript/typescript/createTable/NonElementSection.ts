class NonElementSection implements sectionInterface {
    x: number;
    y: number;
    section: sectionType;
    constructor(section: sectionType, x:number, y:number) {
        this.section = section;
        this.x = x;
        this.y = y;
    }

    getHtmlElement() : HTMLElement {
        let nonElementSection: HTMLElement = document.createElement("div");
        this.determineSize(nonElementSection);
        this.addLabel(nonElementSection);
        return nonElementSection; 
    }

    protected determineSize(nonElementSection: HTMLElement) {
        if (this.section == sectionType.TallThin) {
            nonElementSection.classList.add('thin');
        }
        else if (this.section == sectionType.SlimBottom) {
            nonElementSection.classList.add('smallblank');
        }
        else {
            nonElementSection.classList.add('boxsize');
        }
    }

    protected addLabel(nonElementSection: HTMLElement) {
        // Adds more in classes that inherit this
        nonElementSection.classList.add('blank');
    }

}