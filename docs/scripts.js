"use strict";
// https://github.com/mattboldt/typed.js/
var typed2 = new Typed("#logo", {
  strings: ["<i>Aldo</i>^700 <i>Saavedra</i>"],
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

// EMAIL JS
const btn = document.getElementById("button");
const form = document.getElementById("form");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_dk4c6sw";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alerta.classList.add("show");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );

  form.reset();
});
