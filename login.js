document.getElementById('main_btn').addEventListener('click',function(){
    const emailField = document.getElementById('user_email');
    const email = emailField.value;
    
    const passField = document.getElementById('user_pass');
    const pass = passField.value;

    if(email === 'samiohasan6@gmail.com' && pass === 'samio123'){
       window.location.href = 'mainBank.html'
    }
    else{
        alert("Wrong User");
    }
})