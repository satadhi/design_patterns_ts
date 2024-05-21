interface Strategy {
    doSomeThing(data: string[]): string[];

}

class RealStrategyA implements Strategy {
    public doSomeThing(data: string[]):string[] {
        return data.sort();
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

        console.log("after using business logic do the answer is \n", this.str.doSomeThing(data))

    }

}


// use case

const plan1 = new RealStrategyA();
const plan2 = new RealStrategyB();

const obj = new Context(plan1);

const businessData: string[] = ['a', 'b', 'c', 'd']

obj.businessLogic(businessData);
obj.plan = plan2;
obj.businessLogic(businessData);


