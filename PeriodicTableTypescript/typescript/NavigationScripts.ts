//--------------------------------- Navbar Stuff -------------------------------------
$(".view").click(function() { // probably should just use the dom. but this is so much easier
  changeCategory(colorType[this.id]);
});

function changeCategory(category:colorType): void {
  let elements: HTMLCollectionOf<Element> = document.getElementsByClassName("element");
  $(".nav-link, .dropdown-item").removeClass("active");
  $("#" + category).addClass("active");
  displayCategoryInfo(category);
  for(var index in elements) {
    let atomicElement: Element = elements[index];
    if (!atomicElement.classList || atomicElement.classList.contains("LanthAct")) continue;

    let currentColor: string = atomicElement.getAttribute("current-color");
    let newColorCategory: string = "btn-" + PeriodicTable[parseInt(atomicElement.id) - 1].colors[category];
    atomicElement.classList.remove(currentColor);
    atomicElement.classList.add(newColorCategory);
    atomicElement.setAttribute("current-color", newColorCategory);
    Legend.updateLegend(category);
  }
}

function displayCategoryInfo(category: colorType): void {
  if (category !== colorType.category && category !== colorType.group_block) {
    $(".atomicmass, .elementname").hide(); // probably should just use the dom. but this is so much easier
    $(".characteristic").hide();
    $("." + category).show();
    $("#lanth").removeClass("btn-danger");
    $("#actin").removeClass("btn-warning");
  }
  else {
    $(".atomicmass, .elementname").show();
    $("#lanth").addClass("btn-danger");
    $("#actin").addClass("btn-warning");
  }
}

//------------------------------------ Hover Function ----------------------------------------
//Highlights various sections depending on its id name
$(document).on("mouseenter mouseleave", ".columnlabel, .rowlabel, .legenditem", function() {
  // @ts-ignore Bootstrap function
  $("." + this.id).button("toggle");
});

// -----------------------------------displays credits -------------------------
$("#credits").click(function() {
  $(".modal-title").html("Credits");
  $(".modal-body").html(
    `<ul>
    <li>Creator: Stephen Teng</li>
    <li>Sources: https://github.com/Bowserinator/Periodic-Table-JSON<br>https://github.com/andrejewski/periodic-table</li>
    <li>Project for Coding Dojo Dallas</li>
    </ul>`
  );
});


