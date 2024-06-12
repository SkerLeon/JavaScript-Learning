const nub = 5
const nubList = [2,100,150,50,70,80,-1,-500,-150]

const absNub = Math.abs(-5)
//取絕對值，可以把負數變成正數

const maxNub = Math.max(...nubList)
//回傳一個或多個數值的最大值，本身不接受陣列傳入，需要把陣列展開才可以做使用
const munNub = Math.min(...nubList)
//min本身也是一樣的道理，只是改為顯示最小值而已

const roundNub = Math.round(2.4)
//會返回一個四捨五入的值

const powNub = Math.pow(2,3)
//返回一個裡面數值的次方，像這個是指2的3次方

const sqrtNub = Math.sqrt(36)
//返回一個開根號的數值

const randomNub = Math.random()
//返回一個0~1之間的隨機數(包含小數點)

const str = "500"
const parseIntNub = parseInt(str)
//把字串轉換成數字，parseFloat則可以轉成小數點
if(typeof parseIntNub === "number"){
    return console.log(`我是數字:${parseIntNub}`);
}

// console.log(parseIntNub);

//製作一個隨機號碼的樂透機器，當達到指定的數值時會log出訊息

function Lotto (){
    const nub = Math.round(Math.random())*10
    if(nub>5){
        return console.log(`中獎了！！：${nub}`);
    }
    return console.log(`沒中QQ：${nub}`);
}

// Lotto()