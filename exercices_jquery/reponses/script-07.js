//  Chemin relatif : reponses/script-08.js
// Assurez-vous que le document est prêt
$(document).ready(function() {
    // Variables pour la position initiale de la boîte
    var positionX = 0;
    var positionY = 0;

    // Attachez un gestionnaire pour l'événement keydown sur l'objet document
    $(document).on('keydown', function(event) {
        // Vérifiez si la touche SHIFT est enfoncée
        if (event.shiftKey) {
            // Récupérez la classe box
            var box = $('.box');

            // Déplacez la boîte dans la direction choisie
            switch (event.key) {
                case 'ArrowLeft':
                    positionX -= 10;
                    break;
                case 'ArrowUp':
                    positionY -= 10;
                    break;
                case 'ArrowRight':
                    positionX += 10;
                    break;
                case 'ArrowDown':
                    positionY += 10;
                    break;
            }

            // Appliquez la nouvelle position à la boîte
            box.css({
                left: positionX + 'px',
                top: positionY + 'px'
            });
        }
    });

    // Mettez à jour la réponse dans la balise <code> avec l'id "reponse"
    var reponseElement = $('#reponse');
    reponseElement.text("L'événement keydown a été attaché avec succès pour déplacer la boîte.");
});
//Pour déplacer l'objet simultanément en haut et à gauche il faut apuier sur les touches: SHIFT + ↑ + ←
