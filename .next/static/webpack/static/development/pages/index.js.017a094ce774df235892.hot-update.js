webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./comps/eventCard.js":
/*!****************************!*\
  !*** ./comps/eventCard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes */ "./classes.js");







var _jsxFileName = "C:\\Users\\imyua\\dev\\calendar\\comps\\eventCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var EventCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EventCard, _React$Component);

  function EventCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EventCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(EventCard).call(this, props));
    _this.state = {
      elevation: 0
    };
    _this.handleMouseOver = _this.handleMouseOver.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleEmptyCardClick = _this.handleEmptyCardClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EventCard, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      this.setState({
        elevation: 20
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.setState({
        elevation: 0
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.openEventEditDialog(this.props.event);
    }
  }, {
    key: "handleEmptyCardClick",
    value: function handleEmptyCardClick() {
      this.props.openEventCreateDialog(this.props.event);
    }
  }, {
    key: "emptyCard",
    value: function emptyCard(startTime, endTime) {
      endTime = endTime;
      startTime = startTime;
      var duration = (endTime - startTime) / 60000;
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
  }, {
    key: "EmptySections",
    value: function EmptySections(start, end) {
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
  }, {
    key: "render",
    value: function render() {
      if (this.props.event instanceof _classes__WEBPACK_IMPORTED_MODULE_9__["Event"]) {
        if (this.props.event.isEmpty) {
          return this.EmptySections(this.props.event.startTime, this.props.event.endTime).map(function (emptyCard) {
            return emptyCard;
          });
        } else {
          var style = {
            height: this.props.height != undefined ? this.props.height : this.props.event.duration,
            backgroundImage: "linear-gradient(315deg, " + this.props.event.color[0] + " 0%, " + this.props.event.color[1] + " 100%)",
            fontSize: 8,
            paddingLeft: 16,
            marginTop: this.props.height != undefined ? 15 : 0,
            paddingTop: 6,
            paddingBottom: 6
          };
          /** compose event info of card */

          var lineAmount = this.props.height != undefined ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.height / 20) > 1 ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.height / 20) - 1 : 1 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.event.duration / 20) > 1 ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.event.duration / 20) - 1 : 1;
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
          }, "Event ID : ", this.props.event.id));
          return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
          }, eventInfo.slice(0, lineAmount).map(function (info) {
            return info;
          }));
        }
      } else {
        console.error("渲染事件卡片時接收到了不符合規範的 Event 物件。");
        return null;
      }
    }
  }]);

  return EventCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EventCard);

/***/ })

})
//# sourceMappingURL=index.js.017a094ce774df235892.hot-update.js.map