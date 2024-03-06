export interface FormAnswer{
    [key: string] : number
}

export interface Answer{
    id : number,
    user_id : number,
    city_id : number,
    answer : string,
    profile : string
}

export interface FormProfile{
    sector : number,
    type : number,
    activity : number,
    education : number,
    experience : number
}

export interface RegisterFieldProps {
    label: string;
    type: string;
    onChange: (value: string) => void;
}

export interface RegisterDropdownProps{
    label: string,
    options: string[];
    onChange: (value: string) => void
}