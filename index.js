document.getElementById("sign-button").addEventListener("click",function(){
    document.querySelector(".popup-content").style.display = "flex"
    document.querySelector(".popup-content1").style.display = "none"
    document.querySelector(".popup-content2").style.display = "none"
    document.querySelector(".popup-content3").style.display = "none"
    document.querySelector(".popup-content4").style.display = "none"
    document.querySelector(".popup-content5").style.display = "none"
                })
  
    document.getElementById("employee").addEventListener("click",function(){
        document.querySelector(".popup-content2").style.display = "flex"
        document.querySelector(".popup-content").style.display = "none"
        document.querySelector(".popup-content1").style.display = "none"
       
        document.querySelector(".popup-content5").style.display = "none"
        document.querySelector(".popup-content3").style.display = "none"
        document.querySelector(".popup-content4").style.display = "none"
                    })
    document.getElementById("customer").addEventListener("click",function(){
    document.querySelector(".popup-content1").style.display = "flex"
    document.querySelector(".popup-content").style.display = "none"
    document.querySelector(".popup-content5").style.display = "none"
    document.querySelector(".popup-content3").style.display = "none"
    document.querySelector(".popup-content2").style.display = "none"
    document.querySelector(".popup-content4").style.display = "none"
       
    })          

 document.getElementById("submit1").addEventListener("click",function(){
    document.querySelector(".popup-content4").style.display = "flex"
  document.querySelector(".popup-content1").style.display = "none"
document.querySelector(".popup-content2").style.display = "none"
document.querySelector(".popup-content3").style.display = "none"
document.querySelector(".popup-content").style.display = "none"
document.querySelector(".popup-content5").style.display = "none"
 })
 document.getElementById("submit2").addEventListener("click",function(){
    document.querySelector(".popup-content4").style.display = "flex"
  document.querySelector(".popup-content1").style.display = "none"
document.querySelector(".popup-content2").style.display = "none"
document.querySelector(".popup-content5").style.display = "none"
document.querySelector(".popup-content3").style.display = "none"
document.querySelector(".popup-content").style.display = "none"
 })
 document.getElementById("submit3").addEventListener("click",function(){
document.querySelector(".popup-content5").style.display = "flex"
  document.querySelector(".popup-content1").style.display = "none"
document.querySelector(".popup-content2").style.display = "none"
document.querySelector(".popup-content4").style.display = "none"
document.querySelector(".popup-content3").style.display = "none"
document.querySelector(".popup-content").style.display = "none"
 })
    
document.getElementById("sign-in").addEventListener("click",function(){
    document.querySelector(".popup-content3").style.display = "flex"
    document.querySelector(".popup-content").style.display = "none"
    document.querySelector(".popup-content1").style.display = "none"
    document.querySelector(".popup-content2").style.display = "none"
    document.querySelector(".popup-content4").style.display = "none"
    document.querySelector(".popup-content5").style.display = "none"
 })