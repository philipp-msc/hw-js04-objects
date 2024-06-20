function General(name, power) {
this.name = name;
this.power = power
this.isOn = false;
}

General.prototype.turnOn = function(){
    this.isOn = true;
    console.log(`${this.name} is On.`)
}

General.prototype.turnOff = function(){
    this.isOn = false;
    console.log(`${this.name} is Off.`)
}

function Lamp(name, power, colour) {
    General.call(this, name, power);
    this.colour = colour;
}

Lamp.prototype = Object.create(General.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.brightness = function(level) {
    console.log(`${this.name} brightness is level ${level}.`);
};

function Computer(name, power, memory) {
    General.call(this, name, power);
    this.memory = memory;
}

Computer.prototype = Object.create(General.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.install = function(software) {
    console.log(`${software} installed on ${this.name}.`);
};

const lamp1 = new Lamp('Lamp1', 20, 'red')
const comp1 = new Computer('Comp1', 100, 'IBM')

console.log(lamp1, comp1)

lamp1.turnOn();
comp1.turnOn();

lamp1.brightness(3);
comp1.install('Linux');

let dev = [lamp1, comp1]

function calcPower(devices){
    let pow = 0
    for (let item of devices){
        if (item.isOn === true){
pow += item.power
        }
    }
console.log(`Total power is ${pow}`)
}

calcPower(dev)