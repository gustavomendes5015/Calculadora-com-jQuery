$(document).ready(function() {
    $("#visor").focus();
    var evento = $(".nav").find(" li ul");
    $(".nav").find("li a").on("mouseover", function(){
        evento.slideDown(200);
    });
    $(".nav").on("mouseleave", function(){
        evento.slideUp(200);
    });
    $("#visor").on("keypress", function(e) {
        if(!teste(e)) {
            return false;
        }
    });
    $(".operandos").on("click", function() {
        operacoes($(this).val());
    });
    $("#limpar").on("click", limpar);
    $("#resultado").on("click", calcular);
    $("#historico").on("click", exibir);
    $("#limparHistorico").on("click", limparhistorico);
    $("#del").on("click", apagar); 
});

var resultado;
var auxResultado;
var array = 0;
var historico = Array();
var mostrar = false;

function teste(e) {
    var tecla = e.which;
    var letra = String.fromCharCode(tecla);
    if(!isNaN(letra) || tecla >= 40 && tecla <= 47) {
        if(tecla == 13) {
            calcular();
        }
        return true;
    } else {
        return false;
    } 

}

function operacoes(valor) {
    var t = $("#visor").val();
    $("#visor").attr("value", t + valor);
}

function limpar() {
    $("#visor").attr("value", ''); 
    $("#visor").focus();
}

function calcular() {
    var t = $("#visor").val();
    var letra = (t.charAt(t.length-1));
    auxResultado = t;
    if(!isNaN(letra) || letra == ')')  {
        resultado = eval(t);
        historico[array] = (t + '=' + '<span class = "resultado">' + resultado + '</span>');
        $("#visor").attr("value", resultado); 
    } 
    if(auxResultado == $("#visor").val()) {
        alert('Houve algum erro na operação!');
        historico[array] = '';
    } 
    $("#visor").focus();
    mostrarHistorico();
    array++;
}

function exibir() {
    if(mostrar) {
        $(".historico").hide();
        $("#historico").text('Exibir histórico');
        mostrar = false;
    } else {
        $(".historico").show();
        $("#historico").text('Esconder histórico');
        mostrar = true;
    }
    return false;
}

function mostrarHistorico() {
    var aux = '';
    $(".historico").empty();
    for(var i = 0 ; i < historico.length; ++i) {
        if(historico[i] != '') {
            aux += historico[i] + '<br>';
        }
    }
    $(".historico").append(aux);
}

function limparhistorico() {
    $(".historico").empty();
    for(var i = 0 ; i < historico.length; ++i) {
        historico[i] = '';
    }
    $("input").focus();
    return false;
}

function apagar() {
    var t = $("#visor").val();
    var texto = t.substr(0, (t.length-1));
    $("#visor").attr("value", texto);
}
