export function formattedDate(input : Date) : string {
    return input.getDate() + '.' + (input.getMonth() + 1) + '.' + input.getFullYear(); 
}