async function userSignUp(){
    let response = await sendData();
}

function formToJSON() {
    return { 
		"FirstName": firstName.value,
    	"LastName": lastName.value,
    	"Address": address.value,
    	"Phone": phone.value,
    	"Email": email.value,
    	"Password": password.value
	}
}

async function sendData() {
	let data = formToJSON();
	const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    let resp = await fetch("http://localhost:8080" + '/signUp', options)
    return resp
}