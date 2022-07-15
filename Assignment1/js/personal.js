window.addEventListener('load', () =>{
    let param = (new URL(document.location)).searchParams;
    let name = param.get("name");
    let emailAddress = param.get("emailAddress");
    let color = param.get("colorswatch");
    let width =param.get("width");
    let length =param.get("length");
    let type = param.get("type");
    let footage = width*length;
    let numberofCans = Math.round(footage/400);
    let price = numberofCans*type;
    let finalp = price * 0.13; 
    let finalPrice = (price + finalp).toFixed(2);
    document.getElementById("customerName").innerHTML = name;
    document.getElementById("customerEmail").innerHTML = emailAddress;
    document.getElementById("customerColor").innerHTML = color;
    document.getElementById("customerWidth").innerHTML = width;
    document.getElementById("customerLength").innerHTML = length;
    document.getElementById("customerFootage").innerHTML = footage;
    document.getElementById("customerCans").innerHTML = numberofCans;
    document.getElementById("customerType").innerHTML = type;
    document.getElementById("customerFinalPrice").innerHTML = finalPrice;
})

function quote() {
    let name = document.getElementById('customerName').value;
    sessionStorage.setItem("NAME", name);
    let email = document.getElementById('customerEmail').value;
    sessionStorage.setItem("EMAILADDRESS", email);
    let colorS = document.getElementById('customerColor').value;
    sessionStorage.setItem("COLORS", colorS);
    let widthS = document.getElementById('customerWidth').value;
    sessionStorage.setItem("WIDTHS", widthS);
    let lengthS = document.getElementById("customerLength");
    sessionStorage.setItem("LENGTHS", lengthS);
    let footageS = document.getElementById("customerFootage");
    sessionStorage.setItem("FOOTAGES", footageS);
    let canS = document.getElementById("customerCans");
    sessionStorage.setItem("CANS", canS);
    let typeS = document.getElementById("customerType")
    sessionStorage.setItem("TYPES", typeS);
    let finalPriceS = document.getElementById("customerFinalPrice");
    sessionStorage.setItem("FINALPRICES", finalPriceS);
    return;
}