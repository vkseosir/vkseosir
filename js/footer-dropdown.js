// Toggle dropdown menu in footer
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle-footer');

    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const parent = this.closest('.dropdown-footer');
            parent.classList.toggle('active');
        });
    });
});
