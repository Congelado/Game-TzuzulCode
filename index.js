import Stage from "./models/Stage.js"
import { Charmander, Gastly, Pikachu, Mew, Eevee, Snorlax } from "./models/Personaje.js";
import { battleAxe, battleKnife, longsword, stick, claws } from "./models/Weapons.js";
import  title  from "./assets/title.js";
import menu from "./assets/menu.js"
import opciones from "./assets/opciones.js"
import menu_colores from "./assets/menu_colores.js"
import menu_contraseñas from "./assets/menu_conraseñas.js";

function colorido(){
    console.log("elige uno de estos 4 colores: blue, red, peru, white")

    let color_opcion= prompt("").toLowerCase()

    let lista = ["blue", "red", "peru", "white"]
    return [color_opcion,lista]
}


while(true){
    console.log("%c"+title, "color: yellow")

    console.log(menu)

    let respuesta_menu = prompt("").toLowerCase()
    
    if (respuesta_menu === "opciones"){
        while (true){
            console.log(opciones)
            let respuesta_opciones = prompt("").toLowerCase()
            
            if (respuesta_opciones === "velocidad del texto"){
                console.log("a que velocidad le gustaria: x2, x1, x0.5?")
    
                let velocidad_opciones = prompt("").toLowerCase()
                velocidad_opciones[0] == "x"? velocidad_opciones= Number(velocidad_opciones.slice(1)): velocidad_opciones= Number(velocidad_opciones)
                
                if(velocidad_opciones in [2, 1, 0.5]){
                    var velocidad = velocidad_opciones
                }else{
                    console.log("opcion incorrecta")
                }

            }else if (respuesta_opciones === "colores"){
                console.log(menu_colores)
                let colores_personaje = prompt("").toLowerCase()

                if(colores_personaje === "enemigo"){
                    let lista = colorido()
                    if(lista[1].includes(lista[0])){
                        var color_e = lista[0]
                    }else{
                        console.log("no existe ese color")
                    }

                }else if(colores_personaje === "narrador"){
                    let lista = colorido()
                    if(lista[1].includes(lista[0])){
                        var color_n = lista[0]
                    }else{
                        console.log("no existe ese color")
                    }

                }else if(colores_personaje === "personaje"){
                    let lista = colorido()
                    if(lista[1].includes(lista[0])){
                        var color_p = lista[0]
                    }else{
                        console.log("no existe ese color")
                    }
                }

            }else if(respuesta_opciones === "salir"){
                break
            }
        }
        
    }else if(respuesta_menu === "comenzar juego"){
        let lista_pokemon = [Charmander, Gastly, Pikachu];
        let lislista_armas = [battleAxe, battleKnife, longsword, stick]
        let lista_enemigos = [Eevee, Snorlax];

        if(typeof color_n === "undefined"){
           var color_n = " #08f7fe"
        }
        if(typeof color_p === "undefined"){
            var color_p = "white"
        }
        if(typeof color_e === "undefined"){
            var color_e = "white"
        }

        console.log("%cBienvenido al coliseo de los pokemons", "color: "+ color_n);

        let username;
        
        while(true){
            try       {
                username = prompt("Ingrese su nombre valeroso heroe:").toLowerCase();
                let descision = confirm("estas seguro que quiere llamarse? " + username);

                if (descision) break
            }
            catch(error){
                console.log("%cIngrese un nombre valido", "color: #ff1100")
            };
        }

        console.log("%cBienvenido "+ username, "color: " + color_n);
                                                                                                                                                                                                        
        for(let i of lista_pokemon){
            i.color = color_p
            i.mostrarPersonaje()
            
        }

        let character;
        tag:
        while (true){
            character = prompt("Ingrese un pokemon(Charmander, Gastly, Pikachu): ").toLowerCase();
            switch(character){
                case "charmander":
                    character = lista_pokemon[0];
                    break tag;
                case "gastly":
                    character = lista_pokemon[1];
                    break tag;
                case "pikachu":
                    character = lista_pokemon[2];
                    break tag;
                case "???":
                    let respuesta_contraseña;
            
                    console.log(menu_contraseñas);
              
                    respuesta_contraseña = prompt("Ingrese una contraseña:").toLowerCase();
              
                    if (respuesta_contraseña === "mew") {
                        lista_pokemon.push(Mew);
              
                        console.log("Felicidades has desbloqueado a Mew");
                        Mew.mostrarPersonaje();
                        character = lista_pokemon[3];
                        break tag;
                    } else {
                        console.log("%cIngrese una contraseña valida", "color: #ff1100");; 
                    };
                    break;
                default:
                    console.log("%c"+character+" no es una clase valida", "color: #ff1100");
            }
        }
        character.nombre = username;

        for(let i of lislista_armas){
            i.mostrar_arma()
        }

        let arma;
        tag2:
        while (true){
            arma = prompt("ingrese el arma que le gustaria usar (battle axe, battle knife, longsword, stick, claws)").toLowerCase();
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
            case "claws":
                arma = claws
                break tag2;
            default:
                console.log("%c"+arma+" no es un arma valida", "color: #ff1100");
            }
        }

        character.weapon = arma;    

        console.log("%cOh, valeroso heroe " + character.nombre +", que porta un/a " + character.weapon.nombre + ".\nEn este calabozo de los caidos existen infinidad de criaturas tanto buenas como malas, como es tu primera vez, vamos con una batalla de entrenamiento\nselecciona tu enemigo", "color: "+color_n);

        for(let i of lista_enemigos){
            i.color = color_e
            i.mostrarPersonaje()
        }

        let enemigo
        tag3:
        while(true){
            enemigo = prompt("Ingrese el enemigo que desea atacar(eevee, snorlax): ").toLowerCase();
            switch(enemigo){
                case "eevee":
                    enemigo = "eevee";
                    break tag3;
                case "snorlax":
                    enemigo = "snorlax";
                    break tag3;
                default:
                    console.log("%c"+enemigo+" no es un enemigo valido", "color: #ff1100");
                }
        }

        let stage_one = new Stage(false, 0)
        if(stage_one.battle(character, enemigo,tiempo)){
            console.log("%c" + enemigo.nombre + " ha sido derrotado", "color: "+color_n);
            console.log("%cFELICIDADES, valeroso heroe pudiste derrotar al mas debil de las criaturas *clap* *clap* *clap*", "color: "+color_n);
        }
    }else if(respuesta_menu === "salir"){
        break
    }else {
        console.log("%cIngrese una opcion valida", "color: #ff1141")
      };
};