/**
 * Here I have converted the Builder pattern example to the Decorator pattern (main.ts).
 */


// Base Sandwich interface
interface Sandwich2 {
    description(): string;
    cost(): number;
}

// Simple Sandwich (base component)
class SimpleSandwich2 implements Sandwich2 {
    description(): string {
        return "Bread";
    }

    cost(): number {
        return 5;
    }
}

// Decorator base class
class SandwichDecorator2 implements Sandwich2 {
    constructor(protected sandwich: Sandwich2) { }

    description(): string {
        return this.sandwich.description();
    }

    cost(): number {
        return this.sandwich.cost();
    }
}

// Concrete Decorators
class CheeseDecorator2 extends SandwichDecorator2 {
    description(): string {
        return this.sandwich.description() + ", Cheese";
    }

    cost(): number {
        return this.sandwich.cost() + 2;
    }
}

class LettuceDecorator2 extends SandwichDecorator2 {
    description(): string {
        return this.sandwich.description() + ", Lettuce";
    }

    cost(): number {
        return this.sandwich.cost() + 1;
    }
}

class TomatoDecorator2 extends SandwichDecorator2 {
    description(): string {
        return this.sandwich.description() + ", Tomato";
    }

    cost(): number {
        return this.sandwich.cost() + 1.5;
    }
}

// Usage
let mySandwich2: Sandwich2 = new SimpleSandwich2();
mySandwich2 = new CheeseDecorator2(mySandwich2);
mySandwich2 = new LettuceDecorator2(mySandwich2);
mySandwich2 = new TomatoDecorator2(mySandwich2);

console.log(mySandwich2.description()); // Bread, Cheese, Lettuce, Tomato
console.log(mySandwich2.cost());        // 5 + 2 + 1 + 1.5 = 9.5
