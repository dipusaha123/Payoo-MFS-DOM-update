document.getElementById("cashout").style.display= "none";


document.getElementById("add-money-box").addEventListener('click',function(){
    handleToggle("addMoney","block")
    handleToggle("cashout","none")
    handleToggle("transection-history","none")

})
document.getElementById("cash-box").addEventListener('click',function(){

    handleToggle("addMoney","none")
    handleToggle("cashout","block")
    handleToggle("transection-history","none")

})


