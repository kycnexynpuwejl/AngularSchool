class Car {
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    wheels(num) {
        this.car.wheels = num;
        return this;
    };

    engine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

console.log(new CarBuilder().engine('V8').wheels(8).build());