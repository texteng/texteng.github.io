console.log("hello");

class Legend {
    constructor() {

    }

    static updateLegend(elementCategory: colorType): void {
        let {title, colors} = Legends[elementCategory];
        Legend.updateTitle(title);
        let legendTable = document.getElementsByClassName("legend")[0];
        legendTable.innerHTML = "";
        let row: HTMLElement = document.createElement("tr");
        let column: HTMLElement = document.createElement("td");
        let list: HTMLUListElement = document.createElement("ul");
        let count: number = 0;
        for (let color of colors) {
            count++;
            if(count > 6) {
                count = 0;
                column.appendChild(list);
                row.appendChild(column);
                column = document.createElement("td");
                list = document.createElement("ul");
            }
            Legend.createBullet(color, list);
        }
        column.appendChild(list);
        row.appendChild(column);
        legendTable.appendChild(row);
    }

    private static createBullet(color: any, list: HTMLUListElement): void {
        let bulletPoint: HTMLElement = document.createElement("li");
        bulletPoint.classList.add("legenditem");
        bulletPoint.id = "btn-" + color.color;
        let bullet: HTMLElement = document.createElement("div");
        bullet.classList.add("colorBox", bulletPoint.id);
        bullet.setAttribute("aria-pressed", "false");
        bulletPoint.textContent = color.index;
        list.appendChild(bulletPoint);
        bulletPoint.prepend(bullet);
    }

    private static updateTitle(title: string): void {
        document.getElementById("legendTitle").textContent = title;
    }

}

Legend.updateLegend(colorType["category"]);