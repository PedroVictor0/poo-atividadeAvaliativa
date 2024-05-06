class Lutador {
    private HP: number;
    private MP: number;
    private ataque: number;
    private defesa: number;
    private equipamentoMao: Equipamento;
    private equipamentocabeca: Equipamento;
    private equipamentoCorpo: Equipamento; 
    HPmax: number;
    MPmax: number;

    constructor (hp: number, mp: number, ataque: number, defesa: number, em: Equipamento
        , ec: Equipamento, corpo: Equipamento) {
      
        this.HP = hp;
        this.MP = mp;
        this.ataque = ataque;
        this.defesa = defesa;
        this.equipamentoMao = em;
        this.equipamentocabeca = ec;
        this.equipamentoCorpo = corpo;
        this.HPmax = hp
        this.MPmax = mp

    }

    public getequipamentoMao(){
        return this.equipamentoMao;
    }
     public getequipamentoCabeca(){
        return this.equipamentocabeca;
    } 
    public getequipamentoCorpo(){
        return this.equipamentoCorpo;
    }

    public getHP(){
        return this.HP
    }

    public getMP(){
        return this.MP;
    }

    public getataque(){
        this.ataque;
    }

    public getdefesa(){
        this.defesa;
    }

    exibirInfoLutador(){
        console.log(`As informações do seu lutador estão logo abaixo:
        HP: ${this.HP}
        MP: ${this.MP}
        Ataque: ${this.ataque}
        Defesa: ${this.defesa}
         `)
    }

    getAtaqueLutador(){
        return this.ataque + this.equipamentoCorpo.getaumentoAtaq() + this.equipamentoMao.getaumentoAtaq() + this.equipamentocabeca.getaumentoAtaq()
        
    }

    getAtaqueEspecial(){
        
        if(this.MP < this.MPmax * 0.2 ){
            console.log("MP insuficiente")
          return 0 
        }

        this.MP -= this.MPmax * 0.2;
        let ataqueEspecial = this.getAtaqueLutador() * 1.50;
        return ataqueEspecial;
    }

    getDefesa(){
        return this.defesa + this.equipamentoCorpo.getaumentoDef() + this.equipamentoMao.getaumentoDef() + this.equipamentocabeca.getaumentoDef()
    }

    receberDano(danoSofrido: number){
        if(this.getDefesa() >= danoSofrido){
            return this.defesa;
        }
        else {
            this.HP -= this.HP - (danoSofrido - this.getDefesa())
        }
    }

    getTomarPocaoHP(){
        this.HP += this.HPmax * 0.25;
    }

    getTomarPorcaoMP(){
        this.MP += this.MPmax * 0.25; 
    }
}

let pedro = new Lutador(300, 200, 30, 35, "pedro", "Coroa de rei", "Gota de Couro")