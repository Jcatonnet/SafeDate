

export const dateFormat = (date: string) => {
let dateObj = new Date(date);

let hours = String(dateObj.getUTCHours()).padStart(2, '0');
let minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');

return `${hours}:${minutes}`;
}