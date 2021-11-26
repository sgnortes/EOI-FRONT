let objetoPadre = {
  edad: null,
  nombre: null,
  apellidos: null,
  muestraDatos: function () {
    console.log(this.nombre + ' ' + this.apellidos + ' tiene una edad de ' + this.edad);
  },
};

var hijo1 = Object.create(objetoPadre);
hijo1.edad = 24;
hijo1.nombre = 'Max';
hijo1.apellidos = 'Verstappen';

hijo1.muestraDatos();

objetoPadre['verEdad'] = function () {
  console.log(this.edad);
};

hijo1.verEdad();
