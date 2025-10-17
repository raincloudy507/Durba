// const contactForm = document.getElementById('.contact-form');
const contactForm = document.querySelector('.contact-form'); 

// Get form values
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let subject = document.getElementById('email-subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        subject: subject.value,
        message: message.value
    };

    // console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email sent');
            name.value = '';
            email.value = '';
            phone.value = '';
            subject.value = '';
            message.value = '';
        }else {
            alert('Something went wrong. Please try again.');
        }
      }
      
    xhr.send(JSON.stringify(formData));
});