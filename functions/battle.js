import attack from "./attack.js";
import experience from "./experience.js";
/**
 * sirve para hacer una batalla entre dos personajes y subir de nivel luego de ganar
 * 
 * @param  {object} personaje - objeto que tiene los atrubutos de strength, defense, vitalidad, experiencia, nivel y weapon(object)
 * @param  {object} enemigo - objeto que tiene los atrubutos de strength, defense, vitalidad, experiencia, nivel y weapon(object)
 * @return {int} retorna un numero 1 para indicar si el personaje perdio
 **/
function battle(personaje, enemigo){
    let nivel = personaje.level;
    let turn = 1;
    while(personaje.hp > 0 && enemigo.hp > 0){
        if(turn%2 != 0){
            let dmg = attack(personaje, enemigo);
            enemigo.hp -= dmg;

            console.log(`%c${personaje.nombre} ataca con ${personaje.weapon.nombre} y le hace ${dmg} de dmg`, `color: red`);
            console.log(`%c${enemigo.nombre} tiene ${enemigo.hp} de hp`,`color: blue`);
        }else{
            let dmg = attack(enemigo, personaje);
            personaje.hp -= dmg

            console.log(`%c${enemigo.nombre} ataca con ${enemigo.weapon.nombre} y le hace ${dmg} de dmg`, `color: blue`);
            console.log(`%c${personaje.nombre} tiene ${personaje.hp} de hp`, `color: red`);
        }
        turn++;
        let x =  alert()
    }
    if(personaje.hp <= 0){
        console.log(`%c${personaje.nombre} ha muerto`, `color: grey`);
        console.log('GAME OVER');
        exit();
    }else{
        console.log(`%c${enemigo.nombre} ha muerto`, `color: green`);
        personaje.experience += enemigo.experience;
        experience(personaje);
        if (nivel !== personaje.level){
            console.log(`%c${personaje.nombre} subio a nivel ${personaje.level}`, `color: green`);
        }
    }
    return void 0;
}

export default battle;