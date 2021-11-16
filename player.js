/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/player/styles.less":
/*!********************************!*\
  !*** ./src/player/styles.less ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".adbox-muteunmute {\n  position: absolute;\n  right: 15px;\n  bottom: 15px;\n  height: 40px;\n  width: 40px;\n  border-style: none;\n  font-weight: bold;\n  font-size: 22px;\n  opacity: 0.85;\n  border-radius: 5px;\n  color: #000;\n  cursor: pointer;\n  line-height: 0;\n  z-index: 1;\n}\n.adbox-muteunmute:hover {\n  opacity: 1;\n}\n.adbox-close {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  height: 30px;\n  width: 30px;\n  border-style: none;\n  font-weight: bold;\n  font-size: 25px;\n  opacity: 0.85;\n  border-radius: 50%;\n  color: #000;\n  cursor: pointer;\n  line-height: 0;\n  z-index: 1;\n}\n.adbox-close:hover {\n  opacity: 1;\n}\n.adbox-skip {\n  position: absolute;\n  left: 15px;\n  bottom: 15px;\n  height: 40px;\n  width: auto;\n  min-width: 120px;\n  border-style: none;\n  font-weight: bold;\n  font-size: 25px;\n  opacity: 0.85;\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px transparent solid;\n  color: #000;\n  cursor: pointer;\n  line-height: 0;\n  z-index: 1;\n}\n.adbox-skip:hover {\n  opacity: 1;\n}\n.adbox-skip:disabled {\n  cursor: default;\n  opacity: 0.3;\n}\n#slot {\n  position: relative;\n  background-color: #000;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(50, 50, 50, 0.95);\n  border: 2px #ccc solid;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/player/styles.less"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,UAAA;AACJ;AACI;EACI,UAAA;AACR;AAGA;EACI,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,UAAA;AADJ;AAGI;EACI,UAAA;AADR;AAKA;EACI,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,6BAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,UAAA;AAHJ;AAKI;EACI,UAAA;AAHR;AAMI;EACI,eAAA;EACA,YAAA;AAJR;AAQA;EACI,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,+CAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AANJ","sourcesContent":[".adbox-muteunmute {\n    position: absolute;\n    right: 15px;\n    bottom: 15px;\n    height: 40px;\n    width: 40px;\n    border-style: none;\n    font-weight: bold;\n    font-size: 22px;\n    opacity: 0.85;\n    border-radius: 5px;\n    color: #000;\n    cursor: pointer;\n    line-height: 0;\n    z-index: 1;\n\n    &:hover {\n        opacity: 1;\n    }\n}\n\n.adbox-close {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    height: 30px;\n    width: 30px;\n    border-style: none;\n    font-weight: bold;\n    font-size: 25px;\n    opacity: 0.85;\n    border-radius: 50%;\n    color: #000;\n    cursor: pointer;\n    line-height: 0;\n    z-index: 1;\n\n    &:hover {\n        opacity: 1;\n    }\n}\n\n.adbox-skip {\n    position: absolute;\n    left: 15px;\n    bottom: 15px;\n    height: 40px;\n    width: auto;\n    min-width: 120px;\n    border-style: none;\n    font-weight: bold;\n    font-size: 25px;\n    opacity: 0.85;\n    background-color: #fff;\n    border-radius: 5px;\n    border: 1px transparent solid;\n    color: #000;\n    cursor: pointer;\n    line-height: 0;\n    z-index: 1;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: 0.3;\n    }\n}\n\n#slot {\n    position: relative;\n    background-color: #000;\n    border-radius: 5px;\n    box-shadow: 0px 0px 20px rgba(50, 50, 50, 0.95);\n    border: 2px #ccc solid;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ (function(module) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/player/player.html":
/*!********************************!*\
  !*** ./src/player/player.html ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<button class=\"adbox-muteunmute\">🔇</button>\r\n<button class=\"adbox-close\">X</button>\r\n<button class=\"adbox-skip\"></button>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/player/player.ts":
/*!******************************!*\
  !*** ./src/player/player.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UNMUTE_UNICODE = exports.MUTE_UNICODE = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./styles.less */ "./src/player/styles.less"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./player.html */ "./src/player/player.html"), exports);
exports.MUTE_UNICODE = '🔇';
exports.UNMUTE_UNICODE = '🔈';


/***/ }),

/***/ "./src/utils/function.ts":
/*!*******************************!*\
  !*** ./src/utils/function.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNullOrUndefined = exports.bind = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
function bind(fn, context) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (Function.prototype.bind)
        return fn.bind.apply(fn, tslib_1.__spreadArray([context], args));
    return function () {
        fn.apply(context, args.concat([].slice.call(arguments)));
    };
}
exports.bind = bind;
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
exports.isNullOrUndefined = isNullOrUndefined;


/***/ }),

