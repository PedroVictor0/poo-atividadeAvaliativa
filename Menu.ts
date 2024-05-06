class Menu {
    private itensMenu: ItemMenu[];

    constructor(){
        let ataque = new ItemMenu("1", "Atacar");
        let ataqueEspecial = new ItemMenu("2", "Ataque Especial");
        let curaHp = new ItemMenu("3", "Cura de MP");
        let MP = new ItemMenu("4", "Restaurar MP");
        let desefa = new ItemMenu("5", "Defender");

        this.itensMenu.push(ataque);
        this.itensMenu.push(ataqueEspecial);
        this.itensMenu.push(curaHp);
        this.itensMenu.push(MP);
        this.itensMenu.push(desefa);
    }
    
   imprimirMenu(){
       this.itensMenu.forEach(itemMenu => console.log(itemMenu.getopcao() + " - " + itemMenu.gettextoDaOpcao()))

       var enter = require('prompt-sync')();
       let opcaoSelecionada = enter("Selecione uma opção");
       return opcaoSelecionada;
   }
}

