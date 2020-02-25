module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7Sw3");


/***/ }),

/***/ "7Sw3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Zb5a");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B19g");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KhKf");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_database__WEBPACK_IMPORTED_MODULE_1__["default"]);
handler.get(async (req, res) => {
  let doc = await req.db.collection("userdata", function (err, collection) {
    if (err) console.log(err);
    collection.insertOne(new _classes__WEBPACK_IMPORTED_MODULE_2__[/* User */ "c"]({
      username: "ken20001207",
      calendars: [new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Calendar */ "a"]({
        title: "預設行事曆1",
        color: ["#fd3721", "#b721ff"],
        events: [new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Event */ "b"]({
          title: "預設事項1",
          startTime: new Date("2020/2/23 10:00"),
          endTime: new Date("2020/2/23 11:00"),
          color: ["#fd3721", "#b721ff"]
        }), new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Event */ "b"]({
          title: "預設事項2",
          startTime: new Date("2020/2/24 13:00"),
          endTime: new Date("2020/2/24 14:00"),
          color: ["#fd3721", "#b721ff"]
        }), new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Event */ "b"]({
          title: "預設事項3",
          startTime: new Date("2020/2/23 16:00"),
          endTime: new Date("2020/2/23 17:00"),
          color: ["#fd3721", "#b721ff"]
        })]
      }), new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Calendar */ "a"]({
        title: "預設行事曆2",
        color: ["#B721FF", "#21D4FD"],
        events: [new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Event */ "b"]({
          title: "預設事項4",
          startTime: new Date("2020/2/24 10:00"),
          endTime: new Date("2020/2/24 11:00"),
          color: ["#B721FF", "#21D4FD"]
        }), new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Event */ "b"]({
          title: "預設事項5",
          startTime: new Date("2020/2/23 12:00"),
          endTime: new Date("2020/2/23 13:30"),
          color: ["#B721FF", "#21D4FD"]
        }), new _classes__WEBPACK_IMPORTED_MODULE_2__[/* Event */ "b"]({
          title: "預設事項6",
          startTime: new Date("2020/2/24 15:00"),
          endTime: new Date("2020/2/24 15:30"),
          color: ["#B721FF", "#21D4FD"]
        })]
      })]
    }));
  });
  res.json({
    code: 200
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "B19g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ykE2");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Zb5a");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);


const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"]("mongodb+srv://yuanlin:411612@cluster0-9wzb6.gcp.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("calendar");
  return next();
}

const middleware = next_connect__WEBPACK_IMPORTED_MODULE_1___default()();
middleware.use(database);
/* harmony default export */ __webpack_exports__["default"] = (middleware);

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

/***/ "Zb5a":
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });