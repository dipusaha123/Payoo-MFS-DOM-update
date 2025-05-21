document.getElementById("add-money").addEventListener('click',function(event){
event.preventDefault();

const amount = getInputValueById("amount")
const pin = getInputValueById("pin")

const account = document.getElementById("Account-number").value;
const mainBalance = getInnerTextById("main-balance")
console.log(mainBalance)

const selectedBank = document.getElementById("selected-bank").value;



if(amount<0){
    alert("vai possitive Number Dan")
    return;
}

if(account.length===11){
    if(pin===1234){
        const sum = mainBalance + amount;
        // document.getElementById("main-balance").innerText=sum;

        setInnerTextByIdAndValue("main-balance",sum)

        const container = document.getElementById("transection-history")

       const div = document.createElement("div");
       div.classList.add("bg-red-400")
       div.innerHTML = `
       <h1>ADD Money from ${selectedBank}<h1>
       <h3>${amount}</h3>
        <p>account Number : ${account}</p>
       `

       container.appendChild(div)


    }else{
        console.log("pin thik nai")
    }

}
else{
    console.log("account Number thik nai")
}
})