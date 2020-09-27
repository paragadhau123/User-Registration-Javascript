const print = require('./Implementation');
class Main {
    main() {
        console.log("---Welcome to User Validation---\n");
        console.log("\t--MENU--");
        console.log("1: Validate First Name          ");
        console.log("2: Validate Last Name         ");
        console.log("3: Validate Email Address       ");
        console.log("4: Validate Phone Number        ");
        console.log("5: Validate Password            ");
        console.log("6: Exit                       \n");
        console.log("---Enter Your Choice---         ");
        var readline = require('readline');
        var input = readline.createInterface(process.stdin, process.stdout);
        input.question("Enter Choice :", function (option) {
            switch (option) {
                case "1":
                    input.question("Enter First Name: \n", function (firstName) {
                        print.firstNameValidator(firstName);
                    })
                    break;
                case "2":
                    input.question("Enter Last Name: \n", function (lastName) {
                        print.lastNameValidator(lastName);
                    })
                    break;
                case "3":
                    input.question("Enter Email Address: \n", function (email) {
                        print.emailValidator(email);
                    })
                    break;
                case "4":
                    input.question("Enter Phone Number: \n", function (phoneNumber) {
                        print.phoneNumberValidator(phoneNumber);
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