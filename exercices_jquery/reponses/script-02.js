//  chemin relatif : reponses/script-02.js
$(document).ready(function() {
    // Cacher les div au départ
    $('.box').hide();
    
// Au clic sur la première div, lancer l'animation
    
    $('#ce .box:first').click(function() {
        // Animation pour faire disparaître les div
        $('#ce .box').each(function(index) {
            var box = $(this);
            box.fadeOut(500, function() {
                // Une fois qu'une div disparaît, la faire réapparaître après un délai
                box.delay(500 * index).fadeIn(500);
            });
        });
    });
});
