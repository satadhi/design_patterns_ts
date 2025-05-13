// Fly Behavior Interface & Implementations
interface FlyBehavior {
    fly(): void;
}

class FlyWithWings implements FlyBehavior {
    fly() {
        console.log("I'm flying with wings!");
    }
}

class FlyNoWay implements FlyBehavior {
    fly() {
        console.log("I can't fly.");
    }
}

// Quack Behavior Interface & Implementations
interface QuackBehavior {
    quack(): void;
}

class Quack implements QuackBehavior {
    quack() {
        console.log("Quack!");
    }
}

class MuteQuack implements QuackBehavior {
    quack() {
        console.log("<< Silence >>");
    }
}

// Duck Base Class
class Duck {
    constructor(
        private readonly flyBehavior: FlyBehavior,
        private readonly quackBehavior: QuackBehavior
    ) { }

    performFly() {
        this.flyBehavior.fly();
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    display(description: string) {
        console.log(`I'm a ${description}`);
    }
}

// Usage: Behavior passed during construction
const mallard = new Duck(new FlyWithWings(), new Quack());
mallard.display("Mallard Duck");
mallard.performFly();      // I'm flying with wings!
mallard.performQuack();    // Quack!

const rubberDuck = new Duck(new FlyNoWay(), new MuteQuack());
rubberDuck.display("Rubber Duck");
rubberDuck.performFly();   // I can't fly.
rubberDuck.performQuack(); // << Silence >>
  