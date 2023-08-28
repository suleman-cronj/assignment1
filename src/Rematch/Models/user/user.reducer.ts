import { userInterface } from './user.interface';

export const userReducer = {
    changeSelectedUser(state: userInterface, user: userInterface): userInterface {
        return {
            ...state,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            avatar: user.avatar,
        };
    },
};
