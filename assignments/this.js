/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. It will be referencing the parameter given in the global environment (console). As in the this will bereferencing the cosole as its object.
* 2. The implicit binding here would be using the this statement on a function directly associated with it by saying function.this or using the this inside of a function.
* 3. This is specific to a constructor function dealing with Objects. It allows us to create as many objects as we would like without needing to rewrite everything. We will need the term new to trigger.
* 4. This will prioritize and give precedence to the functions with .call and .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function introduction(parameter){
    console.log(this);
    return parameter;
};

introduction("Obaida");


// Principle 2

// code example for Implicit Binding

const properintroduction={
    greeting: "Hello, ",
    asking: "how are you doing on this fine day? ",
    fullconvo: function(name){
      console.log(this.greeting + this.asking + name);
    }
};

properintroduction.fullconvo("Adetunji");

// Principle 3

// code example for New Binding

function web21(name){
    this.thanks= "Thank you for being a dope teacher ";
    this.name = name;
    this.join= function(){
      console.log(this.thanks + this.name);
      console.log(this)
    };
}
  
const web21students = new web21("Dan");
const random_class = new web21("Lous Williams");

web21students.join();
random_class.join();

// Principle 4

// code example for Explicit Binding

function web21(name){
    this.thanks= "Thank you for being a dope teacher ";
    this.name = name;
    this.join= function(){
      console.log(this.thanks + this.name);
      console.log(this)
    };
}

const web21students = new web21("Dan");
const random_class = new web21("Lous Williams");


web21students.join.apply(random_class);
random_class.join.call(web21students);