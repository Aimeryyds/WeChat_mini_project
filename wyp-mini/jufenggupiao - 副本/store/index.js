Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = configStore;

var _redux = require("./../npm/redux/lib/index.js");

var _reduxPromise = require("./../npm/redux-promise/lib/index.js");

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require("./reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function configStore() {
    var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));
    // store.subscribe(() => {
    //   console.log(store.getState())
    // });
        return store;
}