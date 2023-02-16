const menu = document.getElementById('menu');

document.getElementById('header-button').addEventListener('click', function() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
        menu.style.display = 'flex';
    }
});
