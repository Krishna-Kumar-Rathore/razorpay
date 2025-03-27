const root = document.documentElement;

const colors = {
    deepBlue: "#02042a",
    lightBlue: "#2b84ea",
    lightBlue300: "#4b94ed",
    lightBlue500: "#0b72e7",
    greenLight: "#61cea6",
    grayText: "#818597",
    lightGray: "#e2e2e2",
    grayBlue: "#344a6c",
    deepBlueHead: "#162f56",
    gray2: "#525a76",
};

// Apply colors as CSS variables
Object.keys(colors).forEach(color => {
    root.style.setProperty(`--${color}`, colors[color]);
});


document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");

    // Open Sidebar
    menuBtn.addEventListener("click", () => {
        sidebar.style.right = "0";
    });

    // Close Sidebar
    closeBtn.addEventListener("click", () => {
        sidebar.style.right = "-300px";
    });

    // Close Sidebar if user clicks outside
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.style.right = "-300px";
        }
    });

    // Feather Icons
    feather.replace();
});

