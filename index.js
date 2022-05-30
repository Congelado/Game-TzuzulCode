import battle from './functions/battle.js';
import { desgraciado, berserker, asesino, guerrero } from './models/characters.js';
import { minotaur, harpy } from './models/enemies.js';


let lista = [desgraciado, berserker, asesino, guerrero];
let listaColor = ['red', 'blue', 'green', 'yellow'];
let listaEnemigos = [minotaur, harpy];

console.log('%cBienvenido al coliceo de los caidos', 'color: #08f7fe;',);
let username = prompt('Ingrese su nombre valeroso heroe');
console.log('%cBienvenido '+ username, 'color: #08f7fe;',);
                                                                                                                                                                                                
for(let i in lista){
    console.log('%c'+lista[i].nombre, 'color:' + listaColor[i]);
    console.log('%cvida: ' + lista[i].hp, 'color:' + listaColor[i]);
    console.log('%cvitalidad: ' + lista[i].vitalidad, 'color:' + listaColor[i]);
    console.log('%cfuerza: ' + lista[i].strength, 'color:' + listaColor[i]);
    console.log('%cdefensa: ' + lista[i].defense, 'color:' + listaColor[i]);
    
}
let character;
tag:
while (true){
character = prompt('Ingrese una clase(desgraciado, berserker, asesino o guerrero)');
switch(character){
    case 'desgraciado':
        character = desgraciado;
        break tag;
    case 'berserker':
        character = berserker;
        break tag;
    case 'asesino':
        character = asesino;
        break tag;
    case 'guerrero':
        character = guerrero;
        break;
    }
}
character.nombre = username;
for(let i in lista){
    console.log('%cnombre: ' + lista[i].weapon.nombre, 'color:' + listaColor[i]);
    console.log('%cdano: ' + lista[i]. weapon.damage, 'color:' + listaColor[i]);
    console.log('%cprobabilidad de critico: ' + lista[i].weapon.critRate, 'color:' + listaColor[i]);
    console.log('%cdano critico: ' + lista[i].weapon.critDmg, 'color:' + listaColor[i]);
}
battle(character, minotaur);