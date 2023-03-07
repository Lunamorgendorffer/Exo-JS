var carres = document.querySelectorAll('.carre');

carres.forEach(function(carre) {
    carre.addEventListener('click', function() {
        if (carre.classList.contains('shrink') && carre.classList.contains('red')) {
          carre.classList.remove('shrink', 'red');
        } else {
          carre.classList.add('shrink', 'red');
        }
    });
});