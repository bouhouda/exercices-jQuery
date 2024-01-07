//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code
// Assurez-vous que le document est prêt
$(document).ready(function() {
    // Attacher un événement keypress à la zone de texte #f1
    $('#f1').on('keypress', function(event) {
        // Afficher l'objet Event dans la console
        console.log(event);

        // Récupérer le code du caractère
        var charCode = event.charCode;

        // Filtre pour ne s'afficher que les chiffres
        if (charCode >= 48 && charCode <= 57) {
            // Recopier le contenu de #f1 dans la div #out
            $('#out').text($(this).val());
        } else {
            // Empêcher l'affichage des caractères non-chiffres
            event.preventDefault();
        }
    });

    // Attacher un événement keypress à la zone de texte #f2
    $('#f2').on('keypress', function(event) {
        // Récupérer le code du caractère
        var charCode = event.charCode;

        // Filtre pour ne s'afficher que les chiffres et la logique pour afficher par lots de trois caractères
        if (charCode >= 48 && charCode <= 57) {
            var inputValue = $(this).val();
            var filteredValue = inputValue.replace(/\D/g, ''); // Supprimer les caractères non-chiffres
            var formattedValue = filteredValue.replace(/(\d{3})(?=\d)/g, '$1 '); // Ajouter un espace tous les trois caractères
            $('#out').text(formattedValue);
        } else {
            // Empêcher l'affichage des caractères non-chiffres
            event.preventDefault();
        }
    });

    // Mettez à jour la réponse dans la balise <code> avec l'id "reponse"
    var reponseElement = $('#reponse');
    reponseElement.text("Les événements keypress ont été attachés avec succès.");
});
