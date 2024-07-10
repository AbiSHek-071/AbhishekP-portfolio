// AOS.init();


var nameError = document.querySelector("#name-error");
var emailError = document.querySelector("#email-error");
var subjectError = document.querySelector("#subject-error");
var messageError = document.querySelector("#Message-error");
var submitError = document.querySelector("#submit-error");




function validateEmail(){
    var email = document.querySelector("#contact-email").value;
   
    if(email.length == 0){
        emailError.innerHTML = "Email can not be empty";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = "E-mail is Invalid";
        return false;

    }
    emailError.innerHTML = '<i class="valid fa-solid fa-clipboard-check"></i>';
    return true;
}


function validateName(){

    
    var name = document.querySelector("#contact-name").value;
    
    if(name.length == 0){
        nameError.innerHTML = "Name can not be empty";
        return false;
    }
    if(name.match(/\d/)){
        nameError.innerHTML = "Name can not contain numbers";
        return false;
    }
    
    if(!name.match(/^([A-Za-z]+\s)+[A-Za-z]+$/)){
        nameError.innerHTML = "Type FUll Name";
        return false;
    }
      nameError.innerHTML = '<i class="valid fa-solid fa-clipboard-check"></i>';
        return true;
   
       
    
    
}

function validateSubject(){
    var subject = document.querySelector("#contact-subject").value;
    

    if(subject.length == 0){
        subjectError.innerHTML = "Please enter Subject";
        return false;
    }
    if(!subject.match(/\w+/)){
        subjectError.innerHTML = "Please enter Subject";
        return false;
    }
    subjectError.innerHTML = '<i class="valid fa-solid fa-clipboard-check"></i>';
    return true;

}

function validateMessage(){
    var message = document.querySelector("#contact-message").value;  
    
    var required = 20;
    var left = required-message.length;

    
    if(left > 0){
        messageError.innerHTML = left + 'more charecters are required';
        return false;
    }
    
   
    messageError.innerHTML = '<i class="valid fa-solid fa-clipboard-check"></i>';
    return true;
}

function validateForm(){
    if( !validateEmail() || !validateSubject() || !validateName() || !validateMessage){
        submitError.style.display = 'block';
        submitError.innerHTML="Fix the error to Submit";
        setTimeout(function(){ submitError.style.display = 'none';},3000);
        return false;
    }
}



// form submission 
$("#submit-form").submit((e)=>{
    e.preventDefault()
   
    if(!validateForm()){
      $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzSL6zzxuPlNxPZYXjxRS2Im9Q2SAVKB2YmLjrauFXo--OmV2749jQtEeWCtORfqpGkhA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
         
         
          alert("Form submitted successfully. We will contact you as soon as possible...!")
       
        
        
        setTimeout(function() {
          window.location.reload();
        }, 3000); 
          
        },
        error:function (err){
            alert("Something went wrong ! Try again.")

        }
    })
    }
})




// button clicks to open link 


function linkedin(){
    window.open("https://www.linkedin.com/in/abhishek-p-965a4a240/", "_blank");
    
}

function gitHub(){
    window.open("https://github.com/AbiSHek-071", "_blank");
    
}