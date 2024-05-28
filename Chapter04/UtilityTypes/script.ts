interface User {
    name: string;
    id?: number;
    email?: string;
}

type UserOptional = Partial<User>;

function updateUserData(user: User, data: UserOptional) {
    return { ...user, ...data };
}

let user1: User = { name: 'Otto', id: 123 };

console.log(user1);

user1 = updateUserData(user1, { email: 'otto@anna.com' });

console.log(user1);

type UserRequired = Required<User>;

type UserBaseInfo = Pick<User, 'name' | 'id'>;

type UserBaseInfo2 = Omit<User, 'email'>;
