let arma = parseInt(window.prompt("escolha sua arma 1, 2 ou 3:\n 1)Espada e escudo\n 2)Machado Grande\n 3)Arco e Flecha"));

vida_ogro = 20;
vida_jogador = 20;

window.alert("Um enorme ogro aparece em seu caminho\n derrote-o antes que ele te mate");

if (arma == 1){
    while (vida_ogro > 0 && vida_jogador > 0){
        dado = Math.floor(Math.random() * 20) + 1;
        window.alert("você tirou " + dado + " no dado");
        if(dado >= 12){
            window.alert("você acerta o ogro com a espada");
            let dano = Math.floor(Math.random() * 10) + 1;
            window.alert("Você causou " + dano + " de dano no ogro");
            vida_ogro = vida_ogro - dano;
            if (vida_ogro == 0) {
                window.alert("Voce matou o ogro")
                break
            }
            } else {
            window.alert("Voce errou o ataque");
            }
        

        window.alert("Ogro te ataca");
        dado_ogro = Math.floor(Math.random() * 20) + 1;
        if(dado_ogro >= 13){
            window.alert("o ogro te acerta");
            let dano_ogro = Math.floor(Math.random() * 10) + 1;
            window.alert("o ogro causou " + dano_ogro + " de dano em você");
            vida_jogador = vida_jogador - dano_ogro;
            if (vida_jogador == 0){
                window.alert("O ogro devorou voce")
                break
            } else {
                window.alert("o ogro errou o ataque");
            }
        
        }
    }
}

if (arma == 2){
    while (vida_ogro > 0 && vida_jogador > 0){
        dado = Math.floor(Math.random() * 20) + 1;
        window.alert("você tirou " + dado + " no dado");
        if(dado >= 12){
            window.alert("você acerta o ogro com a machado");
            let dano = Math.floor(Math.random() * 12) + 1;
            window.alert("Você causou " + dano + " de dano no ogro");
            vida_ogro = vida_ogro - dano;if (vida_ogro == 0) {
                window.alert("Voce matou o ogro")
                break
            }
        } else {
            window.alert("Voce errou o ataque");
        }
        

        window.alert("Ogro te ataca");
        dado_ogro = Math.floor(Math.random() * 20) + 1;
        if(dado_ogro >= 13){
            window.alert("o ogro te acerta");
            let dano_ogro = Math.floor(Math.random() * 10) + 1;
            window.alert("o ogro causou " + dano_ogro + " de dano em você");
            vida_jogador = vida_jogador - dano_ogro;
            if (vida_jogador == 0){
                window.alert("O ogro devorou voce")
                break
            }
        } else {
            window.alert("o ogro errou o ataque");
        }
        
    }
}

if (arma == 3){
    while (vida_ogro > 0 && vida_jogador > 0){
        dado = Math.floor(Math.random() * 20) + 1;
        window.alert("você tirou " + dado + " no dado");
        if(dado >= 12){
            window.alert("você acerta uma flecha no ogro");
            let dano = Math.floor(Math.random() * 10) + 1;
            window.alert("Você causou " + dano + " de dano no ogro");
            vida_ogro = vida_ogro - dano;
            if (vida_ogro == 0) {
                window.alert("Voce matou o ogro")
                break
            }
        } else {
            window.alert("Voce errou o ataque");
        }
        

        window.alert("Ogro te ataca");
        dado_ogro = Math.floor(Math.random() * 20) + 1;
        if(dado_ogro >= 16){
            window.alert("o ogro te acerta");
            let dano_ogro = Math.floor(Math.random() * 10) + 1;
            window.alert("o ogro causou " + dano_ogro + " de dano em você");
            vida_jogador = vida_jogador - dano_ogro;
            if (vida_jogador == 0){
                window.alert("O ogro devorou voce")
                break
            }
        } else {
            window.alert("o ogro errou o ataque");
        }
        
    }
}