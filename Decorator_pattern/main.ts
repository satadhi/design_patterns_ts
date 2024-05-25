interface IRiceMaker {
    
    cook(): string;

}

class BaseRice implements IRiceMaker{

    public cook():string{
        return 'cooking rice';
    }
 }


/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class RiceDecorator implements IRiceMaker {

    protected component: IRiceMaker;

    constructor(component: IRiceMaker) {
        this.component = component;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public cook(): string {
        return this.component.cook() + " and adding ";
    }
}


/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class ChickenRiceMaker extends RiceDecorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public operation(): string {
        return `${super.cook()} + chicken`;
    }
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
class JiraRickMaker extends RiceDecorator{
    public operation(): string {

        console.log("inside JiraRickMaker/cook", super.cook());
        return `${super.cook()} + Jira`;
    }
}

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component: IRiceMaker) {
    // ...

    console.log(`COOKING TIME :) ${component.cook()}`);

    // ...
}

/**
 * This way the client code can support both simple components...
 */
const simple = new BaseRice();
console.log('Client: I\'ve got a simple rice:');
clientCode(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new JiraRickMaker(simple);
const decorator2 = new ChickenRiceMaker(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator1);
