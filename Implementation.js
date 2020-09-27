
class Implementation {

    firstNameValidator(name) {
        let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (FIRST_NAME_PATTERN.test(name)) {
            console.log("valid First Name");
        }
        else {
            console.log("Invalid First Name");
        }
    }

    lastNameValidator(name) {
        let LAST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (LAST_NAME_PATTERN.test(name)) {
            console.log("valid Last Name");
        }
        else {
            console.log("Invalid Last Name");
        }
    }

    emailValidator(email) {
        let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");

        if (EMAIL_PATTERN.test(email)) {
            console.log("valid Email");
        }
        else {
            console.log("Invalid Email");
        }
    }
}
module.exports = new Implementation();