"use strict";

// console.log("hello");
Vue.component('bm_navigation', {
  props: {
    search_option: String
  },
  methods: {
    nav_link_class: function nav_link_class(location) {
      return 'nav-link' + (this.search_option === location ? ' active' : '');
    }
  },
  template: "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n        <div class=\"navbar-brand\" href=\"#\"></div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#final_navbar\" aria-controls=\"final_navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        \n        <div class=\"collapse navbar-collapse\" id=\"final_navbar\">\n            <ul class=\"navbar-nav ml-auto flex-nowrap\">\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('main')\" href=\"index.html\">Main Page </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('basics')\" href=\"basics.html\">Key Concepts</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('carbo')\" href=\"carbo.html\">Carbohydrates</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('lipid')\" href=\"lipid.html\">Lipids</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('protein')\" href=\"prote.html\">Proteins</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('na')\" href=\"nucle.html\">Nucleic Acids</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('sources')\" href=\"sources.html\">Image Sources</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a id=\"displayNavBarButton\" class=\"nav-link\" href=\"#\" onclick=\"displayNavBar()\">Show other assignments navbar</a>\n                </li>\n            </ul>\n        </div>\n    </nav>"
});

function displayNavBar() {
  var currentButton = document.getElementById("displayNavBarButton");
  var currentButtonState = currentButton.innerHTML;
  var otherAssignmentsNavBar = document.getElementById("navbar");

  if (currentButtonState === 'Show other assignments navbar') {
    currentButton.innerHTML = "Hide other assignments navbar";
    otherAssignmentsNavBar.style.display = "block";
  } else {
    document.getElementById("displayNavBarButton").innerHTML = "Show other assignments navbar";
    otherAssignmentsNavBar.style.display = "none";
  }
}

var bmnavbar = new Vue({
  el: '#bm_toolbar',
  data: {
    message: 'test'
  }
});