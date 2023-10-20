

export const dateFormat = (date: string) => {
let dateObj = new Date(date);

let hours = String(dateObj.getUTCHours()).padStart(2, '0');
let minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');

return `${hours}:${minutes}`;
}

export const setByTimezone = (time: Date): Date => {
    const newTime = new Date(time);
    const date: Date = new Date()
    const difference: number = -date.getTimezoneOffset() / 60
    newTime.setHours(time.getHours() + difference)
    return newTime;
}