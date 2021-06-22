import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/ui-slice';
import todosSlice from './slices/todos-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        todos: todosSlice.reducer,
    },
});

export default store;
