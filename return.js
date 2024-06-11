//箭頭函式return
const Add2 = (a,b)=> {
    return a+b
}
console.log(`箭頭函式retrun：${Add2(1,4)}`);

//箭頭函式return
const Add = (a,b)=> a+b
console.log(`箭頭函式retrun簡寫：${Add(1,4)}`);

//return的中止funtion特性
const checkNumber =(num)=>{
    if(num<10){
        return `${num}小於10`
    }
    return `${num}大於10`
}
console.log(checkNumber(5));

//return可以返回object,array,funtion
const getUser = (id,pas,name)=>{
    return {
        id:id,
        pas:pas,
        name:name,
    }
}

console.log(getUser("500","asdfghjhjk","sker"));