//Este código tiene como objetivo presentar una simulación de televisiones para web.
//Cada televisión cuenta con botones para controlarse y un sintonizador manual de canales
//El sintonizador (control) sirve para ir a un canal en específico, configurado para respetar los límites de la tv

let limit = 20 //Esta línea se utiliza para especificar el límite de canales para cada televisión

//Se considera que la siguiente clase cumple con el concepto de abstracción de POO ya que, en un sólo modelo
//engloba diversas funciones repetibles de un televisor. Como siguiente paso cada clase debería tener contenida en sí misma
//el código en html que le corresponda a cada instancia de objetos
class Television {
    constructor(model, manualCh, channel = 1){
        this.model = document.getElementById(model)
        this.manualCh = document.getElementById(manualCh)
        this.turned = false
        this.channel = channel
    }
    theChannel(){
        this.model.innerHTML = `
        <div class="screen">
            <p class="ch-content">${this.channel}</p>
        </div>`
    }
    
    // async tuneIn(){
    //     await fetch().then().catch()
        
    //     return img
    // }
    manualChannel(){
        if(this.turned){
            this.channel = this.manualCh.value
            if(this.channel > limit ){
                this.channel = limit
            } else if (this.channel < 1){
                this.channel = 1
            }        
            this.theChannel()
        }
    }

    plusChannel(){
        console.log(this.turned)
        if(this.turned){
            this.channel += 1
            if(this.channel > limit ){
                this.channel = 1
            }
            this.theChannel()
        }
    }

    lessChannel(){
        if(this.turned){
            this.channel -= 1
            if(this.channel < 1){
                this.channel = limit
            }
            this.theChannel()
        }
    }

    turnOff(){
        this.turned = false
        this.model.innerHTML = `<div class="screen"><p class="ch-content">Apagado</p></div>`
    }

    turnOn(){
        this.turned = true
        this.theChannel()
    }
}

//Al poder ser utilizada repetidas veces cumple con el concepto de polimorfismo de POO
//yaa que cada objeto instanciado con esta clase posee sus propios atributos, sólo se ingresa
//el id en html del televisor, y el id de su control, y automáticamente se accede a sus métodos
//y propiedades
let firstTV = new Television ('first-tv', 'first-manual')
let secondTV = new Television ('second-tv', 'second-manual')
let thirdTV = new Television ('third-tv', 'third-manual')



