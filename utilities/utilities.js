function getInputValueById (id){
    const value = document.getElementById(id).value;
    const convertedvalue = parseInt(value)
    return convertedvalue;

}


function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertvalue = parseFloat(value);
    return convertvalue;
}

function setInnerTextByIdAndValue(id,value){
   document.getElementById(id).innerText = value;

}

function handleToggle(id,status){
    document.getElementById(id).style.display= status;
}
