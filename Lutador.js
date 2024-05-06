var Lutador = /** @class */ (function () {
    function Lutador(hp, mp, ataque, defesa, em, ec, corpo) {
        this.HP = hp;
        this.MP = mp;
        this.ataque = ataque;
        this.defesa = defesa;
        this.equipamentoMao = em;
        this.equipamentocabeca = ec;
        this.equipamentoCorpo = corpo;
        this.HPmax = hp;
        this.MPmax = mp;
    }
    Lutador.prototype.getequipamentoMao = function () {
        return this.equipamentoMao;
    };
    Lutador.prototype.getequipamentoCabeca = function () {
        return this.equipamentocabeca;
    };
    Lutador.prototype.getequipamentoCorpo = function () {
        return this.equipamentoCorpo;
    };
    Lutador.prototype.getHP = function () {
        return this.HP;
    };
    Lutador.prototype.getMP = function () {
        return this.MP;
    };
    Lutador.prototype.getataque = function () {
        this.ataque;
    };
    Lutador.prototype.getdefesa = function () {
        this.defesa;
    };
    Lutador.prototype.exibirInfoLutador = function () {
        console.log("As informa\u00E7\u00F5es do seu lutador est\u00E3o logo abaixo:\n        HP: ".concat(this.HP, "\n        MP: ").concat(this.MP, "\n        Ataque: ").concat(this.ataque, "\n        Defesa: ").concat(this.defesa, "\n         "));
    };
    Lutador.prototype.getAtaqueLutador = function () {
        return this.ataque + this.equipamentoCorpo.getaumentoAtaq() + this.equipamentoMao.getaumentoAtaq() + this.equipamentocabeca.getaumentoAtaq();
    };
    Lutador.prototype.getAtaqueEspecial = function () {
        if (this.MP < this.MPmax * 0.2) {
            console.log("MP insuficiente");
            return 0;
        }
        this.MP -= this.MPmax * 0.2;
        var ataqueEspecial = this.getAtaqueLutador() * 1.50;
        return ataqueEspecial;
    };
    Lutador.prototype.getDefesa = function () {
        return this.defesa + this.equipamentoCorpo.getaumentoDef() + this.equipamentoMao.getaumentoDef() + this.equipamentocabeca.getaumentoDef();
    };
    Lutador.prototype.receberDano = function (danoSofrido) {
        if (this.getDefesa() >= danoSofrido) {
            return this.defesa;
        }
        else {
            this.HP -= this.HP - (danoSofrido - this.getDefesa());
        }
    };
    Lutador.prototype.getTomarPocaoHP = function () {
        this.HP += this.HPmax * 0.25;
    };
    Lutador.prototype.getTomarPorcaoMP = function () {
        this.MP += this.MPmax * 0.25;
    };
    return Lutador;
}());
var pedro = new Lutador(300, 200, 30, 35, "pedro", "Coroa de rei", "Gota de Couro");
