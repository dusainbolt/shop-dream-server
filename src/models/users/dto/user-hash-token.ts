import { Role } from './user-enum';
export class UserHashToken {
    _id: string;

    fullName: string;

    userName: string;

    email: string;

    roles: Role;
}
