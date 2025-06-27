
function toggleSection(id) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
