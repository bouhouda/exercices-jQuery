//  Chemin relatif : reponses/script-05.js
// Assurez-vous que le document est prêt
$(document).ready(function() {
    // Définir la fonction pour formater les nombres
    function format(number) {
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    // Parcourir les lignes du tableau et calculer les sous-totaux
    var sousTotal = 0;
    $('table tr:gt(0)').each(function() {
        var prix = parseFloat($(this).find('td:eq(1)').text());
        var quantite = parseInt($(this).find('td:eq(2)').text());
        var sousTotalLigne = prix * quantite;
        $(this).find('td:eq(3)').text(format(sousTotalLigne));
        sousTotal += sousTotalLigne;
    });

    // Calculer le total général
    var totalGeneral = format(sousTotal);
    $('table tr:last td:last').text(totalGeneral);

    // Mettez à jour la réponse dans la balise <code> avec l'id "reponse"
    var reponseElement = $('#reponse');
    reponseElement.text("Les sous-totaux et le total général ont été calculés avec succès.");
});
