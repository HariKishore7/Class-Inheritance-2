// declare class

// export class using module.exports
class Shape{
    constructor(){
        this.color="green";
    }
    drawShape(){
        console.log("Drwaing");
    }
    calculateArea(){
        console.log("No Areas provided");
    }
}
module.exports=Shape;
