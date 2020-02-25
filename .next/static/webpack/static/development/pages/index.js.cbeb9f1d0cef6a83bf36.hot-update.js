webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _comps_DayView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comps/DayView */ "./comps/DayView.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../classes */ "./classes.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/DayPicker.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");









var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

















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
  events.map(function (event) {
    var startTime = new Date(event.startTime);
    var endTime = new Date(event.endTime);

    if (startTime.getHours() > endTime.getHours()) {
      endTime.setHours(23, 59, 59);
    }

    filled.push(new _classes__WEBPACK_IMPORTED_MODULE_15__["Event"]({
      startTime: time,
      endTime: startTime
    }, true));
    filled.push(event);
    time.setTime(endTime.getTime());
  });
  filled.push(new _classes__WEBPACK_IMPORTED_MODULE_15__["Event"]({
    startTime: time,
    endTime: endOfDay(date)
  }, true));
  return filled;
}

function eventsToDispay(calendars, date) {
  var eventsToDispay = [];
  calendars.map(function (calendar) {
    calendar = new _classes__WEBPACK_IMPORTED_MODULE_15__["Calendar"](calendar);
    calendar.events.map(function (event) {
      if (event.startTime.getFullYear() == date.getFullYear() && event.startTime.getMonth() == date.getMonth() && event.startTime.getDate() == date.getDate() && !event.isAllDayEvent()) {
        eventsToDispay.push(event);
      }
    });
  });
  eventsToDispay.sort(function (a, b) {
    return a.startTime - b.startTime;
  });
  return eventsToDispay;
}

