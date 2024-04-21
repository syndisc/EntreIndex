export function ChangeSpace(text : string){
    return text.replaceAll('_', ' ')
}

export function ChangeToIndex(int : number){
    return (int - 50) /150
}