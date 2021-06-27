function enviar() {
    var n = document.getElementById("idNome");
    var e = document.getElementById("idEmail");
    var s = document.getElementById("idSug");
    if (n.value && e.value && s.value != "") {
        alert("Thank you for your suggestion, " + n.value + "\n" + "We will evaluate your suggestion and we can contact you by email:" + e.value)
    } else {
        alert("Enter your name, email and leave your suggestion")
    }
}



function mensagemAtualizacao(el) {
    
    var display = document.getElementById(el).style.display;
    
    var ddsAtualizacao = new Object();
        ddsAtualizacao.patch = "20.2.2";
        ddsAtualizacao.data = "06/29/2021";
        ddsAtualizacao.classes = "Mage, Sorcerer, Paladin, Hunter, Priest, Shaman and Warrior."
        ddsAtualizacao.debuff = "Mage, Paladin and Sorcerer.";
        ddsAtualizacao.buff = "Hunter, Priest, Shaman and Warrior.";
        ddsAtualizacao.focoDebuff = " balance the mana cost with the value of the card, in addition to trying to balance the early game of other classes,"
        ddsAtualizacao.focoBuff = " improve the potential value of the card by seeking to balance it against other classes which had a lot of advantages in the early and mid-game.";

    if(display == "none")
    {
        
        document.getElementById(el).style.display = 'block';
        
        document.getElementById("atualizacao").innerHTML = "The update patch " + ddsAtualizacao.patch + ", Will be released on " + ddsAtualizacao.data + " and will change the following classes: " + "<br>" + ddsAtualizacao.classes + "<br>" + "The classes that will be debuffed will be the classes: " + "<br>" + ddsAtualizacao.debuff + "<br>" + "Classes that have received buffs will be:" + "<br>" + ddsAtualizacao.buff + "<br>" + "The objective of our debuff is precisely," + ddsAtualizacao.focoDebuff + "<br>" + "While the goal of our buff is precisely" + "<br>" + ddsAtualizacao.focoBuff;
    }
    else
    {
        document.getElementById(el).style.display = "none";
        
    }
}
