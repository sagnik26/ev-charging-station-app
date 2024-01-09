export function getFormattedDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth()+1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()+1;
    const currdate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

    return `${year}-${month}-${currdate}`;
}

