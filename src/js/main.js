// Then update your toggle function
function toggleTheme() {
    const checkbox = document.querySelector(".toggle");
    const html = document.documentElement;
    
    if (checkbox.checked) {
        html.classList.add('dark');
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.remove('dark');
        localStorage.setItem("theme", "light");
    }
}

// Update your DOMContentLoaded listener
$(document).ready(function(){
    const savedTheme = localStorage.getItem("theme") || "light";
    const checkbox = $(".toggle");

    if(savedTheme === "dark") {
        $("html").addClass("dark");
        checkbox.prop("checked", true);
    } else {
        $("html").removeClass("dark");
        checkbox.prop("checked", false);
    }
});

// add a function to open navbar on mobile
function openNavbar() {
    const menuIcon = $(".menu-icon");
    const navLinks = $(".nav-links"); 
    if (menuIcon.hasClass("fa-bars")) {
        menuIcon.removeClass("fa-bars").addClass("fa-xmark")
        navLinks.show();
    } else {
        menuIcon.removeClass("fa-xmark").addClass("fa-bars")
        navLinks.hide();
    }
}