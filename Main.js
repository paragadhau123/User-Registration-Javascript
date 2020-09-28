const print = require('./Implementation');
var readline = require('readline');
var input = readline.createInterface(process.stdin, process.stdout);

class Main {

    main = () => {
        console.log("---Welcome to User Validation---\n");
        console.log("\t--MENU--");
        console.log("1: Validate First Name          ");
        console.log("2: Validate Last Name         ");
        console.log("3: Validate Email Address       ");
        console.log("4: Validate Phone Number        ");
        console.log("5: Validate Password            ");
        console.log("---Enter Your Choice---         ");
        input.question("Enter Choice :", function (option) {
            switch (option) {

                case "1":
                    input.question("Enter First Name: \n", function (firstName) {
                        Boolean = print.firstNameValidator(firstName);
                        process.exit();
                    })
                    break;

                case "2":
                    input.question("Enter Last Name: \n", function (lastName) {
                        print.lastNameValidator(lastName);
                        process.exit();
                    })
                    break;

                case "3":
                    input.question("Enter Email Address: \n", function (email) {
                        print.emailValidator(email);
                        process.exit();
                    })
                    break;

                case "4":
                    input.question("Enter Phone Number: \n", function (phoneNumber) {
                        print.phoneNumberValidator(phoneNumber);
                        process.exit();
                    })
                    break;

                case "5":
                    input.question("Enter Password: \n", function (password) {
                        print.passwordValidator(password);
                        process.exit();
                    })
                    break;

                default:
                    console.log("Enter Valid option");
                    break;
            }
        })

    }
}
const object = new Main();
object.main();