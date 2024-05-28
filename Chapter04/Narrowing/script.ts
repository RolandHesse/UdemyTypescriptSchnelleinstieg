class User {
    name: string;
    id: number;

    constructor(nameInput: string, idInput: number) {
        this.name = nameInput;
        this.id = idInput;
    }
}

class Admin {
    name: string;

    constructor(nameInput: string) {
        this.name = nameInput;
    }
}

function printInfo(arg: User | Admin) {
    if ('id' in arg) {
        console.log(arg.name, arg.id);
    } else {
        console.log(arg.name);
    }
}

function printInfo2(arg: User | Admin) {
    if (arg instanceof User) {
        console.log(arg.name, arg.id);
    } else {
        console.log(arg.name);
    }
}

const user1: User = { name: 'Peter', id: 1 };

printInfo(user1);

const user2 = new User('Klaus', 2);

printInfo2(user2);
