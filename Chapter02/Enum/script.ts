enum PermissionLevel {
    STUDENT,
    INSTRUCTOR,
    ADMIN,
}

interface User {
    name: string;
    age: number;
    courses: string[];
}

interface UserExtended extends User {
    permissionLevel?: PermissionLevel;
}

const user1: UserExtended = {
    name: 'Horst',
    age: 800,
    permissionLevel: PermissionLevel.INSTRUCTOR,
    courses: ['C+', 'C++', 'Python', 'Typescript'],
};

const user2: UserExtended = {
    name: 'Klaus',
    age: 5,
    courses: ['Java', 'C#'],
    permissionLevel: PermissionLevel.STUDENT,
};

function printUser(user: UserExtended) {
    console.log(user);
}
