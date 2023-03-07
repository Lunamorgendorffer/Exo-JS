var cases = document.querySelectorAll('.case'); //sélectionne tous les éléments avec la classe "case" 

var tour = "x";

var message = document.getElementById('message');// recupere l'element par id message 

cases.forEach(function(case_) {
    case_.addEventListener('click', function() {
        if (case_.textContent === "") { //Lorsqu'une case est cliquée, on vérifie si elle est vide 
            case_.textContent = tour;//Si c'est vide, il faut ajouter le texte 
            case_.classList.add(tour);
            tour = (tour === "x") ? "o" : "x";
            message.textContent = "C'est au tour de " + tour.toUpperCase();
            var isGrilleRemplie = true;
            cases.forEach(function(case__) {
              if (case__.textContent === "") {//Si une case vide est trouvée, alors 
                isGrilleRemplie = false; // la variable "isGrilleRemplie" est définie sur "false".
              }
            });
            if (isGrilleRemplie) {//Si la grille est remplie alors
              message.textContent = "Partie terminée"; //la variable "message" est mise à jour avec le contenu "Partie terminée".
            }
        }
    });
});