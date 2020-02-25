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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
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
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://calendar-ten.now.sh//api/getuserdata");
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

      return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
        onClick: this.closeEventEditDialog,
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
      }, "body{background:#222222;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{-webkit-border-radius:10px;border-radius:10px;margin:80px 0 5px 0;}::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:rgb(80,80,80);}.DayPicker{display:inline-block;font-size:1rem;}.DayPicker-wrapper{position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-Months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\");}.DayPicker-NavButton--next{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\");}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{display:table-caption;margin-bottom:0.5em;padding:0 0.5em;text-align:left;color:white;}.DayPicker-Caption>div{font-weight:500;font-size:1.15em;}.DayPicker-Weekdays{display:table-header-group;margin-top:1em;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5em;color:#8b9898;text-align:center;font-size:0.875em;}.DayPicker-Weekday abbr[title]{border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer;color:gray;}.DayPicker-WeekNumber{display:table-cell;padding:0.5em;min-width:1em;border-right:1px solid #eaecec;color:#8b9898;vertical-align:middle;text-align:right;font-size:0.75em;cursor:pointer;}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5em;}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:0.875em;cursor:pointer;}.DayPicker-Day--today{color:white;font-weight:700;}.DayPicker-Day--outside{color:#8b9898;cursor:default;}.DayPicker-Day--disabled{color:#dce0e0;cursor:default;}.DayPicker-Day--sunday{background-color:#f7f8f8;}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa;}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff;}.DayPickerInput{display:inline-block;}.DayPickerInput-OverlayWrapper{position:relative;}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW15dWFcXGRldlxcY2FsZW5kYXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1WHVDLEFBR2dELEFBR1QsQUFHaUIsQUFLRCxBQU9MLEFBS0gsQUFlTCxBQU1DLEFBZ0JJLEFBaUJOLEFBSU8sQUFLZ25CLEFBSXRuQixBQUlTLEFBUU4sQUFLVyxBQUtULEFBSUMsQUFRQSxBQUtLLEFBSU4sQUFJQyxBQVVBLEFBWUosQUFJRyxBQUlOLEFBVUEsQUFLRSxBQUtBLEFBUVcsQUFJWCxBQUlJLEFBT08sQUFLQSxBQU1KLEFBSUgsQUFJQSxVQWpPdEIsRUEwRUEsQUEwRmlDLEFBVWIsQ0F2RnBCLENBOUNpQixBQTBJRSxBQUtBLEFBWW5CLENBeENBLENBekRxQixFQTlFRSxBQW9DWCxBQW9EWixBQXFCQSxBQThCQSxBQXlDNkIsQUFxQjdCLEFBSVcsQ0FyT1gsQUFpRjJsQixBQW1DemtCLEFBUU8sQUFhUCxBQVVBLEVBaklDLEFBMk1uQixDQS9Id0IsRUFtQ3hCLENBa0VBLEFBZUEsQUFLQSxBQWVjLENBM05RLEFBa0ROLENBdkRPLEFBdUNKLEFBOERBLENBdUVuQixDQUtBLEFBTUEsSUF0RkEsQUFja0IsQUFxQkksQUFVSixFQW9GRyxDQXJOckIsRUEyQ2MsR0EwR1ksQ0ExSEwsQUFpREQsQUFhcEIsQ0FpR2tCLENBak1hLEVBTFAsQ0ErR0YsQUErQmEsQ0FyRlYsR0EyRUMsQ0E4Rm1CLEtBM0I3QyxDQTlHb0IsQ0FqRFMsSUEwSFQsRUFsREUsQ0EvR3RCLEdBS0EsQUFvRG1CLEFBNERuQixJQWVzQixDQXRHSCxBQTJESCxJQXFERSxDQW9CQSxJQWxEbEIsQ0F2RTZCLEFBaUJaLEVBZ0NqQixDQXpFdUIsR0FpTnZCLENBN0ZtQixDQVVPLENBb0JKLElBeEdKLFNBeENXLEFBbUhkLEdBM0ZXLEVBaUJLLEFBd0daLEdBcEJFLEdBVHJCLFNBOEJBLEtBaEowQixBQVVDLEFBY0YsQUFvR0osT0FwRkcsVUFxRkwsSUFuR0UsQ0F4QkksS0F1Q08sS0FxRmhDLFdBMUhxQixZQXNDSCxjQUNDLGVBQ25CLGVBakNBLE9BZ0JBLHNCQXRCQSx1V0FnREEseUJBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbXl1YVxcZGV2XFxjYWxlbmRhclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IERheVZpZXcgZnJvbSBcIi4uL2NvbXBzL0RheVZpZXdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IHsgVXNlciwgQ2FsZW5kYXIsIEV2ZW50IH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuaW1wb3J0IERheVBpY2tlciBmcm9tIFwicmVhY3QtZGF5LXBpY2tlclwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcblxyXG5mdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcclxuICAgIGlmICghZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5YKz5YWl55qE5pmC6ZaT5LiN5piv5ZCI5rOV55qEIERhdGUg54mp5Lu244CCXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGltZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgIHRpbWUuc2V0SG91cnMoMCwgMCwgMCk7XHJcbiAgICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5kT2ZEYXkoZGF0ZSkge1xyXG4gICAgaWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlgrPlhaXnmoTmmYLplpPkuI3mmK/lkIjms5XnmoQgRGF0ZSDnianku7bjgIJcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aW1lLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgdGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgIHJldHVybiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsRXZlbnRzKGV2ZW50cywgZGF0ZSkge1xyXG4gICAgdmFyIGZpbGxlZCA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIHRpbWUgPSBzdGFydE9mRGF5KGRhdGUpO1xyXG4gICAgZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LnN0YXJ0VGltZSk7XHJcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShldmVudC5lbmRUaW1lKTtcclxuICAgICAgICBpZiAoc3RhcnRUaW1lLmdldEhvdXJzKCkgPiBlbmRUaW1lLmdldEhvdXJzKCkpIHtcclxuICAgICAgICAgICAgZW5kVGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsbGVkLnB1c2gobmV3IEV2ZW50KHsgc3RhcnRUaW1lOiB0aW1lLCBlbmRUaW1lOiBzdGFydFRpbWUgfSwgdHJ1ZSkpO1xyXG4gICAgICAgIGZpbGxlZC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB0aW1lLnNldFRpbWUoZW5kVGltZS5nZXRUaW1lKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxsZWQucHVzaChuZXcgRXZlbnQoeyBzdGFydFRpbWU6IHRpbWUsIGVuZFRpbWU6IGVuZE9mRGF5KGRhdGUpIH0sIHRydWUpKTtcclxuICAgIHJldHVybiBmaWxsZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50c1RvRGlzcGF5KGNhbGVuZGFycywgZGF0ZSkge1xyXG4gICAgdmFyIGV2ZW50c1RvRGlzcGF5ID0gW107XHJcbiAgICBjYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhcik7XHJcbiAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpID09IGRhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgPT0gZGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgICAhZXZlbnQuaXNBbGxEYXlFdmVudCgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzVG9EaXNwYXkucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnRzVG9EaXNwYXkuc29ydCgoYSwgYikgPT4gYS5zdGFydFRpbWUgLSBiLnN0YXJ0VGltZSk7XHJcbiAgICByZXR1cm4gZXZlbnRzVG9EaXNwYXk7XHJcbn1cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBldmVudHNUb0Rpc3BheTogW10sXHJcbiAgICAgICAgICAgIHVzZXJkYXRhOiB7fSxcclxuICAgICAgICAgICAgZmlsbGVkOiBbXSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpbWU6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdGluZ0V2ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgY3JlYXRpbmdFdmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRXZlbnQ6IG5ldyBFdmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLpgbjkuK3nmoTkuovku7ZcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogW1wiI2ZkMzcyMVwiLCBcIiNiNzIxZmZcIl1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGF5Q2xpY2sgPSB0aGlzLmhhbmRsZURheUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nID0gdGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZyA9IHRoaXMuY2xvc2VFdmVudEVkaXREaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5FdmVudENyZWF0ZURpYWxvZyA9IHRoaXMub3BlbkV2ZW50Q3JlYXRlRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nID0gdGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCA9IHRoaXMudXBkYXRlRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVGl0bGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRlQ2hhbmdlID0gdGhpcy5oYW5kbGVEYXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVUaW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxlbmRhckNoYW5nZSA9IHRoaXMuaGFuZGxlQ2FsZW5kYXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVEYXlDbGljayhkYXksIHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZERheTogc2VsZWN0ZWQgPyBuZXcgRGF0ZSgpIDogZGF5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vY2FsZW5kYXItdGVuLm5vdy5zaC8vYXBpL2dldHVzZXJkYXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHZhciB1c2VyZGF0YSA9IG5ldyBVc2VyKGpzb24pO1xyXG4gICAgICAgIHZhciBldGQgPSBldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSksIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHJldHVybiB7IHVzZXJkYXRhOiB1c2VyZGF0YSwgZmlsbGVkOiBmaWxsZWQsIGV2ZW50c1RvRGlzcGF5OiBldGQgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHModGhpcy5wcm9wcy5ldmVudHNUb0Rpc3BheSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxsZWQ6IGZpbGxlZCwgdXNlcmRhdGE6IHRoaXMucHJvcHMudXNlcmRhdGEgfSk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRXZlbnRFZGl0RGlhbG9nKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICBlZGl0aW5nRXZlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0aW5nOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBldmVudC5zdGFydFRpbWUuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgKyBcIi9cIiArIGV2ZW50LnN0YXJ0VGltZS5nZXREYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBldmVudC5zdGFydFRpbWUuZ2V0SG91cnMoKSArIFwiOlwiICsgZXZlbnQuc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSArIFwiflwiICsgZXZlbnQuZW5kVGltZS5nZXRIb3VycygpICsgXCI6XCIgKyBldmVudC5lbmRUaW1lLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VFdmVudEVkaXREaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkV2ZW50Q3JlYXRlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjcmVhdGluZ0V2ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dGluZzogeyBkYXRlOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0TW9udGgoKSArIFwiL1wiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXREYXRlKCkgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRXZlbnRDcmVhdGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyZWF0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZUV2ZW50KCkge1xyXG4gICAgICAgIHZhciBuZXdTdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBuZXdFbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBuZXdTdGFydFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsyXSk7XHJcbiAgICAgICAgbmV3RW5kVGltZS5zZXRGdWxsWWVhcih0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzFdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzJdKTtcclxuICAgICAgICBuZXdTdGFydFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMF0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICBuZXdFbmRUaW1lLnNldEhvdXJzKHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzFdLnNwbGl0KFwiOlwiKVsxXSk7XHJcbiAgICAgICAgdmFyIG5ld2RhdGEgPSBuZXcgVXNlcih0aGlzLnN0YXRlLnVzZXJkYXRhKTtcclxuICAgICAgICBuZXdkYXRhLmNhbGVuZGFycy5tYXAoY2FsZW5kYXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2FsZW5kYXIudGl0bGUgPT0gdGhpcy5zdGF0ZS5pbnB1dGluZy5jYWxlbmRhcikge1xyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXIuZXZlbnRzLnB1c2gobmV3IEV2ZW50KHsgdGl0bGU6IHRoaXMuc3RhdGUuaW5wdXRpbmcudGl0bGUsIHN0YXJ0VGltZTogbmV3U3RhcnRUaW1lLCBlbmRUaW1lOiBuZXdFbmRUaW1lLCBjb2xvcjogY2FsZW5kYXIuY29sb3IgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VwZGF0ZXVzZXJkYXRhXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYWxlbmRhcnM6IG5ld2RhdGEuY2FsZW5kYXJzIH0pIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcmVhdGluZ0V2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0dXNlcmRhdGFcIik7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgdmFyIHVzZXJkYXRhID0gbmV3IFVzZXIoanNvbik7XHJcbiAgICAgICAgdmFyIGV0ZCA9IGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHMoZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJkYXRhOiB1c2VyZGF0YSwgZmlsbGVkOiBmaWxsZWQsIGV2ZW50c1RvRGlzcGF5OiBldGQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgdmFyIG5ld1N0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIG5ld0VuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRGdWxsWWVhcih0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzFdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzJdKTtcclxuICAgICAgICBuZXdFbmRUaW1lLnNldEZ1bGxZZWFyKHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMV0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICB2YXIgbmV3ZGF0YSA9IG5ldyBVc2VyKHRoaXMuc3RhdGUudXNlcmRhdGEpO1xyXG4gICAgICAgIG5ld2RhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgIGNhbGVuZGFyLmV2ZW50cy5tYXAoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmlkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSA9IG5ld1N0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5lbmRUaW1lID0gbmV3RW5kVGltZTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC50aXRsZSA9IHRoaXMuc3RhdGUuaW5wdXRpbmcudGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91cGRhdGV1c2VyZGF0YVwiLCB7IG1ldGhvZDogXCJwb3N0XCIsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FsZW5kYXJzOiBuZXdkYXRhLmNhbGVuZGFycyB9KSB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ0V2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0dXNlcmRhdGFcIik7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgdmFyIHVzZXJkYXRhID0gbmV3IFVzZXIoanNvbik7XHJcbiAgICAgICAgdmFyIGV0ZCA9IGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHMoZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJkYXRhOiB1c2VyZGF0YSwgZmlsbGVkOiBmaWxsZWQsIGV2ZW50c1RvRGlzcGF5OiBldGQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGl0bGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRpbmcudGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEYXRlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaW1lQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDYWxlbmRhckNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dGluZy5jYWxlbmRhciA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS51c2VyZGF0YS5jYWxlbmRhcnMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhck9wdGlvbnMgPSB0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFycy5tYXAoY2FsZW5kYXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2FsZW5kYXIudGl0bGV9IHZhbHVlPXtjYWxlbmRhci50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxlbmRhci50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFycywgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSksIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRheURlc2NyaXB0aW9uID0gXCJcIjtcclxuICAgICAgICAgICAgdmFyIERheUEgPSBuZXcgRGF0ZSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcclxuICAgICAgICAgICAgdmFyIERheUIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBEYXlBLnNldEhvdXJzKDEyLCAwLCAwKTtcclxuICAgICAgICAgICAgRGF5Qi5zZXRIb3VycygxMiwgMCwgMCk7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoKERheUEgLSBEYXlCKSAvIDM2MDAwMDApID09IDApIGRheURlc2NyaXB0aW9uID0gXCLku4rlpKlcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA9PSAtMjQpIGRheURlc2NyaXB0aW9uID0gXCLmmKjlpKlcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA9PSAtNDgpIGRheURlc2NyaXB0aW9uID0gXCLliY3lpKlcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgZGF5RGVzY3JpcHRpb24gPSBwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCAvIC0yNCkgKyBcIiDlpKnliY1cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCkgPT0gMCkgZGF5RGVzY3JpcHRpb24gPSBcIuS7iuWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoKERheUEgLSBEYXlCKSAvIDM2MDAwMDApID09IDIzKSBkYXlEZXNjcmlwdGlvbiA9IFwi5piO5aSpXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCkgPT0gNDcpIGRheURlc2NyaXB0aW9uID0gXCLlvozlpKlcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgZGF5RGVzY3JpcHRpb24gPSBwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCAvIDI0KSArIDEgKyBcIiDlpKnlvoxcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogNjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MjB9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIiwgcGFkZGluZzogMTZ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheVBpY2tlciBzZWxlY3RlZERheXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXl9IG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNiwgbWFyZ2luVG9wOiA2MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luQm90dG9tOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0RnVsbFllYXIoKX0gLyB7dGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRNb250aCgpICsgMX0gLyB7dGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXREYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJncmF5XCIsIG1hcmdpblRvcDogMCB9fT57ZGF5RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXlWaWV3IGV2ZW50cz17ZmlsbGVkfSBvcGVuRXZlbnRFZGl0RGlhbG9nPXt0aGlzLm9wZW5FdmVudEVkaXREaWFsb2d9IG9wZW5FdmVudENyZWF0ZURpYWxvZz17dGhpcy5vcGVuRXZlbnRDcmVhdGVEaWFsb2d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZyBvcGVuPXt0aGlzLnN0YXRlLmVkaXRpbmdFdmVudH0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIiB3aWR0aD1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5LqL5Lu25qiZ6aGMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5zdGFydFRpbWUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLml6XmnJ9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuc3RhcnRUaW1lLmdldEhvdXJzKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5zdGFydFRpbWUuZ2V0TWludXRlcygpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuZW5kVGltZS5nZXRIb3VycygpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuZW5kVGltZS5nZXRNaW51dGVzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaZgumWk1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmNsb3NlRXZlbnRFZGl0RGlhbG9nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlj5bmtohcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmm7TmlrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17dGhpcy5zdGF0ZS5jcmVhdGluZ0V2ZW50fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiIHdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImRlbW8tZGlhbG9nLW5hdGl2ZVwiPuihjOS6i+abhjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG5hdGl2ZSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDYWxlbmRhckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxlbmRhck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBhdXRvRm9jdXMgbWFyZ2luPVwiZGVuc2VcIiBpZD1cIm5hbWVcIiBsYWJlbD1cIuS6i+S7tuaomemhjFwiIGZ1bGxXaWR0aCBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgbmV3IERhdGUoKS5nZXRNb250aCgpICsgXCIvXCIgKyBuZXcgRGF0ZSgpLmdldERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pyfXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRIb3VycygpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSArIFwiflwiICsgKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIDEpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pmC6ZaTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VFdmVudENyZWF0ZURpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5jcmVhdGVFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Ym156uLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogODBweCAwIDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRGF5UGlja2VyIHN0eWxlcyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Nb250aHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU1vbnRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFWVkpSRUZVV0FuTjJHMEtnakFZd1BIcEdmUmthWmVxdmdRYUsraFkzU1VIcmsxWXpOTGF5L09pRUZwOTJJKy9NcDJGMk1oMmxMSVNXbmZsRmp6SDI2M1JRanpNWjE5d2dzNzNlejBvMVdtdFcrZGdBMDFWeHJFM3A2bDJHTHNuQnkxVllRT3RWU0VIL2F0Q0NncXBRZ0tLcVlJT2lxMkNCa3F0Z2dMS3FRSUtncWdDQmpwSjJZNUNkSit6clQ5QTdISFNUQTFkeFVkSGd6Q3FKSUV3cTBTRHNLc0VnNmlxQklFb3Evd0VjVlJaQlhGVitRSnhWNW1CdGxERkI1VmpZVGFHWjJzZjRSOVBNN1U5WlUrbEx1YWV0UFAvNURpZTNUb08xK3UrTUt0SHMwNnFPREIyekJuSS9qQmQ0TVBRbTFWa1k3OVRiMThnQitDNjJGZEJGc1pSNnllSW8xWVFpTEpXTUlpcVZqUUl1MVlTQ0xOV0ZnaWpWallJdWhZWUNLb1dLQWlpRmdvb3B4WWFLTFVXT2lpMkZna29waFlwNkYzcjQyVzVBOXM5T2NnTnZ2YTh4UWF5c0tYbEZ5dG9xZFltUUg2dEYzdG9TVW8wSU5xOUFBQUFBRWxGVGtTdVFtQ0NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uLS1uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFYUkpSRUZVV0FuTjExOXVnakFjd1BIV3pKMWdubXh6Qi9CQkUwbjI0bTR4Zk5rVGFPTDd3T3RzbDNBWE1NYitWamFhMUJHMDBOOGZTRWliUHBBUDN4QUtLczJ5anpUUEg5UkFqaEVvOVd6UHIvVm04emdFMCtnWEFUQXh4dXh0cWVKOXQ1dEl3djVBdFFBQXBzZlQ2VFBkYnAra1VCY2dWd3ZPNTFLcVZoTWtYS3NWSkZYck9raWdWaENJczFZNGlLbFdaeEIxclg0Z3dscFJJSXBhOFNEa1dtZ2dyRnE0SUlSYUpLQ1lXblNnbnJYSVFWMXI4WUQrMVZybitiUmVhZ3lzSUZmTEFCUnQzMXY4b0J1MXhFQnR0ZlJibHRtZmpnRWNXaDlzblVTMmtOZEJLNldOMXZyT1d4T2JXc3orZmp4ZXZzeG1CMUdRRGZJTldpZXY4M25oYW9pQi9Db09VNDM4b1ByaFhTMFdwUTl4YzFaUVd4V0hxVVllMEkwcXJLQ1FLanlnRGxYSVFWMnIwSUY2VmlFQnhWVEJCU0ZVUVFOaFZZa0hJVmVKQXRrTnNiUTdjMUx0elA2RnNPYmhiMnJDS3Y3TkJJR29xNFNEbUtvRWdUaXJYQWNKVkdrRlNWVnBnb1NyWElDR1VNVUgvUUJaTlNVeTVYV1Vod0FBQUFCSlJVNUVya0pnZ2c9PVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLWludGVyYWN0aW9uRGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1DYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUNhcHRpb24gPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtkYXlzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5c1JvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhiOTg5ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5IGFiYnJbdGl0bGVdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItQm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2VlayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrTnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhZWNlYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQgLkRheVBpY2tlci1EYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItVG9kYXlCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tdG9kYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLW91dHNpZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjZTBlMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjE7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEV4YW1wbGUgbW9kaWZpZXJzICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc3VuZGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zdW5kYXk6bm90KC5EYXlQaWNrZXItRGF5LS10b2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkY2UwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMGY4ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MWEwZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXI6bm90KC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheTpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLXNlbGVjdGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIERheVBpY2tlcklucHV0ICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheVdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPmxvYWRpbmc8L3A+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\imyua\\\\dev\\\\calendar\\\\pages\\\\index.js */"));
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

/***/ 4:
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

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

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