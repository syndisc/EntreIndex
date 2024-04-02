export interface Login{
    email : string,
    password : string
}

export interface Register{
    first_name : string,
    last_name : string,
    phone_number : string,
    gender : string,
    company : string,
    email : string,
    password : string
    dob : string
}

export interface User{
    id : string,
    first_name : string,
    last_name : string
}

export interface UserProfile{
    id : string,
    company : string,
    email : string,
    first_name : string,
    last_name : string,
    password : string,
    gender : string,
    phone_number : string
}