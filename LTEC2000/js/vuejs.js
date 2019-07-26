"use strict";

// console.log("hello");
Vue.component('top_navbar', {
  props: {
    search_option: String
  },
  methods: {
    // nav_link_class: function nav_link_class(location) {
    //   return 'nav-link' + (this.search_option === location ? ' active' : '');
    // }
  },
  template: `<nav id="main_nav" class="navbar navbar-dark navbar-expand-lg">
  <a class="navbar-brand" href="home.html">Web Accessibility<span class='d-none d-sm-inline'> For All</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavBar" aria-controls="TopNavBar"
  aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  
  <div class="collapse navbar-collapse" id="TopNavBar">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
          <a class="nav-link" href="w3.html"><i class="fas fa-question" alt="guidelines"></i> WCAG</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="blind.html"><i class="fas fa-eye-slash" alt="Blind Icon"></i> Blind</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="deaf.html"><i class="fas fa-deaf"></i> Deaf</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="colorblind.html"><i class="fas fa-eye" style="color:lightgray"></i> Color Blind </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="mobility.html"><i class="fas fa-wheelchair"></i> Mobility Impaired</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="additional_info" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-info-circle"></i> Additional Info
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="accessibility_statement.html"><i class="fas fa-universal-access"></i> Accessiblity Statement</a>
          <a class="dropdown-item" href="sources.html"><i class="fas fa-search"></i> Sources</a>
        </div>
      </li>
    </ul>
  </div>
</nav>`
});

// Vue.component('top_heading', {
//   props: {
//     search_option: String
//   },
//   methods: {
//     // nav_link_class: function nav_link_class(location) {
//     //   return 'nav-link' + (this.search_option === location ? ' active' : '');
//     // }
//   },
//   template: `<nav id="" class="navbar navbar-dark navbar-expand-lg">
//   <a class="navbar-brand" href="home.html">Web Accessibility For All</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavBar" aria-controls="TopNavBar"
//   aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  
//   <div class="collapse navbar-collapse" id="TopNavBar">
//       <ul class="navbar-nav mr-auto">
//           <li class="nav-item">
//               <a class="nav-link" href="overview.html"><i class="fas fa-info"></i> &nbsp;Overview</a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="w3.html"><i class="fas fa-question" alt="guidelines"></i> &nbsp;WCAG</a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="blind.html"><i class="fas fa-eye-slash" alt="Blind Icon"></i>&nbsp;Blind</a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="deaf.html"><i class="fas fa-deaf"></i>&nbsp;Deaf</a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="colorblind.html"><i class="fas fa-eye" style="color:lightgray"></i> &nbsp;Color Blind </a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="mobility.html"><i class="fas fa-wheelchair"></i> &nbsp;Mobility Impaired</a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="accessibility_statement.html"><i class="fas fa-universal-access"></i> &nbsp;Accessiblity Statement</a>
//           </li>
//       </ul>
//   </div>
// </nav>`
// });

var top_menu = new Vue({
  el: '#navbar',
  data: {
    message: 'test'
  }
});

// var main_heading = new Vue({
//   el: '#navbar',
//   data: {
//     message: 'test'
//   }
// });