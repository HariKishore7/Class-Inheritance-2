// import using require

// declare class
const Shape=require('./shape');
class Circle extends Shape{
    constructor(){
        super();
    }
    calculateArea(){
        console.log("Area of circle color is: "+this.color);
        return 3.14*5*5;
    }
}
module.exports=Circle;
// export class using module.exports