//set current footer year
const year = document.getElementById('year');
let CurrentYear = new Date().getFullYear()
year.innerText = CurrentYear

//navigation menu
// script.js (Enhanced Version)

// 1. Find the elements
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

// --- Toggle Menu and Icon ---
menuIcon.addEventListener('click', () => {
    // Toggle the .active class on the navigation list
    navList.classList.toggle('active');
    
    // Toggle the icon between hamburger and 'X'
    // The .fa-bars and .fa-xmark are Font Awesome classes
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});


// --- Close Menu When a Link is Clicked ---
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Check if the menu is open before trying to close it
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
            
            // Also change the icon back to a hamburger
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
});
