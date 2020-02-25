webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _comps_DayView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comps/DayView */ "./comps/DayView.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../classes */ "./classes.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/DayPicker.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");








var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;















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

    filled.push(new _classes__WEBPACK_IMPORTED_MODULE_14__["Event"]({
      startTime: time,
      endTime: startTime
    }, true));
    filled.push(event);
    time.setTime(endTime.getTime());
  });
  filled.push(new _classes__WEBPACK_IMPORTED_MODULE_14__["Event"]({
    startTime: time,
    endTime: endOfDay(date)
  }, true));
  return filled;
}

function eventsToDispay(calendars, date) {
  var eventsToDispay = [];
  calendars.map(function (calendar) {
    calendar = new _classes__WEBPACK_IMPORTED_MODULE_14__["Calendar"](calendar);
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(index, _React$Component);

  function index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(index).call(this, props));
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
      selectedEvent: new _classes__WEBPACK_IMPORTED_MODULE_14__["Event"]({
        title: "選中的事件",
        startTime: new Date(),
        endTime: new Date(),
        color: ["#fd3721", "#b721ff"]
      })
    };
    _this.handleDayClick = _this.handleDayClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.openEventEditDialog = _this.openEventEditDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.closeEventEditDialog = _this.closeEventEditDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateEvent = _this.updateEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.openEventCreateDialog = _this.openEventCreateDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.closeEventCreateDialog = _this.closeEventCreateDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateEvent = _this.updateEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleTitleChange = _this.handleTitleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleDateChange = _this.handleDateChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleTimeChange = _this.handleTimeChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(index, [{
    key: "handleDayClick",
    value: function handleDayClick(day, _ref) {
      var selected;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleDayClick$(_context) {
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
        creatingEvent: true
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
      console.log("i");
    }
  }, {
    key: "updateEvent",
    value: function updateEvent() {
      var _this3 = this;

      var newStartTime, newEndTime, newdata, res, json, userdata, etd, filled;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function updateEvent$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newStartTime = new Date();
              newEndTime = new Date();
              newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
              newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
              newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
              newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
              newdata = new _classes__WEBPACK_IMPORTED_MODULE_14__["User"](this.state.userdata);
              newdata.calendars.map(function (calendar) {
                calendar.events.map(function (event) {
                  if (event.id == _this3.state.selectedEvent.id) {
                    event.startTime = newStartTime;
                    event.endTime = newEndTime;
                    event.title = _this3.state.inputing.title;
                  }
                });
              });
              _context2.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("http://localhost:3000/api/updateuserdata", {
                method: "post",
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  calendars: newdata.calendars
                })
              }));

            case 10:
              this.setState({
                editingEvent: false
              });
              _context2.next = 13;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("http://localhost:3000/api/getuserdata"));

            case 13:
              res = _context2.sent;
              _context2.next = 16;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

            case 16:
              json = _context2.sent;
              userdata = new _classes__WEBPACK_IMPORTED_MODULE_14__["User"](json);
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
    key: "render",
    value: function render() {
      if (this.state.userdata.calendars != undefined) {
        var filled = fillEvents(eventsToDispay(this.state.userdata.calendars, this.state.selectedDay), this.state.selectedDay);
        return __jsx(_material_ui_core_container__WEBPACK_IMPORTED_MODULE_10__["default"], {
          maxWidth: "md",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
          item: true,
          xs: 5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, __jsx("div", {
          style: {
            marginTop: 80
          },
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, __jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_15___default.a, {
          selectedDays: this.state.selectedDay,
          onDayClick: this.handleDayClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
          item: true,
          xs: 7,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
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
            lineNumber: 211
          },
          __self: this
        }, __jsx(_comps_DayView__WEBPACK_IMPORTED_MODULE_11__["default"], {
          events: filled,
          openEventEditDialog: this.openEventEditDialog,
          openEventCreateDialog: this.openEventCreateDialog,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        })))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__["default"], {
          open: this.state.editingEvent,
          "aria-labelledby": "form-dialog-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, __jsx(InputLabel, {
          htmlFor: "demo-customized-select-native",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, "\u884C\u4E8B\u66C6"), __jsx(NativeSelect, {
          id: "demo-customized-select-native",
          onChange: handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, __jsx("option", {
          value: "",
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }), __jsx("option", {
          value: 10,
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, "Ten"), __jsx("option", {
          value: 20,
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, "Twenty"), __jsx("option", {
          value: 30,
          className: "jsx-3288069184",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, "Thirty"))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          autoFocus: true,
          defaultValue: this.state.selectedEvent.title,
          margin: "dense",
          id: "name",
          label: "\u4E8B\u4EF6\u6A19\u984C",
          fullWidth: true,
          onChange: this.handleTitleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          defaultValue: this.state.selectedEvent.startTime.getFullYear() + "/" + this.state.selectedEvent.startTime.getMonth() + "/" + this.state.selectedEvent.startTime.getDate(),
          margin: "dense",
          id: "name",
          onChange: this.handleDateChange,
          label: "\u65E5\u671F",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          defaultValue: this.state.selectedEvent.startTime.getHours() + ":" + this.state.selectedEvent.startTime.getMinutes() + "~" + this.state.selectedEvent.endTime.getHours() + ":" + this.state.selectedEvent.endTime.getMinutes(),
          margin: "dense",
          id: "name",
          onChange: this.handleTimeChange,
          label: "\u6642\u9593",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          color: "primary",
          onClick: this.closeCreatingEventEditDialog,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }, "\u53D6\u6D88"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          color: "primary",
          onClick: this.createEvent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }, "\u66F4\u65B0"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__["default"], {
          open: this.state.creatingEvent,
          "aria-labelledby": "form-dialog-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          autoFocus: true,
          margin: "dense",
          id: "name",
          label: "\u4E8B\u4EF6\u6A19\u984C",
          fullWidth: true,
          onChange: this.handleTitleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          defaultValue: new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate(),
          margin: "dense",
          id: "name",
          onChange: this.handleDateChange,
          label: "\u65E5\u671F",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          defaultValue: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
          margin: "dense",
          id: "name",
          onChange: this.handleTimeChange,
          label: "\u6642\u9593",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          color: "primary",
          onClick: this.closeEventEditDialog,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, "\u53D6\u6D88"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          color: "primary",
          onClick: this.updateEvent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        }, "\u66F4\u65B0"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "3288069184",
          __self: this
        }, "body{background:#333333;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{-webkit-border-radius:10px;border-radius:10px;margin:80px 0 5px 0;}::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:rgb(80,80,80);}.DayPicker{display:inline-block;font-size:1rem;}.DayPicker-wrapper{position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-Months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\");}.DayPicker-NavButton--next{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\");}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{display:table-caption;margin-bottom:0.5em;padding:0 0.5em;text-align:left;color:white;}.DayPicker-Caption>div{font-weight:500;font-size:1.15em;}.DayPicker-Weekdays{display:table-header-group;margin-top:1em;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5em;color:#8b9898;text-align:center;font-size:0.875em;}.DayPicker-Weekday abbr[title]{border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer;color:gray;}.DayPicker-WeekNumber{display:table-cell;padding:0.5em;min-width:1em;border-right:1px solid #eaecec;color:#8b9898;vertical-align:middle;text-align:right;font-size:0.75em;cursor:pointer;}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5em;}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:0.875em;cursor:pointer;}.DayPicker-Day--today{color:white;font-weight:700;}.DayPicker-Day--outside{color:#8b9898;cursor:default;}.DayPicker-Day--disabled{color:#dce0e0;cursor:default;}.DayPicker-Day--sunday{background-color:#f7f8f8;}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa;}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff;}.DayPickerInput{display:inline-block;}.DayPickerInput-OverlayWrapper{position:relative;}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW15dWFcXGRldlxcY2FsZW5kYXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyVHVDLEFBR2dELEFBR1QsQUFHaUIsQUFLRCxBQU9MLEFBS0gsQUFlTCxBQU1DLEFBZ0JJLEFBaUJOLEFBSU8sQUFLZ25CLEFBSXRuQixBQUlTLEFBUU4sQUFLVyxBQUtULEFBSUMsQUFRQSxBQUtLLEFBSU4sQUFJQyxBQVVBLEFBWUosQUFJRyxBQUlOLEFBVUEsQUFLRSxBQUtBLEFBUVcsQUFJWCxBQUlJLEFBT08sQUFLQSxBQU1KLEFBSUgsQUFJQSxVQWpPdEIsRUEwRUEsQUEwRmlDLEFBVWIsQ0F2RnBCLENBOUNpQixBQTBJRSxBQUtBLEFBWW5CLENBeENBLENBekRxQixFQTlFRSxBQW9DWCxBQW9EWixBQXFCQSxBQThCQSxBQXlDNkIsQUFxQjdCLEFBSVcsQ0FyT1gsQUFpRjJsQixBQW1DemtCLEFBUU8sQUFhUCxBQVVBLEVBaklDLEFBMk1uQixDQS9Id0IsRUFtQ3hCLENBa0VBLEFBZUEsQUFLQSxBQWVjLENBM05RLEFBa0ROLENBdkRPLEFBdUNKLEFBOERBLENBdUVuQixDQUtBLEFBTUEsSUF0RkEsQUFja0IsQUFxQkksQUFVSixFQW9GRyxDQXJOckIsRUEyQ2MsR0EwR1ksQ0ExSEwsQUFpREQsQUFhcEIsQ0FpR2tCLENBak1hLEVBTFAsQ0ErR0YsQUErQmEsQ0FyRlYsR0EyRUMsQ0E4Rm1CLEtBM0I3QyxDQTlHb0IsQ0FqRFMsSUEwSFQsRUFsREUsQ0EvR3RCLEdBS0EsQUFvRG1CLEFBNERuQixJQWVzQixDQXRHSCxBQTJESCxJQXFERSxDQW9CQSxJQWxEbEIsQ0F2RTZCLEFBaUJaLEVBZ0NqQixDQXpFdUIsR0FpTnZCLENBN0ZtQixDQVVPLENBb0JKLElBeEdKLFNBeENXLEFBbUhkLEdBM0ZXLEVBaUJLLEFBd0daLEdBcEJFLEdBVHJCLFNBOEJBLEtBaEowQixBQVVDLEFBY0YsQUFvR0osT0FwRkcsVUFxRkwsSUFuR0UsQ0F4QkksS0F1Q08sS0FxRmhDLFdBMUhxQixZQXNDSCxjQUNDLGVBQ25CLGVBakNBLE9BZ0JBLHNCQXRCQSx1V0FnREEseUJBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbXl1YVxcZGV2XFxjYWxlbmRhclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb250YWluZXJcIjtcclxuaW1wb3J0IERheVZpZXcgZnJvbSBcIi4uL2NvbXBzL0RheVZpZXdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IHsgVXNlciwgQ2FsZW5kYXIsIEV2ZW50IH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuaW1wb3J0IERheVBpY2tlciBmcm9tIFwicmVhY3QtZGF5LXBpY2tlclwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcblxyXG5mdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcclxuICAgIGlmICghZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5YKz5YWl55qE5pmC6ZaT5LiN5piv5ZCI5rOV55qEIERhdGUg54mp5Lu244CCXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGltZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgIHRpbWUuc2V0SG91cnMoMCwgMCwgMCk7XHJcbiAgICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5kT2ZEYXkoZGF0ZSkge1xyXG4gICAgaWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlgrPlhaXnmoTmmYLplpPkuI3mmK/lkIjms5XnmoQgRGF0ZSDnianku7bjgIJcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aW1lLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgdGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgIHJldHVybiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsRXZlbnRzKGV2ZW50cywgZGF0ZSkge1xyXG4gICAgdmFyIGZpbGxlZCA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIHRpbWUgPSBzdGFydE9mRGF5KGRhdGUpO1xyXG4gICAgZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LnN0YXJ0VGltZSk7XHJcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShldmVudC5lbmRUaW1lKTtcclxuICAgICAgICBpZiAoc3RhcnRUaW1lLmdldEhvdXJzKCkgPiBlbmRUaW1lLmdldEhvdXJzKCkpIHtcclxuICAgICAgICAgICAgZW5kVGltZS5zZXRIb3VycygyMywgNTksIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsbGVkLnB1c2gobmV3IEV2ZW50KHsgc3RhcnRUaW1lOiB0aW1lLCBlbmRUaW1lOiBzdGFydFRpbWUgfSwgdHJ1ZSkpO1xyXG4gICAgICAgIGZpbGxlZC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB0aW1lLnNldFRpbWUoZW5kVGltZS5nZXRUaW1lKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxsZWQucHVzaChuZXcgRXZlbnQoeyBzdGFydFRpbWU6IHRpbWUsIGVuZFRpbWU6IGVuZE9mRGF5KGRhdGUpIH0sIHRydWUpKTtcclxuICAgIHJldHVybiBmaWxsZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50c1RvRGlzcGF5KGNhbGVuZGFycywgZGF0ZSkge1xyXG4gICAgdmFyIGV2ZW50c1RvRGlzcGF5ID0gW107XHJcbiAgICBjYWxlbmRhcnMubWFwKGNhbGVuZGFyID0+IHtcclxuICAgICAgICBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhcik7XHJcbiAgICAgICAgY2FsZW5kYXIuZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpID09IGRhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLmdldE1vbnRoKCkgPT0gZGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgICAhZXZlbnQuaXNBbGxEYXlFdmVudCgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzVG9EaXNwYXkucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnRzVG9EaXNwYXkuc29ydCgoYSwgYikgPT4gYS5zdGFydFRpbWUgLSBiLnN0YXJ0VGltZSk7XHJcbiAgICByZXR1cm4gZXZlbnRzVG9EaXNwYXk7XHJcbn1cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBldmVudHNUb0Rpc3BheTogW10sXHJcbiAgICAgICAgICAgIHVzZXJkYXRhOiB7fSxcclxuICAgICAgICAgICAgZmlsbGVkOiBbXSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpbWU6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdGluZ0V2ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRFdmVudDogbmV3IEV2ZW50KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIumBuOS4reeahOS6i+S7tlwiLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgZW5kVGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBbXCIjZmQzNzIxXCIsIFwiI2I3MjFmZlwiXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEYXlDbGljayA9IHRoaXMuaGFuZGxlRGF5Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5FdmVudEVkaXREaWFsb2cgPSB0aGlzLm9wZW5FdmVudEVkaXREaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRFZGl0RGlhbG9nID0gdGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQgPSB0aGlzLnVwZGF0ZUV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRXZlbnRDcmVhdGVEaWFsb2cgPSB0aGlzLm9wZW5FdmVudENyZWF0ZURpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VFdmVudENyZWF0ZURpYWxvZyA9IHRoaXMuY2xvc2VFdmVudENyZWF0ZURpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQgPSB0aGlzLnVwZGF0ZUV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaXRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVGl0bGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZURhdGVDaGFuZ2UgPSB0aGlzLmhhbmRsZURhdGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRpbWVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVEYXlDbGljayhkYXksIHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZERheTogc2VsZWN0ZWQgPyBuZXcgRGF0ZSgpIDogZGF5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0dXNlcmRhdGFcIik7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgdmFyIHVzZXJkYXRhID0gbmV3IFVzZXIoanNvbik7XHJcbiAgICAgICAgdmFyIGV0ZCA9IGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHMoZXZlbnRzVG9EaXNwYXkodXNlcmRhdGEuY2FsZW5kYXJzLCBuZXcgRGF0ZSgpKSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlcmRhdGE6IHVzZXJkYXRhLCBmaWxsZWQ6IGZpbGxlZCwgZXZlbnRzVG9EaXNwYXk6IGV0ZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZmlsbGVkID0gZmlsbEV2ZW50cyh0aGlzLnByb3BzLmV2ZW50c1RvRGlzcGF5LCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGxlZDogZmlsbGVkLCB1c2VyZGF0YTogdGhpcy5wcm9wcy51c2VyZGF0YSB9KTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FdmVudEVkaXREaWFsb2coZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRFdmVudDogZXZlbnQsXHJcbiAgICAgICAgICAgIGVkaXRpbmdFdmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGV2ZW50LnN0YXJ0VGltZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBldmVudC5zdGFydFRpbWUuZ2V0TW9udGgoKSArIFwiL1wiICsgZXZlbnQuc3RhcnRUaW1lLmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IGV2ZW50LnN0YXJ0VGltZS5nZXRIb3VycygpICsgXCI6XCIgKyBldmVudC5zdGFydFRpbWUuZ2V0TWludXRlcygpICsgXCJ+XCIgKyBldmVudC5lbmRUaW1lLmdldEhvdXJzKCkgKyBcIjpcIiArIGV2ZW50LmVuZFRpbWUuZ2V0TWludXRlcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUV2ZW50RWRpdERpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ0V2ZW50OiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRXZlbnRDcmVhdGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyZWF0aW5nRXZlbnQ6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VFdmVudENyZWF0ZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3JlYXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUV2ZW50KCkge1xyXG4gICAgICAgIHZhciBuZXdTdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBuZXdFbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBuZXdTdGFydFRpbWUuc2V0RnVsbFllYXIodGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVswXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsxXSwgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlLnNwbGl0KFwiL1wiKVsyXSk7XHJcbiAgICAgICAgbmV3RW5kVGltZS5zZXRGdWxsWWVhcih0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzFdLCB0aGlzLnN0YXRlLmlucHV0aW5nLmRhdGUuc3BsaXQoXCIvXCIpWzJdKTtcclxuICAgICAgICBuZXdTdGFydFRpbWUuc2V0SG91cnModGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lLnNwbGl0KFwiflwiKVswXS5zcGxpdChcIjpcIilbMF0sIHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMF0uc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICBuZXdFbmRUaW1lLnNldEhvdXJzKHRoaXMuc3RhdGUuaW5wdXRpbmcudGltZS5zcGxpdChcIn5cIilbMV0uc3BsaXQoXCI6XCIpWzBdLCB0aGlzLnN0YXRlLmlucHV0aW5nLnRpbWUuc3BsaXQoXCJ+XCIpWzFdLnNwbGl0KFwiOlwiKVsxXSk7XHJcbiAgICAgICAgdmFyIG5ld2RhdGEgPSBuZXcgVXNlcih0aGlzLnN0YXRlLnVzZXJkYXRhKTtcclxuICAgICAgICBuZXdkYXRhLmNhbGVuZGFycy5tYXAoY2FsZW5kYXIgPT4ge1xyXG4gICAgICAgICAgICBjYWxlbmRhci5ldmVudHMubWFwKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUgPSBuZXdTdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZW5kVGltZSA9IG5ld0VuZFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGl0bGUgPSB0aGlzLnN0YXRlLmlucHV0aW5nLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXBkYXRldXNlcmRhdGFcIiwgeyBtZXRob2Q6IFwicG9zdFwiLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNhbGVuZGFyczogbmV3ZGF0YS5jYWxlbmRhcnMgfSkgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdFdmVudDogZmFsc2UgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldHVzZXJkYXRhXCIpO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHZhciB1c2VyZGF0YSA9IG5ldyBVc2VyKGpzb24pO1xyXG4gICAgICAgIHZhciBldGQgPSBldmVudHNUb0Rpc3BheSh1c2VyZGF0YS5jYWxlbmRhcnMsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHZhciBmaWxsZWQgPSBmaWxsRXZlbnRzKGV2ZW50c1RvRGlzcGF5KHVzZXJkYXRhLmNhbGVuZGFycywgbmV3IERhdGUoKSksIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyZGF0YTogdXNlcmRhdGEsIGZpbGxlZDogZmlsbGVkLCBldmVudHNUb0Rpc3BheTogZXRkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRpdGxlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmlucHV0aW5nLnRpdGxlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGF0ZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dGluZy5kYXRlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGltZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dGluZy50aW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJkYXRhLmNhbGVuZGFycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGxlZCA9IGZpbGxFdmVudHMoZXZlbnRzVG9EaXNwYXkodGhpcy5zdGF0ZS51c2VyZGF0YS5jYWxlbmRhcnMsIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpLCB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDgwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXlQaWNrZXIgc2VsZWN0ZWREYXlzPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF5fSBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheVZpZXcgZXZlbnRzPXtmaWxsZWR9IG9wZW5FdmVudEVkaXREaWFsb2c9e3RoaXMub3BlbkV2ZW50RWRpdERpYWxvZ30gb3BlbkV2ZW50Q3JlYXRlRGlhbG9nPXt0aGlzLm9wZW5FdmVudENyZWF0ZURpYWxvZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e3RoaXMuc3RhdGUuZWRpdGluZ0V2ZW50fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImRlbW8tY3VzdG9taXplZC1zZWxlY3QtbmF0aXZlXCI+6KGM5LqL5puGPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXRpdmVTZWxlY3QgaWQ9XCJkZW1vLWN1c3RvbWl6ZWQtc2VsZWN0LW5hdGl2ZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTB9PlRlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyMH0+VHdlbnR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezMwfT5UaGlydHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdGl2ZVNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLkuovku7bmqJnpoYxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRXZlbnQuc3RhcnRUaW1lLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5zdGFydFRpbWUuZ2V0TW9udGgoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnN0YXJ0VGltZS5nZXREYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaXpeacn1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5zdGFydFRpbWUuZ2V0SG91cnMoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEV2ZW50LnN0YXJ0VGltZS5nZXRNaW51dGVzKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIn5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5lbmRUaW1lLmdldEhvdXJzKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFdmVudC5lbmRUaW1lLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pmC6ZaTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VDcmVhdGluZ0V2ZW50RWRpdERpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5jcmVhdGVFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e3RoaXMuc3RhdGUuY3JlYXRpbmdFdmVudH0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGF1dG9Gb2N1cyBtYXJnaW49XCJkZW5zZVwiIGlkPVwibmFtZVwiIGxhYmVsPVwi5LqL5Lu25qiZ6aGMXCIgZnVsbFdpZHRoIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyBcIi9cIiArIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLml6XmnJ9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpICsgXCJ+XCIgKyAobmV3IERhdGUoKS5nZXRIb3VycygpICsgMSkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmmYLplpNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5jbG9zZUV2ZW50RWRpdERpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy51cGRhdGVFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogODBweCAwIDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRGF5UGlja2VyIHN0eWxlcyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1Nb250aHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU1vbnRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLU5hdkJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFWVkpSRUZVV0FuTjJHMEtnakFZd1BIcEdmUmthWmVxdmdRYUsraFkzU1VIcmsxWXpOTGF5L09pRUZwOTJJKy9NcDJGMk1oMmxMSVNXbmZsRmp6SDI2M1JRanpNWjE5d2dzNzNlejBvMVdtdFcrZGdBMDFWeHJFM3A2bDJHTHNuQnkxVllRT3RWU0VIL2F0Q0NncXBRZ0tLcVlJT2lxMkNCa3F0Z2dMS3FRSUtncWdDQmpwSjJZNUNkSit6clQ5QTdISFNUQTFkeFVkSGd6Q3FKSUV3cTBTRHNLc0VnNmlxQklFb3Evd0VjVlJaQlhGVitRSnhWNW1CdGxERkI1VmpZVGFHWjJzZjRSOVBNN1U5WlUrbEx1YWV0UFAvNURpZTNUb08xK3UrTUt0SHMwNnFPREIyekJuSS9qQmQ0TVBRbTFWa1k3OVRiMThnQitDNjJGZEJGc1pSNnllSW8xWVFpTEpXTUlpcVZqUUl1MVlTQ0xOV0ZnaWpWallJdWhZWUNLb1dLQWlpRmdvb3B4WWFLTFVXT2lpMkZna29waFlwNkYzcjQyVzVBOXM5T2NnTnZ2YTh4UWF5c0tYbEZ5dG9xZFltUUg2dEYzdG9TVW8wSU5xOUFBQUFBRWxGVGtTdVFtQ0NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItTmF2QnV0dG9uLS1uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBd0NBWUFBQUI1UjlnVkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFYUkpSRUZVV0FuTjExOXVnakFjd1BIV3pKMWdubXh6Qi9CQkUwbjI0bTR4Zk5rVGFPTDd3T3RzbDNBWE1NYitWamFhMUJHMDBOOGZTRWliUHBBUDN4QUtLczJ5anpUUEg5UkFqaEVvOVd6UHIvVm04emdFMCtnWEFUQXh4dXh0cWVKOXQ1dEl3djVBdFFBQXBzZlQ2VFBkYnAra1VCY2dWd3ZPNTFLcVZoTWtYS3NWSkZYck9raWdWaENJczFZNGlLbFdaeEIxclg0Z3dscFJJSXBhOFNEa1dtZ2dyRnE0SUlSYUpLQ1lXblNnbnJYSVFWMXI4WUQrMVZybitiUmVhZ3lzSUZmTEFCUnQzMXY4b0J1MXhFQnR0ZlJibHRtZmpnRWNXaDlzblVTMmtOZEJLNldOMXZyT1d4T2JXc3orZmp4ZXZzeG1CMUdRRGZJTldpZXY4M25oYW9pQi9Db09VNDM4b1ByaFhTMFdwUTl4YzFaUVd4V0hxVVllMEkwcXJLQ1FLanlnRGxYSVFWMnIwSUY2VmlFQnhWVEJCU0ZVUVFOaFZZa0hJVmVKQXRrTnNiUTdjMUx0elA2RnNPYmhiMnJDS3Y3TkJJR29xNFNEbUtvRWdUaXJYQWNKVkdrRlNWVnBnb1NyWElDR1VNVUgvUUJaTlNVeTVYV1Vod0FBQUFCSlJVNUVya0pnZ2c9PVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1OYXZCdXR0b24tLWludGVyYWN0aW9uRGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1DYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUNhcHRpb24gPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLVdlZWtkYXlzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5c1JvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2Vla2RheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhiOTg5ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrZGF5IGFiYnJbdGl0bGVdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItQm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItV2VlayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1XZWVrTnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhZWNlYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI5ODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQgLkRheVBpY2tlci1EYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLUZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItVG9kYXlCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tdG9kYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkRheVBpY2tlci1EYXktLW91dHNpZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Yjk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjZTBlMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjE7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEV4YW1wbGUgbW9kaWZpZXJzICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheS0tc3VuZGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zdW5kYXk6bm90KC5EYXlQaWNrZXItRGF5LS10b2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkY2UwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMGY4ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MWEwZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EYXlQaWNrZXI6bm90KC5EYXlQaWNrZXItLWludGVyYWN0aW9uRGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VyLURheTpub3QoLkRheVBpY2tlci1EYXktLWRpc2FibGVkKTpub3QoLkRheVBpY2tlci1EYXktLXNlbGVjdGVkKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIERheVBpY2tlcklucHV0ICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheVdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGF5UGlja2VySW5wdXQtT3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPmxvYWRpbmc8L3A+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\imyua\\\\dev\\\\calendar\\\\pages\\\\index.js */"));
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 558
          },
          __self: this
        }, "loading");
      }
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var res, json, userdata, etd, filled;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInitialProps$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("http://localhost:3000/api/getuserdata"));

            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

            case 5:
              json = _context3.sent;
              userdata = new _classes__WEBPACK_IMPORTED_MODULE_14__["User"](json);
              etd = eventsToDispay(userdata.calendars, new Date());
              filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
              return _context3.abrupt("return", {
                userdata: userdata,
                filled: filled,
                eventsToDispay: etd
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.4a5725b6637ee75404d2.hot-update.js.map