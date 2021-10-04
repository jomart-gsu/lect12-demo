

function validateForm() {
    let val = document.forms[0].elements[0].value
    console.log(val)
    if (val === "jmartin191") {
        return true;
    }
    alert("Wrong name!");
    return false;
}