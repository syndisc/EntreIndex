export interface FormAnswer{
    [key: number] : number
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