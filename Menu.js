var Menu = /** @class */ (function () {
    function Menu() {
        var ataque = new ItemMenu("1", "Atacar");
        var ataqueEspecial = new ItemMenu("2", "Ataque Especial");
        var curaHp = new ItemMenu("3", "Cura de MP");
        var MP = new ItemMenu("4", "Restaurar MP");
        var desefa = new ItemMenu("5", "Defender");
        this.itensMenu.push(ataque);
        this.itensMenu.push(ataqueEspecial);
        this.itensMenu.push(curaHp);
        this.itensMenu.push(MP);
        this.itensMenu.push(desefa);
    }
    Menu.prototype.imprimirMenu = function () {
        this.itensMenu.forEach(function (itemMenu) { return console.log(itemMenu.getopcao() + " - " + itemMenu.gettextoDaOpcao()); });
        var enter = require('prompt-sync')();
        var opcaoSelecionada = enter("Selecione uma opção");
        return opcaoSelecionada;
    };
    return Menu;
}());
