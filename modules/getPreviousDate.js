// Here your code for the get previous date function goes
// your code here
const lastDayOfMonth = require('./lastDayOfMonth');

function getPreviousDate(month, day, year) {
    if (day > 1) {
        return { month, day: day - 1, year };
    } else {
        if (month > 1) {
            return { month: month - 1, day: lastDayOfMonth(month - 1, year), year };
        } else {
            return { month: 12, day: 31, year: year - 1 };
        }
    }
}

module.exports = getPreviousDate;
// you can refer to the getNextDate function and make minor changes