export const generateEmptyTextByLength = (length) => {
    let result = '';
    Array(length).fill(null).map((i, index) => {
        if (index % 2 === 0) result += '\xa0';
        if (index % 2 === 1) result += ' ';
        return true;
    })
    return result;
}