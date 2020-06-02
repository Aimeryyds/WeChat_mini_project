Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.nextInterval = exports.diffSec = exports.formatDiff = exports.toDate = exports.toInt = undefined;

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */ var SEC_ARRAY = [ 60, 60, 24, 7, 4.345238095238096, 12 ];

/**
 * change f into int, remove decimal. Just for code compression
 * @param f
 * @returns {number}
 */ var toInt = function toInt(f) {
    return parseInt(f);
};

/**
 * format Date / string / timestamp to Date instance.
 * @param input
 * @returns {*}
 */ exports.toInt = toInt;

var toDate = function toDate(input) {
    if (input instanceof Date) return input;
    if (!isNaN(input) || /^\d+$/.test(input)) return new Date(toInt(input));
    input = (input || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
    // -04:00 -> -0400
        return new Date(input);
};

/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns {string | void | *}
 */ exports.toDate = toDate;

var formatDiff = function formatDiff(diff, localeFunc) {
    // if locale is not exist, use defaultLocale.
    // if defaultLocale is not exist, use build-in `en`.
    // be sure of no error when locale is not exist.
    var i = 0, agoin = diff < 0 ? 1 : 0, 
    // timein or timeago
    total_sec = diff = Math.abs(diff);
    for (;diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
        diff /= SEC_ARRAY[i];
    }
    diff = toInt(diff);
    i *= 2;
    if (diff > (i === 0 ? 9 : 1)) i += 1;
    return localeFunc(diff, i, total_sec)[agoin].replace("%s", diff);
};

/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param nowDate
 * @returns {number}
 */ exports.formatDiff = formatDiff;

var diffSec = function diffSec(date, nowDate) {
    nowDate = nowDate ? toDate(nowDate) : new Date();
    return (nowDate - toDate(date)) / 1e3;
};

/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/ exports.diffSec = diffSec;

var nextInterval = function nextInterval(diff) {
    var rst = 1, i = 0, d = Math.abs(diff);
    for (;diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
        diff /= SEC_ARRAY[i];
        rst *= SEC_ARRAY[i];
    }
    d = d % rst;
    d = d ? rst - d : rst;
    return Math.ceil(d);
};

exports.nextInterval = nextInterval;