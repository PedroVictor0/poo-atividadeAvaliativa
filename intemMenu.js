var ItemMenu = /** @class */ (function () {
    function ItemMenu(o, to) {
        this.opcao = o;
        this.textoDaOpcao = to;
    }
    ItemMenu.prototype.getopcao = function () {
        return this.opcao;
    };
    ItemMenu.prototype.gettextoDaOpcao = function () {
        return this.textoDaOpcao;
    };
    return ItemMenu;
}());
