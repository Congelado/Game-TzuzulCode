class Stage{
     constructor(turn=true, dmg=0){
        this.turn = turn
        this.dmg = dmg
    }  
    battle(personaje, enemigo){
        return new Promise(res =>{
            let intervalId = setInterval(() => {

                this.turn ? personaje.attack(enemigo, this.dmg) : enemigo.attack(personaje, this.dmg)
                
                if (personaje.noqueado()|| enemigo.noqueado()){
                    clearInterval(intervalId)
                    res(this.turn)
                }
                
                this.turn = !this.turn

            }, 1000);
        })
    }  
}

export default Stage