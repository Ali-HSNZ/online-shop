import http from "./http";

export const userSignup = (data)=>{
    const { name , email, password} =  data
    return http.post('https://api.freerealapi.com/auth/register' , {name , email, password})
}
