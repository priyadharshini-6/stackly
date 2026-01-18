document.addEventListener("DOMContentLoaded", () => {
    // 1. Determine current page
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    // 2. Select links in the container (ensure your nav has id="desktop-menu")
    const navLinks = document.querySelectorAll("#desktop-menu a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            // 3. Reset standard classes
            link.classList.remove("text-gray-600", "dark:text-gray-300", "hover:text-primary", "font-medium");
            
            // 4. Apply Active State
            link.classList.add("text-primary", "font-bold", "dark:text-primary");
        }
    });
});