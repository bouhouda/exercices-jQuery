//  Chemin relatif : ../reponses/script-09.js
//  Chemin relatif : ../files/usa.json
// Assurez-vous que le document est prêt
$(document).ready(function() {
    // Partie A: JSON
    // A1: Chargez le fichier usa.json à l'aide d'une requête AJAX et affectez-le à la variable usa
    $.ajax({
        url: '/files/usa.json',
        dataType: 'json',
        success: function(usa) {
            // A2: Remplir la liste #la avec les noms des états US
            var selectLa = $('#la');
            $.each(usa, function(index, state) {
                selectLa.append($('<option>', {
                    value: state.name,
                    text: state.name
                }));
            });

            // A3: Attachez à la liste #la un handler change
            selectLa.on('change', function() {
                // Synchronisez les villes de la liste #lb avec l'état de la liste #la
                var selectedState = $(this).val();
                var cities = [];
                $.each(usa, function(index, state) {
                    if (state.name === selectedState) {
                        cities = state.cities;
                        return false; // Break out of the loop when the state is found
                    }
                });

                // Remplir la liste #lb avec les villes correspondantes
                var selectLb = $('#lb');
                selectLb.empty().append($('<option>', {
                    value: '',
                    text: 'Sélectionner une ville'
                }));
                $.each(cities, function(index, city) {
                    selectLb.append($('<option>', {
                        value: city,
                        text: city
                    }));
                });
            });
        },
        error: function() {
            console.error('Erreur lors du chargement du fichier JSON.');
        }
    });

    // Partie B: XML
    // Répéter le même processus avec le fichier usa.xml si nécessaire
});
