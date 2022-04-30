export const setUserToSessionStorage = (user)=>{
    sessionStorage.setItem('user',JSON.stringify(user))
}
export const getUserFromSessionStorage = ()=>{
    return JSON.parse(sessionStorage.getItem('user'))
}
export const removeUserFromSessionStorage = ()=>{
    sessionStorage.removeItem('user')
}
