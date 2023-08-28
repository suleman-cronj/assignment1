import { createModel } from '@rematch/core';
import { userReducer } from './user.reducer';
import { userState } from './user.state';

import { RootModel } from '../';

export const userModel = createModel<RootModel>()({
    state: userState,
    reducers: userReducer,
});
