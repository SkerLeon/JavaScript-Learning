const list = [1,2,3,4]
const list2 = [4,5,6,7,8,7]
//一般定義陣列的方法

const newList = new Array()
newList[0] = "狗"
newList[1] = "貓"
newList[2] = "獅子"
//使用new 建立陣列的方法

const newList2 = new Array(10)
//如果在建立一個array實例時，添加裡面的參數就會設定陣列的長度
//但通常不會使用new實力的方法去宣告陣列

const sparseArr =[,4,4,4,4,,4,,0]
//通常多洞陣列裡面是允許沒有值的，這些值會被定義為undefine
//log出來會顯示empty

const lengthList = [
    `king`,
    1,
    false,
    {
        id:30
    }
]
lengthList.user = "lion"
//因為陣列也是物件的一種所以可以新增屬性，但新增屬性不會影響到陣列的長度

const lengthList2 = [12,4,5,100]
lengthList2.length = 2
//如果把陣列的長度縮短會直接截短原陣列

const list3 = [...list , ...list2] 
//使用展開運算符把每個陣列的元素展開來變成新陣列

const list4 = [list , list2] 
//新的陣列只會出現2個索引值，因為沒有實際把裡面的元素展開在放入

const list5 = [list + list2] 
//新的陣列會包含一個list+list2的文字索引，所以單純只是一個陣列裡面只有一個字串的索引值

const uk = [...new Set(list3)] 
//展開SET函數的return值，set會取出唯一的值，應用在當我們不希望陣列裡面有重複的值的時候

const joinList = list3.join("-") 
//join可以把陣列轉成字串，並使用參數去替代每個索引值之間的位置

const filterList = list3.filter((nub)=>{
        if(nub % 2 === 0){
            return nub
        }
    })
//filter通常用在篩選原陣列裡面的資料傳回一個boolen值決定要不要加到新陣列裡，並傳回一個新陣列

const mapList = list3.map((item)=>{
    return item = item*2
})
//map則適合用在要對陣列內每個元素去改變資料的行為或是副作用並傳回一個新陣列

const forEachList = [1,2,3,4]
forEachList.forEach((item)=>{
    // console.log(item);
})
//其作用跟map相通，但foreach會改變原陣列

const indexOfList = list3.indexOf(4)
//跟文字的indexof用法一樣，使用嚴格比較===去比對值和資料型態，若沒有找到值會回傳-1
//可以控制想尋找元素的索引值起點，array.indexOf(想尋找的元素,索引值起點)
//索引值起點也可以設定成負數形式，會從後面往前算索引值，比如-1就是指從後面數來第一個索引值

const spliceList = ["豬大哥","豬二哥","豬小弟"]
spliceList.splice(2,1)
//array.splice(要開始改動的索引值,刪除多少個元素,想加入的元素)，要注意的是此method會更動原本的陣列數值並不會回傳
//可以刪除陣列裡面的值，若用一個變數去接收這個method，會是被刪掉的值，所以其實它return的是我們想刪除的值
spliceList.splice(1,0,"豬妹妹")
//也可以用做新增值的用法，只要把要刪除的元素設成0就可以了
spliceList.splice(1,1,"豬妹妹")
//用新增的值去代替舊的值

const a =[1,2,3,[4],5]
const b = [6,8,9,5,0]
const concatList = a.concat(b)
//concat的作用是合併陣列或值，但要注意的是它是淺拷貝，所以一旦改變引用的陣列我們新建立的陣列就會跟著改變
// console.log(concatList);
a[3].push("a","b")
//這裡只改變了a陣列第二層的陣列數值，但concatList也會跟著修改
// console.log(concatList);

const reverseList = list.reverse()
//把陣列內所有的元素都反轉排列


//Q1.我想要刪除BangKok這一筆資料，但不確定該陣列有沒有該筆資料
const citys = ['Hong Kong', 'Tokyo', 'Seoul', 'Taipei', 'BangKok', 'Singapore']
const selectDelete = citys.indexOf("BangKok")
if(selectDelete > -1){
    citys.splice(selectDelete,1)
}
//1.我要先使用indexof搜尋該筆資料存不存在，利用沒有資料就回傳-1的特性找
//1-1.如果沒有回傳-1，就利用splice刪除該筆資料
const newCitys = citys.filter((city)=>{
    return city != "BangKok"
})
//2.當然也可以利用filter去做到這件事情，而且可以避免修改到原陣列

//Q2.我想刪除重覆的資料，並只保留一筆資料
const citys2 = ['Taipei', 'Hong Kong', 'Tokyo', 'Seoul', 'Seoul', 'Taipei', 'BangKok', 'Singapore']
const delRepeatData = [...new Set(citys2)]
//1.使用set唯一值的特性來去刪除重複的資料並利用展開運算子

