import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACTS", // CONTACTS, CHAT, CALLS
    }
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
    },
});

export default slice.reducer;

export function ToggleSidebar() {
    return (dispatch) => {
        dispatch(slice.actions.toggleSidebar());
    };
}

export function UpdateSidebarType(type) {
    return (dispatch) => {
        dispatch(slice.actions.updateSidebarType({ type }));
    };
}
