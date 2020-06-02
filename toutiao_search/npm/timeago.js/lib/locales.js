Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.getLocale = exports.register = undefined;

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */ var EN = "second_minute_hour_day_week_month_year".split("_");

var ZH = "秒_分钟_小时_天_周_个月_年".split("_");

var zh_CN = function zh_CN(number, index) {
    if (index === 0) return [ "刚刚", "片刻后" ];
    var unit = ZH[parseInt(index / 2)];
    return [ "".concat(number, " ").concat(unit, "前"), "".concat(number, " ").concat(unit, "后") ];
};

var en_US = function en_US(number, index) {
    if (index === 0) return [ "just now", "right now" ];
    var unit = EN[parseInt(index / 2)];
    if (number > 1) unit += "s";
    return [ "".concat(number, " ").concat(unit, " ago"), "in ".concat(number, " ").concat(unit) ];
};

/**
 * 所有的语言
 * @type {{en: function(*, *), zh_CN: function(*, *)}}
 */ var Locales = {
    en_US: en_US,
    zh_CN: zh_CN
};

/**
 * 注册语言
 * @param locale
 * @param func
 */ var register = function register(locale, func) {
    Locales[locale] = func;
};

/**
 * 获取语言函数
 * @param locale
 * @returns {*}
 */ exports.register = register;

var getLocale = function getLocale(locale) {
    return Locales[locale] || en_US;
};

exports.getLocale = getLocale;