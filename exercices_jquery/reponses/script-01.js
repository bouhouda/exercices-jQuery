//  chemin relatif : reponses/script-01.js
// 
// Question 1
 // Modifier la couleur du texte de la première div (rouge)
 $('#ce div:first').css('color', 'red');

 // Question 2
 // Cloner la première et l'ajouter à la fin de la liste des div
 var premierDivClone = $('#ce div:first').clone();
 $('#ce').append(premierDivClone);

 // Question 3
 // Déplacer la dernière div et la mettre au début de la liste
 var derniereDiv = $('#ce div:last');
 derniereDiv.remove();
 $('#ce').prepend(derniereDiv);

 // Question 4
 // Créer une nouvelle div, l'ajouter à la fin de la liste et afficher dedans le nombre total des div de la liste (y compris celle ajoutée)
 var nouvelleDiv = $('<div>').text('Nombre total de div : ' + $('#ce div').length);
 $('#ce').append(nouvelleDiv);

 // Question 5
 // Parcourir toutes les div et y ajouter un numéro d'ordre 1, 2, ...
 $('#ce div').each(function(index) {
     $(this).text($(this).text() + ' ' + (index + 1));
 });