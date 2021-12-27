"use strict";
// // Import vendor jQuery plugin example
// import '@fortawesome/fontawesome-free/js/all.js';
// import Plyr from 'plyr';
// import IMask from 'imask';
// import Swal from 'sweetalert2'

// window.Plyr = Plyr;
// window.IMask = IMask;
// window.Swal = Swal;


import { isWebp } from "./components/_isWebp.js";
import { nav } from "./components/_nav.js";
import { modal } from "./components/_modal.js";

document.addEventListener('DOMContentLoaded', () => {
    isWebp();
    nav();
    modal();
})