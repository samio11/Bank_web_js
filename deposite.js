document.getElementById('deposite_btn').addEventListener('click',function(){
    let depositeField = document.getElementById('deposite_input');
    let deposite = depositeField.value;
    let balance1 = parseFloat(deposite)
    console.log(balance1);

    let cash1 = document.getElementById('deposite_previous_value').innerText;
    let cash2 = parseFloat(cash1);
    console.log(cash2);

    let total = document.getElementById('total').innerText;
    let total1 = parseFloat(total);
    console.log(total1);

   if(balance1 <= 300){
    let t1 = cash2 + balance1;
    document.getElementById('deposite_previous_value').innerText = t1.toString();
    depositeField.value = '';
    let t2 = total1 + balance1;
    document.getElementById('total').innerText = t2.toString();
   }
   else{
    alert("Your Deposite must be under $300");
    depositeField.value = '';
   }
})