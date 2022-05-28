/**
 * @param  {object} character
 * objeto que tiene los atrubutos de fuerza, defensa y vitalidad
 */
function levelUp(character){
    character.vitalidad += Math.floor(Math.random()*20);
    character.fuerza += Math.floor(Math.random()*5);    
    character.defensa += Math.floor(Math.random()*5);
}

export default levelUp;