var Monstro = /** @class */ (function () {
    function Monstro(hp, fa, fd) {
        this.healthPoints = hp;
        this.forcaAtaque = fa;
        this.forcaDefesa = fd;
        this.hpMAx = hp;
    }
    Monstro.prototype.receberDano = function (danoSofrido) {
        if (this.forcaDefesa >= danoSofrido) {
            return this.healthPoints;
        }
        if (this.healthPoints <= this.hpMAx * 0.25) {
            danoSofrido -= danoSofrido * 0.5;
            this.forcaAtaque += this.forcaAtaque * 0.10;
            this.forcaDefesa += this.forcaDefesa * 0.30;
        }
        this.healthPoints = this.healthPoints - (danoSofrido - this.forcaDefesa);
        if (this.healthPoints <= 0) {
            console.log("Monstro derrotado!!!!!");
        }
        return this.healthPoints;
    };
    Monstro.prototype.ataque = function () {
        return this.forcaAtaque;
    };
    Monstro.prototype.gethealthPoints = function () {
        return this.healthPoints;
    };
    Monstro.prototype.getforcaAtaque = function () {
        return this.forcaAtaque;
    };
    Monstro.prototype.getforcaDefesa = function () {
        return this.forcaDefesa;
    };
    return Monstro;
}());
var mumia = new Monstro(100, 50, 20);
