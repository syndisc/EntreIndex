export interface FormAnswer{
    [key: string] : number
}

export interface Answer{
    result:[{
        id : number,
        user_id : number,
        city_id : number,
        answer : string,
        profile : string,
        createdAt : string,
        total : number
    }],
    minFeatCity : number,
    minDimCity : number
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