//See Periodic Table Render for non-interactive portions

//************************************** Hover Functions *******************************************
//Highlights whole rows
$(document).on("mouseenter", ".rowlabel", function() {
  rowId = this.id;
  $("." + rowId).button("toggle");
});
$(document).on("mouseleave ", ".rowlabel", function() {
  rowId = this.id;
  $("." + rowId).button("toggle");
});

//Highlights whole columns
$(document).on("mouseenter", ".columnlabel", function() {
  columnId = this.id;
  $("." + columnId).button("toggle");
});
$(document).on("mouseleave", ".columnlabel", function() {
  columnId = this.id;
  $("." + columnId).button("toggle");
});

//Highlights whole section on legend
$(document).on("mouseenter", ".legenditem", function() {
  var colorBoxId = this.id;
  $("." + colorBoxId).button("toggle");
});
$(document).on("mouseleave ", ".legenditem", function() {
  var colorBoxId = this.id;
  $("." + colorBoxId).button("toggle");
});

//************************************** Navbar Stuff *******************************************
$(document).on("click", ".view", function() {
  $("#" + currentTable.category).removeClass("active");
  currentTable.category = this.id;
  $("#" + currentTable.category).addClass("active");
  currentTable.colors = colorLibrary[currentTable.category];
  displayTable(currentTable.category);
});

  // ---------------------------------turns standard to wide -------------------------
  $(document).on("click", ".wide", function() {
    $("#widecss").html(
      '<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustomWide.css">'
    );
    $("#wide").html(
      '<button class="nav-link btn btn-link standard active">Standard</button>'
    );
    currentTable.wide = true;
    currentTable.matrix = tableMatrix.wide;
    displayTable(currentTable.category);
  });

  // ---------------------------------turns wide to standard-------------------------
  $(document).on("click", ".standard", function() {
    $("#widecss").html(
      '<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustom.css">'
    );
    $("#wide").html(
      '<button class="nav-link btn btn-link wide active">Wide</button>'
    );
    currentTable.wide = false;
    currentTable.matrix = tableMatrix.standard;
    displayTable(currentTable.category);
  });

$(document).on("click", "#credits", function() {
  $(".modal-title").html("Credits");
  $(".modal-body").html(
    `<ul>
    <li>Creator: Stephen Teng</li>
    <li>Sources: https://github.com/Bowserinator/Periodic-Table-JSON<br>https://github.com/andrejewski/periodic-table</li>
    <li>Project for Coding Dojo Dallas</li>
    </ul>`
  );
});
