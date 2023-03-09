const boite = document.querySelector(".boite") // On definit la variable en selectionnant la classe boite 

let id = 0; // variable à incrémenté pour apposé une limite de génération de carré
let maxId = 225 // limite max

document.addEventListener("keydown", (e) => { // déclaration fonction événement sur le clavier à l'appui 
    let newboxs = document.querySelectorAll(".carre"); // variable pour tous les éléments créer  de la classe carre
    if (e.key === "ArrowDown" && id < maxId) { //touche du bas du clavier
        e.preventDefault(); // suppression de l'effet d'origine (aller vers le bas)
        const newbox = document.createElement("div"); // on crée une div sur la page web 
        newbox.classList.add("carre"); // on ajoute classe carre 
        boite.appendChild(newbox); // ajout de l'enfant de l'élément boite
        setBg(newbox); // exécution de la fonction sur l'élément new box 
        id++; 
    } else if (e.key === "ArrowUp") { // touche haut du clavier
        e.preventDefault(); // supression de l'effet d'origine (aller vers le haut)
        let soustrait = newboxs[newboxs.length - 1]; // on soustrait le dernier element en parcourant le tableau
        boite.removeChild(soustrait); // retrait du dernier enfant généré par rapport à la variable
    }
    // changement couleur carré 
    newboxs.forEach(function (box) {  
        box.addEventListener("click", function () { // déclaration événement au click pour chaque élément
            box.style.backgroundColor = "black"; // changement vers la couleur noir
        })
    })
})

const setBg = (item) => { // fonction générant une couleur aléatoire
    let randomColor = ""; // déclaration de la variable à utilisé
    while (randomColor.length != 6) { // condition pour le cas ou le code couleur commence par 0 et qu'il ne soit pas interpréter 
        // tant que la longueur du code couleur n'est pas de 6 caractères alors on génère une autre couleur 
        randomColor = Math.floor(Math.random() * 16777215).toString(16); // fonction permettant la génération d'un code couleur en format héxadécimal
        console.log(randomColor);
    }
    item.style.backgroundColor = "#" + randomColor; // le # plus les chiffre hexa donne le code couleur
}