"use strict";
// https://github.com/mattboldt/typed.js/
var typed2 = new Typed("#logo", {
  strings: ["<i>Aldo</i>^700 <strong>Saavedra</strong>"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Sidebar
const d = document;
d.addEventListener("DOMContentLoaded", () => {
  d.querySelector(".menu-toggle").addEventListener("click", () => {
    d.querySelector("nav").classList.toggle("active");
  });
});
