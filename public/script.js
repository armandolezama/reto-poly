
let limit = 20

class Television {
    constructor(model, channel = 1){
        this.model = model
        this.channel = channel
    }
    theChannel(){
        this.model.innerHTML = `<div class="screen"><p>${this.channel}</p></div>`
    }
    
    plusChannel(){
        this.channel += 1
        if(this.channel > limit ){
            this.channel = 1
        }
        this.theChannel()
    }

    lessChannel(){
        this.channel -= 1
        if(this.channel < 1){
            this.channel = limit
        }
        this.theChannel()
    }
}

let firstTV = new Television (document.querySelector('.television'))

