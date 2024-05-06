class Jogo {
    private menu: Menu;
    private lutador: Lutador;
    private coliseu: Coliseu;

    jogar(){
        let opcao = this.menu.imprimirMenu();
        
        switch(opcao){
            case "1":
                this.coliseu.getMonstro().receberDano(this.lutador.getAtaqueLutador());
            case "2":
                this.coliseu.getMonstro().receberDano(this.lutador.getAtaqueEspecial());
            case "3":
                this.lutador.getTomarPocaoHP();
            case "4":
                this.lutador.getTomarPorcaoMP();
            case "5":
                this.lutador.getdefesa();
            default:
                console.log("Selecione uma opção de 1 a 5")

        if(this.coliseu.getMonstro().gethealthPoints() > 0){
            this.lutador.receberDano(this.coliseu.getMonstro().getforcaAtaque())
        }

        if (this.coliseu.getMonstro().gethealthPoints() >= 0){
            console.log("Parabéns! Você venceu a luta no Coliseu")
            break;
        }
        else if (this.lutador.getHP() <= 0){
            console.log("Você foi derrotado pelo monstro...")
            break
        }
        else {
            console.log(this.lutador.getHP, this.lutador.getMP)
            console.log(this.coliseu.getMonstro)
            console.log(this.menu.imprimirMenu())
        }

        }
    }
}

let game = new Jogo();