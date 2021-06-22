import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        isLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { isLoading } = uiSlice.actions;

export default uiSlice;
