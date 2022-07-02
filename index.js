import Stage from "./models/Stage.js"
import { Charmander, Gastly, Pikachu, Eevee, Snorlax } from "./models/Personaje.js";
import { battleAxe, battleKnife, longsword, stick, claws } from "./models/Weapons.js";
import  title  from "./assets/title.js";
import menu from "./assets/menu.js"
import opciones from "./assets/opciones.js"
import menu_colores from "./assets/menu_colores.js"

function colorido(){
    console.log("elige uno de estos 4 colore", "blue", "red", "peru", "white")
    let color_opcion= prompt("").toLowerCase()
    if (["blue", "red", "peru", "white"].includes(color_opcion)){
        return color_opcion
    }
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
                console.log("a que velocidad le gustaria", "x2", "x1","x0.5","?")
    
                let velocidad_opciones = prompt("").toLowerCase()
                velocidad_opciones[0] == "x"? velocidad_opciones= Number(velocidad.slice(1)): velocidad_opciones= Number(velocidad)
                
                if(velocidad in [2, 1, 0.5]){
                    console.log(velocidad_opciones)
                }else{
                    console.log("opcion incorrecta")
                }

            }else if (respuesta_opciones === "colores"){
                console.log(menu_colores)
                let colores_personaje = prompt("").toLowerCase()

                if(colores_personaje === "enemigo"){
                    let color_e = colorido()

                }else if(colores_personaje === "narrador"){
                    let color_n = colorido()

                }else if(colores_personaje === "personaje"){
                    let color_p = colorido()

                }
            }else if(respuesta_menu === "salir"){
                break
            }
        }
        
    }else if(respuesta_menu === "comenzar juego"){
        let listaClases = [Charmander, Gastly, Pikachu];
        let listaArmas = [battleAxe, battleKnife, longsword, stick]
        let listaEnemigos = [Eevee, Snorlax];

        if(typeof color_n === "undefined"){
            let color_n = " #08f7fe"
        }
        if(typeof color_p === "undefined"){
            let color_p = "white"
        }
        if(typeof color_e === "undefined"){
            let color_e = "white"
        }

        console.log("%cBienvenido al coliseo de los pokemons caidos", "color: "+ typeof color_n ==="undefined"? color_n:"#08f7fe");

        let username;
        
        while(true){
            try{
                username = prompt("Ingrese su nombre valeroso heroe:").toLowerCase();
                let descision = confirm("estas seguro que quiere llamarse? " + username);

                if (descision) break
            }
            catch(error){
                console.log("%cIngrese un nombre valido", "color: #ff1100")
            };
        }

        console.log("%cBienvenido "+ username, "color: " + color_n);
                                                                                                                                                                                                        
        for(let i in listaClases){
            i.color = color_p
            i.mostrarPersonaje()
            
        }

        let character;
        tag:
        while (true){
            character = prompt("Ingrese un pokemon(Charmander, Gastly, Pikachu): ").toLowerCase();
            switch(character){
                case "charmander":
                    character = listaClases[0];
                    break tag;
                case "gastly":
                    character = listaClases[1];
                    break tag;
                case "pikachu":
                    character = listaClases[2];
                    break tag;
                default:
                    console.log("%c"+character+" no es una clase valida", "color: #ff1100");
            }
        }

        character.nombre = username;

        for(let i in listaArmas){
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

        console.log("%cOh, valeroso heroe " + character.nombre +", que porta un/a " + character.weapon.nombre + ".\nEn este calabozo de los caidos existen infinidad de criaturas tanto buenas como malas, como es tu primera vez, vamos con una batalla de entrenamiento\nselecciona tu enemigo", "color: #08f7fe;");

        for(let i in listaEnemigos){
            i.color = color_e
            i.mostrarPersonaje()
        }

        let enemigo
        tag3:
        while(true){
            enemigo = prompt("Ingrese el enemigo que desea atacar(eevee, snorlax): ").toLowerCase();
            switch(enemigo){
                case "eevee":
                    enemigo = minotaur;
                    break tag3;
                case "snorlax":
                    enemigo = harpy;
                    break tag3;
                default:
                    console.log("%c"+enemigo+" no es un enemigo valido", "color: #ff1100");
                }
        }

        if(Stage.battle(character, enemigo)){
            console.log("%c" + enemigo.nombre + " ha sido derrotado", "color: #08f7fe;");
            console.log("%cFELICIDADES, valeroso heroe pudiste derrotar al mas debil de las criaturas *clap* *clap* *clap*", "color: #08f7fe;");
        }
    }else if(respuesta_menu === "salir"){
        break
    }
}