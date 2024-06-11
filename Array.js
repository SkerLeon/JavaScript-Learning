let list = [1,2,3,4]
let list2 = [4,5,6,7,8,7]
let list3 = [...list , ...list2] //使用展開運算符把每個陣列的元素展開來變成新陣列
let list4 = [list , list2] //新的陣列只會出現2個索引值，因為沒有實際把裡面的元素展開在放入
let list5 = [list + list2] //新的陣列會包含一個list+list2的文字索引，所以單純只是一個陣列裡面只有一個字串的索引值

let uk = [...new Set(list3)] //展開SET函數的return值，set會取出唯一的值

console.log(list3);
console.log(list4);
console.log(list5);
console.log(uk);