const filterCitys2Data = citys2.filter((city,index)=>{
    return citys2.indexOf(city) === index
})
//2.那如果用indexof我該怎麼做
//2-1.使用filter去遍歷每個陣列元素進行篩選
//2-2.使用indexof只會回傳第一次相符資料的索引值特性，去比對陣列裡面的索引值是否相符
//但這裡如果使用foreach+splice的寫法，會因為改變原陣列的特性，導致索引值對不上產生bug，因為filter是使用原陣列的值去建立新的陣列，所以這個方法比較合適

//Q3把二維陣列合併成一個陣列，並找出有Cabin此字的行李箱
const luggage = [
    ['Original Cabin','Classic Cabin','Original Trunk S'],
    ['Essential Cabin', 'Original Check-in M', 'Classic Check-in M'],
    ['Original Trunk S', 'Hybrid Cabin S']
]
const newLuggage = [].concat(...luggage)
//可以把concat想成跟map一樣會去遍歷陣列第一層的資料（淺拷貝）並展開，那當這裡使用concat(...luggage)的寫法時，就是我們要遍歷陣列第一層及第二層的數值
const result = newLuggage.filter( (item) => {
    return item.match(/Cabin/g)   
})
//這邊使用了使用match方法及正則表達式去搜尋陣列裡面的相對應的文字，若沒有相應的數值則會返回null值，而正則表達式後面的g則代表了全域搜索，意思是在整個字串裡面搜尋所有的匹配項，而不是找到第一個就停止

//Q4 自訂new Date產生的時間
let today = new Date(...[2020,5,1])
//基本用法，只是簡單展開出一個陣列去讓date接收數值

//Q5 如何打亂一個陣列裡面的資料，並保持一樣資料只會出現一次
const spyList = ["黃昏","約兒","安妮亞","爆炸頭","夜錐"]
//題目陣列
const indexList2 = []
//紀錄使用過的index陣列
const randomList = spyList.map((item)=>{
    let randomNub = Math.round(Math.random()*(spyList.length-1))
    //建立一個根據陣列長度產生隨機數的變數

    while (indexList2.indexOf(randomNub) !== -1) {
        randomNub = Math.round(Math.random()*(spyList.length-1))
    }
    //while的特性就是當條件不滿足的時候，會持續作用
    //利用indexof沒有值會回傳-1的特性，對比randomNub產出的值在indexList2裡面的值是否重複
    //當我今天產出的隨機數有在indexList2這個陣列裡時，我就重新產出

    indexList2.push(randomNub)
    //更新好的隨機數加到紀錄用過的index陣列

    return item = spyList[randomNub]  
    //回傳陣列的數值
})
//1.利用map方法去循環陣列裡面的每個資料
//2.使用random產生隨機數，先判斷這個數有沒有在一個負責接收使用過的亂數陣列裡，如果有就重新產出一個數值，沒有就加入到使用過的陣列裡

//Q6 使用二分法來尋找陣列元素，並列印出來在該陣列的索引值
//二分法其實是一種尋找的觀念，重點在於如何有效率找出目標在哪，此方法可以用在任何事情上面，當我們想尋找CSS bug又不知道從哪裡下手的時候，可以先把一半的code註解掉在觀察錯誤有沒有發生，如果有就代表該錯誤發生在沒註解掉的那一半code上，在不斷的使用二分法往下尋找，以維持程式的效率來說，當我們陣列裡面具有很多資料的時候，可以應用在如何節省效能正確地找到該資料，很多時候要如何提升程式碼的效能就要從邏輯結構開始設計，以一些概念來做設計
const dichotomyList = [1,33,44,56,76,88,92,103,115]
function searchData (target){
    let indexStart = 0
    //陣列起始索引值
    let indexEnd = dichotomyList.length-1
    //陣列最後索引值
    let indexMiddle
    //陣列中間值索引
    let element
    //陣列中間值的資料

    while(indexStart <= indexEnd){
        indexMiddle = Math.floor((indexStart + indexEnd) / 2)
        //這裡用Math.floor去取得indexMiddle的中間索引值

        element = dichotomyList[indexMiddle]
        //用取得的索引值指定資料

        if(element === target){
            return indexMiddle
            //對比element === target是同樣的數值，有的話返回該資料索引值
        } else if(target < element){
            indexEnd = indexMiddle - 1
            //當target > element時，把indexStart設定為取得的中間值+1(為了避免已經被確定不是的第一筆資料在被比對一次)
        } else{
            indexStart = indexMiddle + 1
            //不然當target < element時，把indexEnd設定為取得的中間值-1(為了避免已經被確定不是的尾端資料在被比對一次)
        }
        //把變數設在while迴圈外面是為了要紀錄該值的變化，所以不能放在裡面導致每次循環時重置
    }return -1
    //因為我們不知道要執行幾次才能搜尋到指定的資料索引值，所以我們可以設定當indexStart <= indexEnd用while迴圈產出我們要的結果，當條件不符合時return -1的結果，代表陣列裡面沒有這個值
}

console.log(searchData(111));
