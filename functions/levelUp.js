/**
 * @param  {object} character
 * objeto que tiene los atrubutos de strength, defense y hp
 */
function levelUp(character){
    character.hp += Math.floor(Math.random()*20);
    character.strength += Math.floor(Math.random()*5);    
    character.defense += Math.floor(Math.random()*5);
}

export default levelUp;