/***/ "./src/vpaid.ts":
/*!**********************!*\
  !*** ./src/vpaid.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vpaid = void 0;
var function_1 = __webpack_require__(/*! ./utils/function */ "./src/utils/function.ts");
var styles_less_1 = __webpack_require__(/*! ./player/styles.less */ "./src/player/styles.less");
var player_html_1 = __webpack_require__(/*! ./player/player.html */ "./src/player/player.html");
var player_1 = __webpack_require__(/*! ./player/player */ "./src/player/player.ts");
var VPAID_VERSION = '2.0';
var Vpaid = /** @class */ (function () {
    function Vpaid() {
        this.width = 0;
        this.height = 0;
        this.duration = 0;
        this.expanded = false;
        this.skippableState = false;
        this.viewMode = 'normal';
        this.volume = 0;
        this.linear = true;
        this.isRunning = false;
        this.videos = [];
        this.eventsCallbacks = {};
        this.skipOffset = 5000;
        this.isClosable = false;
        this.timeUpdateHandler = function_1.bind(this.timeUpdateHandler, this);
        this.stopAd = function_1.bind(this.stopAd, this);
        this.videoResume = function_1.bind(this.videoResume, this);
        this.muteChange = function_1.bind(this.muteChange, this);
        this.skipAd = function_1.bind(this.skipAd, this);
        this.playChange = function_1.bind(this.playChange, this);
        this.fullscreenChange = function_1.bind(this.fullscreenChange, this);
        this.adLoadedHandler = function_1.bind(this.adLoadedHandler, this);
        this.adClickThruHandler = function_1.bind(this.adClickThruHandler, this);
    }
    Vpaid.prototype.initAd = function (width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
        this.width = width;
        this.height = height;
        this.viewMode = viewMode;
        this.slot = environmentVars.slot;
        this.videoSlot = environmentVars.videoSlot;
        this.videoSlotCanAutoPlay = environmentVars.videoSlotCanAutoPlay;
        this.isRunning = false;
        this.slot.innerHTML = player_html_1.default;
        var style = document.createElement('style');
        style.innerHTML = styles_less_1.default.toString();
        this.slot.appendChild(style);
        this.slot.appendChild(this.videoSlot);
        if (this.videoSlotCanAutoPlay) {
            this.videoSlot.autoplay = true;
            this.muteChange();
        }
        var data = JSON.parse(creativeData['AdParameters']);
        this.clickThroughUrl = data.clickThroughUrl;
        this.videos = data.videos || [];
        this.initVideo();
        this.updateVideoPlayerSize();
        this.skipOffset = data.paramsControls.skipOffset;
        if (this.skipOffset < 0 || function_1.isNullOrUndefined(this.skipOffset)) {
            this.skipOffset = null;
            this.slot.getElementsByClassName('adbox-skip')[0].remove();
        }
        this.isClosable = data.paramsControls.isClosable;
        if (!this.isClosable) {
            this.slot.getElementsByClassName('adbox-close')[0].remove();
        }
        this.setEventsToPlayer();
    };
    Vpaid.prototype.log = function (str) {
        console.log(str);
    };
    Vpaid.prototype.callEvent_ = function (eventType) {
        if (eventType in this.eventsCallbacks) {
            if (eventType === 'AdClickThru') {
                this.eventsCallbacks[eventType].call(null, null, null, true);
            }
            else {
                this.eventsCallbacks[eventType]();
            }
        }
    };
    Vpaid.prototype.startAd = function () {
        var _this = this;
        this.videoSlot.play().then(function () {
            _this.isRunning = true;
            var date = new Date();
            _this.callEvent_('AdStarted');
        });
    };
    Vpaid.prototype.handshakeVersion = function (playerVPAIDVersion) {
        return VPAID_VERSION;
    };
    Vpaid.prototype.stopAd = function () {
        this.isRunning = false;
        this.resetSlot();
        this.callEvent_('AdStopped');
    };
    Vpaid.prototype.skipAd = function () {
        if (this.skippableState) {
            this.isRunning = false;
            this.resetSlot();
            this.callEvent_('AdSkipped');
            this.callEvent_('AdStopped');
        }
    };
    Vpaid.prototype.resizeAd = function (width, height, viewMode) {
        this.width = width;
        this.height = height;
        this.viewMode = viewMode;
        this.updateVideoPlayerSize();
        this.callEvent_('AdSizeChange');
    };
    Vpaid.prototype.pauseAd = function () {
        this.isRunning = false;
        this.videoSlot.pause();
        this.callEvent_('AdPaused');
    };
    Vpaid.prototype.resumeAd = function () {
        var _this = this;
        this.videoSlot.play().then(function () {
            _this.isRunning = true;
            _this.callEvent_('AdResumed');
        });
    };
    Vpaid.prototype.expandAd = function () {
    };
    Vpaid.prototype.collapseAd = function () {
    };
    Vpaid.prototype.subscribe = function (fn, event, listenerScope) {
        var callBack = function_1.bind(fn, listenerScope);
        this.eventsCallbacks[event] = callBack;
    };
    Vpaid.prototype.unsubscribe = function (fn, event) {
        this.eventsCallbacks[event] = null;
    };
    Vpaid.prototype.getAdLinear = function () {
        return this.linear;
    };
    Vpaid.prototype.getAdWidth = function () {
        return this.width;
    };
    Vpaid.prototype.getAdHeight = function () {
        return this.height;
    };
    Vpaid.prototype.getAdExpanded = function () {
        return this.expanded;
    };
    Vpaid.prototype.getAdSkippableState = function () {
        return this.skippableState;
    };
    Vpaid.prototype.getAdRemainingTime = function () {
        var _a, _b;
        return Math.round(((_a = this.videoSlot) === null || _a === void 0 ? void 0 : _a.duration) - ((_b = this.videoSlot) === null || _b === void 0 ? void 0 : _b.currentTime));
    };
    Vpaid.prototype.getAdDuration = function () {
        return this.duration;
    };
    Vpaid.prototype.getAdCompanions = function () {
        return '';
    };
    Vpaid.prototype.getAdIcons = function () {
        return true;
    };
    Vpaid.prototype.getAdVolume = function () {
        return this.volume;
    };
    Vpaid.prototype.setAdVolume = function (volume) {
        if (volume >= 0 && volume <= 1) {
            this.volume = volume;
            this.callEvent_('AdVolumeChange');
        }
    };
    Vpaid.prototype.resetSlot = function () {
        var _a, _b, _c;
        this.videoSlot.removeEventListener('timeupdate', this.timeUpdateHandler);
        this.videoSlot.removeEventListener('ended', this.stopAd);
        this.videoSlot.removeEventListener('play', this.videoResume);
        this.videoSlot.removeEventListener('click', this.playChange);
        this.videoSlot.removeEventListener('click', this.adClickThruHandler);
        this.videoSlot.removeEventListener('loadeddata', this.adLoadedHandler);
        this.videoSlot.pause();
        this.videoSlot.removeAttribute('src');
        this.videoSlot.load();
        this.slot.removeEventListener('fullscreenchange', this.fullscreenChange);
        (_a = this.slot.getElementsByClassName('adbox-muteunmute')[0]) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', this.muteChange);
        (_b = this.slot.getElementsByClassName('adbox-close')[0]) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', this.stopAd);
        (_c = this.slot.getElementsByClassName('adbox-skip')[0]) === null || _c === void 0 ? void 0 : _c.removeEventListener('click', this.skipAd);
        this.slot.innerHTML = '';
    };
    Vpaid.prototype.updateVideoPlayerSize = function () {
        if (this.viewMode === 'fullscreen') {
            this.slot.requestFullscreen();
        }
        else {
            this.slot.setAttribute('style', 'height:' + this.height.toString() + 'px;' + 'width:' + this.width.toString() + 'px;');
            this.videoSlot.setAttribute('width', this.width.toString());
            this.videoSlot.setAttribute('height', this.height.toString());
        }
    };
    ;
    Vpaid.prototype.muteChange = function () {
        if (this.volume == 0) {
            this.volume = 1.0;
            this.videoSlot.muted = false;
            this.slot.getElementsByClassName('adbox-muteunmute')[0].textContent = player_1.UNMUTE_UNICODE;
        }
        else {
            this.volume = 0.0;
            this.videoSlot.muted = true;
            this.slot.getElementsByClassName('adbox-muteunmute')[0].textContent = player_1.MUTE_UNICODE;
        }
        this.callEvent_('AdVolumeChange');
    };
    ;
    Vpaid.prototype.playChange = function () {
        if (this.isRunning) {
            this.pauseAd();
        }
        else {
            this.resumeAd();
        }
    };
    Vpaid.prototype.timeUpdateHandler = function () {
        if (!function_1.isNullOrUndefined(this.skipOffset)) {
            this.skippableState = this.skipOffset < this.videoSlot.currentTime * 1000;
            if (!this.skippableState) {
                this.slot.getElementsByClassName('adbox-skip')[0].textContent = "skip in " + Math.round(this.skipOffset / 1000 - this.videoSlot.currentTime) + " sec";
                this.slot.getElementsByClassName('adbox-skip')[0].setAttribute('disabled', '');
            }
            else {
                this.slot.getElementsByClassName('adbox-skip')[0].textContent = "skip";
                this.slot.getElementsByClassName('adbox-skip')[0].removeAttribute('disabled');
            }
        }
        if (this.duration != this.videoSlot.duration) {
            this.duration = this.videoSlot.duration;
            this.callEvent_('AdDurationChange');
        }
    };
    ;
    Vpaid.prototype.videoResume = function () {
    };
    ;
    Vpaid.prototype.adLoadedHandler = function () {
        this.callEvent_('AdLoaded');
    };
    Vpaid.prototype.fullscreenChange = function () {
        var _a, _b, _c, _d;
        if (document.fullscreenElement) {
            this.expanded = true;
            (_a = this.videoSlot) === null || _a === void 0 ? void 0 : _a.setAttribute('width', this.slot.clientWidth.toString());
            (_b = this.videoSlot) === null || _b === void 0 ? void 0 : _b.setAttribute('height', this.slot.clientHeight.toString());
        }
        else {
            this.expanded = false;
            (_c = this.videoSlot) === null || _c === void 0 ? void 0 : _c.setAttribute('width', this.width.toString());
            (_d = this.videoSlot) === null || _d === void 0 ? void 0 : _d.setAttribute('height', this.height.toString());
        }
    };
    Vpaid.prototype.adClickThruHandler = function () {
        this.callEvent_('AdClickThru');
    };
    Vpaid.prototype.initVideo = function () {
        var _this = this;
        var video = this.videos.length && this.videos[0];
        var diff = Math.abs(this.width * this.height - video.height * video.width);
        this.videos.forEach(function (item) {
            if (diff > Math.abs(item.width * item.height - _this.width * _this.height)) {
                video = item;
                diff = Math.abs(item.width * item.height - _this.width * _this.height);
            }
        });
        this.videoSlot.setAttribute('src', video.url);
    };
    Vpaid.prototype.setEventsToPlayer = function () {
        var _a, _b, _c;
        this.videoSlot.addEventListener('timeupdate', this.timeUpdateHandler);
        this.videoSlot.addEventListener('ended', this.stopAd);
        this.videoSlot.addEventListener('play', this.videoResume);
        this.videoSlot.addEventListener('click', this.playChange);
        this.videoSlot.addEventListener('click', this.adClickThruHandler);
        this.videoSlot.addEventListener('loadeddata', this.adLoadedHandler);
        this.slot.addEventListener('fullscreenchange', this.fullscreenChange);
        (_a = this.slot.getElementsByClassName('adbox-muteunmute')[0]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.muteChange);
        (_b = this.slot.getElementsByClassName('adbox-close')[0]) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.stopAd);
        (_c = this.slot.getElementsByClassName('adbox-skip')[0]) === null || _c === void 0 ? void 0 : _c.addEventListener('click', this.skipAd);
    };
    return Vpaid;
}());
exports.Vpaid = Vpaid;


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var vpaid_1 = __webpack_require__(/*! ./vpaid */ "./src/vpaid.ts");
window.getVPAIDAd = function () {
    return new vpaid_1.Vpaid();
};

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cGFpZF9wbGF5ZXIvLi9zcmMvcGxheWVyL3N0eWxlcy5sZXNzIiwid2VicGFjazovL3ZwYWlkX3BsYXllci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdnBhaWRfcGxheWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdnBhaWRfcGxheWVyLy4vc3JjL3BsYXllci9wbGF5ZXIuaHRtbCIsIndlYnBhY2s6Ly92cGFpZF9wbGF5ZXIvLi9zcmMvcGxheWVyL3BsYXllci50cyIsIndlYnBhY2s6Ly92cGFpZF9wbGF5ZXIvLi9zcmMvdXRpbHMvZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vdnBhaWRfcGxheWVyLy4vc3JjL3ZwYWlkLnRzIiwid2VicGFjazovL3ZwYWlkX3BsYXllci8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vdnBhaWRfcGxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZwYWlkX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92cGFpZF9wbGF5ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZwYWlkX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZwYWlkX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZwYWlkX3BsYXllci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJC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LEdBQUc7QUFDbEssNENBQTRDLHNDQUFzQyxVQUFVLG9CQUFvQixFQUFFLEVBQUUsVUFBVTtBQUM5SDs7QUFFTztBQUNQLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCw0Q0FBNEM7QUFDNUM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxT0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsY0FBYywwQkFBMEIsRUFBRTtXQUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkEsbUVBQWdDO0FBRWhDLE1BQU0sQ0FBQyxVQUFVLEdBQUc7SUFDbEIsT0FBTyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBQ3JCLENBQUMiLCJmaWxlIjoidnBhaWQtcGxheWVyLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFkYm94LW11dGV1bm11dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3R0b206IDE1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgb3BhY2l0eTogMC44NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRib3gtbXV0ZXVubXV0ZTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uYWRib3gtY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0b3A6IDE1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgb3BhY2l0eTogMC44NTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRib3gtY2xvc2U6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmFkYm94LXNraXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVweDtcXG4gIGJvdHRvbTogMTVweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgb3BhY2l0eTogMC44NTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYWRib3gtc2tpcDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uYWRib3gtc2tpcDpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbiNzbG90IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjk1KTtcXG4gIGJvcmRlcjogMnB4ICNjY2Mgc29saWQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wbGF5ZXIvc3R5bGVzLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0ksVUFBQTtBQUNSO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFESjtBQUdJO0VBQ0ksVUFBQTtBQURSO0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFISjtBQUtJO0VBQ0ksVUFBQTtBQUhSO0FBTUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUpSO0FBUUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFkYm94LW11dGV1bm11dGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBib3R0b206IDE1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5hZGJveC1jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIHRvcDogMTVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLmFkYm94LXNraXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIGJvdHRvbTogMTVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgICY6ZGlzYWJsZWQge1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICB9XFxufVxcblxcbiNzbG90IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDUwLCA1MCwgNTAsIDAuOTUpO1xcbiAgICBib3JkZXI6IDJweCAjY2NjIHNvbGlkO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJhZGJveC1tdXRldW5tdXRlXFxcIj7wn5SHPC9idXR0b24+XFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYWRib3gtY2xvc2VcXFwiPlg8L2J1dHRvbj5cXHJcXG48YnV0dG9uIGNsYXNzPVxcXCJhZGJveC1za2lwXFxcIj48L2J1dHRvbj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiZXhwb3J0ICogZnJvbSAgJy4vc3R5bGVzLmxlc3MnO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wbGF5ZXIuaHRtbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1VVEVfVU5JQ09ERTogc3RyaW5nID0gJ/CflIcnO1xyXG5leHBvcnQgY29uc3QgVU5NVVRFX1VOSUNPREU6IHN0cmluZyA9ICfwn5SIJzsiLCJleHBvcnQgZnVuY3Rpb24gYmluZChmbjogKC4uLnBhcmFtczogYW55W10pID0+IGFueSwgY29udGV4dDogYW55LCAuLi5hcmdzOiBhbnlbXSk6ICguLi5wYXJhbXM6IGFueVtdKSA9PiBhbnkge1xyXG4gIGlmIChGdW5jdGlvbi5wcm90b3R5cGUuYmluZClcclxuICAgIHJldHVybiBmbi5iaW5kKGNvbnRleHQsIC4uLmFyZ3MpO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsO1xyXG59IiwiaW1wb3J0IHsgYmluZCwgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tIFwiLi91dGlscy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgVnBhaWRDcmVhdGl2ZSA9IGlhYi52cGFpZC5WcGFpZENyZWF0aXZlO1xyXG5pbXBvcnQgVmlld01vZGUgPSBpYWIudnBhaWQuVmlld01vZGU7XHJcbmltcG9ydCBDcmVhdGl2ZURhdGEgPSBpYWIudnBhaWQuQ3JlYXRpdmVEYXRhO1xyXG5pbXBvcnQgRW52aXJvbm1lbnRWYXJzID0gaWFiLnZwYWlkLkVudmlyb25tZW50VmFycztcclxuaW1wb3J0IEV2ZW50c01hcCA9IGlhYi52cGFpZC5FdmVudHNNYXA7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wbGF5ZXIvc3R5bGVzLmxlc3MnO1xyXG5pbXBvcnQgdGVtcGxhdGVQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvcGxheWVyLmh0bWwnO1xyXG5pbXBvcnQgeyBNVVRFX1VOSUNPREUsIFVOTVVURV9VTklDT0RFIH0gZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xyXG5pbXBvcnQgeyBJQ3JlYXRpdmVWaWRlbyB9IGZyb20gXCIuL2ludGVyZmFjZXMvYWQtcGFyYW1ldGVyc1wiO1xyXG5cclxuY29uc3QgVlBBSURfVkVSU0lPTjogc3RyaW5nID0gJzIuMCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVnBhaWQgaW1wbGVtZW50cyBWcGFpZENyZWF0aXZlIHtcclxuICBcclxuICBwcml2YXRlIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc2tpcHBhYmxlU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHZpZXdNb2RlOiBWaWV3TW9kZSA9ICdub3JtYWwnO1xyXG4gIHByaXZhdGUgdm9sdW1lOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbGluZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YXRlIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHNsb3Q6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgdmlkZW9TbG90OiBIVE1MVmlkZW9FbGVtZW50O1xyXG4gIHByaXZhdGUgdmlkZW9zOiBBcnJheTxJQ3JlYXRpdmVWaWRlbz4gPSBbXTtcclxuICBwcml2YXRlIHZpZGVvU2xvdENhbkF1dG9QbGF5OiBib29sZWFuO1xyXG4gIHByaXZhdGUgZXZlbnRzQ2FsbGJhY2tzOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIHNraXBPZmZzZXQ6IG51bWJlciA9IDUwMDA7XHJcbiAgcHJpdmF0ZSBpc0Nsb3NhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBjbGlja1Rocm91Z2hVcmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRpbWVVcGRhdGVIYW5kbGVyID0gYmluZCh0aGlzLnRpbWVVcGRhdGVIYW5kbGVyLCB0aGlzKTtcclxuICAgIHRoaXMuc3RvcEFkID0gYmluZCh0aGlzLnN0b3BBZCwgdGhpcyk7XHJcbiAgICB0aGlzLnZpZGVvUmVzdW1lID0gYmluZCh0aGlzLnZpZGVvUmVzdW1lLCB0aGlzKTtcclxuICAgIHRoaXMubXV0ZUNoYW5nZSA9IGJpbmQodGhpcy5tdXRlQ2hhbmdlLCB0aGlzKTtcclxuICAgIHRoaXMuc2tpcEFkID0gYmluZCh0aGlzLnNraXBBZCwgdGhpcyk7XHJcbiAgICB0aGlzLnBsYXlDaGFuZ2UgPSBiaW5kKHRoaXMucGxheUNoYW5nZSwgdGhpcyk7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW5DaGFuZ2UgPSBiaW5kKHRoaXMuZnVsbHNjcmVlbkNoYW5nZSwgdGhpcyk7XHJcbiAgICB0aGlzLmFkTG9hZGVkSGFuZGxlciA9IGJpbmQodGhpcy5hZExvYWRlZEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgdGhpcy5hZENsaWNrVGhydUhhbmRsZXIgPSBiaW5kKHRoaXMuYWRDbGlja1RocnVIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRBZChcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgIHZpZXdNb2RlOiBWaWV3TW9kZSxcclxuICAgIGRlc2lyZWRCaXRyYXRlOiBudW1iZXIsXHJcbiAgICBjcmVhdGl2ZURhdGE6IENyZWF0aXZlRGF0YSB8IHVuZGVmaW5lZCB8IG51bGwsXHJcbiAgICBlbnZpcm9ubWVudFZhcnM6IEVudmlyb25tZW50VmFyc1xyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQ9IGhlaWdodDtcclxuICAgIHRoaXMudmlld01vZGUgPSB2aWV3TW9kZTtcclxuICAgIHRoaXMuc2xvdCA9IGVudmlyb25tZW50VmFycy5zbG90O1xyXG4gICAgdGhpcy52aWRlb1Nsb3QgPSBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90O1xyXG4gICAgdGhpcy52aWRlb1Nsb3RDYW5BdXRvUGxheSA9IGVudmlyb25tZW50VmFycy52aWRlb1Nsb3RDYW5BdXRvUGxheTtcclxuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zbG90LmlubmVySFRNTCA9IHRlbXBsYXRlUGxheWVyO1xyXG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHN0eWxlLmlubmVySFRNTCA9IHN0eWxlcy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5zbG90LmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIHRoaXMuc2xvdC5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvU2xvdCk7XHJcblxyXG4gICAgaWYgKHRoaXMudmlkZW9TbG90Q2FuQXV0b1BsYXkpIHtcclxuICAgICAgdGhpcy52aWRlb1Nsb3QuYXV0b3BsYXkgPSB0cnVlO1xyXG4gICAgICB0aGlzLm11dGVDaGFuZ2UoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGNyZWF0aXZlRGF0YVsnQWRQYXJhbWV0ZXJzJ10pO1xyXG4gICAgdGhpcy5jbGlja1Rocm91Z2hVcmwgPSBkYXRhLmNsaWNrVGhyb3VnaFVybDtcclxuICAgIHRoaXMudmlkZW9zID0gZGF0YS52aWRlb3MgfHwgW107XHJcbiAgICB0aGlzLmluaXRWaWRlbygpO1xyXG4gICAgdGhpcy51cGRhdGVWaWRlb1BsYXllclNpemUoKTtcclxuXHJcbiAgICB0aGlzLnNraXBPZmZzZXQgPSBkYXRhLnBhcmFtc0NvbnRyb2xzLnNraXBPZmZzZXQ7XHJcbiAgICBpZiAodGhpcy5za2lwT2Zmc2V0IDwgMCB8fCBpc051bGxPclVuZGVmaW5lZCh0aGlzLnNraXBPZmZzZXQpKSB7XHJcbiAgICAgIHRoaXMuc2tpcE9mZnNldCA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2xvdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGJveC1za2lwJylbMF0ucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0Nsb3NhYmxlID0gZGF0YS5wYXJhbXNDb250cm9scy5pc0Nsb3NhYmxlO1xyXG4gICAgaWYgKCF0aGlzLmlzQ2xvc2FibGUpIHtcclxuICAgICAgdGhpcy5zbG90LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkYm94LWNsb3NlJylbMF0ucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRFdmVudHNUb1BsYXllcigpO1xyXG4gIH1cclxuXHJcbiAgbG9nKHN0cjogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gIH1cclxuXHJcbiAgY2FsbEV2ZW50XyhldmVudFR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKGV2ZW50VHlwZSBpbiB0aGlzLmV2ZW50c0NhbGxiYWNrcykge1xyXG4gICAgICBpZiAoZXZlbnRUeXBlID09PSAnQWRDbGlja1RocnUnKXtcclxuICAgICAgICB0aGlzLmV2ZW50c0NhbGxiYWNrc1tldmVudFR5cGVdLmNhbGwobnVsbCxudWxsLG51bGwsdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHNDYWxsYmFja3NbZXZlbnRUeXBlXSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEFkKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aWRlb1Nsb3QucGxheSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0aGlzLmNhbGxFdmVudF8oJ0FkU3RhcnRlZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBWUEFJRF9WRVJTSU9OO1xyXG4gIH1cclxuICBcclxuICBzdG9wQWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXNldFNsb3QoKTtcclxuICAgIHRoaXMuY2FsbEV2ZW50XygnQWRTdG9wcGVkJyk7XHJcbiAgfVxyXG4gIFxyXG4gIHNraXBBZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNraXBwYWJsZVN0YXRlKSB7XHJcbiAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVzZXRTbG90KCk7XHJcbiAgICAgIHRoaXMuY2FsbEV2ZW50XygnQWRTa2lwcGVkJyk7XHJcbiAgICAgIHRoaXMuY2FsbEV2ZW50XygnQWRTdG9wcGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJlc2l6ZUFkKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB2aWV3TW9kZTogVmlld01vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy52aWV3TW9kZSA9IHZpZXdNb2RlO1xyXG4gICAgdGhpcy51cGRhdGVWaWRlb1BsYXllclNpemUoKTtcclxuICAgIHRoaXMuY2FsbEV2ZW50XygnQWRTaXplQ2hhbmdlJyk7XHJcbiAgfVxyXG4gIFxyXG4gIHBhdXNlQWQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudmlkZW9TbG90LnBhdXNlKCk7XHJcbiAgICAgIHRoaXMuY2FsbEV2ZW50XygnQWRQYXVzZWQnKTtcclxuICB9XHJcbiAgXHJcbiAgcmVzdW1lQWQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudmlkZW9TbG90LnBsYXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnRfKCdBZFJlc3VtZWQnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cGFuZEFkKCk6IHZvaWQge1xyXG4gIH1cclxuICBcclxuICBjb2xsYXBzZUFkKCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlPEUgZXh0ZW5kcyBrZXlvZiBFdmVudHNNYXA+KGZuOiBFdmVudHNNYXBbRV0sIGV2ZW50OiBFLCBsaXN0ZW5lclNjb3BlPzogb2JqZWN0KTogdm9pZCB7XHJcbiAgICBjb25zdCBjYWxsQmFjayA9IGJpbmQoZm4sIGxpc3RlbmVyU2NvcGUpO1xyXG4gICAgdGhpcy5ldmVudHNDYWxsYmFja3NbZXZlbnRdID0gY2FsbEJhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIHVuc3Vic2NyaWJlPEUgZXh0ZW5kcyBrZXlvZiBFdmVudHNNYXA+KGZuOiBFdmVudHNNYXBbRV0sIGV2ZW50OiBFKTogdm9pZCB7XHJcbiAgICB0aGlzLmV2ZW50c0NhbGxiYWNrc1tldmVudF0gPSBudWxsO1xyXG4gIH1cclxuICBcclxuICBnZXRBZExpbmVhcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgZ2V0QWRXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEFkSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEFkRXhwYW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0QWRTa2lwcGFibGVTdGF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNraXBwYWJsZVN0YXRlO1xyXG4gIH1cclxuICBcclxuICBnZXRBZFJlbWFpbmluZ1RpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMudmlkZW9TbG90Py5kdXJhdGlvbiAtIHRoaXMudmlkZW9TbG90Py5jdXJyZW50VGltZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEFkRHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmR1cmF0aW9uO1xyXG4gIH1cclxuICBcclxuICBnZXRBZENvbXBhbmlvbnMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbiAgXHJcbiAgZ2V0QWRJY29ucygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBnZXRBZFZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudm9sdW1lO1xyXG4gIH1cclxuICBcclxuICBzZXRBZFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHZvbHVtZSA+PSAwICYmIHZvbHVtZSA8PSAxKSB7XHJcbiAgICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICB0aGlzLmNhbGxFdmVudF8oJ0FkVm9sdW1lQ2hhbmdlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0U2xvdCgpIHtcclxuICAgIHRoaXMudmlkZW9TbG90LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLnRpbWVVcGRhdGVIYW5kbGVyKTtcclxuICAgIHRoaXMudmlkZW9TbG90LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5zdG9wQWQpO1xyXG4gICAgdGhpcy52aWRlb1Nsb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMudmlkZW9SZXN1bWUpO1xyXG4gICAgdGhpcy52aWRlb1Nsb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlDaGFuZ2UpO1xyXG4gICAgdGhpcy52aWRlb1Nsb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkQ2xpY2tUaHJ1SGFuZGxlcik7XHJcbiAgICB0aGlzLnZpZGVvU2xvdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgdGhpcy5hZExvYWRlZEhhbmRsZXIpO1xyXG4gICAgdGhpcy52aWRlb1Nsb3QucGF1c2UoKTtcclxuICAgIHRoaXMudmlkZW9TbG90LnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XHJcbiAgICB0aGlzLnZpZGVvU2xvdC5sb2FkKCk7XHJcbiAgICBcclxuICAgIHRoaXMuc2xvdC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgdGhpcy5mdWxsc2NyZWVuQ2hhbmdlKVxyXG4gICAgdGhpcy5zbG90LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkYm94LW11dGV1bm11dGUnKVswXT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm11dGVDaGFuZ2UpO1xyXG4gICAgdGhpcy5zbG90LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkYm94LWNsb3NlJylbMF0/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdG9wQWQpO1xyXG4gICAgdGhpcy5zbG90LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkYm94LXNraXAnKVswXT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNraXBBZCk7XHJcbiAgICB0aGlzLnNsb3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgfSBcclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVWaWRlb1BsYXllclNpemUoKSB7XHJcbiAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gJ2Z1bGxzY3JlZW4nKSB7XHJcbiAgICAgIHRoaXMuc2xvdC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zbG90LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OicgKyB0aGlzLmhlaWdodC50b1N0cmluZygpICsgJ3B4OycgKyAnd2lkdGg6JyArIHRoaXMud2lkdGgudG9TdHJpbmcoKSArICdweDsnKTtcclxuICAgICAgdGhpcy52aWRlb1Nsb3Quc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMudmlkZW9TbG90LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtdXRlQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMudm9sdW1lID09IDApIHtcclxuICAgICAgdGhpcy52b2x1bWUgPSAxLjA7XHJcbiAgICAgIHRoaXMudmlkZW9TbG90Lm11dGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2xvdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGJveC1tdXRldW5tdXRlJylbMF0udGV4dENvbnRlbnQgPSBVTk1VVEVfVU5JQ09ERTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudm9sdW1lID0gMC4wO1xyXG4gICAgICB0aGlzLnZpZGVvU2xvdC5tdXRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2xvdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGJveC1tdXRldW5tdXRlJylbMF0udGV4dENvbnRlbnQgPSBNVVRFX1VOSUNPREU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhbGxFdmVudF8oJ0FkVm9sdW1lQ2hhbmdlJyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBwbGF5Q2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgIHRoaXMucGF1c2VBZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZXN1bWVBZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0aW1lVXBkYXRlSGFuZGxlcigpIHtcclxuICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQodGhpcy5za2lwT2Zmc2V0KSkge1xyXG4gICAgICB0aGlzLnNraXBwYWJsZVN0YXRlID0gdGhpcy5za2lwT2Zmc2V0IDwgdGhpcy52aWRlb1Nsb3QuY3VycmVudFRpbWUgKiAxMDAwO1xyXG4gICAgICBpZiAoIXRoaXMuc2tpcHBhYmxlU3RhdGUpIHtcclxuICAgICAgICB0aGlzLnNsb3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRib3gtc2tpcCcpWzBdLnRleHRDb250ZW50ID0gYHNraXAgaW4gJHtNYXRoLnJvdW5kKHRoaXMuc2tpcE9mZnNldCAvIDEwMDAgLSB0aGlzLnZpZGVvU2xvdC5jdXJyZW50VGltZSl9IHNlY2A7XHJcbiAgICAgICAgdGhpcy5zbG90LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkYm94LXNraXAnKVswXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zbG90LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkYm94LXNraXAnKVswXS50ZXh0Q29udGVudCA9IGBza2lwYDtcclxuICAgICAgICB0aGlzLnNsb3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRib3gtc2tpcCcpWzBdLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBpZiAodGhpcy5kdXJhdGlvbiAhPSB0aGlzLnZpZGVvU2xvdC5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy52aWRlb1Nsb3QuZHVyYXRpb247XHJcbiAgICAgIHRoaXMuY2FsbEV2ZW50XygnQWREdXJhdGlvbkNoYW5nZScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdmlkZW9SZXN1bWUoKSB7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZExvYWRlZEhhbmRsZXIoKSB7XHJcbiAgICB0aGlzLmNhbGxFdmVudF8oJ0FkTG9hZGVkJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZ1bGxzY3JlZW5DaGFuZ2UoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudmlkZW9TbG90Py5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy5zbG90LmNsaWVudFdpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLnZpZGVvU2xvdD8uc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLnNsb3QuY2xpZW50SGVpZ2h0LnRvU3RyaW5nKCkpIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnZpZGVvU2xvdD8uc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMudmlkZW9TbG90Py5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZENsaWNrVGhydUhhbmRsZXIoKSB7XHJcbiAgICB0aGlzLmNhbGxFdmVudF8oJ0FkQ2xpY2tUaHJ1Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRWaWRlbygpIHtcclxuICAgIGxldCB2aWRlbyA9IHRoaXMudmlkZW9zLmxlbmd0aCAmJiB0aGlzLnZpZGVvc1swXTtcclxuICAgIGxldCBkaWZmID0gTWF0aC5hYnModGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0IC0gdmlkZW8uaGVpZ2h0ICogdmlkZW8ud2lkdGgpOyBcclxuICAgIHRoaXMudmlkZW9zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChkaWZmID4gTWF0aC5hYnMoaXRlbS53aWR0aCAqIGl0ZW0uaGVpZ2h0IC0gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0KSkge1xyXG4gICAgICAgIHZpZGVvID0gaXRlbTtcclxuICAgICAgICBkaWZmID0gTWF0aC5hYnMoaXRlbS53aWR0aCAqIGl0ZW0uaGVpZ2h0IC0gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMudmlkZW9TbG90LnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW8udXJsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RXZlbnRzVG9QbGF5ZXIoKSB7XHJcbiAgICB0aGlzLnZpZGVvU2xvdC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy50aW1lVXBkYXRlSGFuZGxlcik7XHJcbiAgICB0aGlzLnZpZGVvU2xvdC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMuc3RvcEFkKTtcclxuICAgIHRoaXMudmlkZW9TbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLnZpZGVvUmVzdW1lKTtcclxuICAgIHRoaXMudmlkZW9TbG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wbGF5Q2hhbmdlKTtcclxuICAgIHRoaXMudmlkZW9TbG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZENsaWNrVGhydUhhbmRsZXIpO1xyXG4gICAgdGhpcy52aWRlb1Nsb3QuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIHRoaXMuYWRMb2FkZWRIYW5kbGVyKTtcclxuICAgIFxyXG4gICAgdGhpcy5zbG90LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLmZ1bGxzY3JlZW5DaGFuZ2UpXHJcbiAgICB0aGlzLnNsb3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRib3gtbXV0ZXVubXV0ZScpWzBdPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubXV0ZUNoYW5nZSk7XHJcbiAgICB0aGlzLnNsb3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRib3gtY2xvc2UnKVswXT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN0b3BBZCk7XHJcbiAgICB0aGlzLnNsb3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRib3gtc2tpcCcpWzBdPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2tpcEFkKTtcclxuIH1cclxufSIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVnBhaWQgfSBmcm9tICcuL3ZwYWlkJztcclxuXHJcbndpbmRvdy5nZXRWUEFJREFkID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgVnBhaWQoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
