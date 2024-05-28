type User = {
    name: string;
    age: number;
    courses: string[];
};

type UserExtended = User & {
    permissionLevel?: string;
};

type Permission = {
    permissionLevel?: string;
};

type UserExtended2 = User & Permission;

const user1: UserExtended = {
    name: 'Horst',
    age: 800,
    permissionLevel: 'Instructor',
    courses: ['C+', 'C++', 'Python', 'Typescript'],
};

const user2: UserExtended = {
    name: 'Klaus',
    age: 5,
    courses: ['Java', 'C#'],
};

function printUser(user: UserExtended) {
    console.log(user);
}
