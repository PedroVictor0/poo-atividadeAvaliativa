

class ItemMenu {
    private opcao: string;
    private textoDaOpcao: string;

    constructor(o:string, to:string){
        this.opcao = o;
        this.textoDaOpcao = to;
    }
    

    public getopcao(){
        return this.opcao
    }

    public gettextoDaOpcao(){
        return this.textoDaOpcao
    }

}

