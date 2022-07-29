//Crea un objeto llamado auto
//características como el color, marca, modelo y si está encendido o apagado. 
//Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: 'Blanco',
    marca: 'Toyota',
    modelo: 'Corolla',
    estado: true,
    encender(encendido){
        this.estado === encendido;
        if (encendido === true){
          alert('El auto esta Encendido');
        }else{
           alert('El auto esta Apagado');
        }
    },
}

let encendido = confirm('El auto esta apagado, quiere encender su Auto?');
auto.encender(encendido);
console.log(encendido);
