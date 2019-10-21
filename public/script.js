//Este código tiene como objetivo presentar una simulación de televisiones para web.
//Cada televisión cuenta con botones para controlarse y un sintonizador manual de canales
//El sintonizador (control) sirve para ir a un canal en específico, configurado para respetar los límites de la tv

const mainContainer = document.getElementById('main-container') //Esta es la conexión al tag html que contendrá las TV's

let tvCollection = {} //Este objeto contendrá a todas las instancias de la clase 'Television'
let tvButtons = {} 
//Se considera que la siguiente clase cumple con el concepto de abstracción de POO ya que, en un sólo modelo
//engloba diversas funciones repetibles de un televisor. Como siguiente paso cada clase debería tener contenida en sí misma
//el código en html que le corresponda a cada instancia de objetos
class Television {
    constructor(model, manualCh, limit = 20, channel = 1){
        this.model = document.getElementById(model)
        this.manualCh = document.getElementById(manualCh)
        this.turned = false
        this.channel = channel
        this.limit = limit
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
            if(this.channel > this.limit ){
                this.channel = this.limit
            } else if (this.channel < 1){
                this.channel = 1
            }        
            this.theChannel()
        }
    }

    plusChannel(){
        if(this.turned){
            this.channel += 1
            if(this.channel > this.limit ){
                this.channel = 1
            }
            this.theChannel()
        }
    }

    lessChannel(){
        if(this.turned){
            this.channel -= 1
            if(this.channel < 1){
                this.channel = this.limit
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

function addTelevision(){

    let numberofTv = Object.keys(tvCollection).length + 1;
    let tvName = `tvNumber${numberofTv}`;
    
    mainContainer.insertAdjacentHTML('beforeend',  
    `<article class="tv-container">
        <div id="tv-number-${numberofTv}" class="television">
            <div id="screen-number-${numberofTv}" class="screen"><p class="ch-content">Apagado</p></div>
        </div>
        
        <div class="control">
            <p>Aquí se encuentra el control para que cambie de canal</p>

            <div>
                <input id="manual-number-${numberofTv}" class="manualChn" id="" type="number" name="manualChn" value="" placeholder="Inserte el canal que desee sintonizar">
                <button id="manual-in-${numberofTv}" >Cambiar canal</button>
            </div>
            
            <div>
                <button id="off-${numberofTv}" class="off-btn">Apagar</button>
                <button id="on-${numberofTv}" class="on-btn">Encender</button>
                <button id="plus-${numberofTv}" class="plus-btn">+</button>
                <button id="less-${numberofTv}" class="less-btn">-</button>
            </div>
        </div>
    </article>`)
    
    tvCollection[tvName] = new Television (`tv-number-${numberofTv}`, `manual-number-${numberofTv}`)

    document.getElementById(`manual-in-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].manualChannel()})

    document.getElementById(`off-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].turnOff()})

    document.getElementById(`on-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].turnOn()})

    document.getElementById(`plus-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].plusChannel()})

    document.getElementById(`less-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].lessChannel()})
}

Television1Dot5.prototype = new Television()

function Television1Dot5(){
    // super(model, manualCh, limit = 20, channel = 1)

    this.movie = '';
    this.playMovie = ()=>{
        this.model.innerHTML = `
    <div class="screen">
        <p class="ch-content">${this.movie}</p>
    </div>`
    }
}

class Television2 extends Television{
    constructor(model, manualCh, vidScn, limit = 20, channel = 1){
        super()
        this.model = document.getElementById(model)
        this.manualCh = document.getElementById(manualCh)
        this.vidScn = document.getElementById(vidScn)
        this.turned = false
        this.channel = channel
        this.limit = limit
        this.movie
    }
    
    playMovie(){
        if(this.turned){
            this.movie = this.vidScn.value
            this.model.innerHTML = `
            <div class="screen">
                <p class="ch-content">${this.movie}</p>
            </div>`

        }
    }
}

function addTelevision2(){

    let numberofTv = Object.keys(tvCollection).length + 1;
    let tvName = `tvNumber${numberofTv}`;
    
    mainContainer.insertAdjacentHTML('beforeend',  
    `<article class="tv-container">
        <div id="tv-number-${numberofTv}" class="television">
            <div id="screen-number-${numberofTv}" class="screen"><p class="ch-content">Apagado</p></div>
        </div>
        
        <div class="control">
            <p>Aquí se encuentra el control para que cambie de canal</p>

            <div>
                <input id="manual-number-${numberofTv}" class="manualChn" id="" type="number" name="manualChn" value="" placeholder="Inserte el canal que desee sintonizar">
                <button id="manual-in-${numberofTv}" >Cambiar canal</button>
            </div>

            <div>
                <input id="manual-vid-${numberofTv}" class="manualChn" id="" type="text" name="manualChn" value="" placeholder="Inserte el canal que desee sintonizar">
                <button id="manual-vid-in-${numberofTv}" >Ver película</button>
            </div>

            <div>
                <button id="off-${numberofTv}" class="off-btn">Apagar</button>
                <button id="on-${numberofTv}" class="on-btn">Encender</button>
                <button id="plus-${numberofTv}" class="plus-btn">+</button>
                <button id="less-${numberofTv}" class="less-btn">-</button>
            </div>
        </div>
    </article>`)
    
    tvCollection[tvName] = new Television2 (`tv-number-${numberofTv}`, `manual-number-${numberofTv}`,`manual-vid-${numberofTv}`)

    document.getElementById(`manual-in-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].manualChannel()})

    document.getElementById(`off-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].turnOff()})

    document.getElementById(`on-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].turnOn()})

    document.getElementById(`plus-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].plusChannel()})

    document.getElementById(`less-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].lessChannel()})
    
    document.getElementById(`manual-vid-in-${numberofTv}`).addEventListener('click', ()=>{
        tvCollection[tvName].playMovie()})
}

addTelevision2()
