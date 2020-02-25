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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventCard */ "./comps/eventCard.js");
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
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: event.id,
        container: true,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        xs: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("p", {
        style: {
          color: "white",
          fontSize: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, event.isEmpty ? "" : event.getStartTimeSrting())), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        xs: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(_eventCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        event: event,
        openEventEditDialog: this.props.openEventEditDialog,
        openEventCreateDialog: this.props.openEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes */ "./classes.js");
var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\comps\\eventCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EventCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      elevation: 0
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEmptyCardClick = this.handleEmptyCardClick.bind(this);
  }

  handleMouseOver() {
    this.setState({
      elevation: 20
    });
  }

  handleMouseLeave() {
    this.setState({
      elevation: 0
    });
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
      borderBottomColor: "#444444",
      borderBottomWidth: 1,
      borderTopStyle: startTime.getMinutes() == 0 ? "solid" : "none",
      borderTopColor: "#444444",
      borderTopWidth: 1
    };
    return __jsx("div", {
      style: cardStyle,
      key: startTime.getTime(),
      onClick: this.handleEmptyCardClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
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
    if (this.props.event instanceof _classes__WEBPACK_IMPORTED_MODULE_2__["Event"]) {
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
          marginTop: this.props.height != undefined ? 15 : 0,
          paddingTop: 6,
          paddingBottom: 6
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
            lineNumber: 123
          },
          __self: this
        }, this.props.event.title, " ") : __jsx("p", {
          key: "title",
          style: {
            color: "white"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, this.props.event.title, " ", __jsx("strong", {
          style: {
            marginLeft: 16,
            color: "rgba(255,255,255,0.4)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
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
            lineNumber: 135
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
              lineNumber: 141
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
            lineNumber: 147
          },
          __self: this
        }, this.props.event.calendarTitle));
        return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
          style: style,
          elevation: this.state.elevation,
          onMouseEnter: this.handleMouseOver,
          onMouseLeave: this.handleMouseLeave,
          onClick: this.handleClick,
          key: this.props.event.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, eventInfo.slice(0, lineAmount).map(info => {
          return info;
        }));
      }
    } else {
      console.error("渲染事件卡片時接收到了不符合規範的 Event 物件。");
      return null;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EventCard);

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
/* harmony import */ var _material_ui_core_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/container */ "@material-ui/core/container");
/* harmony import */ var _material_ui_core_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_DayView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/DayView */ "./comps/DayView.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes */ "./classes.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-day-picker */ "react-day-picker");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















function startOfDay(date) {
  if (!date instanceof Date) {
    console.error("傳入的時間不是合法的 Date 物件。");
    return null;
  }

  date = new Date(date);
  var time = new Date();
  time.setTime(date.getTime());
  time.setHours(0, 0, 0);
  return time;
}

function endOfDay(date) {
  if (!date instanceof Date) {
    console.error("傳入的時間不是合法的 Date 物件。");
    return null;
  }

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

    filled.push(new _classes__WEBPACK_IMPORTED_MODULE_6__["Event"]({
      startTime: time,
      endTime: startTime
    }, true));
    filled.push(event);
    time.setTime(endTime.getTime());
  });
  filled.push(new _classes__WEBPACK_IMPORTED_MODULE_6__["Event"]({
    startTime: time,
    endTime: endOfDay(date)
  }, true));
  return filled;
}

