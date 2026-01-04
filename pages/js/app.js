// Esto pone el año actual automáticamente en el footer
const footerText = document.getElementById("footerText");
const year = new Date().getFullYear();

footerText.textContent = `© ${year} - Proyecto HTML (Visual)`;
