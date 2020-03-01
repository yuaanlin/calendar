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

/***/ "./comps/AllDayEvents.js":
/*!*******************************!*\
  !*** ./comps/AllDayEvents.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventCard */ "./comps/eventCard.js");
var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\comps\\AllDayEvents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AllDayEvents extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return this.props.events.map(event => {
      return __jsx(_eventCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: event.id,
        height: 60,
        event: event,
        openEventEditDialog: this.props.openEventEditDialog,
        openEventCreateDialog: this.props.openEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AllDayEvents);

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
      borderBottomColor: "#2F3136",
      borderBottomWidth: 2,
      borderTopStyle: startTime.getMinutes() == 0 ? "solid" : "none",
      borderTopColor: "#2F3136",
      borderTopWidth: 2
    };
    return __jsx("div", {
      style: cardStyle,
      key: startTime.getTime(),
      onClick: this.handleEmptyCardClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
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
            lineNumber: 101
          },
          __self: this
        }, this.props.event.title, " ") : __jsx("p", {
          key: "title",
          style: {
            color: "white"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, this.props.event.title, " ", __jsx("strong", {
          style: {
            marginLeft: 16,
            color: "rgba(255,255,255,0.4)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
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
            lineNumber: 113
          },
          __self: this
        }, this.props.event.duration, " \u5206\u9418"));
        eventInfo.push(__jsx("p", {
          style: {
            color: "rgba(255,255,255,0.8)"
          },
          key: "cal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
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
              lineNumber: 128
            },
            __self: this
          }, "\u8A72\u4E8B\u4EF6\u5DF2\u88AB\u5FFD\u7565\uFF0C\u539F\u56E0\u70BA", this.props.event.ignoreReason),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
          style: style,
          onClick: this.handleClick,
          key: this.props.event.id,
          bodyFill: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
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
              lineNumber: 139
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
// export const backendURL = "https://calendar-ten.now.sh";
const backendURL = "http://localhost:3000";

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
/* harmony import */ var _comps_AllDayEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comps/AllDayEvents */ "./comps/AllDayEvents.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../classes */ "./classes.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/methods */ "./utils/methods.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rsuite */ "rsuite");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rsuite_lib_styles_themes_dark_index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rsuite/lib/styles/themes/dark/index.less */ "./node_modules/rsuite/lib/styles/themes/dark/index.less");
/* harmony import */ var rsuite_lib_styles_themes_dark_index_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rsuite_lib_styles_themes_dark_index_less__WEBPACK_IMPORTED_MODULE_12__);
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

    filled.push(new _classes__WEBPACK_IMPORTED_MODULE_8__["Event"]({
      startTime: time,
      endTime: startTime
    }, true));
    filled.push(event);
    time.setTime(endTime.getTime());
  });
  filled.push(new _classes__WEBPACK_IMPORTED_MODULE_8__["Event"]({
    startTime: time,
    endTime: endOfDay(date)
  }, true));
  return filled;
}

function eventsToDispay(calendars, date) {
  var eventsToDispay = [];
  calendars.map(calendar => {
    calendar = new _classes__WEBPACK_IMPORTED_MODULE_8__["Calendar"](calendar);
    calendar.events.map(event => {
      if (event.startTime.getFullYear() == date.getFullYear() && event.startTime.getMonth() == date.getMonth() && event.startTime.getDate() == date.getDate() && !event.isAllDayEvent()) {
        eventsToDispay.push(event);
      }
    });
  });
  eventsToDispay.sort((a, b) => a.startTime - b.startTime);
  return eventsToDispay;
}

function allDayEventsToDispay(calendars, date) {
  var allDayEventsToDispay = [];
  calendars.map(calendar => {
    calendar = new _classes__WEBPACK_IMPORTED_MODULE_8__["Calendar"](calendar);
    calendar.events.map(event => {
      if (event.startTime.getFullYear() == date.getFullYear() && event.startTime.getMonth() == date.getMonth() && event.startTime.getDate() == date.getDate() && event.isAllDayEvent()) {
        allDayEventsToDispay.push(event);
      }
    });
  });
  return allDayEventsToDispay;
}

