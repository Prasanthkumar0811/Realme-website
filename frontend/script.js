let forms=document.querySelector('#forms')
let username=document.querySelector('#username')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let cpassword=document.querySelector('#cpassword')

forms.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinputs()
})
function validateinputs(){
    let usernameval=username.Value.trim();
    let emailval=email.Value.trim();
    let passval=password.Value.trim();
    let cpassval=cpassword.Value.trim();

    if(usernameval===''){
        setError(username,'Username is Required')
    }else{
        setSuccess(username)
    }if(emailval===''){
        setError(email,'Email is Required')
    }else if(!validateEmail(emailval)){
        setError(email,'Please Enter Validate Email')
    }else{
        setSuccess(email)
    }if(passval===''){
        setError(password,'Password is Required')
    }else if(passval.length<8){
        setError(password,'Password must atleast 8 characters long')
    }else{
        setSuccess(password)
    }if(cpassval===''){
        setError(cpassword,'Confirm Password is Required')
    }else if(!cpassval==passval){
        setError(cpassword,'Confirm Password Does not match Password')
    }else{
        setSuccess(cpassword)
    }
}
function setError(element,message){
    let inputgroup=element.parentElement;
    let errorelement=inputgroup.querySelector('.error')
    errorelement.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}
function setSuccess(element){
    let inputgroup=element.parentElement;
    let errorelement=inputgroup.querySelector('.error')
    errorelement.innerText='';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };