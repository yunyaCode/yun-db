function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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

var main$4 = /*#__PURE__*/_createClass(function main() {
  _classCallCheck(this, main);

  console.log('cookies.main');
});

var yun_Cookies = new main$4();

var main$3 = /*#__PURE__*/_createClass(function main() {
  _classCallCheck(this, main);

  console.log('indexedDB.main');
});

var getId = function getId(key) {
  return "".concat(key, "_").concat(new Date().getTime());
};

var isBoolean = function isBoolean(val) {
  return typeof val === 'boolean';
};
var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var LocalStorage = window.localStorage;

var main$2 = /*#__PURE__*/function () {
  function main() {
    _classCallCheck(this, main);

    this.id = getId('localStorage');
    console.log('localStorage.main', this.id);
  }

  _createClass(main, [{
    key: "set",
    value: function set(key, val, params) {
      if (isObject(val)) {
        val = JSON.stringify(val);
      } // 有效期


      if ("time" in params) {
        setTimeout(function () {
          LocalStorage.removeItem(key);
        }, params.time);
      } // 只读属性


      if (isBoolean(params.readonly) && params.readonly) {
        if (LocalStorage.hasOwnProperty(key)) throw new Error("".concat(key, " \u4E0D\u80FD\u4FEE\u6539"));
      }

      LocalStorage.setItem(key, val);
      return true;
    }
  }, {
    key: "get",
    value: function get(key) {
      var val = LocalStorage.getItem(key);
      return JSON.parse(val);
    }
  }]);

  return main;
}();

var yun_LStorage = new main$2();

var main$1 = /*#__PURE__*/_createClass(function main() {
  _classCallCheck(this, main);

  console.log('sessionStorage.main');
});

var main = /*#__PURE__*/_createClass(function main() {
  _classCallCheck(this, main);

  console.log('webSql.main');
});

var yun_db = /*#__PURE__*/_createClass( // static redux = yun_Redux;
// static vuex = yun_Vuex;
function yun_db() {
  _classCallCheck(this, yun_db);
});

_defineProperty(yun_db, "cookies", yun_Cookies);

_defineProperty(yun_db, "indexedDB", main$3);

_defineProperty(yun_db, "localStorage", yun_LStorage);

_defineProperty(yun_db, "sessionStorage", main$1);

_defineProperty(yun_db, "webSql", main);

if (window) {
  window['yun_db'] = yun_db;
}

export { yun_Cookies, main$3 as yun_IDB, yun_LStorage, main$1 as yun_SStorage, main as yun_WebSql, yun_db };
