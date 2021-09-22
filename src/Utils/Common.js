// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('jerp_user_details');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

export const getTokenExpiresTime = () => {
    return getUser().token.expires_at || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    // sessionStorage.removeItem('token');
    sessionStorage.removeItem('jerp_user_details');
}

// set the token and user from the session storage
// export const setUserSession = (token, user) => {
export const setUserSession = (user) => {
    // sessionStorage.setItem('token', token);
    sessionStorage.setItem('jerp_user_details', JSON.stringify(user));
}