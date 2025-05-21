document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountnumber = document.getElementById("Account-number").value;
    const pinnumber = document.getElementById("pin").value;
    const convertedpinnumber = parseInt(pinnumber);

    if(accountnumber.length===11 && convertedpinnumber ===1234){
        window.location.href="main.html";
    }else{
        alert("Tumer Account Number Thik Nai")
    }

})