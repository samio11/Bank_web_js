document.getElementById('withdraw_btn').addEventListener('click',function(){
    let WithdrawField = document.getElementById('withdraw_input');
    let Withdraw = WithdrawField.value;
    let balance1 = parseFloat(Withdraw);
    console.log(balance1);

    let cash1 = document.getElementById('withdraw_previous_value').innerText;
    let cash2 = parseFloat(cash1);
    console.log(cash2);

    let total = document.getElementById('total').innerText;
    let total1 = parseFloat(total);
    console.log(total1);

   if(balance1 <= 500){
    let t1 = cash2 + balance1;
    document.getElementById('withdraw_previous_value').innerText = t1.toString();
    WithdrawField.value = '';
    let t2 = total1 - balance1;
    if(t2 <= 0){
     alert("Do Have would have $"+t2.toString()+".You can not Withdraw");
     return;
    }
    document.getElementById('total').innerText = t2.toString();
   }
  else{
    alert("Your Withdraw must be under $500");
    WithdrawField.value = '';
  }
})