var index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(index, _React$Component);

  function index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(index).call(this, props));
    _this.state = {
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
      selectedEvent: new _classes__WEBPACK_IMPORTED_MODULE_15__["Event"]({
        title: "選中的事件",
        startTime: new Date(),
        endTime: new Date(),
        color: ["#fd3721", "#b721ff"]
      })
    };
    _this.handleDayClick = _this.handleDayClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.openEventEditDialog = _this.openEventEditDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.closeEventEditDialog = _this.closeEventEditDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.openEventCreateDialog = _this.openEventCreateDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.closeEventCreateDialog = _this.closeEventCreateDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.updateEvent = _this.updateEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.createEvent = _this.createEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleTitleChange = _this.handleTitleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleDateChange = _this.handleDateChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleTimeChange = _this.handleTimeChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleCalendarChange = _this.handleCalendarChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(index, [{
    key: "handleDayClick",
    value: function handleDayClick(day, _ref) {
      var selected;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function handleDayClick$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              selected = _ref.selected;
              this.setState({
                selectedDay: selected ? new Date() : day
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        var filled = fillEvents(_this2.props.eventsToDispay, new Date());

        _this2.setState({
          filled: filled,
          userdata: _this2.props.userdata
        });
      }, 200);
    }
  }, {
    key: "openEventEditDialog",
    value: function openEventEditDialog(event) {
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
  }, {
    key: "closeEventEditDialog",
    value: function closeEventEditDialog() {
      this.setState({
        editingEvent: false
      });
    }
  }, {
    key: "openEventCreateDialog",
    value: function openEventCreateDialog() {
      this.setState({
        creatingEvent: true,
        inputing: {
          date: this.state.selectedDay.getFullYear() + "/" + this.state.selectedDay.getMonth() + "/" + this.state.selectedDay.getDate()
        }
      });
    }
  }, {
    key: "closeEventCreateDialog",
    value: function closeEventCreateDialog() {
      this.setState({
        creatingEvent: false
      });
    }
  }, {
    key: "createEvent",
    value: function createEvent() {
      var _this3 = this;

      var newStartTime, newEndTime, newdata, res, json, userdata, etd, filled;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function createEvent$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newStartTime = new Date();
              newEndTime = new Date();
              newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
              newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
              newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
              newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
              newdata = new _classes__WEBPACK_IMPORTED_MODULE_15__["User"](this.state.userdata);
              newdata.calendars.map(function (calendar) {
                if (calendar.title == _this3.state.inputing.calendar) {
                  calendar.events.push(new _classes__WEBPACK_IMPORTED_MODULE_15__["Event"]({
                    title: _this3.state.inputing.title,
                    startTime: newStartTime,
                    endTime: newEndTime,
                    color: calendar.color
                  }));
                }
              });
              _context2.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3000/api/updateuserdata", {
                method: "post",
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  calendars: newdata.calendars
                })
              }));

            case 10:
              this.setState({
                creatingEvent: false
              });
              _context2.next = 13;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3000/api/getuserdata"));

            case 13:
              res = _context2.sent;
              _context2.next = 16;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(res.json());

            case 16:
              json = _context2.sent;
              userdata = new _classes__WEBPACK_IMPORTED_MODULE_15__["User"](json);
              etd = eventsToDispay(userdata.calendars, new Date());
              filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
              this.setState({
                userdata: userdata,
                filled: filled,
                eventsToDispay: etd
              });

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "updateEvent",
    value: function updateEvent() {
      var _this4 = this;

      var newStartTime, newEndTime, newdata, res, json, userdata, etd, filled;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function updateEvent$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newStartTime = new Date();
              newEndTime = new Date();
              newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
              newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
              newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
              newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
              newdata = new _classes__WEBPACK_IMPORTED_MODULE_15__["User"](this.state.userdata);
              newdata.calendars.map(function (calendar) {
                calendar.events.map(function (event) {
                  if (event.id == _this4.state.selectedEvent.id) {
                    event.startTime = newStartTime;
                    event.endTime = newEndTime;
                    event.title = _this4.state.inputing.title;
                  }
                });
              });
              _context3.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3000/api/updateuserdata", {
                method: "post",
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  calendars: newdata.calendars
                })
              }));

            case 10:
              this.setState({
                editingEvent: false
              });
              _context3.next = 13;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3000/api/getuserdata"));

            case 13:
              res = _context3.sent;
              _context3.next = 16;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(res.json());

            case 16:
              json = _context3.sent;
              userdata = new _classes__WEBPACK_IMPORTED_MODULE_15__["User"](json);
              etd = eventsToDispay(userdata.calendars, new Date());
              filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
              this.setState({
                userdata: userdata,
                filled: filled,
                eventsToDispay: etd
              });

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "handleTitleChange",
    value: function handleTitleChange(e) {
      this.state.inputing.title = e.target.value;
    }
  }, {
    key: "handleDateChange",
    value: function handleDateChange(e) {
      this.state.inputing.date = e.target.value;
    }
  }, {
    key: "handleTimeChange",
    value: function handleTimeChange(e) {
      this.state.inputing.time = e.target.value;
    }
  }, {
    key: "handleCalendarChange",
    value: function handleCalendarChange(e) {
      this.state.inputing.calendar = e.target.value;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.userdata.calendars != undefined) {
        var calendarOptions = this.state.userdata.calendars.map(function (calendar) {
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

        if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000) < 0) {
          if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000) == 0) dayDescription = "今天";else if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000) == -24) dayDescription = "昨天";else if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000) == -48) dayDescription = "前天";else dayDescription = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000 / -24) + " 天前";
        } else {
          if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000) == 0) dayDescription = "今天";else if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000) == 23) dayDescription = "明天";else if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000) == 47) dayDescription = "後天";else dayDescription = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((DayA - DayB) / 3600000 / 24) + 1 + " 天後";
        }

        return __jsx(_material_ui_core_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
          maxWidth: "md",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, __jsx("div", {
          style: {
            marginTop: 80
          },
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__["default"], {
          elevation: 20,
          style: {
            backgroundColor: "#222222"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, __jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_16___default.a, {
          selectedDays: this.state.selectedDay,
          onDayClick: this.handleDayClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }))), __jsx("div", {
          style: {
            margin: 26
          },
          className: "jsx-3288069184",
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
          className: "jsx-3288069184",
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
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }, dayDescription))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
            padding: 24
          },
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, __jsx(_comps_DayView__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            margintLeft: 36
          },
          events: filled,
          openEventEditDialog: this.openEventEditDialog,
          openEventCreateDialog: this.openEventCreateDialog,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        })))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__["default"], {
          open: this.state.editingEvent,
          "aria-labelledby": "form-dialog-title",
          width: "xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__["default"], {
          autoFocus: true,
          defaultValue: this.state.selectedEvent.title,
          margin: "dense",
          id: "name",
          label: "\u4E8B\u4EF6\u6A19\u984C",
          fullWidth: true,
          onChange: this.handleTitleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__["default"], {
          defaultValue: this.state.selectedEvent.startTime.getFullYear() + "/" + this.state.selectedEvent.startTime.getMonth() + "/" + this.state.selectedEvent.startTime.getDate(),
          margin: "dense",
          id: "name",
          onChange: this.handleDateChange,
          label: "\u65E5\u671F",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__["default"], {
          defaultValue: this.state.selectedEvent.startTime.getHours() + ":" + this.state.selectedEvent.startTime.getMinutes() + "~" + this.state.selectedEvent.endTime.getHours() + ":" + this.state.selectedEvent.endTime.getMinutes(),
          margin: "dense",
          id: "name",
          onChange: this.handleTimeChange,
          label: "\u6642\u9593",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
          color: "primary",
          onClick: this.closeCreatingEventEditDialog,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, "\u53D6\u6D88"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
          color: "primary",
          onClick: this.createEvent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, "\u66F4\u65B0"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__["default"], {
          open: this.state.creatingEvent,
          "aria-labelledby": "form-dialog-title",
          width: "xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
          htmlFor: "demo-dialog-native",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, "\u884C\u4E8B\u66C6"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_24__["default"], {
          "native": true,
          onChange: this.handleCalendarChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341
          },
          __self: this
        }, calendarOptions)), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__["default"], {
          autoFocus: true,
          margin: "dense",
          id: "name",
          label: "\u4E8B\u4EF6\u6A19\u984C",
          fullWidth: true,
          onChange: this.handleTitleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__["default"], {
          defaultValue: new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate(),
          margin: "dense",
          id: "name",
          onChange: this.handleDateChange,
          label: "\u65E5\u671F",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__["default"], {
          defaultValue: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
          margin: "dense",
          id: "name",
          onChange: this.handleTimeChange,
          label: "\u6642\u9593",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
          color: "primary",
          onClick: this.closeEventCreateDialog,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366
          },
          __self: this
        }, "\u53D6\u6D88"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
          color: "primary",
          onClick: this.createEvent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, "\u5275\u7ACB"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3288069184",
          __self: this
        }, "body{background:#333333;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{-webkit-border-radius:10px;border-radius:10px;margin:80px 0 5px 0;}::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:rgb(80,80,80);}.DayPicker{display:inline-block;font-size:1rem;}.DayPicker-wrapper{position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-Months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\");}.DayPicker-NavButton--next{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\");}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{display:table-caption;margin-bottom:0.5em;padding:0 0.5em;text-align:left;color:white;}.DayPicker-Caption>div{font-weight:500;font-size:1.15em;}.DayPicker-Weekdays{display:table-header-group;margin-top:1em;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5em;color:#8b9898;text-align:center;font-size:0.875em;}.DayPicker-Weekday abbr[title]{border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer;color:gray;}.DayPicker-WeekNumber{display:table-cell;padding:0.5em;min-width:1em;border-right:1px solid #eaecec;color:#8b9898;vertical-align:middle;text-align:right;font-size:0.75em;cursor:pointer;}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5em;}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:0.875em;cursor:pointer;}.DayPicker-Day--today{color:white;font-weight:700;}.DayPicker-Day--outside{color:#8b9898;cursor:default;}.DayPicker-Day--disabled{color:#dce0e0;cursor:default;}.DayPicker-Day--sunday{background-color:#f7f8f8;}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa;}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff;}.DayPickerInput{display:inline-block;}.DayPickerInput-OverlayWrapper{position:relative;}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW15dWFcXGRldlxcY2FsZW5kYXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzWHVDLEFBR2dELEFBR1QsQUFHaUIsQUFLRCxBQU9MLEFBS0gsQUFlTCxBQU1DLEFBZ0JJLEFBaUJOLEFBSU8sQUFLZ25CLEFBSXRuQixBQUlTLEFBUU4sQUFLVyxBQUtULEFBSUMsQUFRQSxBQUtLLEFBSU4sQUFJQyxBQVVBLEFBWUosQUFJRyxBQUlOLEFBVUEsQUFLRSxBQUtBLEFBUVcsQUFJWCxBQUlJLEFBT08sQUFLQSxBQU1KLEFBSUgsQUFJQSxVQWpPdEIsRUEwRUEsQUEwRmlDLEFBVWIsQ0F2RnBCLENBOUNpQixBQTBJRSxBQUtBLEFBWW5CLENBeENBLENBekRxQixFQTlFRSxBQW9DWCxBQW9EWixBQXFCQSxBQThCQSxBQXlDNkIsQUFxQjdCLEFBSVcsQ0FyT1gsQUFpRjJsQixBQW1DemtCLEFBUU8sQUFhUCxBQVVBLEVBaklDLEFBMk1uQixDQS9Id0IsRUFtQ3hCLENBa0VBLEFBZUEsQUFLQSxBQWVjLENBM05RLEFBa0ROLENBdkRPLEFBdUNKLEFBOERBLENBdUVuQixDQUtBLEFBTUEsSUF0RkEsQUFja0IsQUFxQkksQUFVSixFQW9GRyxDQXJOckIsRUEyQ2MsR0EwR1ksQ0ExSEwsQUFpREQsQUFhcEIsQ0FpR2tCLENBak1hLEVBTFAsQ0ErR0YsQUErQmEsQ0FyRlYsR0EyRUMsQ0E4Rm1CLEtBM0I3QyxDQTlHb0IsQ0FqRFMsSUEwSFQsRUFsREUsQ0EvR3RCLEdBS0EsQUFvRG1CLEFBNERuQixJQWVzQixDQXRHSCxBQTJESCxJQXFERSxDQW9CQSxJQWxEbEIsQ0F2RTZCLEFBaUJaLEVBZ0NqQixDQXpFdUIsR0FpTnZCLENBN0ZtQixDQVVPLENBb0JKLElBeEdKLFNBeENXLEFBbUhkLEdBM0ZXLEVBaUJLLEFBd0daLEdBcEJFLEdBVHJCLFNBOEJBLEtBaEowQixBQVVDLEFBY0YsQUFvR0osT0FwRkcsVUFxRkwsSUFuR0UsQ0F4QkksS0F1Q08sS0FxRmhDLFdBMUhxQixZQXNDSCxjQUNDLGVBQ25CLGVBakNBLE9BZ0JBLHNCQXRCQSx1V0FnREEseUJBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbXl1YVxcZGV2XFxjYWxlbmRhclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb250YWluZXJcIjtcclxuaW1wb3J0IERheVZpZXcgZnJvbSBcIi4uL2NvbXBzL0RheVZpZXdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IHsgVXNlciwgQ2FsZW5kYXIsIEV2ZW50IH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuaW1wb3J0IERheVBpY2tlciBmcm9tIFwicmVhY3QtZGF5LXBpY2tlclwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcblxyXG5mdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcclxuICAgIGlmICghZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5YKz5YWl55qE5pmC6ZaT5LiN5piv5ZCI5rOV55qEIERhdGUg54mp5Lu244CCXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGltZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgIHRpbWUuc2V0SG91cnMoMCwgMCwgMCk7XHJcbiAgICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5kT2ZEYXkoZGF0ZSkge1xyXG4gICAgaWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlgrPlhaXnmoTmmYLplpPkuI3mmK/lkIjms5XnmoQgRGF0ZSDnianku7bjgIJcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aW1lLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgdGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgIHJldHVybiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsRXZlbnRzKGV2ZW50cywgZGF0ZSkge1xyXG4gICAgdmFyIGZpbGxlZCA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIHRpbWUgPSBzdGFydE9mRGF5KGRhdGUpO1xyXG4gICAgZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LnN0YXJ0VGltZSk7XHJcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShldmVudC5lbmRUaW1lKTtcclxuICAgICAgICBpZiAoc3RhcnRUaW1lLmdldEhvdXJzKCkgPiBlbmRUaW1lLmdldEhvdXJzKCkpIHtcclxuICAgICAgICAgICAgZW5kVGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsbGVkLnB1c2gobmV3IEV2ZW50KHsgc3RhcnRUaW1lOiB0aW1lLCBlbmRUaW1lOiBzdGFydFRpbWUgfSwgdHJ1ZSkpO1xyXG4gICAgICAgIGZpbGxlZC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB0aW1lLnNldFRpbWUoZW5kVGltZS5nZXRUaW1lKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxsZWQucHVzaChuZXcgRXZlbnQoeyBzdGFydFRpbWU6IHRpbWUsIGVuZFRpbWU6IGVuZE9mRGF5KGRhdGUpIH0sIHRydWUpKTtcclxuICAgIHJldHVybiBmaWxsZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50c1RvRGlzcGF5KGNhbGVuZGFycywgZGF0ZSkge1xyXG4gICAgdmFyIGV2ZW50c1RvRGlzcGF5ID0gW107XHJcbiAgICBjYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhcik7XHJcbiAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpID09IGRhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgPT0gZGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgICAhZXZlbnQuaXNBbGxEYXlFdmVudCgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzVG9EaXNwYXkucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnRzVG9EaXNwYXkuc29ydCgoYSwgYikgPT4gYS5zdGFydFRpbWUgLSBiLnN0YXJ0VGltZSk7XHJcbiAgICByZXR1cm4gZXZlbnRzVG9EaXNwYXk7XHJcbn1cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBldmVudHNUb0Rpc3BheTogW10sXHJcbiAgICAgICAgICAgIHVzZXJkYXRhOiB7fSxcclxuICAgICAgICAgICAgZmlsbGVkOiBbXSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpbWU6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdGluZ0V2ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgY3JlYXRpbmdFdmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRXZlbnQ6IG5ldyBFdmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLpgbjkuK3nmoTkuovku7ZcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogW1wiI2ZkMzcyMVwiLCBcIiNiNzIxZmZcIl1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGF5Q2xpY2sgPSB0aGlzLmhhbmRsZURheUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nID0gdGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZyA9IHRoaXMuY2xvc2VFdmVudEVkaXREaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5FdmVudENyZWF0ZURpYWxvZyA9IHRoaXMub3BlbkV2ZW50Q3JlYXRlRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nID0gdGhpcy5jbG9zZUV2ZW50Q3JlYXRlRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCA9IHRoaXMudXBkYXRlRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVGl0bGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRlQ2hhbmdlID0gdGhpcy5oYW5kbGVEYXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVUaW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxlbmRhckNoYW5nZSA9IHRoaXMuaGFuZGxlQ2FsZW5kYXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVEYXlDbGljayhkYXksIHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZERheTogc2VsZWN0ZWQgPyBuZXcgRGF0ZSgpIDogZGF5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0dXNlcmRhdGFcIik7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgdmFyIHVzZXJkYXRhID0gbmV3IFVzZXIoanNvbik7XHJcbiAgICAgICAgdmFyIGV0ZCA9IGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHMoZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyh0aGlzLnByb3BzLmV2ZW50c1RvRGlzcGF5LCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGxlZDogZmlsbGVkLCB1c2VyZGF0YTogdGhpcy5wcm9wcy51c2VyZGF0YSB9KTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FdmVudEVkaXREaWFsb2coZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRFdmVudDogZXZlbnQsXHJcbiAgICAgICAgICAgIGVkaXRpbmdFdmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBldmVudC5zdGFydFRpbWUuZ2V0TW9udGgoKSArIFwiL1wiICsgZXZlbnQuc3RhcnRUaW1lLmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IGV2ZW50LnN0YXJ0VGltZS5nZXRIb3VycygpICsgXCI6XCIgKyBldmVudC5zdGFydFRpbWUuZ2V0TWludXRlcygpICsgXCJ+XCIgKyBldmVudC5lbmRUaW1lLmdldEhvdXJzKCkgKyBcIjpcIiArIGV2ZW50LmVuZFRpbWUuZ2V0TWludXRlcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUV2ZW50RWRpdERpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ0V2ZW50OiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRXZlbnRDcmVhdGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nRXZlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0aW5nOiB7IGRhdGU6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRNb250aCgpICsgXCIvXCIgKyB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LmdldERhdGUoKSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VFdmVudENyZWF0ZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3JlYXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgdmFyIG5ld1N0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIG5ld0VuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRGdWxsWWVhcih0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzFdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzJdKTtcclxuICAgICAgICBuZXdFbmRUaW1lLnNldEZ1bGxZZWFyKHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMV0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld1N0YXJ0VGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICB2YXIgbmV3ZGF0YSA9IG5ldyBVc2VyKHRoaXMuc3RhdGUudXNlcmRhdGEpO1xyXG4gICAgICAgIG5ld2RhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxlbmRhci50aXRsZSA9PSB0aGlzLnN0YXRlLmlucHV0aW5nLmNhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhci5ldmVudHMucHVzaChuZXcgRXZlbnQoeyB0aXRsZTogdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZSwgc3RhcnRUaW1lOiBuZXdTdGFydFRpbWUsIGVuZFRpbWU6IG5ld0VuZFRpbWUsIGNvbG9yOiBjYWxlbmRhci5jb2xvciB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXBkYXRldXNlcmRhdGFcIiwgeyBtZXRob2Q6IFwicG9zdFwiLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNhbGVuZGFyczogbmV3ZGF0YS5jYWxlbmRhcnMgfSkgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyZWF0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVFdmVudCgpIHtcclxuICAgICAgICB2YXIgbmV3U3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbmV3RW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbmV3U3RhcnRUaW1lLnNldEZ1bGxZZWFyKHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMV0sIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZS5zcGxpdChcIi9cIilbMl0pO1xyXG4gICAgICAgIG5ld0VuZFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsyXSk7XHJcbiAgICAgICAgbmV3U3RhcnRUaW1lLnNldEhvdXJzKHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMF0uc3BsaXQoXCI6XCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzBdLnNwbGl0KFwiOlwiKVsxXSk7XHJcbiAgICAgICAgbmV3RW5kVGltZS5zZXRIb3Vycyh0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzFdLnNwbGl0KFwiOlwiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVsxXS5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgIHZhciBuZXdkYXRhID0gbmV3IFVzZXIodGhpcy5zdGF0ZS51c2VyZGF0YSk7XHJcbiAgICAgICAgbmV3ZGF0YS5jYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lID0gbmV3U3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmVuZFRpbWUgPSBuZXdFbmRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRpdGxlID0gdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VwZGF0ZXVzZXJkYXRhXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYWxlbmRhcnM6IG5ld2RhdGEuY2FsZW5kYXJzIH0pIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXR1c2VyZGF0YVwiKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB2YXIgdXNlcmRhdGEgPSBuZXcgVXNlcihqc29uKTtcclxuICAgICAgICB2YXIgZXRkID0gZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyhldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaXRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dGluZy50aXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURhdGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRpbmcuZGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRpbWVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbGVuZGFyQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmlucHV0aW5nLmNhbGVuZGFyID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGVuZGFyT3B0aW9ucyA9IHRoaXMuc3RhdGUudXNlcmRhdGEuY2FsZW5kYXJzLm1hcChjYWxlbmRhciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYWxlbmRhci50aXRsZX0gdmFsdWU9e2NhbGVuZGFyLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbGVuZGFyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKGV2ZW50c1RvRGlzcGF5KHRoaXMuc3RhdGUudXNlcmRhdGEuY2FsZW5kYXJzLCB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KSwgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF5RGVzY3JpcHRpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgRGF5QSA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG4gICAgICAgICAgICB2YXIgRGF5QiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIERheUEuc2V0SG91cnMoMTIsIDAsIDApO1xyXG4gICAgICAgICAgICBEYXlCLnNldEhvdXJzKDEyLCAwLCAwKTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCkgPT0gMCkgZGF5RGVzY3JpcHRpb24gPSBcIuS7iuWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoKERheUEgLSBEYXlCKSAvIDM2MDAwMDApID09IC0yNCkgZGF5RGVzY3JpcHRpb24gPSBcIuaYqOWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoKERheUEgLSBEYXlCKSAvIDM2MDAwMDApID09IC00OCkgZGF5RGVzY3JpcHRpb24gPSBcIuWJjeWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBkYXlEZXNjcmlwdGlvbiA9IHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwIC8gLTI0KSArIFwiIOWkqeWJjVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA9PSAwKSBkYXlEZXNjcmlwdGlvbiA9IFwi5LuK5aSpXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludCgoRGF5QSAtIERheUIpIC8gMzYwMDAwMCkgPT0gMjMpIGRheURlc2NyaXB0aW9uID0gXCLmmI7lpKlcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwKSA9PSA0NykgZGF5RGVzY3JpcHRpb24gPSBcIuW+jOWkqVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBkYXlEZXNjcmlwdGlvbiA9IHBhcnNlSW50KChEYXlBIC0gRGF5QikgLyAzNjAwMDAwIC8gMjQpICsgMSArIFwiIOWkqeW+jFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsyMH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjIyMlwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXlQaWNrZXIgc2VsZWN0ZWREYXlzPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5fSBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAyNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luQm90dG9tOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWREYXkuZ2V0RnVsbFllYXIoKX0gLyB7dGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXRNb250aCgpICsgMX0gLyB7dGhpcy5zdGF0ZS5zZWxlY3RlZERheS5nZXREYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJncmF5XCIsIG1hcmdpblRvcDogMCB9fT57ZGF5RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheVZpZXcgc3R5bGU9e3ttYXJnaW50TGVmdDogMzZ9fSBldmVudHM9e2ZpbGxlZH0gb3BlbkV2ZW50RWRpdERpYWxvZz17dGhpcy5vcGVuRXZlbnRFZGl0RGlhbG9nfSBvcGVuRXZlbnRDcmVhdGVEaWFsb2c9e3RoaXMub3BlbkV2ZW50Q3JlYXRlRGlhbG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17dGhpcy5zdGF0ZS5lZGl0aW5nRXZlbnR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCIgd2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuS6i+S7tuaomemhjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGl0bGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5zdGFydFRpbWUuZ2V0RnVsbFllYXIoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnN0YXJ0VGltZS5nZXRNb250aCgpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuc3RhcnRUaW1lLmdldERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pyfXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnN0YXJ0VGltZS5nZXRIb3VycygpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiflwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmVuZFRpbWUuZ2V0SG91cnMoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LmVuZFRpbWUuZ2V0TWludXRlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmmYLplpNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5jbG9zZUNyZWF0aW5nRXZlbnRFZGl0RGlhbG9nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlj5bmtohcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmm7TmlrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17dGhpcy5zdGF0ZS5jcmVhdGluZ0V2ZW50fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiIHdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImRlbW8tZGlhbG9nLW5hdGl2ZVwiPuihjOS6i+abhjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG5hdGl2ZSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDYWxlbmRhckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxlbmRhck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBhdXRvRm9jdXMgbWFyZ2luPVwiZGVuc2VcIiBpZD1cIm5hbWVcIiBsYWJlbD1cIuS6i+S7tuaomemhjFwiIGZ1bGxXaWR0aCBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgbmV3IERhdGUoKS5nZXRNb250aCgpICsgXCIvXCIgKyBuZXcgRGF0ZSgpLmdldERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pyfXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRIb3VycygpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSArIFwiflwiICsgKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIDEpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pmC6ZaTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VFdmVudENyZWF0ZURpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5jcmVhdGVFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Ym156uLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogODBweCAwIDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRGF5UGlja2VyIHN0eWxlcyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Nb250aHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU1vbnRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFWVkpSRUZVV0FuTjJHMEtnakFZd1BIcEdmUmthWmVxdmdRYUsraFkzU1VIcmsxWXpOTGF5L09pRUZwOTJJKy9NcDJGMk1oMmxMSVNXbmZsRmp6SDI2M1JRanpNWjE5d2dzNzNlejBvMVdtdFcrZGdBMDFWeHJFM3A2bDJHTHNuQnkxVllRT3RWU0VIL2F0Q0NncXBRZ0tLcVlJT2lxMkNCa3F0Z2dMS3FRSUtncWdDQmpwSjJZNUNkSit6clQ5QTdISFNUQTFkeFVkSGd6Q3FKSUV3cTBTRHNLc0VnNmlxQklFb3Evd0VjVlJaQlhGVitRSnhWNW1CdGxERkI1VmpZVGFHWjJzZjRSOVBNN1U5WlUrbEx1YWV0UFAvNURpZTNUb08xK3UrTUt0SHMwNnFPREIyekJuSS9qQmQ0TVBRbTFWa1k3OVRiMThnQitDNjJGZEJGc1pSNnllSW8xWVFpTEpXTUlpcVZqUUl1MVlTQ0xOV0ZnaWpWallJdWhZWUNLb1dLQWlpRmdvb3B4WWFLTFVXT2lpMkZna29waFlwNkYzcjQyVzVBOXM5T2NnTnZ2YTh4UWF5c0tYbEZ5dG9xZFltUUg2dEYzdG9TVW8wSU5xOUFBQUFBRWxGVGtTdVFtQ0NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uLS1uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFYUkpSRUZVV0FuTjExOXVnakFjd1BIV3pKMWdubXh6Qi9CQkUwbjI0bTR4Zk5rVGFPTDd3T3RzbDNBWE1NYitWamFhMUJHMDBOOGZTRWliUHBBUDN4QUtLczJ5anpUUEg5UkFqaEVvOVd6UHIvVm04emdFMCtnWEFUQXh4dXh0cWVKOXQ1dEl3djVBdFFBQXBzZlQ2VFBkYnAra1VCY2dWd3ZPNTFLcVZoTWtYS3NWSkZYck9raWdWaENJczFZNGlLbFdaeEIxclg0Z3dscFJJSXBhOFNEa1dtZ2dyRnE0SUlSYUpLQ1lXblNnbnJYSVFWMXI4WUQrMVZybitiUmVhZ3lzSUZmTEFCUnQzMXY4b0J1MXhFQnR0ZlJibHRtZmpnRWNXaDlzblVTMmtOZEJLNldOMXZyT1d4T2JXc3orZmp4ZXZzeG1CMUdRRGZJTldpZXY4M25oYW9pQi9Db09VNDM4b1ByaFhTMFdwUTl4YzFaUVd4V0hxVVllMEkwcXJLQ1FLanlnRGxYSVFWMnIwSUY2VmlFQnhWVEJCU0ZVUVFOaFZZa0hJVmVKQXRrTnNiUTdjMUx0elA2RnNPYmhiMnJDS3Y3TkJJR29xNFNEbUtvRWdUaXJYQWNKVkdrRlNWVnBnb1NyWElDR1VNVUgvUUJaTlNVeTVYV1Vod0FBQUFCSlJVNUVya0pnZ2c9PVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLWludGVyYWN0aW9uRGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1DYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUNhcHRpb24gPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtkYXlzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5c1JvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhiOTg5ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5IGFiYnJbdGl0bGVdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItQm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2VlayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrTnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhZWNlYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQgLkRheVBpY2tlci1EYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItVG9kYXlCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tdG9kYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLW91dHNpZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjZTBlMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjE7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEV4YW1wbGUgbW9kaWZpZXJzICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc3VuZGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zdW5kYXk6bm90KC5EYXlQaWNrZXItRGF5LS10b2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkY2UwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMGY4ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MWEwZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXI6bm90KC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheTpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLXNlbGVjdGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIERheVBpY2tlcklucHV0ICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheVdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPmxvYWRpbmc8L3A+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\imyua\\\\dev\\\\calendar\\\\pages\\\\index.js */"));
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 617
          },
          __self: this
        }, "loading");
      }
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var res, json, userdata, etd, filled;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getInitialProps$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3000/api/getuserdata"));

            case 2:
              res = _context4.sent;
              _context4.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(res.json());

            case 5:
              json = _context4.sent;
              userdata = new _classes__WEBPACK_IMPORTED_MODULE_15__["User"](json);
              etd = eventsToDispay(userdata.calendars, new Date());
              filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
              return _context4.abrupt("return", {
                userdata: userdata,
                filled: filled,
                eventsToDispay: etd
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.cbeb9f1d0cef6a83bf36.hot-update.js.map