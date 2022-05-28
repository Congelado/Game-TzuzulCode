/**
 * @param  {object} character
 * character es un objeto que tiene los atributos de fuerza, defensa y vitalidad
 * @param  {object} weapon
 * weapon es un objeto que tiene los atributos de ataque, critRate y critDmg
 * @param  {object} enemi
 * character es un objeto que tiene los atributos de fuerza, defensa y vitalidad
 */
function attack(character, enemi, weapon){
    const crit = prob => prob > Math.round(Math.random() * 100);
    let dmg = 0;
    if(crit(weapon.critRate)){
        dmg = (weapon.ataque*(0.07*character.fuerza) + (weapon.critDmg/100*weapon.ataque)).toFixed(0);
    }else{
        dmg = (weapon.ataque *(0.07*character.fuerza)).toFixed(0);
    }

    return (dmg/(100/(100 + enemi.defensa))).toFixed(0);
}


export default attack;