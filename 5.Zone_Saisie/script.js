window.addEventListener("DOMContentLoaded", (event) => { // code permet d'attendre que la page soit complètement chargée avant de déclencher certaines instructions JavaScript.
  const change = 6.55957;// on declare la constante definit la variable du tx de change
  const devisefr = document.getElementById('devisefr'); // on declare la constante qui recupere pour valeur les elements sous l'id devisefr 
  const deviseeu = document.getElementById('deviseeu');// on declare la constante   qui recupere pour valeur les elements l'element sous l'id deviseeu
 
  devisefr.addEventListener('keyup', function(){ // Permet de detecter les modif - lorsque l'utilisateur saisit un montant en euros dans un champ de formulaire on applique les instructions ci-dessus 
    let franc = parseFloat(this.value.trim());//on transforme une chaîne de caractères en un nombre flottant afin de pouvoir effectuer des calcules avec celle-ci 
    let euro = parseFloat(franc/change);//on transforme une chaîne de caractères en un nombre flottant en divisant franc par tx change 
    deviseeu.value = euro.toFixed(2); //permet d'arrondir un nombre en euro à 2 chiffre apres la virgule 
});
 
deviseeu.addEventListener('keyup', function(){ //Permet de detecter les modif - lorsque l'utilisateur saisit un montant en euros dans un champ de formulaire on applique les instructions ci-dessus 
    let euro = parseFloat(this.value.trim());//on transforme une chaîne de caractères en un nombre flottant
    let franc = parseFloat(euro*change); //on transforme une chaîne de caractères en un nombre flottant en multipliant franc par tx change 
    devisefr.value = franc.toFixed(2);//permet d'arrondir un nombre en euro à 2 chiffre apres la virgule 
  });
});
