module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classes.js":
/*!********************!*\
  !*** ./classes.js ***!
  \********************/
/*! exports provided: Event, Calendar, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/methods */ "./utils/methods.js");

class Event {
  constructor(JSONObject, isEmpty) {
    this.startTime = new Date(JSONObject.startTime);
    this.endTime = new Date(JSONObject.endTime);
    this.duration = parseInt((this.endTime - this.startTime) / 60000);
    this.location = JSONObject.location == undefined ? undefined : JSONObject.location;
    this.description = JSONObject.description == undefined ? undefined : JSONObject.description;
    this.id = JSONObject.id == undefined ? Object(_utils_methods__WEBPACK_IMPORTED_MODULE_0__["generateUUID"])() : JSONObject.id;
    this.calendarTitle = JSONObject.calendarTitle == undefined ? undefined : JSONObject.calendarTitle;
    this.ignore = JSONObject.ignore == undefined ? undefined : JSONObject.ignore;
    this.ignoreReason = JSONObject.ignoreReason == (undefined || "") ? undefined : JSONObject.ignoreReason;

    if (!isEmpty) {
      this.isEmpty = false;
      this.title = JSONObject.title;
      this.color = JSONObject.color;
    } else this.isEmpty = true;
  }

  isAllDayEvent() {
    return this.duration >= 1440;
  }

  isEmpty() {
    return this.isEmpty;
  }

  getStartTimeSrting() {
    return this.startTime.getHours() + ":" + (this.startTime.getMinutes() < 10 ? "0" : "") + this.startTime.getMinutes();
  }

  getEndTimeSting() {
    return this.endTime.getHours() + ":" + (this.endTime.getMinutes() < 10 ? "0" : "") + this.endTime.getMinutes();
  }

  getDurationString() {
    return this.getStartTimeSrting() + " - " + this.getEndTimeSting();
  }

}
class Calendar {
  constructor(JSONObject) {
    this.title = JSONObject.title;
    this.color = JSONObject.color;
    this.label = this.title;
    this.events = JSONObject.events.map(event => {
      event.calendarTitle = this.title;
      return new Event(event);
    });
  }

}
class User {
  constructor(JSONObject) {
    this.username = JSONObject.username;
    this.calendars = JSONObject.calendars.map(calendar => {
      return new Calendar(calendar);
    });
  }

}

/***/ }),

/***/ "./comps/DayView.js":
/*!**************************!*\
  !*** ./comps/DayView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventCard */ "./comps/eventCard.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rsuite */ "rsuite");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes */ "./classes.js");
