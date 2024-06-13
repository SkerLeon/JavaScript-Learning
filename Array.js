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
//展開SET函數的return值，set會取出唯一的值

const joinList = list3.join("-") 
//join可以把陣列轉成字串，並使用參數去替代每個索引值之間的位置

const filterList = list3.filter((nub)=>{
        if(nub % 2 === 0){
            return nub
        }
    }
)
//filter通常用在篩選原陣列裡面的資料傳回一個boolen值決定要不要加到新陣列裡，並傳回一個新陣列

const mapList = list3.map((item)=>{
    return item = item*2
})
//map則適合用在要對陣列內每個元素去改變資料的行為或是副作用並傳回一個新陣列

let foreachList = [1,2,3,4]
foreachList.forEach((item)=>{
    console.log(item);
})
//其作用跟map相通，但foreach會改變原陣列

console.log(foreachList);
