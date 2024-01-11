let nameError = document.getElementById('nameError');
let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let submitError = document.getElementById('submitError');

function validation(){
    let fname=document.getElementById('fnameError').value;
    if(fname.length==0){
        nameError.innerHTML='Please enter your name';
        return false;
    }
    if(!/^[a-zA-Z]*\s{1}[A-Za-z]*$/.test(fname)){
        nameError.innerHTML='Please enter your full name';
        return false;

    }
    nameError.innerHTML='<i style="color:green;" class="fa-solid fa-circle-check"></i>';
    return true;
}
function phoneValidation(){
    let ph = document.getElementById('phonError').value
    if(ph.length==0){
        phoneError.innerHTML='Pleas enter your phone number';
        return false;
    }
    if(ph.length!==10){
        phoneError.innerHTML='Phone number must 10 digit';
        return false;
    }
    if(!ph.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits';
        return false;
    }
    phoneError.innerHTML='<i style="color:green;" class="fa-solid fa-circle-check"></i>';
    return true;
}

function emailValidation(){
    let em = document.getElementById('emailErrorin').value
   
    if(em.length==0){
        emailError.innerHTML='Pleas enter your email id';
        return false;
    }

    if(!em.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML='Pleas enter a valid email id';
        return false;

    }

    emailError.innerHTML='<i style="color:green;" class="fa-solid fa-circle-check"></i>';
    return true;
}

