// Function to load external HTML into a div
function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load header and footer
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");