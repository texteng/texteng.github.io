"use strict";

Vue.component('top_navigation', {
  props: {
    assignment: String
  },
  methods: {
    nav_link_class: function nav_link_class(location) {
      return 'nav-link' + (location == "2" this.assignment === location ? ' active' : '');
    },
    nav_link: function nav_link(location) {
      if (this.assignment === 'home') {
        return location === 'home' ? 'index.html' : 'assign' + location + '/index.html';
      }

      if (this.assignment === location) {
        return 'index.html';
      } else if (location === 'home') {
        return '../index.html';
      }

      return '../assign' + location + '/index.html';
    }
  },
  template: `\n<nav class=\"navbar navbar-expand-lg navbar-dark\">\n        <a class=\"navbar-brand\" href=\"#\">Stephen Teng</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('home')\" :href=\"nav_link('home')\">Home </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('1')\" :href=\"nav_link('1')\">Project 1</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a :class=\"nav_link_class('2')\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Project 2\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" :href=\"nav_link('2')\">Project 2</a>\n                        <a class=\"dropdown-item\" href=\"Landscape/lake_home_txt.html\">Great Landscape Lodge</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('3')\" :href=\"nav_link('3')\" aria-disabled=\"true\">Project 3</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('4')\" :href=\"nav_link('4')\" aria-disabled=\"true\">Project 4</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a :class=\"nav_link_class('5')\" :href=\"nav_link('5')\" aria-disabled=\"true\">Project 5</a>\n                </li>\n            </ul>\n        </div>\n    </nav>`
});
var navbar = new Vue({
  el: '#navbar',
  data: {
    message: 'Hello Vue!'
  }
});