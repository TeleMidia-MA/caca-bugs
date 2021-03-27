var xmlDoc = loadXMLDoc("question.xml"); 
var dataBase = xmlDoc.getElementsByTagName("dataBase")[0];
var atualQuestion = 0;
var totalTime = 0;
var start, end;

getLastQuestion();

function saveLogSubmit(result, index, entries){
    adjustTime();
    $.ajax({
        type: "POST",
        url: "send_log.php",
        data:{right:result, question: index, sendEntries: entries, tipo: 'submit', time: totalTime},
        success: function(data){
            console.log(data);
        }
    }
    );
}
async function insertEvaluation(code,value){
    $.ajax({
        type: "POST",
        url: "evaluation.php",
        data:{code: 21, value: 7},
        success: function(data){
            console.log(data);
        }
    }
    );
}

function saveLogOpen(index){
    $.ajax({
        type: "POST",
        url: "send_log.php",
        data:{question: index, tipo: 'open'},
        success: function(data){
            console.log(data);
        }
    });
}
function getLastQuestion(){
    $.getJSON( "getQuestion.php", function(retorno) {
        for(i = 0; i < retorno.length; i++) {
            var objeto = (retorno[i]);
            atualQuestion = Number(objeto.question);
            console.log(atualQuestion);
            loadHTMLOfMenu();
        }
    }).fail(function() {
        console.log("falhou")
    });

}

function setLastQuestion(){
    $.ajax({
        type: "POST",
        url: "sendData.php",
        data:{currentQuestion: atualQuestion},
        success: function(data){
            console.log(data);
        }
    });
}

function openCode(language){		
	var i;
	var x = document.getElementsByClassName("code");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(language).style.display = "block";
}

function initValues(){
	var ipts = document.getElementsByClassName("variableInput");
	for (var i = 0; i < ipts.length; i++) {
		ipts[i].value = "";
	}
}

function loadXMLDoc(dname){
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else
    {
        xhttp=new ActiveXObject("Microsoft.XMLDOM");
    }

    xhttp.open("GET",dname,false);
    xhttp.send();
    return xhttp.responseXML;
}

async function loadHTMLOfQuestion2(index, value=null) {
    var gostou = opcao_marcada[0]==1?0:1
    var dificuldade = opcao_marcada[1]
    opcao_marcada = {}//reseta bts de feedback
    console.log (index)
    console.log (value)
    console.log (gostou)

    var html = "";
    var x;    
    var question = dataBase.getElementsByTagName("question")[index];
    var description = question.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var assunto = question.getElementsByTagName("assunto")[0].childNodes[0].nodeValue;
    var code = question.getElementsByTagName("code");
    var entry = question.getElementsByTagName("entry");
    var tip = question.getElementsByTagName("tip")[0].childNodes[0].nodeValue;
    var test = question.getElementsByTagName("test")[0].childNodes[0].nodeValue;

    //await insertEvaluation (code, value)


    $(document).ready(function(){
        $('#overlay, #overlay-back').fadeOut(500);                
    });
    
    if(value){
        console.log("enviando eval");
        $.ajax({
            type: "POST",
            url: "evaluation.php",
            data:{code: index, value: dificuldade, like: gostou},
            success: function(data){
                console.log(data);
            }
        });
    }else{
        console.log("não enviando eval");
    }
    startTime(); 
    saveLogOpen(index);
    html += "<input type=\"submit\" class = \"btnMenu\" value=\"Menu\" onclick=\"loadHTMLOfMenu();\">";
    html += "<div class = \"question\">";
    html += "<div class = \"titleQuestion\">Questão "+(index+1)+"</div>";
    html += "<div class = \"assuntoQuestion\">"+assunto+"</div>";
    html += "<div class = \"desc\">"+description+"</div>";    

    html+= "<div class=\"tabs\">"
    for (var i = 0; i < code.length; i++) {
        html+= "  <a href=\"#\" onclick=\"openCode('"+code[i].getAttribute('language')+"');\" class = \"buttonTab\">"+code[i].getAttribute('language')+"</a>";
    }
    html+= "</div>"


    for (var i = 0; i < code.length; i++) {
        html+= "<div id = \""+code[i].getAttribute('language')+"\" class=\"code\" >";
        html+= code[i].childNodes[0].nodeValue;
        html+="</div>";
    }
    

    html += "<div class=\"input\">";
    for (var i = 0; i < entry.length; i++) {
        html+= "<label>"+entry[i].childNodes[0].nodeValue+"</label> ";
        html+= "<input autocomplete='off' type=\"text\" class = \"variableInput\" id=\"txt"+entry[i].childNodes[0].nodeValue+"\"><br>";
    }
    html += "<span>Dica: "+tip+"</span><br><br>";
    html += "<input type=\"submit\" class=\"submit\" value=\"Enviar\" onclick=\"test"+index+"()\">";

    html += "</div>";
    html += "<div class = \"result\" id = \"myResult\"> </div>";
    html += "</div>";       
    document.getElementById("divTotal").innerHTML = html;   
    openCode(code[0].getAttribute('language'));
}

