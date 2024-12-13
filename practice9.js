//  You are creating a website for your collage. Create a class User with 2 properties name and email. It also has a method called viewData() that allows user to view website data.
// Create a new class called Admin which inherits from user. Add a new method called editData to admin that allows it tro edit website data.

let Data = "Scecrete Data"


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data=", Data);
    }
}



class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData () {
        Data = "Some New Data";
        
    }
}

let Student1 = new User("Shubham", "abc@gmail.com");
let Student2 = new User("Rishabh", "abc@gmail.com");
// let Student3 = new User();
let admin1 = new Admin("admin", "admin@gmail.com");
