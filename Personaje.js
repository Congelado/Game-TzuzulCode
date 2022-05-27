import {battleAxe, greatKnife, longsword, club} from './Weapons.js';

class Personaje{
    constructor(vitalidad, fuerza, defensa, nombre, nivel, experience){
        this.vitalidad = vitalidad;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.nombre = nombre;
        this.nivel = nivel;
        this.experience = experience;
    }
    
    toString(){
        return `vitalidad: ${this.vitalidad}\nfuerza: ${this.fuerza}\ndefensa: ${this.defensa}\nnombre: ${this.nombre}\nnivel: ${this.nivel}\nexperiencia: ${this.experience}`;
    }

    levelUp(){
        this.vitalidad += Math.floor(Math.random()*10);
        this.fuerza += Math.floor(Math.random()*10);    
        this.defensa += Math.floor(Math.random()*10);
    }

    exp(){
        exp = 100
        for(let i = 1; i < this.nivel+1; i++) exp*=1.15;
        if(this.experience >= exp){
            this.experience = 0;
            this.nivel++;
            levelUp();
        }
    }

    damage(weapons){
        const crit = prob => prob > Math.round(Math.random() * 100);
        if(crit(weapons.critRate)){
            return weapons.ataque*(0.07*this.fuerza) + (weapons.critDmg/100*weapons.ataque);
        }
        return weapons.ataque *(0.07*this.fuerza);
    }


    defense(enemi, weapon){
        let dmg = enemi.damage(weapon);
        return dmg/(100/(100 + this.defensa));
    }
}
const desgraciado = new Personaje(10, 10, 10, "desgraciado", 1, 0);
const berserker = new Personaje(14, 16, 12, "berserker", 7, 0);
const asesino = new Personaje(10, 9, 10, "asesino", 5, 0);
const guerrero = new Personaje(15, 14, 11, "guerrero", 9, 0);

const enemies = new Personaje(10, 10, 10, "enemigo", 1, 0);
const a = longsword
console.log(guerrero.defense(enemies, a));
export default {desgraciado, berserker, asesino, guerrero};