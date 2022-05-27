class Weapons{
    constructor(nombre, ataque, critRate, critDmg){
        this.nombre = nombre;
        this.ataque = ataque;
        this.critRate = critRate;
        this.critDmg = critDmg;
    }
    
    toString(){
        return `nombre: ${this.nombre}\nataque: ${this.ataque}\ncritRate: ${this.critRate}\ncritDmg: ${this.critDmg}`;
    }

    get Weapons(){
        return {
            nombre: this.nombre,
            ataque: this.ataque,
            critRate: this.critRate,
            critDmg: this.critDmg
        }
    }
}

const battleAxe = new Weapons('battle axe', 123, 50, 60);
const greatKnife = new  Weapons("great knife", 150, 60, 30);
const longsword = new  Weapons("longsword", 110, 40, 70);
const club = new  Weapons("club", 103, 10, 20);


export {battleAxe, greatKnife, longsword, club};
export default Weapons;



