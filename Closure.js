function Closure (){
    let count = 0
    return {
        increment:()=>{
            count++
            return count
        },
        decrement:()=>{
            count--
            return count
        },
        getCount:()=>{
            return count
        }
    }
}

const count = Closure()
//這裡有點像是利用變數去紀錄這個function裡面的數值
//不然照理說該function執行完以後，裡面的數值會被摧毀掉

console.log(count.getCount());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.getCount());