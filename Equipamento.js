var Equipamento = /** @class */ (function () {
    function Equipamento(n, atac, def) {
        this.nome = n;
        this.aumentoAtaq = atac;
        this.aumentoDef = def;
    }
    Equipamento.prototype.exibirInfoLutador = function () {
        console.log(": ".concat(this.nome));
    };
    Equipamento.prototype.getnome = function () {
        return this.nome;
    };
    Equipamento.prototype.getaumentoAtaq = function () {
        return this.aumentoAtaq;
    };
    Equipamento.prototype.getaumentoDef = function () {
        return this.aumentoDef;
    };
    return Equipamento;
}());
var equipamento = new Equipamento("martelo", 30, 15);
