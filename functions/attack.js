import crit from "./crit.js";
/**
 * @param  {object} character
 * character es un objeto que tiene los atributos de strength, defense y hp
 * @param  {object} enemi
 * character es un objeto que tiene los atributos de strength, defense y hp
 * @return {number}
 * retorna el daño que le hace el personaje contra el enemigo
 **/

function attack(character, enemi){
    let dmg = 0;
    if(crit(character.weapon.critRate)){
        dmg = (character.weapon.damage*(0.07*character.strength) + (character.weapon.critDmg/100*character.weapon.damage)).toFixed(0);
    }else{
        dmg = (character.weapon.damage *(0.07*character.strength)).toFixed(0);
    }

    return (dmg/(100/(100 + enemi.defense))).toFixed(0);
}


export default attack;