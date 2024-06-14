function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
//防抖函數，主要用來重置函式執行時間，比如今天我們有一個表單要防止用戶因為手抖多按幾下重複付款操作，我們就必須設定一個function先清除clearTimeout在設置一個setTimeout，以達到清除上一次點擊所設定的setTimeout，在建立新的setTimeout送出資料，但我們不可能先清除一個我們沒有指定變數（記憶體位置）的setTimeout，所以這時候就會利用到閉包的概念去讀取這個區域內共通的變數timeout去做使用，再使用this去指向所使用的DOM物件