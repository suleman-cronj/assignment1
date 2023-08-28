import { Models } from '@rematch/core';
import { userModel } from './user';

export interface RootModel extends Models<RootModel> {
    userModel: typeof userModel;
}
export const models: RootModel = { userModel };