function eventsToDispay(calendars, date) {
  var eventsToDispay = [];
  calendars.map(calendar => {
    calendar = new _classes__WEBPACK_IMPORTED_MODULE_6__["Calendar"](calendar);
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
      selectedDay: new Date(),
      eventsToDispay: [],
      userdata: {},
      filled: [],
      inputing: {
        title: "",
        date: "",
        time: ""
      },
      editingEvent: false,
      creatingEvent: false,
      selectedEvent: new _classes__WEBPACK_IMPORTED_MODULE_6__["Event"]({
        title: "選中的事件",
        startTime: new Date(),
        endTime: new Date(),
        color: ["#fd3721", "#b721ff"]
      })
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.openEventEditDialog = this.openEventEditDialog.bind(this);
    this.closeEventEditDialog = this.closeEventEditDialog.bind(this);
    this.openEventCreateDialog = this.openEventCreateDialog.bind(this);
    this.closeEventCreateDialog = this.closeEventCreateDialog.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
  }

  async handleDayClick(day, {
    selected
  }) {
    this.setState({
      selectedDay: selected ? new Date() : day
    });
  }

  static async getInitialProps() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_6__["User"](json);
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
        userdata: this.props.userdata
      });
    }, 200);
  }

  openEventEditDialog(event) {
    this.setState({
      selectedEvent: event,
      editingEvent: true,
      inputing: {
        title: event.title,
        date: event.startTime.getFullYear() + "/" + event.startTime.getMonth() + "/" + event.startTime.getDate(),
        time: event.startTime.getHours() + ":" + event.startTime.getMinutes() + "~" + event.endTime.getHours() + ":" + event.endTime.getMinutes()
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
        date: this.state.selectedDay.getFullYear() + "/" + this.state.selectedDay.getMonth() + "/" + this.state.selectedDay.getDate()
      }
    });
  }

  closeEventCreateDialog() {
    this.setState({
      creatingEvent: false
    });
  }

  async createEvent() {
    var newStartTime = new Date();
    var newEndTime = new Date();
    newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
    newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
    newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
    newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
    var newdata = new _classes__WEBPACK_IMPORTED_MODULE_6__["User"](this.state.userdata);
    newdata.calendars.map(calendar => {
      if (calendar.title == this.state.inputing.calendar) {
        calendar.events.push(new _classes__WEBPACK_IMPORTED_MODULE_6__["Event"]({
          title: this.state.inputing.title,
          startTime: newStartTime,
          endTime: newEndTime,
          color: calendar.color
        }));
      }
    });
    await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/updateuserdata", {
      method: "post",
      body: JSON.stringify({
        calendars: newdata.calendars
      })
    });
    this.setState({
      creatingEvent: false
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_6__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    this.setState({
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd
    });
  }

  async updateEvent() {
    var newStartTime = new Date();
    var newEndTime = new Date();
    newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
    newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
    newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
    newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
    var newdata = new _classes__WEBPACK_IMPORTED_MODULE_6__["User"](this.state.userdata);
    newdata.calendars.map(calendar => {
      calendar.events.map(event => {
        if (event.id == this.state.selectedEvent.id) {
          event.startTime = newStartTime;
          event.endTime = newEndTime;
          event.title = this.state.inputing.title;
        }
      });
    });
    await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/updateuserdata", {
      method: "post",
      body: JSON.stringify({
        calendars: newdata.calendars
      })
    });
    this.setState({
      editingEvent: false
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/getuserdata");
    const json = await res.json();
    var userdata = new _classes__WEBPACK_IMPORTED_MODULE_6__["User"](json);
    var etd = eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
    this.setState({
      userdata: userdata,
      filled: filled,
      eventsToDispay: etd
    });
  }

  handleTitleChange(e) {
    this.state.inputing.title = e.target.value;
  }

  handleDateChange(e) {
    this.state.inputing.date = e.target.value;
  }

  handleTimeChange(e) {
    this.state.inputing.time = e.target.value;
  }

  handleCalendarChange(e) {
    this.state.inputing.calendar = e.target.value;
  }

  render() {
    if (this.state.userdata.calendars != undefined) {
      var calendarOptions = this.state.userdata.calendars.map(calendar => {
        return __jsx("option", {
          key: calendar.title,
          value: calendar.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, calendar.title);
      });
      var filled = fillEvents(eventsToDispay(this.state.userdata.calendars, this.state.selectedDay), this.state.selectedDay);
      var dayDescription = "";
      var DayA = new Date(this.state.selectedDay);
      var DayB = new Date();
      DayA.setHours(12, 0, 0);
      DayB.setHours(12, 0, 0);

      if (parseInt((DayA - DayB) / 3600000) < 0) {
        if (parseInt((DayA - DayB) / 3600000) == 0) dayDescription = "今天";else if (parseInt((DayA - DayB) / 3600000) == -24) dayDescription = "昨天";else if (parseInt((DayA - DayB) / 3600000) == -48) dayDescription = "前天";else dayDescription = parseInt((DayA - DayB) / 3600000 / -24) + " 天前";
      } else {
        if (parseInt((DayA - DayB) / 3600000) == 0) dayDescription = "今天";else if (parseInt((DayA - DayB) / 3600000) == 23) dayDescription = "明天";else if (parseInt((DayA - DayB) / 3600000) == 47) dayDescription = "後天";else dayDescription = parseInt((DayA - DayB) / 3600000 / 24) + 1 + " 天後";
      }

      return __jsx(_material_ui_core_container__WEBPACK_IMPORTED_MODULE_2___default.a, {
        maxWidth: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx("div", {
        style: {
          marginTop: 60
        },
        className: "jsx-2272562205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16___default.a, {
        elevation: 20,
        style: {
          backgroundColor: "#333333",
          padding: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, __jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_7___default.a, {
        selectedDays: this.state.selectedDay,
        onDayClick: this.handleDayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }))), __jsx("div", {
        style: {
          marginLeft: 26,
          marginTop: 60
        },
        className: "jsx-2272562205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx("h2", {
        style: {
          color: "white",
          marginBottom: 16
        },
        className: "jsx-2272562205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, this.state.selectedDay.getFullYear(), " / ", this.state.selectedDay.getMonth() + 1, " / ", this.state.selectedDay.getDate()), __jsx("p", {
        style: {
          color: "gray",
          marginTop: 0
        },
        className: "jsx-2272562205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, dayDescription))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, __jsx("div", {
        style: {
          overflowY: "scroll",
          maxHeight: "90vh",
          padding: 24,
          marginLeft: 60
        },
        className: "jsx-2272562205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, __jsx(_comps_DayView__WEBPACK_IMPORTED_MODULE_3__["default"], {
        events: filled,
        openEventEditDialog: this.openEventEditDialog,
        openEventCreateDialog: this.openEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      })))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
        open: this.state.editingEvent,
        "aria-labelledby": "form-dialog-title",
        width: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
        autoFocus: true,
        defaultValue: this.state.selectedEvent.title,
        margin: "dense",
        id: "name",
        label: "\u4E8B\u4EF6\u6A19\u984C",
        fullWidth: true,
        onChange: this.handleTitleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
        defaultValue: this.state.selectedEvent.startTime.getFullYear() + "/" + this.state.selectedEvent.startTime.getMonth() + "/" + this.state.selectedEvent.startTime.getDate(),
        margin: "dense",
        id: "name",
        onChange: this.handleDateChange,
        label: "\u65E5\u671F",
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
        defaultValue: this.state.selectedEvent.startTime.getHours() + ":" + this.state.selectedEvent.startTime.getMinutes() + "~" + this.state.selectedEvent.endTime.getHours() + ":" + this.state.selectedEvent.endTime.getMinutes(),
        margin: "dense",
        id: "name",
        onChange: this.handleTimeChange,
        label: "\u6642\u9593",
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        color: "primary",
        onClick: this.closeCreatingEventEditDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "\u53D6\u6D88"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        color: "primary",
        onClick: this.createEvent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, "\u66F4\u65B0"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
        open: this.state.creatingEvent,
        "aria-labelledby": "form-dialog-title",
        width: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
        htmlFor: "demo-dialog-native",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "\u884C\u4E8B\u66C6"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15___default.a, {
        native: true,
        onChange: this.handleCalendarChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, calendarOptions)), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: "\u4E8B\u4EF6\u6A19\u984C",
        fullWidth: true,
        onChange: this.handleTitleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
        defaultValue: new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate(),
        margin: "dense",
        id: "name",
        onChange: this.handleDateChange,
        label: "\u65E5\u671F",
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
        defaultValue: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
        margin: "dense",
        id: "name",
        onChange: this.handleTimeChange,
        label: "\u6642\u9593",
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        color: "primary",
        onClick: this.closeEventCreateDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "\u53D6\u6D88"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        color: "primary",
        onClick: this.createEvent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "\u5275\u7ACB"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2272562205",
        __self: this
      }, "body{background:#222222;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{-webkit-border-radius:10px;border-radius:10px;margin:80px 0 5px 0;}::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:rgb(80,80,80);}.DayPicker{display:inline-block;font-size:1rem;}.DayPicker-wrapper{position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-Months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\");}.DayPicker-NavButton--next{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\");}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{display:table-caption;margin-bottom:0.5em;padding:0 0.5em;text-align:left;color:white;}.DayPicker-Caption>div{font-weight:500;font-size:1.15em;}.DayPicker-Weekdays{display:table-header-group;margin-top:1em;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5em;color:#8b9898;text-align:center;font-size:0.875em;}.DayPicker-Weekday abbr[title]{border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer;color:gray;}.DayPicker-WeekNumber{display:table-cell;padding:0.5em;min-width:1em;border-right:1px solid #eaecec;color:#8b9898;vertical-align:middle;text-align:right;font-size:0.75em;cursor:pointer;}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5em;}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:0.875em;cursor:pointer;}.DayPicker-Day--today{color:white;font-weight:700;}.DayPicker-Day--outside{color:#8b9898;cursor:default;}.DayPicker-Day--disabled{color:#dce0e0;cursor:default;}.DayPicker-Day--sunday{background-color:#f7f8f8;}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa;}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff;}.DayPickerInput{display:inline-block;}.DayPickerInput-OverlayWrapper{position:relative;}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW15dWFcXGRldlxcY2FsZW5kYXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1WHVDLEFBR2dELEFBR1QsQUFHaUIsQUFLRCxBQU9MLEFBS0gsQUFlTCxBQU1DLEFBZ0JJLEFBaUJOLEFBSU8sQUFLZ25CLEFBSXRuQixBQUlTLEFBUU4sQUFLVyxBQUtULEFBSUMsQUFRQSxBQUtLLEFBSU4sQUFJQyxBQVVBLEFBWUosQUFJRyxBQUlOLEFBVUEsQUFLRSxBQUtBLEFBUVcsQUFJWCxBQUlJLEFBT08sQUFLQSxBQU1KLEFBSUgsQUFJQSxVQWpPdEIsRUEwRUEsQUEwRmlDLEFBVWIsQ0F2RnBCLENBOUNpQixBQTBJRSxBQUtBLEFBWW5CLENBeENBLENBekRxQixFQTlFRSxBQW9DWCxBQW9EWixBQXFCQSxBQThCQSxBQXlDNkIsQUFxQjdCLEFBSVcsQ0FyT1gsQUFpRjJsQixBQW1DemtCLEFBUU8sQUFhUCxBQVVBLEVBaklDLEFBMk1uQixDQS9Id0IsRUFtQ3hCLENBa0VBLEFBZUEsQUFLQSxBQWVjLENBM05RLEFBa0ROLENBdkRPLEFBdUNKLEFBOERBLENBdUVuQixDQUtBLEFBTUEsSUF0RkEsQUFja0IsQUFxQkksQUFVSixFQW9GRyxDQXJOckIsRUEyQ2MsR0EwR1ksQ0ExSEwsQUFpREQsQUFhcEIsQ0FpR2tCLENBak1hLEVBTFAsQ0ErR0YsQUErQmEsQ0FyRlYsR0EyRUMsQ0E4Rm1CLEtBM0I3QyxDQTlHb0IsQ0FqRFMsSUEwSFQsRUFsREUsQ0EvR3RCLEdBS0EsQUFvRG1CLEFBNERuQixJQWVzQixDQXRHSCxBQTJESCxJQXFERSxDQW9CQSxJQWxEbEIsQ0F2RTZCLEFBaUJaLEVBZ0NqQixDQXpFdUIsR0FpTnZCLENBN0ZtQixDQVVPLENBb0JKLElBeEdKLFNBeENXLEFBbUhkLEdBM0ZXLEVBaUJLLEFBd0daLEdBcEJFLEdBVHJCLFNBOEJBLEtBaEowQixBQVVDLEFBY0YsQUFvR0osT0FwRkcsVUFxRkwsSUFuR0UsQ0F4QkksS0F1Q08sS0FxRmhDLFdBMUhxQixZQXNDSCxjQUNDLGVBQ25CLGVBakNBLE9BZ0JBLHNCQXRCQSx1V0FnREEseUJBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbXl1YVxcZGV2XFxjYWxlbmRhclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb250YWluZXJcIjtcclxuaW1wb3J0IERheVZpZXcgZnJvbSBcIi4uL2NvbXBzL0RheVZpZXdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IHsgVXNlciwgQ2FsZW5kYXIsIEV2ZW50IH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuaW1wb3J0IERheVBpY2tlciBmcm9tIFwicmVhY3QtZGF5LXBpY2tlclwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcblxyXG5mdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcclxuICAgIGlmICghZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5YKz5YWl55qE5pmC6ZaT5LiN5piv5ZCI5rOV55qEIERhdGUg54mp5Lu244CCXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGltZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgIHRpbWUuc2V0SG91cnMoMCwgMCwgMCk7XHJcbiAgICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5kT2ZEYXkoZGF0ZSkge1xyXG4gICAgaWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlgrPlhaXnmoTmmYLplpPkuI3mmK/lkIjms5XnmoQgRGF0ZSDnianku7bjgIJcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aW1lLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgdGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgIHJldHVybiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsRXZlbnRzKGV2ZW50cywgZGF0ZSkge1xyXG4gICAgdmFyIGZpbGxlZCA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIHRpbWUgPSBzdGFydE9mRGF5KGRhdGUpO1xyXG4gICAgZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LnN0YXJ0VGltZSk7XHJcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShldmVudC5lbmRUaW1lKTtcclxuICAgICAgICBpZiAoc3RhcnRUaW1lLmdldEhvdXJzKCkgPiBlbmRUaW1lLmdldEhvdXJzKCkpIHtcclxuICAgICAgICAgICAgZW5kVGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsbGVkLnB1c2gobmV3IEV2ZW50KHsgc3RhcnRUaW1lOiB0aW1lLCBlbmRUaW1lOiBzdGFydFRpbWUgfSwgdHJ1ZSkpO1xyXG4gICAgICAgIGZpbGxlZC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB0aW1lLnNldFRpbWUoZW5kVGltZS5nZXRUaW1lKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxsZWQucHVzaChuZXcgRXZlbnQoeyBzdGFydFRpbWU6IHRpbWUsIGVuZFRpbWU6IGVuZE9mRGF5KGRhdGUpIH0sIHRydWUpKTtcclxuICAgIHJldHVybiBmaWxsZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50c1RvRGlzcGF5KGNhbGVuZGFycywgZGF0ZSkge1xyXG4gICAgdmFyIGV2ZW50c1RvRGlzcGF5ID0gW107XHJcbiAgICBjYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhcik7XHJcbiAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpID09IGRhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgPT0gZGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgICAhZXZlbnQuaXNBbGxEYXlFdmVudCgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzVG9EaXNwYXkucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnRzVG9EaXNwYXkuc29ydCgoYSwgYikgPT4gYS5zdGFydFRpbWUgLSBiLnN0YXJ0VGltZSk7XHJcbiAgICByZXR1cm4gZXZlbnRzVG9EaXNwYXk7XHJcbn1cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBldmVudHNUb0Rpc3BheTogW10sXHJcbiAgICAgICAgICAgIHVzZXJkYXRhOiB7fSxcclxuICAgICAgICAgICAgZmlsbGVkOiBbXSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpbWU6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdGluZ0V2ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgY3JlYXRpbmdFdmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRXZlbnQ6IG5ldyBFdmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLpgbjkuK3nmoTkuovku7ZcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogW1wiI2ZkMzcyMVwiLCBcIiNiNzIxZmZcIl1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGF5Q2xpY2sgPSB0aGlzLmhhbmRsZURheUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nID0gdGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZyA9IHRoaXMuY2xvc2VFdmVudEVkaXREaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5FdmVudENyZWF0ZURpYWxvZyA9IHRoaXMub3BlbkV2ZW50Q3JlYXRlRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nID0gdGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCA9IHRoaXMudXBkYXRlRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVGl0bGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRlQ2hhbmdlID0gdGhpcy5oYW5kbGVEYXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVUaW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxlbmRhckNoYW5nZSA9IHRoaXMuaGFuZGxlQ2FsZW5kYXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVEYXlDbGljayhkYXksIHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZERheTogc2VsZWN0ZWQgPyBuZXcgRGF0ZSgpIDogZGF5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0dXNlcmRhdGFcIik7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgdmFyIHVzZXJkYXRhID0gbmV3IFVzZXIoanNvbik7XHJcbiAgICAgICAgdmFyIGV0ZCA9IGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHMoZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyh0aGlzLnByb3BzLmV2ZW50c1RvRGlzcGF5LCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGxlZDogZmlsbGVkLCB1c2VyZGF0YTogdGhpcy5wcm9wcy51c2VyZGF0YSB9KTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FdmVudEVkaXREaWFsb2coZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRFdmVudDogZXZlbnQsXHJcbiAgICAgICAgICAgIGVkaXRpbmdFdmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBldmVudC5zdGFydFRpbWUuZ2V0TW9udGgoKSArIFwiL1wiICsgZXZlbnQuc3RhcnRUaW1lLmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IGV2ZW50LnN0YXJ0VGltZS5nZXRIb3VycygpICsgXCI6XCIgKyBldmVudC5zdGFydFRpbWUuZ2V0TWludXRlcygpICsgXCJ+XCIgKyBldmVudC5lbmRUaW1lLmdldEhvdXJzKCkgKyBcIjpcIiArIGV2ZW50LmVuZFRpbWUuZ2V0TWludXRlcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUV2ZW50RWRpdERpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ0V2ZW50OiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRXZlbnRDcmVhdGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nRXZlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0aW5nOiB7IGRhdGU6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRNb250aCgpICsgXCIvXCIgKyB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldERhdGUoKSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VFdmVudENyZWF0ZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3JlYXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgdmFyIG5ld1N0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIG5ld0VuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRGdWxsWWVhcih0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzFdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzJdKTtcclxuICAgICAgICBuZXdFbmRUaW1lLnNldEZ1bGxZZWFyKHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMV0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICB2YXIgbmV3ZGF0YSA9IG5ldyBVc2VyKHRoaXMuc3RhdGUudXNlcmRhdGEpO1xyXG4gICAgICAgIG5ld2RhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxlbmRhci50aXRsZSA9PSB0aGlzLnN0YXRlLmlucHV0aW5nLmNhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhci5ldmVudHMucHVzaChuZXcgRXZlbnQoeyB0aXRsZTogdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZSwgc3RhcnRUaW1lOiBuZXdTdGFydFRpbWUsIGVuZFRpbWU6IG5ld0VuZFRpbWUsIGNvbG9yOiBjYWxlbmRhci5jb2xvciB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXBkYXRldXNlcmRhdGFcIiwgeyBtZXRob2Q6IFwicG9zdFwiLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNhbGVuZGFyczogbmV3ZGF0YS5jYWxlbmRhcnMgfSkgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyZWF0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVFdmVudCgpIHtcclxuICAgICAgICB2YXIgbmV3U3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbmV3RW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbmV3U3RhcnRUaW1lLnNldEZ1bGxZZWFyKHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMV0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsyXSk7XHJcbiAgICAgICAgbmV3U3RhcnRUaW1lLnNldEhvdXJzKHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMF0uc3BsaXQoXCI6XCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVsxXSk7XHJcbiAgICAgICAgbmV3RW5kVGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzFdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIHZhciBuZXdkYXRhID0gbmV3IFVzZXIodGhpcy5zdGF0ZS51c2VyZGF0YSk7XHJcbiAgICAgICAgbmV3ZGF0YS5jYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lID0gbmV3U3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmVuZFRpbWUgPSBuZXdFbmRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRpdGxlID0gdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VwZGF0ZXVzZXJkYXRhXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYWxlbmRhcnM6IG5ld2RhdGEuY2FsZW5kYXJzIH0pIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaXRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURhdGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRpbWVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbGVuZGFyQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmlucHV0aW5nLmNhbGVuZGFyID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGVuZGFyT3B0aW9ucyA9IHRoaXMuc3RhdGUudXNlcmRhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYWxlbmRhci50aXRsZX0gdmFsdWU9e2NhbGVuZGFyLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbGVuZGFyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKGV2ZW50c1RvRGlzcGF5KHRoaXMuc3RhdGUudXNlcmRhdGEuY2FsZW5kYXJzLCB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KSwgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF5RGVzY3JpcHRpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgRGF5QSA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG4gICAgICAgICAgICB2YXIgRGF5QiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIERheUEuc2V0SG91cnMoMTIsIDAsIDApO1xyXG4gICAgICAgICAgICBEYXlCLnNldEhvdXJzKDEyLCAwLCAwKTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCkgPT0gMCkgZGF5RGVzY3JpcHRpb24gPSBcIuS7iuWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoKERheUEgLSBEYXlCKSAvIDM2MDAwMDApID09IC0yNCkgZGF5RGVzY3JpcHRpb24gPSBcIuaYqOWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoKERheUEgLSBEYXlCKSAvIDM2MDAwMDApID09IC00OCkgZGF5RGVzY3JpcHRpb24gPSBcIuWJjeWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBkYXlEZXNjcmlwdGlvbiA9IHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwIC8gLTI0KSArIFwiIOWkqeWJjVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA9PSAwKSBkYXlEZXNjcmlwdGlvbiA9IFwi5LuK5aSpXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCkgPT0gMjMpIGRheURlc2NyaXB0aW9uID0gXCLmmI7lpKlcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA9PSA0NykgZGF5RGVzY3JpcHRpb24gPSBcIuW+jOWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBkYXlEZXNjcmlwdGlvbiA9IHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwIC8gMjQpICsgMSArIFwiIOWkqeW+jFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA2MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsyMH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLCBwYWRkaW5nOiAxNn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5UGlja2VyIHNlbGVjdGVkRGF5cz17dGhpcy5zdGF0ZS5zZWxlY3RlZERheX0gb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI2LCBtYXJnaW5Ub3A6IDYwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5Cb3R0b206IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRGdWxsWWVhcigpfSAvIHt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldE1vbnRoKCkgKyAxfSAvIHt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiwgbWFyZ2luVG9wOiAwIH19PntkYXlEZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCI5MHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA2MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheVZpZXcgZXZlbnRzPXtmaWxsZWR9IG9wZW5FdmVudEVkaXREaWFsb2c9e3RoaXMub3BlbkV2ZW50RWRpdERpYWxvZ30gb3BlbkV2ZW50Q3JlYXRlRGlhbG9nPXt0aGlzLm9wZW5FdmVudENyZWF0ZURpYWxvZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e3RoaXMuc3RhdGUuZWRpdGluZ0V2ZW50fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiIHdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLkuovku7bmqJnpoYxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuc3RhcnRUaW1lLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5zdGFydFRpbWUuZ2V0TW9udGgoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnN0YXJ0VGltZS5nZXREYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaXpeacn1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5zdGFydFRpbWUuZ2V0SG91cnMoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnN0YXJ0VGltZS5nZXRNaW51dGVzKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIn5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5lbmRUaW1lLmdldEhvdXJzKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5lbmRUaW1lLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pmC6ZaTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VDcmVhdGluZ0V2ZW50RWRpdERpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5jcmVhdGVFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e3RoaXMuc3RhdGUuY3JlYXRpbmdFdmVudH0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIiB3aWR0aD1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJkZW1vLWRpYWxvZy1uYXRpdmVcIj7ooYzkuovmm4Y8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBuYXRpdmUgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2FsZW5kYXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsZW5kYXJPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgYXV0b0ZvY3VzIG1hcmdpbj1cImRlbnNlXCIgaWQ9XCJuYW1lXCIgbGFiZWw9XCLkuovku7bmqJnpoYxcIiBmdWxsV2lkdGggb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGl0bGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIFwiL1wiICsgbmV3IERhdGUoKS5nZXREYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaXpeacn1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIn5cIiArIChuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAxKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaZgumWk1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmNsb3NlRXZlbnRDcmVhdGVEaWFsb2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWPlua2iFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWJteeri1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDgwcHggMCA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIERheVBpY2tlciBzdHlsZXMgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTW9udGhzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Nb250aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjI1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uLS1wcmV2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQXdDQVlBQUFCNVI5Z1ZBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBVlZKUkVGVVdBbk4yRzBLZ2pBWXdQSHBHZlJrYVplcXZnUWFLK2hZM1NVSHJrMVl6TkxheS9PaUVGcDkySSsvTXAyRjJNaDJsTElTV25mbEZqekgyNjNSUWp6TVoxOXdnczczZXowbzFXbXRXK2RnQTAxVnhyRTNwNmwyR0xzbkJ5MVZZUU90VlNFSC9hdENDZ3FwUWdLS3FZSU9pcTJDQmtxdGdnTEtxUUlLZ3FnQ0JqcEoyWTVDZEorenJUOUE3SEhTVEExZHhVZEhnekNxSklFd3EwU0RzS3NFZzZpcUJJRW9xL3dFY1ZSWkJYRlYrUUp4VjVtQnRsREZCNVZqWVRhR1oyc2Y0UjlQTTdVOVpVK2xMdWFldFBQLzVEaWUzVG9PMSt1K01LdEhzMDZxT0RCMnpCbkkvakJkNE1QUW0xVmtZNzlUYjE4Z0IrQzYyRmRCRnNaUjZ5ZUlvMVlRaUxKV01JaXFWalFJdTFZU0NMTldGZ2lqVmpZSXVoWVlDS29XS0FpaUZnb29weFlhS0xVV09paTJGZ2tvcGhZcDZGM3I0Mlc1QTlzOU9jZ052dmE4eFFheXNLWGxGeXRvcWRZbVFINnRGM3RvU1VvMElOcTlBQUFBQUVsRlRrU3VRbUNDXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbi0tbmV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQXdDQVlBQUFCNVI5Z1ZBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBWFJKUkVGVVdBbk4xMTl1Z2pBY3dQSFd6SjFnbm14ekIvQkJFMG4yNG00eGZOa1RhT0w3d090c2wzQVhNTWIrVmphYTFCRzAwTjhmU0VpYlBwQVAzeEFLS3MyeWp6VFBIOVJBamhFbzlXelByL1ZtOHpnRTArZ1hBVEF4eHV4dHFlSjl0NXRJd3Y1QXRRQUFwc2ZUNlRQZGJwK2tVQmNnVnd2TzUxS3FWaE1rWEtzVkpGWHJPa2lnVmhDSXMxWTRpS2xXWnhCMXJYNGd3bHBSSUlwYThTRGtXbWdnckZxNElJUmFKS0NZV25TZ25yWElRVjFyOFlEKzFWcm4rYlJlYWd5c0lGZkxBQlJ0MzF2OG9CdTF4RUJ0dGZSYmx0bWZqZ0VjV2g5c25VUzJrTmRCSzZXTjF2ck9XeE9iV3N6K2ZqeGV2c3htQjFHUURmSU5XaWV2ODNuaGFvaUIvQ29PVTQzOG9QcmhYUzBXcFE5eGMxWlFXeFdIcVVZZTBJMHFyS0NRS2p5Z0RsWElRVjJyMElGNlZpRUJ4VlRCQlNGVVFRTmhWWWtISVZlSkF0a05zYlE3YzFMdHpQNkZzT2JoYjJyQ0t2N05CSUdvcTRTRG1Lb0VnVGlyWEFjSlZHa0ZTVlZwZ29TclhJQ0dVTVVIL1FCWk5TVXk1WFdVaHdBQUFBQkpSVTVFcmtKZ2dnPT1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uLS1pbnRlcmFjdGlvbkRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItQ2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1DYXB0aW9uID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheXNSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtkYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheSBhYmJyW3RpdGxlXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla051bWJlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYWVjZWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhiOTg5ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLS1pbnRlcmFjdGlvbkRpc2FibGVkIC5EYXlQaWNrZXItRGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Gb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVRvZGF5QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRhOTBlMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLXRvZGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkY2UwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWYxOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFeGFtcGxlIG1vZGlmaWVycyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLXN1bmRheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc3VuZGF5Om5vdCguRGF5UGlja2VyLURheS0tdG9kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGNlMGUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc2VsZWN0ZWQ6bm90KC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhOTBlMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjBmOGZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc2VsZWN0ZWQ6bm90KC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFhMGZhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyOm5vdCguRGF5UGlja2VyLS1pbnRlcmFjdGlvbkRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXk6bm90KC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCk6bm90KC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBEYXlQaWNrZXJJbnB1dCAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlcklucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlcklucHV0LU92ZXJsYXlXcmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlcklucHV0LU92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cD5sb2FkaW5nPC9wPjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\imyua\\\\dev\\\\calendar\\\\pages\\\\index.js */"));
    } else {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        },
        __self: this
      }, "loading");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./utils/methods.js":
/*!**************************!*\
  !*** ./utils/methods.js ***!
  \**************************/
/*! exports provided: generateUUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUUID", function() { return generateUUID; });
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

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\imyua\dev\calendar\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/container":
/*!**********************************************!*\
  !*** external "@material-ui/core/container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/container");

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