class Monstro {
    private healthPoints: number;
    private forcaAtaque: number;
    private forcaDefesa: number;
    hpMAx: number;

    constructor (hp: number, fa: number, fd: number){
        this.healthPoints = hp;
        this.forcaAtaque = fa;
        this.forcaDefesa = fd;
        this.hpMAx = hp;
    }

    receberDano(danoSofrido: number) {

        if(this.forcaDefesa >= danoSofrido){
            return this.healthPoints;
        }

        if (this.healthPoints  <= this.hpMAx * 0.25){
            danoSofrido -= danoSofrido * 0.5;
            this.forcaAtaque += this.forcaAtaque * 0.10;
            this.forcaDefesa += this.forcaDefesa * 0.30;
        }

        this.healthPoints = this.healthPoints - (danoSofrido - this.forcaDefesa)

        if (this.healthPoints <= 0){
            console.log("Monstro derrotado!!!!!")
        }
        return this.healthPoints;
    }

    ataque(){
        return this.forcaAtaque;
    }


    public gethealthPoints(){
        return this.healthPoints
    }

    public getforcaAtaque(){
        return this.forcaAtaque
    }

    public getforcaDefesa(){
        return this.forcaDefesa
    }

}

let mumia = new Monstro(100, 50, 20)