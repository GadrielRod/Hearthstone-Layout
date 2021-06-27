function enviar() {
    var n = document.getElementById("idNome");
    var e = document.getElementById("idEmail");
    var s = document.getElementById("idSug");
    if (n.value && e.value && s.value != "") {
        alert("Obrigado(a) Sr.(a) " + n.value + "\n" + "Vamos avalia sua sugestão e poderemos entrar em contato com você pelo seu email: " + e.value)
    } else {
        alert("Digite seu nome, e-mail e deixe sua sugestão")
    }
}



function mensagemAtualizacao(el) {
    
    var display = document.getElementById(el).style.display;
    
    var ddsAtualizacao = new Object();
        ddsAtualizacao.patch = "20.2.2";
        ddsAtualizacao.data = "06/29/2021";
        ddsAtualizacao.classes = "Mago, Bruxo, Paladino, Caçador, Sacerdote, Xamã e Guerreiro."
        ddsAtualizacao.debuff = "Mago, Paladino e Bruxo.";
        ddsAtualizacao.buff = "Caçador, Sacerdote, Xamã e Guerreiro.";
        ddsAtualizacao.focoDebuff = " balancear o custo de mana com o valor da carta, além de buscar-mos balancear o early game das outras classes,"
        ddsAtualizacao.focoBuff = " melhorar o valor potencial da carta buscando balancear contra as outras classes que tinham muita vantagem no early e mid game.";

    if(display == "none")
    {
        
        document.getElementById(el).style.display = 'block';
        
        document.getElementById("atualizacao").innerHTML = "O patch da atualização " + ddsAtualizacao.patch + ", Sera lançado no dia " + ddsAtualizacao.data + " e contara com as seguintes classes: " + "<br>" + ddsAtualizacao.classes + "<br>" + "As classes que sofrerão debuff serão as classes: " + "<br>" + ddsAtualizacao.debuff + "<br>" + "Já as classes que receberão buff serão: " + "<br>" + ddsAtualizacao.buff + "<br>" + "O foco do nosso debuff é justamente, " + ddsAtualizacao.focoDebuff + "<br>" + "Enquanto o foco do nosso buff é justamente" + "<br>" + ddsAtualizacao.focoBuff;
    }
    else
    {
        document.getElementById(el).style.display = "none";
        
    }
}
