export const LOGIN = 'LOGIN';

export const authReducer = (state = {}, action: any) => {
    switch (action.type) {
        case LOGIN:
            return { token: action.token  };
        default:
            return state;
    }
}