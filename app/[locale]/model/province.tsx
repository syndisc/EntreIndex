export interface Province{
    id : number,
    country_id : number,
    name : string
}

export interface City{
    id : number,
    province_id : number,
    name : string
}

export interface AverageProvince{
    avg: "",
    name: ""        
}

export interface AverageCity{
    avg: "",
    city_name: ""
}