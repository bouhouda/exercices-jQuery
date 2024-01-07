//  Chemin relatif : ../reponses/script-10.js
// Assurez-vous que le document est prêt
$(document).ready(function() {
    // Fonction pour créer le damier
    function damier(rows, cols) {
        // Si les paramètres ne sont pas fournis, utilisez 8 pour les lignes et les colonnes
        rows = rows || 8;
        cols = cols || 8;

        // Sélectionnez la div dans laquelle le damier sera créé
        var damierContainer = $('#ce');

        // Créez le tableau HTML pour le damier
        var table = $('<table>').addClass('damier');

        // Boucle pour créer les lignes du damier
        for (var i = 0; i < rows; i++) {
            var row = $('<tr>');

            // Boucle pour créer les cellules de chaque ligne
            for (var j = 0; j < cols; j++) {
                var cell = $('<td>').addClass((i + j) % 2 === 0 ? 'blanc' : 'noir');
                row.append(cell);
            }

            table.append(row);
        }

        // Videz la div et ajoutez le tableau
        damierContainer.empty().append(table);
    }

    // Créez l'interface avec la zone de texte et le bouton
    var interface = $('<div>').addClass('interface');
    var input = $('<input>').attr('type', 'text').attr('placeholder', 'Nombre de lignes/colonnes');
    var button = $('<button>').text('Créer Damier');

    // Attachez l'événement click au bouton
    button.on('click', function() {
        var value = input.val();
        // Appelez la fonction damier avec le paramètre de la zone de texte
        damier(value, value);
    });

    // Ajoutez les éléments à l'interface
    interface.append(input).append(button);

    // Ajoutez l'interface à la div principale
    $('#ce').append(interface);
});
