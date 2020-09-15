//Validation
const isEmailValid = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

const isPassValid = (pass) => {
	let lowerCaseLetters = /[a-z]/g, upperCaseLetters = /[A-Z]/g, numbers = /[0-9]/g;

	const response = !pass.match(lowerCaseLetters) || !pass.match(upperCaseLetters) || !pass.match(numbers) || !(pass.length >= 8) ? false : true;
	return response;
}

//Responses
const emptyFields = () => {
	alert("Required fields are missing!"); 
	return false;
}

const invalidCredentials = () => {
	alert("Invalid Email Address OR Password!");
	return false;
}

const success = () => {
	alert("Success!")
	return true;
}

//Form validation
const validateForm = () => {
	let email = document.getElementsByTagName("input").email.value;
	let pass = document.getElementsByTagName("input").password.value;
	
	const ans = email == '' || pass == '' ? emptyFields() : (!isEmailValid(email) || !isPassValid(pass) ? invalidCredentials() : true);
  return !ans ? false : success();
}