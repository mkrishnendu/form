
const form=document.getElementById("form");
const username=document.getElementById("name");
const email=document.getElementById("email");
const pass1=document.getElementById("pass1");
const pass2=document.getElementById("pass2");
form.addEventListener('submit',(e)=>{
     e.preventDefault();
     validateInput();
});
const isValidEmail=email=>{
    const re=/^[A-Za-z0-9_\.\-]+[@][A-Za-z0-9]+\.[A-Za-z0-9]{2,3}$/
     return re.test(String(email).toLowerCase());
    
}
const validateInput=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const pass1Value=pass1.value.trim();
    const pass2Value=pass2.value.trim();
    if(usernameValue===''){
        seterror(username,'user name is empty');
    }
    else{
        setsuccess(username);
    }
    if(emailValue===''){
        seterror(email,'email is required');
    }
    else if(!isValidEmail(emailValue)){
        seterror(email,'email is not valid');
    }
    else{
        setsuccess(email);
    }
    if(pass1Value===''){
        seterror(pass1,'pass1 is empty');
    }
    else if(pass1Value.length<5){
        seterror(pass1,'pass1 missmatch');
    }
    else{
        setsuccess(pass1);
    }
    if(pass2Value===''){
        seterror(pass2,'pass2 is empty');
    }
    else if(pass2Value!==pass1Value){
        seterror(pass2,'pass2 missmatch');
    }
    else{
        setsuccess(pass2);
    }
}
const seterror=(element,message)=>{
    const inputControl=element.parentElement;
   const errdisplay= inputControl.querySelector('.error');
   errdisplay.innerHTML=message;
}
const setsuccess=(element)=>{
    const inputControl=element.parentElement;
    const errdisplay= inputControl.querySelector('.error');
    errdisplay.innerHTML='success';
}