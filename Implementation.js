const FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
const LAST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
const EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
const PHONE_NUMBER_PATTERN = new RegExp("^([0-9]{2}[ ]+)?[0-9]{10}$");
const PASSWORD_PATTERN = new RegExp("^([A-Z]{1,})*([(@#$*)-])*[a-zA-Z0-9]{6,}$");

class Implementation {

    firstNameValidator = (firstname) => {

        if (FIRST_NAME_PATTERN.test(firstname)) {
            console.log("valid First Name");
            return true;
        }
        else {
            console.log("Invalid First Name");
            return false;
        }
    }

    lastNameValidator = (lastname) => {

        if (LAST_NAME_PATTERN.test(lastname)) {
            console.log("valid Last Name");
            return true;
        }
        else {
            console.log("Invalid Last Name");
            return false;
        }
    }

    emailValidator = (email) => {

        if (EMAIL_PATTERN.test(email)) {
            console.log("valid Email");
            return true;
        }
        else {
            console.log("Invalid Email");
            return false;
        }
    }

    phoneNumberValidator = (phoneNumber) => {

        if (PHONE_NUMBER_PATTERN.test(phoneNumber)) {
            console.log("valid Phone Number");
            return true;
        }
        else {
            console.log("Invalid Phone Number");
            return false;
        }
    }

    passwordValidator = (password) => {

        if (PASSWORD_PATTERN.test(password)) {
            console.log("valid Password");
            return true;
        }
        else {
            console.log("Invalid Password");
            return false;
        }
    }
}
module.exports = new Implementation();