class index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      waiting: false,
      removing: false,
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
      selectedEvent: new _classes__WEBPACK_IMPORTED_MODULE_8__["Event"]({
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
    this.removeEvent = this.removeEvent.bind(this);
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
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_9__["backendURL"] + "/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_8__["User"](json);
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
        ignoreReason: event.ignoreReason == undefined ? "" : event.ignoreReason,
        allday: [event.isAllDayEvent() ? "allday" : null]
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
        },
        allday: [null]
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

    if (this.state.inputing.allday.includes("allday")) {
      newStartTime.setHours(0, 0);
      newEndTime.setHours(24, 0);
    } else {
      newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
      newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
    }

    var newdata = new _classes__WEBPACK_IMPORTED_MODULE_8__["User"](this.state.userdata);
    newdata.calendars.map(calendar => {
      if (calendar.title == this.state.inputing.calendar.label) {
        calendar.events.push(new _classes__WEBPACK_IMPORTED_MODULE_8__["Event"]({
          title: this.state.inputing.title,
          startTime: newStartTime,
          endTime: newEndTime,
          color: calendar.color
        }));
      }
    });

    try {
      await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_9__["backendURL"] + "/api/updateuserdata", {
        method: "post",
        body: JSON.stringify({
          calendars: newdata.calendars
        })
      });
    } catch (err) {
      Object(_utils_methods__WEBPACK_IMPORTED_MODULE_10__["displayError"])("對不起 ... 發生技術性問題啦 T_T", "創建新事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
    }

    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_9__["backendURL"] + "/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_8__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    this.setState({
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd,
      waiting: false,
      creatingEvent: false
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

    if (this.state.inputing.allday.includes("allday")) {
      newStartTime.setHours(0, 0);
      newEndTime.setHours(24, 0);
    } else {
      newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
      newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
    }

    var newdata = new _classes__WEBPACK_IMPORTED_MODULE_8__["User"](this.state.userdata);
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

    try {
      await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_9__["backendURL"] + "/api/updateuserdata", {
        method: "post",
        body: JSON.stringify({
          calendars: newdata.calendars
        })
      });
    } catch (err) {
      Object(_utils_methods__WEBPACK_IMPORTED_MODULE_10__["displayError"])("對不起 ... 發生技術性問題啦 T_T", "更新事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
    }

    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_9__["backendURL"] + "/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_8__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    this.setState({
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd,
      waiting: false,
      editingEvent: false
    });
  }

  async removeEvent() {
    this.setState({
      removing: true
    });
    var newdata = new _classes__WEBPACK_IMPORTED_MODULE_8__["User"](this.state.userdata);
    newdata.calendars.map(calendar => {
      var targetEvent = null;
      calendar.events.map(event => {
        if (event.id == this.state.selectedEvent.id) {
          targetEvent = event;
        }
      });
      if (targetEvent != null) calendar.events.splice(calendar.events.indexOf(targetEvent), 1);
    });

    try {
      await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_9__["backendURL"] + "/api/updateuserdata", {
        method: "post",
        body: JSON.stringify({
          calendars: newdata.calendars
        })
      });
    } catch (err) {
      Object(_utils_methods__WEBPACK_IMPORTED_MODULE_10__["displayError"])("對不起 ... 發生技術性問題啦 T_T", "刪除事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
    }

    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_9__["backendURL"] + "/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_8__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    this.setState({
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd,
      removing: false,
      editingEvent: false
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
        title: value.title,
        allday: value.allday
      }
    });
  }

  render() {
    var DayviewContent = __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Loader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    });

    var AllDayEventsContent = __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Loader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
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
      if (this.state.inputing.ignore != undefined) var ignoreReason = this.state.inputing.ignore.includes("ignore") ? __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "\u5FFD\u7565\u539F\u56E0"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
        name: "ignoreReason",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      })) : null;
      if (this.state.inputing.allday == undefined || !this.state.inputing.allday.includes("allday")) var time = __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "\u6642\u9593"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
        name: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }));
      var filled = fillEvents(eventsToDispay(this.state.userdata.calendars, this.state.selectedDay), this.state.selectedDay);
      var allDayEvents = allDayEventsToDispay(this.state.userdata.calendars, this.state.selectedDay);
      DayviewContent = __jsx(_comps_DayView__WEBPACK_IMPORTED_MODULE_6__["default"], {
        events: filled,
        openEventEditDialog: this.openEventEditDialog,
        openEventCreateDialog: this.openEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      });
      AllDayEventsContent = __jsx(_comps_AllDayEvents__WEBPACK_IMPORTED_MODULE_7__["default"], {
        events: allDayEvents,
        openEventEditDialog: this.openEventEditDialog,
        openEventCreateDialog: this.openEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      });
    }

    var dayDescription = Object(_utils_methods__WEBPACK_IMPORTED_MODULE_10__["getDayDescription"])(this.state.selectedDay);
    return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, "Reacal : \u5C08\u6CE8\u65BC\u4F7F\u7528\u8005\u9AD4\u9A57\u7684\u65E5\u7A0B\u898F\u5283\u5DE5\u5177")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"], {
      justify: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"].Item, {
      componentClass: rsuite__WEBPACK_IMPORTED_MODULE_11__["Col"],
      colspan: 24,
      xs: 20,
      sm: 18,
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"], {
      justify: "space-around",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"].Item, {
      colspan: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, __jsx("div", {
      style: {
        marginTop: 80,
        marginLeft: 28
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, __jsx("h1", {
      style: {
        color: "white",
        marginBottom: 0
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, "Reacal"), __jsx("p", {
      style: {
        color: "gray",
        marginTop: 0
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: this
    }, "\u5C08\u6CE8\u65BC\u4F7F\u7528\u8005\u9AD4\u9A57\u7684\u65E5\u7A0B\u898F\u5283\u5DE5\u5177")), __jsx("div", {
      style: {
        marginTop: 40
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }, __jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
      selectedDays: this.state.selectedDay,
      onDayClick: this.handleDayClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    })), __jsx("div", {
      style: {
        marginLeft: 28,
        marginTop: 36
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, __jsx("h3", {
      style: {
        color: "white",
        marginBottom: 8
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, this.state.selectedDay.getFullYear(), " / ", this.state.selectedDay.getMonth() + 1, " / ", this.state.selectedDay.getDate()), __jsx("p", {
      style: {
        color: "gray",
        marginTop: 0
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, dayDescription)), __jsx("div", {
      style: {
        marginLeft: 28
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, __jsx("div", {
      style: {
        overflowY: "scroll",
        maxHeight: "20vh"
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"], {
      in: this.state.loaded,
      timeout: duration,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, state => __jsx("div", {
      style: _objectSpread({}, defaultStyle, {}, transitionStyles[state]),
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, AllDayEventsContent))))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"].Item, {
      colspan: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Panel"], {
      style: {
        marginLeft: 60
      },
      bodyFill: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, __jsx("div", {
      style: {
        overflowY: "scroll",
        maxHeight: "100vh",
        padding: 48
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"], {
      in: this.state.loaded,
      timeout: duration,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }, state => __jsx("div", {
      style: _objectSpread({}, defaultStyle, {}, transitionStyles[state]),
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416
      },
      __self: this
    }, DayviewContent)))))))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
      show: this.state.editingEvent,
      "aria-labelledby": "form-dialog-title",
      width: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"].Header, {
      closeButton: true,
      onClick: this.closeEventEditDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Avatar"], {
      style: {
        backgroundImage: "linear-gradient(315deg, " + this.state.selectedEvent.color[0] + " 0%, " + this.state.selectedEvent.color[1] + " 100%)",
        color: "#ffffff"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, this.state.selectedEvent.calendarTitle.charAt(0)), " ", __jsx("h5", {
      style: {
        marginLeft: 6,
        display: "inline-block"
      },
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }, this.state.selectedEvent.calendarTitle)), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Form"], {
      formValue: this.state.inputing,
      onChange: this.handleFormChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449
      },
      __self: this
    }, "\u4E8B\u4EF6\u6A19\u984C"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      name: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    }, "\u65E5\u671F"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      name: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      accepter: rsuite__WEBPACK_IMPORTED_MODULE_11__["CheckboxGroup"],
      name: "allday",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], {
      value: "allday",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, "\u5168\u5929\u4E8B\u4EF6"))), time, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      accepter: rsuite__WEBPACK_IMPORTED_MODULE_11__["CheckboxGroup"],
      name: "ignore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], {
      value: "ignore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, "\u5FFD\u7565\u8A72\u4E8B\u9805"))), ignoreReason)), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"].Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"].Item, {
      colspan: 3,
      style: {
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      color: "red",
      onClick: this.removeEvent,
      loading: this.state.removing,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473
      },
      __self: this
    }, "\u522A\u9664")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"].Item, {
      colspan: 15,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: this
    }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FlexboxGrid"].Item, {
      colspan: 6,
      style: {
        textAlign: "right"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      onClick: this.closeEventEditDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479
      },
      __self: this
    }, "\u53D6\u6D88"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      appearance: "primary",
      onClick: this.updateEvent,
      loading: this.state.waiting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480
      },
      __self: this
    }, "\u66F4\u65B0"))))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
      show: this.state.creatingEvent,
      "aria-labelledby": "form-dialog-title",
      width: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"].Header, {
      closeButton: true,
      onClick: this.closeEventCreateDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, __jsx("h5", {
      className: "jsx-99984481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, "\u5275\u5EFA\u65B0\u4E8B\u4EF6")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Form"], {
      formValue: this.state.inputing,
      onChange: this.handleFormChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: this
    }, "\u884C\u4E8B\u66C6"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      name: "calendar",
      data: calendarOptions,
      accepter: rsuite__WEBPACK_IMPORTED_MODULE_11__["SelectPicker"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499
      },
      __self: this
    }, "\u4E8B\u4EF6\u6A19\u984C"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      name: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, "\u65E5\u671F"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      name: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
      accepter: rsuite__WEBPACK_IMPORTED_MODULE_11__["CheckboxGroup"],
      name: "allday",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], {
      value: "allday",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508
      },
      __self: this
    }, "\u5168\u5929\u4E8B\u4EF6"))), time)), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Modal"].Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      onClick: this.closeEventCreateDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515
      },
      __self: this
    }, "\u53D6\u6D88"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      appearance: "primary",
      onClick: this.createEvent,
      loading: this.state.waiting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }, "\u5275\u7ACB"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "99984481",
      __self: this
    }, ".fade-enter,.fade-appear{opacity:0;}.fade-enter-active,.fade-appear-active{opacity:1;-webkit-transition:opacity 1s ease-in;transition:opacity 1s ease-in;}.fade-enter-done{opacity:1;}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;-webkit-transition:opacity 1s ease-in;transition:opacity 1s ease-in;}.fade-exit-done{opacity:0;}body{background-image:url(\"/bg.png\");margin:0;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{-webkit-border-radius:10px;border-radius:10px;margin:80px 0 5px 0;}::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:rgb(80,80,80);}.DayPicker{display:inline-block;font-size:1rem;}.DayPicker-wrapper{position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-Months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\");}.DayPicker-NavButton--next{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\");}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{display:table-caption;margin-bottom:0.5em;padding:0 0.5em;text-align:left;color:white;}.DayPicker-Caption>div{font-weight:500;font-size:1.15em;}.DayPicker-Weekdays{display:table-header-group;margin-top:1em;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5em;color:#8b9898;text-align:center;font-size:0.875em;}.DayPicker-Weekday abbr[title]{border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer;color:gray;}.DayPicker-WeekNumber{display:table-cell;padding:0.5em;min-width:1em;border-right:1px solid #eaecec;color:#8b9898;vertical-align:middle;text-align:right;font-size:0.75em;cursor:pointer;}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5em;}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:0.875em;cursor:pointer;}.DayPicker-Day--today{color:white;font-weight:700;}.DayPicker-Day--outside{color:#8b9898;cursor:default;}.DayPicker-Day--disabled{color:#dce0e0;cursor:default;}.DayPicker-Day--sunday{background-color:#f7f8f8;}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa;}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff;}.DayPickerInput{display:inline-block;}.DayPickerInput-OverlayWrapper{position:relative;}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW15dWFcXGRldlxcY2FsZW5kYXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Z0JtQyxBQUltQyxBQUlBLEFBSUEsQUFHQSxBQUlBLEFBS0EsQUFHc0IsQUFJdEIsQUFHaUIsQUFLRCxBQU9MLEFBS0gsQUFlTCxBQU1DLEFBZ0JJLEFBaUJOLEFBSU8sQUFLZ25CLEFBSXRuQixBQUlTLEFBUU4sQUFLVyxBQUtULEFBSUMsQUFRQSxBQUtLLEFBSU4sQUFJQyxBQVVBLEFBWUosQUFJRyxBQUlOLEFBVUEsQUFLRSxBQUtBLEFBUVcsQUFJWCxBQUlJLEFBT08sQUFLQSxBQU1KLEFBSUgsQUFJQSxVQTVQdEIsQUFJa0MsQUFJbEMsQUFHQSxBQUlrQyxBQUtsQyxBQU9BLEVBMEVBLEFBMEZpQyxBQVViLENBdkZwQixDQTlDaUIsQUEwSUUsQUFLQSxBQVluQixDQXhDQSxDQXpEcUIsRUE5RUUsQUFvQ1gsQUFvRFosQUFxQkEsQUE4QkEsQUF5QzZCLEFBcUI3QixBQUlXLENBcEpnbEIsQUFtQ3prQixBQVFPLEFBYVAsQUFVQSxFQWpJQyxBQTJNbkIsQ0EvSHdCLEVBbUN4QixDQWtFQSxBQWVBLEFBS0EsQUFlYyxDQTNOUSxBQWtETixDQXZETyxBQXVDSixBQThEQSxDQXVFbkIsQ0FLQSxBQU1BLEdBOUxhLENBd0diLEFBY2tCLEFBcUJJLEFBVUosRUFvRkcsQ0FyTnJCLEVBMkNjLEdBOURkLEFBd0swQixDQTFITCxBQWlERCxBQWFwQixDQWlHa0IsQ0FqTWEsRUFMUCxDQStHRixBQStCYSxDQXJGVixHQTJFQyxDQThGbUIsS0EzQjdDLENBOUdvQixDQWpEUyxJQTBIVCxFQWxERSxDQS9HdEIsR0FLQSxBQW9EbUIsQUE0RG5CLElBZXNCLENBdEdILEFBMkRILElBcEhoQixBQVdBLEFBOEprQixDQW9CQSxJQWxEbEIsQ0F2RTZCLEFBaUJaLEVBZ0NqQixDQXpFdUIsR0FpTnZCLENBN0ZtQixDQVVPLENBb0JKLElBeEdKLFNBeENXLEFBbUhkLEdBM0ZXLEVBaUJLLEFBd0daLEdBcEJFLEdBVHJCLFNBOEJBLEtBaEowQixBQVVDLEFBY0YsQUFvR0osT0FwRkcsVUFxRkwsSUFuR0UsQ0F4QkksS0F1Q08sS0FxRmhDLFdBMUhxQixZQXNDSCxjQUNDLGVBQ25CLGVBakNBLE9BZ0JBLHNCQXRCQSx1V0FnREEseUJBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbXl1YVxcZGV2XFxjYWxlbmRhclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBEYXlQaWNrZXIgZnJvbSBcInJlYWN0LWRheS1waWNrZXJcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcblxyXG5pbXBvcnQgRGF5VmlldyBmcm9tIFwiLi4vY29tcHMvRGF5Vmlld1wiO1xyXG5pbXBvcnQgQWxsRGF5RXZlbnRzIGZyb20gXCIuLi9jb21wcy9BbGxEYXlFdmVudHNcIjtcclxuaW1wb3J0IHsgVXNlciwgQ2FsZW5kYXIsIEV2ZW50IH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuaW1wb3J0IHsgYmFja2VuZFVSTCB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0RGF5RGVzY3JpcHRpb24sIGRpc3BsYXlFcnJvciB9IGZyb20gXCIuLi91dGlscy9tZXRob2RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTG9hZGVyLFxyXG4gICAgUGFuZWwsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDb250YWluZXIsXHJcbiAgICBGbGV4Ym94R3JpZCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtR3JvdXAsXHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIENvbnRyb2xMYWJlbCxcclxuICAgIENoZWNrYm94R3JvdXAsXHJcbiAgICBDaGVja2JveCxcclxuICAgIENvbCxcclxuICAgIFNlbGVjdFBpY2tlcixcclxuICAgIE1vZGFsLFxyXG4gICAgQXZhdGFyXHJcbn0gZnJvbSBcInJzdWl0ZVwiO1xyXG5cclxuaW1wb3J0IFwicnN1aXRlL2xpYi9zdHlsZXMvdGhlbWVzL2RhcmsvaW5kZXgubGVzc1wiO1xyXG5cclxuY29uc3QgZHVyYXRpb24gPSA2MDA7XHJcblxyXG5jb25zdCBkZWZhdWx0U3R5bGUgPSB7XHJcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcclxuICAgIG9wYWNpdHk6IDBcclxufTtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XHJcbiAgICBlbnRlcmluZzogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBlbnRlcmVkOiB7IG9wYWNpdHk6IDEgfSxcclxuICAgIGV4aXRpbmc6IHsgb3BhY2l0eTogMCB9LFxyXG4gICAgZXhpdGVkOiB7IG9wYWNpdHk6IDAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aW1lLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgdGltZS5zZXRIb3VycygwLCAwLCAwKTtcclxuICAgIHJldHVybiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmRPZkRheShkYXRlKSB7XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aW1lLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgdGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgIHJldHVybiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsRXZlbnRzKGV2ZW50cywgZGF0ZSkge1xyXG4gICAgdmFyIGZpbGxlZCA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIHRpbWUgPSBzdGFydE9mRGF5KGRhdGUpO1xyXG4gICAgZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LnN0YXJ0VGltZSk7XHJcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShldmVudC5lbmRUaW1lKTtcclxuICAgICAgICBpZiAoc3RhcnRUaW1lLmdldEhvdXJzKCkgPiBlbmRUaW1lLmdldEhvdXJzKCkpIHtcclxuICAgICAgICAgICAgZW5kVGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsbGVkLnB1c2gobmV3IEV2ZW50KHsgc3RhcnRUaW1lOiB0aW1lLCBlbmRUaW1lOiBzdGFydFRpbWUgfSwgdHJ1ZSkpO1xyXG4gICAgICAgIGZpbGxlZC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB0aW1lLnNldFRpbWUoZW5kVGltZS5nZXRUaW1lKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxsZWQucHVzaChuZXcgRXZlbnQoeyBzdGFydFRpbWU6IHRpbWUsIGVuZFRpbWU6IGVuZE9mRGF5KGRhdGUpIH0sIHRydWUpKTtcclxuICAgIHJldHVybiBmaWxsZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50c1RvRGlzcGF5KGNhbGVuZGFycywgZGF0ZSkge1xyXG4gICAgdmFyIGV2ZW50c1RvRGlzcGF5ID0gW107XHJcbiAgICBjYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhcik7XHJcbiAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpID09IGRhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgPT0gZGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgICAhZXZlbnQuaXNBbGxEYXlFdmVudCgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzVG9EaXNwYXkucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnRzVG9EaXNwYXkuc29ydCgoYSwgYikgPT4gYS5zdGFydFRpbWUgLSBiLnN0YXJ0VGltZSk7XHJcbiAgICByZXR1cm4gZXZlbnRzVG9EaXNwYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbERheUV2ZW50c1RvRGlzcGF5KGNhbGVuZGFycywgZGF0ZSkge1xyXG4gICAgdmFyIGFsbERheUV2ZW50c1RvRGlzcGF5ID0gW107XHJcbiAgICBjYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhcik7XHJcbiAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpID09IGRhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgPT0gZGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5pc0FsbERheUV2ZW50KClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXlFdmVudHNUb0Rpc3BheS5wdXNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYWxsRGF5RXZlbnRzVG9EaXNwYXk7XHJcbn1cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdhaXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBldmVudHNUb0Rpc3BheTogW10sXHJcbiAgICAgICAgICAgIHVzZXJkYXRhOiB7fSxcclxuICAgICAgICAgICAgZmlsbGVkOiBbXSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmU6IFtdLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlUmVhc29uOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRpbmdFdmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNyZWF0aW5nRXZlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEV2ZW50OiBuZXcgRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi6YG45Lit55qE5LqL5Lu2XCIsXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFtcIiNmZDM3MjFcIiwgXCIjYjcyMWZmXCJdLFxyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJUaXRsZTogXCLlk4hcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEYXlDbGljayA9IHRoaXMuaGFuZGxlRGF5Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5FdmVudEVkaXREaWFsb2cgPSB0aGlzLm9wZW5FdmVudEVkaXREaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRFZGl0RGlhbG9nID0gdGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbkV2ZW50Q3JlYXRlRGlhbG9nID0gdGhpcy5vcGVuRXZlbnRDcmVhdGVEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRDcmVhdGVEaWFsb2cgPSB0aGlzLmNsb3NlRXZlbnRDcmVhdGVEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50ID0gdGhpcy51cGRhdGVFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRXZlbnQgPSB0aGlzLmNyZWF0ZUV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCA9IHRoaXMucmVtb3ZlRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVEYXlDbGljayhkYXksIHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZERheTogc2VsZWN0ZWQgPyBuZXcgRGF0ZSgpIDogZGF5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChiYWNrZW5kVVJMICsgXCIvYXBpL2dldHVzZXJkYXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHZhciB1c2VyZGF0YSA9IG5ldyBVc2VyKGpzb24pO1xyXG4gICAgICAgIHZhciBldGQgPSBldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSksIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHJldHVybiB7IHVzZXJkYXRhOiB1c2VyZGF0YSwgZmlsbGVkOiBmaWxsZWQsIGV2ZW50c1RvRGlzcGF5OiBldGQgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHModGhpcy5wcm9wcy5ldmVudHNUb0Rpc3BheSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxsZWQ6IGZpbGxlZCwgdXNlcmRhdGE6IHRoaXMucHJvcHMudXNlcmRhdGEsIGxvYWRlZDogdHJ1ZSB9KTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FdmVudEVkaXREaWFsb2coZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRFdmVudDogZXZlbnQsXHJcbiAgICAgICAgICAgIGVkaXRpbmdFdmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyAoZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgKyAxKSArIFwiL1wiICsgZXZlbnQuc3RhcnRUaW1lLmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IGV2ZW50LnN0YXJ0VGltZS5nZXRIb3VycygpICsgXCI6XCIgKyBldmVudC5zdGFydFRpbWUuZ2V0TWludXRlcygpICsgXCJ+XCIgKyBldmVudC5lbmRUaW1lLmdldEhvdXJzKCkgKyBcIjpcIiArIGV2ZW50LmVuZFRpbWUuZ2V0TWludXRlcygpLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlOiBbZXZlbnQuaWdub3JlID8gXCJpZ25vcmVcIiA6IG51bGxdLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlUmVhc29uOiBldmVudC5pZ25vcmVSZWFzb24gPT0gdW5kZWZpbmVkID8gXCJcIiA6IGV2ZW50Lmlnbm9yZVJlYXNvbixcclxuICAgICAgICAgICAgICAgIGFsbGRheTogW2V2ZW50LmlzQWxsRGF5RXZlbnQoKSA/IFwiYWxsZGF5XCIgOiBudWxsXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VFdmVudEVkaXREaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkV2ZW50Q3JlYXRlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjcmVhdGluZ0V2ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dGluZzoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKS5nZXRIb3VycygpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSArIFwiflwiICsgKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIDEpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyOiB7IGxhYmVsOiB0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFyc1swXS50aXRsZSwgdmFsdWU6IHRoaXMuc3RhdGUudXNlcmRhdGEuY2FsZW5kYXJzWzBdIH0sXHJcbiAgICAgICAgICAgICAgICBhbGxkYXk6IFtudWxsXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VFdmVudENyZWF0ZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3JlYXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdhaXRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbmV3U3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbmV3RW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbmV3U3RhcnRUaW1lLnNldEZ1bGxZZWFyKHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMV0gLSAxLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzJdKTtcclxuICAgICAgICBuZXdFbmRUaW1lLnNldEZ1bGxZZWFyKHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMV0gLSAxLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzJdKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dGluZy5hbGxkYXkuaW5jbHVkZXMoXCJhbGxkYXlcIikpIHtcclxuICAgICAgICAgICAgbmV3U3RhcnRUaW1lLnNldEhvdXJzKDAsIDApO1xyXG4gICAgICAgICAgICBuZXdFbmRUaW1lLnNldEhvdXJzKDI0LCAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTdGFydFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMF0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICAgICAgbmV3RW5kVGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzFdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV3ZGF0YSA9IG5ldyBVc2VyKHRoaXMuc3RhdGUudXNlcmRhdGEpO1xyXG4gICAgICAgIG5ld2RhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxlbmRhci50aXRsZSA9PSB0aGlzLnN0YXRlLmlucHV0aW5nLmNhbGVuZGFyLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhci5ldmVudHMucHVzaChuZXcgRXZlbnQoeyB0aXRsZTogdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZSwgc3RhcnRUaW1lOiBuZXdTdGFydFRpbWUsIGVuZFRpbWU6IG5ld0VuZFRpbWUsIGNvbG9yOiBjYWxlbmRhci5jb2xvciB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChiYWNrZW5kVVJMICsgXCIvYXBpL3VwZGF0ZXVzZXJkYXRhXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYWxlbmRhcnM6IG5ld2RhdGEuY2FsZW5kYXJzIH0pIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoXCLlsI3kuI3otbcgLi4uIOeZvOeUn+aKgOihk+aAp+WVj+mhjOWVpiBUX1RcIiwgXCLlibXlu7rmlrDkuovku7bmmYLnmbznlJ/kuobkuIDkupvllY/poYzvvIzluIzmnJvkvaDlj6/ku6XoiIfmiJHlgJHoga/ntaHkvobluavliqnmiJHlgJHmlLnpgLIgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFja2VuZFVSTCArIFwiL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCwgd2FpdGluZzogZmFsc2UsIGNyZWF0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3YWl0aW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG5ld1N0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIG5ld0VuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRGdWxsWWVhcih0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzFdIC0gMSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsyXSk7XHJcbiAgICAgICAgbmV3RW5kVGltZS5zZXRGdWxsWWVhcih0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzFdIC0gMSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsyXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5wdXRpbmcuYWxsZGF5LmluY2x1ZGVzKFwiYWxsZGF5XCIpKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXJ0VGltZS5zZXRIb3VycygwLCAwKTtcclxuICAgICAgICAgICAgbmV3RW5kVGltZS5zZXRIb3VycygyNCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U3RhcnRUaW1lLnNldEhvdXJzKHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMF0uc3BsaXQoXCI6XCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVsxXSk7XHJcbiAgICAgICAgICAgIG5ld0VuZFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5ld2RhdGEgPSBuZXcgVXNlcih0aGlzLnN0YXRlLnVzZXJkYXRhKTtcclxuICAgICAgICBuZXdkYXRhLmNhbGVuZGFycy5tYXAoY2FsZW5kYXIgPT4ge1xyXG4gICAgICAgICAgICBjYWxlbmRhci5ldmVudHMubWFwKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUgPSBuZXdTdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZW5kVGltZSA9IG5ld0VuZFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGl0bGUgPSB0aGlzLnN0YXRlLmlucHV0aW5nLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Lmlnbm9yZSA9IHRoaXMuc3RhdGUuaW5wdXRpbmcuaWdub3JlLmluY2x1ZGVzKFwiaWdub3JlXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Lmlnbm9yZVJlYXNvbiA9IHRoaXMuc3RhdGUuaW5wdXRpbmcuaWdub3JlUmVhc29uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChiYWNrZW5kVVJMICsgXCIvYXBpL3VwZGF0ZXVzZXJkYXRhXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYWxlbmRhcnM6IG5ld2RhdGEuY2FsZW5kYXJzIH0pIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoXCLlsI3kuI3otbcgLi4uIOeZvOeUn+aKgOihk+aAp+WVj+mhjOWVpiBUX1RcIiwgXCLmm7TmlrDkuovku7bmmYLnmbznlJ/kuobkuIDkupvllY/poYzvvIzluIzmnJvkvaDlj6/ku6XoiIfmiJHlgJHoga/ntaHkvobluavliqnmiJHlgJHmlLnpgLIgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFja2VuZFVSTCArIFwiL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCwgd2FpdGluZzogZmFsc2UsIGVkaXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVtb3ZlRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlbW92aW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG5ld2RhdGEgPSBuZXcgVXNlcih0aGlzLnN0YXRlLnVzZXJkYXRhKTtcclxuICAgICAgICBuZXdkYXRhLmNhbGVuZGFycy5tYXAoY2FsZW5kYXIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0RXZlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBjYWxlbmRhci5ldmVudHMubWFwKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFdmVudCA9IGV2ZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldEV2ZW50ICE9IG51bGwpIGNhbGVuZGFyLmV2ZW50cy5zcGxpY2UoY2FsZW5kYXIuZXZlbnRzLmluZGV4T2YodGFyZ2V0RXZlbnQpLCAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChiYWNrZW5kVVJMICsgXCIvYXBpL3VwZGF0ZXVzZXJkYXRhXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYWxlbmRhcnM6IG5ld2RhdGEuY2FsZW5kYXJzIH0pIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoXCLlsI3kuI3otbcgLi4uIOeZvOeUn+aKgOihk+aAp+WVj+mhjOWVpiBUX1RcIiwgXCLliKrpmaTkuovku7bmmYLnmbznlJ/kuobkuIDkupvllY/poYzvvIzluIzmnJvkvaDlj6/ku6XoiIfmiJHlgJHoga/ntaHkvobluavliqnmiJHlgJHmlLnpgLIgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFja2VuZFVSTCArIFwiL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCwgcmVtb3Zpbmc6IGZhbHNlLCBlZGl0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZvcm1DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIGlnbm9yZVJlYXNvbjogdmFsdWUuaWdub3JlUmVhc29uLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlOiB2YWx1ZS5pZ25vcmUsXHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhcjogdmFsdWUuY2FsZW5kYXIsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiB2YWx1ZS50aW1lLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdmFsdWUuZGF0ZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB2YWx1ZS50aXRsZSxcclxuICAgICAgICAgICAgICAgIGFsbGRheTogdmFsdWUuYWxsZGF5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIERheXZpZXdDb250ZW50ID0gPExvYWRlciAvPjtcclxuICAgICAgICB2YXIgQWxsRGF5RXZlbnRzQ29udGVudCA9IDxMb2FkZXIgLz47XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlcmRhdGEuY2FsZW5kYXJzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgY2FsZW5kYXJPcHRpb25zID0gdGhpcy5zdGF0ZS51c2VyZGF0YS5jYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGxhYmVsOiBjYWxlbmRhci50aXRsZSwgdmFsdWU6IGNhbGVuZGFyIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dGluZy5pZ25vcmUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZVJlYXNvbiA9IHRoaXMuc3RhdGUuaW5wdXRpbmcuaWdub3JlLmluY2x1ZGVzKFwiaWdub3JlXCIpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5b+955Wl5Y6f5ZugPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwiaWdub3JlUmVhc29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dGluZy5hbGxkYXkgPT0gdW5kZWZpbmVkIHx8ICF0aGlzLnN0YXRlLmlucHV0aW5nLmFsbGRheS5pbmNsdWRlcyhcImFsbGRheVwiKSlcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5pmC6ZaTPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwidGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFycywgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSksIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG4gICAgICAgICAgICB2YXIgYWxsRGF5RXZlbnRzID0gYWxsRGF5RXZlbnRzVG9EaXNwYXkodGhpcy5zdGF0ZS51c2VyZGF0YS5jYWxlbmRhcnMsIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG4gICAgICAgICAgICBEYXl2aWV3Q29udGVudCA9IDxEYXlWaWV3IGV2ZW50cz17ZmlsbGVkfSBvcGVuRXZlbnRFZGl0RGlhbG9nPXt0aGlzLm9wZW5FdmVudEVkaXREaWFsb2d9IG9wZW5FdmVudENyZWF0ZURpYWxvZz17dGhpcy5vcGVuRXZlbnRDcmVhdGVEaWFsb2d9IC8+O1xyXG4gICAgICAgICAgICBBbGxEYXlFdmVudHNDb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgPEFsbERheUV2ZW50cyBldmVudHM9e2FsbERheUV2ZW50c30gb3BlbkV2ZW50RWRpdERpYWxvZz17dGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nfSBvcGVuRXZlbnRDcmVhdGVEaWFsb2c9e3RoaXMub3BlbkV2ZW50Q3JlYXRlRGlhbG9nfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRheURlc2NyaXB0aW9uID0gZ2V0RGF5RGVzY3JpcHRpb24odGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5SZWFjYWwgOiDlsIjms6jmlrzkvb/nlKjogIXpq5TpqZfnmoTml6XnqIvopo/lioPlt6Xlhbc8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWxtZXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleGJveEdyaWQuSXRlbSBjb21wb25lbnRDbGFzcz17Q29sfSBjb2xzcGFuPXsyNH0geHM9ezIwfSBzbT17MTh9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZCBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveEdyaWQuSXRlbSBjb2xzcGFuPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogODAsIG1hcmdpbkxlZnQ6IDI4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luQm90dG9tOiAwIH19PlJlYWNhbDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiwgbWFyZ2luVG9wOiAwIH19PuWwiOazqOaWvOS9v+eUqOiAhemrlOmpl+eahOaXpeeoi+imj+WKg+W3peWFtzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogNDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXlQaWNrZXIgc2VsZWN0ZWREYXlzPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5fSBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjgsIG1hcmdpblRvcDogMzYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5Cb3R0b206IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRGdWxsWWVhcigpfSAvIHt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldE1vbnRoKCkgKyAxfSAvIHt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiLCBtYXJnaW5Ub3A6IDAgfX0+e2RheURlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMjB2aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5sb2FkZWR9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FsbERheUV2ZW50c0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94R3JpZC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkLkl0ZW0gY29sc3Bhbj17MTR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA2MCB9fSBib2R5RmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmxvYWRlZH0gdGltZW91dD17ZHVyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RGF5dmlld0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94R3JpZC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94R3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5lZGl0aW5nRXZlbnR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCIgd2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgzMTVkZWcsIFwiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmNvbG9yWzBdICsgXCIgMCUsIFwiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmNvbG9yWzFdICsgXCIgMTAwJSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuY2FsZW5kYXJUaXRsZS5jaGFyQXQoMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDYsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+e3RoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5jYWxlbmRhclRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGZvcm1WYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dGluZ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5LqL5Lu25qiZ6aGMPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD7ml6XmnJ88L0NvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cImRhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBhY2NlcHRlcj17Q2hlY2tib3hHcm91cH0gbmFtZT1cImFsbGRheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJhbGxkYXlcIj7lhajlpKnkuovku7Y8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgYWNjZXB0ZXI9e0NoZWNrYm94R3JvdXB9IG5hbWU9XCJpZ25vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiaWdub3JlXCI+5b+955Wl6Kmy5LqL6aCFPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWdub3JlUmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZC5JdGVtIGNvbHNwYW49ezN9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInJlZFwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlRXZlbnR9IGxvYWRpbmc9e3RoaXMuc3RhdGUucmVtb3Zpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliKrpmaRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveEdyaWQuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZC5JdGVtIGNvbHNwYW49ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkLkl0ZW0gY29sc3Bhbj17Nn0gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlRXZlbnRFZGl0RGlhbG9nfT7lj5bmtog8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy51cGRhdGVFdmVudH0gbG9hZGluZz17dGhpcy5zdGF0ZS53YWl0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLmNyZWF0aW5nRXZlbnR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCIgd2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PuWJteW7uuaWsOS6i+S7tjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGZvcm1WYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dGluZ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+6KGM5LqL5puGPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJjYWxlbmRhclwiIGRhdGE9e2NhbGVuZGFyT3B0aW9uc30gYWNjZXB0ZXI9e1NlbGVjdFBpY2tlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPuS6i+S7tuaomemhjDwvQ29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+5pel5pyfPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgYWNjZXB0ZXI9e0NoZWNrYm94R3JvdXB9IG5hbWU9XCJhbGxkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiYWxsZGF5XCI+5YWo5aSp5LqL5Lu2PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2VFdmVudENyZWF0ZURpYWxvZ30+5Y+W5raIPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUV2ZW50fSBsb2FkaW5nPXt0aGlzLnN0YXRlLndhaXRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Ym156uLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlLWVudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlLWFwcGVhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlLWVudGVyLWFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAuZmFkZS1hcHBlYXItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZmFkZS1lbnRlci1kb25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZhZGUtZXhpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmFkZS1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlLWV4aXQtZG9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYmcucG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDgwcHggMCA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRGF5UGlja2VyIHN0eWxlcyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTW9udGhzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTW9udGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQXdDQVlBQUFCNVI5Z1ZBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBVlZKUkVGVVdBbk4yRzBLZ2pBWXdQSHBHZlJrYVplcXZnUWFLK2hZM1NVSHJrMVl6TkxheS9PaUVGcDkySSsvTXAyRjJNaDJsTElTV25mbEZqekgyNjNSUWp6TVoxOXdnczczZXowbzFXbXRXK2RnQTAxVnhyRTNwNmwyR0xzbkJ5MVZZUU90VlNFSC9hdENDZ3FwUWdLS3FZSU9pcTJDQmtxdGdnTEtxUUlLZ3FnQ0JqcEoyWTVDZEorenJUOUE3SEhTVEExZHhVZEhnekNxSklFd3EwU0RzS3NFZzZpcUJJRW9xL3dFY1ZSWkJYRlYrUUp4VjVtQnRsREZCNVZqWVRhR1oyc2Y0UjlQTTdVOVpVK2xMdWFldFBQLzVEaWUzVG9PMSt1K01LdEhzMDZxT0RCMnpCbkkvakJkNE1QUW0xVmtZNzlUYjE4Z0IrQzYyRmRCRnNaUjZ5ZUlvMVlRaUxKV01JaXFWalFJdTFZU0NMTldGZ2lqVmpZSXVoWVlDS29XS0FpaUZnb29weFlhS0xVV09paTJGZ2tvcGhZcDZGM3I0Mlc1QTlzOU9jZ052dmE4eFFheXNLWGxGeXRvcWRZbVFINnRGM3RvU1VvMElOcTlBQUFBQUVsRlRrU3VRbUNDXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLW5leHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQXdDQVlBQUFCNVI5Z1ZBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBWFJKUkVGVVdBbk4xMTl1Z2pBY3dQSFd6SjFnbm14ekIvQkJFMG4yNG00eGZOa1RhT0w3d090c2wzQVhNTWIrVmphYTFCRzAwTjhmU0VpYlBwQVAzeEFLS3MyeWp6VFBIOVJBamhFbzlXelByL1ZtOHpnRTArZ1hBVEF4eHV4dHFlSjl0NXRJd3Y1QXRRQUFwc2ZUNlRQZGJwK2tVQmNnVnd2TzUxS3FWaE1rWEtzVkpGWHJPa2lnVmhDSXMxWTRpS2xXWnhCMXJYNGd3bHBSSUlwYThTRGtXbWdnckZxNElJUmFKS0NZV25TZ25yWElRVjFyOFlEKzFWcm4rYlJlYWd5c0lGZkxBQlJ0MzF2OG9CdTF4RUJ0dGZSYmx0bWZqZ0VjV2g5c25VUzJrTmRCSzZXTjF2ck9XeE9iV3N6K2ZqeGV2c3htQjFHUURmSU5XaWV2ODNuaGFvaUIvQ29PVTQzOG9QcmhYUzBXcFE5eGMxWlFXeFdIcVVZZTBJMHFyS0NRS2p5Z0RsWElRVjJyMElGNlZpRUJ4VlRCQlNGVVFRTmhWWWtISVZlSkF0a05zYlE3YzFMdHpQNkZzT2JoYjJyQ0t2N05CSUdvcTRTRG1Lb0VnVGlyWEFjSlZHa0ZTVlZwZ29TclhJQ0dVTVVIL1FCWk5TVXk1WFdVaHdBQUFBQkpSVTVFcmtKZ2dnPT1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbi0taW50ZXJhY3Rpb25EaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUNhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1DYXB0aW9uID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtkYXlzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtkYXlzUm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheSBhYmJyW3RpdGxlXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItQm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2VlayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrTnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWFlY2VjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhiOTg5ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLS1pbnRlcmFjdGlvbkRpc2FibGVkIC5EYXlQaWNrZXItRGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Gb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVRvZGF5QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0YTkwZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLXRvZGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLW91dHNpZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhiOTg5ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkY2UwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmMTsgKi9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIEV4YW1wbGUgbW9kaWZpZXJzICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zdW5kYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLXN1bmRheTpub3QoLkRheVBpY2tlci1EYXktLXRvZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGNlMGUwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLXNlbGVjdGVkOm5vdCguRGF5UGlja2VyLURheS0tZGlzYWJsZWQpOm5vdCguRGF5UGlja2VyLURheS0tb3V0c2lkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YwZjhmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxYTBmYTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXI6bm90KC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5Om5vdCguRGF5UGlja2VyLURheS0tZGlzYWJsZWQpOm5vdCguRGF5UGlja2VyLURheS0tc2VsZWN0ZWQpOm5vdCguRGF5UGlja2VyLURheS0tb3V0c2lkZSk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogRGF5UGlja2VySW5wdXQgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlcklucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlcklucHV0LU92ZXJsYXlXcmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlcklucHV0LU92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\imyua\\\\dev\\\\calendar\\\\pages\\\\index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./utils/methods.js":
/*!**************************!*\
  !*** ./utils/methods.js ***!
  \**************************/
/*! exports provided: generateUUID, getDayDescription, displayError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUUID", function() { return generateUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayDescription", function() { return getDayDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayError", function() { return displayError; });
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rsuite */ "rsuite");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_0__);
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

function displayError(title, message) {
  rsuite__WEBPACK_IMPORTED_MODULE_0__["Notification"]["error"]({
    title: title,
    description: message
  });
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