<html>
<head>
</head>
<body>

<button id='clicaae'>Clica Ae</button>
<div id="response"><b>Nome do garoto</b></div>

</body>
<script   src="http://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
<script>
var nome;
$(document).ready(function() {
    //console.log(window.localStorage.getItem("questionposition"));
    //window.localStorage.setItem("questionposition", 50);

    $("#clicaae").click(function() {

        $.getJSON( "getQuestion.php", function(retorno) {
            for(iLaco = 0; iLaco < retorno.length; iLaco++) {
                var objeto = (retorno[iLaco]);
                console.log(objeto.nome);
                nome = objeto.nome;
                $("#response").html(nome);

            }
        }).fail(function() {
            console.log("falhou")
        });


        $.ajax({
            type: "POST",
            url: "sendData.php",
            data:{currentQuestion: 12},
            success: function(data){
                console.log(data);
            }
        });
    });
});
</script>
</html>