document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const closeButton = document.getElementById("closeButton");
    const searchMenu = document.getElementById("searchMenu");

    // Abrir el menú de búsqueda
    searchButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic se propague al documento
        searchMenu.classList.add("active");
    });

    // Cerrar el menú de búsqueda
    closeButton.addEventListener("click", () => {
        searchMenu.classList.remove("active");
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", (e) => {
        if (!searchMenu.contains(e.target) && !searchButton.contains(e.target)) {
            searchMenu.classList.remove("active");
        }
    });
});

