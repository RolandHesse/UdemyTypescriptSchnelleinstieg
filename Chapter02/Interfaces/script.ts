type User = { name: string; age: number; courses: string[] };
interface UserInterface {
    name: string;
    age: number;
    courses: string[];
}

const user1 = {
    name: 'Horst',
    age: 800,
    courses: ['C+', 'C++', 'Python', 'Typescript'],
};

const user2 = {
    name: 'Klaus',
    age: 5,
    courses: ['Java', 'C#'],
};

function printUser(user: UserInterface) {
    console.log(user);
}
