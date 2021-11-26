var cadena1 = 'Esto es una cadena';
var cadena2;

console.log(typeof cadena1);
console.log(typeof cadena2);

if (typeof cadena2 === undefined) {
  console.log('Sin definir');
}

var cliente = {
  nombre: 'PEPITO',
  tel: '34111111111',
};

cliente['direccion'] = 'C/Salud, 21';

//for in: property muestra el índice
for (const property in cliente) {
  console.log(cliente[property]);
}

//creamos un set y con él mostramos los valores e índices
for (const [valor, clave] of Object.entries(cliente)) {
  console.log(clave + ' = ' + valor);
}

let array = [10, 20, 30, 40];

//for in: property muestra el índice
for (const valor in array) {
  console.log(array[valor]);
}

//for of: al usar of, valor ahora muestra los valores. Solo funciona para objetos iterables
for (const valor of array) {
  console.log(valor);
}
