function addnums(n1, n2){
   return parseInt(n1) + parseInt(n2);
}
function subnums(n1, n2){
    return parseInt(n1) - parseInt(n2);
 }


function display(){
    let amount =document.getElementById('amount').value;
    if (amount == "" ){
        document.getElementById('amount-required').classList.add('peek');
        return document.getElementById('amount-required').innerHTML = 'Amount required';
    }
    let rent =document.getElementById('rent').value;
    let utilities =document.getElementById('utilities').value;
    let expenditure = addnums(rent, utilities);
    let netAmount = subnums(amount, expenditure);
    let price = document.getElementById('price').value;
    if (price == "0000" ){
        document.getElementById('price-required').classList.add('peek');
        return document.getElementById('price-required').innerHTML = 'price required';
    };
    let item = document.getElementById('item').value;
    console.log(price, item)
    if (item == "" ){
        document.getElementById('name-required').classList.add('peek');
        return document.getElementById('name-required').innerHTML = 'item required';
    };
   
    function mult(n1){
        return netAmount * n1;
    }
    var save;
    var x = document.getElementById('save').value;
    console.log(x)
    if (x == "Basic") {
         save = mult(0.25);
         document.getElementById('savingplan-required').classList.add("success")
        document.getElementById('savingplan-required').innerHTML = `You have saved ${save}`
    } else if (x == "Premium"){
        save = mult(0.5);
        document.getElementById('savingplan-required').classList.add("success")
        document.getElementById('savingplan-required').innerHTML = `You have saved ${save}`
    } else{
        document.getElementById('savingplan-required').classList.add("peek")
        document.getElementById('savingplan-required').innerHTML = 'saving plan required'
    }
    var balance = netAmount - save;
    console.log(balance)
    if (balance > price) {
        document.getElementById('demo').classList.remove('fail')
        document.getElementById('demo').innerHTML = `Within bugdet, You can purchase ${item}`;

    } else if(balance <= price){
        document.getElementById('demo').classList.add("fail");
        document.getElementById('demo').innerHTML = `Outside bugdet, You can't purchase ${item}, Please save instead`;

    } else{
        document.getElementById('demo').classList.add("fail");
        document.getElementById('demo').innerHTML = "You didn't choose a saving plan";

    }
}
