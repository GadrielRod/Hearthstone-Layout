function enviar() {
    var n = document.getElementById("idNome");
    var e = document.getElementById("idEmail");
    var s = document.getElementById("idSug");
    if (n.value && e.value && s.value != "") {
        alert("Merci, pour votre suggestion, " + n.value + "\n" + "Nous évaluerons votre suggestion et nous pouvons vous contacter par email : " + e.value)
    } else {
        alert("Entrez votre nom, email et laissez votre suggestion")
    }
}



function mensagemAtualizacao(el) {
    
    var display = document.getElementById(el).style.display;
    
    var ddsAtualizacao = new Object();
        ddsAtualizacao.patch = "20.2.2";
        ddsAtualizacao.data = "06/29/2021";
        ddsAtualizacao.classes = "Mage, Sorcier, Paladin, Chasseur, Prêtre, Chaman e Guerrier."
        ddsAtualizacao.debuff = "Mage, Paladin e Sorcier.";
        ddsAtualizacao.buff = "Chasseur, Prêtre, Chaman e Guerrier.";
        ddsAtualizacao.focoDebuff = " équilibrer le coût de mana avec la valeur de la carte, en plus d'essayer d'équilibrer le début de partie des autres classes,"
        ddsAtualizacao.focoBuff = " améliorer la valeur potentielle de la carte en cherchant à l'équilibrer par rapport aux autres classes qui avaient beaucoup d'avantages en début et milieu de partie.";

    if(display == "none")
    {
        
        document.getElementById(el).style.display = 'block';
        
        document.getElementById("atualizacao").innerHTML = "Le patch de mise à jour " + ddsAtualizacao.patch + ", Sera est sorti le " + ddsAtualizacao.data + " et changera les classes suivantes : " + "<br>" + ddsAtualizacao.classes + "<br>" + "Les classes qui seront débuffées seront les classes : " + "<br>" + ddsAtualizacao.debuff + "<br>" + "Les classes qui ont reçu des buffs seront : " + "<br>" + ddsAtualizacao.buff + "<br>" + "L'objectif de notre debuff est précisément," + ddsAtualizacao.focoDebuff + "<br>" + "Alors que l'objectif de notre buff est précisément" + "<br>" + ddsAtualizacao.focoBuff;
    }
    else
    {
        document.getElementById(el).style.display = "none";
        
    }
}
