module.exports.simpleFunc= function(){
    console.log("simpleFunc is called")
}

module.exports.mathTable= function(num=1){

    console.log(`the multiplication table for ${num}`);

    for(let i=1;i<=10;i++){
        console.log(`${num} X ${i} = ${num*i}`)
    }
    console.log("----------________------------")
}

module.exports.student=class{
    constructor(id,name,address){
        this.id=id;
        this.name=name;
        this.address=address;
    }
    view(){
        console.log(`${this.name} from ${this.address} id is ${this.id} `)
    }
}
