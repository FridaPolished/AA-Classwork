class Clock {

    constructor (){
        // let date = new Date();
        // this.seconds = date.getTime() % 60; 
        // this.minutes = Math.floor(date.getTime() / 60) % 60;
        // this.hours = Math.floor(date.getTime() / 3600) % 24;

        let date = new Date();
        this.seconds = date.getTime() % 60; 
        this.minutes = date.getMinutes();
        this.hours = date.getHours();

        setInterval(this._tick.bind(this), 1000);
        
    }

    printTime() {
        console.log(`${this.hours}: ${this.minutes}: ${this.seconds}`);
    }

    _tick() { 
        this.seconds = ((this.seconds += 1) % 60);
        if (this.seconds === 0) {
            this.minutes = (this.minutes += 1) % 60;
            if (this.minutes === 0 ) {
                this.hours = (this.hours += 1) % 24;
            }
        }
       
        this.printTime();    
    }
}

let clock1 = new Clock();


