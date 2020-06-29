class AtomicElement implements sectionInterface{
    x: number; // for interface
    y: number; // for interface
    current_color:string = 'btn-primary'; // replaced upon construction with add-color

    number:number;
    name: string;
    symbol:string;
    atomic_mass:number;
    category: string;
    group_block: string;
    appearance: string|null;
    element_color: string|null;
    density:number|null;
    boil:number|null;
    melt:number|null;
    molar_heat:number|null;
    period:number;
    group:number;
    phase:string;
    summary:string;
    electron_affinity: number|null;
    electronegativity:number|null;
    atomic_radius:number|null;
    ion_radius: number|null;
    van_der_waals_radius: number|null;
    ionization_energy: number|null;
    bonding_type: number|string;
    discovered_by:string|null;
    year_discovered: number|string;
    named_by: string|null;
    colors: object;
    spectral_img:string|null;
    protected atomicElementBtn: HTMLElement;
    constructor (atomicNumber: number, x: number, y: number) {
        this.x = x;
        this.y = y;
        let jsonData = PeriodicTable[atomicNumber - 1];
        for (let data in jsonData) {
            this[data] = (jsonData[data] !== '') ? jsonData[data] : null;
        }
        this.setAtomicButtonElement();
    }
    
    private setAtomicButtonElement() {
        this.atomicElementBtn = document.createElement("button");
        this.addId();
        this.addNavigationClasses();
        this.atomicElementBtn.classList.add(this.current_color); // To be replaced by this.setColor;
        // this.addColorAttributes();
        this.setColor(colorType.category);
        this.addModalAttributes();
        this.addInnerElements();
    }

    public getHtmlElement() : HTMLElement {
        return this.atomicElementBtn;
    }

    protected addModalAttributes() : void {
        this.atomicElementBtn.setAttribute("data-toggle", "modal");
        this.atomicElementBtn.setAttribute("data-target", "#ElementDisplayModal");
    }

    protected addId():void {
        this.atomicElementBtn.id = this.number.toString();
    }

    protected addNavigationClasses(): void {
        let row:string = 'R' + this.period;
        this.atomicElementBtn.classList.add('element', 'boxsize', 'btn', row);
        if (this.group){
            this.atomicElementBtn.classList.add('C' + this.group);
        }
    }

    protected setColor(type: colorType): void {
        let newColor: string = 'btn-' + this.colors[type];
        this.atomicElementBtn.classList.replace(this.current_color, newColor);
        this.atomicElementBtn.setAttribute("current-color", newColor)
        this.current_color = newColor;
    }

    protected addInnerElements():void {
        this.atomicElementBtn.appendChild(this.createAtomNumHTMLElement());
        this.atomicElementBtn.appendChild(this.createSymbolHTMLElement());
        this.atomicElementBtn.appendChild(this.createAtomicMassHTMLElement());
        this.atomicElementBtn.appendChild(this.createNameHTMLElement());
        this.addCategoryInformation();
    }

    protected createAtomNumHTMLElement() : HTMLElement {
        let atomicNumber: HTMLElement = document.createElement('h6');
        atomicNumber.classList.add("atomicnumber");
        let textnode:Text = document.createTextNode(this.number.toString());
        atomicNumber.appendChild(textnode);
        return atomicNumber;
    }

    protected createSymbolHTMLElement() : HTMLElement {
        let elementSymbol: HTMLElement = document.createElement('h3');
        elementSymbol.classList.add("elementsymbol");
        let textnode:Text = document.createTextNode(this.symbol);
        elementSymbol.appendChild(textnode);
        return elementSymbol;
    }

    protected createAtomicMassHTMLElement() : HTMLElement {
        let atomicMass: HTMLElement = document.createElement('h6');
        let atomicMassValue:number =  this.atomic_mass;
        let atomicMassString: string;
        if ((atomicMassValue * 1000) % 1 !== 0) {
            atomicMassString =  atomicMassValue.toFixed(3);
        } else if (atomicMassValue % 1 == 0) {
            atomicMassString =  `(${atomicMassValue})`;
        } else {
            atomicMassString = atomicMassValue.toString();
        }
        atomicMass.classList.add("atomicmass");
        atomicMass.innerHTML = atomicMassString;
        return atomicMass;
    }

    protected createNameHTMLElement() : HTMLElement {
        let elementName: HTMLElement = document.createElement('h6');
        elementName.classList.add("elementname");
        let textnode:Text = document.createTextNode(this.name);
        elementName.appendChild(textnode);
        return elementName;
    }

    protected addCategoryInformation() : void {
        for(let category of Object.keys(colorType)) {
            if(category !== "category" && category !== "group_block") {
                let categoryInfo: HTMLElement = document.createElement('h6');
                categoryInfo.classList.add("characteristic", category);
                categoryInfo.style.display = "none";
                let textnode: Text = document.createTextNode((this[category] !== null) ? this[category] : "");
                categoryInfo.appendChild(textnode);
                this.atomicElementBtn.appendChild(categoryInfo);
            }
        }
    }
}

