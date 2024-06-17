//迴圈寫法
// const factorial = (num)=>{
//     let sum = 1
//     for(let i =1;i<=num;i++){
//         sum*=i
//     }
//     return sum 
// }

// console.log(factorial(5));

//遞迴寫法
function factorial(n) {
    // 基本情況：當 n 為 0 或 1 時，返回 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // 遞迴關係：n 的階乘等於 n 乘以 (n - 1) 的階乘
    return n * factorial(n - 1);
}

// 調用遞迴函式計算 5 的階乘
console.log(factorial(5)); // 輸出 120