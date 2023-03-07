var carre = document.querySelector('#carre');

carre.addEventListener('click', function() {
  alert("Classe CSS : " + carre.className + "\n" +
    "Couleur du texte : " + window.getComputedStyle(carre).getPropertyValue('color') + "\n" +
    "Couleur de fond : " + window.getComputedStyle(carre).getPropertyValue('background-color') + "\n" +
    "Hauteur : " + carre.clientHeight + " pixels\n" +
    "Largeur : " + carre.clientWidth + " pixels\n" +
    "Nom de la classe : " + carre.classList.item(0) + "\n" +
    "Police et taille du texte : " + window.getComputedStyle(carre).getPropertyValue('font')
  );
});
