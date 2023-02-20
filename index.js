const submitBtn = document.getElementById('submit-btn');

const validation = () => {
    const password = document.getElementById('password');
    
    if (password.value === "") {
        alert("Please enter the password.");
        password.focus();
        return false;
    }

    if (!psaaCheck(password.value)) {
        alert("Please enter a valid password.");
        password.focus();
        return false;
    }
      
    return true;
    
}

const psaaCheck = (password) =>{
    return /^[a-z]*#[0-9]{1,3}$/.test(password);
}

 


submitBtn.addEventListener('click', validation);