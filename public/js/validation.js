var firstName = document.querySelector('#name');
var lastName = document.querySelector('#lastname');
var address = document.querySelector("#address");
var phone = document.querySelector('#phone');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');

//Αν πατηθει το κουμπι υποβολης χωρίς να έχουν συμπληρωθει τα
//υποχρεωτικα πεδία, περιμεντε 2-3 δευτερολεπτακαι θα σας παει
//στο πρωτο πεδιο που πρεπει να συμπληρωθει. Και γενικα περιμεντε
//2-3 δευτερολεπτα.
function successfulSubmit(){
	alert('Η υποβολή της φόρμας εγγραφής ήταν επιτυχής!');
}

function firstNameCheck(){
	let letters = /^[A-Za-z]+$/;
	if(firstName.value === ''){
		firstName.setCustomValidity('Πρέπει να συμπληρώσετε το όνομά σας!');
	}
	else if(!firstName.value.match(letters)){
		firstName.setCustomValidity('Το όνομά σας πρέπει να περιέχει μόνο λατινικούς χαρακτήρες!');
	}
	else{
		firstName.setCustomValidity('');
	}
}

function lastNameCheck(){
	let letters = /^[A-Za-z]+$/;
	if(lastName.value === ''){
		lastName.setCustomValidity('Πρέπει να συμπληρώσετε το επώνυμό σας!');
	}
	else if(!lastName.value.match(letters)){
		lastName.setCustomValidity('Το επώνυμό σας πρέπει να περιέχει μόνο λατινικούς χαρακτήρες!');
	}
	else{
		lastName.setCustomValidity('');
	}
}

function emailCheck(){
	if(email.value === ''){
		email.setCustomValidity('Πρέπει να συμπληρώσετε το email σας!');
	}
	else{
		email.setCustomValidity('');
	}
}

function phoneCheck(){
	let numbers = /^[0-9]+$/;
	if(phone.value === ''){
    	phone.setCustomValidity('Πρέπει να συμπληρώσετε το κινητό σας τηλέφωνο!');
    }
    else if (!phone.value.match(numbers)) {
        phone.setCustomValidity('Το κινητό σας τηλέφωνο πρέπει να έχει μόνο αριθμούς!');
    }
    else if (phone.value.toString().length != 10) {
        phone.setCustomValidity('Το κινητό σας τηλέφωνο πρέπει να έχει 10 ψηφία!');
    }
    else {
        phone.setCustomValidity('');
    }
}

function passwordValidity(){
	if(password.validity.valueMissing){
        password.setCustomValidity('Πρέπει να βάλετε κωδικό πρόσβασης!');
    }
	else if(password.validity.patternMismatch){
        password.setCustomValidity('Ο κωδικός δεν πληρεί τα απαραίτητα κριτήρια για να είναι αρκετά ισχυρός!');
    }
    else{
        password.setCustomValidity('');
    }
}

function passwordMatchCheck(){
	if(confirmPassword.validity.valueMissing){
        confirmPassword.setCustomValidity('Επιβεβαίωσε τον παραπάνω κωδικό!');
    }
    else if(confirmPassword.value != password.value){
        confirmPassword.setCustomValidity("Ο κωδικός δεν ταιριάζει με τον κωδικό παραπάνω!");
    }else{
        confirmPassword.setCustomValidity('');
    }
}

//Event Listeners

firstName.addEventListener('input', () => firstNameCheck());
firstName.addEventListener('invalid', () => firstNameCheck());

lastName.addEventListener('input', () => lastNameCheck());
lastName.addEventListener('invalid', () => lastNameCheck());

email.addEventListener('input', () => emailCheck());
email.addEventListener('invalid', () => emailCheck());

phone.addEventListener('input', () => phoneCheck());
phone.addEventListener('invalid', () => phoneCheck());

password.addEventListener('input', () => passwordValidity());
password.addEventListener('invalid', () => passwordValidity());

confirmPassword.addEventListener('input', () => passwordMatchCheck());
confirmPassword.addEventListener('invalid', () => passwordMatchCheck());