function loadHTMLOfQuestion(index) {
    
    //insertEvaluation (code, value)

    $(document).ready(function(){
        $('#overlay, #overlay-back').fadeOut(500);                
    });
    
    var html = "";
    var x;    
    var question = dataBase.getElementsByTagName("question")[index];
    var description = question.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var assunto = question.getElementsByTagName("assunto")[0].childNodes[0].nodeValue;
    var code = question.getElementsByTagName("code");
    var entry = question.getElementsByTagName("entry");
    var tip = question.getElementsByTagName("tip")[0].childNodes[0].nodeValue;
    var test = question.getElementsByTagName("test")[0].childNodes[0].nodeValue;
    startTime(); 
    saveLogOpen(index);
    html += "<input type=\"submit\" class = \"btnMenu\" value=\"Menu\" onclick=\"loadHTMLOfMenu();\">";
    html += "<div class = \"question\">";
    html += "<div class = \"titleQuestion\">Questão "+(index+1)+"</div>";
    html += "<div class = \"assuntoQuestion\">"+assunto+"</div>";
    html += "<div class = \"desc\">"+description+"</div>";    

    html+= "<div class=\"tabs\">"
    for (var i = 0; i < code.length; i++) {
    	html+= "  <a href=\"#\" onclick=\"openCode('"+code[i].getAttribute('language')+"');\" class = \"buttonTab\">"+code[i].getAttribute('language')+"</a>";
    }
    html+= "</div>"


    for (var i = 0; i < code.length; i++) {
    	html+= "<div id = \""+code[i].getAttribute('language')+"\" class=\"code\" >";
    	html+= code[i].childNodes[0].nodeValue;
    	html+="</div>";
    }
    
    html += "<div class=\"input\">";
    for (var i = 0; i < entry.length; i++) {
    	html+= "<label>"+entry[i].childNodes[0].nodeValue+"</label> ";
    	html+= "<input autocomplete='off' type=\"text\" class = \"variableInput\" id=\"txt"+entry[i].childNodes[0].nodeValue+"\"><br>";
    }
    html += "<span>Dica: "+tip+"</span><br><br>";
    html += "<input type=\"submit\" class=\"submit\" value=\"Enviar\" onclick=\"test"+index+"()\">";

    html += "</div>";
   	html += "<div class = \"result\" id = \"myResult\"> </div>";
    html += "</div>";	    
    document.getElementById("divTotal").innerHTML = html;   
    openCode(code[0].getAttribute('language'));
}	

function loadHTMLOfMenu(numberOfColumns){
    
    $(document).ready(function(){
        $('#overlay, #overlay-back').fadeOut(500);                
    });
    if(numberOfColumns == null) numberOfColumns = 5;
    var questions = dataBase.getElementsByTagName("question");
    var divIns = document.createElement("DIV");
    var divMenu = document.createElement("DIV");
    var table = document.createElement("TABLE");
    var actualRow;
    var iRow = 0;
    table.className = "tableMenu";
    divIns.className = "instruction";
    divMenu.className = "menu";
    divMenu.appendChild(divIns);
    for(var i = 0; i<questions.length; i++){
        var status = "";
        if(i%numberOfColumns == 0) actualRow = table.insertRow(iRow++);
        if(i>atualQuestion) status = "disabled";
        else status = "";
        actualRow.insertCell(i%numberOfColumns).innerHTML = "<button onclick = \"loadHTMLOfQuestion("+i+");\" class = \"menuQuestion\" "+status+">Questão "+(i+1)+"</button>";
    }
    divMenu.appendChild(table);
    divIns.innerHTML = "Selecione uma Questão";    
    document.getElementById("divTotal").innerHTML = "";
    document.getElementById("divTotal").appendChild(divMenu);
}

let opcao_marcada = {}
function postFeedback(group_id, index_questao, index_opcao){
    if(opcao_marcada[group_id]){
        document.getElementById('feedback-bt-'+group_id+'-'+opcao_marcada[group_id])?.classList.remove('feedbackButttonActive')
    }
    opcao_marcada[group_id] = ""+index_opcao
    document.getElementById('feedback-bt-'+group_id+'-'+opcao_marcada[group_id])?.classList.add('feedbackButttonActive')

    if(opcao_marcada[0] !== undefined && opcao_marcada[1] !== undefined){
        if(index_questao > lastIndex){
            loadHTMLOfMenu();
        }else{
            loadHTMLOfQuestion2(index_questao, index_opcao);
        }
    }
}

