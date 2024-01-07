//  Chemin relatif : Pas de JS.
/**
 * Les fichiers générés doivent etre déposés dans le dossier ../files
 *    ../files/fr.xml
 *    ../files/fr-json.xml
 */
// Assurez-vous que le document est prêt
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "/files/usa.xml",
            dataType: "xml",
            success: function (xml) {
                $.ajax({
                    type: "GET",
                    url: "/files/fr-json.xsl",
                    dataType: "xml",
                    success: function (xsl) {
                        var xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsl);
                        var resultDocument = xsltProcessor.transformToDocument(xml);

                        // Convert result to JSON string
                        var jsonString = resultDocument.firstChild.textContent;

                        // Display JSON string (you can also save it as fr.json)
                        console.log(jsonString);
                    }
                });
            }
        });
    });