document.getElementById("cash-out-btn").addEventListener('click',function(event){
event.preventDefault()

const accounNumber = document.getElementById("Account-number").value;
const amount = getInputValueById("cashout-amount");
const pin = getInputValueById("cashout-pin");

const mainBalance = getInnerTextById("main-balance")

if(amount>mainBalance){
    alert("Vai Apner taka Sesh")
    return;
}


if(accounNumber.length===11){
    if(pin===1234){
        const sum = mainBalance - amount;
        setInnerTextByIdAndValue("main-balance",sum)

         const container = document.getElementById("transection-history")

         const p = document.createElement("p");
         p.innerText = `
         cashout ${amount} from this ${accounNumber} account

         `
         container.appendChild(p)


    }
    else{
        alert("Pin Number Not Vallid")
    }

}
else{
    alert("Account Number Not Valid")
}
})