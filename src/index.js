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

var monthsShort = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var monthsLong = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var shortForm = function(date) {
    var day = date.getDate() > 9 ? date.getDate() : "0"+date.getDate();
    var month = monthsShort[date.getMonth()]
    var year = date.getFullYear();
    return day + " " + month + " " + year;
    };

var longForm = function(date) {
    var day = date.getDate() > 9 ? date.getDate() : "0"+date.getDate();
    var month = monthsLong[date.getMonth()]
    var year = date.getFullYear();
    return day + " " + month + " " + year;
    };


module.exports = {
    minusDate:minusDate,
    plusDate:plusDate,
    shortForm:shortForm,
    longForm:longForm
};
