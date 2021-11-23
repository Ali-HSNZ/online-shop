import http from "./http";

export const signupUser = (data)=>{
    return http.post('https://fakestoreapi.com/users' , data)
}
