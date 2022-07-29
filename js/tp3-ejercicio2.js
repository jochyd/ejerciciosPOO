// crear un objeto cuenta
// propiedades titular = alex ; saldo = 0 ; tenieindo un valor inicial 0
// metodo ingresar (), extraer () esos dos metodos reciben parametros, otro metodo informar ()

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar(montoIngresar){
        //deberia poner toda la logicaa para agregaar el dinero en la cuenta
        this.saldo += montoIngresar; //this.saldo = this.saldo + this.montoIngresar;

    },
    extraer(monto){
        //deberia poner toda la logica para extraer el dinero de la cuenta
        if(this.saldo >= monto){
            this.saldo -= monto; 
        }else{
            alert('Saldo insuficiente');
        }
    },
    informar(){
        //necesitamos agregar el this para ver algo del mismo objeto
        document.write(`<p>Cuenta del Titular: ${this.titular}, tiene un saldo de $ ${this.saldo}</p>`)
    },
    transferir:()=>{
        //aqui no usaria el this
        console.log(this)
    }

}

cuenta.informar();
let montoIngresar = parseFloat(prompt('Ingrese un Monto'));
cuenta.ingresar(montoIngresar);
cuenta.informar();

let montoAExtraer = parseFloat(prompt('Ingrese un Monto a Extraer'));
cuenta.extraer(montoAExtraer);
cuenta.informar();

// intentar hacer un do while con el switch dentro
