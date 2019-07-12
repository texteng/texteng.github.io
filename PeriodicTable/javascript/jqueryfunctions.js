//See Periodic Table Render for non-interactive portions

//************************************** Hover Functions *******************************************
//Highlights various section depending on its id name
$(document).on("mouseenter mouseleave", ".columnlabel, .rowlabel, .legenditem", function() {
  $("." + this.id).button("toggle");
});

//************************************** Navbar Stuff *******************************************
$(document).on("click", ".view", function() {
  $("#" + currentTable.category).removeClass("active");
  currentTable.category = this.id;
  currentTable.colors = colorLibrary[currentTable.category];
  $("#" + currentTable.category).addClass("active");
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
