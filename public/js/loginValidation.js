var email1 = document.querySelector('#logIn-email');
var password1 = document.querySelector('#logIn-password');
var form =document.querySelector('#logIn-form');
var form2 =document.querySelector('#formdisappear');

function openClick() {
    form2.style.display = "block";
    sessionStorage.setItem('clicked', true);
}

function closeClick() {
    form2.style.display = "none";
    sessionStorage.removeItem('clicked');
}


const handleFormSubmit = (event) => {
	event.preventDefault();
	closeClick();
	
};
form.addEventListener('submit',handleFormSubmit);
window.onload = function () {
    var data = sessionStorage.getItem('clicked');
    if (data == 'true') {
        openClick();
    }
};