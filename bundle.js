/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Point = __webpack_require__(1);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _square = __webpack_require__(2);
	
	var _square2 = _interopRequireDefault(_square);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var mainpage = function mainpage() {
	    _classCallCheck(this, mainpage);
	
	    this.currentPoint = new _Point2.default(1, 23);
	    this.currentPoint.setLeftValue(666);
	    this.currentPoint.setRightValue(777);
	
	    this.currentSqure = new _square2.default(500, 500);
	    this.currentSqure.x = 200;
	    this.currentSqure.y = 400;
	
	    console.log(this.currentSqure);
	
	    var body = document.querySelector('body');
	    body.textContent = 'This is javascript orignal point: ' + this.currentPoint;
	};
	
	new mainpage();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Point = function () {
	    function Point(x, y) {
	        _classCallCheck(this, Point);
	
	        this.x = x;
	        this.y = y;
	    }
	
	    _createClass(Point, [{
	        key: "setLeftValue",
	        value: function setLeftValue(left) {
	            this.x = left;
	        }
	    }, {
	        key: "setRightValue",
	        value: function setRightValue(right) {
	            this.y = right;
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "(" + this.x + ", " + this.y + ")";
	        }
	    }]);
	
	    return Point;
	}();
	
	exports.default = Point;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(1);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Sequre = function (_point) {
	    _inherits(Sequre, _point);
	
	    function Sequre(top, bottom) {
	        _classCallCheck(this, Sequre);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sequre).call(this));
	
	        _this.arr = new Array();
	        _this.arr.push('xxx');
	        _this.Top = top;
	        _this.Button = bottom;
	        return _this;
	    }
	
	    _createClass(Sequre, [{
	        key: 'toString',
	        value: function toString() {
	            return '(X:' + this.x + ',Y: ' + this.y + ',Top:' + this.Top + ',Bottom:' + this.Button + ')';
	        }
	    }]);
	
	    return Sequre;
	}(_Point2.default);
	
	exports.default = Sequre;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map