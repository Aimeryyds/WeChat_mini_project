Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.getTimerId = exports.saveTimerId = exports.getDateAttribute = undefined;

var ATTR_TIMEAGO_TID = "timeago-tid";

var ATTR_DATETIME = "datetime";

/**
 * get the node attribute, native DOM and jquery supported.
 * @param node
 * @param name
 * @returns {*}
 */ var getAttribute = function getAttribute(node, name) {
    if (node.getAttribute) return node.getAttribute(name);
    // native dom
        if (node.attr) return node.attr(name);
    // jquery dom
};

/**
 * get the datetime attribute, `data-timeagp` / `datetime` are supported.
 * @param node
 * @returns {*}
 */ var getDateAttribute = function getDateAttribute(node) {
    return getAttribute(node, ATTR_DATETIME);
};

/**
 * set the node attribute, native DOM and jquery supported.
 * @param node
 * @param timerId
 * @returns {*}
 */ exports.getDateAttribute = getDateAttribute;

var saveTimerId = function saveTimerId(node, timerId) {
    if (node.setAttribute) return node.setAttribute(ATTR_TIMEAGO_TID, timerId);
    if (node.attr) return node.attr(ATTR_TIMEAGO_TID, timerId);
};

exports.saveTimerId = saveTimerId;

var getTimerId = function getTimerId(node) {
    return getAttribute(node, ATTR_TIMEAGO_TID);
};

exports.getTimerId = getTimerId;