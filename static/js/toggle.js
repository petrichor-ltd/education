const en_toggle = document.getElementById("en_toggle");
const twn_toggle = document.getElementById("twn_toggle");
localStorage.setItem('lang',"en");
twn_toggle.style.display = "none";
$(".slider-cradle").click(function () {
    $(this).toggleClass("is-transitioned");
    if (localStorage.getItem('lang') == "twn") {
      twn_toggle.style.display = "none"; 
      en_toggle.style.display = "flex";
      localStorage.setItem('lang',"en");
    } else {
      en_toggle.style.display = "none"; 
      twn_toggle.style.display = "flex";
      localStorage.setItem('lang',"twn");
    }
     
    ScrollTrigger.refresh();
});

// $(".slider-cradle").click(function () {
//     $(this).toggleClass("is-transitioned");

//     const currentLang = localStorage.getItem("lang");
//     const newLang = currentLang === "twn" ? "en" : "twn";
//     localStorage.setItem("lang", newLang);

//     // 根據新語言初始化動畫
//     initializeAnimations(newLang);

//     // 切換顯示內容
//     document.getElementById("en_toggle").style.display = newLang === "en" ? "flex" : "none";
//     document.getElementById("twn_toggle").style.display = newLang === "twn" ? "flex" : "none";
// });

// // 預設語言為英文，啟動對應動畫
// if (!localStorage.getItem("lang")) {
//     localStorage.setItem("lang", "en");
// }
// initializeAnimations(localStorage.getItem("lang"));