async function userlog(){
    let response = await sendData();
    console.log(response);
}

function formToJSON() {
    return { 
    	"Email": email1.value,
    	"Passwrod": password1.value
	}
}

async function sendData() {
	let data = formToJSON();
    console.log(data)
    showProfile(data)
	const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(data)
    }
    let resp = await fetch('http://localhost:8080'+'/userProfile', options)
    return resp
}


function showProfile(data){
    var firstName;
    var email;
    var lastName;
    var phone;
    var templates = {}
    email=data.Email;
        let profiledisplay= document.getElementById("user-details-template");
        templates.usersDetails = Handlebars.compile(profiledisplay.textContent);

        var usersShow = templates.usersDetails({
            user : [
                { email : email,
                }
            ]
        });
        document.getElementById("userProfile").innerHTML += usersShow;   

};