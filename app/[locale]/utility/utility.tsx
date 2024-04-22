export function ChangeSpace(text : string){
    return text.replaceAll('_', ' ')
}

export function ChangeToIndex(int : number){
    const total = (int - 50) /150 * 100
    return total.toFixed(2)
}