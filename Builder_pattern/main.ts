/**
 *  THIS IS EXAMPLE FOR BUILDER PATTERN
 *  The Builder Pattern is a creational design pattern that allows you to create complex objects step by step.
 *  It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
 *  In this example, we will create a SandwichBuilder that allows us to build a sandwich with various ingredients.
 *  The Sandwich class represents the product we want to build.
 *  The SandwichBuilder class provides methods to set the ingredients of the sandwich.
 *  The client code will use the SandwichBuilder to create a sandwich with specific ingredients.
 *  The Sandwich class has properties for bread, filling, sauce, cheese, and veggies.
 *  The SandwichBuilder class has methods to set each of these properties.
 */


class Sandwich {

  bread?: string;
  filling?: string;
  sauce?: string;
  cheese?: string;
  veggies?: string[];
  price: number = 0

  describe(): string {

    return `Sandwich with ${this.bread}, filled with ${this.filling}, \n toppend with ${this.cheese}, ${this.sauce} and veggies: ${this.veggies}`
  }

  getPrice(): number {
    return this.price;
  }

}


class SandwichBuilder {

  private readonly sandwich: Sandwich = new Sandwich();

  private readonly prices = {
    bread: {
      "Whole Wheat": 2,
      "White": 1.5,
    },
    filling: {
      "Grilled Chicken": 5,
      "Paneer": 4,
      "Tofu": 3.5,
    },
    sauce: {
      "Mayo": 0.5,
      "BBQ": 0.7,
    },
    cheese: {
      "Cheddar": 1.5,
      "Mozzarella": 1.2,
    },
    veggies: {
      "Lettuce": 0.3,
      "Tomato": 0.4,
      "Cucumber": 0.2,
    }
  };

  setBread(bread: string): SandwichBuilder {
    this.sandwich.bread = bread;
    this.sandwich.price += this.prices.bread[bread as keyof typeof this.prices.bread] || 0;
    return this;
  }

  setFilling(filling: string): SandwichBuilder {

    this.sandwich.filling = filling;
    this.sandwich.price += (this.prices.filling[filling as keyof typeof this.prices.filling] as number) || 0;
    return this;
  }
  setSauce(sauce: string): SandwichBuilder {
    this.sandwich.sauce = sauce;
    this.sandwich.price += (this.prices.sauce[sauce as keyof typeof this.prices.sauce] as number) || 0;
    return this;
  }

  setCheese(cheese: string): SandwichBuilder {
    this.sandwich.cheese = cheese;
    this.sandwich.price += (this.prices.cheese[cheese as keyof typeof this.prices.cheese] as number) || 0;
    return this;
  }

  setVeggies(veggies: string[]): SandwichBuilder {
    this.sandwich.veggies = veggies;
    for (const veg of veggies) {
      this.sandwich.price += (this.prices.veggies[veg as keyof typeof this.prices.veggies] as number) || 0;
    }
    return this;
  }

  build(): Sandwich {
    return this.sandwich;
  }
}


/**
 * This is the client code that uses the SandwichBuilder to create a sandwich.
 * It sets the ingredients of the sandwich using the builder methods and then builds the sandwich.
 * Finally, it prints the description and price of the sandwich.
 */
const mySandwich = new SandwichBuilder()
  .setBread("Whole Wheat")
  .setFilling("Grilled Chicken")
  .setSauce("Mayo")
  .setCheese("Cheddar")
  .setVeggies(["Lettuce", "Tomato"])
  .build();

console.log(mySandwich.describe());
console.log("Total Price: $" + mySandwich.getPrice().toFixed(2));
