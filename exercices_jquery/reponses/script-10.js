//  Chemin relatif : ../reponses/script-10.js
// Assurez-vous que le document est prêt
$(document).ready(function() {
    // Sélectionnez la div contenant l'image
    var imgContainer = $('#imgsrc');

    // Sélectionnez la div.box
    var zoomBox = $('.box');

    // Gérez l'événement mousemove sur l'image
    imgContainer.on('mousemove', function(event) {
        // Récupérez les coordonnées de la souris par rapport à l'image
        var mouseX = event.pageX - imgContainer.offset().left;
        var mouseY = event.pageY - imgContainer.offset().top;

        // Calculez le pourcentage de déplacement
        var percentX = (mouseX / imgContainer.width()) * 100;
        var percentY = (mouseY / imgContainer.height()) * 100;

        // Mettez à jour les styles de la boîte de zoom pour répliquer la zone survolée
        zoomBox.css({
            background: 'url(interface/images/monalisa-orig.png) no-repeat',
            'background-size': '400% 250%',
            'background-position': percentX + '% ' + percentY + '%',
            width: '250px',
            height: '156.25px', // 250px * 0.625 (rapport hauteur/largeur de l'image)
            border: '1px solid #f08'
        });
    });

    // Gérez l'événement mouseleave pour réinitialiser la boîte de zoom
    imgContainer.on('mouseleave', function() {
        zoomBox.css({
            background: 'none',
            border: '1px solid #f08',
            width: '250px',
            height: '156.25px'
        });
    });
});
