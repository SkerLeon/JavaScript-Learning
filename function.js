function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
//防抖函數，主要用來重置函式執行時間，比如今天我們有一個表單要防止用戶因為手抖多按幾下重複付款操作，我們就必須設定一個function先清除clearTimeout在設置一個setTimeout，以達到清除上一次點擊所設定的setTimeout，在建立新的setTimeout送出資料，但我們不可能先清除一個我們沒有指定變數（記憶體位置）的setTimeout，所以這時候就會利用到閉包的概念去讀取這個區域內共通的變數timeout去做使用，再使用this去指向所使用的DOM物件

function argumentsData(){
    console.log(arguments) //回傳類陣列{"key":value,"key":value,"key":value}
    console.log(Array.isArray(arguments)) //false，因為不是陣列
}
//除了箭頭函式，每個函式都內建有一個arguments參數，會去接收原本沒有預設的參數並做對應的動作，它是以類陣列的方式呈現每個一個數值(像是json的格式一樣)
//{ '0': 1, '1': 23, '2': 66, '3': 44 }
console.log(argumentsData(1,23,66,44))