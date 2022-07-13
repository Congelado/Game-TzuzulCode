import { Mew, Snorlax } from "./Personaje.js";

class Stage{
     constructor(turn=false, dmg=0){
        this.turn = turn
        this.dmg = dmg
    }  
    async battle(personaje, enemigo, colora, colorb){
        return new Promise(res => {
            let intervalId = setInterval(() => {

                if(!this.turn){
                    personaje.attack(enemigo, this.dmg, colora);
                }else{
                    enemigo.attack(personaje, this.dmg, colorb);
                }

                if (personaje.noqueado() || enemigo.noqueado()) {
                    res(this.turn);
                    clearInterval(intervalId);
                }
                
                this.turn = !this.turn;

            }, 2000);
        })
    }  
}

export default Stage
