document.addEventListener("DOMContentLoaded",()=>{
    const ad = document.getElementById("AD");
    const cover = document.getElementById("advertise_cover");
    const colsure = document.getElementById("advertise_colsure");
    const pointer = document.getElementById("advertise_pointer");
    const slideBtn = document.getElementById("advertise_Slidebtn");

    const picImg = document.getElementsByClassName("advertise_pic_define");
    const picImg1 = document.querySelector(".advertise_pic_img1");
    const picImg2 = document.querySelector(".advertise_pic_img2");
    const picImg3 = document.querySelector(".advertise_pic_img3");

    const coverWrap = document.querySelector(".advertise_cover > a");
    const coverFront = document.querySelector(".advertise_cover_front");
    const coverBack = document.querySelector(".advertise_cover_back");
    let changeRotate = false;
    const coverImgArray = ["./images/t-1.jpg", "./images/t-2.jpg", "./images/t-3.jpg"];
    let currentImgIndex = 0;

    // 初始化圖片
    coverFront.src = coverImgArray[currentImgIndex];
    coverBack.src = coverImgArray[(currentImgIndex + 1) % coverImgArray.length];

    // 點擊小廣告跳出大廣告並隱藏滑鼠指標及小廣告關閉按鈕
    for (let i = 0; i < picImg.length; i++) {
        picImg[i].addEventListener("click", () => {
            cover.style.transform = "translateY(0%)";
            slideBtn.style.display ="block"
            coverWrap.style.display = "block"
            colsure.style.display = "none";
            pointer.style.display = "none";
        });
    }

    // 點擊大廣告下滑按鈕隱藏大廣告並顯示滑鼠指標及小廣告關閉按鈕
    slideBtn.addEventListener("click", () => {
        cover.style.transform = "translateY(100%)";
        setTimeout(()=>{
            coverWrap.style.display = "none"
            slideBtn.style.display ="none"
        },500)
        colsure.style.display = "block";
        pointer.style.display = "block";
    });

    // 小廣告關閉按鈕
    colsure.addEventListener("click", () => {
        ad.style.opacity = "0";
        ad.style.transition = "0.8s";
        setTimeout(() => {
            ad.style.display = "none";
        }, 800);
    });

    // 防抖函數
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // 計算z-index值
    const changeZindex = (index) => {
        if (index === "3") {
            return "2";
        }
        if (index === "2") {
            return "1";
        }
        if (index === "1") {
            return "3";
        }
    }

    // 滑動效果
    function changeImage() {
        // 小廣告動畫效果
        for (let i = 0; i < picImg.length; i++) {
            if (picImg[i].style.zIndex === "3") {
                picImg[i].style.bottom = "-100%";
            }
            if (picImg[i].style.zIndex === "1") {
                picImg[i].style.bottom = "0%";
            }
        }

        // 大廣告動畫效果
        if (changeRotate) {
            coverWrap.style.transform = "rotate3d(1,0,0,0deg)";
            changeRotate = false;

            // 更新 coverFront 的圖片並重設 backface visibility
            setTimeout(() => {
                coverFront.src = coverImgArray[currentImgIndex];
                coverBack.src = coverImgArray[(currentImgIndex + 1) % coverImgArray.length];
                coverFront.style.backfaceVisibility = "visible";
                coverBack.style.backfaceVisibility = "hidden";
            }, 100); 
        } else {
            coverWrap.style.transform = "rotate3d(1,0,0,180deg)";
            changeRotate = true;

            // 更新 coverBack 的圖片並重設 backface visibility
            setTimeout(() => {
                coverFront.src = coverImgArray[(currentImgIndex + 1) % coverImgArray.length];
                coverBack.src = coverImgArray[currentImgIndex];
                coverFront.style.backfaceVisibility = "hidden";
                coverBack.style.backfaceVisibility = "visible";
            }, 100); 
        }

        // 更新當前圖片索引
        currentImgIndex = (currentImgIndex + 1) % coverImgArray.length;

        // 重新賦予小廣告z-index
        picImg1.style.zIndex = changeZindex(picImg1.style.zIndex);
        picImg2.style.zIndex = changeZindex(picImg2.style.zIndex);
        picImg3.style.zIndex = changeZindex(picImg3.style.zIndex);
    }

    window.addEventListener("scroll", debounce(changeImage, 300));

    // 網頁加載完成跳出廣告
    window.addEventListener("load", () => {
        ad.style.bottom = "0%";
    });
})