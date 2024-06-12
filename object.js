const userObj = {
    name:"John Wick",
    age:43,
    ismale:true,
    printName:function(){
        console.log(this.name);
    }
}

userObj.printName()