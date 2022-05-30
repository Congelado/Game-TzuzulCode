/**
 * @param  {object} character
 * objeto que tiene los atrubutos de strength, defense, vitalidad y hp
 */
function levelUp(character){
    character.vitalidad += Math.floor(Math.random()*10);
    character.strength += Math.floor(Math.random()*10);    
    character.defense += Math.floor(Math.random()*10);
    character.level++;
    character.experience = 0;
    character.hp = 400 + character.vitalidad*2;
    return void 0;
}

export default levelUp;