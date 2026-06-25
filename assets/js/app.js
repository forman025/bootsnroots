// ======================================
// Boots N' Roots
// app.js
// ======================================

// Load HTML Components
async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) return;

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        element.innerHTML = await response.text();

        // Navbar finished loading
        if (id === "navbar") {
            initNavigation();
        }

    } catch (error) {
        console.error(error);
    }
}

// Initialize Navigation
function initNavigation() {

    highlightCurrentPage();
    initMobileMenu();

}

// Highlight Active Navigation Link
function highlightCurrentPage() {

    const current =
        window.location.pathname.split("/").pop() || "index.html";

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {

        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }

    });

}

// Mobile Navigation
function initMobileMenu() {

    const button = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if (!button || !nav) return;

    button.addEventListener("click", () => {

        nav.classList.toggle("show");
        button.classList.toggle("open");

    });

}

// Load Components
document.addEventListener("DOMContentLoaded", () => {

    loadComponent(
        "navbar",
        "assets/components/navbar.html"
    );

    loadComponent(
        "footer",
        "assets/components/footer.html"
    );

});
