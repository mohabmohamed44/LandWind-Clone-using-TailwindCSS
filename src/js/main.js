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
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const checkbox = document.querySelector(".toggle");
    
    if (savedTheme === "dark") {
        document.documentElement.classList.add('dark');
        checkbox.checked = true;
    } else {
        document.documentElement.classList.remove('dark');
        checkbox.checked = false;
    }
});