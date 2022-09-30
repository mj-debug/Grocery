// Mobile Nav bar

function toggleSideNav(){
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = '0';
    }else{
        sideNav.style.right = '-250px';
    }
}


// Contact Page begins
function check_register(){
    let first_name = document.getElementById('fname').value;
    let last_name = document.getElementById('lname').value;
    let email = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value;
    let textarea = document.getElementById('textbox').value

    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numbers = /^[0-9]+$/;
    let letters = /^[A-Za-z]+$/;
    let username = /^[A-Za-z][0-9]+$/;
    let errors = ['please fill in firstname','only letters are allowed','please fill in lastname', 'only letters are allowed',
    'please fill in email','invalid email','please fill in phone number', 'please type in your message'];

    if(first_name.trim() == ""){
        document.getElementById('errText').innerHTML = errors[0];
        return false;
    }else if(!letters.test(first_name)){
        document.getElementById('errText').innerHTML = errors[1];
        return false;
    }else if(last_name.trim() == ""){
        document.getElementById("errText").innerHTML = errors[2];
        return false;
    }else if(!letters.test(last_name)){
        document.getElementById("errText").innerHTML = errors[3];
        return false;
    }else if(email.trim() == ""){
       document.getElementById('errText').innerHTML = errors[4];
        return false;
    }else if(!pattern.test(email)){
        document.getElementById('errText').innerHTML = errors[5];
        return false;
    }else if(phone.trim() == ""){
        document.getElementById('errText').innerHTML = errors[6];
        return false;
    }else if(textarea.trim() == ""){
        document.getElementById("errText").innerHTML = errors[7];
    }else if(!letters.test(textarea)){
        document.getElementById('errText').innerHTML = errors[1];
        return false;
    }else{
        document.getElementById('errBox').style.backgroundColor = 'green';
        document.getElementById("errText").innerHTML = "Registration successful";
        localStorage.setItem('FIRSTNAME', firstname);
        localStorage.setItem('LASTNAME', lastname);
        localStorage.setItem('EMAIL', email);
        return true;
    }
// Contact page ends

// Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });