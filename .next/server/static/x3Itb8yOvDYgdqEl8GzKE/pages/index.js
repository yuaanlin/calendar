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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "24wb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qt1I");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KhKf");
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
      onClick: this.handleEmptyCardClick
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
    if (this.props.event instanceof _classes__WEBPACK_IMPORTED_MODULE_2__[/* Event */ "b"]) {
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
          }
        }, this.props.event.title, " ") : __jsx("p", {
          key: "title",
          style: {
            color: "white"
          }
        }, this.props.event.title, " ", __jsx("strong", {
          style: {
            marginLeft: 16,
            color: "rgba(255,255,255,0.4)"
          }
        }, this.props.event.getDurationString())));
        if (!this.props.event.isAllDayEvent()) eventInfo.push(__jsx("p", {
          style: {
            color: "rgba(255,255,255,0.8)"
          },
          key: "duration"
        }, this.props.event.duration, " \u5206\u9418"));else {
          eventInfo.push(__jsx("p", {
            style: {
              color: "rgba(255,255,255,0.8)"
            },
            key: "duration"
          }, "\u5168\u5929\u4E8B\u4EF6"));
        }
        eventInfo.push(__jsx("p", {
          style: {
            color: "rgba(255,255,255,0.8)"
          },
          key: "cal"
        }, this.props.event.calendarTitle));
        return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
          style: style,
          elevation: this.state.elevation,
          onMouseEnter: this.handleMouseOver,
          onMouseLeave: this.handleMouseLeave,
          onClick: this.handleClick,
          key: this.props.event.id
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

/* harmony default export */ __webpack_exports__["a"] = (EventCard);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KhKf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./utils/methods.js
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
// CONCATENATED MODULE: ./classes.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return classes_Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });

class classes_Event {
  constructor(JSONObject, isEmpty) {
    this.startTime = new Date(JSONObject.startTime);
    this.endTime = new Date(JSONObject.endTime);
    this.duration = parseInt((this.endTime - this.startTime) / 60000);
    this.location = JSONObject.location == undefined ? undefined : JSONObject.location;
    this.description = JSONObject.description == undefined ? undefined : JSONObject.description;
    this.id = JSONObject.id == undefined ? generateUUID() : JSONObject.id;
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
      return new classes_Event(event);
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

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/container"
var container_ = __webpack_require__("thFp");
var container_default = /*#__PURE__*/__webpack_require__.n(container_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: ./comps/eventCard.js
var eventCard = __webpack_require__("24wb");

// EXTERNAL MODULE: ./classes.js + 1 modules
var classes = __webpack_require__("KhKf");

// CONCATENATED MODULE: ./comps/DayView.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class DayView_DayView extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "clickHandler", () => {
      this.props.openEventEditDialog(this.props.event);
    });

    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return this.props.events.map(event => {
      event = new classes["b" /* Event */](event, event.isEmpty);
      return __jsx(Grid_default.a, {
        key: event.id,
        container: true,
        spacing: 1
      }, __jsx(Grid_default.a, {
        item: true,
        xs: 2
      }, __jsx("p", {
        style: {
          color: "white",
          fontSize: 8
        }
      }, event.isEmpty ? "" : event.getStartTimeSrting())), __jsx(Grid_default.a, {
        item: true,
        xs: 10
      }, __jsx(eventCard["a" /* default */], {
        event: event,
        openEventEditDialog: this.props.openEventEditDialog,
        openEventCreateDialog: this.props.openEventCreateDialog
      })));
    });
  }

}

/* harmony default export */ var comps_DayView = (DayView_DayView);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "react-day-picker"
var external_react_day_picker_ = __webpack_require__("wLDe");
var external_react_day_picker_default = /*#__PURE__*/__webpack_require__.n(external_react_day_picker_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;

















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

    filled.push(new classes["b" /* Event */]({
      startTime: time,
      endTime: startTime
    }, true));
    filled.push(event);
    time.setTime(endTime.getTime());
  });
  filled.push(new classes["b" /* Event */]({
    startTime: time,
    endTime: endOfDay(date)
  }, true));
  return filled;
}

function pages_eventsToDispay(calendars, date) {
  var eventsToDispay = [];
  calendars.map(calendar => {
    calendar = new classes["a" /* Calendar */](calendar);
    calendar.events.map(event => {
      if (event.startTime.getFullYear() == date.getFullYear() && event.startTime.getMonth() == date.getMonth() && event.startTime.getDate() == date.getDate() && !event.isAllDayEvent()) {
        eventsToDispay.push(event);
      }
    });
  });
  eventsToDispay.sort((a, b) => a.startTime - b.startTime);
  return eventsToDispay;
}

class pages_index extends external_react_default.a.Component {
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
      selectedEvent: new classes["b" /* Event */]({
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
    const res = await external_isomorphic_unfetch_default()("http://localhost:3000/api/getuserdata");
    const json = await res.json();
    var userdata = new classes["c" /* User */](json);
    var etd = pages_eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(pages_eventsToDispay(userdata.calendars, new Date()), new Date());
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
    var newdata = new classes["c" /* User */](this.state.userdata);
    newdata.calendars.map(calendar => {
      if (calendar.title == this.state.inputing.calendar) {
        calendar.events.push(new classes["b" /* Event */]({
          title: this.state.inputing.title,
          startTime: newStartTime,
          endTime: newEndTime,
          color: calendar.color
        }));
      }
    });
    await external_isomorphic_unfetch_default()("http://localhost:3000/api/updateuserdata", {
      method: "post",
      body: JSON.stringify({
        calendars: newdata.calendars
      })
    });
    this.setState({
      creatingEvent: false
    });
    const res = await external_isomorphic_unfetch_default()("http://localhost:3000/api/getuserdata");
    const json = await res.json();
    var userdata = new classes["c" /* User */](json);
    var etd = pages_eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(pages_eventsToDispay(userdata.calendars, new Date()), new Date());
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
    var newdata = new classes["c" /* User */](this.state.userdata);
    newdata.calendars.map(calendar => {
      calendar.events.map(event => {
        if (event.id == this.state.selectedEvent.id) {
          event.startTime = newStartTime;
          event.endTime = newEndTime;
          event.title = this.state.inputing.title;
        }
      });
    });
    await external_isomorphic_unfetch_default()("http://localhost:3000/api/updateuserdata", {
      method: "post",
      body: JSON.stringify({
        calendars: newdata.calendars
      })
    });
    this.setState({
      editingEvent: false
    });
    const res = await external_isomorphic_unfetch_default()("http://localhost:3000/api/getuserdata");
    const json = await res.json();
    var userdata = new classes["c" /* User */](json);
    var etd = pages_eventsToDispay(userdata.calendars, new Date());
    var filled = fillEvents(pages_eventsToDispay(userdata.calendars, new Date()), new Date());
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
        return pages_jsx("option", {
          key: calendar.title,
          value: calendar.title
        }, calendar.title);
      });
      var filled = fillEvents(pages_eventsToDispay(this.state.userdata.calendars, this.state.selectedDay), this.state.selectedDay);
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

      return pages_jsx(container_default.a, {
        maxWidth: "md"
      }, pages_jsx(Grid_default.a, {
        container: true
      }, pages_jsx(Grid_default.a, {
        item: true,
        xs: 5
      }, pages_jsx("div", {
        style: {
          marginTop: 80
        },
        className: "jsx-3288069184"
      }, pages_jsx(external_react_day_picker_default.a, {
        selectedDays: this.state.selectedDay,
        onDayClick: this.handleDayClick
      })), pages_jsx("div", {
        style: {
          margin: 26
        },
        className: "jsx-3288069184"
      }, pages_jsx("h2", {
        style: {
          color: "white",
          marginBottom: 16
        },
        className: "jsx-3288069184"
      }, this.state.selectedDay.getFullYear(), " / ", this.state.selectedDay.getMonth() + 1, " / ", this.state.selectedDay.getDate()), pages_jsx("p", {
        style: {
          color: "gray",
          marginTop: 0
        },
        className: "jsx-3288069184"
      }, dayDescription))), pages_jsx(Grid_default.a, {
        item: true,
        xs: 7
      }, pages_jsx("div", {
        style: {
          overflowY: "scroll",
          maxHeight: "90vh",
          padding: 24
        },
        className: "jsx-3288069184"
      }, pages_jsx(comps_DayView, {
        events: filled,
        openEventEditDialog: this.openEventEditDialog,
        openEventCreateDialog: this.openEventCreateDialog
      })))), pages_jsx(Dialog_default.a, {
        open: this.state.editingEvent,
        "aria-labelledby": "form-dialog-title",
        width: "xs"
      }, pages_jsx(DialogContent_default.a, null, pages_jsx(TextField_default.a, {
        autoFocus: true,
        defaultValue: this.state.selectedEvent.title,
        margin: "dense",
        id: "name",
        label: "\u4E8B\u4EF6\u6A19\u984C",
        fullWidth: true,
        onChange: this.handleTitleChange
      }), pages_jsx(TextField_default.a, {
        defaultValue: this.state.selectedEvent.startTime.getFullYear() + "/" + this.state.selectedEvent.startTime.getMonth() + "/" + this.state.selectedEvent.startTime.getDate(),
        margin: "dense",
        id: "name",
        onChange: this.handleDateChange,
        label: "\u65E5\u671F",
        fullWidth: true
      }), pages_jsx(TextField_default.a, {
        defaultValue: this.state.selectedEvent.startTime.getHours() + ":" + this.state.selectedEvent.startTime.getMinutes() + "~" + this.state.selectedEvent.endTime.getHours() + ":" + this.state.selectedEvent.endTime.getMinutes(),
        margin: "dense",
        id: "name",
        onChange: this.handleTimeChange,
        label: "\u6642\u9593",
        fullWidth: true
      })), pages_jsx(DialogActions_default.a, null, pages_jsx(Button_default.a, {
        color: "primary",
        onClick: this.closeCreatingEventEditDialog
      }, "\u53D6\u6D88"), pages_jsx(Button_default.a, {
        color: "primary",
        onClick: this.createEvent
      }, "\u66F4\u65B0"))), pages_jsx(Dialog_default.a, {
        open: this.state.creatingEvent,
        "aria-labelledby": "form-dialog-title",
        width: "xs"
      }, pages_jsx(DialogContent_default.a, null, pages_jsx(FormControl_default.a, null, pages_jsx(InputLabel_default.a, {
        htmlFor: "demo-dialog-native"
      }, "\u884C\u4E8B\u66C6"), pages_jsx(Select_default.a, {
        native: true,
        onChange: this.handleCalendarChange
      }, calendarOptions)), pages_jsx(TextField_default.a, {
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: "\u4E8B\u4EF6\u6A19\u984C",
        fullWidth: true,
        onChange: this.handleTitleChange
      }), pages_jsx(TextField_default.a, {
        defaultValue: new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate(),
        margin: "dense",
        id: "name",
        onChange: this.handleDateChange,
        label: "\u65E5\u671F",
        fullWidth: true
      }), pages_jsx(TextField_default.a, {
        defaultValue: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
        margin: "dense",
        id: "name",
        onChange: this.handleTimeChange,
        label: "\u6642\u9593",
        fullWidth: true
      })), pages_jsx(DialogActions_default.a, null, pages_jsx(Button_default.a, {
        color: "primary",
        onClick: this.closeEventCreateDialog
      }, "\u53D6\u6D88"), pages_jsx(Button_default.a, {
        color: "primary",
        onClick: this.createEvent
      }, "\u5275\u7ACB"))), pages_jsx(style_default.a, {
        id: "3288069184"
      }, ["body{background:#333333;}", "::-webkit-scrollbar{width:5px;}", "::-webkit-scrollbar-track{-webkit-border-radius:10px;border-radius:10px;margin:80px 0 5px 0;}", "::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:rgb(80,80,80);}", ".DayPicker{display:inline-block;font-size:1rem;}", ".DayPicker-wrapper{position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".DayPicker-Months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer;}", ".DayPicker-NavButton:hover{opacity:0.8;}", ".DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\");}", ".DayPicker-NavButton--next{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\");}", ".DayPicker-NavButton--interactionDisabled{display:none;}", ".DayPicker-Caption{display:table-caption;margin-bottom:0.5em;padding:0 0.5em;text-align:left;color:white;}", ".DayPicker-Caption>div{font-weight:500;font-size:1.15em;}", ".DayPicker-Weekdays{display:table-header-group;margin-top:1em;}", ".DayPicker-WeekdaysRow{display:table-row;}", ".DayPicker-Weekday{display:table-cell;padding:0.5em;color:#8b9898;text-align:center;font-size:0.875em;}", ".DayPicker-Weekday abbr[title]{border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}", ".DayPicker-Body{display:table-row-group;}", ".DayPicker-Week{display:table-row;}", ".DayPicker-Day{display:table-cell;padding:0.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer;color:gray;}", ".DayPicker-WeekNumber{display:table-cell;padding:0.5em;min-width:1em;border-right:1px solid #eaecec;color:#8b9898;vertical-align:middle;text-align:right;font-size:0.75em;cursor:pointer;}", ".DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}", ".DayPicker-Footer{padding-top:0.5em;}", ".DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:0.875em;cursor:pointer;}", ".DayPicker-Day--today{color:white;font-weight:700;}", ".DayPicker-Day--outside{color:#8b9898;cursor:default;}", ".DayPicker-Day--disabled{color:#dce0e0;cursor:default;}", ".DayPicker-Day--sunday{background-color:#f7f8f8;}", ".DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}", ".DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff;}", ".DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa;}", ".DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff;}", ".DayPickerInput{display:inline-block;}", ".DayPickerInput-OverlayWrapper{position:relative;}", ".DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.15);}"]));
    } else {
      return pages_jsx("p", null, "loading");
    }
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "thFp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/container");

/***/ }),

/***/ "wLDe":
/***/ (function(module, exports) {

module.exports = require("react-day-picker");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });