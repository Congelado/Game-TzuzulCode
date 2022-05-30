import levelUp from './levelUp.js';
/** 
 * @param  {object} character - objeto que tiene los atrubutos de fuerza, defense y vitalidad
 */
function experience(character){
    let lv = character.level;
    let exp = 100;
    for(let i = 1; i < lv; i++) exp*=1.15;
    if(character.experience >= exp){
        levelUp(character);
    }
    return void 0;
}

export default experience;