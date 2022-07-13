import Stage from "./models/Stage.js";
import {Charmander, Gastly, Pikachu, Mew  , Eevee, Snorlax } from "./models/Personaje.js";
import { battleAxe, battleKnife, longsword, stick, claws} from "./models/Weapons.js";
import title from "./assets/title.js";
import menu from "./assets/menu.js";
import opciones from "./assets/opciones.js";
import menu_colores from "./assets/menu_colores.js";
import menu_contraseñas from "./assets/menu_contrasenas.js";

function colorido() {
  console.log("elige uno de estos 4 colores: blue, red, peru, white");

  let color_opcion = prompt("").toLowerCase();

  let lista = ["blue", "red", "peru", "white"];
  return [color_opcion, lista];
}


while (true) {

  console.log("%c" + title, "color: yellow");
  
  console.log(menu);
  
  let respuesta_menu = prompt("").toLowerCase();
  
  if (respuesta_menu === "opciones"){
    while (true) {

      let wa
      console.log(opciones);
      let respuesta_opciones = prompt("").toLowerCase();

      if (respuesta_opciones === "colores") {
          console.log(menu_colores);
        let colores_personaje = prompt("").toLowerCase();

        if (colores_personaje === "enemigo") {
            let lista = colorido();
            if (lista[1].includes(lista[0])) {
                var color_e = lista[0];
            } else {
                console.log("no existe ese color");
            }
        } else if (colores_personaje === "narrador") {
          let lista = colorido();
          if (lista[1].includes(lista[0])) {
              var color_n = lista[0];
            } else {
            console.log("no existe ese color");
          }
        } else if (colores_personaje === "personaje") {
          let lista = colorido();
          if (lista[1].includes(lista[0])) {
            var color_p = lista[0];
          } else {
            console.log("no existe ese color");
        }
    }
      } else if (respuesta_opciones === "salir") {
        break;
      }
    }
} 

else if (respuesta_menu === "comenzar juego") {
  let lista_pokemon;
  if (passBol){
    lista_pokemon = [Charmander, Pikachu, Gastly, Mew];
  }else{
    lista_pokemon = [Charmander, Pikachu, Gastly];
  }
    let lislista_armas = [battleAxe, battleKnife, longsword, stick];
    let lista_enemigos = [Eevee, Snorlax];

    if (typeof color_n === "undefined") {
        var color_n = " #08f7fe";
    }
    if (typeof color_p === "undefined") {
      var color_p = "white";
    }
    if (typeof color_e === "undefined") {
        var color_e = "white";
    }
    if (typeof velocidad === "undefined"){
      var velocidad = 1
    }
    
    console.log("%cBienvenido al coliseo de los pokemons", "color: " + color_n);
    
    let username;

    while (true) {
      try {
        username = prompt("Ingrese su nombre valeroso heroe:").toLowerCase();
        let descision = confirm(
          "estas seguro que quiere llamarse? " + username
        );

        if (descision) break;
      } catch (error) {
        console.log("%cIngrese un nombre valido", "color: #ff1100");
      }
    }

    console.log("%cBienvenido " + username, "color: " + color_n);

    for (let i of lista_pokemon) {
      i.color = color_p;
      i.mostrarPersonaje();
    }

    let character;
    tag: while (true) {
      if (passBol){
        character = prompt("Ingrese un pokemon Charmander, Gastly, Pikachu, Mew: ").toLowerCase();
      }else{
        character = prompt("Ingrese un pokemon Charmander, Gastly, Pikachu, ???: ").toLowerCase();
      }
      switch (character) {
        case "charmander":
          character = lista_pokemon[0];
          break tag;
        case "gastly":
          character = lista_pokemon[1];
          break tag;
        case "pikachu":
          character = lista_pokemon[2];
          break tag;
        case "mew":
          if(passBol){
            character = lista_pokemon[3];
            break tag;
          }
        case "???":
        default:
          console.log("%c" + character + " no es una clase valida","color: #ff1100");
      }
    }
    character.nombre = username;

    for (let i of lislista_armas) {
      i.mostrar_arma();
    }

    let arma;
    tag2: while (true) {
      arma = prompt(
        "ingrese el arma que le gustaria usar (battle axe, battle knife, longsword, stick, claws)"
      ).toLowerCase();
      switch (arma) {
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
        case "claws":
          arma = claws;
          break tag2;
        default:
          console.log("%c" + arma + " no es un arma valida", "color: #ff1100");
      }
    }

    character.weapon = arma;

    console.log("%cOh, valeroso heroe " + character.nombre + ", que porta un/a " + character.weapon.nombre + ".\nEn este calabozo de los caidos existen infinidad de criaturas tanto buenas como malas, como es tu primera vez, vamos con una batalla de entrenamiento\nselecciona tu enemigo","color: " + color_n);

    for (let i of lista_enemigos) {
      i.color = color_e;
      i.mostrarPersonaje();
    }

    let enemigo;
    tag3: while (true) {
      enemigo = prompt("Ingrese el enemigo que desea atacar(eevee, snorlax): ").toLowerCase();
      switch (enemigo) {
        case "eevee":
          enemigo = lista_enemigos[0];
          break tag3;
        case "snorlax":
          enemigo = lista_enemigos[1];
          break tag3;
        default:
          console.log(
            "%c" + enemigo + " no es un enemigo valido",
            "color: #ff1100"
          );
      }
    }

    let stage_one = new Stage();
    let a = await stage_one.battle(character, enemigo, velocidad, color_p, color_e)
    if (a) {
      console.log("%c" + enemigo + " ha sido derrotado", "color: " + color_n);
      console.log("%cFELICIDADES, valeroso heroe pudiste derrotar al mas debil de las criaturas *clap* *clap* *clap*", "color: " + color_n);
    }
}
else if (respuesta_menu === "password") {
    let respuesta_contraseña;
    while (true) {
      console.log(menu_contraseñas);

      try {
        respuesta_contraseña = prompt("Ingrese una contraseña:").toLowerCase();
        let descision = confirm("¿estas seguro que quieres probar esta contraseña? " + respuesta_contraseña);

        if (descision) break;

      } catch (error) {
        console.log("%cIngrese una contraseña valida", "color: #ff1100");
      }
    }
    switch (respuesta_contraseña) {
      case "mew":
        var passBol = true;
        console.log("Felisidades has desbloquedo a Mew");
        Mew.mostrarPersonaje()
        break;

      default:
        break;
    }

  } else if (respuesta_menu === "salir") {
    break;

  } else {
    console.log("%cIngrese una opcion valida", "color: #ff1141")
  }
}
