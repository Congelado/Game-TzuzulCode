//valor real
const miDinero = 600.90;

const mensualidad = 200.30;

//valor aproximado
const totalDeMensalidades = mensualidad * 3;

//200.30 * 3 = 600.90

console.log(miDinero>= totalDeMensalidades);

console.log(totalDeMensalidades);

//error absoluto
console.log(Math.abs(totalDeMensalidades-miDinero));

//error relativo
console.log(Math.abs(totalDeMensalidades-miDinero)/Math.abs(totalDeMensalidades));

console.log("----------------------------------------------------------------")

const avogadro1 = 6.022e23;
const avogadro2 = 6.022 * 10**23;

console.log(avogadro1 === avogadro2);
console.log(avogadro1);
console.log(avogadro2);

//error relativo
console.log(Math.abs(avogadro1-avogadro2)/Math.abs(avogadro1));




//En JavaScript, todos los números son números de punto flotante.
//algunos números decimales no se pueden representar con una precisión perfecta.
//tiene una limitación de 32bit, por lo que cuando se alcanza el límite de almacenamiento del número, debe redondear el último dígito hacia arriba o hacia abajo.

//errores de redondeo se deben a la inexactitud en la representación de los números reales