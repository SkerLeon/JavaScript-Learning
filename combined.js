const array1 = [1,2,3]
const array2 = ["狗","貓","馬","天竺鼠"]
const array3 = [[100],[500]]

const combinedList1 =[...array1,...array2,...array3]
const combinedList2 = array1.concat(array2,array3)
array3[0].push("x","y")
//展開運算子就跟concat一樣可以合併陣列和物件，但它同樣也是屬於淺拷貝的一員，當改變array3第二層陣列的數值時，會發生combinedList2也跟著被更改的情況

const object1={
    name:"獅子",
    color:"red",
    price:300
}
const object2={
    name:"老虎",
    color:"blue",
}
const combinedObj = {...object1,...object2}
//當我們使用展開運算子在物件上面的時候，如果屬性值有重複就會被蓋掉，蓋掉的順序取決於誰是最後一個蓋上去的
//但當我們想要把物件跟陣列做合併時，該物件是不能展開的，因為它不能被迭代，所以我們可以知道展開運算子的原理是能夠展開可以被迭代的資料，但有個例外是當物件放在陣列裡面的時候是可以被迭代的

const num = [30,20]
function sum(a,b){
    return a + b
}
//展開運算子也可以把陣列的值展開當作參數傳入function裡

function func(){
    return [...arguments]
}
//在這邊我們也可以利用展開運算子，把arguments的值轉成陣列

const str = "hello World!"
const comStr = [...str]
//所以我們當然也可以利用這個特性，把文字展開成陣列

console.log(comStr)
