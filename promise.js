const parentsAgree = false

const promise = new Promise((resolve,reject)=>{
    if(parentsAgree){
        resolve(`父母贊同，我們結婚吧！`);
        //resolve用作於決定情況
    } else{
        reject(`父母不贊同，但我們還是結婚吧！`);
        //reject用作於拒絕情況
    }
})

promise.then((parentsAgree)=>{
    console.log(parentsAgree);
}).catch((parentsNotAgree)=>{
    console.log(parentsNotAgree);
})

//promise就如同一個人給你的承諾一樣，不管結果成不成功都會給你一個結果
//如果一個男人承諾一個女人，不管父母在反對，他都會取她為妻，用程式寫出來會長這樣
//那麼在前端工程領域理解起來應該是這樣，當今天不管發生什麼事情，都會有一個結果，這就是promise
//在簡單來說就是
//為什麼異步函式需要用到這個技術呢，除了避免建造出一個回調地獄造成程式碼品質超差很難進行維護以外，也是為了我們不能確保這個API會不會突然出錯，當出錯的時候就必須要有錯誤的情況該怎麼執行的方式

//https://www.youtube.com/watch?v=EAxrwmjbIYQ&list=WL&index=4 yotube解說