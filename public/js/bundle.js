/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/application/backend.js":
/*!************************************!*\
  !*** ./src/application/backend.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _seekers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seekers */ \"./src/application/seekers.js\");\n\r\n\r\nclass Backend extends _seekers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    constructor({name, age, type, rate}){\r\n        super()\r\n        this.name = name;\r\n        this.age = age;\r\n        this.type = type;\r\n        this.rate = rate;\r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backend);\n\n//# sourceURL=webpack:///./src/application/backend.js?");

/***/ }),

/***/ "./src/application/design.js":
/*!***********************************!*\
  !*** ./src/application/design.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _seekers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seekers */ \"./src/application/seekers.js\");\n\r\n\r\nclass Design extends _seekers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    constructor({name, age, type, rate}){\r\n        super()\r\n        this.name = name;\r\n        this.age = age;\r\n        this.type = type;\r\n        this.rate = rate;\r\n       \r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Design);\n\n//# sourceURL=webpack:///./src/application/design.js?");

/***/ }),

/***/ "./src/application/frontend.js":
/*!*************************************!*\
  !*** ./src/application/frontend.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _seekers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seekers */ \"./src/application/seekers.js\");\n\r\n\r\nclass  Frontend extends _seekers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    constructor({name, age, type, rate}){\r\n        super()\r\n        this.name = name;\r\n        this.age = age;\r\n        this.type = type;\r\n        this.rate = rate;\r\n       \r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Frontend);\n\n//# sourceURL=webpack:///./src/application/frontend.js?");

/***/ }),

/***/ "./src/application/project.js":
/*!************************************!*\
  !*** ./src/application/project.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _seekers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seekers */ \"./src/application/seekers.js\");\n\r\n\r\nclass Project extends _seekers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    constructor({name, age, type, rate}){\r\n        super()\r\n        this.name = name;\r\n        this.age = age;\r\n        this.type = type;\r\n        this.rate = rate;\r\n       \r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/application/project.js?");

/***/ }),

/***/ "./src/application/seekers.js":
/*!************************************!*\
  !*** ./src/application/seekers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Seekers {\r\n\r\n    constructor() {\r\n        this.getData = this.getData.bind(this);\r\n        this.hireEmployee = this.hireEmployee.bind(this);\r\n    };\r\n\r\n    getData() {\r\n\r\n        let data = document.querySelector(\".data\");\r\n        let jobSeekers = document.createElement(\"div\");\r\n        jobSeekers.className = \"jobSeekers\";\r\n\r\n        jobSeekers.innerHTML =\r\n            `<div>${this.name} (${this.age}) ${this.type} <button class=\"hire\">hire</button> </div>`\r\n\r\n        data.append(jobSeekers);\r\n\r\n        let hireBtn = jobSeekers.querySelector(\".hire\");\r\n        hireBtn.addEventListener(\"click\", this.hireEmployee);\r\n    };\r\n\r\n    hireEmployee(e) {\r\n\r\n        e.target.setAttribute('disabled','true');\r\n        let team = document.querySelector(\".team\");\r\n        let myTeam = document.createElement(\"div\");\r\n        myTeam.className = \"myTeam\";\r\n\r\n        myTeam.innerHTML =\r\n            `<div>${this.name}(${this.type}) at ${this.rate} USD / hour</div>`\r\n\r\n        team.append(myTeam);\r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Seekers);\n\n//# sourceURL=webpack:///./src/application/seekers.js?");

/***/ }),

/***/ "./src/application/team.js":
/*!*********************************!*\
  !*** ./src/application/team.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend */ \"./src/application/backend.js\");\n/* harmony import */ var _frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend */ \"./src/application/frontend.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/application/project.js\");\n/* harmony import */ var _design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./design */ \"./src/application/design.js\");\n\r\n\r\n\r\n\r\n\r\nclass Team {\r\n\r\n    makeTeam(seekers) {\r\n\r\n        let SeekersClass = null;\r\n\r\n        switch (seekers.type) {\r\n            case \"backend\": SeekersClass = _backend__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n                break;\r\n            case \"frontend\": SeekersClass = _frontend__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n                break;\r\n            case \"project\": SeekersClass = _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n                break;\r\n            case \"design\": SeekersClass = _design__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n                break;\r\n            default: console.log(\"Error\");\r\n        };\r\n\r\n        return new SeekersClass(seekers);\r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\n\n//# sourceURL=webpack:///./src/application/team.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/team */ \"./src/application/team.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    fetch(\"http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2\")\r\n        .then(res => res.json())\r\n        .then(data => {\r\n            //console.log(data);\r\n\r\n            data.forEach(item => {\r\n\r\n                const hr = new _application_team__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n                const hireStaff = hr.makeTeam({\r\n                    name: item.name,\r\n                    age: item.age,\r\n                    type: item.type,\r\n                    rate: item.rate\r\n                });\r\n\r\n               hireStaff.getData();\r\n            \r\n            });\r\n        });\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });