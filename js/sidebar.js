function openNav() {
    let maxWidth = 250;
    if (document.getElementById("mainSidebar").style.width == maxWidth + "px") {
      closeNav();
      return;
    }
    document.getElementById("mainSidebar").style.width = maxWidth + "px";
    document.getElementById("content").style.marginLeft = maxWidth + "px";
    document.getElementById("resizeSidebar").style.left = maxWidth + 5 + "px";
    document.getElementById("")
}

function closeNav() {
    let minWidth = 0;
    document.getElementById("mainSidebar").style.width = minWidth;
    document.getElementById("content").style.marginLeft = minWidth;
    document.getElementById("resizeSidebar").style.left = minWidth + 5 + "px";
}