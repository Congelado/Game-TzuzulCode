import battle from "./functions/battle.js";
import { desgraciado, berserker, asesino, guerrero } from "./models/characters.js";
import { minotaur, harpy } from "./models/enemies.js";
import { battleAxe, battleKnife, longsword, stick} from "./models/weapons.js";

let listaClases = [desgraciado, berserker, asesino, guerrero];
let listaColor = ["red", "blue", "green", "yellow"];
let listaEnemigos = [minotaur, harpy];

console.log("%cBienvenido al coliseo de los caidos", "color: #08f7fe;");
let username
while(true){
    try{
        username = prompt("Ingrese su nombre valeroso heroe:").toLowerCase();
        let descision = confirm("estas seguro que quiere llamarse? " + username);

        if (descision) break
    }
    catch(error){}
    console.log("%cIngrese un nombre valido", "color: #ff1100");
}

console.log("%cBienvenido "+ username, "color: #08f7fe;",);
                                                                                                                                                                                                
for(let i in listaClases){
    console.log("%c"+listaClases[i].nombre, "color:" + listaColor[i]);
    console.log("%cvida: " + listaClases[i].hp, "color:" + listaColor[i]);
    console.log("%cvitalidad: " + listaClases[i].vitalidad, "color:" + listaColor[i]);
    console.log("%cfuerza: " + listaClases[i].strength, "color:" + listaColor[i]);
    console.log("%cdefensa: " + listaClases[i].defense, "color:" + listaColor[i]);
    
}

let character;
tag:
while (true){
    character = prompt("Ingrese una clase(desgraciado, berserker, asesino o guerrero): ").toLowerCase();
    switch(character){
        case "desgraciado":
            character = desgraciado;
            break tag;
        case "berserker":
            character = berserker;
            break tag;
        case "asesino":
            character = asesino;
            break tag;
        case "guerrero":
            character = guerrero;
            break tag;
        default:
            console.log("%c"+character+" no es una clase valida", "color: #ff1100");
        }
}

character.nombre = username;

for(let i in listaClases){
    console.log("%cnombre: " + listaClases[i].weapon.nombre, "color:" + listaColor[i]);
    console.log("%cdano: " + listaClases[i]. weapon.damage, "color:" + listaColor[i]);
    console.log("%cprobabilidad de critico: " + listaClases[i].weapon.critRate, "color:" + listaColor[i]);
    console.log("%cdano critico: " + listaClases[i].weapon.critDmg, "color:" + listaColor[i]);
}

let arma;
tag2:
while (true){
    arma = prompt("ingrese el arma que le gustaria usar/(battle axe, battle knife, longsword, stick)").toLowerCase();
switch(arma){
    case "battle axe":
        arma = battleAxe;
        break tag2;
    case "battle knife":
        arma = battleKnife;
        break tag2;
    case "longsword":
        arma = longsword;
        break tag2;
    case "stick":
        arma = stick;
        break tag2;
    default:
        console.log("%c"+arma+" no es un arma valida", "color: #ff1100");
    }
}
character.weapon = arma;    

console.log("%cOh, valeroso heroe " + character.nombre +", que porta un/a " + character.weapon.nombre + ".\nEn este calabozo de los caidos existen infinidad de criaturas tanto buenas como malas, como es tu primera vez, vamos con una batalla de entrenamiento\nselecciona tu enemigo", "color: #08f7fe;");

for(let i in listaEnemigos){
    console.log("%c"+listaEnemigos[i].nombre, "color:" + listaColor[i]);
    console.log("%cvida: " + listaEnemigos[i].hp, "color:" + listaColor[i]);
    console.log("%cfuerza: " + listaEnemigos[i].strength, "color:" + listaColor[i]);
    console.log("%cdefensa: " + listaEnemigos[i].defense, "color:" + listaColor[i]);
}

let enemigo
tag3:
while(true){
    enemigo = prompt("Ingrese el enemigo que desea atacar(minotaur, harpy): ").toLowerCase();
    switch(enemigo){
        case "minotaur":
            enemigo = minotaur;
            break tag3;
        case "harpy":
            enemigo = harpy;
            break tag3;
        default:
            console.log("%c"+enemigo+" no es un enemigo valido", "color: #ff1100");
        }
}
battle(character, enemigo);
console.log("%c"+enemigo+" ha sido derrotado", "color: #08f7fe;");
console.log("%cFELICIDADES valeroso heroe pudiste derrotar al mas debil de las criaturas *clap* *clap* *clap*", "color: #08f7fe;");