import { battleAxe, battleKnife, stick, claws } from "./weapons.js";
import { poke004 } from "../assets/charmander.js";
import { poke092 } from "../assets/gastly.js";
import { poke025 } from "../assets/pikachu.js";
import { poke133 } from "../assets/eevee.js";
import { poke143 } from "../assets/snorlax.js";

class Personaje {
  constructor(vital, stren, def, name, lv, exp, arm, imagen, color="white") {
    this.hp = 400 + vital * 2;
    this.vitalidad = vital;
    this.strength = stren;
    this.defense = def;
    this.nombre = name;
    this.level = lv;
    this.experience = exp;
    this.weapon = arm;
    this.img = imagen;
    this.color = color
  }

  attack(enemi, dano) {
    let dmg;
    this.weapon.crit() ? dmg = (this.weapon.damage * (0.07 * this.strength) + (this.weapon.critDmg / 100) * this.weapon.damage): dmg = (this.weapon.damage * (0.07 * this.strength));

    return (dmg.toFixed(0) / (100 / (100 + enemi.defense))+dano).toFixed(0);
  }

  noqueado(desmayado) {
    if (this.hp <= 0) {
      this.hp = 0;
      console.log(desmayado, "esta fuera de combate");
    }
  }

  levelUp() {
    this.vitalidad += Math.floor(Math.random() * 10);
    this.strength += Math.floor(Math.random() * 10);
    this.defense += Math.floor(Math.random() * 10);
    this.level++;
    this.hp = 400 + this.vitalidad * 2;
  }

  mostrarPersonaje() {
    let estadisticas = {
      "vida":this.hp,
      "vitalidad":this.vitalidad,
      "fuerza":this.strength,
      "defensa":this.defense,
      "nombre":this.nombre,
     "nivel":this.level,
      "experiencia":this.experience,
  };
    console.table(estadisticas);
    console.log("%c"+this.img,"color: "+this.color);
  }

  experiensa(){
    let lv = this.level;
    let exp = 100;
    for(let i = 1; i < lv; i++) exp*=1.15;
    if(this.experience >= exp){
        this.experience -= exp.toFixed(0)
        this.levelUp();
    }
  }
}

const Charmander = new Personaje(50, 40, 50, "Charmander", 1, 0, stick, poke004[0],"white");
const Gastly = new Personaje(10, 20, 20, "Gastly", 1, 0, battleAxe, poke092[0],"white");
const Pikachu = new Personaje(40, 40, 40, "Pikachu", 1, 0, battleKnife, poke025[0],"white");

const Eevee = new Personaje(40, 40, 40, "Eevee", 1, 100, claws, poke133[0],"white");
const Snorlax = new Personaje(50, 50, 50, "Snorlax", 2, 200, stick, poke143[0],"white");

export { Charmander, Gastly, Pikachu, Eevee, Snorlax};