var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\comps\\DayView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class DayView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "clickHandler", () => {
      this.props.openEventEditDialog(this.props.event);
    });

    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return this.props.events.map(event => {
      event = new _classes__WEBPACK_IMPORTED_MODULE_3__["Event"](event, event.isEmpty);
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["FlexboxGrid"], {
        key: event.id,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["FlexboxGrid"].Item, {
        colspan: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("p", {
        style: {
          color: "white",
          fontSize: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, event.isEmpty ? "" : event.getStartTimeSrting())), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["FlexboxGrid"].Item, {
        colspan: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(_eventCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        event: event,
        openEventEditDialog: this.props.openEventEditDialog,
        openEventCreateDialog: this.props.openEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DayView);

/***/ }),

/***/ "./comps/eventCard.js":
/*!****************************!*\
  !*** ./comps/eventCard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ "./classes.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rsuite */ "rsuite");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\comps\\eventCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EventCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      elevation: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEmptyCardClick = this.handleEmptyCardClick.bind(this);
  }

  handleClick() {
    this.props.openEventEditDialog(this.props.event);
  }

  handleEmptyCardClick() {
    this.props.openEventCreateDialog(this.props.event);
  }

  emptyCard(startTime, endTime) {
    endTime = endTime;
    startTime = startTime;
    const duration = (endTime - startTime) / 60000;
    var cardStyle = {
      height: duration,
      backgroundColor: "transparent",
      borderBottomStyle: endTime.getMinutes() == 0 ? "solid" : "none",
      borderBottomColor: "#333333",
      borderBottomWidth: 1,
      borderTopStyle: startTime.getMinutes() == 0 ? "solid" : "none",
      borderTopColor: "#333333",
      borderTopWidth: 1
    };
    return __jsx("div", {
      style: cardStyle,
      key: startTime.getTime(),
      onClick: this.handleEmptyCardClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    });
  }

  EmptySections(start, end) {
    if (end.getHours() < start.getHours()) {
      end.setHours(23, 59, 59);
    }

    var arr = new Array(end.getHours() - start.getHours() + 1);

    if (start.getHours() == end.getHours()) {
      arr[0] = this.emptyCard(start, end);
    } else if (start.getHours() + 1 == end.getHours()) {
      var a = new Date(end);
      a.setMinutes(0);
      arr[0] = this.emptyCard(start, a);
      arr[1] = this.emptyCard(a, end);
    } else {
      var a = new Date(start);
      a.setHours(start.getHours() + 1, 0);
      arr[0] = this.emptyCard(start, a);

      for (var i = start.getHours() + 1, j = 1; i < end.getHours(); i++, j++) {
        var a = new Date(start);
        a.setHours(i, 0);
        var b = new Date(start);
        b.setHours(i + 1, 0);
        arr[j] = this.emptyCard(a, b);
      }

      var a = new Date(end);
      a.setMinutes(0);
      arr[end.getHours() - start.getHours()] = this.emptyCard(a, end);
    }

    return arr;
  }

  render() {
    if (this.props.event instanceof _classes__WEBPACK_IMPORTED_MODULE_1__["Event"]) {
      if (this.props.event.isEmpty) {
        return this.EmptySections(this.props.event.startTime, this.props.event.endTime).map(emptyCard => {
          return emptyCard;
        });
      } else {
        const style = {
          height: this.props.height != undefined ? this.props.height : this.props.event.duration,
          backgroundImage: "linear-gradient(315deg, " + this.props.event.color[0] + " 0%, " + this.props.event.color[1] + " 100%)",
          fontSize: 8,
          paddingLeft: 16,
          paddingTop: 10,
          marginTop: this.props.height != undefined ? 15 : 0,
          paddingBottom: 6,
          opacity: this.props.event.ignore ? 0.2 : 1
        };
        /** compose event info of card */

        var lineAmount = this.props.height != undefined ? parseInt(this.props.height / 20) > 1 ? parseInt(this.props.height / 20) - 1 : 1 : parseInt(this.props.event.duration / 20) > 1 ? parseInt(this.props.event.duration / 20) - 1 : 1;
        var eventInfo = [];
        eventInfo.push(this.props.event.isAllDayEvent() ? __jsx("p", {
          key: "title",
          style: {
            color: "white"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, this.props.event.title, " ") : __jsx("p", {
          key: "title",
          style: {
            color: "white"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, this.props.event.title, " ", __jsx("strong", {
          style: {
            marginLeft: 16,
            color: "rgba(255,255,255,0.4)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, this.props.event.getDurationString())));
        if (!this.props.event.isAllDayEvent()) eventInfo.push(__jsx("p", {
          style: {
            color: "rgba(255,255,255,0.8)"
          },
          key: "duration",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, this.props.event.duration, " \u5206\u9418"));else {
          eventInfo.push(__jsx("p", {
            style: {
              color: "rgba(255,255,255,0.8)"
            },
            key: "duration",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, "\u5168\u5929\u4E8B\u4EF6"));
        }
        eventInfo.push(__jsx("p", {
          style: {
            color: "rgba(255,255,255,0.8)"
          },
          key: "cal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, this.props.event.calendarTitle));
        if (this.props.event.ignore == true) return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["Whisper"], {
          placement: "right",
          delayHide: 0,
          trigger: "hover",
          speaker: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, "\u8A72\u4E8B\u4EF6\u5DF2\u88AB\u5FFD\u7565\uFF0C\u539F\u56E0\u70BA", this.props.event.ignoreReason),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
          style: style,
          onClick: this.handleClick,
          key: this.props.event.id,
          bodyFill: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, eventInfo.slice(0, lineAmount).map(info => {
          return info;
        })));else {
          return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
            style: style,
            onClick: this.handleClick,
            key: this.props.event.id,
            bodyFill: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, eventInfo.slice(0, lineAmount).map(info => {
            return info;
          }));
        }
      }
    } else {
      console.error("渲染事件卡片時接收到了不符合規範的 Event 物件。");
      return null;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EventCard);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: backendURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backendURL", function() { return backendURL; });
const backendURL = "https://calendar-ten.now.sh"; // export const backendURL = "http://localhost:3000";

/***/ }),

/***/ "./node_modules/rsuite/lib/styles/themes/dark/index.less":
/*!***************************************************************!*\
  !*** ./node_modules/rsuite/lib/styles/themes/dark/index.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker */ "react-day-picker");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _comps_DayView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/DayView */ "./comps/DayView.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes */ "./classes.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/methods */ "./utils/methods.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rsuite */ "rsuite");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rsuite_lib_styles_themes_dark_index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rsuite/lib/styles/themes/dark/index.less */ "./node_modules/rsuite/lib/styles/themes/dark/index.less");
/* harmony import */ var rsuite_lib_styles_themes_dark_index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rsuite_lib_styles_themes_dark_index_less__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const duration = 600;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};
const transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};

function startOfDay(date) {
  date = new Date(date);
  var time = new Date();
  time.setTime(date.getTime());
  time.setHours(0, 0, 0);
  return time;
}

function endOfDay(date) {
  date = new Date(date);
  var time = new Date();
  time.setTime(date.getTime());
  time.setHours(23, 59, 59);
  return time;
}

function fillEvents(events, date) {
  var filled = new Array();
  var time = startOfDay(date);
  events.map(event => {
    var startTime = new Date(event.startTime);
    var endTime = new Date(event.endTime);

    if (startTime.getHours() > endTime.getHours()) {
      endTime.setHours(23, 59, 59);
    }

    filled.push(new _classes__WEBPACK_IMPORTED_MODULE_7__["Event"]({
      startTime: time,
      endTime: startTime
    }, true));
    filled.push(event);
    time.setTime(endTime.getTime());
  });
  filled.push(new _classes__WEBPACK_IMPORTED_MODULE_7__["Event"]({
    startTime: time,
    endTime: endOfDay(date)
  }, true));
  return filled;
}

function eventsToDispay(calendars, date) {
  var eventsToDispay = [];
  calendars.map(calendar => {
    calendar = new _classes__WEBPACK_IMPORTED_MODULE_7__["Calendar"](calendar);
    calendar.events.map(event => {
      if (event.startTime.getFullYear() == date.getFullYear() && event.startTime.getMonth() == date.getMonth() && event.startTime.getDate() == date.getDate() && !event.isAllDayEvent()) {
        eventsToDispay.push(event);
      }
    });
  });
  eventsToDispay.sort((a, b) => a.startTime - b.startTime);
  return eventsToDispay;
}

class index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      waiting: false,
      selectedDay: new Date(),
      eventsToDispay: [],
      userdata: {},
      filled: [],
      inputing: {
        title: "",
        date: "",
        time: "",
        ignore: [],
        ignoreReason: ""
      },
      editingEvent: false,
      creatingEvent: false,
      selectedEvent: new _classes__WEBPACK_IMPORTED_MODULE_7__["Event"]({
        title: "選中的事件",
        startTime: new Date(),
        endTime: new Date(),
        color: ["#fd3721", "#b721ff"],
        calendarTitle: "哈"
      })
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.openEventEditDialog = this.openEventEditDialog.bind(this);
    this.closeEventEditDialog = this.closeEventEditDialog.bind(this);
    this.openEventCreateDialog = this.openEventCreateDialog.bind(this);
    this.closeEventCreateDialog = this.closeEventCreateDialog.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  async handleDayClick(day, {
    selected
  }) {
    this.setState({
      selectedDay: selected ? new Date() : day
    });
  }

  static async getInitialProps() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_8__["backendURL"] + "/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_7__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    return {
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd
    };
  }

  componentDidMount() {
    setTimeout(() => {
      var filled = fillEvents(this.props.eventsToDispay, new Date());
      this.setState({
        filled: filled,
        userdata: this.props.userdata,
        loaded: true
      });
    }, 200);
  }

  openEventEditDialog(event) {
    this.setState({
      selectedEvent: event,
      editingEvent: true,
      inputing: {
        title: event.title,
        date: event.startTime.getFullYear() + "/" + (event.startTime.getMonth() + 1) + "/" + event.startTime.getDate(),
        time: event.startTime.getHours() + ":" + event.startTime.getMinutes() + "~" + event.endTime.getHours() + ":" + event.endTime.getMinutes(),
        ignore: [event.ignore ? "ignore" : null],
        ignoreReason: event.ignoreReason == undefined ? "" : event.ignoreReason
      }
    });
  }

  closeEventEditDialog() {
    this.setState({
      editingEvent: false
    });
  }

  openEventCreateDialog() {
    this.setState({
      creatingEvent: true,
      inputing: {
        title: event.title,
        date: this.state.selectedDay.getFullYear() + "/" + (this.state.selectedDay.getMonth() + 1) + "/" + this.state.selectedDay.getDate(),
        time: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
        calendar: {
          label: this.state.userdata.calendars[0].title,
          value: this.state.userdata.calendars[0]
        }
      }
    });
  }

  closeEventCreateDialog() {
    this.setState({
      creatingEvent: false
    });
  }

  async createEvent() {
    this.setState({
      waiting: true
    });
    var newStartTime = new Date();
    var newEndTime = new Date();
    newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
    newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
    newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
    newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
    var newdata = new _classes__WEBPACK_IMPORTED_MODULE_7__["User"](this.state.userdata);
    newdata.calendars.map(calendar => {
      if (calendar.title == this.state.inputing.calendar.label) {
        calendar.events.push(new _classes__WEBPACK_IMPORTED_MODULE_7__["Event"]({
          title: this.state.inputing.title,
          startTime: newStartTime,
          endTime: newEndTime,
          color: calendar.color
        }));
      }
    });
    await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_8__["backendURL"] + "/api/updateuserdata", {
      method: "post",
      body: JSON.stringify({
        calendars: newdata.calendars
      })
    });
    this.setState({
      creatingEvent: false
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_8__["backendURL"] + "/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_7__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    this.setState({
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd,
      waiting: false
    });
  }

  async updateEvent() {
    this.setState({
      waiting: true
    });
    var newStartTime = new Date();
    var newEndTime = new Date();
    newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
    newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
    newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
    newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
    var newdata = new _classes__WEBPACK_IMPORTED_MODULE_7__["User"](this.state.userdata);
    newdata.calendars.map(calendar => {
      calendar.events.map(event => {
        if (event.id == this.state.selectedEvent.id) {
          event.startTime = newStartTime;
          event.endTime = newEndTime;
          event.title = this.state.inputing.title;
          event.ignore = this.state.inputing.ignore.includes("ignore") ? true : false;
          event.ignoreReason = this.state.inputing.ignoreReason;
        }
      });
    });
    await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_8__["backendURL"] + "/api/updateuserdata", {
      method: "post",
      body: JSON.stringify({
        calendars: newdata.calendars
      })
    });
    this.setState({
      editingEvent: false
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_8__["backendURL"] + "/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_7__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    this.setState({
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd,
      waiting: false
    });
  }

  handleFormChange(value) {
    this.setState({
      inputing: {
        ignoreReason: value.ignoreReason,
        ignore: value.ignore,
        calendar: value.calendar,
        time: value.time,
        date: value.date,
        title: value.title
      }
    });
  }

  render() {
    var DayviewContent = __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Loader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    });

    if (this.state.userdata.calendars != undefined) {
      var calendarOptions = this.state.userdata.calendars.map(calendar => {
        return {
          label: calendar.title,
          value: calendar
        };
      });
      if (this.state.inputing.ignore != undefined) var ignoreReason = this.state.inputing.ignore.includes("ignore") ? __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "\u5FFD\u7565\u539F\u56E0"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
        name: "ignoreReason",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      })) : null;
      var filled = fillEvents(eventsToDispay(this.state.userdata.calendars, this.state.selectedDay), this.state.selectedDay);
      DayviewContent = __jsx(_comps_DayView__WEBPACK_IMPORTED_MODULE_6__["default"], {
        events: filled,
        openEventEditDialog: this.openEventEditDialog,
        openEventCreateDialog: this.openEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      });
    }

    var dayDescription = Object(_utils_methods__WEBPACK_IMPORTED_MODULE_9__["getDayDescription"])(this.state.selectedDay);
    return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, "Reacal : \u5C08\u6CE8\u65BC\u4F7F\u7528\u8005\u9AD4\u9A57\u7684\u65E5\u7A0B\u898F\u5283\u5DE5\u5177")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FlexboxGrid"], {
      justify: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FlexboxGrid"].Item, {
      componentClass: rsuite__WEBPACK_IMPORTED_MODULE_10__["Col"],
      colspan: 24,
      xs: 20,
      sm: 18,
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FlexboxGrid"], {
      justify: "space-around",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FlexboxGrid"].Item, {
      colspan: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, __jsx("div", {
      style: {
        marginTop: 80,
        marginLeft: 28
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, __jsx("h1", {
      style: {
        color: "white",
        marginBottom: 0
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, "Reacal"), __jsx("p", {
      style: {
        color: "gray",
        marginTop: 0
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, "\u5C08\u6CE8\u65BC\u4F7F\u7528\u8005\u9AD4\u9A57\u7684\u65E5\u7A0B\u898F\u5283\u5DE5\u5177")), __jsx("div", {
      style: {
        marginTop: 40
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, __jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
      selectedDays: this.state.selectedDay,
      onDayClick: this.handleDayClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    })), __jsx("div", {
      style: {
        marginLeft: 28,
        marginTop: 36
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, __jsx("h3", {
      style: {
        color: "white",
        marginBottom: 8
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, this.state.selectedDay.getFullYear(), " / ", this.state.selectedDay.getMonth() + 1, " / ", this.state.selectedDay.getDate()), __jsx("p", {
      style: {
        color: "gray",
        marginTop: 0
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, dayDescription))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FlexboxGrid"].Item, {
      colspan: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Panel"], {
      elevation: 10,
      style: {
        backgroundColor: "#222222",
        marginLeft: 60
      },
      bodyFill: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, __jsx("div", {
      style: {
        overflowY: "scroll",
        maxHeight: "100vh",
        padding: 48
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"], {
      in: this.state.loaded,
      timeout: duration,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, state => __jsx("div", {
      style: _objectSpread({}, defaultStyle, {}, transitionStyles[state]),
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, DayviewContent)))))))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
      show: this.state.editingEvent,
      "aria-labelledby": "form-dialog-title",
      width: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"].Header, {
      closeButton: true,
      onClick: this.closeEventEditDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Avatar"], {
      style: {
        backgroundImage: "linear-gradient(315deg, " + this.state.selectedEvent.color[0] + " 0%, " + this.state.selectedEvent.color[1] + " 100%)",
        color: "#ffffff"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, this.state.selectedEvent.calendarTitle.charAt(0)), " ", __jsx("h5", {
      style: {
        marginLeft: 6,
        display: "inline-block"
      },
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, this.state.selectedEvent.calendarTitle)), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Form"], {
      formValue: this.state.inputing,
      onChange: this.handleFormChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, "\u4E8B\u4EF6\u6A19\u984C"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      name: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, "\u65E5\u671F"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      name: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, "\u6642\u9593"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      name: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      accepter: rsuite__WEBPACK_IMPORTED_MODULE_10__["CheckboxGroup"],
      name: "ignore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
      value: "ignore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, "\u5FFD\u7565\u8A72\u4E8B\u9805"))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, ignoreReason))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"].Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      onClick: this.closeEventEditDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, "\u53D6\u6D88"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      appearance: "primary",
      onClick: this.updateEvent,
      loading: this.state.waiting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, "\u66F4\u65B0"))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
      show: this.state.creatingEvent,
      "aria-labelledby": "form-dialog-title",
      width: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"].Header, {
      closeButton: true,
      onClick: this.closeEventCreateDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, __jsx("h5", {
      className: "jsx-2825627972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, "\u5275\u5EFA\u65B0\u4E8B\u4EF6")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Form"], {
      formValue: this.state.inputing,
      onChange: this.handleFormChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, "\u884C\u4E8B\u66C6"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      name: "calendar",
      data: calendarOptions,
      accepter: rsuite__WEBPACK_IMPORTED_MODULE_10__["SelectPicker"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
      },
      __self: this
    }, "\u4E8B\u4EF6\u6A19\u984C"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      name: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, "\u65E5\u671F"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      name: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, "\u6642\u9593"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
      name: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    })))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Modal"].Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      onClick: this.closeEventCreateDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }, "\u53D6\u6D88"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      appearance: "primary",
      onClick: this.createEvent,
      loading: this.state.waiting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }, "\u5275\u7ACB"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2825627972",
      __self: this
    }, ".fade-enter,.fade-appear{opacity:0;}.fade-enter-active,.fade-appear-active{opacity:1;-webkit-transition:opacity 1s ease-in;transition:opacity 1s ease-in;}.fade-enter-done{opacity:1;}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;-webkit-transition:opacity 1s ease-in;transition:opacity 1s ease-in;}.fade-exit-done{opacity:0;}body{background:#222222;margin:0;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{-webkit-border-radius:10px;border-radius:10px;margin:80px 0 5px 0;}::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:rgb(80,80,80);}.DayPicker{display:inline-block;font-size:1rem;}.DayPicker-wrapper{position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-Months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\");}.DayPicker-NavButton--next{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\");}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{display:table-caption;margin-bottom:0.5em;padding:0 0.5em;text-align:left;color:white;}.DayPicker-Caption>div{font-weight:500;font-size:1.15em;}.DayPicker-Weekdays{display:table-header-group;margin-top:1em;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5em;color:#8b9898;text-align:center;font-size:0.875em;}.DayPicker-Weekday abbr[title]{border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer;color:gray;}.DayPicker-WeekNumber{display:table-cell;padding:0.5em;min-width:1em;border-right:1px solid #eaecec;color:#8b9898;vertical-align:middle;text-align:right;font-size:0.75em;cursor:pointer;}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5em;}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:0.875em;cursor:pointer;}.DayPicker-Day--today{color:white;font-weight:700;}.DayPicker-Day--outside{color:#8b9898;cursor:default;}.DayPicker-Day--disabled{color:#dce0e0;cursor:default;}.DayPicker-Day--sunday{background-color:#f7f8f8;}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa;}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff;}.DayPickerInput{display:inline-block;}.DayPickerInput-OverlayWrapper{position:relative;}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW15dWFcXGRldlxcY2FsZW5kYXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxWm1DLEFBSW1DLEFBSUEsQUFJQSxBQUdBLEFBSUEsQUFLQSxBQUdTLEFBSVQsQUFHaUIsQUFLRCxBQU9MLEFBS0gsQUFlTCxBQU1DLEFBZ0JJLEFBaUJOLEFBSU8sQUFLZ25CLEFBSXRuQixBQUlTLEFBUU4sQUFLVyxBQUtULEFBSUMsQUFRQSxBQUtLLEFBSU4sQUFJQyxBQVVBLEFBWUosQUFJRyxBQUlOLEFBVUEsQUFLRSxBQUtBLEFBUVcsQUFJWCxBQUlJLEFBT08sQUFLQSxBQU1KLEFBSUgsQUFJQSxVQTVQdEIsQUFJa0MsQUFJbEMsQUFHQSxBQUlrQyxBQUtsQyxBQU9BLEVBMEVBLEFBMEZpQyxBQVViLENBdkZwQixDQTlDaUIsQUEwSUUsQUFLQSxBQVluQixDQXhDQSxDQXpEcUIsRUE5RUUsQUFvQ1gsQUFvRFosQUFxQkEsQUE4QkEsQUF5QzZCLEFBcUI3QixBQUlXLENBdE9FLEFBa0Y4a0IsQUFtQ3prQixBQVFPLEFBYVAsQUFVQSxFQWpJQyxBQTJNbkIsQ0EvSHdCLEVBbUN4QixDQWtFQSxBQWVBLEFBS0EsQUFlYyxDQTNOUSxBQWtETixDQXZETyxBQXVDSixBQThEQSxDQTNHbkIsQUFrTEEsQ0FLQSxBQU1BLElBdEZBLEFBY2tCLEFBcUJJLEFBVUosRUFvRkcsQ0FyTnJCLEVBMkNjLEdBMEdZLENBMUhMLEFBaURELEFBYXBCLENBaUdrQixDQWpNYSxFQUxQLENBK0dGLEFBK0JhLENBckZWLEdBMkVDLENBOEZtQixLQTNCN0MsQ0E5R29CLENBakRTLElBMEhULEVBbERFLENBL0d0QixHQUtBLEFBb0RtQixBQTREbkIsSUFlc0IsQ0F0R0gsQUEyREgsSUFwSGhCLEFBV0EsQUE4SmtCLENBb0JBLElBbERsQixDQXZFNkIsQUFpQlosRUFnQ2pCLENBekV1QixHQWlOdkIsQ0E3Rm1CLENBVU8sQ0FvQkosSUF4R0osU0F4Q1csQUFtSGQsR0EzRlcsRUFpQkssQUF3R1osR0FwQkUsR0FUckIsU0E4QkEsS0FoSjBCLEFBVUMsQUFjRixBQW9HSixPQXBGRyxVQXFGTCxJQW5HRSxDQXhCSSxLQXVDTyxLQXFGaEMsV0ExSHFCLFlBc0NILGNBQ0MsZUFDbkIsZUFqQ0EsT0FnQkEsc0JBdEJBLHVXQWdEQSx5QkFJQSIsImZpbGUiOiJDOlxcVXNlcnNcXGlteXVhXFxkZXZcXGNhbGVuZGFyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IERheVBpY2tlciBmcm9tIFwicmVhY3QtZGF5LXBpY2tlclwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuXHJcbmltcG9ydCBEYXlWaWV3IGZyb20gXCIuLi9jb21wcy9EYXlWaWV3XCI7XHJcbmltcG9ydCB7IFVzZXIsIENhbGVuZGFyLCBFdmVudCB9IGZyb20gXCIuLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IGJhY2tlbmRVUkwgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldERheURlc2NyaXB0aW9uIH0gZnJvbSBcIi4uL3V0aWxzL21ldGhvZHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMb2FkZXIsXHJcbiAgICBQYW5lbCxcclxuICAgIEJ1dHRvbixcclxuICAgIENvbnRhaW5lcixcclxuICAgIEZsZXhib3hHcmlkLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1Hcm91cCxcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgQ29udHJvbExhYmVsLFxyXG4gICAgQ2hlY2tib3hHcm91cCxcclxuICAgIENoZWNrYm94LFxyXG4gICAgQ29sLFxyXG4gICAgU2VsZWN0UGlja2VyLFxyXG4gICAgTW9kYWwsXHJcbiAgICBBdmF0YXJcclxufSBmcm9tIFwicnN1aXRlXCI7XHJcblxyXG5pbXBvcnQgXCJyc3VpdGUvbGliL3N0eWxlcy90aGVtZXMvZGFyay9pbmRleC5sZXNzXCI7XHJcblxyXG5jb25zdCBkdXJhdGlvbiA9IDYwMDtcclxuXHJcbmNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcclxuICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxyXG4gICAgb3BhY2l0eTogMFxyXG59O1xyXG5cclxuY29uc3QgdHJhbnNpdGlvblN0eWxlcyA9IHtcclxuICAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDEgfSxcclxuICAgIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgZXhpdGluZzogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICBleGl0ZWQ6IHsgb3BhY2l0eTogMCB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKTtcclxuICAgIHRpbWUuc2V0VGltZShkYXRlLmdldFRpbWUoKSk7XHJcbiAgICB0aW1lLnNldEhvdXJzKDAsIDAsIDApO1xyXG4gICAgcmV0dXJuIHRpbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZE9mRGF5KGRhdGUpIHtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKTtcclxuICAgIHRpbWUuc2V0VGltZShkYXRlLmdldFRpbWUoKSk7XHJcbiAgICB0aW1lLnNldEhvdXJzKDIzLCA1OSwgNTkpO1xyXG4gICAgcmV0dXJuIHRpbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxFdmVudHMoZXZlbnRzLCBkYXRlKSB7XHJcbiAgICB2YXIgZmlsbGVkID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgdGltZSA9IHN0YXJ0T2ZEYXkoZGF0ZSk7XHJcbiAgICBldmVudHMubWFwKGV2ZW50ID0+IHtcclxuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoZXZlbnQuc3RhcnRUaW1lKTtcclxuICAgICAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKGV2ZW50LmVuZFRpbWUpO1xyXG4gICAgICAgIGlmIChzdGFydFRpbWUuZ2V0SG91cnMoKSA+IGVuZFRpbWUuZ2V0SG91cnMoKSkge1xyXG4gICAgICAgICAgICBlbmRUaW1lLnNldEhvdXJzKDIzLCA1OSwgNTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWxsZWQucHVzaChuZXcgRXZlbnQoeyBzdGFydFRpbWU6IHRpbWUsIGVuZFRpbWU6IHN0YXJ0VGltZSB9LCB0cnVlKSk7XHJcbiAgICAgICAgZmlsbGVkLnB1c2goZXZlbnQpO1xyXG4gICAgICAgIHRpbWUuc2V0VGltZShlbmRUaW1lLmdldFRpbWUoKSk7XHJcbiAgICB9KTtcclxuICAgIGZpbGxlZC5wdXNoKG5ldyBFdmVudCh7IHN0YXJ0VGltZTogdGltZSwgZW5kVGltZTogZW5kT2ZEYXkoZGF0ZSkgfSwgdHJ1ZSkpO1xyXG4gICAgcmV0dXJuIGZpbGxlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnRzVG9EaXNwYXkoY2FsZW5kYXJzLCBkYXRlKSB7XHJcbiAgICB2YXIgZXZlbnRzVG9EaXNwYXkgPSBbXTtcclxuICAgIGNhbGVuZGFycy5tYXAoY2FsZW5kYXIgPT4ge1xyXG4gICAgICAgIGNhbGVuZGFyID0gbmV3IENhbGVuZGFyKGNhbGVuZGFyKTtcclxuICAgICAgICBjYWxlbmRhci5ldmVudHMubWFwKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLmdldEZ1bGxZZWFyKCkgPT0gZGF0ZS5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuZ2V0TW9udGgoKSA9PSBkYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5nZXREYXRlKCkgPT0gZGF0ZS5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICAgICFldmVudC5pc0FsbERheUV2ZW50KClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudHNUb0Rpc3BheS5wdXNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBldmVudHNUb0Rpc3BheS5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0VGltZSAtIGIuc3RhcnRUaW1lKTtcclxuICAgIHJldHVybiBldmVudHNUb0Rpc3BheTtcclxufVxyXG5cclxuY2xhc3MgaW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgd2FpdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBldmVudHNUb0Rpc3BheTogW10sXHJcbiAgICAgICAgICAgIHVzZXJkYXRhOiB7fSxcclxuICAgICAgICAgICAgZmlsbGVkOiBbXSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmU6IFtdLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlUmVhc29uOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRpbmdFdmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNyZWF0aW5nRXZlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEV2ZW50OiBuZXcgRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi6YG45Lit55qE5LqL5Lu2XCIsXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFtcIiNmZDM3MjFcIiwgXCIjYjcyMWZmXCJdLFxyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJUaXRsZTogXCLlk4hcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEYXlDbGljayA9IHRoaXMuaGFuZGxlRGF5Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5FdmVudEVkaXREaWFsb2cgPSB0aGlzLm9wZW5FdmVudEVkaXREaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRFZGl0RGlhbG9nID0gdGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbkV2ZW50Q3JlYXRlRGlhbG9nID0gdGhpcy5vcGVuRXZlbnRDcmVhdGVEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRDcmVhdGVEaWFsb2cgPSB0aGlzLmNsb3NlRXZlbnRDcmVhdGVEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50ID0gdGhpcy51cGRhdGVFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRXZlbnQgPSB0aGlzLmNyZWF0ZUV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaGFuZGxlRGF5Q2xpY2soZGF5LCB7IHNlbGVjdGVkIH0pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWREYXk6IHNlbGVjdGVkID8gbmV3IERhdGUoKSA6IGRheVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFja2VuZFVSTCArIFwiL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICByZXR1cm4geyB1c2VyZGF0YTogdXNlcmRhdGEsIGZpbGxlZDogZmlsbGVkLCBldmVudHNUb0Rpc3BheTogZXRkIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKHRoaXMucHJvcHMuZXZlbnRzVG9EaXNwYXksIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlsbGVkOiBmaWxsZWQsIHVzZXJkYXRhOiB0aGlzLnByb3BzLnVzZXJkYXRhLCBsb2FkZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRXZlbnRFZGl0RGlhbG9nKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICBlZGl0aW5nRXZlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0aW5nOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBldmVudC5zdGFydFRpbWUuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgKGV2ZW50LnN0YXJ0VGltZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIGV2ZW50LnN0YXJ0VGltZS5nZXREYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBldmVudC5zdGFydFRpbWUuZ2V0SG91cnMoKSArIFwiOlwiICsgZXZlbnQuc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSArIFwiflwiICsgZXZlbnQuZW5kVGltZS5nZXRIb3VycygpICsgXCI6XCIgKyBldmVudC5lbmRUaW1lLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZTogW2V2ZW50Lmlnbm9yZSA/IFwiaWdub3JlXCIgOiBudWxsXSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZVJlYXNvbjogZXZlbnQuaWdub3JlUmVhc29uID09IHVuZGVmaW5lZCA/IFwiXCIgOiBldmVudC5pZ25vcmVSZWFzb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRXZlbnRFZGl0RGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FdmVudENyZWF0ZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY3JlYXRpbmdFdmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIn5cIiArIChuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAxKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCksXHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhcjogeyBsYWJlbDogdGhpcy5zdGF0ZS51c2VyZGF0YS5jYWxlbmRhcnNbMF0udGl0bGUsIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFyc1swXSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUV2ZW50Q3JlYXRlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcmVhdGluZ0V2ZW50OiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVhdGVFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2FpdGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBuZXdTdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBuZXdFbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBuZXdTdGFydFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSAtIDEsIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSAtIDEsIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICB2YXIgbmV3ZGF0YSA9IG5ldyBVc2VyKHRoaXMuc3RhdGUudXNlcmRhdGEpO1xyXG4gICAgICAgIG5ld2RhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxlbmRhci50aXRsZSA9PSB0aGlzLnN0YXRlLmlucHV0aW5nLmNhbGVuZGFyLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhci5ldmVudHMucHVzaChuZXcgRXZlbnQoeyB0aXRsZTogdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZSwgc3RhcnRUaW1lOiBuZXdTdGFydFRpbWUsIGVuZFRpbWU6IG5ld0VuZFRpbWUsIGNvbG9yOiBjYWxlbmRhci5jb2xvciB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBmZXRjaChiYWNrZW5kVVJMICsgXCIvYXBpL3VwZGF0ZXVzZXJkYXRhXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYWxlbmRhcnM6IG5ld2RhdGEuY2FsZW5kYXJzIH0pIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcmVhdGluZ0V2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChiYWNrZW5kVVJMICsgXCIvYXBpL2dldHVzZXJkYXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHZhciB1c2VyZGF0YSA9IG5ldyBVc2VyKGpzb24pO1xyXG4gICAgICAgIHZhciBldGQgPSBldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSksIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyZGF0YTogdXNlcmRhdGEsIGZpbGxlZDogZmlsbGVkLCBldmVudHNUb0Rpc3BheTogZXRkLCB3YWl0aW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2FpdGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBuZXdTdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBuZXdFbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBuZXdTdGFydFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSAtIDEsIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSAtIDEsIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICB2YXIgbmV3ZGF0YSA9IG5ldyBVc2VyKHRoaXMuc3RhdGUudXNlcmRhdGEpO1xyXG4gICAgICAgIG5ld2RhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgIGNhbGVuZGFyLmV2ZW50cy5tYXAoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmlkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSA9IG5ld1N0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5lbmRUaW1lID0gbmV3RW5kVGltZTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC50aXRsZSA9IHRoaXMuc3RhdGUuaW5wdXRpbmcudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuaWdub3JlID0gdGhpcy5zdGF0ZS5pbnB1dGluZy5pZ25vcmUuaW5jbHVkZXMoXCJpZ25vcmVcIikgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuaWdub3JlUmVhc29uID0gdGhpcy5zdGF0ZS5pbnB1dGluZy5pZ25vcmVSZWFzb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGJhY2tlbmRVUkwgKyBcIi9hcGkvdXBkYXRldXNlcmRhdGFcIiwgeyBtZXRob2Q6IFwicG9zdFwiLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNhbGVuZGFyczogbmV3ZGF0YS5jYWxlbmRhcnMgfSkgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFja2VuZFVSTCArIFwiL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCwgd2FpdGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRm9ybUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbnB1dGluZzoge1xyXG4gICAgICAgICAgICAgICAgaWdub3JlUmVhc29uOiB2YWx1ZS5pZ25vcmVSZWFzb24sXHJcbiAgICAgICAgICAgICAgICBpZ25vcmU6IHZhbHVlLmlnbm9yZSxcclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyOiB2YWx1ZS5jYWxlbmRhcixcclxuICAgICAgICAgICAgICAgIHRpbWU6IHZhbHVlLnRpbWUsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiB2YWx1ZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHZhbHVlLnRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIERheXZpZXdDb250ZW50ID0gPExvYWRlciAvPjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS51c2VyZGF0YS5jYWxlbmRhcnMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhck9wdGlvbnMgPSB0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFycy5tYXAoY2FsZW5kYXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbGFiZWw6IGNhbGVuZGFyLnRpdGxlLCB2YWx1ZTogY2FsZW5kYXIgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlucHV0aW5nLmlnbm9yZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlUmVhc29uID0gdGhpcy5zdGF0ZS5pbnB1dGluZy5pZ25vcmUuaW5jbHVkZXMoXCJpZ25vcmVcIikgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD7lv73nlaXljp/lm6A8L0NvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJpZ25vcmVSZWFzb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKGV2ZW50c1RvRGlzcGF5KHRoaXMuc3RhdGUudXNlcmRhdGEuY2FsZW5kYXJzLCB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KSwgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcbiAgICAgICAgICAgIERheXZpZXdDb250ZW50ID0gPERheVZpZXcgZXZlbnRzPXtmaWxsZWR9IG9wZW5FdmVudEVkaXREaWFsb2c9e3RoaXMub3BlbkV2ZW50RWRpdERpYWxvZ30gb3BlbkV2ZW50Q3JlYXRlRGlhbG9nPXt0aGlzLm9wZW5FdmVudENyZWF0ZURpYWxvZ30gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGF5RGVzY3JpcHRpb24gPSBnZXREYXlEZXNjcmlwdGlvbih0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlJlYWNhbCA6IOWwiOazqOaWvOS9v+eUqOiAhemrlOmpl+eahOaXpeeoi+imj+WKg+W3peWFtzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlbG1ldD5cclxuXHJcbiAgICAgICAgICAgICAgICA8RmxleGJveEdyaWQganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZC5JdGVtIGNvbXBvbmVudENsYXNzPXtDb2x9IGNvbHNwYW49ezI0fSB4cz17MjB9IHNtPXsxOH0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkIGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZC5JdGVtIGNvbHNwYW49ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4MCwgbWFyZ2luTGVmdDogMjggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5Cb3R0b206IDAgfX0+UmVhY2FsPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiLCBtYXJnaW5Ub3A6IDAgfX0+5bCI5rOo5pa85L2/55So6ICF6auU6amX55qE5pel56iL6KaP5YqD5bel5YW3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA0MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheVBpY2tlciBzZWxlY3RlZERheXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXl9IG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyOCwgbWFyZ2luVG9wOiAzNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldEZ1bGxZZWFyKCl9IC8ge3RoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0TW9udGgoKSArIDF9IC8ge3RoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0RGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJncmF5XCIsIG1hcmdpblRvcDogMCB9fT57ZGF5RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94R3JpZC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkLkl0ZW0gY29sc3Bhbj17MTR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbCBlbGV2YXRpb249ezEwfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjIyMlwiLCBtYXJnaW5MZWZ0OiA2MCB9fSBib2R5RmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmxvYWRlZH0gdGltZW91dD17ZHVyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RGF5dmlld0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94R3JpZC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94R3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5lZGl0aW5nRXZlbnR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCIgd2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgzMTVkZWcsIFwiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmNvbG9yWzBdICsgXCIgMCUsIFwiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmNvbG9yWzFdICsgXCIgMTAwJSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuY2FsZW5kYXJUaXRsZS5jaGFyQXQoMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDYsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+e3RoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5jYWxlbmRhclRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGZvcm1WYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dGluZ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5LqL5Lu25qiZ6aGMPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD7ml6XmnJ88L0NvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cImRhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5pmC6ZaTPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJ0aW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgYWNjZXB0ZXI9e0NoZWNrYm94R3JvdXB9IG5hbWU9XCJpZ25vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiaWdub3JlXCI+5b+955Wl6Kmy5LqL6aCFPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPntpZ25vcmVSZWFzb259PC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlRXZlbnRFZGl0RGlhbG9nfT7lj5bmtog8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMudXBkYXRlRXZlbnR9IGxvYWRpbmc9e3RoaXMuc3RhdGUud2FpdGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmm7TmlrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLmNyZWF0aW5nRXZlbnR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCIgd2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nfT48aDU+5Ym15bu65paw5LqL5Lu2PC9oNT48L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gZm9ybVZhbHVlPXt0aGlzLnN0YXRlLmlucHV0aW5nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD7ooYzkuovmm4Y8L0NvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cImNhbGVuZGFyXCIgZGF0YT17Y2FsZW5kYXJPcHRpb25zfSBhY2NlcHRlcj17U2VsZWN0UGlja2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5LqL5Lu25qiZ6aGMPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD7ml6XmnJ88L0NvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cImRhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5pmC6ZaTPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJ0aW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nfT7lj5bmtog8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRXZlbnR9IGxvYWRpbmc9e3RoaXMuc3RhdGUud2FpdGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlibXnq4tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZhZGUtZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLmZhZGUtYXBwZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZhZGUtZW50ZXItYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlLWFwcGVhci1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlLWVudGVyLWRvbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZmFkZS1leGl0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZhZGUtZXhpdC1kb25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogODBweCAwIDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvKiBEYXlQaWNrZXIgc3R5bGVzICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Nb250aHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Nb250aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjI1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhiOTg5ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbi0tcHJldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFWVkpSRUZVV0FuTjJHMEtnakFZd1BIcEdmUmthWmVxdmdRYUsraFkzU1VIcmsxWXpOTGF5L09pRUZwOTJJKy9NcDJGMk1oMmxMSVNXbmZsRmp6SDI2M1JRanpNWjE5d2dzNzNlejBvMVdtdFcrZGdBMDFWeHJFM3A2bDJHTHNuQnkxVllRT3RWU0VIL2F0Q0NncXBRZ0tLcVlJT2lxMkNCa3F0Z2dMS3FRSUtncWdDQmpwSjJZNUNkSit6clQ5QTdISFNUQTFkeFVkSGd6Q3FKSUV3cTBTRHNLc0VnNmlxQklFb3Evd0VjVlJaQlhGVitRSnhWNW1CdGxERkI1VmpZVGFHWjJzZjRSOVBNN1U5WlUrbEx1YWV0UFAvNURpZTNUb08xK3UrTUt0SHMwNnFPREIyekJuSS9qQmQ0TVBRbTFWa1k3OVRiMThnQitDNjJGZEJGc1pSNnllSW8xWVFpTEpXTUlpcVZqUUl1MVlTQ0xOV0ZnaWpWallJdWhZWUNLb1dLQWlpRmdvb3B4WWFLTFVXT2lpMkZna29waFlwNkYzcjQyVzVBOXM5T2NnTnZ2YTh4UWF5c0tYbEZ5dG9xZFltUUg2dEYzdG9TVW8wSU5xOUFBQUFBRWxGVGtTdVFtQ0NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbi0tbmV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFYUkpSRUZVV0FuTjExOXVnakFjd1BIV3pKMWdubXh6Qi9CQkUwbjI0bTR4Zk5rVGFPTDd3T3RzbDNBWE1NYitWamFhMUJHMDBOOGZTRWliUHBBUDN4QUtLczJ5anpUUEg5UkFqaEVvOVd6UHIvVm04emdFMCtnWEFUQXh4dXh0cWVKOXQ1dEl3djVBdFFBQXBzZlQ2VFBkYnAra1VCY2dWd3ZPNTFLcVZoTWtYS3NWSkZYck9raWdWaENJczFZNGlLbFdaeEIxclg0Z3dscFJJSXBhOFNEa1dtZ2dyRnE0SUlSYUpLQ1lXblNnbnJYSVFWMXI4WUQrMVZybitiUmVhZ3lzSUZmTEFCUnQzMXY4b0J1MXhFQnR0ZlJibHRtZmpnRWNXaDlzblVTMmtOZEJLNldOMXZyT1d4T2JXc3orZmp4ZXZzeG1CMUdRRGZJTldpZXY4M25oYW9pQi9Db09VNDM4b1ByaFhTMFdwUTl4YzFaUVd4V0hxVVllMEkwcXJLQ1FLanlnRGxYSVFWMnIwSUY2VmlFQnhWVEJCU0ZVUVFOaFZZa0hJVmVKQXRrTnNiUTdjMUx0elA2RnNPYmhiMnJDS3Y3TkJJR29xNFNEbUtvRWdUaXJYQWNKVkdrRlNWVnBnb1NyWElDR1VNVUgvUUJaTlNVeTVYV1Vod0FBQUFCSlJVNUVya0pnZ2c9PVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uLS1pbnRlcmFjdGlvbkRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItQ2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUNhcHRpb24gPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheXNSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtkYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5IGFiYnJbdGl0bGVdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Cb2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtOdW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYWVjZWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQgLkRheVBpY2tlci1EYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItVG9kYXlCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRhOTBlMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tdG9kYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tb3V0c2lkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjZTBlMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWYxOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogRXhhbXBsZSBtb2RpZmllcnMgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLXN1bmRheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc3VuZGF5Om5vdCguRGF5UGlja2VyLURheS0tdG9kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkY2UwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc2VsZWN0ZWQ6bm90KC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTkwZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjBmOGZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLXNlbGVjdGVkOm5vdCguRGF5UGlja2VyLURheS0tZGlzYWJsZWQpOm5vdCguRGF5UGlja2VyLURheS0tb3V0c2lkZSk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFhMGZhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlcjpub3QoLkRheVBpY2tlci0taW50ZXJhY3Rpb25EaXNhYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXk6bm90KC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCk6bm90KC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBEYXlQaWNrZXJJbnB1dCAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheVdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\imyua\\\\dev\\\\calendar\\\\pages\\\\index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./utils/methods.js":
/*!**************************!*\
  !*** ./utils/methods.js ***!
  \**************************/
/*! exports provided: generateUUID, getDayDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUUID", function() { return generateUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayDescription", function() { return getDayDescription; });
function generateUUID() {
  var d = Date.now();

  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    d += performance.now();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  });
}
function getDayDescription(date) {
  var dayDescription = "";
  var DayA = new Date(date);
  var DayB = new Date();
  DayA.setHours(12, 0, 0);
  DayB.setHours(12, 0, 0);

  if (parseInt((DayA - DayB) / 3600000) < 0) {
    if (parseInt((DayA - DayB) / 3600000) == 0) dayDescription = "今天";else if (parseInt((DayA - DayB) / 3600000) == -24) dayDescription = "昨天";else if (parseInt((DayA - DayB) / 3600000) == -48) dayDescription = "前天";else dayDescription = parseInt((DayA - DayB) / 3600000 / -24) + " 天前";
  } else {
    if (parseInt((DayA - DayB) / 3600000) == 0) dayDescription = "今天";else if (parseInt((DayA - DayB) / 3600000) == 23) dayDescription = "明天";else if (parseInt((DayA - DayB) / 3600000) == 47) dayDescription = "後天";else dayDescription = parseInt((DayA - DayB) / 3600000 / 24) + 1 + " 天後";
  }

  return dayDescription;
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\imyua\dev\calendar\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-day-picker":
/*!***********************************!*\
  !*** external "react-day-picker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-day-picker");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "rsuite":
/*!*************************!*\
  !*** external "rsuite" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rsuite");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map