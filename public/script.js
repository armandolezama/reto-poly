mainSection =  document.querySelector('#main-section')
let limit = 20

class Television {
    constructor(model, manualCh, channel = 1){
        this.model = document.getElementById(model)
        this.manualCh = document.getElementById(manualCh)
        this.turned = false
        this.channel = channel
    }
    theChannel(){
        this.model.innerHTML = `<div class="screen"><p class="ch-content">${this.channel}</p></div>`
    }
    
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

let firstTV = new Television ('first-tv', 'first-manual')

let secondTV = new Television ('second-tv', 'second-manual')

let thirdTV = new Television ('third-tv', 'third-manual')



