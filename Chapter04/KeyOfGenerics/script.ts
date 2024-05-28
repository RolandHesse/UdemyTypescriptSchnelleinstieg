interface User {
    name: string;
    id: number;
    age: number;
}

interface Admin {
    name: string;
}

function printProperty<T>(obj: T, key: keyof T) {
    console.log(obj[key]);
}

const user1: User = { name: 'Hans', id: 8000, age: 27 };

printProperty(user1, 'age');

const admin1: Admin = { name: 'El Grande Administrador' };

printProperty(admin1, 'name');
