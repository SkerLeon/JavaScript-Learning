class Famliy {
    constructor(name,age,phone){
        this.name = name
        this.age = age
        this.phone = phone
    }//初始函數，用於建立物件裡面的key:value
    Hello(){
        console.log(`我的名字是${this.name}，我的年齡是${this.age}，我的電話號碼是${this.phone}`);
    }//物件裡面的方法，像是JS裡面內建的函式一樣，當我們在使用時其實都是用class定義出來的，所有東西都是物件
}
//當我們需要建立很多同樣規格的物件的時候，就可以使用class來定義每個物件面要有什麼內容，跟CSS的class概念一模一樣

const Lin = new Famliy("Leon",25,"09123456")
//建立一個叫做Lin的實例，可以取用屬性和方法

Lin.Hello()

class Me extends Famliy{
    constructor(name,age,phone,hobby){
        super(name,age,phone)
        //使用super調用父類別的構造函數，初始化name,age,phone
        this.hobby = hobby
    }
    Hello(){
        super.Hello()
        //使用super調用父組件的構造函數
        console.log(`順帶一提，我喜歡${this.hobby}`);
    }
}
//繼承父類別裡面的行為和屬性，達到模組化的效果

const Leon = new Me("Leo",30,"097456123","看電影")

Leon.Hello()