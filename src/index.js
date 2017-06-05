
var getMilliSeconds = function(num,period) {

    switch (period) {
        case 'second':
            return num * 1000;
        case 'minute':
            return num * 60 * 1000;
        case 'hour':
            return num * 60 * 60 * 1000;
        case 'day':
            return num * 24 * 60 * 60 * 1000;
        case 'week':
            return num * 7 * 24 * 60 * 60 * 1000;

    }
}

var plusDate = function(date,num,period) {
    newDateMilli = getMilliSeconds(num,period) + date.getTime();
    return new Date(newDateMilli);
};

var minusDate = function(date,num,period) {
    newDateMilli = date.getTime() - getMilliSeconds(num,period);
    return new Date(newDateMilli);
};

module.exports = {
    minusDate:minusDate,
    plusDate:plusDate
};