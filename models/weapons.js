class Weapon{
    constructor(nombre, damage, critRate, critDmg){
        this.nombre = nombre
        this.damage = damage
        this.critRate = critRate
        this.critDmg = critDmg
    }

    crit(){
        return this.critRate >= Math.round(Math.random() * 100);
    }
    
    mostrar_arma(){
        console.table(this)
    }

}

const battleAxe = new Weapon('battle axe',150,60);

const battleKnife = new Weapon('battle knife',150,60,30);

const longsword = new Weapon('longsword',110,40,70);

const stick = new Weapon('stick',103,10,20);

const claws = new Weapon('claws',100,20,30);


export  {battleAxe, battleKnife, longsword, stick, claws};