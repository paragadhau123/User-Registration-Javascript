
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
}
module.exports = new Implementation();