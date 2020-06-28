//See Periodic Table Render for non-interactive portions
//------------------------------------ Hover Function ----------------------------------------
//Highlights various sections depending on its id name
//Works in Chrome not Firefox when tables are redrawn
$(document).on("mouseenter mouseleave", ".columnlabel, .rowlabel, .legenditem", function() {
  $("." + this.id).button("toggle");
});

//--------------------------------- Navbar Stuff -------------------------------------
$(".view").click(function() {
  $("#" + currentTable.category).removeClass("active");
  currentTable.category = this.id;
  currentTable.colors = colorLibrary[currentTable.category].colors;
  $("#" + currentTable.category).addClass("active");
  displayTable();
});

// ---------------------------------changes wideness -------------------------
$("#wideLink").click(function() {
  currentTable.wide = !currentTable.wide; // Starts as false
  currentTable.matrix = tableMatrix[(currentTable.wide) ? 'wide' : 'standard'];

  $("#wideLink").html(
    (currentTable.wide) ? 'Standard' : 'Wide'
  );
  if(currentTable.wide) {
    $("#container").removeClass('standardsize').addClass('widesize');
  }
  else{
    $("#container").removeClass('widesize').addClass('standardsize');
  }
  displayTable();
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

// ----------------------------- Displays Modals --------------------------
$(document).on("click", ".element", function() {
  let elementId = this.id;
  if (elementId != "lanth" && elementId != "actin") {
    let {name, symbol} = currentElement = PeriodicTable[elementId - 1];
    $(".modal-title").html(`${name} (${symbol}) `);
    $(".modal-body").html(elementInformation(currentElement));
  }
});