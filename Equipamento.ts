class Equipamento {
    private nome: string;
    private aumentoAtaq: number;
    private aumentoDef: number;
   

    constructor (n: string, atac: number, def: number){
        this.nome = n;
        this.aumentoAtaq = atac;
        this.aumentoDef = def;
    }

    exibirInfoLutador(){
        console.log(`: ${this.nome}`)
    }

    public getnome (){
        return this.nome;
    }

    public getaumentoAtaq(){
        return this.aumentoAtaq; 
    }

    public getaumentoDef(){
        return this.aumentoDef;
    }    
}

let equipamento = new Equipamento("martelo", 30, 15)