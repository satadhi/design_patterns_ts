
// So what it mean is; in our case a blueprint of strategy should look like the below interface
interface Strategy {
    doSomeThing(data: string[]): string[];

}

class RealStrategyA implements Strategy {
    public doSomeThing(data: string[]):string[] {
        return data.sort(); // the action is sort; !important only sort() does lexical order sorting; so do add callback if you want to sort number and stuff
    }
}


class RealStrategyB implements Strategy {
    public doSomeThing(data: string[]):string[] {
        return data.reverse();
    }
}


class Context {

    private str: Strategy;


    constructor(str:Strategy)  {
        this.str = str
    }

    public set plan(thisArg: Strategy) {
        this.str = thisArg;
    }


    public businessLogic(data:string[]) {

        // its important to note that the Context knows about Strategy; so basically strategy is an abstruction of a logic
        console.log("after using business logic do the answer is \n", this.str.doSomeThing(data))

    }

}


// use case

const plan1 = new RealStrategyA();
const plan2 = new RealStrategyB();

// dependency injection ?
const obj = new Context(plan1);

const businessData: string[] = ['a', 'b', 'c', 'd']

obj.businessLogic(businessData);

// ability to change the strategy dynamically 
obj.plan = plan2;
obj.businessLogic(businessData);


