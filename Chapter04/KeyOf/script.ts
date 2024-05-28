interface User {
    name: string;
    id: number;
    age: number;
}

function printUserProperty(user: User, key: keyof User) {
    console.log(user[key]);
}

const user1: User = { name: 'Hans', id: 8000, age: 27 };

printUserProperty(user1, 'name');
