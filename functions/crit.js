/**
 * @param  {int} prob
 * prob es un numero entre 0 y 100
 * @return {boolean}
 * retorna true si el numero es menor o igual a prob
 */
function crit(prob){
    return prob >= Math.round(Math.random() * 100);
}

export default crit;