export const SELECTED_USER = "SELECTED_USER";
export const CLEAN_USER = "CLEAN_USER";

export const selectedUser = id => ({
    type: SELECTED_USER,
    userId: id
})

export const cleanUser = () => ({
    type: CLEAN_USER
})