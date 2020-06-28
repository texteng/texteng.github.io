console.log("hello");

class Legend {
    constructor() {

    }

    static updateLegend(elementCategory: colorType) {
        let {title, colors} = Legends[elementCategory];
        Legend.updateTitle(title);
        let legendTable = document.getElementsByClassName("legend")[0];
        legendTable.innerHTML = "";
        let row = document.createElement("tr");
        let column = document.createElement("td");
        let list = document.createElement("ul");
        let count = 0;
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

    private static createBullet(color: any, list: HTMLUListElement) {
        let bulletPoint = document.createElement("li");
        bulletPoint.classList.add("legenditem");
        bulletPoint.id = "btn-" + color.color;
        let bullet = document.createElement("div");
        bullet.classList.add("colorBox", bulletPoint.id);
        bullet.setAttribute("aria-pressed", "false");
        bulletPoint.textContent = color.index;
        list.appendChild(bulletPoint);
        bulletPoint.prepend(bullet);
    }

    private static updateTitle(title: string) {
        document.getElementById("legendTitle").textContent = title;
    }

}

Legend.updateLegend(colorType["category"]);