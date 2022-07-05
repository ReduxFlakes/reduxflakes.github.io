window.addEventListener('load', function() {
    const toggleButton = document.getElementsByClassName('navbar-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links');
    toggleButton.addEventListener('click', function() {
        for (var i = 0; i < navbarLinks.length; i++)
            navbarLinks[i].classList.toggle('active');
    });
});