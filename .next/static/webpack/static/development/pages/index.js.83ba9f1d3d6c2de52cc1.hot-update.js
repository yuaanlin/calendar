webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/methods */ "./utils/methods.js");




var Event =
/*#__PURE__*/
function () {
  function Event(JSONObject, isEmpty) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Event);

    this.startTime = new Date(JSONObject.startTime);
    this.endTime = new Date(JSONObject.endTime);
    this.duration = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((this.endTime - this.startTime) / 60000);
    this.location = JSONObject.location == undefined ? undefined : JSONObject.location;
    this.description = JSONObject.description == undefined ? undefined : JSONObject.description;
    this.id = JSONObject.id == undefined ? Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["generateUUID"])() : JSONObject.id;
    this.calendarTitle = JSONObject.calendarTitle == undefined ? undefined : JSONObject.calendarTitle;

    if (!isEmpty) {
      this.isEmpty = false;
      this.title = JSONObject.title;
      this.color = JSONObject.color;
    } else this.isEmpty = true;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Event, [{
    key: "isAllDayEvent",
    value: function isAllDayEvent() {
      return this.duration >= 1440;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.isEmpty;
    }
  }, {
    key: "getStartTimeSrting",
    value: function getStartTimeSrting() {
      return this.startTime.getHours() + ":" + (this.startTime.getMinutes() < 10 ? "0" : "") + this.startTime.getMinutes();
    }
  }, {
    key: "getEndTimeSting",
    value: function getEndTimeSting() {
      return this.endTime.getHours() + ":" + (this.endTime.getMinutes() < 10 ? "0" : "") + this.endTime.getMinutes();
    }
  }, {
    key: "getDurationString",
    value: function getDurationString() {
      return this.getStartTimeSrting() + " - " + this.getEndTimeSting();
    }
  }]);

  return Event;
}();
var Calendar = function Calendar(JSONObject) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Calendar);

  this.title = JSONObject.title;
  this.color = JSONObject.color;
  this.events = JSONObject.events.map(function (event) {
    return new Event(event);
  });
};
var User = function User(JSONObject) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, User);

  this.username = JSONObject.username;
  this.calendars = JSONObject.calendars.map(function (calendar) {
    return new Calendar(calendar);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.83ba9f1d3d6c2de52cc1.hot-update.js.map