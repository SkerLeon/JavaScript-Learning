const msg = "Hello\" World"
//當我們要把引號放入字串裡時，就需要\這個符號才不會出錯

const name = " John Wick"
const hello = msg + name
//文字字串可以使用+的符號把兩個字串呈現在一起
//使用hello.length代表字串的字數

const bigHello = hello.toUpperCase() //這是一個把小寫字母變成大寫字母的函數

const smallHello = bigHello.toLowerCase() //這是一個把大寫字母變成小寫字母的函數

const selectHello = hello.charAt(hello.length-1)
//在函數裡面輸入數值去指定字串裡某一個字，像陣列一樣從0開始
//使用length-1的方式可以直接指定到最後一個字串，要-1的原因是它是以陣列的數值下去計算的，但我們length返回的是一個字數總數

const indexHello = hello.indexOf("W") //使用indexof去選取指定的字(有大小寫得分別)，回傳指定的索引值，當同個字出現兩次的時候，則會回傳第一個遇到的值，有另外一個lastindexof可以從清單後面去搜尋該字串值

const subHello = hello.substring(0,5) //會顯示對應索引值範圍的函數，可以用來搜索關鍵字，也可以藉由顯示對應索引值來達到刪除的方法

const isArray = hello.split("") //把字串依據參數分隔成一個陣列，使用空白鍵字串去建立陣列對於英文段落來說是一個很棒的方式

// console.log(isArray);

//當我今天有一串文章段落，我該怎麼去搜尋一個單字在這個段落裡出現幾次
// 1.我可以先把這個字串分割成陣列
// 2.利用map函數去遍歷整個陣列的資料，不要使用filter它只會回傳true or false
// 2-1.利用endsWith去指定單字的最後一個字，然後用slice刪除掉文字字串最後一個字
// 3.利用for迴圈把指定的要查詢的單字篩選出來，加到selectList上面

const paragraph = "Out of the low window could be seen three hickory trees placed irregularly in a meadow that was resplendent in spring-time green. Farther away, the old, dismal belfry of the village church loomed over the pines. A horse, meditating in the shade of one of the hickories, lazily swished his tail. The warm sunshine made an oblong of vivid yellow on the floor of the grocery."

const selectWord = "in"
const selectWordList = []

const paragraphArray = paragraph.split(" ").map((word) => {
    if (word.endsWith(".") || word.endsWith(",")) {
        return word.slice(0, -1);
    }
    return word;
});

for (let i = 0; i < paragraphArray.length; i++) {
    if (paragraphArray[i] === selectWord) {
        selectWordList.push(paragraphArray[i]);
    }
}

console.log(selectWordList.length);