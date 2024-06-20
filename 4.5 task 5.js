class General {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }
    turnOn() {
        this.isOn = true;
        console.log(`${this.name} is On.`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.name} is Off.`);
    }
}


class Lamp extends General {
    constructor(name, power, colour) {
        super(name, power);
        this.colour = colour;
    }

    brightness(level) {
        console.log(`${this.name} brightness is level ${level}.`);
    }
}

class Computer extends General {
    constructor(name, power, memory) {
        super(name, power);
        this.memory = memory;
    }

    install(software) {
        console.log(`${software} installed on ${this.name}.`);
    }
}

const lamp1 = new Lamp('Lamp1', 20, 'red');
const comp1 = new Computer('Comp1', 100, 'IBM');

lamp1.turnOn();
comp1.turnOn();

lamp1.brightness(3);
comp1.install('Linux');

let devices = [lamp1, comp1];

function calcPower(devices) {
    let pow = 0;
    for (let device of devices) {
        if (device.isOn) {
            pow += device.power;
        }
    }
    console.log(`Total power is ${pow}`);
}

calcPower(devices);

console.log(lamp1, comp1);