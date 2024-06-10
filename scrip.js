toggleButton = document.getElementsByClassName('nav-toggle')[0];
NavLinks = document.getElementById('navLinks');
toggleButton.addEventlistner('click', function () {

    for (var i = 0; i < navlinks.length; i++);
        NavLinks[i].classList.toggle('active');
    
});