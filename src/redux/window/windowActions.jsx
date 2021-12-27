import { 
    WINDOW_CART,
    WINDOW_USER,
    WINDOW_SEARCH,
    WINDOW_HOME,
    WINDOW_MENU,

    WINDOW_IS_USER_SIGNUP,
    WINDOW_IS_USER_LOGIN,
    WINDOW_IS_USER_PROFILE,

    WINDOW_IS_MENU,
    WINDOW_IS_SEARCH
} from "./windowTypes";


export const windowCart = () => {
    return {type : WINDOW_CART}
}

export const windowUser = (isUser) => {
    return {type : WINDOW_USER , payLoad : isUser}
}

export const windowSearch = () => {
    return {type : WINDOW_SEARCH}
}

export const windowHome = () => {
    return {type : WINDOW_HOME}
}

export const windowMenu = () => {
    return {type : WINDOW_MENU}
}

export const windowIsUserLogin = (isUserLogin) => {
    return {type : WINDOW_IS_USER_LOGIN , payLoad : isUserLogin}
}

export const windowIsUserSignup = (isUserSignup) => {
    return {type : WINDOW_IS_USER_SIGNUP , payLoad : isUserSignup}
}

export const windowIsUserProfile = (isUserProfile) => {
    return {type : WINDOW_IS_USER_PROFILE , payLoad : isUserProfile}
}

export const windowIsMenu = (isMenu) => {
    return {type : WINDOW_IS_MENU , payLoad : isMenu}
}

export const windowIsSearch = (isSearch) => {
    return {type : WINDOW_IS_SEARCH , payLoad : isSearch}
}

