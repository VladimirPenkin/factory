import Seekers from "./seekers";

class  Frontend extends Seekers{

    constructor({name, age, type, rate}){
        super()
        this.name = name;
        this.age = age;
        this.type = type;
        this.rate = rate;
       
    };
};

export default Frontend;