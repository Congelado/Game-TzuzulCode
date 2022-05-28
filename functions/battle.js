const battle = (personaje, enemigo) => {
    let turn = 0;
    while(personaje.vitalidad > 0 && enemigo.vitalidad > 0){
        turn++;
        if(turn%2 == 0){
            enemigo.hp() -= personaje.damage(enemigo.weapon);
            console.log(`${personaje.nombre} ataca con ${personaje.weapon.nombre} y le hace ${personaje.damage(enemigo.weapon)} de daño`);
            console.log(`${enemigo.nombre} tiene ${enemigo.hp()} de vitalidad`);
        }else{
            personaje.hp() -= enemigo.damage(personaje.weapon);
            console.log(`${enemigo.nombre} ataca con ${enemigo.weapon.nombre} y le hace ${enemigo.damage(personaje.weapon)} de daño`);
            console.log(`${personaje.nombre} tiene ${personaje.hp()} de vitalidad`);
        }
    }
    if(personaje.vitalidad <= 0){
        console.log(`${personaje.nombre} ha muerto`);
    }else{
        console.log(`${enemigo.nombre} ha muerto`);
    }
}