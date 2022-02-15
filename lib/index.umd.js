(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rem = {}));
})(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var main$6 = /*#__PURE__*/_createClass(function main() {
    _classCallCheck(this, main);

    console.log('cookies.main');
  });

  var main$5 = /*#__PURE__*/_createClass(function main() {
    _classCallCheck(this, main);

    console.log('indexedDB.main');
  });

  var main$4 = /*#__PURE__*/_createClass(function main() {
    _classCallCheck(this, main);

    main.id = new Date().getTime();
    console.log('localStorage.main', main.id);
  });

  var main$3 = /*#__PURE__*/_createClass(function main() {
    _classCallCheck(this, main);

    console.log('redux.main');
  });

  var main$2 = /*#__PURE__*/_createClass(function main() {
    _classCallCheck(this, main);

    console.log('sessionStorage.main');
  });

  var main$1 = /*#__PURE__*/_createClass(function main() {
    _classCallCheck(this, main);

    console.log('vuex.main');
  });

  var main = /*#__PURE__*/_createClass(function main() {
    _classCallCheck(this, main);

    console.log('webSql.main');
  });

  var yun_db = /*#__PURE__*/_createClass(function yun_db() {
    _classCallCheck(this, yun_db);
  });

  _defineProperty(yun_db, "cookies", main$6);

  _defineProperty(yun_db, "indexedDB", main$5);

  _defineProperty(yun_db, "localStorage", main$4);

  _defineProperty(yun_db, "redux", main$3);

  _defineProperty(yun_db, "sessionStorage", main$2);

  _defineProperty(yun_db, "vuex", main$1);

  _defineProperty(yun_db, "webSql", main);

  exports.yun_Cookies = main$6;
  exports.yun_IDB = main$5;
  exports.yun_LStorage = main$4;
  exports.yun_Redux = main$3;
  exports.yun_SStorage = main$2;
  exports.yun_Vuex = main$1;
  exports.yun_WebSql = main;
  exports.yun_db = yun_db;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