function reactToAnswer(result, index, entries){
    var img;
    var divPopup = document.createElement("DIV");
    divPopup.id = "overlay";
    var divCaixaResposta = document.createElement("DIV");
    divCaixaResposta.id = "caixaResposta";
    var divCaixaResposta2 = document.createElement("DIV");
    divCaixaResposta2.id = "caixaResposta2";
    
    
    //window.alert(entries);
    if(result){        
        para = document.createElement("p");
        if(index == lastIndex){
            para.appendChild(document.createTextNode("🎉 Você Venceu o Caça Bugs! 🎉"));
            divCaixaResposta2.appendChild(para);
            divCaixaResposta2.appendChild(document.createElement("BR"));
            divCaixaResposta2.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfMenu(); return false;\">Voltar ao Menu</a></div>";
            divPopup.appendChild(divCaixaResposta2);
        } 
        else{
            divCaixaResposta.appendChild(para);
            para.appendChild(document.createTextNode(" 👏🏻 Parabéns, Você Acertou!! 👏🏻"));
        }
        
        divCaixaResposta.appendChild(document.createElement("BR"));
        
        if(index >= atualQuestion){
            para = document.createElement("p");
            para.appendChild(document.createTextNode("Você Gostou da Questão?"));
            divCaixaResposta.appendChild(para);
            divCaixaResposta.appendChild(document.createElement("BR"));

            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" id='feedback-bt-0-0' onclick = \"postFeedback(0, "+(index+1)+", 0); return false;\">SIM</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" id='feedback-bt-0-1' onclick = \"postFeedback(0, "+(index+1)+", 1); return false;\">NÃO</a> ";
            divPopup.appendChild(divCaixaResposta);
            //

            para = document.createElement("p");
            para.appendChild(document.createTextNode("Qual Foi a Dificuldade Para Você?"));
            divCaixaResposta.appendChild(para);
            divCaixaResposta.appendChild(document.createElement("BR"));

            //divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfQuestion("+(index)+"); return false;\">Try Again</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" id='feedback-bt-1-1' onclick = \"postFeedback(1, "+(index+1)+", 1); return false;\">Muito Fácil</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" id='feedback-bt-1-2' onclick = \"postFeedback(1, "+(index+1)+", 2); return false;\">Fácil</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" id='feedback-bt-1-3' onclick = \"postFeedback(1, "+(index+1)+", 3); return false;\">Média</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" id='feedback-bt-1-4' onclick = \"postFeedback(1, "+(index+1)+", 4); return false;\">Difícil</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" id='feedback-bt-1-5' onclick = \"postFeedback(1, "+(index+1)+", 5); return false;\">Muito Difícil</a> ";
            divPopup.appendChild(divCaixaResposta);
        }else{
            //sem próxima na última questão
            if(index != lastIndex){
                divCaixaResposta2.appendChild(para);
                divCaixaResposta2.appendChild(document.createElement("BR"));
                divCaixaResposta2.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfMenu(); return false;\">Menu</a> ";
                divCaixaResposta2.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfQuestion2("+(index+1)+"); return false;\">Próxima Questão</a> ";
                divPopup.appendChild(divCaixaResposta2);
            }
        }
        
        //loadHTMLOfQuestion(index+1); 
        if(index>=atualQuestion){
            atualQuestion = index+1;
            setLastQuestion();            
        }
        else
        saveLogSubmit("true", index, entries);
    }else{
        /*window.alert(\"Tente Novamente\");*/ 
        initValues(); 
        para = document.createElement("p");
        para.appendChild(document.createTextNode("Resposta Errada! 😞"));
        divCaixaResposta2.appendChild(para);
        divCaixaResposta2.appendChild(document.createElement("BR"));
        divCaixaResposta2.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfMenu(); return false;\">Menu</a></div>";
        divCaixaResposta2.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfQuestion("+(index)+"); return false;\">Tentar Novamente</a> ";
        divPopup.appendChild(divCaixaResposta2);
        saveLogSubmit("false", index, entries);
    } 
    document.getElementById("divTotal").appendChild(divPopup);
    $(document).ready(function(){
        $('#overlay, #overlay-back').fadeIn(500);                
    });
}

function entradaInvalida(id){
    $( "#txt"+id).css( "background", "red" );
}

function resultadoInvalido(index){
    var divPopup = document.createElement("DIV");
    divPopup.id = "overlay";
    var divCaixaResposta2 = document.createElement("DIV");
    divCaixaResposta2.id = "caixaResposta2";
    para = document.createElement("p");
    para.appendChild(document.createTextNode("Entrada Inválida! Verifique a Marcação em Vermelho."));
    divCaixaResposta2.appendChild(para);
    divCaixaResposta2.appendChild(document.createElement("BR"));
    divCaixaResposta2.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfMenu(); return false;\">Menu</a></div>";
    divCaixaResposta2.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfQuestion("+(index)+"); return false;\">Tentar Novamente</a> ";
    divPopup.appendChild(divCaixaResposta2);
    document.getElementById("divTotal").appendChild(divPopup);
    $(document).ready(function(){
        $('#overlay, #overlay-back').fadeIn(500);                
    });
}

function startTime(){
    start = new Date().getTime()/1000;
    totalTime = 0;
}
function adjustTime(){
    totalTime += ((new Date().getTime()/1000)-start);
}
$(window).blur(function(e) {    
    end = new Date().getTime()/1000;
    totalTime += (end - start);     
});
$(window).focus(function(e) {
    start = new Date().getTime()/1000;
});