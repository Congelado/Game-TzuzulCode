class Stage{
     constructor(turn=true, dmg=0){
        this.turn = turn
        this.dmg = dmg
    }  
    async battle(personaje, enemigo){
        return await new Promise(res =>{

            let intervalId = setInterval(() => {

                this.turn ? personaje.attack(enemigo, this.dmg) : enemigo.attack(personaje, this.dmg)

                if (personaje.coqueado()|| enemigo.coqueado()){
                    clearInterval(intervalId)
                    res(this.turn)
                }
                
                this.turn = !this.turn

            }, 500);
        })
    }  
}

export default Stage