function experience(character){
    let lv = character.level;
    let exp = 100;
    for(let i = 1; i < lv+1; i++) exp*=1.15;
    if(character.experience >= exp){
        character.experience = 0;
        character.level++;
        levelUp(character);
    }
}