var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value7) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value7 }) : obj[key] = value7;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
import * as _vue from "vue";
import { isVNode, Fragment, Comment, Text, defineComponent, reactive, getCurrentInstance, onMounted, onUpdated, onUnmounted, watch, inject, computed, createVNode, provide, cloneVNode, ref, nextTick, watchEffect, onBeforeUnmount, withDirectives, createTextVNode, onBeforeUpdate, Transition as Transition$1, vShow, Teleport, h as h$1, openBlock, createElementBlock, toDisplayString, createElementVNode, normalizeStyle, resolveComponent, renderSlot, createCommentVNode, createBlock, withCtx, renderList, mergeProps, vModelSelect, resolveDynamicComponent, withModifiers, useCssVars, defineCustomElement } from "vue";
function _defineProperty$e(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value7,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value7;
  }
  return obj;
}
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$e(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function e(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function t(t2, n2, r2) {
  return n2 && e(t2.prototype, n2), r2 && e(t2, r2), t2;
}
function n() {
  return (n = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function r(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
}
function i(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, i2 = {}, o2 = Object.keys(e2);
  for (r2 = 0; r2 < o2.length; r2++)
    t2.indexOf(n2 = o2[r2]) >= 0 || (i2[n2] = e2[n2]);
  return i2;
}
function o(e2) {
  return ((t2 = e2) != null && typeof t2 == "object" && Array.isArray(t2) === false) == 1 && Object.prototype.toString.call(e2) === "[object Object]";
  var t2;
}
var u = Object.prototype, a = u.toString, f = u.hasOwnProperty, c = /^\s*function (\w+)/;
function l(e2) {
  var t2, n2 = (t2 = e2 == null ? void 0 : e2.type) !== null && t2 !== void 0 ? t2 : e2;
  if (n2) {
    var r2 = n2.toString().match(c);
    return r2 ? r2[1] : "";
  }
  return "";
}
var s = function(e2) {
  var t2, n2;
  return o(e2) !== false && typeof (t2 = e2.constructor) == "function" && o(n2 = t2.prototype) !== false && n2.hasOwnProperty("isPrototypeOf") !== false;
}, v = function(e2) {
  return e2;
}, y = v;
var d = function(e2, t2) {
  return f.call(e2, t2);
}, h = Number.isInteger || function(e2) {
  return typeof e2 == "number" && isFinite(e2) && Math.floor(e2) === e2;
}, b = Array.isArray || function(e2) {
  return a.call(e2) === "[object Array]";
}, O = function(e2) {
  return a.call(e2) === "[object Function]";
}, g = function(e2) {
  return s(e2) && d(e2, "_vueTypes_name");
}, m = function(e2) {
  return s(e2) && (d(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t2) {
    return d(e2, t2);
  }));
};
function j(e2, t2) {
  return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
}
function _(e2, t2, n2) {
  var r2;
  n2 === void 0 && (n2 = false);
  var i2 = true, o2 = "";
  r2 = s(e2) ? e2 : { type: e2 };
  var u2 = g(r2) ? r2._vueTypes_name + " - " : "";
  if (m(r2) && r2.type !== null) {
    if (r2.type === void 0 || r2.type === true)
      return i2;
    if (!r2.required && t2 === void 0)
      return i2;
    b(r2.type) ? (i2 = r2.type.some(function(e3) {
      return _(e3, t2, true) === true;
    }), o2 = r2.type.map(function(e3) {
      return l(e3);
    }).join(" or ")) : i2 = (o2 = l(r2)) === "Array" ? b(t2) : o2 === "Object" ? s(t2) : o2 === "String" || o2 === "Number" || o2 === "Boolean" || o2 === "Function" ? function(e3) {
      if (e3 == null)
        return "";
      var t3 = e3.constructor.toString().match(c);
      return t3 ? t3[1] : "";
    }(t2) === o2 : t2 instanceof r2.type;
  }
  if (!i2) {
    var a2 = u2 + 'value "' + t2 + '" should be of type "' + o2 + '"';
    return n2 === false ? (y(a2), false) : a2;
  }
  if (d(r2, "validator") && O(r2.validator)) {
    var f2 = y, v2 = [];
    if (y = function(e3) {
      v2.push(e3);
    }, i2 = r2.validator(t2), y = f2, !i2) {
      var p = (v2.length > 1 ? "* " : "") + v2.join("\n* ");
      return v2.length = 0, n2 === false ? (y(p), i2) : p;
    }
  }
  return i2;
}
function T(e2, t2) {
  var n2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get: function() {
    return this.required = true, this;
  } }, def: { value: function(e3) {
    return e3 !== void 0 || this.default ? O(e3) || _(this, e3, true) === true ? (this.default = b(e3) ? function() {
      return [].concat(e3);
    } : s(e3) ? function() {
      return Object.assign({}, e3);
    } : e3, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e3 + '"'), this) : this;
  } } }), r2 = n2.validator;
  return O(r2) && (n2.validator = j(r2, n2)), n2;
}
function w(e2, t2) {
  var n2 = T(e2, t2);
  return Object.defineProperty(n2, "validate", { value: function(e3) {
    return O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e3, this), this;
  } });
}
function k(e2, t2, n2) {
  var r2, o2, u2 = (r2 = t2, o2 = {}, Object.getOwnPropertyNames(r2).forEach(function(e3) {
    o2[e3] = Object.getOwnPropertyDescriptor(r2, e3);
  }), Object.defineProperties({}, o2));
  if (u2._vueTypes_name = e2, !s(n2))
    return u2;
  var a2, f2, c2 = n2.validator, l2 = i(n2, ["validator"]);
  if (O(c2)) {
    var v2 = u2.validator;
    v2 && (v2 = (f2 = (a2 = v2).__original) !== null && f2 !== void 0 ? f2 : a2), u2.validator = j(v2 ? function(e3) {
      return v2.call(this, e3) && c2.call(this, e3);
    } : c2, u2);
  }
  return Object.assign(u2, l2);
}
function P(e2) {
  return e2.replace(/^(?!\s*$)/gm, "  ");
}
var x = function() {
  return w("any", {});
}, A = function() {
  return w("function", { type: Function });
}, E = function() {
  return w("boolean", { type: Boolean });
}, N = function() {
  return w("string", { type: String });
}, q = function() {
  return w("number", { type: Number });
}, S = function() {
  return w("array", { type: Array });
}, V = function() {
  return w("object", { type: Object });
}, F = function() {
  return T("integer", { type: Number, validator: function(e2) {
    return h(e2);
  } });
}, D = function() {
  return T("symbol", { validator: function(e2) {
    return typeof e2 == "symbol";
  } });
};
function L(e2, t2) {
  if (t2 === void 0 && (t2 = "custom validation failed"), typeof e2 != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(e2.name || "<<anonymous function>>", { validator: function(n2) {
    var r2 = e2(n2);
    return r2 || y(this._vueTypes_name + " - " + t2), r2;
  } });
}
function Y(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t2 = 'oneOf - value should be one of "' + e2.join('", "') + '".', n2 = e2.reduce(function(e3, t3) {
    if (t3 != null) {
      var n3 = t3.constructor;
      e3.indexOf(n3) === -1 && e3.push(n3);
    }
    return e3;
  }, []);
  return T("oneOf", { type: n2.length > 0 ? n2 : void 0, validator: function(n3) {
    var r2 = e2.indexOf(n3) !== -1;
    return r2 || y(t2), r2;
  } });
}
function B(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t2 = false, n2 = [], r2 = 0; r2 < e2.length; r2 += 1) {
    var i2 = e2[r2];
    if (m(i2)) {
      if (g(i2) && i2._vueTypes_name === "oneOf") {
        n2 = n2.concat(i2.type);
        continue;
      }
      if (O(i2.validator) && (t2 = true), i2.type !== true && i2.type) {
        n2 = n2.concat(i2.type);
        continue;
      }
    }
    n2.push(i2);
  }
  return n2 = n2.filter(function(e3, t3) {
    return n2.indexOf(e3) === t3;
  }), T("oneOfType", t2 ? { type: n2, validator: function(t3) {
    var n3 = [], r3 = e2.some(function(e3) {
      var r4 = _(g(e3) && e3._vueTypes_name === "oneOf" ? e3.type || null : e3, t3, true);
      return typeof r4 == "string" && n3.push(r4), r4 === true;
    });
    return r3 || y("oneOfType - provided value does not match any of the " + n3.length + " passed-in validators:\n" + P(n3.join("\n"))), r3;
  } } : { type: n2 });
}
function I(e2) {
  return T("arrayOf", { type: Array, validator: function(t2) {
    var n2, r2 = t2.every(function(t3) {
      return (n2 = _(e2, t3, true)) === true;
    });
    return r2 || y("arrayOf - value validation error:\n" + P(n2)), r2;
  } });
}
function J(e2) {
  return T("instanceOf", { type: e2 });
}
function M(e2) {
  return T("objectOf", { type: Object, validator: function(t2) {
    var n2, r2 = Object.keys(t2).every(function(r3) {
      return (n2 = _(e2, t2[r3], true)) === true;
    });
    return r2 || y("objectOf - value validation error:\n" + P(n2)), r2;
  } });
}
function R(e2) {
  var t2 = Object.keys(e2), n2 = t2.filter(function(t3) {
    var n3;
    return !!((n3 = e2[t3]) === null || n3 === void 0 ? void 0 : n3.required);
  }), r2 = T("shape", { type: Object, validator: function(r3) {
    var i2 = this;
    if (!s(r3))
      return false;
    var o2 = Object.keys(r3);
    if (n2.length > 0 && n2.some(function(e3) {
      return o2.indexOf(e3) === -1;
    })) {
      var u2 = n2.filter(function(e3) {
        return o2.indexOf(e3) === -1;
      });
      return y(u2.length === 1 ? 'shape - required property "' + u2[0] + '" is not defined.' : 'shape - required properties "' + u2.join('", "') + '" are not defined.'), false;
    }
    return o2.every(function(n3) {
      if (t2.indexOf(n3) === -1)
        return i2._vueTypes_isLoose === true || (y('shape - shape definition does not include a "' + n3 + '" property. Allowed keys: "' + t2.join('", "') + '".'), false);
      var o3 = _(e2[n3], r3[n3], true);
      return typeof o3 == "string" && y('shape - "' + n3 + '" property validation error:\n ' + P(o3)), o3 === true;
    });
  } });
  return Object.defineProperty(r2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(r2, "loose", { get: function() {
    return this._vueTypes_isLoose = true, this;
  } }), r2;
}
var $ = function() {
  function e2() {
  }
  return e2.extend = function(e3) {
    var t2 = this;
    if (b(e3))
      return e3.forEach(function(e4) {
        return t2.extend(e4);
      }), this;
    var n2 = e3.name, r2 = e3.validate, o2 = r2 !== void 0 && r2, u2 = e3.getter, a2 = u2 !== void 0 && u2, f2 = i(e3, ["name", "validate", "getter"]);
    if (d(this, n2))
      throw new TypeError('[VueTypes error]: Type "' + n2 + '" already defined');
    var c2, l2 = f2.type;
    return g(l2) ? (delete f2.type, Object.defineProperty(this, n2, a2 ? { get: function() {
      return k(n2, l2, f2);
    } } : { value: function() {
      var e4, t3 = k(n2, l2, f2);
      return t3.validator && (t3.validator = (e4 = t3.validator).bind.apply(e4, [t3].concat([].slice.call(arguments)))), t3;
    } })) : (c2 = a2 ? { get: function() {
      var e4 = Object.assign({}, f2);
      return o2 ? w(n2, e4) : T(n2, e4);
    }, enumerable: true } : { value: function() {
      var e4, t3, r3 = Object.assign({}, f2);
      return e4 = o2 ? w(n2, r3) : T(n2, r3), r3.validator && (e4.validator = (t3 = r3.validator).bind.apply(t3, [e4].concat([].slice.call(arguments)))), e4;
    }, enumerable: true }, Object.defineProperty(this, n2, c2));
  }, t(e2, null, [{ key: "any", get: function() {
    return x();
  } }, { key: "func", get: function() {
    return A().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return E().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return N().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return q().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return S().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return V().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return F().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return D();
  } }]), e2;
}();
function z(e2) {
  var i2;
  return e2 === void 0 && (e2 = { func: function() {
  }, bool: true, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (i2 = function(i3) {
    function o2() {
      return i3.apply(this, arguments) || this;
    }
    return r(o2, i3), t(o2, null, [{ key: "sensibleDefaults", get: function() {
      return n({}, this.defaults);
    }, set: function(t2) {
      this.defaults = t2 !== false ? n({}, t2 !== true ? t2 : e2) : {};
    } }]), o2;
  }($)).defaults = n({}, e2), i2;
}
$.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = B, $.arrayOf = I, $.objectOf = M, $.shape = R, $.utils = { validate: function(e2, t2) {
  return _(t2, e2, true) === true;
}, toType: function(e2, t2, n2) {
  return n2 === void 0 && (n2 = false), n2 ? w(e2, t2) : T(e2, t2);
} };
(function(e2) {
  function t2() {
    return e2.apply(this, arguments) || this;
  }
  return r(t2, e2), t2;
})(z());
var PropTypes = z({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VNodeChild",
  getter: true,
  type: null
}]);
function withUndefined(type) {
  type.default = void 0;
  return type;
}
var PropsTypes = PropTypes;
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
var isFunction$2 = function isFunction(val) {
  return typeof val === "function";
};
var isArray$3 = Array.isArray;
var isString$1 = function isString(val) {
  return typeof val === "string";
};
var isObject$2 = function isObject(val) {
  return val !== null && _typeof$1(val) === "object";
};
var onRE = /^on[^a-z]/;
var isOn = function isOn2(key) {
  return onRE.test(key);
};
var cacheStringFunction = function cacheStringFunction2(fn) {
  var cache = Object.create(null);
  return function(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction(function(str) {
  return str.replace(camelizeRE, function(_2, c2) {
    return c2 ? c2.toUpperCase() : "";
  });
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(function(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
var hasOwnProperty$b = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn2(val, key) {
  return hasOwnProperty$b.call(val, key);
};
function resolvePropValue(options, props2, key, value7) {
  var opt = options[key];
  if (opt != null) {
    var hasDefault = hasOwn(opt, "default");
    if (hasDefault && value7 === void 0) {
      var defaultValue = opt.default;
      value7 = opt.type !== Function && isFunction$2(defaultValue) ? defaultValue() : defaultValue;
    }
    if (opt.type === Boolean) {
      if (!hasOwn(props2, key) && !hasDefault) {
        value7 = false;
      } else if (value7 === "") {
        value7 = true;
      }
    }
  }
  return value7;
}
function classNames() {
  var classes2 = [];
  for (var i2 = 0; i2 < arguments.length; i2++) {
    var value7 = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
    if (!value7)
      continue;
    if (isString$1(value7)) {
      classes2.push(value7);
    } else if (isArray$3(value7)) {
      for (var _i = 0; _i < value7.length; _i++) {
        var inner = classNames(value7[_i]);
        if (inner) {
          classes2.push(inner);
        }
      }
    } else if (isObject$2(value7)) {
      for (var name in value7) {
        if (value7[name]) {
          classes2.push(name);
        }
      }
    }
  }
  return classes2.join(" ");
}
function omit$2(obj, fields) {
  var shallowCopy = Object.assign({}, obj);
  for (var i2 = 0; i2 < fields.length; i2 += 1) {
    var key = fields[i2];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index2 = getIndex(this.__entries__, key);
      var entry = this.__entries__[index2];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key, value7) {
      var index2 = getIndex(this.__entries__, key);
      if (~index2) {
        this.__entries__[index2][1] = value7;
      } else {
        this.__entries__.push([key, value7]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries = this.__entries__;
      var index2 = getIndex(entries, key);
      if (~index2) {
        entries.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target, props2) {
  for (var _i = 0, _a = Object.keys(props2); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props2[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value7) {
  return parseFloat(value7) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value7 = styles["border-" + position + "-width"];
    return size + toFloat(value7);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value7 = styles["padding-" + position];
    paddings[position] = toFloat(value7);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x2 = _a.x, y2 = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x: x2,
    y: y2,
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: height + y2,
    left: x2
  });
  return rect;
}
function createRectInit(x2, y2, width, height) {
  return { x: x2, y: y2, width, height };
}
var ResizeObservation = function() {
  function ResizeObservation2(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target, contentRect });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
var ResizeObserver$1 = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver$1.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver$1;
}();
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit$2(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _unsupportedIterableToArray$2(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2(o2, minLen);
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$2(arr, i2) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i2) || _unsupportedIterableToArray$2(arr, i2) || _nonIterableRest$2();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var nativeObjectToString$1 = objectProto$d.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value7) {
  var isOwn = hasOwnProperty$a.call(value7, symToStringTag$1), tag = value7[symToStringTag$1];
  try {
    value7[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value7);
  if (unmasked) {
    if (isOwn) {
      value7[symToStringTag$1] = tag;
    } else {
      delete value7[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$c = Object.prototype;
var nativeObjectToString = objectProto$c.toString;
function objectToString(value7) {
  return nativeObjectToString.call(value7);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value7) {
  if (value7 == null) {
    return value7 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value7) ? getRawTag(value7) : objectToString(value7);
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function isObjectLike(value7) {
  return value7 != null && typeof value7 == "object";
}
var objectTag$3 = "[object Object]";
var funcProto$2 = Function.prototype, objectProto$b = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var objectCtorString = funcToString$2.call(Object);
function isPlainObject(value7) {
  if (!isObjectLike(value7) || baseGetTag(value7) != objectTag$3) {
    return false;
  }
  var proto2 = getPrototype$1(value7);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty$9.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
var isValid$3 = function isValid(value7) {
  return value7 !== void 0 && value7 !== null && value7 !== "";
};
var isValid$4 = isValid$3;
var splitAttrs = function splitAttrs2(attrs) {
  var allAttrs = Object.keys(attrs);
  var eventAttrs = {};
  var onEvents = {};
  var extraAttrs = {};
  for (var i2 = 0, l2 = allAttrs.length; i2 < l2; i2++) {
    var key = allAttrs[i2];
    if (isOn(key)) {
      eventAttrs[key[2].toLowerCase() + key.slice(3)] = attrs[key];
      onEvents[key] = attrs[key];
    } else {
      extraAttrs[key] = attrs[key];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
var parseStyleText = function parseStyleText2() {
  var cssText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var camel = arguments.length > 1 ? arguments[1] : void 0;
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        var k2 = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k2] = tmp[1].trim();
      }
    }
  });
  return res;
};
var hasProp = function hasProp2(instance, prop) {
  return prop in getOptionProps(instance);
};
var flattenChildren = function flattenChildren2() {
  var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var temp = Array.isArray(children) ? children : [children];
  var res = [];
  temp.forEach(function(child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(flattenChildren2(child, filterEmpty2)));
    } else if (child && child.type === Fragment) {
      res.push.apply(res, _toConsumableArray(flattenChildren2(child.children, filterEmpty2)));
    } else if (child && isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid$4(child)) {
      res.push(child);
    }
  });
  return res;
};
var getSlot = function getSlot2(self2) {
  var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (isVNode(self2)) {
    if (self2.type === Fragment) {
      return name === "default" ? flattenChildren(self2.children) : [];
    } else if (self2.children && self2.children[name]) {
      return flattenChildren(self2.children[name](options));
    } else {
      return [];
    }
  } else {
    var res = self2.$slots[name] && self2.$slots[name](options);
    return flattenChildren(res);
  }
};
var findDOMNode = function findDOMNode2(instance) {
  var _a;
  var node = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
var getOptionProps = function getOptionProps2(instance) {
  var res = {};
  if (instance.$ && instance.$.vnode) {
    var props2 = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach(function(k2) {
      var v2 = instance.$props[k2];
      var hyphenateKey = hyphenate(k2);
      if (v2 !== void 0 || hyphenateKey in props2) {
        res[k2] = v2;
      }
    });
  } else if (isVNode(instance) && _typeof$1(instance.type) === "object") {
    var originProps = instance.props || {};
    var _props = {};
    Object.keys(originProps).forEach(function(key) {
      _props[camelize(key)] = originProps[key];
    });
    var options = instance.type.props || {};
    Object.keys(options).forEach(function(k2) {
      var v2 = resolvePropValue(options, _props, k2, _props[k2]);
      if (v2 !== void 0 || k2 in _props) {
        res[k2] = v2;
      }
    });
  }
  return res;
};
var getComponent = function getComponent2(instance) {
  var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var com = void 0;
  if (instance.$) {
    var temp = instance[prop];
    if (temp !== void 0) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode(instance)) {
    var _temp = instance.props && instance.props[prop];
    if (_temp !== void 0 && instance.props !== null) {
      return typeof _temp === "function" && execute ? _temp(options) : _temp;
    } else if (instance.type === Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? void 0 : com;
  }
  return com;
};
function getEvents() {
  var ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var props2 = {};
  if (ele.$) {
    props2 = _extends(_extends({}, props2), ele.$attrs);
  } else {
    props2 = _extends(_extends({}, props2), ele.props);
  }
  return splitAttrs(props2)[on ? "onEvents" : "events"];
}
function getStyle(ele, camel) {
  var props2 = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  var style = props2.style || {};
  if (typeof style === "string") {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    var res = {};
    Object.keys(style).forEach(function(k2) {
      return res[camelize(k2)] = style[k2];
    });
    return res;
  }
  return style;
}
function isEmptyElement(c2) {
  return c2 && (c2.type === Comment || c2.type === Fragment && c2.children.length === 0 || c2.type === Text && c2.children.trim() === "");
}
function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var res = [];
  children.forEach(function(child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(child));
    } else if (child.type === Fragment) {
      res.push.apply(res, _toConsumableArray(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter(function(c2) {
    return !isEmptyElement(c2);
  });
}
var initDefaultProps$2 = function initDefaultProps(propTypes, defaultProps) {
  Object.keys(defaultProps).forEach(function(k2) {
    if (propTypes[k2]) {
      propTypes[k2].def && (propTypes[k2] = propTypes[k2].def(defaultProps[k2]));
    } else {
      throw new Error("not have ".concat(k2, " prop"));
    }
  });
  return propTypes;
};
function isValidElement(element) {
  return element && element.__v_isVNode && _typeof$1(element.type) !== "symbol";
}
function getPropsSlot(slots, props2) {
  var prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var _a, _b;
  return (_a = props2[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}
var hasProp$1 = hasProp;
var ResizeObserver = defineComponent({
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var state = reactive({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    var currentElement = null;
    var resizeObserver = null;
    var destroyObserver = function destroyObserver2() {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    var onResize = function onResize2(entries) {
      var onResize3 = props2.onResize;
      var target = entries[0].target;
      var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
      var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);
      if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        _extends(state, size);
        if (onResize3) {
          Promise.resolve().then(function() {
            onResize3(_extends(_extends({}, size), {
              offsetWidth,
              offsetHeight
            }), target);
          });
        }
      }
    };
    var instance = getCurrentInstance();
    var registerObserver = function registerObserver2() {
      var disabled = props2.disabled;
      if (disabled) {
        destroyObserver();
        return;
      }
      var element = findDOMNode(instance);
      var elementChanged = element !== currentElement;
      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }
      if (!resizeObserver && element) {
        resizeObserver = new index(onResize);
        resizeObserver.observe(element);
      }
    };
    onMounted(function() {
      registerObserver();
    });
    onUpdated(function() {
      registerObserver();
    });
    onUnmounted(function() {
      destroyObserver();
    });
    watch(function() {
      return props2.disabled;
    }, function() {
      registerObserver();
    }, {
      flush: "post"
    });
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
    };
  }
});
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
var withInstall = function withInstall2(comp) {
  var c2 = comp;
  c2.install = function(app) {
    app.component(c2.displayName || c2.name, comp);
  };
  return comp;
};
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function get2() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e2) {
}
var supportsPassive$1 = supportsPassive;
function addEventListenerWrap(target, eventType, cb, option) {
  if (target.addEventListener) {
    var opt = option;
    if (opt === void 0 && supportsPassive$1 && (eventType === "touchstart" || eventType === "touchmove" || eventType === "wheel")) {
      opt = {
        passive: false
      };
    }
    target.addEventListener(eventType, cb, opt);
  }
  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    }
  };
}
var enUS$2 = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var enUs = {
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
var locale$2 = {
  placeholder: "Select time"
};
var enUS$1 = locale$2;
var locale$1 = {
  lang: _extends({
    placeholder: "Select date",
    rangePlaceholder: ["Start date", "End date"]
  }, enUs),
  timePickerLocale: _extends({}, enUS$1)
};
var enUS = locale$1;
var typeTemplate = "${label} is not a valid ${type}";
var defaultLocale = {
  locale: "en",
  Pagination: enUS$2,
  DatePicker: enUS,
  TimePicker: enUS$1,
  Calendar: enUS,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
var LocaleReceiver = defineComponent({
  name: "LocaleReceiver",
  props: {
    componentName: PropsTypes.string,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function setup2(props2, _ref) {
    var slots = _ref.slots;
    var localeData2 = inject("localeData", {});
    var locale2 = computed(function() {
      var _props$componentName = props2.componentName, componentName = _props$componentName === void 0 ? "global" : _props$componentName, defaultLocale$1 = props2.defaultLocale;
      var locale3 = defaultLocale$1 || defaultLocale[componentName || "global"];
      var antLocale = localeData2.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    var localeCode = computed(function() {
      var antLocale = localeData2.antLocale;
      var localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return defaultLocale.locale;
      }
      return localeCode2;
    });
    return function() {
      var children = props2.children || slots.default;
      var antLocale = localeData2.antLocale;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
var Empty$2 = function Empty() {
  var _inject = inject("configProvider", defaultConfigProvider), getPrefixCls2 = _inject.getPrefixCls;
  var prefixCls = getPrefixCls2("empty-img-default");
  return createVNode("svg", {
    "class": prefixCls,
    "width": "184",
    "height": "152",
    "viewBox": "0 0 184 152"
  }, [createVNode("g", {
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("g", {
    "transform": "translate(24 31.67)"
  }, [createVNode("ellipse", {
    "class": "".concat(prefixCls, "-ellipse"),
    "cx": "67.797",
    "cy": "106.89",
    "rx": "67.797",
    "ry": "12.668"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-1"),
    "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-2"),
    "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    "transform": "translate(13.56)"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-3"),
    "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-4"),
    "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), createVNode("path", {
    "class": "".concat(prefixCls, "-path-5"),
    "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), createVNode("g", {
    "class": "".concat(prefixCls, "-g"),
    "transform": "translate(149.65 15.383)"
  }, [createVNode("ellipse", {
    "cx": "20.654",
    "cy": "3.167",
    "rx": "2.849",
    "ry": "2.815"
  }, null), createVNode("path", {
    "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
var DefaultEmptyImg = Empty$2;
var Simple = function Simple2() {
  var _inject = inject("configProvider", defaultConfigProvider), getPrefixCls2 = _inject.getPrefixCls;
  var prefixCls = getPrefixCls2("empty-img-simple");
  return createVNode("svg", {
    "class": prefixCls,
    "width": "64",
    "height": "41",
    "viewBox": "0 0 64 41"
  }, [createVNode("g", {
    "transform": "translate(0 1)",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("ellipse", {
    "class": "".concat(prefixCls, "-ellipse"),
    "fill": "#F5F5F5",
    "cx": "32",
    "cy": "33",
    "rx": "32",
    "ry": "7"
  }, null), createVNode("g", {
    "class": "".concat(prefixCls, "-g"),
    "fill-rule": "nonzero",
    "stroke": "#D9D9D9"
  }, [createVNode("path", {
    "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), createVNode("path", {
    "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    "fill": "#FAFAFA",
    "class": "".concat(prefixCls, "-path")
  }, null)])])]);
};
Simple.PRESENTED_IMAGE_SIMPLE = true;
var SimpleEmptyImg = Simple;
var __rest$f = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var defaultEmptyImg = createVNode(DefaultEmptyImg, null, null);
var simpleEmptyImg = createVNode(SimpleEmptyImg, null, null);
var Empty2 = function Empty3(props2, _ref) {
  var _ref$slots = _ref.slots, slots = _ref$slots === void 0 ? {} : _ref$slots, attrs = _ref.attrs;
  var _a;
  var configProvider = inject("configProvider", defaultConfigProvider);
  var getPrefixCls2 = configProvider.getPrefixCls, direction = configProvider.direction;
  var _b = _extends(_extends({}, props2), attrs), customizePrefixCls = _b.prefixCls, _b$image = _b.image, image = _b$image === void 0 ? defaultEmptyImg : _b$image, _b$description = _b.description, description = _b$description === void 0 ? ((_a = slots.description) === null || _a === void 0 ? void 0 : _a.call(slots)) || void 0 : _b$description, imageStyle = _b.imageStyle, _b$class = _b.class, className = _b$class === void 0 ? "" : _b$class, restProps = __rest$f(_b, ["prefixCls", "image", "description", "imageStyle", "class"]);
  return createVNode(LocaleReceiver, {
    "componentName": "Empty",
    "children": function children(locale2) {
      var _classNames;
      var prefixCls = getPrefixCls2("empty", customizePrefixCls);
      var des = typeof description !== "undefined" ? description : locale2.description;
      var alt = typeof des === "string" ? des : "empty";
      var imageNode = null;
      if (typeof image === "string") {
        imageNode = createVNode("img", {
          "alt": alt,
          "src": image
        }, null);
      } else {
        imageNode = image;
      }
      return createVNode("div", _objectSpread2$1({
        "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty$e(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames))
      }, restProps), [createVNode("div", {
        "class": "".concat(prefixCls, "-image"),
        "style": imageStyle
      }, [imageNode]), des && createVNode("p", {
        "class": "".concat(prefixCls, "-description")
      }, [des]), slots.default && createVNode("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [filterEmpty(slots.default())])]);
    }
  }, null);
};
Empty2.displayName = "AEmpty";
Empty2.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty2.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
Empty2.inheritAttrs = false;
Empty2.props = {
  prefixCls: PropsTypes.string,
  image: PropsTypes.any,
  description: PropsTypes.any,
  imageStyle: PropsTypes.object
};
var Empty$1 = withInstall(Empty2);
var RenderEmpty = function RenderEmpty2(props2) {
  var configProvider = inject("configProvider", defaultConfigProvider);
  var renderHtml = function renderHtml2(componentName) {
    var getPrefixCls2 = configProvider.getPrefixCls;
    var prefix = getPrefixCls2("empty");
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": "".concat(prefix, "-small")
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props2.componentName);
};
function renderEmpty(componentName) {
  return createVNode(RenderEmpty, {
    "componentName": componentName
  }, null);
}
//! moment.js
//! version : 2.29.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var hookCallback;
function hooks() {
  return hookCallback.apply(null, arguments);
}
function setHookCallback(callback) {
  hookCallback = callback;
}
function isArray$2(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
}
function isObject$1(input) {
  return input != null && Object.prototype.toString.call(input) === "[object Object]";
}
function hasOwnProp(a2, b2) {
  return Object.prototype.hasOwnProperty.call(a2, b2);
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k2;
    for (k2 in obj) {
      if (hasOwnProp(obj, k2)) {
        return false;
      }
    }
    return true;
  }
}
function isUndefined(input) {
  return input === void 0;
}
function isNumber(input) {
  return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
}
function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
}
function map(arr, fn) {
  var res = [], i2;
  for (i2 = 0; i2 < arr.length; ++i2) {
    res.push(fn(arr[i2], i2));
  }
  return res;
}
function extend(a2, b2) {
  for (var i2 in b2) {
    if (hasOwnProp(b2, i2)) {
      a2[i2] = b2[i2];
    }
  }
  if (hasOwnProp(b2, "toString")) {
    a2.toString = b2.toString;
  }
  if (hasOwnProp(b2, "valueOf")) {
    a2.valueOf = b2.valueOf;
  }
  return a2;
}
function createUTC(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, true).utc();
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(m2) {
  if (m2._pf == null) {
    m2._pf = defaultParsingFlags();
  }
  return m2._pf;
}
var some;
if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function(fun) {
    var t2 = Object(this), len = t2.length >>> 0, i2;
    for (i2 = 0; i2 < len; i2++) {
      if (i2 in t2 && fun.call(this, t2[i2], i2, t2)) {
        return true;
      }
    }
    return false;
  };
}
function isValid2(m2) {
  if (m2._isValid == null) {
    var flags = getParsingFlags(m2), parsedParts = some.call(flags.parsedDateParts, function(i2) {
      return i2 != null;
    }), isNowValid = !isNaN(m2._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (m2._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
    if (Object.isFrozen == null || !Object.isFrozen(m2)) {
      m2._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }
  return m2._isValid;
}
function createInvalid(flags) {
  var m2 = createUTC(NaN);
  if (flags != null) {
    extend(getParsingFlags(m2), flags);
  } else {
    getParsingFlags(m2).userInvalidated = true;
  }
  return m2;
}
var momentProperties = hooks.momentProperties = [], updateInProgress = false;
function copyConfig(to2, from2) {
  var i2, prop, val;
  if (!isUndefined(from2._isAMomentObject)) {
    to2._isAMomentObject = from2._isAMomentObject;
  }
  if (!isUndefined(from2._i)) {
    to2._i = from2._i;
  }
  if (!isUndefined(from2._f)) {
    to2._f = from2._f;
  }
  if (!isUndefined(from2._l)) {
    to2._l = from2._l;
  }
  if (!isUndefined(from2._strict)) {
    to2._strict = from2._strict;
  }
  if (!isUndefined(from2._tzm)) {
    to2._tzm = from2._tzm;
  }
  if (!isUndefined(from2._isUTC)) {
    to2._isUTC = from2._isUTC;
  }
  if (!isUndefined(from2._offset)) {
    to2._offset = from2._offset;
  }
  if (!isUndefined(from2._pf)) {
    to2._pf = getParsingFlags(from2);
  }
  if (!isUndefined(from2._locale)) {
    to2._locale = from2._locale;
  }
  if (momentProperties.length > 0) {
    for (i2 = 0; i2 < momentProperties.length; i2++) {
      prop = momentProperties[i2];
      val = from2[prop];
      if (!isUndefined(val)) {
        to2[prop] = val;
      }
    }
  }
  return to2;
}
function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  if (!this.isValid()) {
    this._d = new Date(NaN);
  }
  if (updateInProgress === false) {
    updateInProgress = true;
    hooks.updateOffset(this);
    updateInProgress = false;
  }
}
function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}
function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
    console.warn("Deprecation warning: " + msg);
  }
}
function deprecate(msg, fn) {
  var firstTime = true;
  return extend(function() {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }
    if (firstTime) {
      var args = [], arg, i2, key;
      for (i2 = 0; i2 < arguments.length; i2++) {
        arg = "";
        if (typeof arguments[i2] === "object") {
          arg += "\n[" + i2 + "] ";
          for (key in arguments[0]) {
            if (hasOwnProp(arguments[0], key)) {
              arg += key + ": " + arguments[0][key] + ", ";
            }
          }
          arg = arg.slice(0, -2);
        } else {
          arg = arguments[i2];
        }
        args.push(arg);
      }
      warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
      firstTime = false;
    }
    return fn.apply(this, arguments);
  }, fn);
}
var deprecations = {};
function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}
hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;
function isFunction$1(input) {
  return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
}
function set(config) {
  var prop, i2;
  for (i2 in config) {
    if (hasOwnProp(config, i2)) {
      prop = config[i2];
      if (isFunction$1(prop)) {
        this[i2] = prop;
      } else {
        this["_" + i2] = prop;
      }
    }
  }
  this._config = config;
  this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}
function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig), prop;
  for (prop in childConfig) {
    if (hasOwnProp(childConfig, prop)) {
      if (isObject$1(parentConfig[prop]) && isObject$1(childConfig[prop])) {
        res[prop] = {};
        extend(res[prop], parentConfig[prop]);
        extend(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }
  for (prop in parentConfig) {
    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject$1(parentConfig[prop])) {
      res[prop] = extend({}, res[prop]);
    }
  }
  return res;
}
function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}
var keys$1;
if (Object.keys) {
  keys$1 = Object.keys;
} else {
  keys$1 = function(obj) {
    var i2, res = [];
    for (i2 in obj) {
      if (hasOwnProp(obj, i2)) {
        res.push(i2);
      }
    }
    return res;
  };
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function calendar(key, mom, now2) {
  var output = this._calendar[key] || this._calendar["sameElse"];
  return isFunction$1(output) ? output.call(mom, now2) : output;
}
function zeroFill(number, targetLength, forceSign) {
  var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
  return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(token2, padded, ordinal2, callback) {
  var func = callback;
  if (typeof callback === "string") {
    func = function() {
      return this[callback]();
    };
  }
  if (token2) {
    formatTokenFunctions[token2] = func;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal2) {
    formatTokenFunctions[ordinal2] = function() {
      return this.localeData().ordinal(func.apply(this, arguments), token2);
    };
  }
}
function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, "");
  }
  return input.replace(/\\/g, "");
}
function makeFormatFunction(format2) {
  var array = format2.match(formattingTokens), i2, length;
  for (i2 = 0, length = array.length; i2 < length; i2++) {
    if (formatTokenFunctions[array[i2]]) {
      array[i2] = formatTokenFunctions[array[i2]];
    } else {
      array[i2] = removeFormattingTokens(array[i2]);
    }
  }
  return function(mom) {
    var output = "", i3;
    for (i3 = 0; i3 < length; i3++) {
      output += isFunction$1(array[i3]) ? array[i3].call(mom, format2) : array[i3];
    }
    return output;
  };
}
function formatMoment(m2, format2) {
  if (!m2.isValid()) {
    return m2.localeData().invalidDate();
  }
  format2 = expandFormat(format2, m2.localeData());
  formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
  return formatFunctions[format2](m2);
}
function expandFormat(format2, locale2) {
  var i2 = 5;
  function replaceLongDateFormatTokens(input) {
    return locale2.longDateFormat(input) || input;
  }
  localFormattingTokens.lastIndex = 0;
  while (i2 >= 0 && localFormattingTokens.test(format2)) {
    format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i2 -= 1;
  }
  return format2;
}
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function longDateFormat(key) {
  var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
  if (format2 || !formatUpper) {
    return format2;
  }
  this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
    if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
      return tok.slice(1);
    }
    return tok;
  }).join("");
  return this._longDateFormat[key];
}
var defaultInvalidDate = "Invalid date";
function invalidDate() {
  return this._invalidDate;
}
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(number) {
  return this._ordinal.replace("%d", number);
}
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function relativeTime(number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return isFunction$1(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}
function pastFuture(diff2, output) {
  var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
  return isFunction$1(format2) ? format2(output) : format2.replace(/%s/i, output);
}
var aliases = {};
function addUnitAlias(unit, shorthand) {
  var lowerCase = unit.toLowerCase();
  aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
}
function normalizeUnits(units) {
  return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  var normalizedInput = {}, normalizedProp, prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var priorities = {};
function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}
function getPrioritizedUnits(unitsObj) {
  var units = [], u2;
  for (u2 in unitsObj) {
    if (hasOwnProp(unitsObj, u2)) {
      units.push({ unit: u2, priority: priorities[u2] });
    }
  }
  units.sort(function(a2, b2) {
    return a2.priority - b2.priority;
  });
  return units;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function absFloor(number) {
  if (number < 0) {
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
}
function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion, value7 = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value7 = absFloor(coercedNumber);
  }
  return value7;
}
function makeGetSet(unit, keepTime) {
  return function(value7) {
    if (value7 != null) {
      set$1(this, unit, value7);
      hooks.updateOffset(this, keepTime);
      return this;
    } else {
      return get(this, unit);
    }
  };
}
function get(mom, unit) {
  return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
}
function set$1(mom, unit, value7) {
  if (mom.isValid() && !isNaN(value7)) {
    if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
      value7 = toInt(value7);
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value7, mom.month(), daysInMonth(value7, mom.month()));
    } else {
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value7);
    }
  }
}
function stringGet(units) {
  units = normalizeUnits(units);
  if (isFunction$1(this[units])) {
    return this[units]();
  }
  return this;
}
function stringSet(units, value7) {
  if (typeof units === "object") {
    units = normalizeObjectUnits(units);
    var prioritized = getPrioritizedUnits(units), i2;
    for (i2 = 0; i2 < prioritized.length; i2++) {
      this[prioritized[i2].unit](units[prioritized[i2].unit]);
    }
  } else {
    units = normalizeUnits(units);
    if (isFunction$1(this[units])) {
      return this[units](value7);
    }
  }
  return this;
}
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
regexes = {};
function addRegexToken(token2, regex, strictRegex) {
  regexes[token2] = isFunction$1(regex) ? regex : function(isStrict, localeData2) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token2, config) {
  if (!hasOwnProp(regexes, token2)) {
    return new RegExp(unescapeFormat(token2));
  }
  return regexes[token2](config._strict, config._locale);
}
function unescapeFormat(s2) {
  return regexEscape(s2.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
    return p1 || p2 || p3 || p4;
  }));
}
function regexEscape(s2) {
  return s2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var tokens = {};
function addParseToken(token2, callback) {
  var i2, func = callback;
  if (typeof token2 === "string") {
    token2 = [token2];
  }
  if (isNumber(callback)) {
    func = function(input, array) {
      array[callback] = toInt(input);
    };
  }
  for (i2 = 0; i2 < token2.length; i2++) {
    tokens[token2[i2]] = func;
  }
}
function addWeekParseToken(token2, callback) {
  addParseToken(token2, function(input, array, config, token3) {
    config._w = config._w || {};
    callback(input, config._w, config, token3);
  });
}
function addTimeToArrayFromToken(token2, input, config) {
  if (input != null && hasOwnProp(tokens, token2)) {
    tokens[token2](input, config._a, config, token2);
  }
}
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
function mod(n2, x2) {
  return (n2 % x2 + x2) % x2;
}
var indexOf;
if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function(o2) {
    var i2;
    for (i2 = 0; i2 < this.length; ++i2) {
      if (this[i2] === o2) {
        return i2;
      }
    }
    return -1;
  };
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  var modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
addFormatToken("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
addFormatToken("MMM", 0, 0, function(format2) {
  return this.localeData().monthsShort(this, format2);
});
addFormatToken("MMMM", 0, 0, function(format2) {
  return this.localeData().months(this, format2);
});
addUnitAlias("month", "M");
addUnitPriority("month", 8);
addRegexToken("M", match1to2);
addRegexToken("MM", match1to2, match2);
addRegexToken("MMM", function(isStrict, locale2) {
  return locale2.monthsShortRegex(isStrict);
});
addRegexToken("MMMM", function(isStrict, locale2) {
  return locale2.monthsRegex(isStrict);
});
addParseToken(["M", "MM"], function(input, array) {
  array[MONTH] = toInt(input) - 1;
});
addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
  var month = config._locale.monthsParse(input, token2, config._strict);
  if (month != null) {
    array[MONTH] = month;
  } else {
    getParsingFlags(config).invalidMonth = input;
  }
});
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
function localeMonths(m2, format2) {
  if (!m2) {
    return isArray$2(this._months) ? this._months : this._months["standalone"];
  }
  return isArray$2(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
}
function localeMonthsShort(m2, format2) {
  if (!m2) {
    return isArray$2(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
  }
  return isArray$2(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
}
function handleStrictParse(monthName, format2, strict) {
  var i2, ii, mom, llc = monthName.toLocaleLowerCase();
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
    for (i2 = 0; i2 < 12; ++i2) {
      mom = createUTC([2e3, i2]);
      this._shortMonthsParse[i2] = this.monthsShort(mom, "").toLocaleLowerCase();
      this._longMonthsParse[i2] = this.months(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeMonthsParse(monthName, format2, strict) {
  var i2, mom, regex;
  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format2, strict);
  }
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  }
  for (i2 = 0; i2 < 12; i2++) {
    mom = createUTC([2e3, i2]);
    if (strict && !this._longMonthsParse[i2]) {
      this._longMonthsParse[i2] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
      this._shortMonthsParse[i2] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
    }
    if (!strict && !this._monthsParse[i2]) {
      regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
      this._monthsParse[i2] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "MMMM" && this._longMonthsParse[i2].test(monthName)) {
      return i2;
    } else if (strict && format2 === "MMM" && this._shortMonthsParse[i2].test(monthName)) {
      return i2;
    } else if (!strict && this._monthsParse[i2].test(monthName)) {
      return i2;
    }
  }
}
function setMonth(mom, value7) {
  var dayOfMonth;
  if (!mom.isValid()) {
    return mom;
  }
  if (typeof value7 === "string") {
    if (/^\d+$/.test(value7)) {
      value7 = toInt(value7);
    } else {
      value7 = mom.localeData().monthsParse(value7);
      if (!isNumber(value7)) {
        return mom;
      }
    }
  }
  dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value7));
  mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value7, dayOfMonth);
  return mom;
}
function getSetMonth(value7) {
  if (value7 != null) {
    setMonth(this, value7);
    hooks.updateOffset(this, true);
    return this;
  } else {
    return get(this, "Month");
  }
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}
function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}
function computeMonthsParse() {
  function cmpLenRev(a2, b2) {
    return b2.length - a2.length;
  }
  var shortPieces = [], longPieces = [], mixedPieces = [], i2, mom;
  for (i2 = 0; i2 < 12; i2++) {
    mom = createUTC([2e3, i2]);
    shortPieces.push(this.monthsShort(mom, ""));
    longPieces.push(this.months(mom, ""));
    mixedPieces.push(this.months(mom, ""));
    mixedPieces.push(this.monthsShort(mom, ""));
  }
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  for (i2 = 0; i2 < 12; i2++) {
    shortPieces[i2] = regexEscape(shortPieces[i2]);
    longPieces[i2] = regexEscape(longPieces[i2]);
  }
  for (i2 = 0; i2 < 24; i2++) {
    mixedPieces[i2] = regexEscape(mixedPieces[i2]);
  }
  this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
  this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
}
addFormatToken("Y", 0, 0, function() {
  var y2 = this.year();
  return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
});
addFormatToken(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
addFormatToken(0, ["YYYY", 4], 0, "year");
addFormatToken(0, ["YYYYY", 5], 0, "year");
addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
addUnitAlias("year", "y");
addUnitPriority("year", 1);
addRegexToken("Y", matchSigned);
addRegexToken("YY", match1to2, match2);
addRegexToken("YYYY", match1to4, match4);
addRegexToken("YYYYY", match1to6, match6);
addRegexToken("YYYYYY", match1to6, match6);
addParseToken(["YYYYY", "YYYYYY"], YEAR);
addParseToken("YYYY", function(input, array) {
  array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken("YY", function(input, array) {
  array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken("Y", function(input, array) {
  array[YEAR] = parseInt(input, 10);
});
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
hooks.parseTwoDigitYear = function(input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
};
var getSetYear = makeGetSet("FullYear", true);
function getIsLeapYear() {
  return isLeapYear(this.year());
}
function createDate(y2, m2, d2, h2, M2, s2, ms) {
  var date;
  if (y2 < 100 && y2 >= 0) {
    date = new Date(y2 + 400, m2, d2, h2, M2, s2, ms);
    if (isFinite(date.getFullYear())) {
      date.setFullYear(y2);
    }
  } else {
    date = new Date(y2, m2, d2, h2, M2, s2, ms);
  }
  return date;
}
function createUTCDate(y2) {
  var date, args;
  if (y2 < 100 && y2 >= 0) {
    args = Array.prototype.slice.call(arguments);
    args[0] = y2 + 400;
    date = new Date(Date.UTC.apply(null, args));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y2);
    }
  } else {
    date = new Date(Date.UTC.apply(null, arguments));
  }
  return date;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
addFormatToken("w", ["ww", 2], "wo", "week");
addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
addUnitAlias("week", "w");
addUnitAlias("isoWeek", "W");
addUnitPriority("week", 5);
addUnitPriority("isoWeek", 5);
addRegexToken("w", match1to2);
addRegexToken("ww", match1to2, match2);
addRegexToken("W", match1to2);
addRegexToken("WW", match1to2, match2);
addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token2) {
  week[token2.substr(0, 1)] = toInt(input);
});
function localeWeek(mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  doy: 6
};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
}
function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, "d");
}
function getSetISOWeek(input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, "d");
}
addFormatToken("d", 0, "do", "day");
addFormatToken("dd", 0, 0, function(format2) {
  return this.localeData().weekdaysMin(this, format2);
});
addFormatToken("ddd", 0, 0, function(format2) {
  return this.localeData().weekdaysShort(this, format2);
});
addFormatToken("dddd", 0, 0, function(format2) {
  return this.localeData().weekdays(this, format2);
});
addFormatToken("e", 0, 0, "weekday");
addFormatToken("E", 0, 0, "isoWeekday");
addUnitAlias("day", "d");
addUnitAlias("weekday", "e");
addUnitAlias("isoWeekday", "E");
addUnitPriority("day", 11);
addUnitPriority("weekday", 11);
addUnitPriority("isoWeekday", 11);
addRegexToken("d", match1to2);
addRegexToken("e", match1to2);
addRegexToken("E", match1to2);
addRegexToken("dd", function(isStrict, locale2) {
  return locale2.weekdaysMinRegex(isStrict);
});
addRegexToken("ddd", function(isStrict, locale2) {
  return locale2.weekdaysShortRegex(isStrict);
});
addRegexToken("dddd", function(isStrict, locale2) {
  return locale2.weekdaysRegex(isStrict);
});
addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
  var weekday = config._locale.weekdaysParse(input, token2, config._strict);
  if (weekday != null) {
    week.d = weekday;
  } else {
    getParsingFlags(config).invalidWeekday = input;
  }
});
addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
  week[token2] = toInt(input);
});
function parseWeekday(input, locale2) {
  if (typeof input !== "string") {
    return input;
  }
  if (!isNaN(input)) {
    return parseInt(input, 10);
  }
  input = locale2.weekdaysParse(input);
  if (typeof input === "number") {
    return input;
  }
  return null;
}
function parseIsoWeekday(input, locale2) {
  if (typeof input === "string") {
    return locale2.weekdaysParse(input) % 7 || 7;
  }
  return isNaN(input) ? null : input;
}
function shiftWeekdays(ws, n2) {
  return ws.slice(n2, 7).concat(ws.slice(0, n2));
}
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
function localeWeekdays(m2, format2) {
  var weekdays = isArray$2(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
  return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
}
function localeWeekdaysShort(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
}
function localeWeekdaysMin(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
}
function handleStrictParse$1(weekdayName, format2, strict) {
  var i2, ii, mom, llc = weekdayName.toLocaleLowerCase();
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];
    for (i2 = 0; i2 < 7; ++i2) {
      mom = createUTC([2e3, 1]).day(i2);
      this._minWeekdaysParse[i2] = this.weekdaysMin(mom, "").toLocaleLowerCase();
      this._shortWeekdaysParse[i2] = this.weekdaysShort(mom, "").toLocaleLowerCase();
      this._weekdaysParse[i2] = this.weekdays(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeWeekdaysParse(weekdayName, format2, strict) {
  var i2, mom, regex;
  if (this._weekdaysParseExact) {
    return handleStrictParse$1.call(this, weekdayName, format2, strict);
  }
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }
  for (i2 = 0; i2 < 7; i2++) {
    mom = createUTC([2e3, 1]).day(i2);
    if (strict && !this._fullWeekdaysParse[i2]) {
      this._fullWeekdaysParse[i2] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
      this._shortWeekdaysParse[i2] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
      this._minWeekdaysParse[i2] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
    }
    if (!this._weekdaysParse[i2]) {
      regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
      this._weekdaysParse[i2] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "dddd" && this._fullWeekdaysParse[i2].test(weekdayName)) {
      return i2;
    } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i2].test(weekdayName)) {
      return i2;
    } else if (strict && format2 === "dd" && this._minWeekdaysParse[i2].test(weekdayName)) {
      return i2;
    } else if (!strict && this._weekdaysParse[i2].test(weekdayName)) {
      return i2;
    }
  }
}
function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, "d");
  } else {
    return day;
  }
}
function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, "d");
}
function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}
function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }
    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}
function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysShortRegex")) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }
    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}
function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysMinRegex")) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }
    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}
function computeWeekdaysParse() {
  function cmpLenRev(a2, b2) {
    return b2.length - a2.length;
  }
  var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i2, mom, minp, shortp, longp;
  for (i2 = 0; i2 < 7; i2++) {
    mom = createUTC([2e3, 1]).day(i2);
    minp = regexEscape(this.weekdaysMin(mom, ""));
    shortp = regexEscape(this.weekdaysShort(mom, ""));
    longp = regexEscape(this.weekdays(mom, ""));
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  }
  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
  this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
  this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
}
function hFormat() {
  return this.hours() % 12 || 12;
}
function kFormat() {
  return this.hours() || 24;
}
addFormatToken("H", ["HH", 2], 0, "hour");
addFormatToken("h", ["hh", 2], 0, hFormat);
addFormatToken("k", ["kk", 2], 0, kFormat);
addFormatToken("hmm", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken("hmmss", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken("Hmm", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken("Hmmss", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
function meridiem(token2, lowercase) {
  addFormatToken(token2, 0, 0, function() {
    return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
  });
}
meridiem("a", true);
meridiem("A", false);
addUnitAlias("hour", "h");
addUnitPriority("hour", 13);
function matchMeridiem(isStrict, locale2) {
  return locale2._meridiemParse;
}
addRegexToken("a", matchMeridiem);
addRegexToken("A", matchMeridiem);
addRegexToken("H", match1to2);
addRegexToken("h", match1to2);
addRegexToken("k", match1to2);
addRegexToken("HH", match1to2, match2);
addRegexToken("hh", match1to2, match2);
addRegexToken("kk", match1to2, match2);
addRegexToken("hmm", match3to4);
addRegexToken("hmmss", match5to6);
addRegexToken("Hmm", match3to4);
addRegexToken("Hmmss", match5to6);
addParseToken(["H", "HH"], HOUR);
addParseToken(["k", "kk"], function(input, array, config) {
  var kInput = toInt(input);
  array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(["a", "A"], function(input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(["h", "hh"], function(input, array, config) {
  array[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken("Hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
});
addParseToken("Hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
});
function localeIsPM(input) {
  return (input + "").toLowerCase().charAt(0) === "p";
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
function localeMeridiem(hours2, minutes2, isLower) {
  if (hours2 > 11) {
    return isLower ? "pm" : "PM";
  } else {
    return isLower ? "am" : "AM";
  }
}
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
var locales = {}, localeFamilies = {}, globalLocale;
function commonPrefix(arr1, arr2) {
  var i2, minl = Math.min(arr1.length, arr2.length);
  for (i2 = 0; i2 < minl; i2 += 1) {
    if (arr1[i2] !== arr2[i2]) {
      return i2;
    }
  }
  return minl;
}
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names2) {
  var i2 = 0, j2, next, locale2, split;
  while (i2 < names2.length) {
    split = normalizeLocale(names2[i2]).split("-");
    j2 = split.length;
    next = normalizeLocale(names2[i2 + 1]);
    next = next ? next.split("-") : null;
    while (j2 > 0) {
      locale2 = loadLocale(split.slice(0, j2).join("-"));
      if (locale2) {
        return locale2;
      }
      if (next && next.length >= j2 && commonPrefix(split, next) >= j2 - 1) {
        break;
      }
      j2--;
    }
    i2++;
  }
  return globalLocale;
}
function loadLocale(name) {
  var oldLocale = null, aliasedRequire;
  if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports) {
    try {
      oldLocale = globalLocale._abbr;
      aliasedRequire = require;
      aliasedRequire("./locale/" + name);
      getSetGlobalLocale(oldLocale);
    } catch (e2) {
      locales[name] = null;
    }
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  var data12;
  if (key) {
    if (isUndefined(values)) {
      data12 = getLocale(key);
    } else {
      data12 = defineLocale(key, values);
    }
    if (data12) {
      globalLocale = data12;
    } else {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("Locale " + key + " not found. Did you forget to load it?");
      }
    }
  }
  return globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config !== null) {
    var locale2, parentConfig = baseConfig;
    config.abbr = name;
    if (locales[name] != null) {
      deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale2 = loadLocale(config.parentLocale);
        if (locale2 != null) {
          parentConfig = locale2._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }
          localeFamilies[config.parentLocale].push({
            name,
            config
          });
          return null;
        }
      }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function(x2) {
        defineLocale(x2.name, x2.config);
      });
    }
    getSetGlobalLocale(name);
    return locales[name];
  } else {
    delete locales[name];
    return null;
  }
}
function updateLocale(name, config) {
  if (config != null) {
    var locale2, tmpLocale, parentConfig = baseConfig;
    if (locales[name] != null && locales[name].parentLocale != null) {
      locales[name].set(mergeConfigs(locales[name]._config, config));
    } else {
      tmpLocale = loadLocale(name);
      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }
      config = mergeConfigs(parentConfig, config);
      if (tmpLocale == null) {
        config.abbr = name;
      }
      locale2 = new Locale(config);
      locale2.parentLocale = locales[name];
      locales[name] = locale2;
    }
    getSetGlobalLocale(name);
  } else {
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
        if (name === getSetGlobalLocale()) {
          getSetGlobalLocale(name);
        }
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }
  return locales[name];
}
function getLocale(key) {
  var locale2;
  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }
  if (!key) {
    return globalLocale;
  }
  if (!isArray$2(key)) {
    locale2 = loadLocale(key);
    if (locale2) {
      return locale2;
    }
    key = [key];
  }
  return chooseLocale(key);
}
function listLocales() {
  return keys$1(locales);
}
function checkOverflow(m2) {
  var overflow, a2 = m2._a;
  if (a2 && getParsingFlags(m2).overflow === -2) {
    overflow = a2[MONTH] < 0 || a2[MONTH] > 11 ? MONTH : a2[DATE] < 1 || a2[DATE] > daysInMonth(a2[YEAR], a2[MONTH]) ? DATE : a2[HOUR] < 0 || a2[HOUR] > 24 || a2[HOUR] === 24 && (a2[MINUTE] !== 0 || a2[SECOND] !== 0 || a2[MILLISECOND] !== 0) ? HOUR : a2[MINUTE] < 0 || a2[MINUTE] > 59 ? MINUTE : a2[SECOND] < 0 || a2[SECOND] > 59 ? SECOND : a2[MILLISECOND] < 0 || a2[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(m2).overflow = overflow;
  }
  return m2;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, false],
  ["YYYY", /\d{4}/, false]
], isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function configFromISO(config) {
  var i2, l2, string = config._i, match5 = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
  if (match5) {
    getParsingFlags(config).iso = true;
    for (i2 = 0, l2 = isoDates.length; i2 < l2; i2++) {
      if (isoDates[i2][1].exec(match5[1])) {
        dateFormat = isoDates[i2][0];
        allowTime = isoDates[i2][2] !== false;
        break;
      }
    }
    if (dateFormat == null) {
      config._isValid = false;
      return;
    }
    if (match5[3]) {
      for (i2 = 0, l2 = isoTimes.length; i2 < l2; i2++) {
        if (isoTimes[i2][1].exec(match5[3])) {
          timeFormat = (match5[2] || " ") + isoTimes[i2][0];
          break;
        }
      }
      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }
    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }
    if (match5[4]) {
      if (tzRegex.exec(match5[4])) {
        tzFormat = "Z";
      } else {
        config._isValid = false;
        return;
      }
    }
    config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
    configFromStringAndFormat(config);
  } else {
    config._isValid = false;
  }
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);
  if (year <= 49) {
    return 2e3 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }
  return year;
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
    return h2 * 60 + m2;
  }
}
function configFromRFC2822(config) {
  var match5 = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
  if (match5) {
    parsedArray = extractFromRFC2822Strings(match5[4], match5[3], match5[2], match5[5], match5[6], match5[7]);
    if (!checkWeekday(match5[1], parsedArray, config)) {
      return;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match5[8], match5[9], match5[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
}
function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = new Date(+matched[1]);
    return;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  if (config._strict) {
    config._isValid = false;
  } else {
    hooks.createFromInputFallback(config);
  }
}
hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
  config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
});
function defaults(a2, b2, c2) {
  if (a2 != null) {
    return a2;
  }
  if (b2 != null) {
    return b2;
  }
  return c2;
}
function currentDateArray(config) {
  var nowValue = new Date(hooks.now());
  if (config._useUTC) {
    return [
      nowValue.getUTCFullYear(),
      nowValue.getUTCMonth(),
      nowValue.getUTCDate()
    ];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  var i2, date, input = [], currentDate, expectedWeekday, yearToUse;
  if (config._d) {
    return;
  }
  currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date = createUTCDate(yearToUse, 0, config._dayOfYear);
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  }
  for (i2 = 0; i2 < 3 && config._a[i2] == null; ++i2) {
    config._a[i2] = input[i2] = currentDate[i2];
  }
  for (; i2 < 7; i2++) {
    config._a[i2] = input[i2] = config._a[i2] == null ? i2 === 2 ? 1 : 0 : config._a[i2];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
}
function dayOfYearFromWeekInfo(config) {
  var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
  w2 = config._w;
  if (w2.GG != null || w2.W != null || w2.E != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(w2.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
    week = defaults(w2.W, 1);
    weekday = defaults(w2.E, 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    curWeek = weekOfYear(createLocal(), dow, doy);
    weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
    week = defaults(w2.w, curWeek.week);
    if (w2.d != null) {
      weekday = w2.d;
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w2.e != null) {
      weekday = w2.e + dow;
      if (w2.e < 0 || w2.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}
hooks.ISO_8601 = function() {
};
hooks.RFC_2822 = function() {
};
function configFromStringAndFormat(config) {
  if (config._f === hooks.ISO_8601) {
    configFromISO(config);
    return;
  }
  if (config._f === hooks.RFC_2822) {
    configFromRFC2822(config);
    return;
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  var string = "" + config._i, i2, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
  tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  for (i2 = 0; i2 < tokens2.length; i2++) {
    token2 = tokens2[i2];
    parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
    if (parsedInput) {
      skipped = string.substr(0, string.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token2]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token2);
      }
      addTimeToArrayFromToken(token2, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token2);
    }
  }
  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  if (string.length > 0) {
    getParsingFlags(config).unusedInput.push(string);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
  era = getParsingFlags(config).era;
  if (era !== null) {
    config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
  }
  configFromArray(config);
  checkOverflow(config);
}
function meridiemFixWrap(locale2, hour, meridiem2) {
  var isPm;
  if (meridiem2 == null) {
    return hour;
  }
  if (locale2.meridiemHour != null) {
    return locale2.meridiemHour(hour, meridiem2);
  } else if (locale2.isPM != null) {
    isPm = locale2.isPM(meridiem2);
    if (isPm && hour < 12) {
      hour += 12;
    }
    if (!isPm && hour === 12) {
      hour = 0;
    }
    return hour;
  } else {
    return hour;
  }
}
function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i2, currentScore, validFormatFound, bestFormatIsValid = false;
  if (config._f.length === 0) {
    getParsingFlags(config).invalidFormat = true;
    config._d = new Date(NaN);
    return;
  }
  for (i2 = 0; i2 < config._f.length; i2++) {
    currentScore = 0;
    validFormatFound = false;
    tempConfig = copyConfig({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i2];
    configFromStringAndFormat(tempConfig);
    if (isValid2(tempConfig)) {
      validFormatFound = true;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (!bestFormatIsValid) {
      if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
        if (validFormatFound) {
          bestFormatIsValid = true;
        }
      }
    } else {
      if (currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
  }
  extend(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return;
  }
  var i2 = normalizeObjectUnits(config._i), dayOrDate = i2.day === void 0 ? i2.date : i2.day;
  config._a = map([i2.year, i2.month, dayOrDate, i2.hour, i2.minute, i2.second, i2.millisecond], function(obj) {
    return obj && parseInt(obj, 10);
  });
  configFromArray(config);
}
function createFromConfig(config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));
  if (res._nextDay) {
    res.add(1, "d");
    res._nextDay = void 0;
  }
  return res;
}
function prepareConfig(config) {
  var input = config._i, format2 = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input === null || format2 === void 0 && input === "") {
    return createInvalid({ nullInput: true });
  }
  if (typeof input === "string") {
    config._i = input = config._locale.preparse(input);
  }
  if (isMoment(input)) {
    return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
    config._d = input;
  } else if (isArray$2(format2)) {
    configFromStringAndArray(config);
  } else if (format2) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid2(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  var input = config._i;
  if (isUndefined(input)) {
    config._d = new Date(hooks.now());
  } else if (isDate(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === "string") {
    configFromString(config);
  } else if (isArray$2(input)) {
    config._a = map(input.slice(0), function(obj) {
      return parseInt(obj, 10);
    });
    configFromArray(config);
  } else if (isObject$1(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    config._d = new Date(input);
  } else {
    hooks.createFromInputFallback(config);
  }
}
function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
  var c2 = {};
  if (format2 === true || format2 === false) {
    strict = format2;
    format2 = void 0;
  }
  if (locale2 === true || locale2 === false) {
    strict = locale2;
    locale2 = void 0;
  }
  if (isObject$1(input) && isObjectEmpty(input) || isArray$2(input) && input.length === 0) {
    input = void 0;
  }
  c2._isAMomentObject = true;
  c2._useUTC = c2._isUTC = isUTC;
  c2._l = locale2;
  c2._i = input;
  c2._f = format2;
  c2._strict = strict;
  return createFromConfig(c2);
}
function createLocal(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, false);
}
var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
  var other = createLocal.apply(null, arguments);
  if (this.isValid() && other.isValid()) {
    return other < this ? this : other;
  } else {
    return createInvalid();
  }
}), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
  var other = createLocal.apply(null, arguments);
  if (this.isValid() && other.isValid()) {
    return other > this ? this : other;
  } else {
    return createInvalid();
  }
});
function pickBy(fn, moments) {
  var res, i2;
  if (moments.length === 1 && isArray$2(moments[0])) {
    moments = moments[0];
  }
  if (!moments.length) {
    return createLocal();
  }
  res = moments[0];
  for (i2 = 1; i2 < moments.length; ++i2) {
    if (!moments[i2].isValid() || moments[i2][fn](res)) {
      res = moments[i2];
    }
  }
  return res;
}
function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isBefore", args);
}
function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isAfter", args);
}
var now = function() {
  return Date.now ? Date.now() : +new Date();
};
var ordering = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function isDurationValid(m2) {
  var key, unitHasDecimal = false, i2;
  for (key in m2) {
    if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
      return false;
    }
  }
  for (i2 = 0; i2 < ordering.length; ++i2) {
    if (m2[ordering[i2]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (parseFloat(m2[ordering[i2]]) !== toInt(m2[ordering[i2]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}
function Duration(duration) {
  var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
  this._isValid = isDurationValid(normalizedInput);
  this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
  this._days = +days2 + weeks2 * 7;
  this._months = +months2 + quarters * 3 + years2 * 12;
  this._data = {};
  this._locale = getLocale();
  this._bubble();
}
function isDuration(obj) {
  return obj instanceof Duration;
}
function absRound(number) {
  if (number < 0) {
    return Math.round(-1 * number) * -1;
  } else {
    return Math.round(number);
  }
}
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i2;
  for (i2 = 0; i2 < len; i2++) {
    if (dontConvert && array1[i2] !== array2[i2] || !dontConvert && toInt(array1[i2]) !== toInt(array2[i2])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function offset(token2, separator) {
  addFormatToken(token2, 0, 0, function() {
    var offset3 = this.utcOffset(), sign2 = "+";
    if (offset3 < 0) {
      offset3 = -offset3;
      sign2 = "-";
    }
    return sign2 + zeroFill(~~(offset3 / 60), 2) + separator + zeroFill(~~offset3 % 60, 2);
  });
}
offset("Z", ":");
offset("ZZ", "");
addRegexToken("Z", matchShortOffset);
addRegexToken("ZZ", matchShortOffset);
addParseToken(["Z", "ZZ"], function(input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
});
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, string) {
  var matches = (string || "").match(matcher), chunk, parts, minutes2;
  if (matches === null) {
    return null;
  }
  chunk = matches[matches.length - 1] || [];
  parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
  minutes2 = +(parts[1] * 60) + toInt(parts[2]);
  return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
}
function cloneWithOffset(input, model) {
  var res, diff2;
  if (model._isUTC) {
    res = model.clone();
    diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
    res._d.setTime(res._d.valueOf() + diff2);
    hooks.updateOffset(res, false);
    return res;
  } else {
    return createLocal(input).local();
  }
}
function getDateOffset(m2) {
  return -Math.round(m2._d.getTimezoneOffset());
}
hooks.updateOffset = function() {
};
function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset3 = this._offset || 0, localAdjust;
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    if (typeof input === "string") {
      input = offsetFromString(matchShortOffset, input);
      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }
    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }
    this._offset = input;
    this._isUTC = true;
    if (localAdjust != null) {
      this.add(localAdjust, "m");
    }
    if (offset3 !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        addSubtract(this, createDuration(input - offset3, "m"), 1, false);
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        hooks.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }
    return this;
  } else {
    return this._isUTC ? offset3 : getDateOffset(this);
  }
}
function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== "string") {
      input = -input;
    }
    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}
function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;
    if (keepLocalTime) {
      this.subtract(getDateOffset(this), "m");
    }
  }
  return this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === "string") {
    var tZone = offsetFromString(matchOffset, this._i);
    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }
  return this;
}
function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }
  input = input ? createLocal(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }
  var c2 = {}, other;
  copyConfig(c2, this);
  c2 = prepareConfig(c2);
  if (c2._a) {
    other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
    this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }
  return this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key) {
  var duration = input, match5 = null, sign2, ret, diffRes;
  if (isDuration(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if (isNumber(input) || !isNaN(+input)) {
    duration = {};
    if (key) {
      duration[key] = +input;
    } else {
      duration.milliseconds = +input;
    }
  } else if (match5 = aspNetRegex.exec(input)) {
    sign2 = match5[1] === "-" ? -1 : 1;
    duration = {
      y: 0,
      d: toInt(match5[DATE]) * sign2,
      h: toInt(match5[HOUR]) * sign2,
      m: toInt(match5[MINUTE]) * sign2,
      s: toInt(match5[SECOND]) * sign2,
      ms: toInt(absRound(match5[MILLISECOND] * 1e3)) * sign2
    };
  } else if (match5 = isoRegex.exec(input)) {
    sign2 = match5[1] === "-" ? -1 : 1;
    duration = {
      y: parseIso(match5[2], sign2),
      M: parseIso(match5[3], sign2),
      w: parseIso(match5[4], sign2),
      d: parseIso(match5[5], sign2),
      h: parseIso(match5[6], sign2),
      m: parseIso(match5[7], sign2),
      s: parseIso(match5[8], sign2)
    };
  } else if (duration == null) {
    duration = {};
  } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
    diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }
  ret = new Duration(duration);
  if (isDuration(input) && hasOwnProp(input, "_locale")) {
    ret._locale = input._locale;
  }
  if (isDuration(input) && hasOwnProp(input, "_isValid")) {
    ret._isValid = input._isValid;
  }
  return ret;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;
function parseIso(inp, sign2) {
  var res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign2;
}
function positiveMomentsDifference(base, other) {
  var res = {};
  res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
  if (base.clone().add(res.months, "M").isAfter(other)) {
    --res.months;
  }
  res.milliseconds = +other - +base.clone().add(res.months, "M");
  return res;
}
function momentsDifference(base, other) {
  var res;
  if (!(base.isValid() && other.isValid())) {
    return { milliseconds: 0, months: 0 };
  }
  other = cloneWithOffset(other, base);
  if (base.isBefore(other)) {
    res = positiveMomentsDifference(base, other);
  } else {
    res = positiveMomentsDifference(other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function createAdder(direction, name) {
  return function(val, period) {
    var dur, tmp;
    if (period !== null && !isNaN(+period)) {
      deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
      tmp = val;
      val = period;
      period = tmp;
    }
    dur = createDuration(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}
function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
  if (!mom.isValid()) {
    return;
  }
  updateOffset = updateOffset == null ? true : updateOffset;
  if (months2) {
    setMonth(mom, get(mom, "Month") + months2 * isAdding);
  }
  if (days2) {
    set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
  }
  if (milliseconds2) {
    mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
  }
  if (updateOffset) {
    hooks.updateOffset(mom, days2 || months2);
  }
}
var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
function isString2(input) {
  return typeof input === "string" || input instanceof String;
}
function isMomentInput(input) {
  return isMoment(input) || isDate(input) || isString2(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
}
function isMomentInputObject(input) {
  var objectTest = isObject$1(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i2, property;
  for (i2 = 0; i2 < properties.length; i2 += 1) {
    property = properties[i2];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function isNumberOrStringArray(input) {
  var arrayTest = isArray$2(input), dataTypeTest = false;
  if (arrayTest) {
    dataTypeTest = input.filter(function(item) {
      return !isNumber(item) && isString2(input);
    }).length === 0;
  }
  return arrayTest && dataTypeTest;
}
function isCalendarSpec(input) {
  var objectTest = isObject$1(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i2, property;
  for (i2 = 0; i2 < properties.length; i2 += 1) {
    property = properties[i2];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function getCalendarFormat(myMoment, now2) {
  var diff2 = myMoment.diff(now2, "days", true);
  return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
}
function calendar$1(time, formats) {
  if (arguments.length === 1) {
    if (!arguments[0]) {
      time = void 0;
      formats = void 0;
    } else if (isMomentInput(arguments[0])) {
      time = arguments[0];
      formats = void 0;
    } else if (isCalendarSpec(arguments[0])) {
      formats = arguments[0];
      time = void 0;
    }
  }
  var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction$1(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
  return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
}
function clone() {
  return new Moment(this);
}
function isAfter(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}
function isBefore(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}
function isBetween(from2, to2, units, inclusivity) {
  var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }
  inclusivity = inclusivity || "()";
  return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}
function isSame(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input), inputMs;
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}
function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}
function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}
function diff(input, units, asFloat) {
  var that, zoneDelta, output;
  if (!this.isValid()) {
    return NaN;
  }
  that = cloneWithOffset(input, this);
  if (!that.isValid()) {
    return NaN;
  }
  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = normalizeUnits(units);
  switch (units) {
    case "year":
      output = monthDiff(this, that) / 12;
      break;
    case "month":
      output = monthDiff(this, that);
      break;
    case "quarter":
      output = monthDiff(this, that) / 3;
      break;
    case "second":
      output = (this - that) / 1e3;
      break;
    case "minute":
      output = (this - that) / 6e4;
      break;
    case "hour":
      output = (this - that) / 36e5;
      break;
    case "day":
      output = (this - that - zoneDelta) / 864e5;
      break;
    case "week":
      output = (this - that - zoneDelta) / 6048e5;
      break;
    default:
      output = this - that;
  }
  return asFloat ? output : absFloor(output);
}
function monthDiff(a2, b2) {
  if (a2.date() < b2.date()) {
    return -monthDiff(b2, a2);
  }
  var wholeMonthDiff = (b2.year() - a2.year()) * 12 + (b2.month() - a2.month()), anchor = a2.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
  if (b2 - anchor < 0) {
    anchor2 = a2.clone().add(wholeMonthDiff - 1, "months");
    adjust = (b2 - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a2.clone().add(wholeMonthDiff + 1, "months");
    adjust = (b2 - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function toString$1() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }
  var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
  if (m2.year() < 0 || m2.year() > 9999) {
    return formatMoment(m2, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
  if (isFunction$1(Date.prototype.toISOString)) {
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
    }
  }
  return formatMoment(m2, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function inspect() {
  if (!this.isValid()) {
    return "moment.invalid(/* " + this._i + " */)";
  }
  var func = "moment", zone = "", prefix, year, datetime, suffix;
  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
    zone = "Z";
  }
  prefix = "[" + func + '("]';
  year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
  datetime = "-MM-DD[T]HH:mm:ss.SSS";
  suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}
function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }
  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}
function from(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function fromNow(withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}
function to(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function toNow(withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}
function locale(key) {
  var newLocaleData;
  if (key === void 0) {
    return this._locale._abbr;
  } else {
    newLocaleData = getLocale(key);
    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }
    return this;
  }
}
var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
  if (key === void 0) {
    return this.localeData();
  } else {
    return this.locale(key);
  }
});
function localeData() {
  return this._locale;
}
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
function mod$1(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}
function localStartOfDate(y2, m2, d2) {
  if (y2 < 100 && y2 >= 0) {
    return new Date(y2 + 400, m2, d2) - MS_PER_400_YEARS;
  } else {
    return new Date(y2, m2, d2).valueOf();
  }
}
function utcStartOfDate(y2, m2, d2) {
  if (y2 < 100 && y2 >= 0) {
    return Date.UTC(y2 + 400, m2, d2) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y2, m2, d2);
  }
}
function startOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year(), 0, 1);
      break;
    case "quarter":
      time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
      break;
    case "month":
      time = startOfDate(this.year(), this.month(), 1);
      break;
    case "week":
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date());
      break;
    case "hour":
      time = this._d.valueOf();
      time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
      break;
    case "minute":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_MINUTE);
      break;
    case "second":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_SECOND);
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function endOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
      break;
    case "month":
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
      break;
    case "minute":
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
      break;
    case "second":
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function unix() {
  return Math.floor(this.valueOf() / 1e3);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray$1() {
  var m2 = this;
  return [
    m2.year(),
    m2.month(),
    m2.date(),
    m2.hour(),
    m2.minute(),
    m2.second(),
    m2.millisecond()
  ];
}
function toObject() {
  var m2 = this;
  return {
    years: m2.year(),
    months: m2.month(),
    date: m2.date(),
    hours: m2.hours(),
    minutes: m2.minutes(),
    seconds: m2.seconds(),
    milliseconds: m2.milliseconds()
  };
}
function toJSON() {
  return this.isValid() ? this.toISOString() : null;
}
function isValid$2() {
  return isValid2(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}
function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
addFormatToken("N", 0, 0, "eraAbbr");
addFormatToken("NN", 0, 0, "eraAbbr");
addFormatToken("NNN", 0, 0, "eraAbbr");
addFormatToken("NNNN", 0, 0, "eraName");
addFormatToken("NNNNN", 0, 0, "eraNarrow");
addFormatToken("y", ["y", 1], "yo", "eraYear");
addFormatToken("y", ["yy", 2], 0, "eraYear");
addFormatToken("y", ["yyy", 3], 0, "eraYear");
addFormatToken("y", ["yyyy", 4], 0, "eraYear");
addRegexToken("N", matchEraAbbr);
addRegexToken("NN", matchEraAbbr);
addRegexToken("NNN", matchEraAbbr);
addRegexToken("NNNN", matchEraName);
addRegexToken("NNNNN", matchEraNarrow);
addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token2) {
  var era = config._locale.erasParse(input, token2, config._strict);
  if (era) {
    getParsingFlags(config).era = era;
  } else {
    getParsingFlags(config).invalidEra = input;
  }
});
addRegexToken("y", matchUnsigned);
addRegexToken("yy", matchUnsigned);
addRegexToken("yyy", matchUnsigned);
addRegexToken("yyyy", matchUnsigned);
addRegexToken("yo", matchEraYearOrdinal);
addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
addParseToken(["yo"], function(input, array, config, token2) {
  var match5;
  if (config._locale._eraYearOrdinalRegex) {
    match5 = input.match(config._locale._eraYearOrdinalRegex);
  }
  if (config._locale.eraYearOrdinalParse) {
    array[YEAR] = config._locale.eraYearOrdinalParse(input, match5);
  } else {
    array[YEAR] = parseInt(input, 10);
  }
});
function localeEras(m2, format2) {
  var i2, l2, date, eras = this._eras || getLocale("en")._eras;
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    switch (typeof eras[i2].since) {
      case "string":
        date = hooks(eras[i2].since).startOf("day");
        eras[i2].since = date.valueOf();
        break;
    }
    switch (typeof eras[i2].until) {
      case "undefined":
        eras[i2].until = Infinity;
        break;
      case "string":
        date = hooks(eras[i2].until).startOf("day").valueOf();
        eras[i2].until = date.valueOf();
        break;
    }
  }
  return eras;
}
function localeErasParse(eraName, format2, strict) {
  var i2, l2, eras = this.eras(), name, abbr, narrow;
  eraName = eraName.toUpperCase();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    name = eras[i2].name.toUpperCase();
    abbr = eras[i2].abbr.toUpperCase();
    narrow = eras[i2].narrow.toUpperCase();
    if (strict) {
      switch (format2) {
        case "N":
        case "NN":
        case "NNN":
          if (abbr === eraName) {
            return eras[i2];
          }
          break;
        case "NNNN":
          if (name === eraName) {
            return eras[i2];
          }
          break;
        case "NNNNN":
          if (narrow === eraName) {
            return eras[i2];
          }
          break;
      }
    } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
      return eras[i2];
    }
  }
}
function localeErasConvertYear(era, year) {
  var dir = era.since <= era.until ? 1 : -1;
  if (year === void 0) {
    return hooks(era.since).year();
  } else {
    return hooks(era.since).year() + (year - era.offset) * dir;
  }
}
function getEraName() {
  var i2, l2, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until) {
      return eras[i2].name;
    }
    if (eras[i2].until <= val && val <= eras[i2].since) {
      return eras[i2].name;
    }
  }
  return "";
}
function getEraNarrow() {
  var i2, l2, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until) {
      return eras[i2].narrow;
    }
    if (eras[i2].until <= val && val <= eras[i2].since) {
      return eras[i2].narrow;
    }
  }
  return "";
}
function getEraAbbr() {
  var i2, l2, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until) {
      return eras[i2].abbr;
    }
    if (eras[i2].until <= val && val <= eras[i2].since) {
      return eras[i2].abbr;
    }
  }
  return "";
}
function getEraYear() {
  var i2, l2, dir, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    dir = eras[i2].since <= eras[i2].until ? 1 : -1;
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until || eras[i2].until <= val && val <= eras[i2].since) {
      return (this.year() - hooks(eras[i2].since).year()) * dir + eras[i2].offset;
    }
  }
  return this.year();
}
function erasNameRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNameRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNameRegex : this._erasRegex;
}
function erasAbbrRegex(isStrict) {
  if (!hasOwnProp(this, "_erasAbbrRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasAbbrRegex : this._erasRegex;
}
function erasNarrowRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNarrowRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNarrowRegex : this._erasRegex;
}
function matchEraAbbr(isStrict, locale2) {
  return locale2.erasAbbrRegex(isStrict);
}
function matchEraName(isStrict, locale2) {
  return locale2.erasNameRegex(isStrict);
}
function matchEraNarrow(isStrict, locale2) {
  return locale2.erasNarrowRegex(isStrict);
}
function matchEraYearOrdinal(isStrict, locale2) {
  return locale2._eraYearOrdinalRegex || matchUnsigned;
}
function computeErasParse() {
  var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i2, l2, eras = this.eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    namePieces.push(regexEscape(eras[i2].name));
    abbrPieces.push(regexEscape(eras[i2].abbr));
    narrowPieces.push(regexEscape(eras[i2].narrow));
    mixedPieces.push(regexEscape(eras[i2].name));
    mixedPieces.push(regexEscape(eras[i2].abbr));
    mixedPieces.push(regexEscape(eras[i2].narrow));
  }
  this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
  this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
  this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
}
addFormatToken(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
addFormatToken(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function addWeekYearFormatToken(token2, getter) {
  addFormatToken(0, [token2, token2.length], 0, getter);
}
addWeekYearFormatToken("gggg", "weekYear");
addWeekYearFormatToken("ggggg", "weekYear");
addWeekYearFormatToken("GGGG", "isoWeekYear");
addWeekYearFormatToken("GGGGG", "isoWeekYear");
addUnitAlias("weekYear", "gg");
addUnitAlias("isoWeekYear", "GG");
addUnitPriority("weekYear", 1);
addUnitPriority("isoWeekYear", 1);
addRegexToken("G", matchSigned);
addRegexToken("g", matchSigned);
addRegexToken("GG", match1to2, match2);
addRegexToken("gg", match1to2, match2);
addRegexToken("GGGG", match1to4, match4);
addRegexToken("gggg", match1to4, match4);
addRegexToken("GGGGG", match1to6, match6);
addRegexToken("ggggg", match1to6, match6);
addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token2) {
  week[token2.substr(0, 2)] = toInt(input);
});
addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
  week[token2] = hooks.parseTwoDigitYear(input);
});
function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}
function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getISOWeeksInISOWeekYear() {
  return weeksInYear(this.isoWeekYear(), 1, 4);
}
function getWeeksInYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}
function getWeeksInWeekYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
}
function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;
  if (input == null) {
    return weekOfYear(this, dow, doy).year;
  } else {
    weeksTarget = weeksInYear(input, dow, doy);
    if (week > weeksTarget) {
      week = weeksTarget;
    }
    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}
function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}
addFormatToken("Q", 0, "Qo", "quarter");
addUnitAlias("quarter", "Q");
addUnitPriority("quarter", 7);
addRegexToken("Q", match1);
addParseToken("Q", function(input, array) {
  array[MONTH] = (toInt(input) - 1) * 3;
});
function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
addFormatToken("D", ["DD", 2], "Do", "date");
addUnitAlias("date", "D");
addUnitPriority("date", 9);
addRegexToken("D", match1to2);
addRegexToken("DD", match1to2, match2);
addRegexToken("Do", function(isStrict, locale2) {
  return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
});
addParseToken(["D", "DD"], DATE);
addParseToken("Do", function(input, array) {
  array[DATE] = toInt(input.match(match1to2)[0]);
});
var getSetDayOfMonth = makeGetSet("Date", true);
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
addUnitAlias("dayOfYear", "DDD");
addUnitPriority("dayOfYear", 4);
addRegexToken("DDD", match1to3);
addRegexToken("DDDD", match3);
addParseToken(["DDD", "DDDD"], function(input, array, config) {
  config._dayOfYear = toInt(input);
});
function getSetDayOfYear(input) {
  var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
}
addFormatToken("m", ["mm", 2], 0, "minute");
addUnitAlias("minute", "m");
addUnitPriority("minute", 14);
addRegexToken("m", match1to2);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", false);
addFormatToken("s", ["ss", 2], 0, "second");
addUnitAlias("second", "s");
addUnitPriority("second", 15);
addRegexToken("s", match1to2);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);
var getSetSecond = makeGetSet("Seconds", false);
addFormatToken("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ["SSS", 3], 0, "millisecond");
addFormatToken(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
addFormatToken(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
addFormatToken(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
addFormatToken(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
addUnitAlias("millisecond", "ms");
addUnitPriority("millisecond", 16);
addRegexToken("S", match1to3, match1);
addRegexToken("SS", match1to3, match2);
addRegexToken("SSS", match1to3, match3);
var token, getSetMillisecond;
for (token = "SSSS"; token.length <= 9; token += "S") {
  addRegexToken(token, matchUnsigned);
}
function parseMs(input, array) {
  array[MILLISECOND] = toInt(("0." + input) * 1e3);
}
for (token = "S"; token.length <= 9; token += "S") {
  addParseToken(token, parseMs);
}
getSetMillisecond = makeGetSet("Milliseconds", false);
addFormatToken("z", 0, 0, "zoneAbbr");
addFormatToken("zz", 0, 0, "zoneName");
function getZoneAbbr() {
  return this._isUTC ? "UTC" : "";
}
function getZoneName() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var proto = Moment.prototype;
proto.add = add;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract;
proto.toArray = toArray$1;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect;
if (typeof Symbol !== "undefined" && Symbol.for != null) {
  proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  };
}
proto.toJSON = toJSON;
proto.toString = toString$1;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData;
proto.eraName = getEraName;
proto.eraNarrow = getEraNarrow;
proto.eraAbbr = getEraAbbr;
proto.eraYear = getEraYear;
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.weeksInWeekYear = getWeeksInWeekYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
function createUnix(input) {
  return createLocal(input * 1e3);
}
function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}
function preParsePostFormat(string) {
  return string;
}
var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set;
proto$1.eras = localeEras;
proto$1.erasParse = localeErasParse;
proto$1.erasConvertYear = localeErasConvertYear;
proto$1.erasAbbrRegex = erasAbbrRegex;
proto$1.erasNameRegex = erasNameRegex;
proto$1.erasNarrowRegex = erasNarrowRegex;
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex;
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;
function get$1(format2, index2, field, setter) {
  var locale2 = getLocale(), utc = createUTC().set(setter, index2);
  return locale2[field](utc, format2);
}
function listMonthsImpl(format2, index2, field) {
  if (isNumber(format2)) {
    index2 = format2;
    format2 = void 0;
  }
  format2 = format2 || "";
  if (index2 != null) {
    return get$1(format2, index2, field, "month");
  }
  var i2, out = [];
  for (i2 = 0; i2 < 12; i2++) {
    out[i2] = get$1(format2, i2, field, "month");
  }
  return out;
}
function listWeekdaysImpl(localeSorted, format2, index2, field) {
  if (typeof localeSorted === "boolean") {
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  } else {
    format2 = localeSorted;
    index2 = format2;
    localeSorted = false;
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  }
  var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i2, out = [];
  if (index2 != null) {
    return get$1(format2, (index2 + shift) % 7, field, "day");
  }
  for (i2 = 0; i2 < 7; i2++) {
    out[i2] = get$1(format2, (i2 + shift) % 7, field, "day");
  }
  return out;
}
function listMonths(format2, index2) {
  return listMonthsImpl(format2, index2, "months");
}
function listMonthsShort(format2, index2) {
  return listMonthsImpl(format2, index2, "monthsShort");
}
function listWeekdays(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
}
function listWeekdaysShort(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
}
function listWeekdaysMin(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
}
getSetGlobalLocale("en", {
  eras: [
    {
      since: "0001-01-01",
      until: Infinity,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -Infinity,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(number) {
    var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
    return number + output;
  }
});
hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
var mathAbs = Math.abs;
function abs() {
  var data12 = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data12.milliseconds = mathAbs(data12.milliseconds);
  data12.seconds = mathAbs(data12.seconds);
  data12.minutes = mathAbs(data12.minutes);
  data12.hours = mathAbs(data12.hours);
  data12.months = mathAbs(data12.months);
  data12.years = mathAbs(data12.years);
  return this;
}
function addSubtract$1(duration, input, value7, direction) {
  var other = createDuration(input, value7);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
}
function add$1(input, value7) {
  return addSubtract$1(this, input, value7, 1);
}
function subtract$1(input, value7) {
  return addSubtract$1(this, input, value7, -1);
}
function absCeil(number) {
  if (number < 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}
function bubble() {
  var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data12 = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
  if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
    milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
    days2 = 0;
    months2 = 0;
  }
  data12.milliseconds = milliseconds2 % 1e3;
  seconds2 = absFloor(milliseconds2 / 1e3);
  data12.seconds = seconds2 % 60;
  minutes2 = absFloor(seconds2 / 60);
  data12.minutes = minutes2 % 60;
  hours2 = absFloor(minutes2 / 60);
  data12.hours = hours2 % 24;
  days2 += absFloor(hours2 / 24);
  monthsFromDays = absFloor(daysToMonths(days2));
  months2 += monthsFromDays;
  days2 -= absCeil(monthsToDays(monthsFromDays));
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  data12.days = days2;
  data12.months = months2;
  data12.years = years2;
  return this;
}
function daysToMonths(days2) {
  return days2 * 4800 / 146097;
}
function monthsToDays(months2) {
  return months2 * 146097 / 4800;
}
function as(units) {
  if (!this.isValid()) {
    return NaN;
  }
  var days2, months2, milliseconds2 = this._milliseconds;
  units = normalizeUnits(units);
  if (units === "month" || units === "quarter" || units === "year") {
    days2 = this._days + milliseconds2 / 864e5;
    months2 = this._months + daysToMonths(days2);
    switch (units) {
      case "month":
        return months2;
      case "quarter":
        return months2 / 3;
      case "year":
        return months2 / 12;
    }
  } else {
    days2 = this._days + Math.round(monthsToDays(this._months));
    switch (units) {
      case "week":
        return days2 / 7 + milliseconds2 / 6048e5;
      case "day":
        return days2 + milliseconds2 / 864e5;
      case "hour":
        return days2 * 24 + milliseconds2 / 36e5;
      case "minute":
        return days2 * 1440 + milliseconds2 / 6e4;
      case "second":
        return days2 * 86400 + milliseconds2 / 1e3;
      case "millisecond":
        return Math.floor(days2 * 864e5) + milliseconds2;
      default:
        throw new Error("Unknown unit " + units);
    }
  }
}
function valueOf$1() {
  if (!this.isValid()) {
    return NaN;
  }
  return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
}
function makeAs(alias) {
  return function() {
    return this.as(alias);
  };
}
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
function clone$1() {
  return createDuration(this);
}
function get$2(units) {
  units = normalizeUnits(units);
  return this.isValid() ? this[units + "s"]() : NaN;
}
function makeGetter(name) {
  return function() {
    return this.isValid() ? this._data[name] : NaN;
  };
}
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() {
  return absFloor(this.days() / 7);
}
var round = Math.round, thresholds = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
  return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}
function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
  var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a2 = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
  if (thresholds2.w != null) {
    a2 = a2 || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
  }
  a2 = a2 || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
  a2[2] = withoutSuffix;
  a2[3] = +posNegDuration > 0;
  a2[4] = locale2;
  return substituteTimeAgo.apply(null, a2);
}
function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === void 0) {
    return round;
  }
  if (typeof roundingFunction === "function") {
    round = roundingFunction;
    return true;
  }
  return false;
}
function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === void 0) {
    return false;
  }
  if (limit === void 0) {
    return thresholds[threshold];
  }
  thresholds[threshold] = limit;
  if (threshold === "s") {
    thresholds.ss = limit - 1;
  }
  return true;
}
function humanize(argWithSuffix, argThresholds) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var withSuffix = false, th = thresholds, locale2, output;
  if (typeof argWithSuffix === "object") {
    argThresholds = argWithSuffix;
    argWithSuffix = false;
  }
  if (typeof argWithSuffix === "boolean") {
    withSuffix = argWithSuffix;
  }
  if (typeof argThresholds === "object") {
    th = Object.assign({}, thresholds, argThresholds);
    if (argThresholds.s != null && argThresholds.ss == null) {
      th.ss = argThresholds.s - 1;
    }
  }
  locale2 = this.localeData();
  output = relativeTime$1(this, !withSuffix, th, locale2);
  if (withSuffix) {
    output = locale2.pastFuture(+this, output);
  }
  return locale2.postformat(output);
}
var abs$1 = Math.abs;
function sign(x2) {
  return (x2 > 0) - (x2 < 0) || +x2;
}
function toISOString$1() {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s2, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
  if (!total) {
    return "P0D";
  }
  minutes2 = absFloor(seconds2 / 60);
  hours2 = absFloor(minutes2 / 60);
  seconds2 %= 60;
  minutes2 %= 60;
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  s2 = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
  totalSign = total < 0 ? "-" : "";
  ymSign = sign(this._months) !== sign(total) ? "-" : "";
  daysSign = sign(this._days) !== sign(total) ? "-" : "";
  hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
  return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s2 + "S" : "");
}
var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1;
proto$2.subtract = subtract$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale;
proto$2.localeData = localeData;
proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
proto$2.lang = lang;
addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");
addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", function(input, array, config) {
  config._d = new Date(parseFloat(input) * 1e3);
});
addParseToken("x", function(input, array, config) {
  config._d = new Date(toInt(input));
});
//! moment.js
hooks.version = "2.29.1";
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max;
hooks.now = now;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto;
hooks.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
function interopDefault(m2) {
  return m2.default || m2;
}
var runtimeLocale = _extends({}, defaultLocale.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends(_extends({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends({}, defaultLocale.Modal);
  }
}
var warned = {};
function warning$2(valid, message) {
}
function note(valid, message) {
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$2, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
var warning$1 = function(valid, component) {
  var message = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  warningOnce(valid, "[antdv: ".concat(component, "] ").concat(message));
};
var ANT_MARK = "internalMark";
function setMomentLocale(locale2) {
  if (locale2 && locale2.locale) {
    interopDefault(hooks).locale(locale2.locale);
  } else {
    interopDefault(hooks).locale("en");
  }
}
var LocaleProvider = defineComponent({
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: PropsTypes.string
  },
  setup: function setup3(props2, _ref) {
    var slots = _ref.slots;
    warning$1(props2.ANT_MARK__ === ANT_MARK, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var state = reactive({
      antLocale: _extends(_extends({}, props2.locale), {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide("localeData", state);
    watch(function() {
      return props2.locale;
    }, function(val) {
      state.antLocale = _extends(_extends({}, val), {
        exist: true
      });
      setMomentLocale(val);
      changeConfirmLocale(val && val.Modal);
    }, {
      immediate: true
    });
    onUnmounted(function() {
      changeConfirmLocale();
    });
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
LocaleProvider.install = function(app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};
var LocaleProvider$1 = withInstall(LocaleProvider);
var configProviderProps = {
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: {
    type: Object
  },
  autoInsertSpaceInButton: PropsTypes.looseBool,
  locale: {
    type: Object
  },
  pageHeader: {
    type: Object
  },
  componentSize: {
    type: String
  },
  direction: {
    type: String
  },
  space: {
    type: Object
  },
  virtual: PropsTypes.looseBool,
  dropdownMatchSelectWidth: PropsTypes.looseBool,
  form: {
    type: Object
  }
};
var ConfigProvider = defineComponent({
  name: "AConfigProvider",
  props: configProviderProps,
  setup: function setup4(props2, _ref) {
    var slots = _ref.slots;
    var getPrefixCls2 = function getPrefixCls3(suffixCls, customizePrefixCls) {
      var _props$prefixCls = props2.prefixCls, prefixCls = _props$prefixCls === void 0 ? "ant" : _props$prefixCls;
      if (customizePrefixCls)
        return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };
    var renderEmptyComponent = function renderEmptyComponent2(name) {
      var renderEmpty$1 = props2.renderEmpty || slots.renderEmpty || renderEmpty;
      return renderEmpty$1(name);
    };
    var getPrefixClsWrapper = function getPrefixClsWrapper2(suffixCls, customizePrefixCls) {
      var prefixCls = props2.prefixCls;
      if (customizePrefixCls)
        return customizePrefixCls;
      var mergedPrefixCls = prefixCls || getPrefixCls2("");
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
    var configProvider = reactive(_extends(_extends({}, props2), {
      getPrefixCls: getPrefixClsWrapper,
      renderEmpty: renderEmptyComponent
    }));
    Object.keys(props2).forEach(function(key) {
      watch(function() {
        return props2[key];
      }, function() {
        configProvider[key] = props2[key];
      });
    });
    provide("configProvider", configProvider);
    var renderProvider = function renderProvider2(legacyLocale) {
      var _a;
      return createVNode(LocaleProvider$1, {
        "locale": props2.locale || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: function _default2() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
    return function() {
      return createVNode(LocaleReceiver, {
        "children": function children(_2, __, legacyLocale) {
          return renderProvider(legacyLocale);
        }
      }, null);
    };
  }
});
var defaultConfigProvider = reactive({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : "ant";
  },
  renderEmpty,
  direction: "ltr"
});
withInstall(ConfigProvider);
var useConfigInject = function(name, props2) {
  var configProvider = inject("configProvider", defaultConfigProvider);
  var prefixCls = computed(function() {
    return configProvider.getPrefixCls(name, props2.prefixCls);
  });
  var direction = computed(function() {
    return configProvider.direction;
  });
  var autoInsertSpaceInButton = computed(function() {
    return configProvider.autoInsertSpaceInButton;
  });
  var renderEmpty2 = computed(function() {
    return configProvider.renderEmpty;
  });
  var space = computed(function() {
    return configProvider.space;
  });
  var pageHeader = computed(function() {
    return configProvider.pageHeader;
  });
  var form = computed(function() {
    return configProvider.form;
  });
  var size = computed(function() {
    return props2.size || configProvider.componentSize;
  });
  var getTargetContainer = computed(function() {
    return props2.getTargetContainer;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty: renderEmpty2
  };
};
var id = 0;
var ids = {};
function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;
  function internalCallback() {
    restFrames -= 1;
    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = requestAnimationFrame(internalCallback);
    }
  }
  ids[myId] = requestAnimationFrame(internalCallback);
  return myId;
}
wrapperRaf.cancel = function cancel(pid) {
  if (pid === void 0)
    return;
  cancelAnimationFrame(ids[pid]);
  delete ids[pid];
};
wrapperRaf.ids = ids;
var TransBtn = function TransBtn2(props2, _ref) {
  var slots = _ref.slots;
  var _a;
  var className = props2.class, customizeIcon = props2.customizeIcon, customizeIconProps = props2.customizeIconProps, _onMousedown = props2.onMousedown, onClick4 = props2.onClick;
  var icon;
  if (typeof customizeIcon === "function") {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return createVNode("span", {
    "class": className,
    "onMousedown": function onMousedown2(event) {
      event.preventDefault();
      if (_onMousedown) {
        _onMousedown(event);
      }
    },
    "style": {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    "unselectable": "on",
    "onClick": onClick4,
    "aria-hidden": true
  }, [icon !== void 0 ? icon : createVNode("span", {
    "class": className.split(/\s+/).map(function(cls) {
      return "".concat(cls, "-icon");
    })
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
};
TransBtn.inheritAttrs = false;
TransBtn.displayName = "TransBtn";
TransBtn.props = {
  class: PropsTypes.string,
  customizeIcon: PropsTypes.any,
  customizeIconProps: PropsTypes.any,
  onMousedown: PropsTypes.func,
  onClick: PropsTypes.func
};
var TransBtn$1 = TransBtn;
var KeyCode = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
    var keyCode = e2.keyCode;
    if (e2.altKey && !e2.ctrlKey || e2.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var KeyCode$1 = KeyCode;
var attributes = "accept acceptcharset accesskey action allowfullscreen allowtransparency\nalt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge\ncharset checked classid classname colspan cols content contenteditable contextmenu\ncontrols coords crossorigin data datetime default defer dir disabled download draggable\nenctype form formaction formenctype formmethod formnovalidate formtarget frameborder\nheaders height hidden high href hreflang htmlfor httpequiv icon id inputmode integrity\nis keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media\nmediagroup method min minlength multiple muted name novalidate nonce open\noptimum pattern placeholder poster preload radiogroup readonly rel required\nreversed role rowspan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellcheck src srcdoc srclang srcset start step style\nsummary tabindex target title type usemap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown\n    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick\n    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown\n    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel\n    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough\n    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata\n    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match$1(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props2) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _extends({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props2).forEach(function(key) {
    if (mergedConfig.aria && (key === "role" || match$1(key, ariaPrefix)) || mergedConfig.data && match$1(key, dataPrefix) || mergedConfig.attr && (propList.includes(key) || propList.includes(key.toLowerCase()))) {
      attrs[key] = props2[key];
    }
  });
  return attrs;
}
function createRef() {
  var func = function func2(node) {
    func2.current = node;
  };
  return func;
}
var Filter = function Filter2(_ref, _ref2) {
  var height = _ref.height, offset3 = _ref.offset, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize;
  var slots = _ref2.slots;
  var _a;
  var outerStyle = {};
  var innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offset3 !== void 0) {
    outerStyle = {
      height: "".concat(height, "px"),
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _extends(_extends({}, innerStyle), {
      transform: "translateY(".concat(offset3, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    });
  }
  return createVNode("div", {
    "style": outerStyle
  }, [createVNode(ResizeObserver, {
    "onResize": function onResize(_ref3) {
      var offsetHeight = _ref3.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: function _default2() {
      return [createVNode("div", {
        "style": innerStyle,
        "class": classNames(_defineProperty$e({}, "".concat(prefixCls, "-holder-inner"), prefixCls))
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])];
    }
  })]);
};
Filter.displayName = "Filter";
Filter.inheritAttrs = false;
Filter.props = {
  prefixCls: String,
  height: Number,
  offset: Number,
  onInnerResize: Function
};
var Filler = Filter;
var Item$1 = function Item(_ref, _ref2) {
  var setRef = _ref.setRef;
  var slots = _ref2.slots;
  var _a;
  var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};
Item$1.props = {
  setRef: {
    type: Function,
    default: function _default() {
    }
  }
};
var Item$2 = Item$1;
var MIN_SIZE = 20;
function getPageY(e2) {
  return "touches" in e2 ? e2.touches[0].pageY : e2.pageY;
}
var ScrollBar = defineComponent({
  name: "ScrollBar",
  inheritAttrs: false,
  props: {
    prefixCls: PropsTypes.string,
    scrollTop: PropsTypes.number,
    scrollHeight: PropsTypes.number,
    height: PropsTypes.number,
    count: PropsTypes.number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function setup5() {
    return {
      moveRaf: null,
      scrollbarRef: createRef(),
      thumbRef: createRef(),
      visibleTimeout: null,
      state: reactive({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted: function mounted() {
    this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive$1 ? {
      passive: false
    } : false);
    this.thumbRef.current.addEventListener("touchstart", this.onMouseDown, supportsPassive$1 ? {
      passive: false
    } : false);
  },
  beforeUnmount: function beforeUnmount() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function delayHidden() {
      var _this = this;
      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(function() {
        _this.state.visible = false;
      }, 2e3);
    },
    onScrollbarTouchStart: function onScrollbarTouchStart(e2) {
      e2.preventDefault();
    },
    onContainerMouseDown: function onContainerMouseDown(e2) {
      e2.stopPropagation();
      e2.preventDefault();
    },
    patchEvents: function patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
      this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents: function removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
      this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchend", this.onMouseUp);
      wrapperRaf.cancel(this.moveRaf);
    },
    onMouseDown: function onMouseDown(e2) {
      var onStartMove = this.$props.onStartMove;
      _extends(this.state, {
        dragging: true,
        pageY: getPageY(e2),
        startTop: this.getTop()
      });
      onStartMove();
      this.patchEvents();
      e2.stopPropagation();
      e2.preventDefault();
    },
    onMouseMove: function onMouseMove(e2) {
      var _this$state = this.state, dragging = _this$state.dragging, pageY = _this$state.pageY, startTop = _this$state.startTop;
      var onScroll = this.$props.onScroll;
      wrapperRaf.cancel(this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e2) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = this.getEnableScrollRange();
        var enableHeightRange = this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = wrapperRaf(function() {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp: function onMouseUp() {
      var onStopMove = this.$props.onStopMove;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    getSpinHeight: function getSpinHeight() {
      var _this$$props = this.$props, height = _this$$props.height, count = _this$$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange: function getEnableScrollRange() {
      var _this$$props2 = this.$props, scrollHeight = _this$$props2.scrollHeight, height = _this$$props2.height;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange: function getEnableHeightRange() {
      var height = this.$props.height;
      var spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop: function getTop() {
      var scrollTop = this.$props.scrollTop;
      var enableScrollRange = this.getEnableScrollRange();
      var enableHeightRange = this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    showScroll: function showScroll() {
      var _this$$props3 = this.$props, height = _this$$props3.height, scrollHeight = _this$$props3.scrollHeight;
      return scrollHeight > height;
    }
  },
  render: function render() {
    var _this$state2 = this.state, dragging = _this$state2.dragging, visible2 = _this$state2.visible;
    var prefixCls = this.$props.prefixCls;
    var spinHeight = this.getSpinHeight() + "px";
    var top = this.getTop() + "px";
    var canScroll = this.showScroll();
    var mergedVisible = canScroll && visible2;
    return createVNode("div", {
      "ref": this.scrollbarRef,
      "class": classNames("".concat(prefixCls, "-scrollbar"), _defineProperty$e({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
      "style": {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: mergedVisible ? void 0 : "none"
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [createVNode("div", {
      "ref": this.thumbRef,
      "class": classNames("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty$e({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
      "style": {
        width: "100%",
        height: spinHeight,
        top,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});
function useHeights(getKey2, onItemAdd, onItemRemove) {
  var instance = new Map();
  var heights = reactive({});
  var heightUpdateId = 0;
  function collectHeight() {
    heightUpdateId += 1;
    var currentId = heightUpdateId;
    Promise.resolve().then(function() {
      if (currentId !== heightUpdateId)
        return;
      instance.forEach(function(element, key) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;
          if (heights[key] !== offsetHeight) {
            heights[key] = element.offsetHeight;
          }
        }
      });
    });
  }
  function setInstance(item, ins) {
    var key = getKey2(item);
    var origin = instance.get(key);
    if (ins) {
      instance.set(key, ins);
      collectHeight();
    } else {
      instance.delete(key);
    }
    if (!origin !== !ins) {
      if (ins) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  return [setInstance, collectHeight, heights];
}
function useScrollTo(containerRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  var scroll = null;
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scroll);
    var data12 = mergedData.value;
    var itemHeight = props2.itemHeight;
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && _typeof$1(arg) === "object") {
      var index2;
      var align = arg.align;
      if ("index" in arg) {
        index2 = arg.index;
      } else {
        index2 = data12.findIndex(function(item) {
          return getKey2(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset, offset3 = _arg$offset === void 0 ? 0 : _arg$offset;
      var syncScroll = function syncScroll2(times, targetAlign) {
        if (times < 0 || !containerRef.value)
          return;
        var height = containerRef.value.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        if (height) {
          var mergedAlign = targetAlign || align;
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data12.length, index2);
          for (var i2 = 0; i2 <= maxLen; i2 += 1) {
            var key = getKey2(data12[i2]);
            itemTop = stackTop;
            var cacheHeight = heights[key];
            itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i2 === index2 && cacheHeight === void 0) {
              needCollectHeight = true;
            }
          }
          var targetTop = null;
          switch (mergedAlign) {
            case "top":
              targetTop = itemTop - offset3;
              break;
            case "bottom":
              targetTop = itemBottom - height + offset3;
              break;
            default: {
              var scrollTop = containerRef.value.scrollTop;
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = "top";
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = "bottom";
              }
            }
          }
          if (targetTop !== null && targetTop !== containerRef.value.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        scroll = wrapperRaf(function() {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll2(times - 1, newTargetAlign);
        });
      };
      syncScroll(3);
    }
  };
}
var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof$1(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
var isFF$1 = isFF;
var useOriginScroll = function(isScrollAtTop, isScrollAtBottom) {
  var lock = false;
  var lockTimeout = null;
  function lockScroll() {
    clearTimeout(lockTimeout);
    lock = true;
    lockTimeout = setTimeout(function() {
      lock = false;
    }, 50);
  }
  return function(deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var originScroll = deltaY < 0 && isScrollAtTop.value || deltaY > 0 && isScrollAtBottom.value;
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeout);
      lock = false;
    } else if (!originScroll || lock) {
      lockScroll();
    }
    return !lock && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = 0;
  var nextFrame = null;
  var wheelValue = null;
  var isMouseScroll = false;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual.value)
      return;
    wrapperRaf.cancel(nextFrame);
    var deltaY = event.deltaY;
    offsetRef += deltaY;
    wheelValue = deltaY;
    if (originScroll(deltaY))
      return;
    if (!isFF$1) {
      event.preventDefault();
    }
    nextFrame = wrapperRaf(function() {
      var patchMultiple = isMouseScroll ? 10 : 1;
      onWheelDelta(offsetRef * patchMultiple);
      offsetRef = 0;
    });
  }
  function onFireFoxScroll(event) {
    if (!inVirtual.value)
      return;
    isMouseScroll = event.detail === wheelValue;
  }
  return [onWheel, onFireFoxScroll];
}
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touched = false;
  var touchY = 0;
  var element = null;
  var interval = null;
  var cleanUpEvents = function cleanUpEvents2() {
    if (element) {
      element.removeEventListener("touchmove", onTouchMove, supportsPassive$1 ? {
        passive: false
      } : false);
      element.removeEventListener("touchend", onTouchEnd);
    }
  };
  var onTouchMove = function onTouchMove2(e2) {
    if (touched) {
      var currentY = Math.ceil(e2.touches[0].pageY);
      var offsetY = touchY - currentY;
      touchY = currentY;
      if (callback(offsetY)) {
        e2.preventDefault();
      }
      clearInterval(interval);
      interval = setInterval(function() {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(interval);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    touched = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart2(e2) {
    cleanUpEvents();
    if (e2.touches.length === 1 && !touched) {
      touched = true;
      touchY = Math.ceil(e2.touches[0].pageY);
      element = e2.target;
      element.addEventListener("touchmove", onTouchMove, supportsPassive$1 ? {
        passive: false
      } : false);
      element.addEventListener("touchend", onTouchEnd);
    }
  };
  onMounted(function() {
    watch(inVirtual, function(val) {
      listRef.value.removeEventListener("touchstart", onTouchStart, supportsPassive$1 ? {
        passive: false
      } : false);
      cleanUpEvents();
      clearInterval(interval);
      if (val) {
        listRef.value.addEventListener("touchstart", onTouchStart, supportsPassive$1 ? {
          passive: false
        } : false);
      }
    }, {
      immediate: true
    });
  });
}
var __rest$e = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey2 = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index2) {
    var eleIndex = startIndex + index2;
    var node = renderFunc(item, eleIndex, {});
    var key = getKey2(item);
    return createVNode(Item$2, {
      "key": key,
      "setRef": function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, {
      default: function _default2() {
        return [node];
      }
    });
  });
}
var List = defineComponent({
  name: "List",
  inheritAttrs: false,
  props: {
    prefixCls: PropsTypes.string,
    data: PropsTypes.array,
    height: PropsTypes.number,
    itemHeight: PropsTypes.number,
    fullHeight: PropsTypes.looseBool,
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },
    virtual: PropsTypes.looseBool,
    children: PropsTypes.func,
    onScroll: PropsTypes.func,
    onMousedown: PropsTypes.func,
    onMouseenter: PropsTypes.func
  },
  setup: function setup6(props2) {
    var useVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, virtual = props2.virtual;
      return !!(virtual !== false && height && itemHeight);
    });
    var inVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, data12 = props2.data;
      return useVirtual.value && data12 && itemHeight * data12.length > height;
    });
    var state = reactive({
      scrollTop: 0,
      scrollMoving: false
    });
    var mergedData = computed(function() {
      return props2.data || EMPTY_DATA;
    });
    var componentRef = ref();
    var fillerInnerRef = ref();
    var scrollBarRef = ref();
    var getKey2 = function getKey3(item) {
      if (typeof props2.itemKey === "function") {
        return props2.itemKey(item);
      }
      return item === null || item === void 0 ? void 0 : item[props2.itemKey];
    };
    var sharedConfig = {
      getKey: getKey2
    };
    function syncScrollTop(newTop) {
      var value7;
      if (typeof newTop === "function") {
        value7 = newTop(state.scrollTop);
      } else {
        value7 = newTop;
      }
      var alignedTop = keepInRange(value7);
      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }
      state.scrollTop = alignedTop;
    }
    var _useHeights = useHeights(getKey2, null, null), _useHeights2 = _slicedToArray$2(_useHeights, 3), setInstance = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2];
    var calRes = ref({});
    watch([inVirtual, useVirtual, function() {
      return state.scrollTop;
    }, mergedData, heights, function() {
      return props2.height;
    }], function() {
      nextTick(function() {
        var _a;
        if (!useVirtual.value) {
          calRes.value = {
            scrollHeight: void 0,
            start: 0,
            end: mergedData.value.length - 1,
            offset: void 0
          };
          return;
        }
        if (!inVirtual.value) {
          calRes.value = {
            scrollHeight: ((_a = fillerInnerRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0,
            start: 0,
            end: mergedData.value.length - 1,
            offset: void 0
          };
          return;
        }
        var itemTop = 0;
        var startIndex;
        var startOffset;
        var endIndex;
        var dataLen = mergedData.value.length;
        var data12 = mergedData.value;
        for (var i2 = 0; i2 < dataLen; i2 += 1) {
          var item = data12[i2];
          var key = getKey2(item);
          var cacheHeight = heights[key];
          var currentItemBottom = itemTop + (cacheHeight === void 0 ? props2.itemHeight : cacheHeight);
          if (currentItemBottom >= state.scrollTop && startIndex === void 0) {
            startIndex = i2;
            startOffset = itemTop;
          }
          if (currentItemBottom > state.scrollTop + props2.height && endIndex === void 0) {
            endIndex = i2;
          }
          itemTop = currentItemBottom;
        }
        if (startIndex === void 0) {
          startIndex = 0;
          startOffset = 0;
        }
        if (endIndex === void 0) {
          endIndex = dataLen - 1;
        }
        endIndex = Math.min(endIndex + 1, dataLen);
        calRes.value = {
          scrollHeight: itemTop,
          start: startIndex,
          end: endIndex,
          offset: startOffset
        };
      });
    }, {
      immediate: true,
      flush: "post"
    });
    var maxScrollHeight = computed(function() {
      return calRes.value.scrollHeight - props2.height;
    });
    function keepInRange(newScrollTop) {
      var newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    var isScrollAtTop = computed(function() {
      return state.scrollTop <= 0;
    });
    var isScrollAtBottom = computed(function() {
      return state.scrollTop >= maxScrollHeight.value;
    });
    var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
    function onScrollBar(newScrollTop) {
      var newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    function onFallbackScroll(e2) {
      var _a;
      var newScrollTop = e2.currentTarget.scrollTop;
      if (Math.abs(newScrollTop - state.scrollTop) >= 1) {
        syncScrollTop(newScrollTop);
      }
      (_a = props2.onScroll) === null || _a === void 0 ? void 0 : _a.call(props2, e2);
    }
    var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function(offsetY) {
      syncScrollTop(function(top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }), _useFrameWheel2 = _slicedToArray$2(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
    useMobileTouchMove(useVirtual, componentRef, function(deltaY, smoothOffset) {
      if (originScroll(deltaY, smoothOffset)) {
        return false;
      }
      onRawWheel({
        preventDefault: function preventDefault() {
        },
        deltaY
      });
      return true;
    });
    function onMozMousePixelScroll(e2) {
      if (useVirtual.value) {
        e2.preventDefault();
      }
    }
    var removeEventListener2 = function removeEventListener3() {
      if (componentRef.value) {
        componentRef.value.removeEventListener("wheel", onRawWheel, supportsPassive$1 ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener("DOMMouseScroll", onFireFoxScroll);
        componentRef.value.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
      }
    };
    watchEffect(function() {
      nextTick(function() {
        if (componentRef.value) {
          removeEventListener2();
          componentRef.value.addEventListener("wheel", onRawWheel, supportsPassive$1 ? {
            passive: false
          } : false);
          componentRef.value.addEventListener("DOMMouseScroll", onFireFoxScroll);
          componentRef.value.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
        }
      });
    });
    onBeforeUnmount(function() {
      removeEventListener2();
    });
    var scrollTo = useScrollTo(componentRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, function() {
      var _a;
      (_a = scrollBarRef.value) === null || _a === void 0 ? void 0 : _a.delayHidden();
    });
    var componentStyle = computed(function() {
      var cs = null;
      if (props2.height) {
        cs = _extends(_defineProperty$e({}, props2.fullHeight ? "height" : "maxHeight", props2.height + "px"), ScrollStyle);
        if (useVirtual.value) {
          cs.overflowY = "hidden";
          if (state.scrollMoving) {
            cs.pointerEvents = "none";
          }
        }
      }
      return cs;
    });
    return {
      state,
      mergedData,
      componentStyle,
      scrollTo,
      onFallbackScroll,
      onScrollBar,
      componentRef,
      useVirtual,
      calRes,
      collectHeight,
      setInstance,
      sharedConfig,
      scrollBarRef,
      fillerInnerRef
    };
  },
  render: function render2() {
    var _this = this;
    var _a = _extends(_extends({}, this.$props), this.$attrs), _a$prefixCls = _a.prefixCls, prefixCls = _a$prefixCls === void 0 ? "rc-virtual-list" : _a$prefixCls, height = _a.height;
    _a.itemHeight;
    _a.fullHeight;
    _a.data;
    _a.itemKey;
    _a.virtual;
    var _a$component = _a.component, Component = _a$component === void 0 ? "div" : _a$component;
    _a.onScroll;
    var children = _a.children, style = _a.style, className = _a.class, restProps = __rest$e(_a, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]);
    var mergedClassName = classNames(prefixCls, className);
    var scrollTop = this.state.scrollTop;
    var _this$calRes = this.calRes, scrollHeight = _this$calRes.scrollHeight, offset3 = _this$calRes.offset, start = _this$calRes.start, end = _this$calRes.end;
    var componentStyle = this.componentStyle, onFallbackScroll = this.onFallbackScroll, onScrollBar = this.onScrollBar, useVirtual = this.useVirtual, collectHeight = this.collectHeight, sharedConfig = this.sharedConfig, setInstance = this.setInstance, mergedData = this.mergedData;
    var listChildren = renderChildren(mergedData, start, end, setInstance, children, sharedConfig);
    return createVNode("div", _objectSpread2$1({
      "style": _extends(_extends({}, style), {
        position: "relative"
      }),
      "class": mergedClassName
    }, restProps), [createVNode(Component, {
      "class": "".concat(prefixCls, "-holder"),
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll
    }, {
      default: function _default2() {
        return [createVNode(Filler, {
          "prefixCls": prefixCls,
          "height": scrollHeight,
          "offset": offset3,
          "onInnerResize": collectHeight,
          "ref": "fillerInnerRef"
        }, {
          default: function _default3() {
            return [listChildren];
          }
        })];
      }
    }), useVirtual && createVNode(ScrollBar, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": function onStartMove() {
        _this.state.scrollMoving = true;
      },
      "onStopMove": function onStopMove() {
        _this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
var List$1 = List;
function useMemo(getValue2, condition, shouldUpdate) {
  var cacheRef = ref(getValue2());
  watch(condition, function(next, pre) {
    if (shouldUpdate) {
      if (shouldUpdate(next, pre)) {
        cacheRef.value = getValue2();
      }
    } else {
      cacheRef.value = getValue2();
    }
  });
  return cacheRef;
}
var __rest$d = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var OptionListProps = {
  prefixCls: PropsTypes.string,
  id: PropsTypes.string,
  options: PropsTypes.array,
  flattenOptions: PropsTypes.array,
  height: PropsTypes.number,
  itemHeight: PropsTypes.number,
  values: PropsTypes.any,
  multiple: PropsTypes.looseBool,
  open: PropsTypes.looseBool,
  defaultActiveFirstOption: PropsTypes.looseBool,
  notFoundContent: PropsTypes.any,
  menuItemSelectedIcon: PropsTypes.any,
  childrenAsData: PropsTypes.looseBool,
  searchValue: PropsTypes.string,
  virtual: PropsTypes.looseBool,
  onSelect: PropsTypes.func,
  onToggleOpen: {
    type: Function
  },
  onActiveValue: PropsTypes.func,
  onScroll: PropsTypes.func,
  onMouseenter: PropsTypes.func
};
var OptionList = defineComponent({
  name: "OptionList",
  inheritAttrs: false,
  slots: ["option"],
  setup: function setup7(props2) {
    var itemPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-item");
    });
    var memoFlattenOptions = useMemo(function() {
      return props2.flattenOptions;
    }, [function() {
      return props2.open;
    }, function() {
      return props2.flattenOptions;
    }], function(next) {
      return next[0];
    });
    var listRef = createRef();
    var onListMouseDown = function onListMouseDown2(event) {
      event.preventDefault();
    };
    var scrollIntoView = function scrollIntoView2(index2) {
      if (listRef.current) {
        listRef.current.scrollTo({
          index: index2
        });
      }
    };
    var getEnabledActiveIndex = function getEnabledActiveIndex2(index2) {
      var offset3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      var len = memoFlattenOptions.value.length;
      for (var i2 = 0; i2 < len; i2 += 1) {
        var current = (index2 + i2 * offset3 + len) % len;
        var _memoFlattenOptions$v = memoFlattenOptions.value[current], group = _memoFlattenOptions$v.group, data12 = _memoFlattenOptions$v.data;
        if (!group && !data12.disabled) {
          return current;
        }
      }
      return -1;
    };
    var state = reactive({
      activeIndex: getEnabledActiveIndex(0)
    });
    var setActive = function setActive2(index2) {
      var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      state.activeIndex = index2;
      var info = {
        source: fromKeyboard ? "keyboard" : "mouse"
      };
      var flattenItem = memoFlattenOptions.value[index2];
      if (!flattenItem) {
        props2.onActiveValue(null, -1, info);
        return;
      }
      props2.onActiveValue(flattenItem.data.value, index2, info);
    };
    watch([function() {
      return memoFlattenOptions.value.length;
    }, function() {
      return props2.searchValue;
    }], function() {
      setActive(props2.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    });
    watch(function() {
      return props2.open;
    }, function() {
      if (!props2.multiple && props2.open && props2.values.size === 1) {
        var value7 = Array.from(props2.values)[0];
        var index2 = memoFlattenOptions.value.findIndex(function(_ref) {
          var data12 = _ref.data;
          return data12.value === value7;
        });
        setActive(index2);
        nextTick(function() {
          scrollIntoView(index2);
        });
      }
      if (props2.open) {
        nextTick(function() {
          var _a;
          (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(void 0);
        });
      }
    }, {
      immediate: true,
      flush: "post"
    });
    var onSelectValue = function onSelectValue2(value7) {
      if (value7 !== void 0) {
        props2.onSelect(value7, {
          selected: !props2.values.has(value7)
        });
      }
      if (!props2.multiple) {
        props2.onToggleOpen(false);
      }
    };
    function renderItem(index2) {
      var item = memoFlattenOptions.value[index2];
      if (!item)
        return null;
      var itemData = item.data || {};
      var value7 = itemData.value, label = itemData.label, children = itemData.children;
      var attrs = pickAttrs(itemData, true);
      var mergedLabel = props2.childrenAsData ? children : label;
      return item ? createVNode("div", _objectSpread2$1(_objectSpread2$1({
        "aria-label": typeof mergedLabel === "string" ? mergedLabel : void 0
      }, attrs), {}, {
        "key": index2,
        "role": "option",
        "id": "".concat(props2.id, "_list_").concat(index2),
        "aria-selected": props2.values.has(value7)
      }), [value7]) : null;
    }
    return {
      memoFlattenOptions,
      renderItem,
      listRef,
      state,
      onListMouseDown,
      itemPrefixCls,
      setActive,
      onSelectValue,
      onKeydown: function onKeydown(event) {
        var which = event.which;
        switch (which) {
          case KeyCode$1.UP:
          case KeyCode$1.DOWN: {
            var offset3 = 0;
            if (which === KeyCode$1.UP) {
              offset3 = -1;
            } else if (which === KeyCode$1.DOWN) {
              offset3 = 1;
            }
            if (offset3 !== 0) {
              var nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset3, offset3);
              scrollIntoView(nextActiveIndex);
              setActive(nextActiveIndex, true);
            }
            break;
          }
          case KeyCode$1.ENTER: {
            var item = memoFlattenOptions.value[state.activeIndex];
            if (item && !item.data.disabled) {
              onSelectValue(item.data.value);
            } else {
              onSelectValue(void 0);
            }
            if (props2.open) {
              event.preventDefault();
            }
            break;
          }
          case KeyCode$1.ESC: {
            props2.onToggleOpen(false);
            if (props2.open) {
              event.stopPropagation();
            }
          }
        }
      },
      onKeyup: function onKeyup() {
      },
      scrollTo: function scrollTo(index2) {
        scrollIntoView(index2);
      }
    };
  },
  render: function render3() {
    var renderItem = this.renderItem, listRef = this.listRef, onListMouseDown = this.onListMouseDown, itemPrefixCls = this.itemPrefixCls, setActive = this.setActive, onSelectValue = this.onSelectValue, memoFlattenOptions = this.memoFlattenOptions, $slots = this.$slots;
    var _this$$props = this.$props, id2 = _this$$props.id, childrenAsData = _this$$props.childrenAsData, values = _this$$props.values, height = _this$$props.height, itemHeight = _this$$props.itemHeight, menuItemSelectedIcon = _this$$props.menuItemSelectedIcon, notFoundContent = _this$$props.notFoundContent, virtual = _this$$props.virtual, onScroll = _this$$props.onScroll, onMouseenter2 = _this$$props.onMouseenter;
    var renderOption = $slots.option;
    var activeIndex = this.state.activeIndex;
    if (memoFlattenOptions.length === 0) {
      return createVNode("div", {
        "role": "listbox",
        "id": "".concat(id2, "_list"),
        "class": "".concat(itemPrefixCls, "-empty"),
        "onMousedown": onListMouseDown
      }, [notFoundContent]);
    }
    return createVNode(Fragment, null, [createVNode("div", {
      "role": "listbox",
      "id": "".concat(id2, "_list"),
      "style": {
        height: 0,
        width: 0,
        overflow: "hidden"
      }
    }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), createVNode(List$1, {
      "itemKey": "key",
      "ref": listRef,
      "data": memoFlattenOptions,
      "height": height,
      "itemHeight": itemHeight,
      "fullHeight": false,
      "onMousedown": onListMouseDown,
      "onScroll": onScroll,
      "virtual": virtual,
      "onMouseenter": onMouseenter2,
      "children": function children(_ref2, itemIndex) {
        var _classNames;
        var group = _ref2.group, groupOption = _ref2.groupOption, data12 = _ref2.data;
        var label = data12.label, key = data12.key;
        if (group) {
          return createVNode("div", {
            "class": classNames(itemPrefixCls, "".concat(itemPrefixCls, "-group"))
          }, [renderOption ? renderOption(data12) : label !== void 0 ? label : key]);
        }
        var disabled = data12.disabled, value7 = data12.value, title = data12.title, children2 = data12.children, style = data12.style, cls = data12.class, className = data12.className, otherProps = __rest$d(data12, ["disabled", "value", "title", "children", "style", "class", "className"]);
        var selected = values.has(value7);
        var optionPrefixCls = "".concat(itemPrefixCls, "-option");
        var optionClassName = classNames(itemPrefixCls, optionPrefixCls, cls, className, (_classNames = {}, _defineProperty$e(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty$e(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty$e(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty$e(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
        var mergedLabel = childrenAsData ? children2 : label;
        var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
        var content = mergedLabel || value7;
        var optionTitle = typeof content === "string" || typeof content === "number" ? content.toString() : void 0;
        if (title !== void 0) {
          optionTitle = title;
        }
        return createVNode("div", _objectSpread2$1(_objectSpread2$1({}, otherProps), {}, {
          "aria-selected": selected,
          "class": optionClassName,
          "title": optionTitle,
          "onMousemove": function onMousemove(e2) {
            if (otherProps.onMousemove) {
              otherProps.onMousemove(e2);
            }
            if (activeIndex === itemIndex || disabled) {
              return;
            }
            setActive(itemIndex);
          },
          "onClick": function onClick4(e2) {
            if (!disabled) {
              onSelectValue(value7);
            }
            if (otherProps.onClick) {
              otherProps.onClick(e2);
            }
          },
          "style": style
        }), [createVNode("div", {
          "class": "".concat(optionPrefixCls, "-content")
        }, [renderOption ? renderOption(data12) : content]), isValidElement(menuItemSelectedIcon) || selected, iconVisible && createVNode(TransBtn$1, {
          "class": "".concat(itemPrefixCls, "-option-state"),
          "customizeIcon": menuItemSelectedIcon,
          "customizeIconProps": {
            isSelected: selected
          }
        }, {
          default: function _default2() {
            return [selected ? "\u2713" : null];
          }
        })]);
      }
    }, null)]);
  }
});
OptionList.props = OptionListProps;
var SelectOptionList = OptionList;
var Option = function Option2() {
  return null;
};
Option.isSelectOption = true;
Option.displayName = "ASelectOption";
var Option$1 = Option;
var OptGroup = function OptGroup2() {
  return null;
};
OptGroup.isSelectOptGroup = true;
OptGroup.displayName = "ASelectOptGroup";
var OptGroup$1 = OptGroup;
var __rest$c = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
function convertNodeToOption(node) {
  var _a = node, key = _a.key, children = _a.children, _b = _a.props, value7 = _b.value, disabled = _b.disabled, restProps = __rest$c(_b, ["value", "disabled"]);
  var child = children && children.default ? children.default() : void 0;
  return _extends({
    key,
    value: value7 !== void 0 ? value7 : key,
    children: child,
    disabled: disabled || disabled === ""
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dd = flattenChildren(nodes).map(function(node, index2) {
    var _a;
    if (!isValidElement(node) || !node.type) {
      return null;
    }
    var isSelectOptGroup = node.type.isSelectOptGroup, key = node.key, children = node.children, props2 = node.props;
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    var child = children && children.default ? children.default() : void 0;
    var label = (props2 === null || props2 === void 0 ? void 0 : props2.label) || ((_a = children.label) === null || _a === void 0 ? void 0 : _a.call(children)) || key;
    return _extends(_extends({
      key: "__RC_SELECT_GRP__".concat(key === null ? index2 : String(key), "__")
    }, props2), {
      label,
      options: convertChildrenToData(child || [])
    });
  }).filter(function(data12) {
    return data12;
  });
  return dd;
}
function _toArray(arr) {
  return _arrayWithHoles$2(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableRest$2();
}
function toArray(value7) {
  if (Array.isArray(value7)) {
    return value7;
  }
  return value7 !== void 0 ? [value7] : [];
}
function toInnerValue(value7, _ref) {
  var labelInValue = _ref.labelInValue, combobox = _ref.combobox;
  var valueMap = new Map();
  if (value7 === void 0 || value7 === "" && combobox) {
    return [[], valueMap];
  }
  var values = Array.isArray(value7) ? value7 : [value7];
  var rawValues = values;
  if (labelInValue) {
    rawValues = values.filter(function(item) {
      return item !== null;
    }).map(function(itemValue) {
      var key = itemValue.key, val = itemValue.value;
      var finalVal = val !== void 0 ? val : key;
      valueMap.set(finalVal, itemValue);
      return finalVal;
    });
  }
  return [rawValues, valueMap];
}
function toOuterValues(valueList, _ref2) {
  var optionLabelProp = _ref2.optionLabelProp, labelInValue = _ref2.labelInValue, prevValueMap = _ref2.prevValueMap, options = _ref2.options, getLabeledValue3 = _ref2.getLabeledValue;
  var values = valueList;
  if (labelInValue) {
    values = values.map(function(val) {
      return getLabeledValue3(val, {
        options,
        prevValueMap,
        labelInValue,
        optionLabelProp
      });
    });
  }
  return values;
}
function removeLastEnabledValue(measureValues, values) {
  var newValues = _toConsumableArray(values);
  var removeIndex;
  for (removeIndex = measureValues.length - 1; removeIndex >= 0; removeIndex -= 1) {
    if (!measureValues[removeIndex].disabled) {
      break;
    }
  }
  var removedValue = null;
  if (removeIndex !== -1) {
    removedValue = newValues[removeIndex];
    newValues.splice(removeIndex, 1);
  }
  return {
    values: newValues,
    removedValue
  };
}
var isClient = typeof window !== "undefined" && window.document && window.document.documentElement;
var isBrowserClient = isClient;
var uuid = 0;
function getUUID() {
  var retId;
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function getKey(data12, index2) {
  var key = data12.key;
  var value7;
  if ("value" in data12) {
    value7 = data12.value;
  }
  if (key !== null && key !== void 0) {
    return key;
  }
  if (value7 !== void 0) {
    return value7;
  }
  return "rc-index-key-".concat(index2);
}
function flattenOptions(options) {
  var flattenList = [];
  function dig(list, isGroupOption) {
    list.forEach(function(data12) {
      if (isGroupOption || !("options" in data12)) {
        flattenList.push({
          key: getKey(data12, flattenList.length),
          groupOption: isGroupOption,
          data: data12
        });
      } else {
        flattenList.push({
          key: getKey(data12, flattenList.length),
          group: true,
          data: data12
        });
        dig(data12.options, true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}
function injectPropsWithOption(option) {
  var newOption = _extends({}, option);
  if (!("props" in newOption)) {
    Object.defineProperty(newOption, "props", {
      get: function get2() {
        return newOption;
      }
    });
  }
  return newOption;
}
function findValueOption(values, options) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$prevValueOptions = _ref.prevValueOptions, prevValueOptions = _ref$prevValueOptions === void 0 ? [] : _ref$prevValueOptions;
  var optionMap = new Map();
  options.forEach(function(flattenItem) {
    if (!flattenItem.group) {
      var data12 = flattenItem.data;
      optionMap.set(data12.value, data12);
    }
  });
  return values.map(function(val) {
    var option = optionMap.get(val);
    if (!option) {
      option = _extends({}, prevValueOptions.find(function(opt) {
        return opt._INTERNAL_OPTION_VALUE_ === val;
      }));
    }
    return injectPropsWithOption(option);
  });
}
var getLabeledValue = function getLabeledValue2(value7, _ref2) {
  var options = _ref2.options, prevValueMap = _ref2.prevValueMap, labelInValue = _ref2.labelInValue, optionLabelProp = _ref2.optionLabelProp;
  var item = findValueOption([value7], options)[0];
  var result = {
    value: value7
  };
  var prevValItem = labelInValue ? prevValueMap.get(value7) : void 0;
  if (prevValItem && _typeof$1(prevValItem) === "object" && "label" in prevValItem) {
    result.label = prevValItem.label;
    if (item && typeof prevValItem.label === "string" && typeof item[optionLabelProp] === "string" && prevValItem.label.trim() !== item[optionLabelProp].trim())
      ;
  } else if (item && optionLabelProp in item) {
    if (Array.isArray(item[optionLabelProp])) {
      result.label = isVNode(item[optionLabelProp][0]) ? cloneVNode(item[optionLabelProp][0]) : item[optionLabelProp];
    } else {
      result.label = item[optionLabelProp];
    }
  } else {
    result.label = value7;
    result.isCacheable = true;
  }
  result.key = result.value;
  return result;
};
function toRawString(content) {
  return toArray(content).map(function(item) {
    var _a, _b;
    if (isVNode(item)) {
      return ((_a = item === null || item === void 0 ? void 0 : item.el) === null || _a === void 0 ? void 0 : _a.innerText) || ((_b = item === null || item === void 0 ? void 0 : item.el) === null || _b === void 0 ? void 0 : _b.wholeText);
    } else {
      return item;
    }
  }).join("");
}
function getFilterFunction(optionFilterProp) {
  return function(searchValue, option) {
    var lowerSearchText = searchValue.toLowerCase();
    if ("options" in option) {
      return toRawString(option.label).toLowerCase().includes(lowerSearchText);
    }
    var rawValue = option[optionFilterProp];
    var value7 = toRawString(rawValue).toLowerCase();
    return value7.includes(lowerSearchText);
  };
}
function filterOptions(searchValue, options, _ref3) {
  var optionFilterProp = _ref3.optionFilterProp, filterOption = _ref3.filterOption;
  var filteredOptions = [];
  var filterFunc;
  if (filterOption === false) {
    return _toConsumableArray(options);
  }
  if (typeof filterOption === "function") {
    filterFunc = filterOption;
  } else {
    filterFunc = getFilterFunction(optionFilterProp);
  }
  options.forEach(function(item) {
    if ("options" in item) {
      var matchGroup = filterFunc(searchValue, item);
      if (matchGroup) {
        filteredOptions.push(item);
      } else {
        var subOptions = item.options.filter(function(subItem) {
          return filterFunc(searchValue, subItem);
        });
        if (subOptions.length) {
          filteredOptions.push(_extends(_extends({}, item), {
            options: subOptions
          }));
        }
      }
      return;
    }
    if (filterFunc(searchValue, injectPropsWithOption(item))) {
      filteredOptions.push(item);
    }
  });
  return filteredOptions;
}
function getSeparatedContent(text, tokens2) {
  if (!tokens2 || !tokens2.length) {
    return null;
  }
  var match5 = false;
  function separate(str, _ref4) {
    var _ref5 = _toArray(_ref4), token2 = _ref5[0], restTokens = _ref5.slice(1);
    if (!token2) {
      return [str];
    }
    var list2 = str.split(token2);
    match5 = match5 || list2.length > 1;
    return list2.reduce(function(prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function(unit) {
      return unit;
    });
  }
  var list = separate(text, tokens2);
  return match5 ? list : null;
}
function isValueDisabled(value7, options) {
  var option = findValueOption([value7], options)[0];
  return option.disabled;
}
function fillOptionsWithMissingValue(options, value7, optionLabelProp, labelInValue) {
  var values = toArray(value7).slice().sort();
  var cloneOptions = _toConsumableArray(options);
  var optionValues = new Set();
  options.forEach(function(opt) {
    if (opt.options) {
      opt.options.forEach(function(subOpt) {
        optionValues.add(subOpt.value);
      });
    } else {
      optionValues.add(opt.value);
    }
  });
  values.forEach(function(item) {
    var val = labelInValue ? item.value : item;
    if (!optionValues.has(val)) {
      var _ref6;
      cloneOptions.push(labelInValue ? (_ref6 = {}, _defineProperty$e(_ref6, optionLabelProp, item.label), _defineProperty$e(_ref6, "value", val), _ref6) : {
        value: val
      });
    }
  });
  return cloneOptions;
}
function cloneElement(vnode) {
  var nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  var node = cloneVNode(ele, nodeProps, mergeRef);
  node.props = override ? _extends(_extends({}, node.props), nodeProps) : node.props;
  warning$1(_typeof$1(node.props.class) !== "object", "class must be string");
  return node;
}
function onCompositionStart(e2) {
  e2.target.composing = true;
}
function onCompositionEnd(e2) {
  if (!e2.target.composing)
    return;
  e2.target.composing = false;
  trigger(e2.target, "input");
}
function trigger(el, type) {
  var e2 = document.createEvent("HTMLEvents");
  e2.initEvent(type, true, true);
  el.dispatchEvent(e2);
}
function addEventListener$1(el, event, handler2, options) {
  el.addEventListener(event, handler2, options);
}
var antInput = {
  created: function created(el, binding) {
    if (!binding.modifiers || !binding.modifiers.lazy) {
      addEventListener$1(el, "compositionstart", onCompositionStart);
      addEventListener$1(el, "compositionend", onCompositionEnd);
      addEventListener$1(el, "change", onCompositionEnd);
    }
  }
};
var antInput$1 = antInput;
var Input$2 = defineComponent({
  name: "Input",
  inheritAttrs: false,
  props: {
    inputRef: PropsTypes.any,
    prefixCls: PropsTypes.string,
    id: PropsTypes.string,
    inputElement: PropsTypes.any,
    disabled: PropsTypes.looseBool,
    autofocus: PropsTypes.looseBool,
    autocomplete: PropsTypes.string,
    editable: PropsTypes.looseBool,
    accessibilityIndex: PropsTypes.number,
    value: PropsTypes.string,
    open: PropsTypes.looseBool,
    tabindex: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
    attrs: PropsTypes.object,
    onKeydown: PropsTypes.func,
    onMousedown: PropsTypes.func,
    onChange: PropsTypes.func,
    onPaste: PropsTypes.func,
    onCompositionstart: PropsTypes.func,
    onCompositionend: PropsTypes.func,
    onFocus: PropsTypes.func,
    onBlur: PropsTypes.func
  },
  setup: function setup8(props2) {
    return {
      blurTimeout: null,
      VCSelectContainerEvent: inject("VCSelectContainerEvent")
    };
  },
  render: function render4() {
    var _this = this;
    var _a;
    var _this$$props = this.$props, prefixCls = _this$$props.prefixCls, id2 = _this$$props.id, inputElement = _this$$props.inputElement, disabled = _this$$props.disabled, tabindex = _this$$props.tabindex, autofocus = _this$$props.autofocus, autocomplete = _this$$props.autocomplete, editable = _this$$props.editable, accessibilityIndex = _this$$props.accessibilityIndex, value7 = _this$$props.value, _onKeydown = _this$$props.onKeydown, _onMousedown = _this$$props.onMousedown, onChange = _this$$props.onChange, onPaste = _this$$props.onPaste, _onCompositionstart = _this$$props.onCompositionstart, _onCompositionend = _this$$props.onCompositionend, _onFocus = _this$$props.onFocus, _onBlur = _this$$props.onBlur, open2 = _this$$props.open, inputRef = _this$$props.inputRef, attrs = _this$$props.attrs;
    var inputNode = inputElement || withDirectives(createVNode("input", null, null), [[antInput$1]]);
    var inputProps2 = inputNode.props || {};
    var onOriginKeyDown = inputProps2.onKeydown, onOriginInput = inputProps2.onInput, onOriginFocus = inputProps2.onFocus, onOriginBlur = inputProps2.onBlur, onOriginMouseDown = inputProps2.onMousedown, onOriginCompositionStart = inputProps2.onCompositionstart, onOriginCompositionEnd = inputProps2.onCompositionend, style = inputProps2.style;
    inputNode = cloneElement(inputNode, _extends(_extends(_extends({
      id: id2,
      ref: inputRef,
      disabled,
      tabindex,
      autocomplete: autocomplete || "off",
      autofocus,
      class: classNames("".concat(prefixCls, "-selection-search-input"), (_a = inputNode === null || inputNode === void 0 ? void 0 : inputNode.props) === null || _a === void 0 ? void 0 : _a.className),
      style: _extends(_extends({}, style), {
        opacity: editable ? null : 0
      }),
      role: "combobox",
      "aria-expanded": open2,
      "aria-haspopup": "listbox",
      "aria-owns": "".concat(id2, "_list"),
      "aria-autocomplete": "list",
      "aria-controls": "".concat(id2, "_list"),
      "aria-activedescendant": "".concat(id2, "_list_").concat(accessibilityIndex)
    }, attrs), {
      value: editable ? value7 : "",
      readonly: !editable,
      unselectable: !editable ? "on" : null,
      onKeydown: function onKeydown(event) {
        _onKeydown(event);
        if (onOriginKeyDown) {
          onOriginKeyDown(event);
        }
      },
      onMousedown: function onMousedown2(event) {
        _onMousedown(event);
        if (onOriginMouseDown) {
          onOriginMouseDown(event);
        }
      },
      onInput: function onInput(event) {
        onChange(event);
        if (onOriginInput) {
          onOriginInput(event);
        }
      },
      onCompositionstart: function onCompositionstart(event) {
        _onCompositionstart(event);
        if (onOriginCompositionStart) {
          onOriginCompositionStart(event);
        }
      },
      onCompositionend: function onCompositionend(event) {
        _onCompositionend(event);
        if (onOriginCompositionEnd) {
          onOriginCompositionEnd(event);
        }
      },
      onPaste,
      onFocus: function onFocus2() {
        var _a2;
        clearTimeout(_this.blurTimeout);
        onOriginFocus && onOriginFocus(arguments.length <= 0 ? void 0 : arguments[0]);
        _onFocus && _onFocus(arguments.length <= 0 ? void 0 : arguments[0]);
        (_a2 = _this.VCSelectContainerEvent) === null || _a2 === void 0 ? void 0 : _a2.focus(arguments.length <= 0 ? void 0 : arguments[0]);
      },
      onBlur: function onBlur2() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this.blurTimeout = setTimeout(function() {
          var _a2;
          onOriginBlur && onOriginBlur(args[0]);
          _onBlur && _onBlur(args[0]);
          (_a2 = _this.VCSelectContainerEvent) === null || _a2 === void 0 ? void 0 : _a2.blur(args[0]);
        }, 200);
      }
    }), inputNode.type === "textarea" ? {} : {
      type: "search"
    }), true, true);
    return inputNode;
  }
});
var Input$3 = Input$2;
var OverflowContextProviderKey = Symbol("OverflowContextProviderKey");
var OverflowContextProvider = defineComponent({
  name: "OverflowContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup9(props2, _ref) {
    var slots = _ref.slots;
    provide(OverflowContextProviderKey, computed(function() {
      return props2.value;
    }));
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var useInjectOverflowContext = function useInjectOverflowContext2() {
  return inject(OverflowContextProviderKey, computed(function() {
    return null;
  }));
};
var __rest$b = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var UNDEFINED = void 0;
var Item2 = defineComponent({
  name: "Item",
  props: {
    prefixCls: String,
    item: PropsTypes.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropsTypes.any,
    invalidate: Boolean
  },
  setup: function setup10(props2, _ref) {
    var slots = _ref.slots, expose = _ref.expose;
    var mergedHidden = computed(function() {
      return props2.responsive && !props2.display;
    });
    var itemNodeRef = ref();
    expose({
      itemNodeRef
    });
    function internalRegisterSize(width) {
      props2.registerSize(props2.itemKey, width);
    }
    onUnmounted(function() {
      internalRegisterSize(null);
    });
    return function() {
      var _a;
      var prefixCls = props2.prefixCls, invalidate = props2.invalidate, item = props2.item, renderItem = props2.renderItem, responsive = props2.responsive;
      props2.registerSize;
      props2.itemKey;
      props2.display;
      var order = props2.order, _props$component = props2.component, Component = _props$component === void 0 ? "div" : _props$component, restProps = __rest$b(props2, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]);
      var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      var overflowStyle;
      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? "hidden" : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? "none" : UNDEFINED,
          position: mergedHidden.value ? "absolute" : UNDEFINED
        };
      }
      var overflowProps = {};
      if (mergedHidden.value) {
        overflowProps["aria-hidden"] = true;
      }
      var itemNode = createVNode(Component, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
        "class": classNames(!invalidate && prefixCls),
        "style": overflowStyle
      }, overflowProps), restProps), {}, {
        "ref": itemNodeRef
      }), {
        default: function _default2() {
          return [childNode];
        }
      });
      return createVNode(ResizeObserver, {
        "disabled": !responsive,
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: function _default2() {
          return [itemNode];
        }
      });
    };
  }
});
var __rest$a = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var RawItem = defineComponent({
  name: "RawItem",
  inheritAttrs: false,
  props: {
    component: PropsTypes.any,
    title: PropsTypes.any
  },
  setup: function setup11(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var context = useInjectOverflowContext();
    return function() {
      var _a, _b;
      if (!context.value) {
        var _props$component = props2.component, Component = _props$component === void 0 ? "div" : _props$component, _restProps = __rest$a(props2, ["component"]);
        return createVNode(Component, _objectSpread2$1(_objectSpread2$1({}, _restProps), attrs), {
          default: function _default2() {
            return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
          }
        });
      }
      var _c = context.value, contextClassName = _c.className, restContext = __rest$a(_c, ["className"]);
      var className = attrs.class, restProps = __rest$a(attrs, ["class"]);
      return createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: function _default2() {
          return [createVNode(Item2, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
            "class": classNames(contextClassName, className)
          }, restContext), restProps), props2), {
            default: function _default3() {
              return [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)];
            }
          })];
        }
      });
    };
  }
});
var __rest$9 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var RESPONSIVE = "responsive";
var INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
var Overflow = defineComponent({
  name: "Overflow",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    renderRawRest: Function,
    suffix: PropsTypes.any,
    component: String,
    itemComponent: PropsTypes.any,
    onVisibleChange: Function,
    ssr: String
  },
  emits: ["visibleChange"],
  setup: function setup12(props2, _ref) {
    var attrs = _ref.attrs, emit2 = _ref.emit;
    var fullySSR = computed(function() {
      return props2.ssr === "full";
    });
    var containerWidth = ref(null);
    var mergedContainerWidth = computed(function() {
      return containerWidth.value || 0;
    });
    var itemWidths = ref(new Map());
    var prevRestWidth = ref(0);
    var restWidth = ref(0);
    var suffixWidth = ref(0);
    var suffixFixedStart = ref(null);
    var displayCount = ref(null);
    var mergedDisplayCount = computed(function() {
      if (displayCount.value === null && fullySSR.value) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount.value || 0;
    });
    var restReady = ref(false);
    var itemPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-item");
    });
    var mergedRestWidth = computed(function() {
      return Math.max(prevRestWidth.value, restWidth.value);
    });
    var isResponsive = computed(function() {
      return !!(props2.data.length && props2.maxCount === RESPONSIVE);
    });
    var invalidate = computed(function() {
      return props2.maxCount === INVALIDATE;
    });
    var showRest = computed(function() {
      return isResponsive.value || typeof props2.maxCount === "number" && props2.data.length > props2.maxCount;
    });
    var mergedData = computed(function() {
      var items = props2.data;
      if (isResponsive.value) {
        if (containerWidth.value === null && fullySSR.value) {
          items = props2.data;
        } else {
          items = props2.data.slice(0, Math.min(props2.data.length, mergedContainerWidth.value / props2.itemWidth));
        }
      } else if (typeof props2.maxCount === "number") {
        items = props2.data.slice(0, props2.maxCount);
      }
      return items;
    });
    var omittedItems = computed(function() {
      if (isResponsive.value) {
        return props2.data.slice(mergedDisplayCount.value + 1);
      }
      return props2.data.slice(mergedData.value.length);
    });
    var getKey2 = function getKey3(item, index2) {
      var _a, _b;
      if (typeof props2.itemKey === "function") {
        return props2.itemKey(item);
      }
      return (_b = props2.itemKey && ((_a = item) === null || _a === void 0 ? void 0 : _a[props2.itemKey])) !== null && _b !== void 0 ? _b : index2;
    };
    var mergedRenderItem = computed(function() {
      return props2.renderItem || function(item) {
        return item;
      };
    });
    var updateDisplayCount = function updateDisplayCount2(count, notReady) {
      displayCount.value = count;
      if (!notReady) {
        restReady.value = count < props2.data.length - 1;
        emit2("visibleChange", count);
      }
    };
    var onOverflowResize = function onOverflowResize2(_2, element) {
      containerWidth.value = element.clientWidth;
    };
    var registerSize = function registerSize2(key, width) {
      var clone3 = new Map(itemWidths.value);
      if (width === null) {
        clone3.delete(key);
      } else {
        clone3.set(key, width);
      }
      itemWidths.value = clone3;
    };
    var registerOverflowSize = function registerOverflowSize2(_2, width) {
      prevRestWidth.value = restWidth.value;
      restWidth.value = width;
    };
    var registerSuffixSize = function registerSuffixSize2(_2, width) {
      suffixWidth.value = width;
    };
    var getItemWidth = function getItemWidth2(index2) {
      return itemWidths.value.get(getKey2(mergedData.value[index2], index2));
    };
    watch([mergedContainerWidth, itemWidths, restWidth, suffixWidth, function() {
      return props2.itemKey;
    }, mergedData], function() {
      if (mergedContainerWidth.value && mergedRestWidth.value && mergedData.value) {
        var totalWidth = suffixWidth.value;
        var len = mergedData.value.length;
        var lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0);
          suffixFixedStart.value = null;
          return;
        }
        for (var i2 = 0; i2 < len; i2 += 1) {
          var currentItemWidth = getItemWidth(i2);
          if (currentItemWidth === void 0) {
            updateDisplayCount(i2 - 1, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (lastIndex === 0 && totalWidth <= mergedContainerWidth.value || i2 === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth.value) {
            updateDisplayCount(lastIndex);
            suffixFixedStart.value = null;
            break;
          } else if (totalWidth + mergedRestWidth.value > mergedContainerWidth.value) {
            updateDisplayCount(i2 - 1);
            suffixFixedStart.value = totalWidth - currentItemWidth - suffixWidth.value + restWidth.value;
            break;
          }
        }
        if (props2.suffix && getItemWidth(0) + suffixWidth.value > mergedContainerWidth.value) {
          suffixFixedStart.value = null;
        }
      }
    });
    return function() {
      var displayRest = restReady.value && !!omittedItems.value.length;
      var itemComponent = props2.itemComponent, renderRawItem = props2.renderRawItem, renderRawRest = props2.renderRawRest, renderRest = props2.renderRest, _props$prefixCls = props2.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-overflow" : _props$prefixCls, suffix = props2.suffix, _props$component = props2.component, Component = _props$component === void 0 ? "div" : _props$component;
      var className = attrs.class, style = attrs.style, restAttrs = __rest$9(attrs, ["class", "style"]);
      var suffixStyle = {};
      if (suffixFixedStart.value !== null && isResponsive.value) {
        suffixStyle = {
          position: "absolute",
          left: "".concat(suffixFixedStart.value, "px"),
          top: 0
        };
      }
      var itemSharedProps = {
        prefixCls: itemPrefixCls.value,
        responsive: isResponsive.value,
        component: itemComponent,
        invalidate: invalidate.value
      };
      var internalRenderItemNode = renderRawItem ? function(item, index2) {
        var key = getKey2(item, index2);
        return createVNode(OverflowContextProvider, {
          "key": key,
          "value": _extends(_extends({}, itemSharedProps), {
            order: index2,
            item,
            itemKey: key,
            registerSize,
            display: index2 <= mergedDisplayCount.value
          })
        }, {
          default: function _default2() {
            return [renderRawItem(item, index2)];
          }
        });
      } : function(item, index2) {
        var key = getKey2(item, index2);
        return createVNode(Item2, _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), {}, {
          "order": index2,
          "key": key,
          "item": item,
          "renderItem": mergedRenderItem.value,
          "itemKey": key,
          "registerSize": registerSize,
          "display": index2 <= mergedDisplayCount.value
        }), null);
      };
      var restNode;
      var restContextProps = {
        order: displayRest ? mergedDisplayCount.value : Number.MAX_SAFE_INTEGER,
        className: "".concat(itemPrefixCls.value, "-rest"),
        registerSize: registerOverflowSize,
        display: displayRest
      };
      if (!renderRawRest) {
        var mergedRenderRest = renderRest || defaultRenderRest;
        restNode = createVNode(Item2, _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), restContextProps), {
          default: function _default2() {
            return [typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems.value) : mergedRenderRest];
          }
        });
      } else if (renderRawRest) {
        restNode = createVNode(OverflowContextProvider, {
          "value": _extends(_extends({}, itemSharedProps), restContextProps)
        }, {
          default: function _default2() {
            return [renderRawRest(omittedItems.value)];
          }
        });
      }
      var overflowNode = createVNode(Component, _objectSpread2$1({
        "class": classNames(!invalidate.value && prefixCls, className),
        "style": style
      }, restAttrs), {
        default: function _default2() {
          return [mergedData.value.map(internalRenderItemNode), showRest.value ? restNode : null, suffix && createVNode(Item2, _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), {}, {
            "order": mergedDisplayCount.value,
            "class": "".concat(itemPrefixCls.value, "-suffix"),
            "registerSize": registerSuffixSize,
            "display": true,
            "style": suffixStyle
          }), {
            default: function _default3() {
              return [suffix];
            }
          })];
        }
      });
      return createVNode(ResizeObserver, {
        "disabled": !isResponsive.value,
        "onResize": onOverflowResize
      }, {
        default: function _default2() {
          return [overflowNode];
        }
      });
    };
  }
});
Overflow.Item = RawItem;
Overflow.RESPONSIVE = RESPONSIVE;
Overflow.INVALIDATE = INVALIDATE;
var Overflow$1 = Overflow;
var props$4 = {
  id: PropsTypes.string,
  prefixCls: PropsTypes.string,
  values: PropsTypes.array,
  open: PropsTypes.looseBool,
  searchValue: PropsTypes.string,
  inputRef: PropsTypes.any,
  placeholder: PropsTypes.any,
  disabled: PropsTypes.looseBool,
  mode: PropsTypes.string,
  showSearch: PropsTypes.looseBool,
  autofocus: PropsTypes.looseBool,
  autocomplete: PropsTypes.string,
  accessibilityIndex: PropsTypes.number,
  tabindex: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
  removeIcon: PropsTypes.VNodeChild,
  choiceTransitionName: PropsTypes.string,
  maxTagCount: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
  maxTagTextLength: PropsTypes.number,
  maxTagPlaceholder: PropsTypes.any.def(function() {
    return function(omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: PropsTypes.func,
  onToggleOpen: {
    type: Function
  },
  onSelect: PropsTypes.func,
  onInputChange: PropsTypes.func,
  onInputPaste: PropsTypes.func,
  onInputKeyDown: PropsTypes.func,
  onInputMouseDown: PropsTypes.func,
  onInputCompositionStart: PropsTypes.func,
  onInputCompositionEnd: PropsTypes.func
};
var onPreventMouseDown = function onPreventMouseDown2(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = defineComponent({
  name: "MultipleSelectSelector",
  inheritAttrs: false,
  props: props$4,
  setup: function setup13(props2) {
    var measureRef = ref();
    var inputWidth = ref(0);
    var focused = ref(false);
    var selectionPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-selection");
    });
    var inputValue = computed(function() {
      return props2.open || props2.mode === "tags" ? props2.searchValue : "";
    });
    var inputEditable = computed(function() {
      return props2.mode === "tags" || props2.showSearch && (props2.open || focused.value);
    });
    onMounted(function() {
      watch(inputValue, function() {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: "post",
        immediate: true
      });
    });
    function defaultRenderSelector(content, itemDisabled, closable, onClose) {
      return createVNode("span", {
        "class": classNames("".concat(selectionPrefixCls.value, "-item"), _defineProperty$e({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled))
      }, [createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && createVNode(TransBtn$1, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props2.removeIcon
      }, {
        default: function _default2() {
          return [createTextVNode("\xD7")];
        }
      })]);
    }
    function customizeRenderSelector(value7, content, itemDisabled, closable, onClose) {
      var onMouseDown2 = function onMouseDown3(e2) {
        onPreventMouseDown(e2);
        props2.onToggleOpen(!open);
      };
      return createVNode("span", {
        "onMousedown": onMouseDown2
      }, [props2.tagRender({
        label: content,
        value: value7,
        disabled: itemDisabled,
        closable,
        onClose
      })]);
    }
    function renderItem(_ref) {
      var itemDisabled = _ref.disabled, label = _ref.label, value7 = _ref.value;
      var closable = !props2.disabled && !itemDisabled;
      var displayLabel = label;
      if (typeof props2.maxTagTextLength === "number") {
        if (typeof label === "string" || typeof label === "number") {
          var strLabel = String(displayLabel);
          if (strLabel.length > props2.maxTagTextLength) {
            displayLabel = "".concat(strLabel.slice(0, props2.maxTagTextLength), "...");
          }
        }
      }
      var onClose = function onClose2(event) {
        if (event)
          event.stopPropagation();
        props2.onSelect(value7, {
          selected: false
        });
      };
      return typeof props2.tagRender === "function" ? customizeRenderSelector(value7, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      var _props$maxTagPlacehol = props2.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues2) {
        return "+ ".concat(omittedValues2.length, " ...");
      } : _props$maxTagPlacehol;
      var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, false);
    }
    return function() {
      var id2 = props2.id, prefixCls = props2.prefixCls, values = props2.values, open2 = props2.open, inputRef = props2.inputRef, placeholder = props2.placeholder, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, accessibilityIndex = props2.accessibilityIndex, tabindex = props2.tabindex, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var inputNode = createVNode("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + "px"
        },
        "key": "input"
      }, [createVNode(Input$3, {
        "inputRef": inputRef,
        "open": open2,
        "prefixCls": prefixCls,
        "id": id2,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "accessibilityIndex": accessibilityIndex,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true),
        "onFocus": function onFocus2() {
          return focused.value = true;
        },
        "onBlur": function onBlur2() {
          return focused.value = false;
        }
      }, null), createVNode("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, createTextVNode("\xA0")])]);
      var selectionNode = createVNode(Overflow$1, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props2.maxTagCount,
        "key": "overflow"
      }, null);
      return createVNode(Fragment, null, [selectionNode, !values.length && !inputValue.value && createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
var MultipleSelector = SelectSelector;
var props$3 = {
  inputElement: PropsTypes.any,
  id: PropsTypes.string,
  prefixCls: PropsTypes.string,
  values: PropsTypes.array,
  open: PropsTypes.looseBool,
  searchValue: PropsTypes.string,
  inputRef: PropsTypes.any,
  placeholder: PropsTypes.any,
  disabled: PropsTypes.looseBool,
  mode: PropsTypes.string,
  showSearch: PropsTypes.looseBool,
  autofocus: PropsTypes.looseBool,
  autocomplete: PropsTypes.string,
  accessibilityIndex: PropsTypes.number,
  tabindex: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
  activeValue: PropsTypes.string,
  backfill: PropsTypes.looseBool,
  onInputChange: PropsTypes.func,
  onInputPaste: PropsTypes.func,
  onInputKeyDown: PropsTypes.func,
  onInputMouseDown: PropsTypes.func,
  onInputCompositionStart: PropsTypes.func,
  onInputCompositionEnd: PropsTypes.func
};
var SingleSelector = defineComponent({
  name: "SingleSelector",
  setup: function setup14(props2) {
    var inputChanged = ref(false);
    var combobox = computed(function() {
      return props2.mode === "combobox";
    });
    var inputEditable = computed(function() {
      return combobox.value || props2.showSearch;
    });
    var inputValue = computed(function() {
      var inputValue2 = props2.searchValue || "";
      if (combobox.value && props2.activeValue && !inputChanged.value) {
        inputValue2 = props2.activeValue;
      }
      return inputValue2;
    });
    watch([combobox, function() {
      return props2.activeValue;
    }], function() {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    });
    var hasTextInput = computed(function() {
      return props2.mode !== "combobox" && !props2.open ? false : !!inputValue.value;
    });
    var title = computed(function() {
      var item = props2.values[0];
      return item && (typeof item.label === "string" || typeof item.label === "number") ? item.label.toString() : void 0;
    });
    return function() {
      var inputElement = props2.inputElement, prefixCls = props2.prefixCls, id2 = props2.id, values = props2.values, inputRef = props2.inputRef, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, accessibilityIndex = props2.accessibilityIndex, open2 = props2.open, placeholder = props2.placeholder, tabindex = props2.tabindex, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var item = values[0];
      return createVNode(Fragment, null, [createVNode("span", {
        "class": "".concat(prefixCls, "-selection-search")
      }, [createVNode(Input$3, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id2,
        "open": open2,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "accessibilityIndex": accessibilityIndex,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": function onChange(e2) {
          inputChanged.value = true;
          onInputChange(e2);
        },
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && createVNode("span", {
        "class": "".concat(prefixCls, "-selection-item"),
        "title": title.value
      }, [createVNode(Fragment, {
        "key": item.key || item.value
      }, [item.label])]), !item && !hasTextInput.value && createVNode("span", {
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [placeholder])]);
    };
  }
});
SingleSelector.props = props$3;
SingleSelector.inheritAttrs = false;
var SingleSelector$1 = SingleSelector;
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  var lock = null;
  var timeout;
  onBeforeUpdate(function() {
    window.clearTimeout(timeout);
  });
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    window.clearTimeout(timeout);
    timeout = window.setTimeout(function() {
      lock = null;
    }, duration);
  }
  return [function() {
    return lock;
  }, doLock];
}
var Selector = defineComponent({
  name: "Selector",
  inheritAttrs: false,
  props: {
    id: PropsTypes.string,
    prefixCls: PropsTypes.string,
    showSearch: PropsTypes.looseBool,
    open: PropsTypes.looseBool,
    values: PropsTypes.array,
    multiple: PropsTypes.looseBool,
    mode: PropsTypes.string,
    searchValue: PropsTypes.string,
    activeValue: PropsTypes.string,
    inputElement: PropsTypes.any,
    autofocus: PropsTypes.looseBool,
    accessibilityIndex: PropsTypes.number,
    tabindex: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
    disabled: PropsTypes.looseBool,
    placeholder: PropsTypes.any,
    removeIcon: PropsTypes.any,
    maxTagCount: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
    maxTagTextLength: PropsTypes.number,
    maxTagPlaceholder: PropsTypes.any,
    tagRender: PropsTypes.func,
    tokenWithEnter: PropsTypes.looseBool,
    choiceTransitionName: PropsTypes.string,
    onToggleOpen: {
      type: Function
    },
    onSearch: PropsTypes.func,
    onSearchSubmit: PropsTypes.func,
    onSelect: PropsTypes.func,
    onInputKeyDown: {
      type: Function
    },
    domRef: PropsTypes.func
  },
  setup: function setup15(props2) {
    var inputRef = createRef();
    var compositionStatus = false;
    var _useLock = useLock(0), _useLock2 = _slicedToArray$2(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
    var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
      var which = event.which;
      if (which === KeyCode$1.UP || which === KeyCode$1.DOWN) {
        event.preventDefault();
      }
      if (props2.onInputKeyDown) {
        props2.onInputKeyDown(event);
      }
      if (which === KeyCode$1.ENTER && props2.mode === "tags" && !compositionStatus && !props2.open) {
        props2.onSearchSubmit(event.target.value);
      }
      if (![KeyCode$1.SHIFT, KeyCode$1.TAB, KeyCode$1.BACKSPACE, KeyCode$1.ESC].includes(which)) {
        props2.onToggleOpen(true);
      }
    };
    var onInternalInputMouseDown = function onInternalInputMouseDown2() {
      setInputMouseDown(true);
    };
    var pastedText = null;
    var triggerOnSearch = function triggerOnSearch2(value7) {
      if (props2.onSearch(value7, true, compositionStatus) !== false) {
        props2.onToggleOpen(true);
      }
    };
    var onInputCompositionStart = function onInputCompositionStart2() {
      compositionStatus = true;
    };
    var onInputCompositionEnd = function onInputCompositionEnd2(e2) {
      compositionStatus = false;
      if (props2.mode !== "combobox") {
        triggerOnSearch(e2.target.value);
      }
    };
    var onInputChange = function onInputChange2(event) {
      var value7 = event.target.value;
      if (props2.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        var replacedText = pastedText.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        value7 = value7.replace(replacedText, pastedText);
      }
      pastedText = null;
      triggerOnSearch(value7);
    };
    var onInputPaste = function onInputPaste2(e2) {
      var clipboardData = e2.clipboardData;
      var value7 = clipboardData.getData("text");
      pastedText = value7;
    };
    var onClick4 = function onClick5(_ref) {
      var target = _ref.target;
      if (target !== inputRef.current) {
        var isIE = document.body.style.msTouchAction !== void 0;
        if (isIE) {
          setTimeout(function() {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    var onMousedown2 = function onMousedown3(event) {
      var inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }
      if (props2.mode !== "combobox" && (!props2.showSearch || !inputMouseDown) || !props2.open) {
        if (props2.open) {
          props2.onSearch("", true, false);
        }
        props2.onToggleOpen();
      }
    };
    return {
      focus: function focus8() {
        inputRef.current.focus();
      },
      blur: function blur8() {
        inputRef.current.blur();
      },
      onMousedown: onMousedown2,
      onClick: onClick4,
      onInputPaste,
      inputRef,
      onInternalInputKeyDown,
      onInternalInputMouseDown,
      onInputChange,
      onInputCompositionEnd,
      onInputCompositionStart
    };
  },
  render: function render5() {
    var _this$$props = this.$props, prefixCls = _this$$props.prefixCls, domRef = _this$$props.domRef, multiple = _this$$props.multiple;
    var onMousedown2 = this.onMousedown, onClick4 = this.onClick, inputRef = this.inputRef, onInputPaste = this.onInputPaste, onInternalInputKeyDown = this.onInternalInputKeyDown, onInternalInputMouseDown = this.onInternalInputMouseDown, onInputChange = this.onInputChange, onInputCompositionStart = this.onInputCompositionStart, onInputCompositionEnd = this.onInputCompositionEnd;
    var sharedProps = {
      inputRef,
      onInputKeyDown: onInternalInputKeyDown,
      onInputMouseDown: onInternalInputMouseDown,
      onInputChange,
      onInputPaste,
      onInputCompositionStart,
      onInputCompositionEnd
    };
    var selectNode = multiple ? createVNode(MultipleSelector, _objectSpread2$1(_objectSpread2$1({}, this.$props), sharedProps), null) : createVNode(SingleSelector$1, _objectSpread2$1(_objectSpread2$1({}, this.$props), sharedProps), null);
    return createVNode("div", {
      "ref": domRef,
      "class": "".concat(prefixCls, "-selector"),
      "onClick": onClick4,
      "onMousedown": onMousedown2
    }, [selectNode]);
  }
});
var Selector$1 = Selector;
function contains(root2, n2) {
  if (!root2) {
    return false;
  }
  return root2.contains(n2);
}
var availablePrefixs = ["moz", "ms", "webkit"];
function requestAnimationFramePolyfill() {
  var lastTime = 0;
  return function(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id2 = window.setTimeout(function() {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id2;
  };
}
function getRequestAnimationFrame() {
  if (typeof window === "undefined") {
    return function() {
    };
  }
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame.bind(window);
  }
  var prefix = availablePrefixs.filter(function(key) {
    return "".concat(key, "RequestAnimationFrame") in window;
  })[0];
  return prefix ? window["".concat(prefix, "RequestAnimationFrame")] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id2) {
  if (typeof window === "undefined") {
    return null;
  }
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id2);
  }
  var prefix = availablePrefixs.filter(function(key) {
    return "".concat(key, "CancelAnimationFrame") in window || "".concat(key, "CancelRequestAnimationFrame") in window;
  })[0];
  return prefix ? (window["".concat(prefix, "CancelAnimationFrame")] || window["".concat(prefix, "CancelRequestAnimationFrame")]).call(this, id2) : clearTimeout(id2);
}
var raf = getRequestAnimationFrame();
var cancelAnimationTimeout = function cancelAnimationTimeout2(frame) {
  return cancelRequestAnimationFrame(frame.id);
};
var requestAnimationTimeout = function requestAnimationTimeout2(callback, delay) {
  var start = Date.now();
  function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf(timeout);
    }
  }
  var frame = {
    id: raf(timeout)
  };
  return frame;
};
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$d(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty$d(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value7,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var vendorPrefix;
var jsCssMap = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function getVendorPrefix() {
  if (vendorPrefix !== void 0) {
    return vendorPrefix;
  }
  vendorPrefix = "";
  var style = document.createElement("p").style;
  var testProp = "Transform";
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
}
function setTransitionProperty(node, value7) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value7;
    if (name !== "transitionProperty") {
      node.style.transitionProperty = value7;
    }
  }
}
function setTransform(node, value7) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value7;
    if (name !== "transform") {
      node.style.transform = value7;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(","), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(","), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = "none";
  elem.offsetHeight;
  elem.style.display = originalStyle;
}
function css(el, name, v2) {
  var value7 = v2;
  if (_typeof(name) === "object") {
    for (var i2 in name) {
      if (name.hasOwnProperty(i2)) {
        css(el, i2, name[i2]);
      }
    }
    return void 0;
  }
  if (typeof value7 !== "undefined") {
    if (typeof value7 === "number") {
      value7 = "".concat(value7, "px");
    }
    el.style[name] = value7;
    return void 0;
  }
  return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
  var box;
  var x2;
  var y2;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x2 = box.left;
  y2 = box.top;
  x2 -= docElem.clientLeft || body.clientLeft || 0;
  y2 -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x2,
    top: y2
  };
}
function getScroll(w2, top) {
  var ret = w2["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d2 = w2.document;
    ret = d2.documentElement[method];
    if (typeof ret !== "number") {
      ret = d2.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w2) {
  return getScroll(w2);
}
function getScrollTop(w2) {
  return getScroll(w2, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w2 = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w2);
  pos.top += getScrollTop(w2);
  return pos;
}
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj == obj.window;
}
function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = "";
  var d2 = getDocument(elem);
  computedStyle = computedStyle || d2.defaultView.getComputedStyle(elem, null);
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = "currentStyle";
var RUNTIME_STYLE = "runtimeStyle";
var LEFT = "left";
var PX = "px";
function _getComputedStyleIE(elem, name) {
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
    style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
    ret = style.pixelLeft + PX;
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === "left") {
    return option.useCssRight ? "right" : dir;
  }
  return option.useCssBottom ? "bottom" : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === "left") {
    return "right";
  } else if (dir === "right") {
    return "left";
  } else if (dir === "top") {
    return "bottom";
  } else if (dir === "bottom") {
    return "top";
  }
}
function setLeftTop(elem, offset3, option) {
  if (css(elem, "position") === "static") {
    elem.style.position = "relative";
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection("left", option);
  var verticalProperty = getOffsetDirection("top", option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== "left") {
    presetH = 999;
  }
  if (verticalProperty !== "top") {
    presetV = 999;
  }
  var originalTransition = "";
  var originalOffset = getOffset(elem);
  if ("left" in offset3 || "top" in offset3) {
    originalTransition = getTransitionProperty(elem) || "";
    setTransitionProperty(elem, "none");
  }
  if ("left" in offset3) {
    elem.style[oppositeHorizontalProperty] = "";
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ("top" in offset3) {
    elem.style[oppositeVerticalProperty] = "";
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset3) {
    if (offset3.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === "left" ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  forceRelayout(elem);
  if ("left" in offset3 || "top" in offset3) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset3) {
    if (offset3.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset3[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset3) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ("left" in offset3) {
    resultXY.x = originalXY.x + offset3.left - originalOffset.left;
  }
  if ("top" in offset3) {
    resultXY.y = originalXY.y + offset3.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset3, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset3.left.toFixed(0);
    var tTop = offset3.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset3, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset3);
  } else {
    setLeftTop(elem, offset3, option);
  }
}
function each(arr, fn) {
  for (var i2 = 0; i2 < arr.length; i2++) {
    fn(arr[i2]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, "boxSizing") === "border-box";
}
var BOX_MODELS = ["margin", "border", "padding"];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props2, which) {
  var value7 = 0;
  var prop;
  var j2;
  var i2;
  for (j2 = 0; j2 < props2.length; j2++) {
    prop = props2[j2];
    if (prop) {
      for (i2 = 0; i2 < which.length; i2++) {
        var cssProp = void 0;
        if (prop === "border") {
          cssProp = "".concat(prop).concat(which[i2], "Width");
        } else {
          cssProp = prop + which[i2];
        }
        value7 += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value7;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent2 = element;
    do {
      if (parent2.nodeType === 11 && parent2.host) {
        parent2 = parent2.host;
      } else {
        parent2 = parent2.parentNode;
      }
    } while (parent2 && parent2.nodeType !== 1 && parent2.nodeType !== 9);
    return parent2;
  }
};
each(["Width", "Height"], function(name) {
  domUtils["doc".concat(name)] = function(refWin) {
    var d2 = refWin.document;
    return Math.max(d2.documentElement["scroll".concat(name)], d2.body["scroll".concat(name)], domUtils["viewport".concat(name)](d2));
  };
  domUtils["viewport".concat(name)] = function(win) {
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
  };
});
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  var borderBoxValue = name === "width" ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === void 0 || borderBoxValue <= 0) {
    borderBoxValue = void 0;
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === void 0 || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === void 0) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ["border", "padding"], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which) : getPBMWidth(elem, ["margin"], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(void 0, args);
  } else {
    swap(elem, cssShow, function() {
      val = getWH.apply(void 0, args);
    });
  }
  return val;
}
each(["width", "height"], function(name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function(el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[name] = function(elem, v2) {
    var val = v2;
    if (val !== void 0) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ["padding", "border"], which);
        }
        return css(elem, name, val);
      }
      return void 0;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});
function mix(to2, from2) {
  for (var i2 in from2) {
    if (from2.hasOwnProperty(i2)) {
      to2[i2] = from2[i2];
    }
  }
  return to2;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument,
  offset: function offset2(el, value7, option) {
    if (typeof value7 !== "undefined") {
      setOffset(el, value7, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow,
  each,
  css,
  clone: function clone2(obj) {
    var i2;
    var ret = {};
    for (i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        ret[i2] = obj[i2];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i2 in obj) {
        if (obj.hasOwnProperty(i2)) {
          ret.overflow[i2] = obj.overflow[i2];
        }
      }
    }
    return ret;
  },
  mix,
  getWindowScrollLeft: function getWindowScrollLeft(w2) {
    return getScrollLeft(w2);
  },
  getWindowScrollTop: function getWindowScrollTop(w2) {
    return getScrollTop(w2);
  },
  merge: function merge() {
    var ret = {};
    for (var i2 = 0; i2 < arguments.length; i2++) {
      utils.mix(ret, i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
var getParent2 = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent2;
  var positionStyle = utils.css(element, "position");
  var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === "html" ? null : getParent2(element);
  }
  for (parent2 = getParent2(element); parent2 && parent2 !== body && parent2.nodeType !== 9; parent2 = getParent2(parent2)) {
    positionStyle = utils.css(parent2, "position");
    if (positionStyle !== "static") {
      return parent2;
    }
  }
  return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent2 = null;
  for (parent2 = getParent$1(element); parent2 && parent2 !== body && parent2 !== doc; parent2 = getParent$1(parent2)) {
    var positionStyle = utils.css(parent2, "position");
    if (positionStyle === "fixed") {
      return true;
    }
  }
  return false;
}
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;
  while (el) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
      var pos = utils.offset(el);
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, "position");
    if (position === "absolute") {
      element.style.position = "fixed";
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === "hidden") {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === "hidden") {
    documentHeight = win.innerHeight;
  }
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}
function getRegion(node) {
  var offset3;
  var w2;
  var h2;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset3 = utils.offset(node);
    w2 = utils.outerWidth(node);
    h2 = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset3 = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w2 = utils.viewportWidth(win);
    h2 = utils.viewportHeight(win);
  }
  offset3.width = w2;
  offset3.height = h2;
  return offset3;
}
function getAlignOffset(region, align) {
  var V2 = align.charAt(0);
  var H = align.charAt(1);
  var w2 = region.width;
  var h2 = region.height;
  var x2 = region.left;
  var y2 = region.top;
  if (V2 === "c") {
    y2 += h2 / 2;
  } else if (V2 === "b") {
    y2 += h2;
  }
  if (H === "c") {
    x2 += w2 / 2;
  } else if (H === "r") {
    x2 += w2;
  }
  return {
    left: x2,
    top: y2
  };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset3, targetOffset2) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff2 = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff2[0] + offset3[0] - targetOffset2[0]),
    top: Math.round(elRegion.top - diff2[1] + offset3[1] - targetOffset2[1])
  };
}
function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map2) {
  var ret = [];
  utils.each(points, function(p) {
    ret.push(p.replace(reg, function(m2) {
      return map2[m2];
    }));
  });
  return ret;
}
function flipOffset(offset3, index2) {
  offset3[index2] = -offset3[index2];
  return offset3;
}
function convertOffset(str, offsetLen) {
  var n2;
  if (/%$/.test(str)) {
    n2 = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n2 = parseInt(str, 10);
  }
  return n2 || 0;
}
function normalizeOffset(offset3, el) {
  offset3[0] = convertOffset(offset3[0], el.width);
  offset3[1] = convertOffset(offset3[1], el.height);
}
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset3 = align.offset || [0, 0];
  var targetOffset2 = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset3 = [].concat(offset3);
  targetOffset2 = [].concat(targetOffset2);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  var elRegion = getRegion(source);
  normalizeOffset(offset3, elRegion);
  normalizeOffset(targetOffset2, tgtRegion);
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset3, targetOffset2);
  var newElRegion = utils.merge(elRegion, elFuturePos);
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        var newPoints = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
        var newOffset = flipOffset(offset3, 0);
        var newTargetOffset = flipOffset(targetOffset2, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset3 = newOffset;
          targetOffset2 = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        var _newPoints = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
        var _newOffset = flipOffset(offset3, 1);
        var _newTargetOffset = flipOffset(targetOffset2, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset3 = _newOffset;
          targetOffset2 = _newTargetOffset;
        }
      }
    }
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset3, targetOffset2);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
      }
      points = _newPoints2;
      offset3 = align.offset || [0, 0];
      targetOffset2 = align.targetOffset || [0, 0];
    }
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
  }
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points,
    offset: offset3,
    targetOffset: targetOffset2,
    overflow: newOverflowCfg
  };
}
function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ("pageX" in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ("pageY" in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
  var points = [align.points[0], "cc"];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points
  }), pointInView);
}
var isVisible = function(element) {
  if (!element) {
    return false;
  }
  if (element.offsetParent) {
    return true;
  }
  if (element.getBBox) {
    var box = element.getBBox();
    if (box.width || box.height) {
      return true;
    }
  }
  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();
    if (_box.width || _box.height) {
      return true;
    }
  }
  return false;
};
function isSamePoint(prev, next) {
  if (prev === next)
    return true;
  if (!prev || !next)
    return false;
  if ("pageX" in next && "pageY" in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }
  if ("clientX" in next && "clientY" in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }
  return false;
}
function restoreFocus(activeElement, container) {
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;
  function onResize(_ref) {
    var _ref2 = _slicedToArray$2(_ref, 1), target = _ref2[0].target;
    if (!document.documentElement.contains(target))
      return;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      Promise.resolve().then(function() {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }
    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }
  var resizeObserver = new index(onResize);
  if (element) {
    resizeObserver.observe(element);
  }
  return function() {
    resizeObserver.disconnect();
  };
}
var useBuffer = function(callback, buffer) {
  var called = false;
  var timeout = null;
  function cancelTrigger() {
    window.clearTimeout(timeout);
  }
  function trigger2(force) {
    if (!called || force === true) {
      if (callback() === false) {
        return;
      }
      called = true;
      cancelTrigger();
      timeout = window.setTimeout(function() {
        called = false;
      }, buffer.value);
    } else {
      cancelTrigger();
      timeout = window.setTimeout(function() {
        called = false;
        trigger2();
      }, buffer.value);
    }
  }
  return [trigger2, function() {
    called = false;
    cancelTrigger();
  }];
};
var alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function getElement(func) {
  if (typeof func !== "function")
    return null;
  return func();
}
function getPoint(point) {
  if (_typeof$1(point) !== "object" || !point)
    return null;
  return point;
}
var Align = defineComponent({
  name: "Align",
  props: alignProps,
  emits: ["align"],
  setup: function setup16(props2, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var cacheRef = ref({});
    var nodeRef = ref();
    var forceAlignPropsRef = computed(function() {
      return {
        disabled: props2.disabled,
        target: props2.target,
        onAlign: props2.onAlign
      };
    });
    var _useBuffer = useBuffer(function() {
      var _forceAlignPropsRef$v = forceAlignPropsRef.value, latestDisabled = _forceAlignPropsRef$v.disabled, latestTarget = _forceAlignPropsRef$v.target, latestOnAlign = _forceAlignPropsRef$v.onAlign;
      if (!latestDisabled && latestTarget && nodeRef.value && nodeRef.value.$el) {
        var source = nodeRef.value.$el;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.value.element = element;
        cacheRef.value.point = point;
        var _document = document, activeElement = _document.activeElement;
        if (element && isVisible(element)) {
          result = alignElement(source, element, props2.align);
        } else if (point) {
          result = alignPoint(source, point, props2.align);
        }
        restoreFocus(activeElement, source);
        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }
        return true;
      }
      return false;
    }, computed(function() {
      return props2.monitorBufferTime;
    })), _useBuffer2 = _slicedToArray$2(_useBuffer, 2), _forceAlign = _useBuffer2[0], cancelForceAlign = _useBuffer2[1];
    var resizeMonitor = ref({
      cancel: function cancel2() {
      }
    });
    var sourceResizeMonitor = ref({
      cancel: function cancel2() {
      }
    });
    var goAlign = function goAlign2() {
      var target = props2.target;
      var element = getElement(target);
      var point = getPoint(target);
      if (nodeRef.value && nodeRef.value.$el !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value.$el;
        sourceResizeMonitor.value.cancel = monitorResize(nodeRef.value.$el, _forceAlign);
      }
      if (cacheRef.value.element !== element || !isSamePoint(cacheRef.value.point, point)) {
        _forceAlign();
        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = monitorResize(element, _forceAlign);
        }
      }
    };
    onMounted(function() {
      goAlign();
    });
    onUpdated(function() {
      goAlign();
    });
    watch(function() {
      return props2.disabled;
    }, function(disabled) {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      flush: "post"
    });
    var winResizeRef = ref(null);
    watch(function() {
      return props2.monitorWindowResize;
    }, function(monitorWindowResize) {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = addEventListenerWrap(window, "resize", _forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: "post"
    });
    onUnmounted(function() {
      resizeMonitor.value.cancel();
      sourceResizeMonitor.value.cancel();
      if (winResizeRef.value)
        winResizeRef.value.remove();
      cancelForceAlign();
    });
    expose({
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    });
    return function() {
      var child = slots === null || slots === void 0 ? void 0 : slots.default();
      if (child) {
        return cloneElement(child[0], {
          ref: nodeRef
        }, true, true);
      }
      return child && child[0];
    };
  }
});
var LazyRenderBox = {
  name: "LazyRenderBox",
  props: {
    visible: PropsTypes.looseBool,
    hiddenClassName: PropsTypes.string
  },
  render: function render6() {
    var hiddenClassName = this.$props.hiddenClassName;
    var child = getSlot(this);
    if (hiddenClassName || child && child.length > 1 || child && child[0] && child[0].type === Text) {
      return createVNode("div", null, [child]);
    }
    return child && child[0];
  }
};
var PopupInner = {
  props: {
    hiddenClassName: PropsTypes.string.def(""),
    prefixCls: PropsTypes.string,
    visible: PropsTypes.looseBool
  },
  render: function render7() {
    var _this = this;
    var _a, _b;
    var _this$$props = this.$props, prefixCls = _this$$props.prefixCls, visible2 = _this$$props.visible, hiddenClassName = _this$$props.hiddenClassName;
    return createVNode("div", {
      "class": !visible2 ? hiddenClassName : ""
    }, [createVNode(LazyRenderBox, {
      "class": "".concat(prefixCls, "-content"),
      "visible": visible2
    }, {
      default: function _default2() {
        return [(_b = (_a = _this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)];
      }
    })]);
  }
};
var BaseMixin = {
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      var newState = typeof state === "function" ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        var s2 = this.getDerivedStateFromProps(getOptionProps(this), _extends(_extends({}, this.$data), newState));
        if (s2 === null) {
          return;
        } else {
          newState = _extends(_extends({}, newState), s2 || {});
        }
      }
      _extends(this.$data, newState);
      if (this._.isMounted) {
        this.$forceUpdate();
      }
      nextTick(function() {
        callback && callback();
      });
    },
    __emit: function __emit() {
      var args = [].slice.call(arguments, 0);
      var eventName = args[0];
      eventName = "on".concat(eventName[0].toUpperCase()).concat(eventName.substring(1));
      var event = this.$props[eventName] || this.$attrs[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (var i2 = 0, l2 = event.length; i2 < l2; i2++) {
            event[i2].apply(event, _toConsumableArray(args.slice(1)));
          }
        } else {
          event.apply(void 0, _toConsumableArray(args.slice(1)));
        }
      }
    }
  }
};
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _extends(_extends({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return "".concat(prefixCls, "-placement-").concat(placement);
      }
    }
  }
  return "";
}
function noop$3() {
}
function saveRef(name, component) {
  this[name] = component;
}
globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var getTransitionProps = function getTransitionProps2(transitionName) {
  var opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var transitionProps = transitionName ? _extends({
    appear: true,
    appearToClass: "".concat(transitionName, "-appear ").concat(transitionName, "-appear-active"),
    enterFromClass: "".concat(transitionName, "-enter ").concat(transitionName, "-enter-prepare"),
    enterToClass: "".concat(transitionName, "-enter ").concat(transitionName, "-enter-active"),
    leaveFromClass: " ".concat(transitionName, "-leave"),
    leaveActiveClass: "".concat(transitionName, "-leave ").concat(transitionName, "-leave-active"),
    leaveToClass: "".concat(transitionName, "-leave ").concat(transitionName, "-leave-active")
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
var Transition = Transition$1;
var Popup = {
  name: "VCTriggerPopup",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    visible: PropsTypes.looseBool,
    getClassNameFromAlign: PropsTypes.func,
    getRootDomNode: PropsTypes.func,
    align: PropsTypes.any,
    destroyPopupOnHide: PropsTypes.looseBool,
    prefixCls: PropsTypes.string,
    getContainer: PropsTypes.func,
    transitionName: PropsTypes.string,
    animation: PropsTypes.any,
    maskAnimation: PropsTypes.string,
    maskTransitionName: PropsTypes.string,
    mask: PropsTypes.looseBool,
    zIndex: PropsTypes.number,
    popupClassName: PropsTypes.any,
    popupStyle: PropsTypes.object.def(function() {
      return {};
    }),
    stretch: PropsTypes.string,
    point: PropsTypes.shape({
      pageX: PropsTypes.number,
      pageY: PropsTypes.number
    }).loose
  },
  data: function data() {
    this.domEl = null;
    this.currentAlignClassName = void 0;
    this.transitionProps = {};
    this.savePopupRef = saveRef.bind(this, "popupInstance");
    this.saveAlignRef = saveRef.bind(this, "alignInstance");
    return {
      stretchChecked: false,
      targetWidth: void 0,
      targetHeight: void 0
    };
  },
  mounted: function mounted2() {
    var _this = this;
    this.$nextTick(function() {
      _this.rootNode = _this.getPopupDomNode();
      _this.setStretchSize();
    });
  },
  updated: function updated() {
    var _this2 = this;
    this.$nextTick(function() {
      _this2.setStretchSize();
    });
  },
  methods: {
    onAlign: function onAlign(popupDomNode, align) {
      var props2 = this.$props;
      var currentAlignClassName = props2.getClassNameFromAlign(align);
      if (this.currentAlignClassName !== currentAlignClassName) {
        this.currentAlignClassName = currentAlignClassName;
        popupDomNode.className = this.getClassName(currentAlignClassName, popupDomNode.className);
      }
      var onaAlign = this.$attrs.onaAlign;
      onaAlign && onaAlign(popupDomNode, align);
    },
    setStretchSize: function setStretchSize() {
      var _this$$props = this.$props, stretch = _this$$props.stretch, getRootDomNode2 = _this$$props.getRootDomNode, visible2 = _this$$props.visible;
      var _this$$data = this.$data, stretchChecked = _this$$data.stretchChecked, targetHeight = _this$$data.targetHeight, targetWidth = _this$$data.targetWidth;
      if (!stretch || !visible2) {
        if (stretchChecked) {
          this.setState({
            stretchChecked: false
          });
        }
        return;
      }
      var $ele = getRootDomNode2();
      if (!$ele)
        return;
      var height = $ele.offsetHeight;
      var width = $ele.offsetWidth;
      if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
        this.setState({
          stretchChecked: true,
          targetHeight: height,
          targetWidth: width
        });
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      return findDOMNode(this.popupInstance);
    },
    getTargetElement: function getTargetElement() {
      return this.$props.getRootDomNode();
    },
    getAlignTarget: function getAlignTarget() {
      var point = this.$props.point;
      if (point) {
        return point;
      }
      return this.getTargetElement;
    },
    getMaskTransitionName: function getMaskTransitionName() {
      var props2 = this.$props;
      var transitionName = props2.maskTransitionName;
      var animation = props2.maskAnimation;
      if (!transitionName && animation) {
        transitionName = "".concat(props2.prefixCls, "-").concat(animation);
      }
      return transitionName;
    },
    getTransitionName: function getTransitionName2() {
      var props2 = this.$props;
      var transitionName = props2.transitionName;
      var animation = props2.animation;
      if (!transitionName) {
        if (typeof animation === "string") {
          transitionName = "".concat(animation);
        } else if (animation && animation.props && animation.props.name) {
          transitionName = animation.props.name;
        }
      }
      return transitionName;
    },
    getClassName: function getClassName(currentAlignClassName) {
      var _this3 = this;
      var originClassName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var enterActiveClass = [];
      if (this.transitionProps) {
        Object.keys(this.transitionProps).forEach(function(k2) {
          if (typeof _this3.transitionProps[k2] === "string") {
            enterActiveClass.push.apply(enterActiveClass, _toConsumableArray(_this3.transitionProps[k2].split(" ")));
          }
        });
      }
      var classNames2 = originClassName.split(" ").filter(function(c2) {
        return enterActiveClass.indexOf(c2) !== -1;
      }).join(" ");
      return "".concat(this.$props.prefixCls, " ").concat(this.$attrs.class || "", " ").concat(this.$props.popupClassName, " ").concat(currentAlignClassName, " ").concat(classNames2);
    },
    getPopupElement: function getPopupElement() {
      var _this4 = this;
      var _a, _b;
      var savePopupRef = this.savePopupRef;
      var props2 = this.$props, $attrs = this.$attrs, $slots = this.$slots, getTransitionName3 = this.getTransitionName;
      var _this$$data2 = this.$data, stretchChecked = _this$$data2.stretchChecked, targetHeight = _this$$data2.targetHeight, targetWidth = _this$$data2.targetWidth;
      var _$attrs$style = $attrs.style, style = _$attrs$style === void 0 ? {} : _$attrs$style;
      var onEvents = splitAttrs($attrs).onEvents;
      var align = props2.align, visible2 = props2.visible, prefixCls = props2.prefixCls, animation = props2.animation, popupStyle = props2.popupStyle, getClassNameFromAlign = props2.getClassNameFromAlign, destroyPopupOnHide = props2.destroyPopupOnHide, stretch = props2.stretch;
      var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
      if (!visible2) {
        this.currentAlignClassName = null;
      }
      var sizeStyle = {};
      if (stretch) {
        if (stretch.indexOf("height") !== -1) {
          sizeStyle.height = typeof targetHeight === "number" ? "".concat(targetHeight, "px") : targetHeight;
        } else if (stretch.indexOf("minHeight") !== -1) {
          sizeStyle.minHeight = typeof targetHeight === "number" ? "".concat(targetHeight, "px") : targetHeight;
        }
        if (stretch.indexOf("width") !== -1) {
          sizeStyle.width = typeof targetWidth === "number" ? "".concat(targetWidth, "px") : targetWidth;
        } else if (stretch.indexOf("minWidth") !== -1) {
          sizeStyle.minWidth = typeof targetWidth === "number" ? "".concat(targetWidth, "px") : targetWidth;
        }
        if (!stretchChecked) {
          setTimeout(function() {
            if (_this4.alignInstance) {
              _this4.alignInstance.forceAlign();
            }
          }, 0);
        }
      }
      var popupInnerProps = _extends(_extends({
        prefixCls,
        visible: visible2,
        class: className
      }, onEvents), {
        ref: savePopupRef,
        style: _extends(_extends(_extends(_extends({}, sizeStyle), popupStyle), style), this.getZIndexStyle())
      });
      var transitionName = getTransitionName3();
      var useTransition = !!transitionName;
      var transitionProps = getTransitionProps(transitionName);
      if (_typeof$1(animation) === "object") {
        useTransition = true;
        transitionProps = _extends(_extends({}, transitionProps), animation);
      }
      if (!useTransition) {
        transitionProps = {};
      }
      this.transitionProps = transitionProps;
      if (destroyPopupOnHide) {
        return createVNode(Transition, transitionProps, {
          default: function _default2() {
            return [visible2 ? createVNode(Align, {
              "target": _this4.getAlignTarget(),
              "key": "popup",
              "ref": _this4.saveAlignRef,
              "monitorWindowResize": true,
              "align": align,
              "onAlign": _this4.onAlign
            }, {
              default: function _default3() {
                return [createVNode(PopupInner, popupInnerProps, {
                  default: function _default4() {
                    return [(_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots)];
                  }
                })];
              }
            }) : null];
          }
        });
      }
      return createVNode(Transition, transitionProps, {
        default: function _default2() {
          return [withDirectives(createVNode(Align, {
            "target": _this4.getAlignTarget(),
            "key": "popup",
            "ref": _this4.saveAlignRef,
            "monitorWindowResize": true,
            "disabled": !visible2,
            "align": align,
            "onAlign": _this4.onAlign
          }, {
            default: function _default3() {
              return [createVNode(PopupInner, popupInnerProps, {
                default: function _default4() {
                  return [(_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots)];
                }
              })];
            }
          }), [[vShow, visible2]])];
        }
      });
    },
    getZIndexStyle: function getZIndexStyle() {
      var style = {};
      var props2 = this.$props;
      if (props2.zIndex !== void 0) {
        style.zIndex = props2.zIndex;
      }
      return style;
    },
    getMaskElement: function getMaskElement() {
      var props2 = this.$props;
      var maskElement = null;
      if (props2.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = withDirectives(createVNode(LazyRenderBox, {
          "style": this.getZIndexStyle(),
          "key": "mask",
          "class": "".concat(props2.prefixCls, "-mask"),
          "visible": props2.visible
        }, null), [[vShow, props2.visible]]);
        if (maskTransition) {
          var _maskElement = function() {
            return maskElement;
          }();
          maskElement = createVNode(Transition, {
            "appear": true,
            "name": maskTransition
          }, {
            default: function _default2() {
              return [_maskElement];
            }
          });
        }
      }
      return maskElement;
    }
  },
  render: function render8() {
    var getMaskElement2 = this.getMaskElement, getPopupElement4 = this.getPopupElement;
    return createVNode("div", null, [getMaskElement2(), getPopupElement4()]);
  }
};
var Portal = defineComponent({
  name: "Portal",
  props: {
    getContainer: PropsTypes.func.isRequired,
    children: PropsTypes.any.isRequired,
    didUpdate: PropsTypes.func
  },
  data: function data2() {
    this._container = null;
    return {};
  },
  mounted: function mounted3() {
    this.createContainer();
  },
  updated: function updated2() {
    var _this = this;
    var didUpdate = this.$props.didUpdate;
    if (didUpdate) {
      nextTick(function() {
        didUpdate(_this.$props);
      });
    }
  },
  beforeUnmount: function beforeUnmount2() {
    this.removeContainer();
  },
  methods: {
    createContainer: function createContainer() {
      this._container = this.$props.getContainer();
      this.$forceUpdate();
    },
    removeContainer: function removeContainer() {
      if (this._container && this._container.parentNode) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  },
  render: function render9() {
    var _this2 = this;
    if (this._container) {
      return createVNode(Teleport, {
        "to": this._container
      }, {
        default: function _default2() {
          return [_this2.$props.children];
        }
      });
    }
    return null;
  }
});
function returnEmptyString() {
  return "";
}
function returnDocument() {
  return window.document;
}
var ALL_HANDLERS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
var Trigger = defineComponent({
  name: "Trigger",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    action: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.arrayOf(PropsTypes.string)]).def([]),
    showAction: PropsTypes.any.def([]),
    hideAction: PropsTypes.any.def([]),
    getPopupClassNameFromAlign: PropsTypes.any.def(returnEmptyString),
    onPopupVisibleChange: PropsTypes.func.def(noop$3),
    afterPopupVisibleChange: PropsTypes.func.def(noop$3),
    popup: PropsTypes.any,
    popupStyle: PropsTypes.object.def(function() {
      return {};
    }),
    prefixCls: PropsTypes.string.def("rc-trigger-popup"),
    popupClassName: PropsTypes.string.def(""),
    popupPlacement: PropsTypes.string,
    builtinPlacements: PropsTypes.object,
    popupTransitionName: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.object]),
    popupAnimation: PropsTypes.any,
    mouseEnterDelay: PropsTypes.number.def(0),
    mouseLeaveDelay: PropsTypes.number.def(0.1),
    zIndex: PropsTypes.number,
    focusDelay: PropsTypes.number.def(0),
    blurDelay: PropsTypes.number.def(0.15),
    getPopupContainer: PropsTypes.func,
    getDocument: PropsTypes.func.def(returnDocument),
    forceRender: PropsTypes.looseBool,
    destroyPopupOnHide: PropsTypes.looseBool.def(false),
    mask: PropsTypes.looseBool.def(false),
    maskClosable: PropsTypes.looseBool.def(true),
    popupAlign: PropsTypes.object.def(function() {
      return {};
    }),
    popupVisible: PropsTypes.looseBool,
    defaultPopupVisible: PropsTypes.looseBool.def(false),
    maskTransitionName: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.object]),
    maskAnimation: PropsTypes.string,
    stretch: PropsTypes.string,
    alignPoint: PropsTypes.looseBool
  },
  setup: function setup17() {
    return {
      vcTriggerContext: inject("vcTriggerContext", {}),
      savePopupRef: inject("savePopupRef", noop$3),
      dialogContext: inject("dialogContext", null)
    };
  },
  data: function data3() {
    var _this = this;
    var props2 = this.$props;
    var popupVisible2;
    if (hasProp(this, "popupVisible")) {
      popupVisible2 = !!props2.popupVisible;
    } else {
      popupVisible2 = !!props2.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach(function(h2) {
      _this["fire".concat(h2)] = function(e2) {
        _this.fireEvents(h2, e2);
      };
    });
    this._component = null;
    this.focusTime = null;
    this.clickOutsideHandler = null;
    this.contextmenuOutsideHandler1 = null;
    this.contextmenuOutsideHandler2 = null;
    this.touchOutsideHandler = null;
    return {
      prevPopupVisible: popupVisible2,
      sPopupVisible: popupVisible2,
      point: null
    };
  },
  watch: {
    popupVisible: function popupVisible(val) {
      if (val !== void 0) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  created: function created2() {
    provide("vcTriggerContext", this);
  },
  deactivated: function deactivated() {
    this.setPopupVisible(false);
  },
  mounted: function mounted4() {
    var _this2 = this;
    this.$nextTick(function() {
      _this2.updatedCal();
    });
  },
  updated: function updated3() {
    var _this3 = this;
    this.$nextTick(function() {
      _this3.updatedCal();
    });
  },
  beforeUnmount: function beforeUnmount3() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  },
  methods: {
    updatedCal: function updatedCal() {
      var props2 = this.$props;
      var state = this.$data;
      if (state.sPopupVisible) {
        var currentDocument;
        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props2.getDocument();
          this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
        }
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props2.getDocument();
          this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick, supportsPassive$1 ? {
            passive: false
          } : false);
        }
        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props2.getDocument();
          this.contextmenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextmenuClose);
        }
        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = addEventListenerWrap(window, "blur", this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter: function onMouseenter(e2) {
      var mouseEnterDelay = this.$props.mouseEnterDelay;
      this.fireEvents("onMouseenter", e2);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e2);
    },
    onMouseMove: function onMouseMove2(e2) {
      this.fireEvents("onMousemove", e2);
      this.setPoint(e2);
    },
    onMouseleave: function onMouseleave(e2) {
      this.fireEvents("onMouseleave", e2);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function onPopupMouseenter() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function onPopupMouseleave(e2) {
      if (e2 && e2.relatedTarget && !e2.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && contains(this._component.getPopupDomNode(), e2.relatedTarget)) {
        return;
      }
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onFocus: function onFocus(e2) {
      this.fireEvents("onFocus", e2);
      this.clearDelayTimer();
      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown: function onMousedown(e2) {
      this.fireEvents("onMousedown", e2);
      this.preClickTime = Date.now();
    },
    onTouchstart: function onTouchstart(e2) {
      this.fireEvents("onTouchstart", e2);
      this.preTouchTime = Date.now();
    },
    onBlur: function onBlur(e2) {
      if (!contains(e2.target, e2.relatedTarget || document.activeElement)) {
        this.fireEvents("onBlur", e2);
        this.clearDelayTimer();
        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu: function onContextmenu(e2) {
      e2.preventDefault();
      this.fireEvents("onContextmenu", e2);
      this.setPopupVisible(true, e2);
    },
    onContextmenuClose: function onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick: function onClick(event) {
      this.fireEvents("onClick", event);
      if (this.focusTime) {
        var preTime;
        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }
        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }
        this.focusTime = 0;
      }
      this.preClickTime = 0;
      this.preTouchTime = 0;
      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }
      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }
      var nextVisible = !this.$data.sPopupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown: function onPopupMouseDown() {
      var _this4 = this;
      var _this$vcTriggerContex = this.vcTriggerContext, vcTriggerContext = _this$vcTriggerContex === void 0 ? {} : _this$vcTriggerContex;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(function() {
        _this4.hasPopupMouseDown = false;
      }, 0);
      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown.apply(vcTriggerContext, arguments);
      }
    },
    onDocumentClick: function onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }
      var target = event.target;
      var root2 = findDOMNode(this);
      if (!contains(root2, target) && !this.hasPopupMouseDown) {
        this.close();
      }
    },
    getPopupDomNode: function getPopupDomNode2() {
      if (this._component && this._component.getPopupDomNode) {
        return this._component.getPopupDomNode();
      }
      return null;
    },
    getRootDomNode: function getRootDomNode() {
      return findDOMNode(this);
    },
    handleGetPopupClassFromAlign: function handleGetPopupClassFromAlign(align) {
      var className = [];
      var props2 = this.$props;
      var popupPlacement = props2.popupPlacement, builtinPlacements = props2.builtinPlacements, prefixCls = props2.prefixCls, alignPoint2 = props2.alignPoint, getPopupClassNameFromAlign = props2.getPopupClassNameFromAlign;
      if (popupPlacement && builtinPlacements) {
        className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
      }
      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }
      return className.join(" ");
    },
    getPopupAlign: function getPopupAlign() {
      var props2 = this.$props;
      var popupPlacement = props2.popupPlacement, popupAlign = props2.popupAlign, builtinPlacements = props2.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    },
    savePopup: function savePopup(node) {
      this._component = node;
      this.savePopupRef(node);
    },
    getComponent: function getComponent$1() {
      var self2 = this;
      var mouseProps = {};
      if (this.isMouseEnterToShow()) {
        mouseProps.onMouseenter = self2.onPopupMouseenter;
      }
      if (this.isMouseLeaveToHide()) {
        mouseProps.onMouseleave = self2.onPopupMouseleave;
      }
      mouseProps.onMousedown = this.onPopupMouseDown;
      mouseProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      var handleGetPopupClassFromAlign2 = self2.handleGetPopupClassFromAlign, getRootDomNode2 = self2.getRootDomNode, getContainer2 = self2.getContainer, $attrs = self2.$attrs;
      var _self$$props = self2.$props, prefixCls = _self$$props.prefixCls, destroyPopupOnHide = _self$$props.destroyPopupOnHide, popupClassName = _self$$props.popupClassName, action = _self$$props.action, popupAnimation = _self$$props.popupAnimation, popupTransitionName = _self$$props.popupTransitionName, popupStyle = _self$$props.popupStyle, mask = _self$$props.mask, maskAnimation = _self$$props.maskAnimation, maskTransitionName = _self$$props.maskTransitionName, zIndex = _self$$props.zIndex, stretch = _self$$props.stretch, alignPoint2 = _self$$props.alignPoint;
      var _this$$data = this.$data, sPopupVisible = _this$$data.sPopupVisible, point = _this$$data.point;
      var align = this.getPopupAlign();
      var popupProps = _extends(_extends({
        prefixCls,
        destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint2 ? point : null,
        action,
        align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign2,
        stretch,
        getRootDomNode: getRootDomNode2,
        mask,
        zIndex,
        transitionName: popupTransitionName,
        maskAnimation,
        maskTransitionName,
        getContainer: getContainer2,
        popupClassName,
        popupStyle,
        onAlign: $attrs.onPopupAlign || noop$3
      }, mouseProps), {
        ref: this.savePopup
      });
      return createVNode(Popup, popupProps, {
        default: function _default2() {
          return [getComponent(self2, "popup")];
        }
      });
    },
    getContainer: function getContainer() {
      var props2 = this.$props, dialogContext = this.dialogContext;
      var popupContainer = document.createElement("div");
      popupContainer.style.position = "absolute";
      popupContainer.style.top = "0";
      popupContainer.style.left = "0";
      popupContainer.style.width = "100%";
      var mountNode = props2.getPopupContainer ? props2.getPopupContainer(findDOMNode(this), dialogContext) : props2.getDocument().body;
      mountNode.appendChild(popupContainer);
      this.popupContainer = popupContainer;
      return popupContainer;
    },
    setPopupVisible: function setPopupVisible(sPopupVisible, event) {
      var alignPoint2 = this.alignPoint, prevPopupVisible = this.sPopupVisible, onPopupVisibleChange = this.onPopupVisibleChange;
      this.clearDelayTimer();
      if (prevPopupVisible !== sPopupVisible) {
        if (!hasProp(this, "popupVisible")) {
          this.setState({
            sPopupVisible,
            prevPopupVisible
          });
        }
        onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
      }
      if (alignPoint2 && event) {
        this.setPoint(event);
      }
    },
    setPoint: function setPoint(point) {
      var alignPoint2 = this.$props.alignPoint;
      if (!alignPoint2 || !point)
        return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    handlePortalUpdate: function handlePortalUpdate() {
      if (this.prevPopupVisible !== this.sPopupVisible) {
        this.afterPopupVisibleChange(this.sPopupVisible);
      }
    },
    delaySetPopupVisible: function delaySetPopupVisible(visible2, delayS, event) {
      var _this5 = this;
      var delay = delayS * 1e3;
      this.clearDelayTimer();
      if (delay) {
        var point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = requestAnimationTimeout(function() {
          _this5.setPopupVisible(visible2, point);
          _this5.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible2, event);
      }
    },
    clearDelayTimer: function clearDelayTimer() {
      if (this.delayTimer) {
        cancelAnimationTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }
      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains: function createTwoChains(event) {
      var fn = function fn2() {
      };
      var events = getEvents(this);
      if (this.childOriginEvents[event] && events[event]) {
        return this["fire".concat(event)];
      }
      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow: function isClickToShow() {
      var _this$$props = this.$props, action = _this$$props.action, showAction = _this$$props.showAction;
      return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
    },
    isContextmenuToShow: function isContextmenuToShow() {
      var _this$$props2 = this.$props, action = _this$$props2.action, showAction = _this$$props2.showAction;
      return action.indexOf("contextmenu") !== -1 || showAction.indexOf("contextmenu") !== -1;
    },
    isClickToHide: function isClickToHide() {
      var _this$$props3 = this.$props, action = _this$$props3.action, hideAction = _this$$props3.hideAction;
      return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
    },
    isMouseEnterToShow: function isMouseEnterToShow() {
      var _this$$props4 = this.$props, action = _this$$props4.action, showAction = _this$$props4.showAction;
      return action.indexOf("hover") !== -1 || showAction.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide: function isMouseLeaveToHide() {
      var _this$$props5 = this.$props, action = _this$$props5.action, hideAction = _this$$props5.hideAction;
      return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseleave") !== -1;
    },
    isFocusToShow: function isFocusToShow() {
      var _this$$props6 = this.$props, action = _this$$props6.action, showAction = _this$$props6.showAction;
      return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
    },
    isBlurToHide: function isBlurToHide() {
      var _this$$props7 = this.$props, action = _this$$props7.action, hideAction = _this$$props7.hideAction;
      return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
    },
    forcePopupAlign: function forcePopupAlign() {
      if (this.$data.sPopupVisible && this._component && this._component.alignInstance) {
        this._component.alignInstance.forceAlign();
      }
    },
    fireEvents: function fireEvents(type, e2) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e2);
      }
      var event = this.$props[type] || this.$attrs[type];
      if (event) {
        event(e2);
      }
    },
    close: function close() {
      this.setPopupVisible(false);
    }
  },
  render: function render10() {
    var _this6 = this;
    var sPopupVisible = this.sPopupVisible, $attrs = this.$attrs;
    var children = filterEmpty(getSlot(this));
    var _this$$props8 = this.$props, forceRender = _this$$props8.forceRender, alignPoint2 = _this$$props8.alignPoint;
    if (children.length > 1) {
      warning$1(false, "Trigger children just support only one default", true);
    }
    var child = children[0];
    this.childOriginEvents = getEvents(child);
    var newChildProps = {
      key: "trigger"
    };
    if (this.isContextmenuToShow()) {
      newChildProps.onContextmenu = this.onContextmenu;
    } else {
      newChildProps.onContextmenu = this.createTwoChains("onContextmenu");
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMousedown = this.onMousedown;
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart;
    } else {
      newChildProps.onClick = this.createTwoChains("onClick");
      newChildProps.onMousedown = this.createTwoChains("onMousedown");
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart");
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseenter = this.onMouseenter;
      if (alignPoint2) {
        newChildProps.onMousemove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseenter = this.createTwoChains("onMouseenter");
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseleave = this.onMouseleave;
    } else {
      newChildProps.onMouseleave = this.createTwoChains("onMouseleave");
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains("onFocus");
      newChildProps.onBlur = function(e2) {
        if (e2 && (!e2.relatedTarget || !contains(e2.target, e2.relatedTarget))) {
          _this6.createTwoChains("onBlur")(e2);
        }
      };
    }
    var childrenClassName = classNames(child && child.props && child.props.class, $attrs.class);
    if (childrenClassName) {
      newChildProps.class = childrenClassName;
    }
    var trigger2 = cloneElement(child, newChildProps);
    var portal;
    if (sPopupVisible || this._component || forceRender) {
      portal = createVNode(Portal, {
        "key": "portal",
        "children": this.getComponent(),
        "getContainer": this.getContainer,
        "didUpdate": this.handlePortalUpdate
      }, null);
    }
    return [portal, trigger2];
  }
});
var __rest$8 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var getBuiltInPlacements = function getBuiltInPlacements2(dropdownMatchSelectWidth) {
  var adjustX = typeof dropdownMatchSelectWidth !== "number" ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    }
  };
};
var SelectTrigger = defineComponent({
  name: "SelectTrigger",
  inheritAttrs: false,
  created: function created3() {
    this.popupRef = createRef();
  },
  methods: {
    getPopupElement: function getPopupElement2() {
      return this.popupRef.current;
    }
  },
  render: function render11() {
    var _this = this;
    var _a = _extends(_extends({}, this.$props), this.$attrs), _a$empty = _a.empty, empty = _a$empty === void 0 ? false : _a$empty, props2 = __rest$8(_a, ["empty"]);
    var visible2 = props2.visible, dropdownAlign = props2.dropdownAlign, prefixCls = props2.prefixCls, popupElement = props2.popupElement, dropdownClassName = props2.dropdownClassName, dropdownStyle = props2.dropdownStyle, dropdownMatchSelectWidth = props2.dropdownMatchSelectWidth, containerWidth = props2.containerWidth, dropdownRender = props2.dropdownRender, animation = props2.animation, transitionName = props2.transitionName, direction = props2.direction, getPopupContainer = props2.getPopupContainer;
    var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
    var popupNode = popupElement;
    if (dropdownRender) {
      popupNode = dropdownRender({
        menuNode: popupElement,
        props: props2
      });
    }
    var builtInPlacements = getBuiltInPlacements(dropdownMatchSelectWidth);
    var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
    var popupStyle = _extends({
      minWidth: "".concat(containerWidth, "px")
    }, dropdownStyle);
    if (typeof dropdownMatchSelectWidth === "number") {
      popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
    } else if (dropdownMatchSelectWidth) {
      popupStyle.width = "".concat(containerWidth, "px");
    }
    return createVNode(Trigger, _objectSpread2$1(_objectSpread2$1({}, props2), {}, {
      "showAction": [],
      "hideAction": [],
      "popupPlacement": direction === "rtl" ? "bottomRight" : "bottomLeft",
      "builtinPlacements": builtInPlacements,
      "prefixCls": dropdownPrefixCls,
      "popupTransitionName": mergedTransitionName,
      "popup": createVNode("div", {
        "ref": this.popupRef
      }, [popupNode]),
      "popupAlign": dropdownAlign,
      "popupVisible": visible2,
      "getPopupContainer": getPopupContainer,
      "popupClassName": classNames(dropdownClassName, _defineProperty$e({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
      "popupStyle": popupStyle
    }), {
      default: function _default2() {
        return [getSlot(_this)[0]];
      }
    });
  }
});
SelectTrigger.props = {
  dropdownAlign: PropsTypes.object,
  visible: PropsTypes.looseBool,
  disabled: PropsTypes.looseBool,
  dropdownClassName: PropsTypes.string,
  dropdownStyle: PropsTypes.object,
  empty: PropsTypes.looseBool,
  prefixCls: PropsTypes.string,
  popupClassName: PropsTypes.string,
  animation: PropsTypes.string,
  transitionName: PropsTypes.string,
  getPopupContainer: PropsTypes.func,
  dropdownRender: PropsTypes.func,
  containerWidth: PropsTypes.number,
  dropdownMatchSelectWidth: PropsTypes.oneOfType([Number, Boolean]).def(true),
  popupElement: PropsTypes.any,
  direction: PropsTypes.string,
  getTriggerDOMNode: PropsTypes.func
};
var SelectTrigger$1 = SelectTrigger;
var INTERNAL_PROPS_MARK = "RC_SELECT_INTERNAL_PROPS_MARK";
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  var bool = ref(false);
  var delay;
  var cancelLatest = function cancelLatest2() {
    window.clearTimeout(delay);
  };
  onMounted(function() {
    cancelLatest();
  });
  var delaySetBool = function delaySetBool2(value7, callback) {
    cancelLatest();
    delay = window.setTimeout(function() {
      bool.value = value7;
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
function useSelectTriggerControl(refs, open2, triggerOpen) {
  function onGlobalMouseDown(event) {
    var _a, _b, _c;
    var target = event.target;
    if (target.shadowRoot && event.composed) {
      target = event.composedPath()[0] || target;
    }
    var elements = [(_a = refs[0]) === null || _a === void 0 ? void 0 : _a.value, (_c = (_b = refs[1]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.getPopupElement()];
    if (open2.value && elements.every(function(element) {
      return element && !element.contains(target) && element !== target;
    })) {
      triggerOpen(false);
    }
  }
  onMounted(function() {
    window.addEventListener("mousedown", onGlobalMouseDown);
  });
  onBeforeUnmount(function() {
    window.removeEventListener("mousedown", onGlobalMouseDown);
  });
}
function useCacheDisplayValue(values) {
  var prevValues = _toConsumableArray(values.value);
  var mergedValues = computed(function() {
    var valueLabels = new Map();
    prevValues.forEach(function(_ref) {
      var value7 = _ref.value, label = _ref.label;
      if (value7 !== label) {
        valueLabels.set(value7, label);
      }
    });
    var resultValues = values.value.map(function(item) {
      var cacheLabel = valueLabels.get(item.value);
      if (item.isCacheable && cacheLabel) {
        return _extends(_extends({}, item), {
          label: cacheLabel
        });
      }
      return item;
    });
    prevValues = resultValues;
    return resultValues;
  });
  return mergedValues;
}
function useCacheOptions(options) {
  var optionMap = computed(function() {
    var map2 = new Map();
    options.value.forEach(function(item) {
      var value7 = item.data.value;
      map2.set(value7, item);
    });
    return map2;
  });
  var getValueOption = function getValueOption2(vals) {
    return vals.map(function(value7) {
      return optionMap.value.get(value7);
    }).filter(Boolean);
  };
  return getValueOption;
}
var initDefaultProps2 = function initDefaultProps3(types, defaultProps) {
  var propTypes = _extends({}, types);
  Object.keys(defaultProps).forEach(function(k2) {
    var prop = propTypes[k2];
    if (prop) {
      prop.default = defaultProps[k2];
    } else {
      throw new Error("not have ".concat(k2, " prop"));
    }
  });
  return propTypes;
};
var initDefaultProps$1 = initDefaultProps2;
var isMobile$2 = function() {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }
  return false;
};
var __rest$7 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var DEFAULT_OMIT_PROPS = ["children", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "tabindex"];
var BaseProps = function BaseProps2() {
  return {
    prefixCls: PropsTypes.string,
    id: PropsTypes.string,
    class: PropsTypes.string,
    style: PropsTypes.any,
    options: PropsTypes.array,
    mode: PropsTypes.string,
    value: PropsTypes.any,
    defaultValue: PropsTypes.any,
    labelInValue: PropsTypes.looseBool,
    inputValue: PropsTypes.string,
    searchValue: PropsTypes.string,
    optionFilterProp: PropsTypes.string,
    filterOption: PropsTypes.any,
    filterSort: PropsTypes.func,
    showSearch: PropsTypes.looseBool,
    autoClearSearchValue: PropsTypes.looseBool,
    onSearch: PropsTypes.func,
    onClear: PropsTypes.func,
    allowClear: PropsTypes.looseBool,
    clearIcon: PropsTypes.VNodeChild,
    showArrow: PropsTypes.looseBool,
    inputIcon: PropsTypes.VNodeChild,
    removeIcon: PropsTypes.VNodeChild,
    menuItemSelectedIcon: PropsTypes.VNodeChild,
    open: PropsTypes.looseBool,
    defaultOpen: PropsTypes.looseBool,
    listHeight: PropsTypes.number,
    listItemHeight: PropsTypes.number,
    dropdownStyle: PropsTypes.object,
    dropdownClassName: PropsTypes.string,
    dropdownMatchSelectWidth: withUndefined(PropsTypes.oneOfType([Boolean, Number])),
    virtual: PropsTypes.looseBool,
    dropdownRender: PropsTypes.func,
    dropdownAlign: PropsTypes.any,
    animation: PropsTypes.string,
    transitionName: PropsTypes.string,
    getPopupContainer: PropsTypes.func,
    direction: PropsTypes.string,
    disabled: PropsTypes.looseBool,
    loading: PropsTypes.looseBool,
    autofocus: PropsTypes.looseBool,
    defaultActiveFirstOption: PropsTypes.looseBool,
    notFoundContent: PropsTypes.VNodeChild,
    placeholder: PropsTypes.VNodeChild,
    backfill: PropsTypes.looseBool,
    getInputElement: PropsTypes.func,
    optionLabelProp: PropsTypes.string,
    maxTagTextLength: PropsTypes.number,
    maxTagCount: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
    maxTagPlaceholder: PropsTypes.any,
    tokenSeparators: PropsTypes.arrayOf(PropsTypes.string),
    tagRender: PropsTypes.func,
    showAction: PropsTypes.array,
    tabindex: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
    onKeyup: PropsTypes.func,
    onKeydown: PropsTypes.func,
    onPopupScroll: PropsTypes.func,
    onDropdownVisibleChange: PropsTypes.func,
    onSelect: PropsTypes.func,
    onDeselect: PropsTypes.func,
    onInputKeyDown: {
      type: Function
    },
    onClick: PropsTypes.func,
    onChange: PropsTypes.func,
    onBlur: PropsTypes.func,
    onFocus: PropsTypes.func,
    onMousedown: PropsTypes.func,
    onMouseenter: PropsTypes.func,
    onMouseleave: PropsTypes.func,
    choiceTransitionName: PropsTypes.string,
    internalProps: PropsTypes.object,
    children: PropsTypes.array
  };
};
function generateSelector(config) {
  var defaultPrefixCls = config.prefixCls, OptionList2 = config.components.optionList, convertChildrenToData2 = config.convertChildrenToData, flattenOptions2 = config.flattenOptions, getLabeledValue3 = config.getLabeledValue, filterOptions2 = config.filterOptions, isValueDisabled2 = config.isValueDisabled, findValueOption2 = config.findValueOption;
  config.warningProps;
  var fillOptionsWithMissingValue2 = config.fillOptionsWithMissingValue, omitDOMProps = config.omitDOMProps;
  var Select2 = defineComponent({
    name: "Select",
    slots: ["option"],
    props: initDefaultProps$1(BaseProps(), {}),
    setup: function setup38(props2) {
      var _a;
      var useInternalProps = computed(function() {
        return props2.internalProps && props2.internalProps.mark === INTERNAL_PROPS_MARK;
      });
      warning$1(props2.optionFilterProp !== "children", "Select", "optionFilterProp not support children, please use label instead");
      var containerRef = ref(null);
      var triggerRef = ref(null);
      var selectorRef = ref(null);
      var listRef = ref(null);
      var tokenWithEnter = computed(function() {
        return (props2.tokenSeparators || []).some(function(tokenSeparator) {
          return ["\n", "\r\n"].includes(tokenSeparator);
        });
      });
      var _useDelayReset = useDelayReset(), _useDelayReset2 = _slicedToArray$2(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
      var mergedId = computed(function() {
        return props2.id || "rc_select_".concat(getUUID());
      });
      var mergedOptionLabelProp = computed(function() {
        var mergedOptionLabelProp2 = props2.optionLabelProp;
        if (mergedOptionLabelProp2 === void 0) {
          mergedOptionLabelProp2 = props2.options ? "label" : "children";
        }
        return mergedOptionLabelProp2;
      });
      var mergedLabelInValue = computed(function() {
        return props2.mode === "combobox" ? false : props2.labelInValue;
      });
      var isMultiple = computed(function() {
        return props2.mode === "tags" || props2.mode === "multiple";
      });
      var mergedShowSearch = computed(function() {
        return props2.showSearch !== void 0 ? props2.showSearch : isMultiple.value || props2.mode === "combobox";
      });
      var mobile = ref(false);
      onMounted(function() {
        mobile.value = isMobile$2();
      });
      var selectorDomRef = createRef();
      var innerSearchValue = ref("");
      var setInnerSearchValue = function setInnerSearchValue2(val) {
        innerSearchValue.value = val;
      };
      var mergedValue = ref(props2.value !== void 0 ? props2.value : props2.defaultValue);
      watch(function() {
        return props2.value;
      }, function() {
        mergedValue.value = props2.value;
        innerSearchValue.value = "";
      });
      var mergedRawValueArr = computed(function() {
        return toInnerValue(mergedValue.value, {
          labelInValue: mergedLabelInValue.value,
          combobox: props2.mode === "combobox"
        });
      });
      var mergedRawValue = computed(function() {
        return mergedRawValueArr.value[0];
      });
      var mergedValueMap = computed(function() {
        return mergedRawValueArr.value[1];
      });
      var rawValues = computed(function() {
        return new Set(mergedRawValue.value);
      });
      var activeValue = ref(null);
      var setActiveValue = function setActiveValue2(val) {
        activeValue.value = val;
      };
      var mergedSearchValue = computed(function() {
        var mergedSearchValue2 = innerSearchValue.value;
        if (props2.mode === "combobox" && mergedValue.value !== void 0) {
          mergedSearchValue2 = mergedValue.value;
        } else if (props2.searchValue !== void 0) {
          mergedSearchValue2 = props2.searchValue;
        } else if (props2.inputValue) {
          mergedSearchValue2 = props2.inputValue;
        }
        return mergedSearchValue2;
      });
      var mergedOptions = computed(function() {
        var newOptions = props2.options;
        if (newOptions === void 0) {
          newOptions = convertChildrenToData2(props2.children);
        }
        if (props2.mode === "tags" && fillOptionsWithMissingValue2) {
          newOptions = fillOptionsWithMissingValue2(newOptions, mergedValue.value, mergedOptionLabelProp.value, props2.labelInValue);
        }
        return newOptions || [];
      });
      var mergedFlattenOptions = computed(function() {
        return flattenOptions2(mergedOptions.value, props2);
      });
      var getValueOption = useCacheOptions(mergedFlattenOptions);
      var displayOptions = computed(function() {
        if (!mergedSearchValue.value || !mergedShowSearch.value) {
          return _toConsumableArray(mergedOptions.value);
        }
        var _props$optionFilterPr = props2.optionFilterProp, optionFilterProp = _props$optionFilterPr === void 0 ? "value" : _props$optionFilterPr, mode = props2.mode, filterOption = props2.filterOption;
        var filteredOptions = filterOptions2(mergedSearchValue.value, mergedOptions.value, {
          optionFilterProp,
          filterOption: mode === "combobox" && filterOption === void 0 ? function() {
            return true;
          } : filterOption
        });
        if (mode === "tags" && filteredOptions.every(function(opt) {
          return opt[optionFilterProp] !== mergedSearchValue.value;
        })) {
          filteredOptions.unshift({
            value: mergedSearchValue.value,
            label: mergedSearchValue.value,
            key: "__RC_SELECT_TAG_PLACEHOLDER__"
          });
        }
        if (props2.filterSort && Array.isArray(filteredOptions)) {
          return _toConsumableArray(filteredOptions).sort(props2.filterSort);
        }
        return filteredOptions;
      });
      var displayFlattenOptions = computed(function() {
        return flattenOptions2(displayOptions.value, props2);
      });
      onMounted(function() {
        watch(mergedSearchValue, function() {
          if (listRef.value && listRef.value.scrollTo) {
            listRef.value.scrollTo(0);
          }
        }, {
          flush: "post",
          immediate: true
        });
      });
      var displayValues = computed(function() {
        var tmpValues = mergedRawValue.value.map(function(val) {
          var valueOptions = getValueOption([val]);
          var displayValue = getLabeledValue3(val, {
            options: valueOptions,
            prevValueMap: mergedValueMap.value,
            labelInValue: mergedLabelInValue.value,
            optionLabelProp: mergedOptionLabelProp.value
          });
          return _extends(_extends({}, displayValue), {
            disabled: isValueDisabled2(val, valueOptions)
          });
        });
        if (!props2.mode && tmpValues.length === 1 && tmpValues[0].value === null && tmpValues[0].label === null) {
          return [];
        }
        return tmpValues;
      });
      displayValues = useCacheDisplayValue(displayValues);
      var triggerSelect = function triggerSelect2(newValue, isSelect, source) {
        var newValueOption = getValueOption([newValue]);
        var outOption = findValueOption2([newValue], newValueOption)[0];
        var _props$internalProps = props2.internalProps, internalProps = _props$internalProps === void 0 ? {} : _props$internalProps;
        if (!internalProps.skipTriggerSelect) {
          var selectValue = mergedLabelInValue.value ? getLabeledValue3(newValue, {
            options: newValueOption,
            prevValueMap: mergedValueMap.value,
            labelInValue: mergedLabelInValue.value,
            optionLabelProp: mergedOptionLabelProp.value
          }) : newValue;
          if (isSelect && props2.onSelect) {
            props2.onSelect(selectValue, outOption);
          } else if (!isSelect && props2.onDeselect) {
            props2.onDeselect(selectValue, outOption);
          }
        }
        if (useInternalProps.value) {
          if (isSelect && internalProps.onRawSelect) {
            internalProps.onRawSelect(newValue, outOption, source);
          } else if (!isSelect && internalProps.onRawDeselect) {
            internalProps.onRawDeselect(newValue, outOption, source);
          }
        }
      };
      var prevValueOptions = ref([]);
      var setPrevValueOptions = function setPrevValueOptions2(val) {
        prevValueOptions.value = val;
      };
      var triggerChange3 = function triggerChange4(newRawValues) {
        if (useInternalProps.value && props2.internalProps && props2.internalProps.skipTriggerChange) {
          return;
        }
        var newRawValuesOptions = getValueOption(newRawValues);
        var outValues = toOuterValues(Array.from(newRawValues), {
          labelInValue: mergedLabelInValue.value,
          options: newRawValuesOptions,
          getLabeledValue: getLabeledValue3,
          prevValueMap: mergedValueMap.value,
          optionLabelProp: mergedOptionLabelProp.value
        });
        var outValue = isMultiple.value ? outValues : outValues[0];
        if (props2.onChange && (mergedRawValue.value.length !== 0 || outValues.length !== 0)) {
          var outOptions = findValueOption2(newRawValues, newRawValuesOptions, {
            prevValueOptions: prevValueOptions.value
          });
          setPrevValueOptions(outOptions.map(function(option, index2) {
            var clone3 = _extends({}, option);
            Object.defineProperty(clone3, "_INTERNAL_OPTION_VALUE_", {
              get: function get2() {
                return newRawValues[index2];
              }
            });
            return clone3;
          }));
          props2.onChange(outValue, isMultiple.value ? outOptions : outOptions[0]);
        }
        mergedValue.value = outValue;
      };
      var onInternalSelect = function onInternalSelect2(newValue, _ref) {
        var selected = _ref.selected, source = _ref.source;
        var _props$autoClearSearc = props2.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc;
        if (props2.disabled) {
          return;
        }
        var newRawValue;
        if (isMultiple.value) {
          newRawValue = new Set(mergedRawValue.value);
          if (selected) {
            newRawValue.add(newValue);
          } else {
            newRawValue.delete(newValue);
          }
        } else {
          newRawValue = new Set();
          newRawValue.add(newValue);
        }
        if (isMultiple.value || !isMultiple.value && Array.from(mergedRawValue.value)[0] !== newValue) {
          triggerChange3(Array.from(newRawValue));
        }
        triggerSelect(newValue, !isMultiple.value || selected, source);
        if (props2.mode === "combobox") {
          setInnerSearchValue(String(newValue));
          setActiveValue("");
        } else if (!isMultiple.value || autoClearSearchValue) {
          setInnerSearchValue("");
          setActiveValue("");
        }
      };
      var onInternalOptionSelect = function onInternalOptionSelect2(newValue, info) {
        onInternalSelect(newValue, _extends(_extends({}, info), {
          source: "option"
        }));
      };
      var onInternalSelectionSelect = function onInternalSelectionSelect2(newValue, info) {
        onInternalSelect(newValue, _extends(_extends({}, info), {
          source: "selection"
        }));
      };
      var initOpen = props2.open !== void 0 ? props2.open : props2.defaultOpen;
      var innerOpen = ref(initOpen);
      var mergedOpen = ref(initOpen);
      var setInnerOpen = function setInnerOpen2(val) {
        innerOpen.value = props2.open !== void 0 ? props2.open : val;
        mergedOpen.value = innerOpen.value;
      };
      watch(function() {
        return props2.open;
      }, function() {
        setInnerOpen(props2.open);
      });
      var emptyListContent = computed(function() {
        return !props2.notFoundContent && !displayOptions.value.length;
      });
      watchEffect(function() {
        mergedOpen.value = innerOpen.value;
        if (props2.disabled || emptyListContent.value && mergedOpen.value && props2.mode === "combobox") {
          mergedOpen.value = false;
        }
      });
      var triggerOpen = computed(function() {
        return emptyListContent.value ? false : mergedOpen.value;
      });
      var onToggleOpen = function onToggleOpen2(newOpen) {
        var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen.value;
        if (innerOpen.value !== nextOpen && !props2.disabled) {
          setInnerOpen(nextOpen);
          if (props2.onDropdownVisibleChange) {
            props2.onDropdownVisibleChange(nextOpen);
          }
        }
      };
      useSelectTriggerControl([containerRef, triggerRef], triggerOpen, onToggleOpen);
      var triggerSearch = function triggerSearch2(searchText, fromTyping, isCompositing) {
        var ret = true;
        var newSearchText = searchText;
        var preSearchValue = mergedSearchValue.value;
        setActiveValue(null);
        var patchLabels = isCompositing ? null : getSeparatedContent(searchText, props2.tokenSeparators);
        var patchRawValues = patchLabels;
        if (props2.mode === "combobox") {
          if (fromTyping) {
            triggerChange3([newSearchText]);
          }
        } else if (patchLabels) {
          newSearchText = "";
          if (props2.mode !== "tags") {
            patchRawValues = patchLabels.map(function(label) {
              var item = mergedFlattenOptions.value.find(function(_ref2) {
                var data12 = _ref2.data;
                return data12[mergedOptionLabelProp.value] === label;
              });
              return item ? item.data.value : null;
            }).filter(function(val) {
              return val !== null;
            });
          }
          var newRawValues = Array.from(new Set([].concat(_toConsumableArray(mergedRawValue.value), _toConsumableArray(patchRawValues))));
          triggerChange3(newRawValues);
          newRawValues.forEach(function(newRawValue) {
            triggerSelect(newRawValue, true, "input");
          });
          onToggleOpen(false);
          ret = false;
        }
        setInnerSearchValue(newSearchText);
        if (props2.onSearch && preSearchValue !== newSearchText) {
          props2.onSearch(newSearchText);
        }
        return ret;
      };
      var onSearchSubmit = function onSearchSubmit2(searchText) {
        if (!searchText || !searchText.trim()) {
          return;
        }
        var newRawValues = Array.from(new Set([].concat(_toConsumableArray(mergedRawValue.value), [searchText])));
        triggerChange3(newRawValues);
        newRawValues.forEach(function(newRawValue) {
          triggerSelect(newRawValue, true, "input");
        });
        setInnerSearchValue("");
      };
      watch(function() {
        return props2.disabled;
      }, function() {
        if (innerOpen.value && !!props2.disabled) {
          setInnerOpen(false);
        }
      }, {
        immediate: true
      });
      watch(mergedOpen, function() {
        if (!mergedOpen.value && !isMultiple.value && props2.mode !== "combobox") {
          triggerSearch("", false, false);
        }
      }, {
        immediate: true
      });
      var _useLock = useLock(), _useLock2 = _slicedToArray$2(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
      var onInternalKeyDown = function onInternalKeyDown2(event) {
        var clearLock = getClearLock();
        var which = event.which;
        if (which === KeyCode$1.ENTER) {
          if (props2.mode !== "combobox") {
            event.preventDefault();
          }
          if (!mergedOpen.value) {
            onToggleOpen(true);
          }
        }
        setClearLock(!!mergedSearchValue.value);
        if (which === KeyCode$1.BACKSPACE && !clearLock && isMultiple.value && !mergedSearchValue.value && mergedRawValue.value.length) {
          var removeInfo = removeLastEnabledValue(displayValues.value, mergedRawValue.value);
          if (removeInfo.removedValue !== null) {
            triggerChange3(removeInfo.values);
            triggerSelect(removeInfo.removedValue, false, "input");
          }
        }
        if (mergedOpen.value && listRef.value) {
          listRef.value.onKeydown(event);
        }
        if (props2.onKeydown) {
          props2.onKeydown(event);
        }
      };
      var onInternalKeyUp = function onInternalKeyUp2(event) {
        if (mergedOpen.value && listRef.value) {
          listRef.value.onKeyup(event);
        }
        if (props2.onKeyup) {
          props2.onKeyup(event);
        }
      };
      var focusRef = ref(false);
      var onContainerFocus = function onContainerFocus2() {
        setMockFocused(true);
        if (!props2.disabled) {
          if (props2.onFocus && !focusRef.value) {
            props2.onFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          }
          if (props2.showAction && props2.showAction.includes("focus")) {
            onToggleOpen(true);
          }
        }
        focusRef.value = true;
      };
      var onContainerBlur = function onContainerBlur2() {
        setMockFocused(false, function() {
          focusRef.value = false;
          onToggleOpen(false);
        });
        if (props2.disabled) {
          return;
        }
        var searchVal = mergedSearchValue.value;
        if (searchVal) {
          if (props2.mode === "tags") {
            triggerSearch("", false, false);
            triggerChange3(Array.from(new Set([].concat(_toConsumableArray(mergedRawValue.value), [searchVal]))));
          } else if (props2.mode === "multiple") {
            setInnerSearchValue("");
          }
        }
        if (props2.onBlur) {
          props2.onBlur(arguments.length <= 0 ? void 0 : arguments[0]);
        }
      };
      provide("VCSelectContainerEvent", {
        focus: onContainerFocus,
        blur: onContainerBlur
      });
      var activeTimeoutIds = [];
      onMounted(function() {
        activeTimeoutIds.forEach(function(timeoutId) {
          return window.clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      });
      onBeforeUnmount(function() {
        activeTimeoutIds.forEach(function(timeoutId) {
          return window.clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      });
      var onInternalMouseDown = function onInternalMouseDown2(event) {
        var target = event.target;
        var popupElement = triggerRef.value && triggerRef.value.getPopupElement();
        if (popupElement && popupElement.contains(target)) {
          var timeoutId = window.setTimeout(function() {
            var index2 = activeTimeoutIds.indexOf(timeoutId);
            if (index2 !== -1) {
              activeTimeoutIds.splice(index2, 1);
            }
            cancelSetMockFocused();
            if (!mobile.value && !popupElement.contains(document.activeElement)) {
              selectorRef.value.focus();
            }
          });
          activeTimeoutIds.push(timeoutId);
        }
        if (props2.onMousedown) {
          props2.onMousedown(event);
        }
      };
      var accessibilityIndex = ref(0);
      var mergedDefaultActiveFirstOption = computed(function() {
        return props2.defaultActiveFirstOption !== void 0 ? props2.defaultActiveFirstOption : props2.mode !== "combobox";
      });
      var onActiveValue = function onActiveValue2(active, index2) {
        var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref3$source = _ref3.source, source = _ref3$source === void 0 ? "keyboard" : _ref3$source;
        accessibilityIndex.value = index2;
        if (props2.backfill && props2.mode === "combobox" && active !== null && source === "keyboard") {
          setActiveValue(String(active));
        }
      };
      var containerWidth = ref(null);
      onMounted(function() {
        watch(triggerOpen, function() {
          if (triggerOpen.value) {
            var newWidth = Math.ceil(containerRef.value.offsetWidth);
            if (containerWidth.value !== newWidth) {
              containerWidth.value = newWidth;
            }
          }
        }, {
          immediate: true
        });
      });
      var focus8 = function focus9() {
        selectorRef.value.focus();
      };
      var blur8 = function blur9() {
        selectorRef.value.blur();
      };
      return {
        focus: focus8,
        blur: blur8,
        scrollTo: (_a = listRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo,
        tokenWithEnter,
        mockFocused,
        mergedId,
        containerWidth,
        onActiveValue,
        accessibilityIndex,
        mergedDefaultActiveFirstOption,
        onInternalMouseDown,
        onContainerFocus,
        onContainerBlur,
        onInternalKeyDown,
        isMultiple,
        mergedOpen,
        displayOptions,
        displayFlattenOptions,
        rawValues,
        onInternalOptionSelect,
        onToggleOpen,
        mergedSearchValue,
        useInternalProps,
        triggerChange: triggerChange3,
        triggerSearch,
        mergedRawValue,
        mergedShowSearch,
        onInternalKeyUp,
        triggerOpen,
        mergedOptions,
        onInternalSelectionSelect,
        selectorDomRef,
        displayValues,
        activeValue,
        onSearchSubmit,
        containerRef,
        listRef,
        triggerRef,
        selectorRef
      };
    },
    methods: {
      onPopupMouseEnter: function onPopupMouseEnter() {
        this.$forceUpdate();
      }
    },
    render: function render31() {
      var _classNames2, _this = this;
      var tokenWithEnter = this.tokenWithEnter, mockFocused = this.mockFocused, mergedId = this.mergedId, containerWidth = this.containerWidth, onActiveValue = this.onActiveValue, accessibilityIndex = this.accessibilityIndex, mergedDefaultActiveFirstOption = this.mergedDefaultActiveFirstOption, onInternalMouseDown = this.onInternalMouseDown, onInternalKeyDown = this.onInternalKeyDown, isMultiple = this.isMultiple, mergedOpen = this.mergedOpen, displayOptions = this.displayOptions, displayFlattenOptions = this.displayFlattenOptions, rawValues = this.rawValues, onInternalOptionSelect = this.onInternalOptionSelect, onToggleOpen = this.onToggleOpen, mergedSearchValue = this.mergedSearchValue, onPopupMouseEnter = this.onPopupMouseEnter, useInternalProps = this.useInternalProps, triggerChange3 = this.triggerChange, triggerSearch = this.triggerSearch, mergedRawValue = this.mergedRawValue, mergedShowSearch = this.mergedShowSearch, onInternalKeyUp = this.onInternalKeyUp, triggerOpen = this.triggerOpen, mergedOptions = this.mergedOptions, onInternalSelectionSelect = this.onInternalSelectionSelect, selectorDomRef = this.selectorDomRef, displayValues = this.displayValues, activeValue = this.activeValue, onSearchSubmit = this.onSearchSubmit, slots = this.$slots;
      var _a = this.$props, _a$prefixCls = _a.prefixCls, prefixCls = _a$prefixCls === void 0 ? defaultPrefixCls : _a$prefixCls, className = _a.class;
      _a.id;
      _a.open;
      _a.defaultOpen;
      var options = _a.options;
      _a.children;
      var mode = _a.mode;
      _a.value;
      _a.defaultValue;
      _a.labelInValue;
      _a.showSearch;
      _a.inputValue;
      _a.searchValue;
      _a.filterOption;
      _a.optionFilterProp;
      _a.autoClearSearchValue;
      _a.onSearch;
      var allowClear = _a.allowClear, clearIcon = _a.clearIcon, showArrow = _a.showArrow, inputIcon = _a.inputIcon, menuItemSelectedIcon = _a.menuItemSelectedIcon, disabled = _a.disabled, loading = _a.loading;
      _a.defaultActiveFirstOption;
      var _a$notFoundContent = _a.notFoundContent, notFoundContent = _a$notFoundContent === void 0 ? "Not Found" : _a$notFoundContent;
      _a.optionLabelProp;
      _a.backfill;
      var getInputElement = _a.getInputElement, getPopupContainer = _a.getPopupContainer, _a$listHeight = _a.listHeight, listHeight = _a$listHeight === void 0 ? 200 : _a$listHeight, _a$listItemHeight = _a.listItemHeight, listItemHeight = _a$listItemHeight === void 0 ? 20 : _a$listItemHeight, animation = _a.animation, transitionName = _a.transitionName, virtual = _a.virtual, dropdownStyle = _a.dropdownStyle, dropdownClassName = _a.dropdownClassName, dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth, dropdownRender = _a.dropdownRender, dropdownAlign = _a.dropdownAlign;
      _a.showAction;
      var direction = _a.direction;
      _a.tokenSeparators;
      var tagRender = _a.tagRender, onPopupScroll = _a.onPopupScroll;
      _a.onDropdownVisibleChange;
      _a.onFocus;
      _a.onBlur;
      _a.onKeyup;
      _a.onKeydown;
      _a.onMousedown;
      _a.onChange;
      _a.onSelect;
      _a.onDeselect;
      var onClear = _a.onClear, _a$internalProps = _a.internalProps, internalProps = _a$internalProps === void 0 ? {} : _a$internalProps, restProps = __rest$7(_a, ["prefixCls", "class", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "optionFilterProp", "autoClearSearchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "getInputElement", "getPopupContainer", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]);
      var customizeInputElement = mode === "combobox" && getInputElement && getInputElement() || null;
      var domProps = omitDOMProps ? omitDOMProps(restProps) : restProps;
      DEFAULT_OMIT_PROPS.forEach(function(prop) {
        delete domProps[prop];
      });
      var popupNode = createVNode(OptionList2, {
        "ref": "listRef",
        "prefixCls": prefixCls,
        "id": mergedId,
        "open": mergedOpen,
        "childrenAsData": !options,
        "options": displayOptions,
        "flattenOptions": displayFlattenOptions,
        "multiple": isMultiple,
        "values": rawValues,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "onSelect": onInternalOptionSelect,
        "onToggleOpen": onToggleOpen,
        "onActiveValue": onActiveValue,
        "defaultActiveFirstOption": mergedDefaultActiveFirstOption,
        "notFoundContent": notFoundContent,
        "onScroll": onPopupScroll,
        "searchValue": mergedSearchValue,
        "menuItemSelectedIcon": menuItemSelectedIcon,
        "virtual": virtual !== false && dropdownMatchSelectWidth !== false,
        "onMouseenter": onPopupMouseEnter
      }, {
        option: slots.option
      });
      var clearNode;
      var onClearMouseDown = function onClearMouseDown2() {
        if (useInternalProps && internalProps.onClear) {
          internalProps.onClear();
        }
        if (onClear) {
          onClear();
        }
        triggerChange3([]);
        triggerSearch("", false, false);
      };
      if (!disabled && allowClear && (mergedRawValue.length || mergedSearchValue)) {
        clearNode = createVNode(TransBtn$1, {
          "class": "".concat(prefixCls, "-clear"),
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: function _default2() {
            return [createTextVNode("\xD7")];
          }
        });
      }
      var mergedShowArrow = showArrow !== void 0 ? showArrow : loading || !isMultiple && mode !== "combobox";
      var arrowNode;
      if (mergedShowArrow) {
        arrowNode = createVNode(TransBtn$1, {
          "class": classNames("".concat(prefixCls, "-arrow"), _defineProperty$e({}, "".concat(prefixCls, "-arrow-loading"), loading)),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading,
            searchValue: mergedSearchValue,
            open: mergedOpen,
            focused: mockFocused,
            showSearch: mergedShowSearch
          }
        }, null);
      }
      var mergedClassName = classNames(prefixCls, className, (_classNames2 = {}, _defineProperty$e(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), _defineProperty$e(_classNames2, "".concat(prefixCls, "-multiple"), isMultiple), _defineProperty$e(_classNames2, "".concat(prefixCls, "-single"), !isMultiple), _defineProperty$e(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty$e(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), _defineProperty$e(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$e(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty$e(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), _defineProperty$e(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty$e(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
      return createVNode("div", _objectSpread2$1(_objectSpread2$1({
        "class": mergedClassName
      }, domProps), {}, {
        "ref": "containerRef",
        "onMousedown": onInternalMouseDown,
        "onKeydown": onInternalKeyDown,
        "onKeyup": onInternalKeyUp
      }), [mockFocused && !mergedOpen && createVNode("span", {
        "style": {
          width: 0,
          height: 0,
          display: "flex",
          overflow: "hidden",
          opacity: 0
        },
        "aria-live": "polite"
      }, ["".concat(mergedRawValue.join(", "))]), createVNode(SelectTrigger$1, {
        "ref": "triggerRef",
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen,
        "popupElement": popupNode,
        "containerWidth": containerWidth,
        "animation": animation,
        "transitionName": transitionName,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "getPopupContainer": getPopupContainer,
        "empty": !mergedOptions.length,
        "getTriggerDOMNode": function getTriggerDOMNode() {
          return selectorDomRef.current;
        }
      }, {
        default: function _default2() {
          return [createVNode(Selector$1, _objectSpread2$1(_objectSpread2$1({}, _this.$props), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": "selectorRef",
            "id": mergedId,
            "showSearch": mergedShowSearch,
            "mode": mode,
            "accessibilityIndex": accessibilityIndex,
            "multiple": isMultiple,
            "tagRender": tagRender,
            "values": displayValues,
            "open": mergedOpen,
            "onToggleOpen": onToggleOpen,
            "searchValue": mergedSearchValue,
            "activeValue": activeValue,
            "onSearch": triggerSearch,
            "onSearchSubmit": onSearchSubmit,
            "onSelect": onInternalSelectionSelect,
            "tokenWithEnter": tokenWithEnter
          }), null)];
        }
      }), arrowNode, clearNode]);
    }
  });
  return Select2;
}
function warningProps(props2) {
  var mode = props2.mode, options = props2.options, children = props2.children, backfill = props2.backfill, allowClear = props2.allowClear, placeholder = props2.placeholder, getInputElement = props2.getInputElement, showSearch = props2.showSearch, onSearch = props2.onSearch, defaultOpen = props2.defaultOpen, autofocus = props2.autofocus, labelInValue = props2.labelInValue, value7 = props2.value, inputValue = props2.inputValue, optionLabelProp = props2.optionLabelProp;
  var multiple = mode === "multiple" || mode === "tags";
  var mergedShowSearch = showSearch !== void 0 ? showSearch : multiple || mode === "combobox";
  var mergedOptions = options || convertChildrenToData(children);
  warningOnce(mode !== "tags" || mergedOptions.every(function(opt) {
    return !opt.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag.");
  warningOnce(mode !== "combobox" || !optionLabelProp, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.");
  warningOnce(mode === "combobox" || !backfill, "`backfill` only works with `combobox` mode.");
  warningOnce(mode === "combobox" || !getInputElement, "`getInputElement` only work with `combobox` mode.");
  noteOnce(mode !== "combobox" || !getInputElement || !allowClear || !placeholder, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.");
  if (onSearch && !mergedShowSearch && mode !== "combobox" && mode !== "tags") {
    warningOnce(false, "`onSearch` should work with `showSearch` instead of use alone.");
  }
  noteOnce(!defaultOpen || autofocus, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed.");
  if (value7 !== void 0 && value7 !== null) {
    var values = toArray(value7);
    warningOnce(!labelInValue || values.every(function(val) {
      return _typeof$1(val) === "object" && ("key" in val || "value" in val);
    }), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`");
    warningOnce(!multiple || Array.isArray(value7), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (children) {
    var invalidateChildType = null;
    children.some(function(node) {
      var _a;
      if (!isValidElement(node) || !node.type) {
        return false;
      }
      var type = node.type;
      if (type.isSelectOption) {
        return false;
      }
      if (type.isSelectOptGroup) {
        var childs = ((_a = node.children) === null || _a === void 0 ? void 0 : _a.default()) || [];
        var allChildrenValid = childs.every(function(subNode) {
          if (!isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }
          invalidateChildType = subNode.type;
          return false;
        });
        if (allChildrenValid) {
          return false;
        }
        return true;
      }
      invalidateChildType = type;
      return true;
    });
    if (invalidateChildType) {
      warningOnce(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }
    warningOnce(inputValue === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value7, other) {
  return value7 === other || value7 !== value7 && other !== other;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data12 = this.__data__, index2 = assocIndexOf(data12, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data12.length - 1;
  if (index2 == lastIndex) {
    data12.pop();
  } else {
    splice.call(data12, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data12 = this.__data__, index2 = assocIndexOf(data12, key);
  return index2 < 0 ? void 0 : data12[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value7) {
  var data12 = this.__data__, index2 = assocIndexOf(data12, key);
  if (index2 < 0) {
    ++this.size;
    data12.push([key, value7]);
  } else {
    data12[index2][1] = value7;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data12 = this.__data__, result = data12["delete"](key);
  this.size = data12.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
function isObject2(value7) {
  var type = typeof value7;
  return value7 != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction2(value7) {
  if (!isObject2(value7)) {
    return false;
  }
  var tag = baseGetTag(value7);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value7) {
  if (!isObject2(value7) || isMasked(value7)) {
    return false;
  }
  var pattern = isFunction2(value7) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value7));
}
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value7 = getValue$1(object, key);
  return baseIsNative(value7) ? value7 : void 0;
}
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashGet(key) {
  var data12 = this.__data__;
  if (nativeCreate$1) {
    var result = data12[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$7.call(data12, key) ? data12[key] : void 0;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashHas(key) {
  var data12 = this.__data__;
  return nativeCreate$1 ? data12[key] !== void 0 : hasOwnProperty$6.call(data12, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value7) {
  var data12 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data12[key] = nativeCreate$1 && value7 === void 0 ? HASH_UNDEFINED : value7;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value7) {
  var type = typeof value7;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value7 !== "__proto__" : value7 === null;
}
function getMapData(map2, key) {
  var data12 = map2.__data__;
  return isKeyable(key) ? data12[typeof key == "string" ? "string" : "hash"] : data12.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value7) {
  var data12 = getMapData(this, key), size = data12.size;
  data12.set(key, value7);
  this.size += data12.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value7) {
  var data12 = this.__data__;
  if (data12 instanceof ListCache) {
    var pairs = data12.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value7]);
      this.size = ++data12.size;
      return this;
    }
    data12 = this.__data__ = new MapCache(pairs);
  }
  data12.set(key, value7);
  this.size = data12.size;
  return this;
}
function Stack(entries) {
  var data12 = this.__data__ = new ListCache(entries);
  this.size = data12.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty$1 = defineProperty;
function baseAssignValue(object, key, value7) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value7,
      "writable": true
    });
  } else {
    object[key] = value7;
  }
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function assignValue(object, key, value7) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value7)) || value7 === void 0 && !(key in object)) {
    baseAssignValue(object, key, value7);
  }
}
function copyObject(source, props2, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props2.length;
  while (++index2 < length) {
    var key = props2[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function baseTimes(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value7) {
  return isObjectLike(value7) && baseGetTag(value7) == argsTag$2;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value7) {
  return isObjectLike(value7) && hasOwnProperty$4.call(value7, "callee") && !propertyIsEnumerable$1.call(value7, "callee");
};
var isArguments$1 = isArguments;
var isArray = Array.isArray;
var isArray$1 = isArray;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value7, length) {
  var type = typeof value7;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value7)) && (value7 > -1 && value7 % 1 == 0 && value7 < length);
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value7) {
  return typeof value7 == "number" && value7 > -1 && value7 % 1 == 0 && value7 <= MAX_SAFE_INTEGER;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value7) {
  return isObjectLike(value7) && isLength(value7.length) && !!typedArrayTags[baseGetTag(value7)];
}
function baseUnary(func) {
  return function(value7) {
    return func(value7);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$5 = Object.prototype;
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value7, inherited) {
  var isArr = isArray$1(value7), isArg = !isArr && isArguments$1(value7), isBuff = !isArr && !isArg && isBuffer$1(value7), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value7), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value7.length, String) : [], length = result.length;
  for (var key in value7) {
    if ((inherited || hasOwnProperty$3.call(value7, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
function isPrototype(value7) {
  var Ctor = value7 && value7.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value7 === proto2;
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function isArrayLike(value7) {
  return value7 != null && isLength(value7.length) && !isFunction2(value7);
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value7 = array[index2];
    if (predicate(value7, index2, array)) {
      result[resIndex++] = value7;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset3 = array.length;
  while (++index2 < length) {
    array[offset3 + index2] = values[index2];
  }
  return array;
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var WeakMap$1 = getNative(root$1, "WeakMap");
var WeakMap$2 = WeakMap$1;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map$2 && getTag(new Map$2()) != mapTag$3 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$3 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag$1) {
  getTag = function(value7) {
    var result = baseGetTag(value7), Ctor = result == objectTag$1 ? value7.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array2 = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array2;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto2) {
    if (!isObject2(proto2)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto2);
    }
    object.prototype = proto2;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value7) {
  return isObjectLike(value7) && getTag$1(value7) == mapTag$1;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$1 = "[object Set]";
function baseIsSet(value7) {
  return isObjectLike(value7) && getTag$1(value7) == setTag$1;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value7, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value7, key, object, stack) : customizer(value7);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject2(value7)) {
    return value7;
  }
  var isArr = isArray$1(value7);
  if (isArr) {
    result = initCloneArray(value7);
    if (!isDeep) {
      return copyArray(value7, result);
    }
  } else {
    var tag = getTag$1(value7), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value7)) {
      return cloneBuffer(value7, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value7);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value7, baseAssignIn(result, value7)) : copySymbols(value7, baseAssign(result, value7));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value7 : {};
      }
      result = initCloneByTag(value7, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value7);
  if (stacked) {
    return stacked;
  }
  stack.set(value7, result);
  if (isSet$1(value7)) {
    value7.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value7, stack));
    });
  } else if (isMap$1(value7)) {
    value7.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value7, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props2 = isArr ? void 0 : keysFunc(value7);
  arrayEach(props2 || value7, function(subValue, key2) {
    if (props2) {
      key2 = subValue;
      subValue = value7[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value7, stack));
  });
  return result;
}
var symbolTag = "[object Symbol]";
function isSymbol(value7) {
  return typeof value7 == "symbol" || isObjectLike(value7) && baseGetTag(value7) == symbolTag;
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value7, object) {
  if (isArray$1(value7)) {
    return false;
  }
  var type = typeof value7;
  if (type == "number" || type == "symbol" || type == "boolean" || value7 == null || isSymbol(value7)) {
    return true;
  }
  return reIsPlainProp.test(value7) || !reIsDeepProp.test(value7) || object != null && value7 in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match5, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match5);
  });
  return result;
});
var stringToPath$1 = stringToPath;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value7) {
  if (typeof value7 == "string") {
    return value7;
  }
  if (isArray$1(value7)) {
    return arrayMap(value7, baseToString) + "";
  }
  if (isSymbol(value7)) {
    return symbolToString ? symbolToString.call(value7) : "";
  }
  var result = value7 + "";
  return result == "0" && 1 / value7 == -INFINITY$1 ? "-0" : result;
}
function toString(value7) {
  return value7 == null ? "" : baseToString(value7);
}
function castPath(value7, object) {
  if (isArray$1(value7)) {
    return value7;
  }
  return isKey(value7, object) ? [value7] : stringToPath$1(toString(value7));
}
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var INFINITY = 1 / 0;
function toKey(value7) {
  if (typeof value7 == "string" || isSymbol(value7)) {
    return value7;
  }
  var result = value7 + "";
  return result == "0" && 1 / value7 == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function baseSlice(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
function customOmitClone(value7) {
  return isPlainObject(value7) ? void 0 : value7;
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value7) {
  return isArray$1(value7) || isArguments$1(value7) || !!(spreadableSymbol && value7 && value7[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value7 = array[index2];
    if (depth > 0 && predicate(value7)) {
      if (depth > 1) {
        baseFlatten(value7, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value7);
      }
    } else if (!isStrict) {
      result[result.length] = value7;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function constant(value7) {
  return function() {
    return value7;
  };
}
function identity(value7) {
  return value7;
}
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit$1 = omit;
var RefSelect = generateSelector({
  prefixCls: "rc-select",
  components: {
    optionList: SelectOptionList
  },
  convertChildrenToData,
  flattenOptions,
  getLabeledValue,
  filterOptions,
  isValueDisabled,
  findValueOption,
  warningProps,
  fillOptionsWithMissingValue
});
var Select$2 = defineComponent({
  setup: function setup18(props2, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, slots = _ref.slots;
    var selectRef = ref(null);
    expose({
      focus: function focus8() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur8() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    });
    return function() {
      var _a;
      return createVNode(RefSelect, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
        "ref": selectRef
      }, props2), attrs), {}, {
        "children": ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []
      }), slots);
    };
  }
});
Select$2.inheritAttrs = false;
Select$2.props = omit$1(RefSelect.props, ["children"]);
Select$2.Option = Option$1;
Select$2.OptGroup = OptGroup$1;
var Select$3 = Select$2;
var DownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
var DownOutlinedSvg = DownOutlined$2;
function bound01(n2, max2) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max2 === 360 ? n2 : Math.min(max2, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max2), 10) / 100;
  }
  if (Math.abs(n2 - max2) < 1e-6) {
    return 1;
  }
  if (max2 === 360) {
    n2 = (n2 < 0 ? n2 % max2 + max2 : n2 % max2) / parseFloat(String(max2));
  } else {
    n2 = n2 % max2 / parseFloat(String(max2));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return Number(n2) * 100 + "%";
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r2, g2, b2);
  var min2 = Math.min(r2, g2, b2);
  var h2 = 0;
  var s2 = 0;
  var l2 = (max2 + min2) / 2;
  if (max2 === min2) {
    s2 = 0;
    h2 = 0;
  } else {
    var d2 = max2 - min2;
    s2 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
    switch (max2) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, l: l2 };
}
function hue2rgb(p, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p + (q2 - p) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p + (q2 - p) * (2 / 3 - t2) * 6;
  }
  return p;
}
function hslToRgb(h2, s2, l2) {
  var r2;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  if (s2 === 0) {
    g2 = l2;
    b2 = l2;
    r2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p = 2 * l2 - q2;
    r2 = hue2rgb(p, q2, h2 + 1 / 3);
    g2 = hue2rgb(p, q2, h2);
    b2 = hue2rgb(p, q2, h2 - 1 / 3);
  }
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r2, g2, b2);
  var min2 = Math.min(r2, g2, b2);
  var h2 = 0;
  var v2 = max2;
  var d2 = max2 - min2;
  var s2 = max2 === 0 ? 0 : d2 / max2;
  if (max2 === min2) {
    h2 = 0;
  } else {
    switch (max2) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, v: v2 };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p = v2 * (1 - s2);
  var q2 = v2 * (1 - f2 * s2);
  var t2 = v2 * (1 - (1 - f2) * s2);
  var mod2 = i2 % 6;
  var r2 = [v2, q2, p, p, t2, v2][mod2];
  var g2 = [t2, v2, v2, q2, p, p][mod2];
  var b2 = [p, p, t2, v2, v2, q2][mod2];
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b2, a2, allow4Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match5 = matchers.rgb.exec(color);
  if (match5) {
    return { r: match5[1], g: match5[2], b: match5[3] };
  }
  match5 = matchers.rgba.exec(color);
  if (match5) {
    return { r: match5[1], g: match5[2], b: match5[3], a: match5[4] };
  }
  match5 = matchers.hsl.exec(color);
  if (match5) {
    return { h: match5[1], s: match5[2], l: match5[3] };
  }
  match5 = matchers.hsla.exec(color);
  if (match5) {
    return { h: match5[1], s: match5[2], l: match5[3], a: match5[4] };
  }
  match5 = matchers.hsv.exec(color);
  if (match5) {
    return { h: match5[1], s: match5[2], v: match5[3] };
  }
  match5 = matchers.hsva.exec(color);
  if (match5) {
    return { h: match5[1], s: match5[2], v: match5[3], a: match5[4] };
  }
  match5 = matchers.hex8.exec(color);
  if (match5) {
    return {
      r: parseIntFromHex(match5[1]),
      g: parseIntFromHex(match5[2]),
      b: parseIntFromHex(match5[3]),
      a: convertHexToDecimal(match5[4]),
      format: named ? "name" : "hex8"
    };
  }
  match5 = matchers.hex6.exec(color);
  if (match5) {
    return {
      r: parseIntFromHex(match5[1]),
      g: parseIntFromHex(match5[2]),
      b: parseIntFromHex(match5[3]),
      format: named ? "name" : "hex"
    };
  }
  match5 = matchers.hex4.exec(color);
  if (match5) {
    return {
      r: parseIntFromHex(match5[1] + match5[1]),
      g: parseIntFromHex(match5[2] + match5[2]),
      b: parseIntFromHex(match5[3] + match5[3]),
      a: convertHexToDecimal(match5[4] + match5[4]),
      format: named ? "name" : "hex8"
    };
  }
  match5 = matchers.hex3.exec(color);
  if (match5) {
    return {
      r: parseIntFromHex(match5[1] + match5[1]),
      g: parseIntFromHex(match5[2] + match5[2]),
      b: parseIntFromHex(match5[3] + match5[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = function() {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R2;
    var G;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G + 0.0722 * B2;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s2 = Math.round(hsv.s * 100);
    var v2 = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(" + h2 + ", " + s2 + "%, " + v2 + "%)" : "hsva(" + h2 + ", " + s2 + "%, " + v2 + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s2 = Math.round(hsl.s * 100);
    var l2 = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(" + h2 + ", " + s2 + "%, " + l2 + "%)" : "hsla(" + h2 + ", " + s2 + "%, " + l2 + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r2 = Math.round(this.r);
    var g2 = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(" + r2 + ", " + g2 + ", " + b2 + ")" : "rgba(" + r2 + ", " + g2 + ", " + b2 + ", " + this.roundA + ")";
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x2) {
      return Math.round(bound01(x2, 255) * 100) + "%";
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x2) {
      return Math.round(bound01(x2, 255) * 100);
    };
    return this.a === 1 ? "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)" : "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
      var _b = _a[_i], key = _b[0], value7 = _b[1];
      if (hex === value7) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format2) {
    var formatSet = Boolean(format2);
    format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
    if (needsAlphaFormat) {
      if (format2 === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }
    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format2 === "name") {
      formattedString = this.toName();
    }
    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }
    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s2 = hsv.s;
    var v2 = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
      v2 = (v2 + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n2) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n2;
    for (var i2 = 1; i2 < n2; i2++) {
      result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
}();
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function getHue(hsv, i2, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i2 : Math.round(hsv.h) + hueStep * i2;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i2 : Math.round(hsv.h) - hueStep * i2;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i2, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i2;
  } else if (i2 === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i2;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i2 === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i2, light) {
  var value7;
  if (light) {
    value7 = hsv.v + brightnessStep1 * i2;
  } else {
    value7 = hsv.v - brightnessStep2 * i2;
  }
  if (value7 > 1) {
    value7 = 1;
  }
  return Number(value7.toFixed(2));
}
function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = new TinyColor(color);
  for (var i2 = lightColorCount; i2 > 0; i2 -= 1) {
    var hsv = pColor.toHsv();
    var colorString = new TinyColor({
      h: getHue(hsv, i2, true),
      s: getSaturation(hsv, i2, true),
      v: getValue(hsv, i2, true)
    }).toHexString();
    patterns.push(colorString);
  }
  patterns.push(pColor.toHexString());
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = pColor.toHsv();
    var _colorString = new TinyColor({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }).toHexString();
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref) {
      var index2 = _ref.index, opacity = _ref.opacity;
      var darkColorString = new TinyColor(opts.backgroundColor || "#141414").mix(patterns[index2], opacity * 100).toHexString();
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
presetPalettes.red;
presetPalettes.volcano;
presetPalettes.gold;
presetPalettes.orange;
presetPalettes.yellow;
presetPalettes.lime;
presetPalettes.green;
presetPalettes.cyan;
presetPalettes.blue;
presetPalettes.geekblue;
presetPalettes.purple;
presetPalettes.magenta;
presetPalettes.grey;
var containers = [];
var styleElements = [];
var usage = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function createStyleElement() {
  var styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");
  return styleElement;
}
function insertCss(css2, options) {
  options = options || {};
  if (css2 === void 0) {
    throw new Error(usage);
  }
  var position = options.prepend === true ? "prepend" : "append";
  var container = options.container !== void 0 ? options.container : document.querySelector("head");
  var containerId = containers.indexOf(container);
  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  }
  var styleElement;
  if (styleElements[containerId] !== void 0 && styleElements[containerId][position] !== void 0) {
    styleElement = styleElements[containerId][position];
  } else {
    styleElement = styleElements[containerId][position] = createStyleElement();
    if (position === "prepend") {
      container.insertBefore(styleElement, container.childNodes[0]);
    } else {
      container.appendChild(styleElement);
    }
  }
  if (css2.charCodeAt(0) === 65279) {
    css2 = css2.substr(1, css2.length);
  }
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css2;
  } else {
    styleElement.textContent += css2;
  }
  return styleElement;
}
function _objectSpread$c(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$c(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$c(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
function warning(valid, message) {
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return h$1(node.tag, _objectSpread$c({
      key
    }, node.attrs), (node.children || []).map(function(child, index2) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
    }));
  }
  return h$1(node.tag, _objectSpread$c({
    key
  }, rootProps, node.attrs), (node.children || []).map(function(child, index2) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var cssInjectedFlag = false;
var useInsertStyles = function useInsertStyles2() {
  var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
  nextTick(function() {
    if (!cssInjectedFlag) {
      if (typeof window !== "undefined" && window.document && window.document.documentElement) {
        insertCss(styleStr, {
          prepend: true
        });
      }
      cssInjectedFlag = true;
    }
  });
};
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectSpread$b(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$b(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$b(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread$b({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props2, context) {
  var _props$context$attrs = _objectSpread$b({}, props2, context.attrs), icon = _props$context$attrs.icon, primaryColor = _props$context$attrs.primaryColor, secondaryColor = _props$context$attrs.secondaryColor, restProps = _objectWithoutProperties$1(_props$context$attrs, ["icon", "primaryColor", "secondaryColor"]);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles();
  warning(isIconDefinition(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread$b({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), _objectSpread$b({}, restProps, {
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = "IconBase";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var VueIcon = IconBase;
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return VueIcon.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = VueIcon.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectSpread$a(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$a(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$a(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
setTwoToneColor("#1890ff");
var Icon = function Icon2(props2, context) {
  var _classObj;
  var _props$context$attrs = _objectSpread$a({}, props2, context.attrs), cls = _props$context$attrs["class"], icon = _props$context$attrs.icon, spin = _props$context$attrs.spin, rotate = _props$context$attrs.rotate, tabindex = _props$context$attrs.tabindex, twoToneColor = _props$context$attrs.twoToneColor, onClick4 = _props$context$attrs.onClick, restProps = _objectWithoutProperties(_props$context$attrs, ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"]);
  var classObj = (_classObj = {
    anticon: true
  }, _defineProperty$a(_classObj, "anticon-".concat(icon.name), Boolean(icon.name)), _defineProperty$a(_classObj, cls, cls), _classObj);
  var svgClassString = spin === "" || !!spin || icon.name === "loading" ? "anticon-spin" : "";
  var iconTabIndex = tabindex;
  if (iconTabIndex === void 0 && onClick4) {
    iconTabIndex = -1;
    restProps.tabindex = iconTabIndex;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return _vue.createVNode("span", _vue.mergeProps(restProps, {
    "role": "img",
    "aria-label": icon.name,
    "onClick": onClick4,
    "class": classObj
  }), [_vue.createVNode(VueIcon, {
    "class": svgClassString,
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null)]);
};
Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Icon.displayName = "AntdIcon";
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon = Icon;
function _objectSpread$9(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$9(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$9(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var DownOutlined = function DownOutlined2(props2, context) {
  var p = _objectSpread$9({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": DownOutlinedSvg
  }), null);
};
DownOutlined.displayName = "DownOutlined";
DownOutlined.inheritAttrs = false;
var DownOutlined$1 = DownOutlined;
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var LoadingOutlinedSvg = LoadingOutlined$2;
function _objectSpread$8(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$8(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$8(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var LoadingOutlined = function LoadingOutlined2(props2, context) {
  var p = _objectSpread$8({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": LoadingOutlinedSvg
  }), null);
};
LoadingOutlined.displayName = "LoadingOutlined";
LoadingOutlined.inheritAttrs = false;
var LoadingOutlined$1 = LoadingOutlined;
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlinedSvg = CheckOutlined$2;
function _objectSpread$7(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var CheckOutlined = function CheckOutlined2(props2, context) {
  var p = _objectSpread$7({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": CheckOutlinedSvg
  }), null);
};
CheckOutlined.displayName = "CheckOutlined";
CheckOutlined.inheritAttrs = false;
var CheckOutlined$1 = CheckOutlined;
var CloseOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlinedSvg = CloseOutlined$2;
function _objectSpread$6(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$6(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var CloseOutlined = function CloseOutlined2(props2, context) {
  var p = _objectSpread$6({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": CloseOutlinedSvg
  }), null);
};
CloseOutlined.displayName = "CloseOutlined";
CloseOutlined.inheritAttrs = false;
var CloseOutlined$1 = CloseOutlined;
var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };
var CloseCircleFilledSvg = CloseCircleFilled$2;
function _objectSpread$5(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var CloseCircleFilled = function CloseCircleFilled2(props2, context) {
  var p = _objectSpread$5({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": CloseCircleFilledSvg
  }), null);
};
CloseCircleFilled.displayName = "CloseCircleFilled";
CloseCircleFilled.inheritAttrs = false;
var CloseCircleFilled$1 = CloseCircleFilled;
var SearchOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
var SearchOutlinedSvg = SearchOutlined$2;
function _objectSpread$4(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var SearchOutlined = function SearchOutlined2(props2, context) {
  var p = _objectSpread$4({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": SearchOutlinedSvg
  }), null);
};
SearchOutlined.displayName = "SearchOutlined";
SearchOutlined.inheritAttrs = false;
var SearchOutlined$1 = SearchOutlined;
function getIcons(props2) {
  var slots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var loading = props2.loading, multiple = props2.multiple, prefixCls = props2.prefixCls;
  var suffixIcon = props2.suffixIcon || slots.suffixIcon && slots.suffixIcon();
  var clearIcon = props2.clearIcon || slots.clearIcon && slots.clearIcon();
  var menuItemSelectedIcon = props2.menuItemSelectedIcon || slots.menuItemSelectedIcon && slots.menuItemSelectedIcon();
  var removeIcon = props2.removeIcon || slots.removeIcon && slots.removeIcon();
  var mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = createVNode(CloseCircleFilled$1, null, null);
  }
  var mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = createVNode(LoadingOutlined$1, {
      "spin": true
    }, null);
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");
    mergedSuffixIcon = function mergedSuffixIcon2(_ref) {
      var open2 = _ref.open, showSearch = _ref.showSearch;
      if (open2 && showSearch) {
        return createVNode(SearchOutlined$1, {
          "class": iconCls
        }, null);
      }
      return createVNode(DownOutlined$1, {
        "class": iconCls
      }, null);
    };
  }
  var mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = createVNode(CheckOutlined$1, null, null);
  } else {
    mergedItemIcon = null;
  }
  var mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = createVNode(CloseOutlined$1, null, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
var SelectProps = function SelectProps2() {
  return _extends(_extends({}, omit$2(BaseProps(), ["inputIcon", "mode", "getInputElement", "backfill", "class", "style"])), {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: PropsTypes.VNodeChild,
    suffixIcon: PropsTypes.VNodeChild,
    itemIcon: PropsTypes.VNodeChild,
    size: PropsTypes.oneOf(tuple("small", "middle", "large", "default")),
    mode: PropsTypes.oneOf(tuple("multiple", "tags", "SECRET_COMBOBOX_MODE_DO_NOT_USE")),
    bordered: PropsTypes.looseBool.def(true),
    transitionName: PropsTypes.string.def("slide-up"),
    choiceTransitionName: PropsTypes.string.def("")
  });
};
var Select = defineComponent({
  name: "ASelect",
  Option: Option$1,
  OptGroup: OptGroup$1,
  inheritAttrs: false,
  props: SelectProps(),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: "SECRET_COMBOBOX_MODE_DO_NOT_USE",
  emits: ["change", "update:value"],
  slots: ["notFoundContent", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "dropdownRender", "option"],
  setup: function setup19(props2, _ref) {
    var attrs = _ref.attrs, emit2 = _ref.emit, slots = _ref.slots, expose = _ref.expose;
    var selectRef = ref(null);
    var focus8 = function focus9() {
      if (selectRef.value) {
        selectRef.value.focus();
      }
    };
    var blur8 = function blur9() {
      if (selectRef.value) {
        selectRef.value.blur();
      }
    };
    var mode = computed(function() {
      var mode2 = props2.mode;
      if (mode2 === "combobox") {
        return void 0;
      }
      if (mode2 === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return "combobox";
      }
      return mode2;
    });
    var _useConfigInject = useConfigInject("select", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, configProvider = _useConfigInject.configProvider;
    var mergedClassName = computed(function() {
      var _classNames;
      return classNames((_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls.value, "-lg"), props2.size === "large"), _defineProperty$e(_classNames, "".concat(prefixCls.value, "-sm"), props2.size === "small"), _defineProperty$e(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty$e(_classNames, "".concat(prefixCls.value, "-borderless"), !props2.bordered), _classNames));
    });
    var triggerChange3 = function triggerChange4() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit2("update:value", args[0]);
      emit2.apply(void 0, ["change"].concat(args));
    };
    expose({
      blur: blur8,
      focus: focus8
    });
    return function() {
      var _a;
      var notFoundContent = props2.notFoundContent, _props$listHeight = props2.listHeight, listHeight = _props$listHeight === void 0 ? 256 : _props$listHeight, _props$listItemHeight = props2.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 24 : _props$listItemHeight, getPopupContainer = props2.getPopupContainer, dropdownClassName = props2.dropdownClassName, virtual = props2.virtual, dropdownMatchSelectWidth = props2.dropdownMatchSelectWidth;
      var renderEmpty2 = configProvider.renderEmpty, getContextPopupContainer = configProvider.getPopupContainer;
      var isMultiple = mode.value === "multiple" || mode.value === "tags";
      var mergedNotFound;
      if (notFoundContent !== void 0) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === "combobox") {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty2("Select");
      }
      var _getIcons = getIcons(_extends(_extends({}, props2), {
        multiple: isMultiple,
        prefixCls: prefixCls.value
      }), slots), suffixIcon = _getIcons.suffixIcon, itemIcon = _getIcons.itemIcon, removeIcon = _getIcons.removeIcon, clearIcon = _getIcons.clearIcon;
      var selectProps = omit$2(props2, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered"]);
      var rcSelectRtlDropDownClassName = classNames(dropdownClassName, _defineProperty$e({}, "".concat(prefixCls.value, "-dropdown-").concat(direction.value), direction.value === "rtl"));
      return createVNode(Select$3, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps), attrs), {}, {
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer || getContextPopupContainer,
        "dropdownClassName": rcSelectRtlDropDownClassName,
        "onChange": triggerChange3,
        "dropdownRender": selectProps.dropdownRender || slots.dropdownRender
      }), {
        default: function _default2() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        },
        option: slots.option
      });
    };
  }
});
Select.install = function(app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};
Select.Option;
Select.OptGroup;
var Select$1 = Select;
var inputProps = {
  prefixCls: PropsTypes.string,
  inputPrefixCls: PropsTypes.string,
  defaultValue: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
  value: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
  placeholder: {
    type: [String, Number]
  },
  type: PropsTypes.string.def("text"),
  name: PropsTypes.string,
  size: {
    type: String
  },
  disabled: PropsTypes.looseBool,
  readonly: PropsTypes.looseBool,
  addonBefore: PropsTypes.VNodeChild,
  addonAfter: PropsTypes.VNodeChild,
  prefix: PropsTypes.VNodeChild,
  suffix: PropsTypes.VNodeChild,
  autofocus: PropsTypes.looseBool,
  allowClear: PropsTypes.looseBool,
  lazy: PropsTypes.looseBool.def(true),
  maxlength: PropsTypes.number,
  loading: PropsTypes.looseBool,
  onPressEnter: PropsTypes.func,
  onKeydown: PropsTypes.func,
  onKeyup: PropsTypes.func,
  onFocus: PropsTypes.func,
  onBlur: PropsTypes.func,
  onChange: PropsTypes.func,
  onInput: PropsTypes.func,
  "onUpdate:value": PropsTypes.func
};
function hasPrefixSuffix(instance) {
  return !!(getComponent(instance, "prefix") || getComponent(instance, "suffix") || instance.$props.allowClear);
}
var ClearableInputType = ["text", "input"];
var ClearableLabeledInput = defineComponent({
  name: "ClearableLabeledInput",
  inheritAttrs: false,
  props: {
    prefixCls: PropsTypes.string,
    inputType: PropsTypes.oneOf(tuple("text", "input")),
    value: PropsTypes.any,
    defaultValue: PropsTypes.any,
    allowClear: PropsTypes.looseBool,
    element: PropsTypes.VNodeChild,
    handleReset: PropsTypes.func,
    disabled: PropsTypes.looseBool,
    size: PropsTypes.oneOf(tuple("small", "large", "default")),
    suffix: PropsTypes.VNodeChild,
    prefix: PropsTypes.VNodeChild,
    addonBefore: PropsTypes.VNodeChild,
    addonAfter: PropsTypes.VNodeChild,
    readonly: PropsTypes.looseBool,
    isFocused: PropsTypes.looseBool
  },
  methods: {
    renderClearIcon: function renderClearIcon(prefixCls) {
      var _this$$props = this.$props, allowClear = _this$$props.allowClear, value7 = _this$$props.value, disabled = _this$$props.disabled, readonly = _this$$props.readonly, inputType = _this$$props.inputType, handleReset3 = _this$$props.handleReset;
      if (!allowClear) {
        return null;
      }
      var showClearIcon = !disabled && !readonly && value7 !== void 0 && value7 !== null && value7 !== "";
      var className = inputType === ClearableInputType[0] ? "".concat(prefixCls, "-textarea-clear-icon") : "".concat(prefixCls, "-clear-icon");
      return createVNode(CloseCircleFilled$1, {
        "onClick": handleReset3,
        "class": classNames(className, _defineProperty$e({}, "".concat(className, "-hidden"), !showClearIcon)),
        "role": "button"
      }, null);
    },
    renderSuffix: function renderSuffix(prefixCls) {
      var _this$$props2 = this.$props, suffix = _this$$props2.suffix, allowClear = _this$$props2.allowClear;
      if (suffix || allowClear) {
        return createVNode("span", {
          "class": "".concat(prefixCls, "-suffix")
        }, [this.renderClearIcon(prefixCls), suffix]);
      }
      return null;
    },
    renderLabeledIcon: function renderLabeledIcon(prefixCls, element) {
      var _classNames2;
      var _a;
      var props2 = this.$props;
      var style = this.$attrs.style;
      var suffix = this.renderSuffix(prefixCls);
      if (!hasPrefixSuffix(this)) {
        return cloneElement(element, {
          value: props2.value
        });
      }
      var prefix = props2.prefix ? createVNode("span", {
        "class": "".concat(prefixCls, "-prefix")
      }, [props2.prefix]) : null;
      var affixWrapperCls = classNames((_a = this.$attrs) === null || _a === void 0 ? void 0 : _a.class, "".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty$e(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), props2.isFocused), _defineProperty$e(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), props2.disabled), _defineProperty$e(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), props2.size === "small"), _defineProperty$e(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), props2.size === "large"), _defineProperty$e(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), props2.suffix && props2.allowClear && this.$props.value), _classNames2));
      return createVNode("span", {
        "class": affixWrapperCls,
        "style": style
      }, [prefix, cloneElement(element, {
        style: null,
        value: props2.value,
        class: getInputClassName(prefixCls, props2.size, props2.disabled)
      }), suffix]);
    },
    renderInputWithLabel: function renderInputWithLabel(prefixCls, labeledElement) {
      var _classNames4;
      var _this$$props3 = this.$props, addonBefore = _this$$props3.addonBefore, addonAfter = _this$$props3.addonAfter, size = _this$$props3.size;
      var _this$$attrs = this.$attrs, style = _this$$attrs.style, className = _this$$attrs.class;
      if (!addonBefore && !addonAfter) {
        return labeledElement;
      }
      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? createVNode("span", {
        "class": addonClassName
      }, [addonBefore]) : null;
      var addonAfterNode = addonAfter ? createVNode("span", {
        "class": addonClassName
      }, [addonAfter]) : null;
      var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), _defineProperty$e({}, wrapperClassName, addonBefore || addonAfter));
      var mergedGroupClassName = classNames(className, "".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty$e(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === "small"), _defineProperty$e(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === "large"), _classNames4));
      return createVNode("span", {
        "class": mergedGroupClassName,
        "style": style
      }, [createVNode("span", {
        "class": mergedWrapperClassName
      }, [addonBeforeNode, cloneElement(labeledElement, {
        style: null
      }), addonAfterNode])]);
    },
    renderTextAreaWithClearIcon: function renderTextAreaWithClearIcon(prefixCls, element) {
      var _this$$props4 = this.$props, value7 = _this$$props4.value, allowClear = _this$$props4.allowClear;
      var _this$$attrs2 = this.$attrs, style = _this$$attrs2.style, className = _this$$attrs2.class;
      if (!allowClear) {
        return cloneElement(element, {
          value: value7
        });
      }
      var affixWrapperCls = classNames(className, "".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"));
      return createVNode("span", {
        "class": affixWrapperCls,
        "style": style
      }, [cloneElement(element, {
        style: null,
        value: value7
      }), this.renderClearIcon(prefixCls)]);
    },
    renderClearableLabeledInput: function renderClearableLabeledInput() {
      var _this$$props5 = this.$props, prefixCls = _this$$props5.prefixCls, inputType = _this$$props5.inputType, element = _this$$props5.element;
      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }
      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  },
  render: function render12() {
    return this.renderClearableLabeledInput();
  }
});
var ClearableLabeledInput$1 = ClearableLabeledInput;
function fixControlledValue(value7) {
  if (typeof value7 === "undefined" || value7 === null) {
    return "";
  }
  return value7;
}
function resolveOnChange(target, e2, onChange) {
  if (onChange) {
    var event = e2;
    if (e2.type === "click") {
      Object.defineProperty(event, "target", {
        writable: true
      });
      Object.defineProperty(event, "currentTarget", {
        writable: true
      });
      event.target = target;
      event.currentTarget = target;
      var originalInputValue = target.value;
      target.value = "";
      onChange(event);
      target.value = originalInputValue;
      return;
    }
    onChange(event);
  }
}
function getInputClassName(prefixCls, size, disabled) {
  var _classNames;
  return classNames(prefixCls, (_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls, "-sm"), size === "small"), _defineProperty$e(_classNames, "".concat(prefixCls, "-lg"), size === "large"), _defineProperty$e(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
}
var Input$1 = defineComponent({
  name: "AInput",
  inheritAttrs: false,
  props: _extends({}, inputProps),
  setup: function setup20() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider),
      removePasswordTimeout: void 0,
      input: null,
      clearableInput: null
    };
  },
  data: function data4() {
    var props2 = this.$props;
    var value7 = typeof props2.value === "undefined" ? props2.defaultValue : props2.value;
    return {
      stateValue: typeof value7 === "undefined" ? "" : value7,
      isFocused: false
    };
  },
  watch: {
    value: function value(val) {
      this.stateValue = val;
    }
  },
  mounted: function mounted5() {
    var _this = this;
    nextTick(function() {
      _this.clearPasswordValueAttribute();
    });
  },
  beforeUnmount: function beforeUnmount4() {
    if (this.removePasswordTimeout) {
      clearTimeout(this.removePasswordTimeout);
    }
  },
  methods: {
    handleInputFocus: function handleInputFocus(e2) {
      this.isFocused = true;
      this.onFocus && this.onFocus(e2);
    },
    handleInputBlur: function handleInputBlur(e2) {
      this.isFocused = false;
      this.onBlur && this.onBlur(e2);
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    select: function select() {
      this.input.select();
    },
    saveClearableInput: function saveClearableInput(input) {
      this.clearableInput = input;
    },
    saveInput: function saveInput(input) {
      this.input = input;
    },
    setValue: function setValue(value7, callback) {
      if (this.stateValue === value7) {
        return;
      }
      if (!hasProp(this, "value")) {
        this.stateValue = value7;
      } else {
        this.$forceUpdate();
      }
      nextTick(function() {
        callback && callback();
      });
    },
    triggerChange: function triggerChange(e2) {
      this.$emit("update:value", e2.target.value);
      this.$emit("change", e2);
      this.$emit("input", e2);
    },
    handleReset: function handleReset(e2) {
      var _this2 = this;
      this.setValue("", function() {
        _this2.focus();
      });
      resolveOnChange(this.input, e2, this.triggerChange);
    },
    renderInput: function renderInput(prefixCls, _ref) {
      var addonBefore = _ref.addonBefore, addonAfter = _ref.addonAfter;
      var otherProps = omit$2(this.$props, ["prefixCls", "onPressEnter", "addonBefore", "addonAfter", "prefix", "suffix", "allowClear", "defaultValue", "lazy", "size", "inputPrefixCls", "loading"]);
      var handleKeyDown3 = this.handleKeyDown, handleChange7 = this.handleChange, handleInputFocus2 = this.handleInputFocus, handleInputBlur2 = this.handleInputBlur, size = this.size, disabled = this.disabled, $attrs = this.$attrs;
      var inputProps2 = _extends(_extends(_extends({}, otherProps), $attrs), {
        onKeydown: handleKeyDown3,
        class: classNames(getInputClassName(prefixCls, size, disabled), _defineProperty$e({}, $attrs.class, $attrs.class && !addonBefore && !addonAfter)),
        ref: this.saveInput,
        key: "ant-input",
        onInput: handleChange7,
        onChange: handleChange7,
        onFocus: handleInputFocus2,
        onBlur: handleInputBlur2
      });
      if (!inputProps2.autofocus) {
        delete inputProps2.autofocus;
      }
      var inputNode = createVNode("input", inputProps2, null);
      return withDirectives(inputNode, [[antInput$1]]);
    },
    clearPasswordValueAttribute: function clearPasswordValueAttribute() {
      var _this3 = this;
      this.removePasswordTimeout = setTimeout(function() {
        if (_this3.input && _this3.input.getAttribute && _this3.input.getAttribute("type") === "password" && _this3.input.hasAttribute("value")) {
          _this3.input.removeAttribute("value");
        }
      });
    },
    handleChange: function handleChange(e2) {
      var _e$target = e2.target, value7 = _e$target.value, composing = _e$target.composing, isComposing = _e$target.isComposing;
      if ((isComposing || composing) && this.lazy || this.stateValue === value7)
        return;
      this.setValue(value7, this.clearPasswordValueAttribute);
      resolveOnChange(this.input, e2, this.triggerChange);
    },
    handleKeyDown: function handleKeyDown(e2) {
      if (e2.keyCode === 13) {
        this.$emit("pressEnter", e2);
      }
      this.$emit("keydown", e2);
    }
  },
  render: function render13() {
    var customizePrefixCls = this.$props.prefixCls;
    var _this$$data = this.$data, stateValue = _this$$data.stateValue, isFocused = _this$$data.isFocused;
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("input", customizePrefixCls);
    var addonAfter = getComponent(this, "addonAfter");
    var addonBefore = getComponent(this, "addonBefore");
    var suffix = getComponent(this, "suffix");
    var prefix = getComponent(this, "prefix");
    var props2 = _extends(_extends(_extends({}, this.$attrs), getOptionProps(this)), {
      prefixCls,
      inputType: "input",
      value: fixControlledValue(stateValue),
      element: this.renderInput(prefixCls, {
        addonAfter,
        addonBefore
      }),
      handleReset: this.handleReset,
      addonAfter,
      addonBefore,
      suffix,
      prefix,
      isFocused
    });
    return createVNode(ClearableLabeledInput$1, _objectSpread2$1(_objectSpread2$1({}, props2), {}, {
      "ref": this.saveClearableInput
    }), null);
  }
});
var Group$1 = defineComponent({
  name: "AInputGroup",
  props: {
    prefixCls: PropsTypes.string,
    size: PropsTypes.oneOf(tuple("small", "large", "default")),
    compact: PropsTypes.looseBool
  },
  setup: function setup21() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider)
    };
  },
  computed: {
    classes: function classes() {
      var _ref;
      var customizePrefixCls = this.prefixCls, size = this.size, _this$compact = this.compact, compact = _this$compact === void 0 ? false : _this$compact, configProvider = this.configProvider;
      var getPrefixCls2 = configProvider.getPrefixCls;
      var prefixCls = getPrefixCls2("input-group", customizePrefixCls);
      return _ref = {}, _defineProperty$e(_ref, "".concat(prefixCls), true), _defineProperty$e(_ref, "".concat(prefixCls, "-lg"), size === "large"), _defineProperty$e(_ref, "".concat(prefixCls, "-sm"), size === "small"), _defineProperty$e(_ref, "".concat(prefixCls, "-compact"), compact), _ref;
    }
  },
  render: function render14() {
    return createVNode("span", {
      "class": this.classes
    }, [getSlot(this)]);
  }
});
var applePhone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /\bAndroid(?:.+)SD4930UR\b/i;
var amazonTablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackberry = /BlackBerry/i;
var otherBlackberry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
function match(regex, userAgent) {
  return regex.test(userAgent);
}
function isMobile(userAgent) {
  var ua = userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : "");
  var tmp = ua.split("[FBAN");
  if (typeof tmp[1] !== "undefined") {
    var _tmp = tmp;
    var _tmp2 = _slicedToArray$2(_tmp, 1);
    ua = _tmp2[0];
  }
  tmp = ua.split("Twitter");
  if (typeof tmp[1] !== "undefined") {
    var _tmp3 = tmp;
    var _tmp4 = _slicedToArray$2(_tmp3, 1);
    ua = _tmp4[0];
  }
  var result = {
    apple: {
      phone: match(applePhone, ua) && !match(windowsPhone, ua),
      ipod: match(appleIpod, ua),
      tablet: !match(applePhone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),
      device: (match(applePhone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)
    },
    amazon: {
      phone: match(amazonPhone, ua),
      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),
      device: match(amazonPhone, ua) || match(amazonTablet, ua)
    },
    android: {
      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),
      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),
      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\bokhttp\b/i, ua)
    },
    windows: {
      phone: match(windowsPhone, ua),
      tablet: match(windowsTablet, ua),
      device: match(windowsPhone, ua) || match(windowsTablet, ua)
    },
    other: {
      blackberry: match(otherBlackberry, ua),
      blackberry10: match(otherBlackberry10, ua),
      opera: match(otherOpera, ua),
      firefox: match(otherFirefox, ua),
      chrome: match(otherChrome, ua),
      device: match(otherBlackberry, ua) || match(otherBlackberry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)
    },
    any: null,
    phone: null,
    tablet: null
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;
  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}
var defaultResult = _extends(_extends({}, isMobile()), {
  isMobile
});
var isMobile$1 = defaultResult;
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: "transitionstart",
    WebkitTransition: "webkitTransitionStart",
    MozTransition: "mozTransitionStart",
    OTransition: "oTransitionStart",
    msTransition: "MSTransitionStart"
  },
  animationstart: {
    animation: "animationstart",
    WebkitAnimation: "webkitAnimationStart",
    MozAnimation: "mozAnimationStart",
    OAnimation: "oAnimationStart",
    msAnimation: "MSAnimationStart"
  }
};
var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "mozTransitionEnd",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
  },
  animationend: {
    animation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd"
  }
};
var startEvents = [];
var endEvents = [];
function detectEvents() {
  var testEl = document.createElement("div");
  var style = testEl.style;
  if (!("AnimationEvent" in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }
  if (!("TransitionEvent" in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }
  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }
  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}
if (typeof window !== "undefined" && typeof document !== "undefined") {
  detectEvents();
}
function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}
function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}
var TransitionEvents = {
  startEvents,
  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function(startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function(startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },
  endEvents,
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function(endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function(endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};
var Event = TransitionEvents;
var styleForPesudo;
function isHidden(element) {
  return !element || element.offsetParent === null;
}
function isNotGrey(color) {
  var match5 = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  if (match5 && match5[1] && match5[2] && match5[3]) {
    return !(match5[1] === match5[2] && match5[2] === match5[3]);
  }
  return true;
}
var Wave = defineComponent({
  name: "Wave",
  props: ["insertExtraNode"],
  setup: function setup22() {
    var configProvider = inject("configProvider", defaultConfigProvider);
    return {
      configProvider
    };
  },
  mounted: function mounted6() {
    var _this = this;
    nextTick(function() {
      var node = findDOMNode(_this);
      if (node.nodeType !== 1) {
        return;
      }
      _this.instance = _this.bindAnimationEvent(node);
    });
  },
  beforeUnmount: function beforeUnmount5() {
    if (this.instance) {
      this.instance.cancel();
    }
    if (this.clickWaveTimeoutId) {
      clearTimeout(this.clickWaveTimeoutId);
    }
  },
  methods: {
    onClick: function onClick2(node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf("-leave") >= 0) {
        return;
      }
      var insertExtraNode = this.$props.insertExtraNode;
      this.extraNode = document.createElement("div");
      var extraNode = this.extraNode;
      extraNode.className = "ant-click-animating-node";
      var attributeName = this.getAttributeName();
      node.removeAttribute(attributeName);
      node.setAttribute(attributeName, "true");
      styleForPesudo = styleForPesudo || document.createElement("style");
      if (waveColor && waveColor !== "#ffffff" && waveColor !== "rgb(255, 255, 255)" && isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && waveColor !== "transparent") {
        if (this.csp && this.csp.nonce) {
          styleForPesudo.nonce = this.csp.nonce;
        }
        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n        [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n          --antd-wave-shadow-color: ".concat(waveColor, ";\n        }");
        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      Event.addStartEventListener(node, this.onTransitionStart);
      Event.addEndEventListener(node, this.onTransitionEnd);
    },
    onTransitionStart: function onTransitionStart(e2) {
      if (this._.isUnmounted)
        return;
      var node = findDOMNode(this);
      if (!e2 || e2.target !== node) {
        return;
      }
      if (!this.animationStart) {
        this.resetEffect(node);
      }
    },
    onTransitionEnd: function onTransitionEnd(e2) {
      if (!e2 || e2.animationName !== "fadeEffect") {
        return;
      }
      this.resetEffect(e2.target);
    },
    getAttributeName: function getAttributeName() {
      var insertExtraNode = this.$props.insertExtraNode;
      return insertExtraNode ? "ant-click-animating" : "ant-click-animating-without-extra-node";
    },
    bindAnimationEvent: function bindAnimationEvent(node) {
      var _this2 = this;
      if (!node || !node.getAttribute || node.getAttribute("disabled") || node.className.indexOf("disabled") >= 0) {
        return;
      }
      var onClick4 = function onClick5(e2) {
        if (e2.target.tagName === "INPUT" || isHidden(e2.target)) {
          return;
        }
        _this2.resetEffect(node);
        var waveColor = getComputedStyle(node).getPropertyValue("border-top-color") || getComputedStyle(node).getPropertyValue("border-color") || getComputedStyle(node).getPropertyValue("background-color");
        _this2.clickWaveTimeoutId = window.setTimeout(function() {
          return _this2.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this2.animationStartId);
        _this2.animationStart = true;
        _this2.animationStartId = wrapperRaf(function() {
          _this2.animationStart = false;
        }, 10);
      };
      node.addEventListener("click", onClick4, true);
      return {
        cancel: function cancel2() {
          node.removeEventListener("click", onClick4, true);
        }
      };
    },
    resetEffect: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = this.$props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, "false");
      if (styleForPesudo) {
        styleForPesudo.innerHTML = "";
      }
      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }
      Event.removeStartEventListener(node, this.onTransitionStart);
      Event.removeEndEventListener(node, this.onTransitionEnd);
    }
  },
  render: function render15() {
    var _a, _b;
    var csp = this.configProvider.csp;
    if (csp) {
      this.csp = csp;
    }
    return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)[0];
  }
});
var ButtonTypes = tuple("default", "primary", "ghost", "dashed", "link", "text");
var ButtonShapes = tuple("circle", "round");
var ButtonHTMLTypes = tuple("submit", "button", "reset");
var buttonProps = function buttonProps2() {
  return {
    prefixCls: PropsTypes.string,
    type: PropsTypes.oneOf(ButtonTypes),
    htmlType: PropsTypes.oneOf(ButtonHTMLTypes).def("button"),
    shape: PropsTypes.oneOf(ButtonShapes),
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function _default2() {
        return false;
      }
    },
    disabled: PropsTypes.looseBool,
    ghost: PropsTypes.looseBool,
    block: PropsTypes.looseBool,
    danger: PropsTypes.looseBool,
    icon: PropsTypes.VNodeChild,
    href: PropsTypes.string,
    target: PropsTypes.string,
    title: PropsTypes.string,
    onClick: {
      type: Function
    }
  };
};
var buttonTypes = buttonProps;
var devWarning = function(valid, component, message) {
  warningOnce(valid, "[ant-design-vue: ".concat(component, "] ").concat(message));
};
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
var props$2 = buttonTypes();
function isUnborderedButtonType(type) {
  return type === "text" || type === "link";
}
var Button$1 = defineComponent({
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: props$2,
  slots: ["icon"],
  emits: ["click"],
  setup: function setup23(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit2 = _ref.emit;
    var _useConfigInject = useConfigInject("btn", props2), prefixCls = _useConfigInject.prefixCls, autoInsertSpaceInButton = _useConfigInject.autoInsertSpaceInButton, direction = _useConfigInject.direction;
    var buttonNodeRef = ref(null);
    var delayTimeoutRef = ref(void 0);
    var isNeedInserted = false;
    var innerLoading = ref(false);
    var hasTwoCNChar = ref(false);
    var autoInsertSpace = computed(function() {
      return autoInsertSpaceInButton.value !== false;
    });
    var loadingOrDelay = computed(function() {
      return _typeof$1(props2.loading) === "object" && props2.loading.delay ? props2.loading.delay || true : !!props2.loading;
    });
    watch(loadingOrDelay, function(val) {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = window.setTimeout(function() {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    var classes2 = computed(function() {
      var _ref2;
      var type = props2.type, shape = props2.shape, size = props2.size, ghost = props2.ghost, block = props2.block, danger = props2.danger;
      var pre = prefixCls.value;
      var sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
      }
      return _ref2 = {}, _defineProperty$e(_ref2, "".concat(pre), true), _defineProperty$e(_ref2, "".concat(pre, "-").concat(type), type), _defineProperty$e(_ref2, "".concat(pre, "-").concat(shape), shape), _defineProperty$e(_ref2, "".concat(pre, "-").concat(sizeCls), sizeCls), _defineProperty$e(_ref2, "".concat(pre, "-loading"), innerLoading.value), _defineProperty$e(_ref2, "".concat(pre, "-background-ghost"), ghost && !isUnborderedButtonType(type)), _defineProperty$e(_ref2, "".concat(pre, "-two-chinese-chars"), hasTwoCNChar.value && autoInsertSpace.value), _defineProperty$e(_ref2, "".concat(pre, "-block"), block), _defineProperty$e(_ref2, "".concat(pre, "-dangerous"), !!danger), _defineProperty$e(_ref2, "".concat(pre, "-rtl"), direction.value === "rtl"), _ref2;
    });
    var fixTwoCNChar = function fixTwoCNChar2() {
      var node = buttonNodeRef.value;
      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }
      var buttonText = node.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    var handleClick = function handleClick2(event) {
      if (innerLoading.value || props2.disabled) {
        event.preventDefault();
        return;
      }
      emit2("click", event);
    };
    var insertSpace = function insertSpace2(child, needInserted) {
      var SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        var text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(function() {
      devWarning(!(props2.ghost && isUnborderedButtonType(props2.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    onMounted(fixTwoCNChar);
    onUpdated(fixTwoCNChar);
    onBeforeUnmount(function() {
      delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
    });
    return function() {
      var children = flattenChildren(getPropsSlot(slots, props2));
      var icon = getPropsSlot(slots, props2, "icon");
      isNeedInserted = children.length === 1 && !icon && !isUnborderedButtonType(props2.type);
      var type = props2.type, htmlType = props2.htmlType, disabled = props2.disabled, href = props2.href, title = props2.title, target = props2.target;
      var iconType = innerLoading.value ? "loading" : icon;
      var buttonProps3 = _extends(_extends({}, attrs), {
        title,
        disabled,
        class: [classes2.value, attrs.class, _defineProperty$e({}, "".concat(prefixCls.value, "-icon-only"), children.length === 0 && !!iconType)],
        onClick: handleClick
      });
      var iconNode = innerLoading.value ? createVNode(LoadingOutlined$1, null, null) : icon;
      var kids = children.map(function(child) {
        return insertSpace(child, isNeedInserted && autoInsertSpace.value);
      });
      if (href !== void 0) {
        return createVNode("a", _objectSpread2$1(_objectSpread2$1({}, buttonProps3), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]);
      }
      var buttonNode = createVNode("button", _objectSpread2$1(_objectSpread2$1({}, buttonProps3), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (isUnborderedButtonType(type)) {
        return buttonNode;
      }
      return createVNode(Wave, {
        "ref": "wave"
      }, {
        default: function _default2() {
          return [buttonNode];
        }
      });
    };
  }
});
var buttonGroupProps = {
  prefixCls: PropsTypes.string,
  size: {
    type: String
  }
};
var ButtonGroup = defineComponent({
  name: "AButtonGroup",
  props: buttonGroupProps,
  setup: function setup24(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("btn-group", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var classes2 = computed(function() {
      var _ref2;
      var size = props2.size;
      var sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
      }
      return _ref2 = {}, _defineProperty$e(_ref2, "".concat(prefixCls.value), true), _defineProperty$e(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls), sizeCls), _defineProperty$e(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _ref2;
    });
    return function() {
      var _a;
      return createVNode("div", {
        "class": classes2.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
Button$1.Group = ButtonGroup;
Button$1.install = function(app) {
  app.component(Button$1.name, Button$1);
  app.component(ButtonGroup.name, ButtonGroup);
  return app;
};
var __rest$6 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var Search = defineComponent({
  name: "AInputSearch",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps), {
    enterButton: PropsTypes.VNodeChild,
    onSearch: PropsTypes.func
  }),
  setup: function setup25() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider),
      input: null
    };
  },
  methods: {
    saveInput: function saveInput2(node) {
      this.input = node;
    },
    handleChange: function handleChange2(e2) {
      this.$emit("update:value", e2.target.value);
      if (e2 && e2.target && e2.type === "click") {
        this.$emit("search", e2.target.value, e2);
      }
      this.$emit("change", e2);
    },
    handleSearch: function handleSearch(e2) {
      if (this.loading || this.disabled) {
        return;
      }
      this.$emit("search", this.input.stateValue, e2);
      if (!isMobile$1.tablet) {
        this.input.focus();
      }
    },
    focus: function focus2() {
      this.input.focus();
    },
    blur: function blur2() {
      this.input.blur();
    },
    renderLoading: function renderLoading(prefixCls) {
      var size = this.$props.size;
      var enterButton = getComponent(this, "enterButton");
      enterButton = enterButton || enterButton === "";
      if (enterButton) {
        return createVNode(Button$1, {
          "class": "".concat(prefixCls, "-button"),
          "type": "primary",
          "size": size,
          "key": "enterButton"
        }, {
          default: function _default2() {
            return [createVNode(LoadingOutlined$1, null, null)];
          }
        });
      }
      return createVNode(LoadingOutlined$1, {
        "class": "".concat(prefixCls, "-icon"),
        "key": "loadingIcon"
      }, null);
    },
    renderSuffix: function renderSuffix2(prefixCls) {
      var loading = this.loading;
      var suffix = getComponent(this, "suffix");
      var enterButton = getComponent(this, "enterButton");
      enterButton = enterButton || enterButton === "";
      if (loading && !enterButton) {
        return [suffix, this.renderLoading(prefixCls)];
      }
      if (enterButton)
        return suffix;
      var icon = createVNode(SearchOutlined$1, {
        "class": "".concat(prefixCls, "-icon"),
        "key": "searchIcon",
        "onClick": this.handleSearch
      }, null);
      if (suffix) {
        return [suffix, icon];
      }
      return icon;
    },
    renderAddonAfter: function renderAddonAfter(prefixCls) {
      var size = this.size, disabled = this.disabled, loading = this.loading;
      var btnClassName = "".concat(prefixCls, "-button");
      var enterButton = getComponent(this, "enterButton");
      enterButton = enterButton || enterButton === "";
      var addonAfter = getComponent(this, "addonAfter");
      if (loading && enterButton) {
        return [this.renderLoading(prefixCls), addonAfter];
      }
      if (!enterButton)
        return addonAfter;
      var enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      var button;
      var isAntdButton = enterButtonAsElement.type && isPlainObject(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;
      if (enterButtonAsElement.tagName === "button" || isAntdButton) {
        button = cloneElement(enterButtonAsElement, _extends(_extends({
          key: "enterButton",
          class: isAntdButton ? btnClassName : ""
        }, isAntdButton ? {
          size
        } : {}), {
          onClick: this.handleSearch
        }));
      } else {
        button = createVNode(Button$1, {
          "class": btnClassName,
          "type": "primary",
          "size": size,
          "disabled": disabled,
          "key": "enterButton",
          "onClick": this.handleSearch
        }, {
          default: function _default2() {
            return [enterButton === true || enterButton === "" ? createVNode(SearchOutlined$1, null, null) : enterButton];
          }
        });
      }
      if (addonAfter) {
        return [button, addonAfter];
      }
      return button;
    }
  },
  render: function render16() {
    var _a = _extends(_extends({}, getOptionProps(this)), this.$attrs), customizePrefixCls = _a.prefixCls, customizeInputPrefixCls = _a.inputPrefixCls, size = _a.size, className = _a.class, restProps = __rest$6(_a, ["prefixCls", "inputPrefixCls", "size", "class"]);
    delete restProps.onSearch;
    delete restProps.loading;
    delete restProps.enterButton;
    delete restProps.addonBefore;
    delete restProps["onUpdate:value"];
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("input-search", customizePrefixCls);
    var inputPrefixCls = getPrefixCls2("input", customizeInputPrefixCls);
    var enterButton = getComponent(this, "enterButton");
    var addonBefore = getComponent(this, "addonBefore");
    enterButton = enterButton || enterButton === "";
    var inputClassName;
    if (enterButton) {
      var _classNames;
      inputClassName = classNames(prefixCls, className, (_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls, "-enter-button"), !!enterButton), _defineProperty$e(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _classNames));
    } else {
      inputClassName = classNames(prefixCls, className);
    }
    var inputProps2 = _extends(_extends({}, restProps), {
      prefixCls: inputPrefixCls,
      size,
      suffix: this.renderSuffix(prefixCls),
      prefix: getComponent(this, "prefix"),
      addonAfter: this.renderAddonAfter(prefixCls),
      addonBefore,
      class: inputClassName,
      onPressEnter: this.handleSearch,
      onChange: this.handleChange
    });
    return createVNode(Input$1, _objectSpread2$1(_objectSpread2$1({}, inputProps2), {}, {
      "ref": this.saveInput
    }), null);
  }
});
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  var paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  var borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  var sizingStyle = SIZING_STYLE.map(function(name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(";");
  var nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
  hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  var minHeight = Number.MIN_SAFE_INTEGER;
  var maxHeight = Number.MAX_SAFE_INTEGER;
  var height = hiddenTextarea.scrollHeight;
  var overflowY;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  return {
    height: "".concat(height, "px"),
    minHeight: "".concat(minHeight, "px"),
    maxHeight: "".concat(maxHeight, "px"),
    overflowY,
    resize: "none"
  };
}
var RESIZE_STATUS_NONE = 0;
var RESIZE_STATUS_RESIZING = 1;
var RESIZE_STATUS_RESIZED = 2;
var TextAreaProps$1 = _extends(_extends({}, inputProps), {
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: PropsTypes.func
});
var ResizableTextArea = defineComponent({
  name: "ResizableTextArea",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: TextAreaProps$1,
  setup: function setup26() {
    return {
      nextFrameActionId: void 0,
      textArea: null,
      resizeFrameId: void 0
    };
  },
  data: function data5() {
    return {
      textareaStyles: {},
      resizeStatus: RESIZE_STATUS_NONE
    };
  },
  watch: {
    value: function value2() {
      var _this = this;
      nextTick(function() {
        _this.resizeTextarea();
      });
    }
  },
  mounted: function mounted7() {
    this.resizeTextarea();
  },
  beforeUnmount: function beforeUnmount6() {
    wrapperRaf.cancel(this.nextFrameActionId);
    wrapperRaf.cancel(this.resizeFrameId);
  },
  methods: {
    saveTextArea: function saveTextArea(textArea) {
      this.textArea = textArea;
    },
    handleResize: function handleResize(size) {
      var resizeStatus = this.$data.resizeStatus;
      if (resizeStatus !== RESIZE_STATUS_NONE) {
        return;
      }
      this.$emit("resize", size);
    },
    resizeOnNextFrame: function resizeOnNextFrame() {
      wrapperRaf.cancel(this.nextFrameActionId);
      this.nextFrameActionId = wrapperRaf(this.resizeTextarea);
    },
    resizeTextarea: function resizeTextarea() {
      var _this2 = this;
      var autoSize = this.$props.autoSize || this.$props.autosize;
      if (!autoSize || !this.textArea) {
        return;
      }
      var minRows = autoSize.minRows, maxRows = autoSize.maxRows;
      var textareaStyles = calculateNodeHeight(this.textArea, false, minRows, maxRows);
      this.setState({
        textareaStyles,
        resizeStatus: RESIZE_STATUS_RESIZING
      }, function() {
        wrapperRaf.cancel(_this2.resizeFrameId);
        _this2.resizeFrameId = wrapperRaf(function() {
          _this2.setState({
            resizeStatus: RESIZE_STATUS_RESIZED
          }, function() {
            _this2.resizeFrameId = wrapperRaf(function() {
              _this2.setState({
                resizeStatus: RESIZE_STATUS_NONE
              });
              _this2.fixFirefoxAutoScroll();
            });
          });
        });
      });
    },
    fixFirefoxAutoScroll: function fixFirefoxAutoScroll() {
      try {
        if (document.activeElement === this.textArea) {
          var currentStart = this.textArea.selectionStart;
          var currentEnd = this.textArea.selectionEnd;
          this.textArea.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e2) {
      }
    },
    renderTextArea: function renderTextArea() {
      var _this3 = this;
      var props2 = _extends(_extends({}, getOptionProps(this)), this.$attrs);
      var prefixCls = props2.prefixCls, autoSize = props2.autoSize, autosize = props2.autosize, disabled = props2.disabled, className = props2.class;
      var _this$$data = this.$data, textareaStyles = _this$$data.textareaStyles, resizeStatus = _this$$data.resizeStatus;
      warning$1(autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
      var otherProps = omit$2(props2, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "lazy"]);
      var cls = classNames(prefixCls, className, _defineProperty$e({}, "".concat(prefixCls, "-disabled"), disabled));
      if ("value" in otherProps) {
        otherProps.value = otherProps.value || "";
      }
      var style = _extends(_extends(_extends({}, props2.style), textareaStyles), resizeStatus === RESIZE_STATUS_RESIZING ? {
        overflowX: "hidden",
        overflowY: "hidden"
      } : null);
      var textareaProps = _extends(_extends({}, otherProps), {
        style,
        class: cls
      });
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      return createVNode(ResizeObserver, {
        "onResize": this.handleResize,
        "disabled": !(autoSize || autosize)
      }, {
        default: function _default2() {
          return [withDirectives(createVNode("textarea", _objectSpread2$1(_objectSpread2$1({}, textareaProps), {}, {
            "ref": _this3.saveTextArea
          }), null), [[antInput$1]])];
        }
      });
    }
  },
  render: function render17() {
    return this.renderTextArea();
  }
});
var ResizableTextArea$1 = ResizableTextArea;
var TextAreaProps = _extends(_extends({}, inputProps), {
  autosize: withUndefined(PropsTypes.oneOfType([Object, Boolean])),
  autoSize: withUndefined(PropsTypes.oneOfType([Object, Boolean])),
  showCount: PropsTypes.looseBool,
  onCompositionstart: PropsTypes.func,
  onCompositionend: PropsTypes.func
});
var TextArea = defineComponent({
  name: "ATextarea",
  inheritAttrs: false,
  props: _extends({}, TextAreaProps),
  setup: function setup27() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider),
      resizableTextArea: null,
      clearableInput: null
    };
  },
  data: function data6() {
    var value7 = typeof this.value === "undefined" ? this.defaultValue : this.value;
    return {
      stateValue: typeof value7 === "undefined" ? "" : value7
    };
  },
  watch: {
    value: function value3(val) {
      this.stateValue = val;
    }
  },
  mounted: function mounted8() {
    nextTick(function() {
    });
  },
  methods: {
    setValue: function setValue2(value7, callback) {
      if (!hasProp(this, "value")) {
        this.stateValue = value7;
      } else {
        this.$forceUpdate();
      }
      nextTick(function() {
        callback && callback();
      });
    },
    handleKeyDown: function handleKeyDown2(e2) {
      if (e2.keyCode === 13) {
        this.$emit("pressEnter", e2);
      }
      this.$emit("keydown", e2);
    },
    triggerChange: function triggerChange2(e2) {
      this.$emit("update:value", e2.target.value);
      this.$emit("change", e2);
      this.$emit("input", e2);
    },
    handleChange: function handleChange3(e2) {
      var _this2 = this;
      var _e$target = e2.target, value7 = _e$target.value, composing = _e$target.composing, isComposing = _e$target.isComposing;
      if ((isComposing || composing) && this.lazy || this.stateValue === value7)
        return;
      this.setValue(e2.target.value, function() {
        var _a;
        (_a = _this2.resizableTextArea) === null || _a === void 0 ? void 0 : _a.resizeTextarea();
      });
      resolveOnChange(this.resizableTextArea.textArea, e2, this.triggerChange);
    },
    focus: function focus3() {
      this.resizableTextArea.textArea.focus();
    },
    blur: function blur3() {
      this.resizableTextArea.textArea.blur();
    },
    saveTextArea: function saveTextArea2(resizableTextArea) {
      this.resizableTextArea = resizableTextArea;
    },
    saveClearableInput: function saveClearableInput2(clearableInput) {
      this.clearableInput = clearableInput;
    },
    handleReset: function handleReset2(e2) {
      var _this3 = this;
      this.setValue("", function() {
        _this3.resizableTextArea.renderTextArea();
        _this3.focus();
      });
      resolveOnChange(this.resizableTextArea.textArea, e2, this.triggerChange);
    },
    renderTextArea: function renderTextArea2(prefixCls) {
      var props2 = getOptionProps(this);
      var _this$$attrs = this.$attrs, style = _this$$attrs.style, customClass = _this$$attrs.class;
      var resizeProps = _extends(_extends(_extends({}, props2), this.$attrs), {
        style: !props2.showCount && style,
        class: !props2.showCount && customClass,
        showCount: null,
        prefixCls,
        onInput: this.handleChange,
        onChange: this.handleChange,
        onKeydown: this.handleKeyDown
      });
      return createVNode(ResizableTextArea$1, _objectSpread2$1(_objectSpread2$1({}, resizeProps), {}, {
        "ref": this.saveTextArea
      }), null);
    }
  },
  render: function render18() {
    var stateValue = this.stateValue, customizePrefixCls = this.prefixCls, maxlength = this.maxlength, showCount = this.showCount;
    var _this$$attrs2 = this.$attrs, style = _this$$attrs2.style, customClass = _this$$attrs2.class;
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("input", customizePrefixCls);
    var value7 = fixControlledValue(stateValue);
    var hasMaxlength = Number(maxlength) > 0;
    value7 = hasMaxlength ? value7.slice(0, maxlength) : value7;
    var props2 = _extends(_extends(_extends({}, getOptionProps(this)), this.$attrs), {
      prefixCls,
      inputType: "text",
      element: this.renderTextArea(prefixCls),
      handleReset: this.handleReset
    });
    var textareaNode = createVNode(ClearableLabeledInput$1, _objectSpread2$1(_objectSpread2$1({}, props2), {}, {
      "value": value7,
      "ref": this.saveClearableInput
    }), null);
    if (showCount) {
      var valueLength = _toConsumableArray(value7).length;
      var dataCount = "".concat(valueLength).concat(hasMaxlength ? " / ".concat(maxlength) : "");
      textareaNode = createVNode("div", {
        "class": classNames("".concat(prefixCls, "-textarea"), "".concat(prefixCls, "-textarea-show-count"), customClass),
        "style": style,
        "data-count": dataCount
      }, [textareaNode]);
    }
    return textareaNode;
  }
});
var EyeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
var EyeOutlinedSvg = EyeOutlined$2;
function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var EyeOutlined = function EyeOutlined2(props2, context) {
  var p = _objectSpread$3({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": EyeOutlinedSvg
  }), null);
};
EyeOutlined.displayName = "EyeOutlined";
EyeOutlined.inheritAttrs = false;
var EyeOutlined$1 = EyeOutlined;
var EyeInvisibleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
var EyeInvisibleOutlinedSvg = EyeInvisibleOutlined$2;
function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var EyeInvisibleOutlined = function EyeInvisibleOutlined2(props2, context) {
  var p = _objectSpread$2({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": EyeInvisibleOutlinedSvg
  }), null);
};
EyeInvisibleOutlined.displayName = "EyeInvisibleOutlined";
EyeInvisibleOutlined.inheritAttrs = false;
var EyeInvisibleOutlined$1 = EyeInvisibleOutlined;
var __rest$5 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var ActionMap = {
  click: "onClick",
  hover: "onMouseover"
};
var Password = defineComponent({
  name: "AInputPassword",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps), {
    prefixCls: PropsTypes.string,
    inputPrefixCls: PropsTypes.string,
    action: PropsTypes.string.def("click"),
    visibilityToggle: PropsTypes.looseBool.def(true),
    iconRender: PropsTypes.func.def(function(visible2) {
      return visible2 ? createVNode(EyeOutlined$1, null, null) : createVNode(EyeInvisibleOutlined$1, null, null);
    })
  }),
  setup: function setup28() {
    return {
      input: null,
      configProvider: inject("configProvider", defaultConfigProvider)
    };
  },
  data: function data7() {
    return {
      visible: false
    };
  },
  methods: {
    saveInput: function saveInput3(node) {
      this.input = node;
    },
    focus: function focus4() {
      this.input.focus();
    },
    blur: function blur4() {
      this.input.blur();
    },
    onVisibleChange: function onVisibleChange() {
      if (this.disabled) {
        return;
      }
      this.setState({
        visible: !this.visible
      });
    },
    getIcon: function getIcon(prefixCls) {
      var _iconProps;
      var action = this.$props.action;
      var iconTrigger = ActionMap[action] || "";
      var iconRender = this.$slots.iconRender || this.$props.iconRender;
      var icon = iconRender(this.visible);
      var iconProps = (_iconProps = {}, _defineProperty$e(_iconProps, iconTrigger, this.onVisibleChange), _defineProperty$e(_iconProps, "onMousedown", function onMousedown2(e2) {
        e2.preventDefault();
      }), _defineProperty$e(_iconProps, "onMouseup", function onMouseup(e2) {
        e2.preventDefault();
      }), _defineProperty$e(_iconProps, "class", "".concat(prefixCls, "-icon")), _defineProperty$e(_iconProps, "key", "passwordIcon"), _iconProps);
      return cloneElement(icon, iconProps);
    }
  },
  render: function render19() {
    var _a = getOptionProps(this), customizePrefixCls = _a.prefixCls, customizeInputPrefixCls = _a.inputPrefixCls, size = _a.size;
    _a.suffix;
    _a.action;
    var visibilityToggle = _a.visibilityToggle;
    _a.iconRender;
    var restProps = __rest$5(_a, ["prefixCls", "inputPrefixCls", "size", "suffix", "action", "visibilityToggle", "iconRender"]);
    var className = this.$attrs.class;
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var inputPrefixCls = getPrefixCls2("input", customizeInputPrefixCls);
    var prefixCls = getPrefixCls2("input-password", customizePrefixCls);
    var suffixIcon = visibilityToggle && this.getIcon(prefixCls);
    var inputClassName = classNames(prefixCls, className, _defineProperty$e({}, "".concat(prefixCls, "-").concat(size), !!size));
    var inputProps2 = _extends(_extends(_extends(_extends({}, restProps), {
      prefixCls: inputPrefixCls,
      size,
      suffix: suffixIcon,
      prefix: getComponent(this, "prefix"),
      addonAfter: getComponent(this, "addonAfter"),
      addonBefore: getComponent(this, "addonBefore")
    }), this.$attrs), {
      type: this.visible ? "text" : "password",
      class: inputClassName,
      ref: "input"
    });
    return createVNode(Input$1, _objectSpread2$1(_objectSpread2$1({}, inputProps2), {}, {
      "ref": this.saveInput
    }), null);
  }
});
Input$1.Group = Group$1;
Input$1.Search = Search;
Input$1.TextArea = TextArea;
Input$1.Password = Password;
Input$1.install = function(app) {
  app.component(Input$1.name, Input$1);
  app.component(Input$1.Group.name, Input$1.Group);
  app.component(Input$1.Search.name, Input$1.Search);
  app.component(Input$1.TextArea.name, Input$1.TextArea);
  app.component(Input$1.Password.name, Input$1.Password);
  return app;
};
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset$1 = [0, 0];
var placements = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  }
};
var Content = {
  name: "Content",
  props: {
    prefixCls: PropsTypes.string,
    overlay: PropsTypes.any,
    trigger: PropsTypes.any,
    overlayInnerStyle: PropsTypes.any
  },
  updated: function updated4() {
    var trigger2 = this.trigger;
    if (trigger2) {
      trigger2.forcePopupAlign();
    }
  },
  render: function render20() {
    var overlay = this.overlay, prefixCls = this.prefixCls, overlayInnerStyle = this.overlayInnerStyle;
    return createVNode("div", {
      "class": "".concat(prefixCls, "-inner"),
      "role": "tooltip",
      "style": overlayInnerStyle
    }, [typeof overlay === "function" ? overlay() : overlay]);
  }
};
var __rest$4 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
function noop$2() {
}
var Tooltip$1 = defineComponent({
  name: "Tooltip",
  inheritAttrs: false,
  props: {
    trigger: PropsTypes.any.def(["hover"]),
    defaultVisible: PropsTypes.looseBool,
    visible: PropsTypes.looseBool,
    placement: PropsTypes.string.def("right"),
    transitionName: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.object]),
    animation: PropsTypes.any,
    afterVisibleChange: PropsTypes.func.def(function() {
    }),
    overlay: PropsTypes.any,
    overlayStyle: PropsTypes.object,
    overlayClassName: PropsTypes.string,
    prefixCls: PropsTypes.string.def("rc-tooltip"),
    mouseEnterDelay: PropsTypes.number.def(0),
    mouseLeaveDelay: PropsTypes.number.def(0.1),
    getTooltipContainer: PropsTypes.func,
    destroyTooltipOnHide: PropsTypes.looseBool.def(false),
    align: PropsTypes.object.def(function() {
      return {};
    }),
    arrowContent: PropsTypes.any.def(null),
    tipId: PropsTypes.string,
    builtinPlacements: PropsTypes.object,
    overlayInnerStyle: PropsTypes.style
  },
  methods: {
    getPopupElement: function getPopupElement3() {
      var _this$$props = this.$props, prefixCls = _this$$props.prefixCls, tipId = _this$$props.tipId, overlayInnerStyle = _this$$props.overlayInnerStyle;
      return [createVNode("div", {
        "class": "".concat(prefixCls, "-arrow"),
        "key": "arrow"
      }, [getComponent(this, "arrowContent")]), createVNode(Content, {
        "key": "content",
        "trigger": this.$refs.trigger,
        "prefixCls": prefixCls,
        "id": tipId,
        "overlay": getComponent(this, "overlay"),
        "overlayInnerStyle": overlayInnerStyle
      }, null)];
    },
    getPopupDomNode: function getPopupDomNode3() {
      return this.$refs.trigger.getPopupDomNode();
    }
  },
  render: function render21(h2) {
    var _this = this;
    var _a = getOptionProps(this), overlayClassName = _a.overlayClassName, trigger2 = _a.trigger, mouseEnterDelay = _a.mouseEnterDelay, mouseLeaveDelay = _a.mouseLeaveDelay, overlayStyle = _a.overlayStyle, prefixCls = _a.prefixCls, afterVisibleChange = _a.afterVisibleChange, transitionName = _a.transitionName, animation = _a.animation, placement = _a.placement, align = _a.align, destroyTooltipOnHide = _a.destroyTooltipOnHide, defaultVisible = _a.defaultVisible, getTooltipContainer = _a.getTooltipContainer, restProps = __rest$4(_a, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer"]);
    var extraProps = _extends({}, restProps);
    if (hasProp(this, "visible")) {
      extraProps.popupVisible = this.$props.visible;
    }
    var $attrs = this.$attrs;
    var triggerProps = _extends(_extends(_extends({
      popupClassName: overlayClassName,
      prefixCls,
      action: trigger2,
      builtinPlacements: placements,
      popupPlacement: placement,
      popupAlign: align,
      getPopupContainer: getTooltipContainer,
      afterPopupVisibleChange: afterVisibleChange,
      popupTransitionName: transitionName,
      popupAnimation: animation,
      defaultPopupVisible: defaultVisible,
      destroyPopupOnHide: destroyTooltipOnHide,
      mouseLeaveDelay,
      popupStyle: overlayStyle,
      mouseEnterDelay
    }, extraProps), $attrs), {
      onPopupVisibleChange: $attrs.onVisibleChange || noop$2,
      onPopupAlign: $attrs.onPopupAlign || noop$2,
      ref: "trigger",
      popup: this.getPopupElement()
    });
    return createVNode(Trigger, triggerProps, {
      default: function _default2() {
        return [getSlot(_this)[0]];
      }
    });
  }
});
var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow2) {
  if (typeof autoAdjustOverflow2 === "boolean") {
    return autoAdjustOverflow2 ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }
  return _extends(_extends({}, autoAdjustOverflowDisabled), autoAdjustOverflow2);
}
function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth, arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth, _config$horizontalArr = config.horizontalArrowShift, horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr, _config$verticalArrow = config.verticalArrowShift, verticalArrowShift = _config$verticalArrow === void 0 ? 12 : _config$verticalArrow, _config$autoAdjustOve = config.autoAdjustOverflow, autoAdjustOverflow2 = _config$autoAdjustOve === void 0 ? true : _config$autoAdjustOve;
  var placementMap = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function(key) {
    placementMap[key] = config.arrowPointAtCenter ? _extends(_extends({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow2),
      targetOffset
    }) : _extends(_extends({}, placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow2)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}
var PresetStatusColorTypes = tuple("success", "processing", "error", "default", "warning");
var PresetColorTypes = tuple("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime");
var triggerType = PropsTypes.oneOf(tuple("hover", "focus", "click", "contextmenu"));
var abstractTooltipProps = function() {
  return {
    trigger: PropsTypes.oneOfType([triggerType, PropsTypes.arrayOf(triggerType)]).def("hover"),
    visible: PropsTypes.looseBool,
    defaultVisible: PropsTypes.looseBool,
    placement: PropsTypes.oneOf(tuple("top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom")).def("top"),
    color: PropsTypes.string,
    transitionName: PropsTypes.string.def("zoom-big-fast"),
    overlayStyle: PropsTypes.object.def(function() {
      return {};
    }),
    overlayClassName: PropsTypes.string,
    openClassName: PropsTypes.string,
    prefixCls: PropsTypes.string,
    mouseEnterDelay: PropsTypes.number.def(0.1),
    mouseLeaveDelay: PropsTypes.number.def(0.1),
    getPopupContainer: PropsTypes.func,
    arrowPointAtCenter: PropsTypes.looseBool.def(false),
    autoAdjustOverflow: PropsTypes.oneOfType([PropsTypes.looseBool, PropsTypes.object]).def(true),
    destroyTooltipOnHide: PropsTypes.looseBool.def(false),
    align: PropsTypes.object.def(function() {
      return {};
    }),
    builtinPlacements: PropsTypes.object,
    children: PropsTypes.array,
    onVisibleChange: PropsTypes.func,
    "onUpdate:visible": PropsTypes.func
  };
};
var splitObject = function splitObject2(obj, keys2) {
  var picked = {};
  var omitted = _extends({}, obj);
  keys2.forEach(function(key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked,
    omitted
  };
};
var props$1 = abstractTooltipProps();
var PresetColorRegex$1 = new RegExp("^(".concat(PresetColorTypes.join("|"), ")(-inverse)?$"));
var tooltipProps = _extends(_extends({}, props$1), {
  title: PropsTypes.VNodeChild
});
var ToolTip = defineComponent({
  name: "ATooltip",
  inheritAttrs: false,
  props: tooltipProps,
  emits: ["update:visible", "visibleChange"],
  setup: function setup29() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider)
    };
  },
  data: function data8() {
    return {
      sVisible: !!this.$props.visible || !!this.$props.defaultVisible
    };
  },
  watch: {
    visible: function visible(val) {
      this.sVisible = val;
    }
  },
  methods: {
    handleVisibleChange: function handleVisibleChange(visible2) {
      if (!hasProp(this, "visible")) {
        this.sVisible = this.isNoTitle() ? false : visible2;
      }
      if (!this.isNoTitle()) {
        this.$emit("update:visible", visible2);
        this.$emit("visibleChange", visible2);
      }
    },
    getPopupDomNode: function getPopupDomNode4() {
      return this.$refs.tooltip.getPopupDomNode();
    },
    getPlacements: function getPlacements$1() {
      var _this$$props = this.$props, builtinPlacements = _this$$props.builtinPlacements, arrowPointAtCenter = _this$$props.arrowPointAtCenter, autoAdjustOverflow2 = _this$$props.autoAdjustOverflow;
      return builtinPlacements || getPlacements({
        arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow2
      });
    },
    getDisabledCompatibleChildren: function getDisabledCompatibleChildren(ele) {
      if ((_typeof$1(ele.type) === "object" && (ele.type.__ANT_BUTTON === true || ele.type.__ANT_SWITCH === true || ele.type.__ANT_CHECKBOX === true) || ele.type === "button") && ele.props && (ele.props.disabled || ele.props.disabled === "")) {
        var _splitObject = splitObject(getStyle(ele), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), picked = _splitObject.picked, omitted = _splitObject.omitted;
        var spanStyle = _extends(_extends({
          display: "inline-block"
        }, picked), {
          cursor: "not-allowed",
          width: ele.props && ele.props.block ? "100%" : null
        });
        var buttonStyle = _extends(_extends({}, omitted), {
          pointerEvents: "none"
        });
        var child = cloneElement(ele, {
          style: buttonStyle
        }, true);
        return createVNode("span", {
          "style": spanStyle
        }, [child]);
      }
      return ele;
    },
    isNoTitle: function isNoTitle() {
      var title = getComponent(this, "title");
      return !title && title !== 0;
    },
    getOverlay: function getOverlay() {
      var title = getComponent(this, "title");
      if (title === 0) {
        return title;
      }
      return title || "";
    },
    onPopupAlign: function onPopupAlign(domNode, align) {
      var placements2 = this.getPlacements();
      var placement = Object.keys(placements2).filter(function(key) {
        return placements2[key].points[0] === align.points[0] && placements2[key].points[1] === align.points[1];
      })[0];
      if (!placement) {
        return;
      }
      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: "50%",
        left: "50%"
      };
      if (placement.indexOf("top") >= 0 || placement.indexOf("Bottom") >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf("Top") >= 0 || placement.indexOf("bottom") >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }
      if (placement.indexOf("left") >= 0 || placement.indexOf("Right") >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf("right") >= 0 || placement.indexOf("Left") >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }
      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    }
  },
  render: function render22() {
    var _classNames;
    var $props = this.$props, $data = this.$data, $attrs = this.$attrs;
    var customizePrefixCls = $props.prefixCls, openClassName = $props.openClassName, getPopupContainer = $props.getPopupContainer, color = $props.color, overlayClassName = $props.overlayClassName;
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("tooltip", customizePrefixCls);
    var children = this.children || filterEmpty(getSlot(this));
    children = children.length === 1 ? children[0] : children;
    var sVisible = $data.sVisible;
    if (!hasProp(this, "visible") && this.isNoTitle()) {
      sVisible = false;
    }
    if (!children) {
      return null;
    }
    var child = this.getDisabledCompatibleChildren(isValidElement(children) ? children : createVNode("span", null, [children]));
    var childCls = classNames((_classNames = {}, _defineProperty$e(_classNames, openClassName || "".concat(prefixCls, "-open"), sVisible), _defineProperty$e(_classNames, child.props && child.props.class, child.props && child.props.class), _classNames));
    var customOverlayClassName = classNames(overlayClassName, _defineProperty$e({}, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex$1.test(color)));
    var formattedOverlayInnerStyle;
    var arrowContentStyle;
    if (color && !PresetColorRegex$1.test(color)) {
      formattedOverlayInnerStyle = {
        backgroundColor: color
      };
      arrowContentStyle = {
        backgroundColor: color
      };
    }
    var vcTooltipProps = _extends(_extends(_extends({}, $attrs), $props), {
      prefixCls,
      getTooltipContainer: getPopupContainer || getContextPopupContainer,
      builtinPlacements: this.getPlacements(),
      overlay: this.getOverlay(),
      visible: sVisible,
      ref: "tooltip",
      overlayClassName: customOverlayClassName,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: createVNode("span", {
        "class": "".concat(prefixCls, "-arrow-content"),
        "style": arrowContentStyle
      }, null),
      onVisibleChange: this.handleVisibleChange,
      onPopupAlign: this.onPopupAlign
    });
    return createVNode(Tooltip$1, vcTooltipProps, {
      default: function _default2() {
        return [sVisible ? cloneElement(child, {
          class: childCls
        }) : child];
      }
    });
  }
});
var Tooltip = withInstall(ToolTip);
var props = abstractTooltipProps();
var Popover = defineComponent({
  name: "APopover",
  props: _extends(_extends({}, props), {
    prefixCls: PropsTypes.string,
    transitionName: PropsTypes.string.def("zoom-big"),
    content: PropsTypes.any,
    title: PropsTypes.any
  }),
  setup: function setup30() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider)
    };
  },
  methods: {
    getPopupDomNode: function getPopupDomNode5() {
      return this.$refs.tooltip.getPopupDomNode();
    }
  },
  render: function render23() {
    var _this = this;
    var title = this.title, customizePrefixCls = this.prefixCls, $slots = this.$slots;
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("popover", customizePrefixCls);
    var props2 = getOptionProps(this);
    delete props2.title;
    delete props2.content;
    var tooltipProps2 = _extends(_extends({}, props2), {
      prefixCls,
      ref: "tooltip",
      title: createVNode("div", null, [(title || $slots.title) && createVNode("div", {
        "class": "".concat(prefixCls, "-title")
      }, [getComponent(this, "title")]), createVNode("div", {
        "class": "".concat(prefixCls, "-inner-content")
      }, [getComponent(this, "content")])])
    });
    return createVNode(Tooltip, tooltipProps2, {
      default: function _default2() {
        return [getSlot(_this)];
      }
    });
  }
});
var Popover$1 = withInstall(Popover);
var RightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
var RightOutlinedSvg = RightOutlined$2;
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var RightOutlined = function RightOutlined2(props2, context) {
  var p = _objectSpread$1({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": RightOutlinedSvg
  }), null);
};
RightOutlined.displayName = "RightOutlined";
RightOutlined.inheritAttrs = false;
var RightOutlined$1 = RightOutlined;
var __rest$3 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var Checkbox$1 = defineComponent({
  name: "Checkbox",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps$2({
    prefixCls: PropsTypes.string,
    name: PropsTypes.string,
    id: PropsTypes.string,
    type: PropsTypes.string,
    defaultChecked: withUndefined(PropsTypes.oneOfType([PropsTypes.number, PropsTypes.looseBool])),
    checked: withUndefined(PropsTypes.oneOfType([PropsTypes.number, PropsTypes.looseBool])),
    disabled: PropsTypes.looseBool,
    tabindex: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
    readonly: PropsTypes.looseBool,
    autofocus: PropsTypes.looseBool,
    value: PropsTypes.any
  }, {
    prefixCls: "rc-checkbox",
    type: "checkbox",
    defaultChecked: false
  }),
  data: function data9() {
    var checked2 = hasProp(this, "checked") ? this.checked : this.defaultChecked;
    return {
      sChecked: checked2
    };
  },
  watch: {
    checked: function checked(val) {
      this.sChecked = val;
    }
  },
  mounted: function mounted9() {
    nextTick(function() {
    });
  },
  methods: {
    focus: function focus5() {
      this.$refs.input.focus();
    },
    blur: function blur5() {
      this.$refs.input.blur();
    },
    handleChange: function handleChange4(e2) {
      var props2 = getOptionProps(this);
      if (props2.disabled) {
        return;
      }
      if (!("checked" in props2)) {
        this.sChecked = e2.target.checked;
      }
      e2.shiftKey = this.eventShiftKey;
      var eventObj = {
        target: _extends(_extends({}, props2), {
          checked: e2.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e2.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e2.preventDefault();
        },
        nativeEvent: e2
      };
      if ("checked" in props2) {
        this.$refs.input.checked = props2.checked;
      }
      this.__emit("change", eventObj);
      this.eventShiftKey = false;
    },
    onClick: function onClick3(e2) {
      this.__emit("click", e2);
      this.eventShiftKey = e2.shiftKey;
    }
  },
  render: function render24() {
    var _classNames;
    var _a = getOptionProps(this), prefixCls = _a.prefixCls, name = _a.name, id2 = _a.id, type = _a.type, disabled = _a.disabled, readonly = _a.readonly, tabindex = _a.tabindex, autofocus = _a.autofocus, value7 = _a.value, others = __rest$3(_a, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value"]);
    var _this$$attrs = this.$attrs, className = _this$$attrs.class, onFocus2 = _this$$attrs.onFocus, onBlur2 = _this$$attrs.onBlur;
    var globalProps = Object.keys(_extends(_extends({}, others), this.$attrs)).reduce(function(prev, key) {
      if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
        prev[key] = others[key];
      }
      return prev;
    }, {});
    var sChecked = this.sChecked;
    var classString = classNames(prefixCls, className, (_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls, "-checked"), sChecked), _defineProperty$e(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
    var inputProps2 = _extends(_extends({
      name,
      id: id2,
      type,
      readonly,
      disabled,
      tabindex,
      class: "".concat(prefixCls, "-input"),
      checked: !!sChecked,
      autofocus,
      value: value7
    }, globalProps), {
      onChange: this.handleChange,
      onClick: this.onClick,
      onFocus: onFocus2,
      onBlur: onBlur2
    });
    return createVNode("span", {
      "class": classString
    }, [createVNode("input", _objectSpread2$1({
      "ref": "input"
    }, inputProps2), null), createVNode("span", {
      "class": "".concat(prefixCls, "-inner")
    }, null)]);
  }
});
var __rest$2 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var radioProps = {
  prefixCls: PropsTypes.string,
  defaultChecked: PropsTypes.looseBool,
  checked: PropsTypes.looseBool,
  disabled: PropsTypes.looseBool,
  isGroup: PropsTypes.looseBool,
  value: PropsTypes.any,
  name: PropsTypes.string,
  id: PropsTypes.string,
  autofocus: PropsTypes.looseBool,
  type: PropsTypes.string.def("radio"),
  onChange: PropsTypes.func,
  onFocus: PropsTypes.func,
  onBlur: PropsTypes.func
};
var Radio = defineComponent({
  name: "ARadio",
  props: radioProps,
  emits: ["update:checked", "update:value", "change", "blur", "focus"],
  setup: function setup31() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider),
      radioGroupContext: inject("radioGroupContext", null)
    };
  },
  methods: {
    focus: function focus6() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function blur6() {
      this.$refs.vcCheckbox.blur();
    },
    handleChange: function handleChange5(event) {
      var targetChecked = event.target.checked;
      this.$emit("update:checked", targetChecked);
      this.$emit("update:value", targetChecked);
      this.$emit("change", event);
    },
    onChange2: function onChange2(e2) {
      this.$emit("change", e2);
      if (this.radioGroupContext && this.radioGroupContext.onRadioChange) {
        this.radioGroupContext.onRadioChange(e2);
      }
    }
  },
  render: function render25() {
    var _classNames;
    var $slots = this.$slots, radioGroup = this.radioGroupContext;
    var props2 = getOptionProps(this);
    var customizePrefixCls = props2.prefixCls, restProps = __rest$2(props2, ["prefixCls"]);
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("radio", customizePrefixCls);
    var rProps = _extends({
      prefixCls
    }, restProps);
    if (radioGroup) {
      rProps.name = radioGroup.name;
      rProps.onChange = this.onChange2;
      rProps.checked = props2.value === radioGroup.stateValue;
      rProps.disabled = props2.disabled || radioGroup.disabled;
    } else {
      rProps.onChange = this.handleChange;
    }
    var wrapperClassString = classNames((_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty$e(_classNames, "".concat(prefixCls, "-wrapper-checked"), rProps.checked), _defineProperty$e(_classNames, "".concat(prefixCls, "-wrapper-disabled"), rProps.disabled), _classNames));
    return createVNode("label", {
      "class": wrapperClassString
    }, [createVNode(Checkbox$1, _objectSpread2$1(_objectSpread2$1({}, rProps), {}, {
      "ref": "vcCheckbox"
    }), null), $slots.default && createVNode("span", null, [$slots.default()])]);
  }
});
var Group = defineComponent({
  name: "ARadioGroup",
  props: {
    prefixCls: PropsTypes.string,
    defaultValue: PropsTypes.any,
    value: PropsTypes.any,
    size: PropsTypes.oneOf(tuple("large", "default", "small")).def("default"),
    options: PropsTypes.array,
    disabled: PropsTypes.looseBool,
    name: PropsTypes.string,
    buttonStyle: PropsTypes.string.def("outline"),
    onChange: PropsTypes.func
  },
  emits: ["update:value", "change"],
  setup: function setup32() {
    return {
      updatingValue: false,
      configProvider: inject("configProvider", defaultConfigProvider),
      radioGroupContext: null
    };
  },
  data: function data10() {
    var value7 = this.value, defaultValue = this.defaultValue;
    return {
      stateValue: value7 === void 0 ? defaultValue : value7
    };
  },
  watch: {
    value: function value4(val) {
      this.updatingValue = false;
      this.stateValue = val;
    }
  },
  created: function created4() {
    this.radioGroupContext = provide("radioGroupContext", this);
  },
  methods: {
    onRadioChange: function onRadioChange(ev) {
      var _this = this;
      var lastValue = this.stateValue;
      var value7 = ev.target.value;
      if (!hasProp(this, "value")) {
        this.stateValue = value7;
      }
      if (!this.updatingValue && value7 !== lastValue) {
        this.updatingValue = true;
        this.$emit("update:value", value7);
        this.$emit("change", ev);
      }
      nextTick(function() {
        _this.updatingValue = false;
      });
    }
  },
  render: function render26() {
    var _this2 = this;
    var props2 = getOptionProps(this);
    var customizePrefixCls = props2.prefixCls, options = props2.options, buttonStyle = props2.buttonStyle;
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("radio", customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var classString = classNames(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), _defineProperty$e({}, "".concat(groupPrefixCls, "-").concat(props2.size), props2.size));
    var children = filterEmpty(getSlot(this));
    if (options && options.length > 0) {
      children = options.map(function(option) {
        if (typeof option === "string") {
          return createVNode(Radio, {
            "key": option,
            "prefixCls": prefixCls,
            "disabled": props2.disabled,
            "value": option,
            "checked": _this2.stateValue === option
          }, {
            default: function _default2() {
              return [option];
            }
          });
        }
        return createVNode(Radio, {
          "key": "radio-group-value-options-".concat(option.value),
          "prefixCls": prefixCls,
          "disabled": option.disabled || props2.disabled,
          "value": option.value,
          "checked": _this2.stateValue === option.value
        }, {
          default: function _default2() {
            return [option.label];
          }
        });
      });
    }
    return createVNode("div", {
      "class": classString
    }, [children]);
  }
});
var __rest$1 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var Button = defineComponent({
  name: "ARadioButton",
  props: _extends({}, radioProps),
  setup: function setup33() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider),
      radioGroupContext: inject("radioGroupContext", {})
    };
  },
  render: function render27() {
    var _this = this;
    var props2 = getOptionProps(this);
    var customizePrefixCls = props2.prefixCls, otherProps = __rest$1(props2, ["prefixCls"]);
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("radio-button", customizePrefixCls);
    var rProps = _extends({
      prefixCls
    }, otherProps);
    if (this.radioGroupContext) {
      rProps.onChange = this.radioGroupContext.onRadioChange;
      rProps.checked = props2.value === this.radioGroupContext.stateValue;
      rProps.disabled = props2.disabled || this.radioGroupContext.disabled;
    }
    return createVNode(Radio, rProps, {
      default: function _default2() {
        return [getSlot(_this)];
      }
    });
  }
});
Radio.Group = Group;
Radio.Button = Button;
Radio.install = function(app) {
  app.component(Radio.name, Radio);
  app.component(Radio.Group.name, Radio.Group);
  app.component(Radio.Button.name, Radio.Button);
  return app;
};
var __rest = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
function noop$1() {
}
var Checkbox = defineComponent({
  name: "ACheckbox",
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  props: {
    prefixCls: PropsTypes.string,
    defaultChecked: PropsTypes.looseBool,
    checked: PropsTypes.looseBool,
    disabled: PropsTypes.looseBool,
    isGroup: PropsTypes.looseBool,
    value: PropsTypes.any,
    name: PropsTypes.string,
    id: PropsTypes.string,
    indeterminate: PropsTypes.looseBool,
    type: PropsTypes.string.def("checkbox"),
    autofocus: PropsTypes.looseBool,
    onChange: PropsTypes.func,
    "onUpdate:checked": PropsTypes.func
  },
  emits: ["change", "update:checked"],
  setup: function setup34() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider),
      checkboxGroupContext: inject("checkboxGroupContext", void 0)
    };
  },
  watch: {
    value: function value5(_value, prevValue) {
      var _this = this;
      nextTick(function() {
        var _this$checkboxGroupCo = _this.checkboxGroupContext, checkboxGroup = _this$checkboxGroupCo === void 0 ? {} : _this$checkboxGroupCo;
        if (checkboxGroup.registerValue && checkboxGroup.cancelValue) {
          checkboxGroup.cancelValue(prevValue);
          checkboxGroup.registerValue(_value);
        }
      });
    }
  },
  mounted: function mounted10() {
    var value7 = this.value, _this$checkboxGroupCo2 = this.checkboxGroupContext, checkboxGroup = _this$checkboxGroupCo2 === void 0 ? {} : _this$checkboxGroupCo2;
    if (checkboxGroup.registerValue) {
      checkboxGroup.registerValue(value7);
    }
    warning$1(hasProp$1(this, "checked") || this.checkboxGroupContext || !hasProp$1(this, "value"), "Checkbox", "`value` is not validate prop, do you mean `checked`?");
  },
  beforeUnmount: function beforeUnmount7() {
    var value7 = this.value, _this$checkboxGroupCo3 = this.checkboxGroupContext, checkboxGroup = _this$checkboxGroupCo3 === void 0 ? {} : _this$checkboxGroupCo3;
    if (checkboxGroup.cancelValue) {
      checkboxGroup.cancelValue(value7);
    }
  },
  methods: {
    handleChange: function handleChange6(event) {
      var targetChecked = event.target.checked;
      this.$emit("update:checked", targetChecked);
      this.$emit("change", event);
    },
    focus: function focus7() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function blur7() {
      this.$refs.vcCheckbox.blur();
    }
  },
  render: function render28() {
    var _this2 = this, _classNames;
    var props2 = getOptionProps(this);
    var checkboxGroup = this.checkboxGroupContext, $attrs = this.$attrs;
    var children = getSlot(this);
    var indeterminate = props2.indeterminate, customizePrefixCls = props2.prefixCls, restProps = __rest(props2, ["indeterminate", "prefixCls"]);
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("checkbox", customizePrefixCls);
    var _$attrs$onMouseenter = $attrs.onMouseenter, onMouseenter2 = _$attrs$onMouseenter === void 0 ? noop$1 : _$attrs$onMouseenter, _$attrs$onMouseleave = $attrs.onMouseleave, onMouseleave2 = _$attrs$onMouseleave === void 0 ? noop$1 : _$attrs$onMouseleave;
    $attrs.onInput;
    var className = $attrs.class, style = $attrs.style, restAttrs = __rest($attrs, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]);
    var checkboxProps = _extends(_extends(_extends({}, restProps), {
      prefixCls
    }), restAttrs);
    if (checkboxGroup) {
      checkboxProps.onChange = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this2.$emit.apply(_this2, ["change"].concat(args));
        checkboxGroup.toggleOption({
          label: children,
          value: props2.value
        });
      };
      checkboxProps.name = checkboxGroup.name;
      checkboxProps.checked = checkboxGroup.sValue.indexOf(props2.value) !== -1;
      checkboxProps.disabled = props2.disabled || checkboxGroup.disabled;
      checkboxProps.indeterminate = indeterminate;
    } else {
      checkboxProps.onChange = this.handleChange;
    }
    var classString = classNames((_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty$e(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), _defineProperty$e(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames), className);
    var checkboxClass = classNames(_defineProperty$e({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
    return createVNode("label", {
      "class": classString,
      "style": style,
      "onMouseenter": onMouseenter2,
      "onMouseleave": onMouseleave2
    }, [createVNode(Checkbox$1, _objectSpread2$1(_objectSpread2$1({}, checkboxProps), {}, {
      "class": checkboxClass,
      "ref": "vcCheckbox"
    }), null), children.length ? createVNode("span", null, [children]) : null]);
  }
});
function noop() {
}
var CheckboxGroup$1 = defineComponent({
  name: "ACheckboxGroup",
  props: {
    name: PropsTypes.string,
    prefixCls: PropsTypes.string,
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    options: {
      type: Array
    },
    disabled: PropsTypes.looseBool,
    onChange: PropsTypes.func
  },
  emits: ["change", "update:value"],
  setup: function setup35() {
    return {
      configProvider: inject("configProvider", defaultConfigProvider)
    };
  },
  data: function data11() {
    var value7 = this.value, defaultValue = this.defaultValue;
    return {
      sValue: value7 || defaultValue || [],
      registeredValues: []
    };
  },
  watch: {
    value: function value6(val) {
      this.sValue = val || [];
    }
  },
  created: function created5() {
    provide("checkboxGroupContext", this);
  },
  methods: {
    getOptions: function getOptions() {
      var _this$options = this.options, options = _this$options === void 0 ? [] : _this$options, $slots = this.$slots;
      return options.map(function(option) {
        if (typeof option === "string") {
          return {
            label: option,
            value: option
          };
        }
        var label = option.label;
        if (label === void 0 && $slots.label) {
          label = $slots.label(option);
        }
        return _extends(_extends({}, option), {
          label
        });
      });
    },
    cancelValue: function cancelValue(value7) {
      this.registeredValues = this.registeredValues.filter(function(val) {
        return val !== value7;
      });
    },
    registerValue: function registerValue(value7) {
      this.registeredValues = [].concat(_toConsumableArray(this.registeredValues), [value7]);
    },
    toggleOption: function toggleOption(option) {
      var registeredValues = this.registeredValues;
      var optionIndex = this.sValue.indexOf(option.value);
      var value7 = _toConsumableArray(this.sValue);
      if (optionIndex === -1) {
        value7.push(option.value);
      } else {
        value7.splice(optionIndex, 1);
      }
      if (!hasProp$1(this, "value")) {
        this.sValue = value7;
      }
      var options = this.getOptions();
      var val = value7.filter(function(val2) {
        return registeredValues.indexOf(val2) !== -1;
      }).sort(function(a2, b2) {
        var indexA = options.findIndex(function(opt) {
          return opt.value === a2;
        });
        var indexB = options.findIndex(function(opt) {
          return opt.value === b2;
        });
        return indexA - indexB;
      });
      this.$emit("update:value", val);
      this.$emit("change", val);
    }
  },
  render: function render29() {
    var props2 = this.$props, state = this.$data;
    var customizePrefixCls = props2.prefixCls, options = props2.options;
    var getPrefixCls2 = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls2("checkbox", customizePrefixCls);
    var children = getSlot(this);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    if (options && options.length > 0) {
      children = this.getOptions().map(function(option) {
        return createVNode(Checkbox, {
          "prefixCls": prefixCls,
          "key": option.value.toString(),
          "disabled": "disabled" in option ? option.disabled : props2.disabled,
          "indeterminate": option.indeterminate,
          "value": option.value,
          "checked": state.sValue.indexOf(option.value) !== -1,
          "onChange": option.onChange || noop,
          "class": "".concat(groupPrefixCls, "-item")
        }, {
          default: function _default2() {
            return [option.label];
          }
        });
      });
    }
    return createVNode("div", {
      "class": groupPrefixCls
    }, [children]);
  }
});
Checkbox.Group = CheckboxGroup$1;
Checkbox.install = function(app) {
  app.component(Checkbox.name, Checkbox);
  app.component(CheckboxGroup$1.name, CheckboxGroup$1);
  return app;
};
var CheckableTag = defineComponent({
  name: "ACheckableTag",
  props: {
    prefixCls: PropsTypes.string,
    checked: PropsTypes.looseBool,
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    }
  },
  emits: ["update:checked", "change", "click"],
  setup: function setup36(props2, _ref) {
    var slots = _ref.slots, emit2 = _ref.emit;
    var _useConfigInject = useConfigInject("tag", props2), prefixCls = _useConfigInject.prefixCls;
    var handleClick = function handleClick2(e2) {
      var checked2 = props2.checked;
      emit2("update:checked", !checked2);
      emit2("change", !checked2);
      emit2("click", e2);
    };
    var cls = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls.value, "-checkable"), true), _defineProperty$e(_classNames, "".concat(prefixCls.value, "-checkable-checked"), props2.checked), _classNames));
    });
    return function() {
      var _a;
      return createVNode("span", {
        "class": cls.value,
        "onClick": handleClick
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var CheckableTag$1 = CheckableTag;
var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join("|"), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(PresetStatusColorTypes.join("|"), ")$"));
var tagProps = {
  prefixCls: PropsTypes.string,
  color: {
    type: String
  },
  closable: PropsTypes.looseBool.def(false),
  closeIcon: PropsTypes.VNodeChild,
  visible: PropsTypes.looseBool,
  onClose: {
    type: Function
  },
  icon: PropsTypes.VNodeChild
};
var Tag = defineComponent({
  name: "ATag",
  props: tagProps,
  emits: ["update:visible", "close"],
  slots: ["closeIcon", "icon"],
  setup: function setup37(props2, _ref) {
    var slots = _ref.slots, emit2 = _ref.emit, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("tag", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var visible2 = ref(true);
    watchEffect(function() {
      if (props2.visible !== void 0) {
        visible2.value = props2.visible;
      }
    });
    var handleCloseClick = function handleCloseClick2(e2) {
      e2.stopPropagation();
      emit2("update:visible", false);
      emit2("close", e2);
      if (e2.defaultPrevented) {
        return;
      }
      if (props2.visible === void 0) {
        visible2.value = false;
      }
    };
    var isPresetColor = computed(function() {
      var color = props2.color;
      if (!color) {
        return false;
      }
      return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
    });
    var tagClassName = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty$e(_classNames, "".concat(prefixCls.value, "-").concat(props2.color), isPresetColor.value), _defineProperty$e(_classNames, "".concat(prefixCls.value, "-has-color"), props2.color && !isPresetColor.value), _defineProperty$e(_classNames, "".concat(prefixCls.value, "-hidden"), !visible2.value), _defineProperty$e(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames));
    });
    return function() {
      var _a, _b, _c;
      var _props$icon = props2.icon, icon = _props$icon === void 0 ? (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$icon, color = props2.color, _props$closeIcon = props2.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_b = slots.closeIcon) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$closeIcon, _props$closable = props2.closable, closable = _props$closable === void 0 ? false : _props$closable;
      var renderCloseIcon = function renderCloseIcon2() {
        if (closable) {
          return closeIcon ? createVNode("div", {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, [closeIcon]) : createVNode(CloseOutlined$1, {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, null);
        }
        return null;
      };
      var tagStyle = {
        backgroundColor: color && !isPresetColor.value ? color : void 0
      };
      var iconNode = icon || null;
      var children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      var kids = iconNode ? createVNode(Fragment, null, [iconNode, createVNode("span", null, [children])]) : children;
      var isNeedWave = "onClick" in attrs;
      var tagNode = createVNode("span", {
        "class": tagClassName.value,
        "style": tagStyle
      }, [kids, renderCloseIcon()]);
      return isNeedWave ? createVNode(Wave, null, {
        default: function _default2() {
          return [tagNode];
        }
      }) : tagNode;
    };
  }
});
Tag.CheckableTag = CheckableTag$1;
Tag.install = function(app) {
  app.component(Tag.name, Tag);
  app.component(CheckableTag$1.name, CheckableTag$1);
  return app;
};
var Tag$1 = Tag;
const insetSlot = (originSlotNode, slot_name, id2, shadowId) => {
  var _a, _b;
  if (originSlotNode && (id2 || shadowId)) {
    let childSlotNode = null;
    if (shadowId) {
      const _id = id2 ? `#${id2} ` : "";
      childSlotNode = (_b = (_a = document.querySelector(`#${shadowId}`)) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector(`${_id}[slot=${slot_name}]`);
    } else if (id2) {
      childSlotNode = document.querySelector(`#${id2} [slot=${slot_name}]`);
    }
    if (childSlotNode) {
      originSlotNode.innerHTML = "";
      originSlotNode.append(childSlotNode);
    }
  }
};
const isTrue = (params) => {
  if (typeof params === "boolean") {
    return params;
  } else if (typeof params === "string") {
    if (params === "true") {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
const getStyleByString = (str) => {
  if (typeof str === "string") {
    const objMap = {};
    if (str == null ? void 0 : str.length) {
      if (/\;/g.test(str)) {
        const itemArr = str.split(";");
        itemArr.forEach((item) => {
          const [k2, v2] = item.split(":");
          if ((k2 == null ? void 0 : k2.trim()) && (v2 == null ? void 0 : v2.trim())) {
            const key = k2.trim();
            const value7 = v2.trim();
            objMap[key] = value7;
          }
        });
      } else {
        const [k2, v2] = str.split(":");
        if ((k2 == null ? void 0 : k2.trim()) && (v2 == null ? void 0 : v2.trim())) {
          const key = k2.trim();
          const value7 = v2.trim();
          objMap[key] = value7;
        }
      }
    }
    return objMap;
  }
  return str;
};
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
  props: {
    text: {
      type: String,
      default: ""
    },
    keyword: String,
    color: {
      type: String,
      default: "#f50"
    },
    highlightStyle: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    keywordIndex() {
      var _a, _b;
      return (_b = this.text) == null ? void 0 : _b.indexOf((_a = this.keyword) != null ? _a : "");
    },
    hasKeyword() {
      return this.keywordIndex > -1;
    }
  }
};
const _hoisted_1$6 = { key: 0 };
const _hoisted_2$5 = { key: 1 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.hasKeyword ? (openBlock(), createElementBlock("span", _hoisted_1$6, [
    createTextVNode(toDisplayString($props.text.substr(0, $options.keywordIndex)), 1),
    createElementVNode("span", {
      style: normalizeStyle(__spreadValues({ color: $props.color }, $props.highlightStyle))
    }, toDisplayString($props.keyword), 5),
    createTextVNode(toDisplayString($props.text.substr($options.keywordIndex + $props.keyword.length)), 1)
  ])) : (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString($props.text), 1));
}
var Highlight = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = defineComponent({
  name: "imc-checkgroup-pane",
  components: {
    "a-checkbox": Checkbox,
    "a-checkbox-group": Checkbox.Group,
    Input: Input$1,
    Highlight
  },
  emits: ["pickAll", "pickReverse", "pickClear", "searchChange", "change", "update:value"],
  props: {
    btnClear: {
      type: String,
      default: "\u6E05\u7A7A"
    },
    btnReverse: {
      type: String,
      default: "\u53CD\u9009"
    },
    btnAll: {
      type: String,
      default: "\u5168\u9009"
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u641C\u7D22"
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    searchable: {
      type: Boolean,
      default: true
    },
    searchAttr: {
      type: Array,
      default: ["label"]
    },
    groupStyle: {
      type: [String, Object],
      default: () => ({})
    },
    itemStyle: {
      type: [String, Object],
      default: () => ({})
    },
    filterable: {
      type: [Boolean, String],
      default: false
    },
    value: {
      type: [String, Number, Array]
    }
  },
  setup(props2, { emit: emit2, expose }) {
    const val = ref(props2.value);
    const searchWords = ref("");
    watch(() => props2.value, (n2) => {
      val.value = n2;
    });
    const checkAttrMatch = (item, options) => {
      const { attr, value: value7 } = options;
      if (typeof value7 === "string") {
        return attr.some((ii) => {
          var _a;
          return ((_a = item == null ? void 0 : item[ii]) == null ? void 0 : _a.indexOf(value7)) > -1;
        });
      } else if (typeof value7 === "object") {
        return attr.find((ii) => value7.includes(item == null ? void 0 : item[ii]));
      }
      return false;
    };
    const checkList = computed(() => {
      const _val = searchWords.value;
      const matchList = [];
      const notMatchList = [];
      if (_val == null ? void 0 : _val.length) {
        props2.options.forEach((item) => {
          const t2 = checkAttrMatch(item, {
            attr: props2.searchAttr,
            value: _val
          });
          if (t2) {
            matchList.push(item);
          } else {
            notMatchList.push(item);
          }
        });
        return {
          matchList,
          notMatchList
        };
      }
      return {
        matchList: [],
        notMatchList: props2.options
      };
    });
    const handleAll = () => {
      const t2 = [];
      props2.options.forEach((item) => {
        t2.push(item.value);
      });
      val.value = t2;
      const value7 = JSON.parse(JSON.stringify(val.value));
      emit2("update:value", value7);
      emit2("change", value7);
    };
    const handleReverse = () => {
      const t2 = [];
      props2.options.forEach((item) => {
        var _a;
        if (!((_a = val == null ? void 0 : val.value) == null ? void 0 : _a.includes(item.value))) {
          t2.push(item.value);
        }
      });
      val.value = t2;
      const value7 = JSON.parse(JSON.stringify(val.value));
      emit2("update:value", value7);
      emit2("change", JSON.parse(JSON.stringify(val.value)));
    };
    const handleClear = () => {
      val.value = [];
      const value7 = JSON.parse(JSON.stringify(val.value));
      emit2("update:value", value7);
      emit2("change", JSON.parse(JSON.stringify(val.value)));
    };
    const handleSearchChange = (e2) => {
      emit2("searchChange", e2.target.value);
    };
    const getValue2 = () => {
      return val.value;
    };
    const handleChange7 = (e2) => {
      emit2("change", e2);
      emit2("update:value", e2);
    };
    expose({
      getValue: getValue2
    });
    return {
      val,
      searchWords,
      checkList,
      handleAll,
      handleReverse,
      handleClear,
      getStyleByString,
      handleSearchChange,
      handleChange: handleChange7
    };
  }
});
const _hoisted_1$5 = { class: "checkgroup-pane" };
const _hoisted_2$4 = { style: { "display": "flex", "justify-content": "space-between", "margin-bottom": "8px" } };
const _hoisted_3$2 = { style: { "display": "flex" } };
const _hoisted_4$2 = { style: { "max-height": "250px", "overflow": "auto", "padding-bottom": "8px", "position": "relative" } };
const _hoisted_5$2 = {
  key: 0,
  class: "divider"
};
const _hoisted_6$2 = /* @__PURE__ */ createElementVNode("div", { class: "dividerContent" }, null, -1);
const _hoisted_7$1 = [
  _hoisted_6$2
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Input = resolveComponent("Input");
  const _component_Highlight = resolveComponent("Highlight");
  const _component_a_checkbox = resolveComponent("a-checkbox");
  const _component_a_checkbox_group = resolveComponent("a-checkbox-group");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    renderSlot(_ctx.$slots, "action", {}, () => [
      createElementVNode("div", _hoisted_2$4, [
        createElementVNode("div", _hoisted_3$2, [
          _ctx.btnAll ? (openBlock(), createElementBlock("span", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleAll && _ctx.handleAll(...args)),
            style: { "margin-right": "24px", "cursor": "pointer", "color": "#999" }
          }, toDisplayString(_ctx.btnAll), 1)) : createCommentVNode("", true),
          _ctx.btnReverse ? (openBlock(), createElementBlock("span", {
            key: 1,
            size: "small",
            type: "link",
            style: { "cursor": "pointer", "color": "#999" },
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleReverse && _ctx.handleReverse(...args))
          }, toDisplayString(_ctx.btnReverse), 1)) : createCommentVNode("", true)
        ]),
        _ctx.btnClear ? (openBlock(), createElementBlock("span", {
          key: 0,
          size: "small",
          type: "link",
          style: { "cursor": "pointer", "color": "#1890ff" },
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
        }, toDisplayString(_ctx.btnClear), 1)) : createCommentVNode("", true)
      ])
    ]),
    _ctx.searchable ? (openBlock(), createBlock(_component_Input, {
      key: 0,
      style: { "margin-bottom": "8px" },
      "allow-clear": "",
      onChange: _ctx.handleSearchChange,
      placeholder: _ctx.placeholder,
      value: _ctx.searchWords,
      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.searchWords = $event)
    }, null, 8, ["onChange", "placeholder", "value"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4$2, [
      createVNode(_component_a_checkbox_group, {
        value: _ctx.val,
        "onUpdate:value": _cache[4] || (_cache[4] = ($event) => _ctx.val = $event),
        name: "checkboxgroup",
        onChange: _ctx.handleChange
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            style: normalizeStyle(_ctx.getStyleByString(_ctx.groupStyle))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.checkList.matchList, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.value,
                style: normalizeStyle(_ctx.getStyleByString(_ctx.itemStyle))
              }, [
                createVNode(_component_a_checkbox, {
                  value: item.value
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Highlight, {
                      text: item.label,
                      keyword: _ctx.searchWords
                    }, null, 8, ["text", "keyword"])
                  ]),
                  _: 2
                }, 1032, ["value"])
              ], 4);
            }), 128)),
            _ctx.checkList.matchList.length && _ctx.checkList.notMatchList.length ? (openBlock(), createElementBlock("div", _hoisted_5$2, _hoisted_7$1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.checkList.notMatchList, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.value,
                style: normalizeStyle(_ctx.getStyleByString(_ctx.itemStyle))
              }, [
                createVNode(_component_a_checkbox, {
                  value: item.value
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["value"])
              ], 4);
            }), 128))
          ], 4)
        ]),
        _: 1
      }, 8, ["value", "onChange"])
    ])
  ]);
}
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = defineComponent({
  components: {
    "a-select": Select$1,
    "a-select-option": Select$1.Option
  },
  emits: ["change", "update:value"],
  props: {
    defaultValue: {
      type: [String, Array, Number]
    },
    placeholder: {
      type: String
    },
    allowClear: {
      type: [Boolean, String]
    },
    mode: {
      type: String
    },
    maxTagTextLength: {
      type: [Number, String]
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Array, Number]
    },
    popupContainerId: {
      type: String
    },
    useLocal: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props2, { emit: emit2 }) {
    const selectWrap = ref(null);
    const handleChange7 = (e2) => {
      if (props2.useLocal) {
        const val = e2.target.value;
        emit2("change", val);
        emit2("update:value", val);
      } else {
        emit2("change", e2);
        emit2("update:value", e2);
      }
    };
    const getPopupContainer = () => {
      return props2.popupContainerId ? document.querySelector(`#${props2.popupContainerId}`) : document.body;
    };
    const selectVal = ref(props2.value);
    watch(() => props2.value, (n2) => {
      selectVal.value = n2;
    });
    return {
      selectVal,
      handleChange: handleChange7,
      selectWrap,
      getPopupContainer
    };
  }
});
const _hoisted_1$4 = ["placeholder"];
const _hoisted_2$3 = ["value"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = resolveComponent("a-select-option");
  const _component_a_select = resolveComponent("a-select");
  return openBlock(), createElementBlock("div", null, [
    !_ctx.useLocal ? (openBlock(), createBlock(_component_a_select, mergeProps({ key: 0 }, _ctx.$props, {
      ref: "select",
      value: _ctx.selectVal,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.selectVal = $event),
      onChange: _ctx.handleChange,
      getPopupContainer: _ctx.getPopupContainer,
      style: { width: "100%", display: _ctx.mode === "multiple" ? "inline-block" : "flex" }
    }), {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item) => {
          return openBlock(), createBlock(_component_a_select_option, {
            key: item.value,
            value: item.value
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["value"]);
        }), 128))
      ]),
      _: 1
    }, 16, ["value", "onChange", "getPopupContainer", "style"])) : withDirectives((openBlock(), createElementBlock("select", {
      key: 1,
      placeholder: _ctx.placeholder,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.selectVal = $event),
      onChange: _cache[2] || (_cache[2] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      style: { "width": "100%", "border": "1px solid #e1e1e1", "padding": "3px 4px", "outline": "none", "border-radius": "2px" }
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item) => {
        return openBlock(), createElementBlock("option", {
          key: item.value,
          value: item.value
        }, toDisplayString(item.label), 9, _hoisted_2$3);
      }), 128))
    ], 40, _hoisted_1$4)), [
      [vModelSelect, _ctx.selectVal]
    ])
  ]);
}
var SelectGroup = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = defineComponent({
  components: {
    "a-input": Input$1
  },
  emits: ["change", "update:value"],
  props: {
    defaultValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    }
  },
  setup(props2, { emit: emit2 }) {
    const inputVal = ref(props2.value);
    const handleChange7 = (e2) => {
      emit2("change", e2.target.value);
      emit2("update:value", e2.target.value);
    };
    watch(() => props2.value, (n2) => {
      inputVal.value = n2;
    });
    return {
      inputVal,
      handleChange: handleChange7
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_input = resolveComponent("a-input");
  return openBlock(), createBlock(_component_a_input, {
    value: _ctx.inputVal,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.inputVal = $event),
    style: { "width": "100%" },
    onChange: _ctx.handleChange
  }, null, 8, ["value", "onChange"]);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = defineComponent({
  components: {
    "a-radio-group": Radio.Group,
    "a-radio-button": Radio.Button
  },
  emits: ["change"],
  props: {
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: [String, Number, Boolean]
    }
  },
  setup(props2) {
    const handleChange7 = (e2) => {
      emit("change", e2.target.value);
    };
    return {
      value: ref(props2.value),
      handleChange: handleChange7
    };
  }
});
const _hoisted_1$3 = { class: "radio-group" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_radio_button = resolveComponent("a-radio-button");
  const _component_a_radio_group = resolveComponent("a-radio-group");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(_component_a_radio_group, {
      value: _ctx.value,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      onChange: _ctx.handleChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item) => {
          return openBlock(), createBlock(_component_a_radio_button, {
            key: item.value,
            value: item.value
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.value), 1)
            ]),
            _: 2
          }, 1032, ["value"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"])
  ]);
}
var RadionButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  components: {
    "a-radio-group": Radio.Group,
    "a-radio": Radio
  },
  emits: ["change"],
  props: {
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: [String, Number, Boolean]
    }
  },
  setup(props2, { emit: emit2 }) {
    const handleChange7 = (e2) => {
      emit2("change", e2.target.value);
    };
    return {
      value: ref(props2.value),
      handleChange: handleChange7
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_radio_group = resolveComponent("a-radio-group");
  return openBlock(), createBlock(_component_a_radio_group, {
    options: _ctx.options,
    value: _ctx.value,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    onChange: _ctx.handleChange
  }, null, 8, ["options", "value", "onChange"]);
}
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  components: {
    input: Input,
    "select-group": SelectGroup,
    "checkbox-group": CheckboxGroup,
    "radio-button": RadionButton,
    "radio-group": RadioGroup
  },
  emits: ["change"],
  props: {
    options: {
      type: Array,
      default: () => []
    },
    resetText: {
      type: String,
      default: "\u91CD\u7F6E"
    }
  },
  setup(props2, { expose, emit: emit2 }) {
    const handleChange7 = (e2, item) => {
      emit2("change", e2, item);
    };
    const localOptions = ref(props2.options);
    onMounted(() => {
      setTimeout(() => {
        console.log(props2.options);
      });
    });
    watch(() => props2.options, (n2) => {
      console.log("=====");
      localOptions.value = n2;
    });
    const handleClear = () => {
      localOptions.value.forEach((item) => item.value = void 0);
      emit2("change", void 0, void 0);
    };
    expose({
      handleClear,
      getData: () => {
        return localOptions.value;
      }
    });
    const btnStyle = {
      background: "#1890ff",
      color: "#fff",
      border: "none",
      borderRadius: "2px",
      padding: "4px 8px",
      marginTop: "8px",
      float: "right",
      cursor: "pointer"
    };
    return {
      handleChange: handleChange7,
      handleClear,
      localOptions,
      btnStyle
    };
  }
});
const _hoisted_1$2 = { class: "condition-wrap" };
const _hoisted_2$2 = { style: { "overflow": "hidden" } };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.localOptions, (item) => {
      return openBlock(), createElementBlock("div", {
        key: item.key,
        style: { "margin": "4px 0" }
      }, [
        item.key ? renderSlot(_ctx.$slots, item.key, { key: 0 }) : createCommentVNode("", true),
        (openBlock(), createBlock(resolveDynamicComponent(item.type), mergeProps(item, {
          value: item.value,
          "onUpdate:value": ($event) => item.value = $event,
          onChange: (e2) => _ctx.handleChange(e2, item)
        }), null, 16, ["value", "onUpdate:value", "onChange"]))
      ]);
    }), 128)),
    createElementVNode("div", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "action", {}, () => [
        _ctx.resetText ? (openBlock(), createElementBlock("button", {
          key: 0,
          style: normalizeStyle(_ctx.btnStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
        }, toDisplayString(_ctx.resetText), 5)) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var conditionPane = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var FilterTwoTone$2 = { "icon": function render30(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M420.6 798h182.9V642H420.6zM411 561.4l9.5 16.6h183l9.5-16.6L811.3 226H212.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.5 798H420.6V642h182.9v156zm9.5-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z", "fill": primaryColor } }] };
}, "name": "filter", "theme": "twotone" };
var FilterTwoToneSvg = FilterTwoTone$2;
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value7) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value7, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value7;
  }
  return obj;
}
var FilterTwoTone = function FilterTwoTone2(props2, context) {
  var p = _objectSpread({}, props2, context.attrs);
  return _vue.createVNode(AntdIcon, _vue.mergeProps(p, {
    "icon": FilterTwoToneSvg
  }), null);
};
FilterTwoTone.displayName = "FilterTwoTone";
FilterTwoTone.inheritAttrs = false;
var FilterTwoTone$1 = FilterTwoTone;
var conditionTag_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = defineComponent({
  components: {
    "a-tag": Tag$1,
    CloseOutlined: CloseOutlined$1
  },
  emits: ["close", "click", "select", "closeTag"],
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    colon: {
      type: [Boolean, String],
      default: false
    },
    maxTagCount: {
      type: [String, Number],
      default: 2
    },
    maxTagText: {
      type: String,
      default: "+ ..."
    },
    closable: {
      type: [String, Boolean],
      default: true
    },
    tagClosable: {
      type: [String, Boolean],
      default: false
    },
    color: {
      type: String,
      default: "default"
    }
  },
  setup(props2, { emit: emit2 }) {
    const maxTagCount = computed(() => Number.parseInt(props2.maxTagCount));
    const tags = computed(() => {
      const _tags = props2.tags;
      const maxLength = maxTagCount.value;
      if (maxLength && maxLength < _tags.length) {
        const filters = Array.from(_tags).filter((item, index2) => index2 < maxLength);
        const more = Array.from(_tags).filter((item, index2) => index2 >= maxLength);
        return {
          tags: filters,
          hasTags: filters == null ? void 0 : filters.some((item) => !!item.label),
          more
        };
      }
      return {
        tags: _tags,
        hasTags: _tags == null ? void 0 : _tags.some((item) => !!item.label),
        more: []
      };
    });
    const handleClose = () => {
      emit2("close");
    };
    const handleCloseTagItem = (e2) => {
      emit2("closeTag", e2);
    };
    return {
      maxTagLength: maxTagCount,
      tagList: tags,
      isTrue,
      handleCloseTagItem,
      handleClose
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "tags-wrap"
};
const _hoisted_2$1 = { class: "tags-pane" };
const _hoisted_3$1 = {
  key: 0,
  style: { "padding-left": "4px" }
};
const _hoisted_4$1 = { style: { "margin-left": "8px", "display": "flex" } };
const _hoisted_5$1 = { class: "tag-item" };
const _hoisted_6$1 = { class: "tag-item" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tag = resolveComponent("a-tag");
  const _component_CloseOutlined = resolveComponent("CloseOutlined");
  return _ctx.tagList.hasTags ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2$1, [
      renderSlot(_ctx.$slots, "title", {}, () => [
        createElementVNode("div", null, toDisplayString(_ctx.label), 1)
      ]),
      _ctx.colon ? (openBlock(), createElementBlock("span", _hoisted_3$1, ":")) : createCommentVNode("", true),
      createElementVNode("div", _hoisted_4$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tagList.tags, (item) => {
          return openBlock(), createElementBlock("span", {
            key: item.value
          }, [
            item.label ? (openBlock(), createBlock(_component_a_tag, {
              key: 0,
              color: item.color ? item.color : _ctx.color,
              closable: _ctx.isTrue(_ctx.tagClosable),
              onClose: _ctx.handleCloseTagItem
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_5$1, toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["color", "closable", "onClose"])) : createCommentVNode("", true)
          ]);
        }), 128)),
        _ctx.tagList.more.length ? (openBlock(), createBlock(_component_a_tag, { key: 0 }, {
          default: withCtx(() => [
            createElementVNode("span", _hoisted_6$1, toDisplayString(_ctx.tagList.more.length) + toDisplayString(_ctx.maxTagText), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _ctx.isTrue(_ctx.closable) ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "close",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClose && _ctx.handleClose(...args), ["stop"]))
      }, [
        renderSlot(_ctx.$slots, "close", {}, () => [
          createVNode(_component_CloseOutlined)
        ])
      ])) : createCommentVNode("", true)
    ])
  ])) : createCommentVNode("", true);
}
var conditionTag = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var _style_0 = '@-webkit-keyframes antCheckboxEffect{0%{transform:scale(1);opacity:.5}to{transform:scale(1.6);opacity:0}}@keyframes antCheckboxEffect{0%{transform:scale(1);opacity:.5}to{transform:scale(1.6);opacity:0}}.ant-checkbox{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;top:-.09em;display:inline-block;line-height:1;white-space:nowrap;vertical-align:middle;outline:none;cursor:pointer}.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner,.ant-checkbox-input:focus+.ant-checkbox-inner{border-color:#1890ff}.ant-checkbox-checked:after{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #1890ff;border-radius:2px;visibility:hidden;-webkit-animation:antCheckboxEffect .36s ease-in-out;animation:antCheckboxEffect .36s ease-in-out;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards;content:""}.ant-checkbox:hover:after,.ant-checkbox-wrapper:hover .ant-checkbox:after{visibility:visible}.ant-checkbox-inner{position:relative;top:0;left:0;display:block;width:16px;height:16px;background-color:#fff;border:1px solid #d9d9d9;border-radius:2px;border-collapse:separate;transition:all .3s}.ant-checkbox-inner:after{position:absolute;top:50%;left:22%;display:table;width:5.71428571px;height:9.14285714px;border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg) scale(0) translate(-50%,-50%);opacity:0;transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;content:" "}.ant-checkbox-input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;cursor:pointer;opacity:0}.ant-checkbox-checked .ant-checkbox-inner:after{position:absolute;display:table;border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg) scale(1) translate(-50%,-50%);opacity:1;transition:all .2s cubic-bezier(.12,.4,.29,1.46) .1s;content:" "}.ant-checkbox-checked .ant-checkbox-inner{background-color:#1890ff;border-color:#1890ff}.ant-checkbox-disabled{cursor:not-allowed}.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#00000040;-webkit-animation-name:none;animation-name:none}.ant-checkbox-disabled .ant-checkbox-input{cursor:not-allowed}.ant-checkbox-disabled .ant-checkbox-inner{background-color:#f5f5f5;border-color:#d9d9d9!important}.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:#f5f5f5;border-collapse:separate;-webkit-animation-name:none;animation-name:none}.ant-checkbox-disabled+span{color:#00000040;cursor:not-allowed}.ant-checkbox-disabled:hover:after,.ant-checkbox-wrapper:hover .ant-checkbox-disabled:after{visibility:hidden}.ant-checkbox-wrapper{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";display:inline-block;line-height:unset;cursor:pointer}.ant-checkbox-wrapper.ant-checkbox-wrapper-disabled{cursor:not-allowed}.ant-checkbox-wrapper+.ant-checkbox-wrapper{margin-left:8px}.ant-checkbox+span{padding-right:8px;padding-left:8px}.ant-checkbox-group{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";display:inline-block}.ant-checkbox-group-item{display:inline-block;margin-right:8px}.ant-checkbox-group-item:last-child{margin-right:0}.ant-checkbox-group-item+.ant-checkbox-group-item{margin-left:0}.ant-checkbox-indeterminate .ant-checkbox-inner{background-color:#fff;border-color:#d9d9d9}.ant-checkbox-indeterminate .ant-checkbox-inner:after{top:50%;left:50%;width:8px;height:8px;background-color:#1890ff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:" "}.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner:after{background-color:#00000040;border-color:#00000040}\n';
var _style_1 = '.ant-input-affix-wrapper{position:relative;display:inline-block;width:100%;padding:4px 11px;color:#000000d9;font-size:14px;line-height:1.5715;background-color:#fff;background-image:none;border:1px solid #d9d9d9;border-radius:2px;transition:all .3s;display:inline-flex}.ant-input-affix-wrapper::-moz-placeholder{color:#bfbfbf;opacity:1}.ant-input-affix-wrapper:-ms-input-placeholder{color:#bfbfbf}.ant-input-affix-wrapper::-webkit-input-placeholder{color:#bfbfbf}.ant-input-affix-wrapper:-moz-placeholder-shown{text-overflow:ellipsis}.ant-input-affix-wrapper:-ms-input-placeholder{text-overflow:ellipsis}.ant-input-affix-wrapper:placeholder-shown{text-overflow:ellipsis}.ant-input-affix-wrapper:hover{border-color:#40a9ff;border-right-width:1px!important}.ant-input-affix-wrapper:focus{border-color:#40a9ff;border-right-width:1px!important;outline:0;box-shadow:0 0 0 2px #1890ff33}.ant-input-affix-wrapper-disabled{color:#00000040;background-color:#f5f5f5;cursor:not-allowed;opacity:1}.ant-input-affix-wrapper-disabled:hover{border-color:#d9d9d9;border-right-width:1px!important}.ant-input-affix-wrapper[disabled]{color:#00000040;background-color:#f5f5f5;cursor:not-allowed;opacity:1}.ant-input-affix-wrapper[disabled]:hover{border-color:#d9d9d9;border-right-width:1px!important}textarea.ant-input-affix-wrapper{max-width:100%;height:auto;min-height:32px;line-height:1.5715;vertical-align:bottom;transition:all .3s,height 0s}.ant-input-affix-wrapper-lg{padding:6.5px 11px;font-size:16px}.ant-input-affix-wrapper-sm{padding:0 7px}.ant-input-affix-wrapper-disabled .ant-input[disabled]{background:transparent}.ant-input-affix-wrapper>input.ant-input{padding:0;border:none;outline:none}.ant-input-affix-wrapper>input.ant-input:focus{box-shadow:none}.ant-input-affix-wrapper:before{width:0;visibility:hidden;content:"\\a0"}.ant-input-prefix,.ant-input-suffix{display:flex;flex:none;align-items:center}.ant-input-prefix{margin-right:4px}.ant-input-suffix{margin-left:4px}.ant-input{box-sizing:border-box;margin:0;font-variant:tabular-nums;list-style:none;font-feature-settings:"tnum";position:relative;display:inline-block;width:100%;padding:4px 11px;color:#000000d9;font-size:14px;line-height:1.5715;background-color:#fff;background-image:none;border:1px solid #d9d9d9;border-radius:2px;transition:all .3s}.ant-input::-moz-placeholder{color:#bfbfbf;opacity:1}.ant-input:-ms-input-placeholder{color:#bfbfbf}.ant-input::-webkit-input-placeholder{color:#bfbfbf}.ant-input:-moz-placeholder-shown{text-overflow:ellipsis}.ant-input:-ms-input-placeholder{text-overflow:ellipsis}.ant-input:placeholder-shown{text-overflow:ellipsis}.ant-input:hover{border-color:#40a9ff;border-right-width:1px!important}.ant-input:focus{border-color:#40a9ff;border-right-width:1px!important;outline:0;box-shadow:0 0 0 2px #1890ff33}.ant-input-disabled{color:#00000040;background-color:#f5f5f5;cursor:not-allowed;opacity:1}.ant-input-disabled:hover{border-color:#d9d9d9;border-right-width:1px!important}.ant-input[disabled]{color:#00000040;background-color:#f5f5f5;cursor:not-allowed;opacity:1}.ant-input[disabled]:hover{border-color:#d9d9d9;border-right-width:1px!important}textarea.ant-input{max-width:100%;height:auto;min-height:32px;line-height:1.5715;vertical-align:bottom;transition:all .3s,height 0s}.ant-input-lg{padding:6.5px 11px;font-size:16px}.ant-input-sm{padding:0 7px}.ant-input-group{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;display:table;width:100%;border-collapse:separate;border-spacing:0}.ant-input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.ant-input-group>[class*=col-]{padding-right:8px}.ant-input-group>[class*=col-]:last-child{padding-right:0}.ant-input-group-addon,.ant-input-group-wrap,.ant-input-group>.ant-input{display:table-cell}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child),.ant-input-group>.ant-input:not(:first-child):not(:last-child){border-radius:0}.ant-input-group-addon,.ant-input-group-wrap{width:1px;white-space:nowrap;vertical-align:middle}.ant-input-group-wrap>*{display:block!important}.ant-input-group .ant-input{float:left;width:100%;margin-bottom:0;text-align:inherit}.ant-input-group .ant-input:focus{z-index:1;border-right-width:1px}.ant-input-group .ant-input:hover{z-index:1;border-right-width:1px}.ant-input-group-addon{position:relative;padding:0 11px;color:#000000d9;font-weight:400;font-size:14px;text-align:center;background-color:#fafafa;border:1px solid #d9d9d9;border-radius:2px;transition:all .3s}.ant-input-group-addon .ant-select{margin:-5px -11px}.ant-input-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector{background-color:inherit;border:1px solid transparent;box-shadow:none}.ant-input-group-addon .ant-select-open .ant-select-selector,.ant-input-group-addon .ant-select-focused .ant-select-selector{color:#1890ff}.ant-input-group-addon>i:only-child:after{position:absolute;top:0;right:0;bottom:0;left:0;content:""}.ant-input-group>.ant-input:first-child,.ant-input-group-addon:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ant-input-group>.ant-input:first-child .ant-select .ant-select-selector,.ant-input-group-addon:first-child .ant-select .ant-select-selector{border-top-right-radius:0;border-bottom-right-radius:0}.ant-input-group>.ant-input-affix-wrapper:not(:first-child) .ant-input{border-top-left-radius:0;border-bottom-left-radius:0}.ant-input-group>.ant-input-affix-wrapper:not(:last-child) .ant-input{border-top-right-radius:0;border-bottom-right-radius:0}.ant-input-group-addon:first-child{border-right:0}.ant-input-group-addon:last-child{border-left:0}.ant-input-group>.ant-input:last-child,.ant-input-group-addon:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.ant-input-group>.ant-input:last-child .ant-select .ant-select-selector,.ant-input-group-addon:last-child .ant-select .ant-select-selector{border-top-left-radius:0;border-bottom-left-radius:0}.ant-input-group-lg .ant-input,.ant-input-group-lg>.ant-input-group-addon{padding:6.5px 11px;font-size:16px}.ant-input-group-sm .ant-input,.ant-input-group-sm>.ant-input-group-addon{padding:0 7px}.ant-input-group-lg .ant-select-single .ant-select-selector{height:40px}.ant-input-group-sm .ant-select-single .ant-select-selector{height:24px}.ant-input-group.ant-input-group-compact{display:block}.ant-input-group.ant-input-group-compact:before,.ant-input-group.ant-input-group-compact:after{display:table;content:""}.ant-input-group.ant-input-group-compact:after{clear:both}.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child),.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child),.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child){border-right-width:1px}.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):hover,.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):hover,.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child):hover{z-index:1}.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child):focus{z-index:1}.ant-input-group.ant-input-group-compact>*{display:inline-block;float:none;vertical-align:top;border-radius:0}.ant-input-group.ant-input-group-compact>.ant-input-affix-wrapper{display:inline-flex}.ant-input-group.ant-input-group-compact>*:not(:last-child){margin-right:-1px;border-right-width:1px}.ant-input-group.ant-input-group-compact .ant-input{float:none}.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector,.ant-input-group.ant-input-group-compact>.ant-calendar-picker .ant-input,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper .ant-mention-editor,.ant-input-group.ant-input-group-compact>.ant-time-picker .ant-time-picker-input,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input{border-right-width:1px;border-radius:0}.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector:hover,.ant-input-group.ant-input-group-compact>.ant-calendar-picker .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper .ant-mention-editor:hover,.ant-input-group.ant-input-group-compact>.ant-time-picker .ant-time-picker-input:hover,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input:hover{z-index:1}.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector:focus,.ant-input-group.ant-input-group-compact>.ant-calendar-picker .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper .ant-mention-editor:focus,.ant-input-group.ant-input-group-compact>.ant-time-picker .ant-time-picker-input:focus,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input:focus{z-index:1}.ant-input-group.ant-input-group-compact>.ant-select-focused{z-index:1}.ant-input-group.ant-input-group-compact>*:first-child,.ant-input-group.ant-input-group-compact>.ant-select:first-child>.ant-select-selector,.ant-input-group.ant-input-group-compact>.ant-calendar-picker:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper:first-child .ant-mention-editor,.ant-input-group.ant-input-group-compact>.ant-time-picker:first-child .ant-time-picker-input{border-top-left-radius:2px;border-bottom-left-radius:2px}.ant-input-group.ant-input-group-compact>*:last-child,.ant-input-group.ant-input-group-compact>.ant-select:last-child>.ant-select-selector,.ant-input-group.ant-input-group-compact>.ant-calendar-picker:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker-focused:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper:last-child .ant-mention-editor,.ant-input-group.ant-input-group-compact>.ant-time-picker:last-child .ant-time-picker-input{border-right-width:1px;border-top-right-radius:2px;border-bottom-right-radius:2px}.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input{vertical-align:top}.ant-input-group-wrapper{display:inline-block;width:100%;text-align:start;vertical-align:top}.ant-input-affix-wrapper{box-sizing:border-box;margin:0;font-variant:tabular-nums;list-style:none;font-feature-settings:"tnum";position:relative;display:inline-flex;border:1px solid #d9d9d9;border-radius:2px;padding:4px 11px;width:100%;text-align:start;background-color:#fff;background-image:none;color:#000000d9;font-size:14px;line-height:1.5715}.ant-input-affix-wrapper:hover{border-color:#40a9ff;border-right-width:1px!important}.ant-input-affix-wrapper-disabled{color:#00000040;background-color:#f5f5f5;cursor:not-allowed;opacity:1}.ant-input-affix-wrapper-disabled:hover{border-color:#d9d9d9;border-right-width:1px!important}.ant-input-affix-wrapper-focused{border-color:#40a9ff;border-right-width:1px!important;outline:0;box-shadow:0 0 0 2px #1890ff33}.ant-input-affix-wrapper-lg{padding:6.5px 11px;font-size:16px}.ant-input-affix-wrapper-sm{padding:0 7px}.ant-input-affix-wrapper .ant-input{position:relative;text-align:inherit;border:none;padding:0}.ant-input-affix-wrapper .ant-input:focus{border:none;outline:none;box-shadow:none}.ant-input-affix-wrapper .ant-input-prefix,.ant-input-affix-wrapper .ant-input-suffix{display:flex;align-items:center;color:#000000d9;white-space:nowrap}.ant-input-affix-wrapper .ant-input-prefix :not(.anticon),.ant-input-affix-wrapper .ant-input-suffix :not(.anticon){line-height:1.5715}.ant-input-affix-wrapper .ant-input-disabled~.ant-input-suffix .anticon{color:#00000040;cursor:not-allowed}.ant-input-affix-wrapper .ant-input-prefix{margin-right:4px}.ant-input-affix-wrapper .ant-input-suffix{margin-left:4px}.ant-input-password-icon{color:#00000073;cursor:pointer;transition:all .3s}.ant-input-password-icon:hover{color:#000000d9}.ant-input-clear-icon{color:#00000040;font-size:12px;cursor:pointer;transition:color .3s;margin:0 4px;vertical-align:0}.ant-input-clear-icon:hover{color:#00000073}.ant-input-clear-icon:active{color:#000000d9}.ant-input-clear-icon+i{margin-left:6px}.ant-input-clear-icon-hidden,.ant-input-textarea-clear-icon-hidden{visibility:hidden}.ant-input-affix-wrapper-textarea-with-clear-btn{padding:0!important}.ant-input-affix-wrapper-textarea-with-clear-btn .ant-input{padding:4px 11px}.ant-input-textarea-clear-icon{color:#00000040;font-size:12px;cursor:pointer;transition:color .3s;position:absolute;top:0;right:0;margin:8px 8px 0 0}.ant-input-textarea-clear-icon:hover{color:#00000073}.ant-input-textarea-clear-icon:active{color:#000000d9}.ant-input-textarea-clear-icon+i{margin-left:6px}.ant-input-textarea-show-count:after{display:block;color:#00000073;text-align:right;content:attr(data-count)}.ant-input-search-icon{color:#00000073;cursor:pointer;transition:all .3s}.ant-input-search-icon:hover{color:#000000d9}.ant-input-search-enter-button input{border-right:0}.ant-input-search-enter-button+.ant-input-group-addon,.ant-input-search-enter-button input+.ant-input-group-addon{padding:0;border:0}.ant-input-search-enter-button+.ant-input-group-addon .ant-input-search-button,.ant-input-search-enter-button input+.ant-input-group-addon .ant-input-search-button{border-top-left-radius:0;border-bottom-left-radius:0}\n';
var _style_2 = '.ant-radio-group{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";display:inline-block}.ant-radio-wrapper{box-sizing:border-box;margin:0 8px 0 0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;display:inline-block;white-space:nowrap;cursor:pointer}.ant-radio{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;display:inline-block;line-height:1;white-space:nowrap;vertical-align:sub;outline:none;cursor:pointer}.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner,.ant-radio-input:focus+.ant-radio-inner{border-color:#1890ff}.ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 0 3px #1890ff14}.ant-radio-checked:after{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #1890ff;border-radius:50%;visibility:hidden;-webkit-animation:antRadioEffect .36s ease-in-out;animation:antRadioEffect .36s ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;content:""}.ant-radio:hover:after,.ant-radio-wrapper:hover .ant-radio:after{visibility:visible}.ant-radio-inner{position:relative;top:0;left:0;display:block;width:16px;height:16px;background-color:#fff;border-color:#d9d9d9;border-style:solid;border-width:1px;border-radius:100px;transition:all .3s}.ant-radio-inner:after{position:absolute;top:3px;left:3px;display:table;width:8px;height:8px;background-color:#1890ff;border-top:0;border-left:0;border-radius:8px;transform:scale(0);opacity:0;transition:all .3s cubic-bezier(.78,.14,.15,.86);content:" "}.ant-radio-input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;cursor:pointer;opacity:0}.ant-radio-checked .ant-radio-inner{border-color:#1890ff}.ant-radio-checked .ant-radio-inner:after{transform:scale(1);opacity:1;transition:all .3s cubic-bezier(.78,.14,.15,.86)}.ant-radio-disabled .ant-radio-inner{background-color:#f5f5f5;border-color:#d9d9d9!important;cursor:not-allowed}.ant-radio-disabled .ant-radio-inner:after{background-color:#0003}.ant-radio-disabled .ant-radio-input{cursor:not-allowed}.ant-radio-disabled+span{color:#00000040;cursor:not-allowed}span.ant-radio+*{padding-right:8px;padding-left:8px}.ant-radio-button-wrapper{position:relative;display:inline-block;height:32px;margin:0;padding:0 15px;color:#000000d9;line-height:30px;background:#fff;border:1px solid #d9d9d9;border-top-width:1.02px;border-left:0;cursor:pointer;transition:color .3s,background .3s,border-color .3s,box-shadow .3s}.ant-radio-button-wrapper a{color:#000000d9}.ant-radio-button-wrapper>.ant-radio-button{display:block;width:0;height:0;margin-left:0}.ant-radio-group-large .ant-radio-button-wrapper{height:40px;font-size:16px;line-height:38px}.ant-radio-group-small .ant-radio-button-wrapper{height:24px;padding:0 7px;line-height:22px}.ant-radio-button-wrapper:not(:first-child):before{position:absolute;top:-1px;left:-1px;display:block;box-sizing:content-box;width:1px;height:100%;padding:1px 0;background-color:#d9d9d9;transition:background-color .3s;content:""}.ant-radio-button-wrapper:first-child{border-left:1px solid #d9d9d9;border-radius:2px 0 0 2px}.ant-radio-button-wrapper:last-child{border-radius:0 2px 2px 0}.ant-radio-button-wrapper:first-child:last-child{border-radius:2px}.ant-radio-button-wrapper:hover{position:relative;color:#1890ff}.ant-radio-button-wrapper:focus-within{box-shadow:0 0 0 3px #1890ff14}.ant-radio-button-wrapper .ant-radio-inner,.ant-radio-button-wrapper input[type=checkbox],.ant-radio-button-wrapper input[type=radio]{width:0;height:0;opacity:0;pointer-events:none}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){z-index:1;color:#1890ff;background:#fff;border-color:#1890ff}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):before{background-color:#1890ff}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child{border-color:#1890ff}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover{color:#40a9ff;border-color:#40a9ff}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover:before{background-color:#40a9ff}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active{color:#096dd9;border-color:#096dd9}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active:before{background-color:#096dd9}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within{box-shadow:0 0 0 3px #1890ff14}.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){color:#fff;background:#1890ff;border-color:#1890ff}.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover{color:#fff;background:#40a9ff;border-color:#40a9ff}.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active{color:#fff;background:#096dd9;border-color:#096dd9}.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within{box-shadow:0 0 0 3px #1890ff14}.ant-radio-button-wrapper-disabled{color:#00000040;background-color:#f5f5f5;border-color:#d9d9d9;cursor:not-allowed}.ant-radio-button-wrapper-disabled:first-child,.ant-radio-button-wrapper-disabled:hover{color:#00000040;background-color:#f5f5f5;border-color:#d9d9d9}.ant-radio-button-wrapper-disabled:first-child{border-left-color:#d9d9d9}.ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked{color:#00000040;background-color:#e6e6e6;border-color:#d9d9d9;box-shadow:none}@-webkit-keyframes antRadioEffect{0%{transform:scale(1);opacity:.5}to{transform:scale(1.6);opacity:0}}@keyframes antRadioEffect{0%{transform:scale(1);opacity:.5}to{transform:scale(1.6);opacity:0}}@supports (-moz-appearance: meterbar) and (background-blend-mode: difference,normal){.ant-radio{vertical-align:text-bottom}}\n';
var _style_3 = '.ant-select-single .ant-select-selector{display:flex}.ant-select-single .ant-select-selector .ant-select-selection-search{position:absolute;top:0;right:11px;bottom:0;left:11px}.ant-select-single .ant-select-selector .ant-select-selection-search-input{width:100%}.ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-single .ant-select-selector .ant-select-selection-placeholder{padding:0;line-height:30px;transition:all .3s}@supports (-moz-appearance: meterbar){.ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-single .ant-select-selector .ant-select-selection-placeholder{line-height:30px}}.ant-select-single .ant-select-selector .ant-select-selection-item{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ant-select-single .ant-select-selector .ant-select-selection-placeholder{pointer-events:none}.ant-select-single .ant-select-selector:after,.ant-select-single .ant-select-selector .ant-select-selection-item:after,.ant-select-single .ant-select-selector .ant-select-selection-placeholder:after{display:inline-block;width:0;visibility:hidden;content:"\\a0"}.ant-select-single.ant-select-show-arrow .ant-select-selection-search{right:25px}.ant-select-single.ant-select-show-arrow .ant-select-selection-item,.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder{padding-right:18px}.ant-select-single.ant-select-open .ant-select-selection-item{color:#bfbfbf}.ant-select-single:not(.ant-select-customize-input) .ant-select-selector{width:100%;height:32px;padding:0 11px}.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input{height:30px}.ant-select-single:not(.ant-select-customize-input) .ant-select-selector:after{line-height:30px}.ant-select-single.ant-select-customize-input .ant-select-selector:after{display:none}.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-search{position:static;width:100%}.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder{position:absolute;right:0;left:0;padding:0 11px}.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder:after{display:none}.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector{height:40px}.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector:after,.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder{line-height:38px}.ant-select-single.ant-select-lg:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input{height:38px}.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector{height:24px}.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector:after,.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder{line-height:22px}.ant-select-single.ant-select-sm:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input{height:22px}.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selection-search{right:7px;left:7px}.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector{padding:0 7px}.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search{right:28px}.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder{padding-right:21px}.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector{padding:0 11px}.ant-select-selection-overflow{position:relative;display:flex;flex:auto;flex-wrap:wrap;max-width:100%}.ant-select-selection-overflow-item{flex:none;align-self:center;max-width:100%}.ant-select-multiple .ant-select-selector{display:flex;flex-wrap:wrap;align-items:center;padding:1px 4px}.ant-select-show-search.ant-select-multiple .ant-select-selector{cursor:text}.ant-select-disabled.ant-select-multiple .ant-select-selector{background:#f5f5f5;cursor:not-allowed}.ant-select-multiple .ant-select-selector:after{display:inline-block;width:0;margin:2px 0;line-height:24px;content:"\\a0"}.ant-select-multiple.ant-select-show-arrow .ant-select-selector,.ant-select-multiple.ant-select-allow-clear .ant-select-selector{padding-right:24px}.ant-select-multiple .ant-select-selection-item{position:relative;display:flex;flex:none;box-sizing:border-box;max-width:100%;height:24px;margin-top:2px;margin-bottom:2px;line-height:22px;background:#f5f5f5;border:1px solid #f0f0f0;border-radius:2px;cursor:default;transition:font-size .3s,line-height .3s,height .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-margin-end:4px;margin-inline-end:4px;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:4px;padding-inline-end:4px}.ant-select-disabled.ant-select-multiple .ant-select-selection-item{color:#bfbfbf;border-color:#d9d9d9;cursor:not-allowed}.ant-select-multiple .ant-select-selection-item-content{display:inline-block;margin-right:4px;overflow:hidden;white-space:pre;text-overflow:ellipsis}.ant-select-multiple .ant-select-selection-item-remove{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;color:#00000073;font-weight:700;font-size:10px;line-height:inherit;cursor:pointer}.ant-select-multiple .ant-select-selection-item-remove>*{line-height:1}.ant-select-multiple .ant-select-selection-item-remove svg{display:inline-block}.ant-select-multiple .ant-select-selection-item-remove:before{display:none}.ant-select-multiple .ant-select-selection-item-remove .ant-select-multiple .ant-select-selection-item-remove-icon{display:block}.ant-select-multiple .ant-select-selection-item-remove>.anticon{vertical-align:-.2em}.ant-select-multiple .ant-select-selection-item-remove:hover{color:#000000bf}.ant-select-multiple .ant-select-selection-overflow-item+.ant-select-selection-overflow-item .ant-select-selection-search{-webkit-margin-start:0;margin-inline-start:0}.ant-select-multiple .ant-select-selection-search{position:relative;max-width:100%;margin-top:2px;margin-bottom:2px;-webkit-margin-start:7px;margin-inline-start:7px}.ant-select-multiple .ant-select-selection-search-input,.ant-select-multiple .ant-select-selection-search-mirror{height:24px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:24px;transition:all .3s}.ant-select-multiple .ant-select-selection-search-input{width:100%;min-width:4.1px}.ant-select-multiple .ant-select-selection-search-mirror{position:absolute;top:0;left:0;z-index:999;white-space:pre;visibility:hidden}.ant-select-multiple .ant-select-selection-placeholder{position:absolute;top:50%;right:11px;left:11px;transform:translateY(-50%);transition:all .3s}.ant-select-multiple.ant-select-lg .ant-select-selector:after{line-height:32px}.ant-select-multiple.ant-select-lg .ant-select-selection-item{height:32px;line-height:30px}.ant-select-multiple.ant-select-lg .ant-select-selection-search{height:32px;line-height:32px}.ant-select-multiple.ant-select-lg .ant-select-selection-search-input,.ant-select-multiple.ant-select-lg .ant-select-selection-search-mirror{height:32px;line-height:30px}.ant-select-multiple.ant-select-sm .ant-select-selector:after{line-height:16px}.ant-select-multiple.ant-select-sm .ant-select-selection-item{height:16px;line-height:14px}.ant-select-multiple.ant-select-sm .ant-select-selection-search{height:16px;line-height:16px}.ant-select-multiple.ant-select-sm .ant-select-selection-search-input,.ant-select-multiple.ant-select-sm .ant-select-selection-search-mirror{height:16px;line-height:14px}.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder{left:7px}.ant-select-multiple.ant-select-sm .ant-select-selection-search{-webkit-margin-start:3px;margin-inline-start:3px}.ant-select-multiple.ant-select-lg .ant-select-selection-item{height:32px;line-height:32px}.ant-select-disabled .ant-select-selection-item-remove{display:none}.ant-select{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;display:inline-block;cursor:pointer}.ant-select:not(.ant-select-customize-input) .ant-select-selector{position:relative;background-color:#fff;border:1px solid #d9d9d9;border-radius:2px;transition:all .3s cubic-bezier(.645,.045,.355,1)}.ant-select:not(.ant-select-customize-input) .ant-select-selector input{cursor:pointer}.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector{cursor:text}.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector input{cursor:auto}.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{border-color:#40a9ff;border-right-width:1px!important;outline:0;box-shadow:0 0 0 2px #1890ff33}.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector{color:#00000040;background:#f5f5f5;cursor:not-allowed}.ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector{background:#f5f5f5}.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector input{cursor:not-allowed}.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input{margin:0;padding:0;background:transparent;border:none;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input::-webkit-search-cancel-button{display:none;-webkit-appearance:none}.ant-select:not(.ant-select-disabled):hover .ant-select-selector{border-color:#40a9ff;border-right-width:1px!important}.ant-select-selection-item{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media all and (-ms-high-contrast: none){.ant-select-selection-item *::-ms-backdrop,.ant-select-selection-item{flex:auto}}.ant-select-selection-placeholder{flex:1;overflow:hidden;color:#bfbfbf;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}@media all and (-ms-high-contrast: none){.ant-select-selection-placeholder *::-ms-backdrop,.ant-select-selection-placeholder{flex:auto}}.ant-select-arrow{display:inline-block;color:inherit;font-style:normal;line-height:0;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;top:53%;right:11px;width:12px;height:12px;margin-top:-6px;color:#00000040;font-size:12px;line-height:1;text-align:center;pointer-events:none}.ant-select-arrow>*{line-height:1}.ant-select-arrow svg{display:inline-block}.ant-select-arrow:before{display:none}.ant-select-arrow .ant-select-arrow-icon{display:block}.ant-select-arrow .anticon{vertical-align:top;transition:transform .3s}.ant-select-arrow .anticon>svg{vertical-align:top}.ant-select-arrow .anticon:not(.ant-select-suffix){pointer-events:auto}.ant-select-disabled .ant-select-arrow{cursor:not-allowed}.ant-select-clear{position:absolute;top:50%;right:11px;z-index:1;display:inline-block;width:12px;height:12px;margin-top:-6px;color:#00000040;font-size:12px;font-style:normal;line-height:1;text-align:center;text-transform:none;background:#fff;cursor:pointer;opacity:0;transition:color .3s ease,opacity .15s ease;text-rendering:auto}.ant-select-clear:before{display:block}.ant-select-clear:hover{color:#00000073}.ant-select:hover .ant-select-clear{opacity:1}.ant-select-dropdown{margin:0;color:#000000d9;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;top:-9999px;left:-9999px;z-index:1050;box-sizing:border-box;padding:4px 0;overflow:hidden;font-size:14px;font-variant:initial;background-color:#fff;border-radius:2px;outline:none;box-shadow:0 2px 8px #00000026}.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-bottomLeft{-webkit-animation-name:antSlideUpIn;animation-name:antSlideUpIn}.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-topLeft,.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-topLeft{-webkit-animation-name:antSlideDownIn;animation-name:antSlideDownIn}.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-bottomLeft{-webkit-animation-name:antSlideUpOut;animation-name:antSlideUpOut}.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-topLeft{-webkit-animation-name:antSlideDownOut;animation-name:antSlideDownOut}.ant-select-dropdown-hidden{display:none}.ant-select-dropdown-empty{color:#00000040}.ant-select-item-empty{position:relative;display:block;min-height:32px;padding:5px 12px;color:#000000d9;font-weight:400;font-size:14px;line-height:22px;color:#00000040}.ant-select-item{position:relative;display:block;min-height:32px;padding:5px 12px;color:#000000d9;font-weight:400;font-size:14px;line-height:22px;cursor:pointer;transition:background .3s ease}.ant-select-item-group{color:#00000073;font-size:12px;cursor:default}.ant-select-item-option{display:flex}.ant-select-item-option-content{flex:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-select-item-option-state{flex:none}.ant-select-item-option-active:not(.ant-select-item-option-disabled){background-color:#f5f5f5}.ant-select-item-option-selected:not(.ant-select-item-option-disabled){color:#000000d9;font-weight:600;background-color:#e6f7ff}.ant-select-item-option-selected:not(.ant-select-item-option-disabled) .ant-select-item-option-state{color:#1890ff}.ant-select-item-option-disabled{color:#00000040;cursor:not-allowed}.ant-select-item-option-grouped{padding-left:24px}.ant-select-lg{font-size:16px}.ant-select-borderless .ant-select-selector{background-color:transparent!important;border-color:transparent!important;box-shadow:none!important}.ant-select-rtl{direction:rtl}.ant-select-rtl .ant-select-arrow,.ant-select-rtl .ant-select-clear{right:initial;left:11px}.ant-select-dropdown-rtl{direction:rtl}.ant-select-dropdown-rtl .ant-select-item-option-grouped{padding-right:24px;padding-left:12px}.ant-select-rtl.ant-select-multiple.ant-select-show-arrow .ant-select-selector,.ant-select-rtl.ant-select-multiple.ant-select-allow-clear .ant-select-selector{padding-right:4px;padding-left:24px}.ant-select-rtl.ant-select-multiple .ant-select-selection-item{text-align:right}.ant-select-rtl.ant-select-multiple .ant-select-selection-item-content{margin-right:0;margin-left:4px;text-align:right}.ant-select-rtl.ant-select-multiple .ant-select-selection-search-mirror{right:0;left:auto}.ant-select-rtl.ant-select-multiple .ant-select-selection-placeholder{right:11px;left:auto}.ant-select-rtl.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder{right:7px}.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-placeholder{right:0;left:9px;text-align:right}.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-search{right:11px;left:25px}.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-item,.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder{padding-right:0;padding-left:18px}.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search{right:6px}.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder{padding-right:0;padding-left:21px}\n';
var _style_4 = '.ant-tag{box-sizing:border-box;margin:0 8px 0 0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";display:inline-block;height:auto;padding:0 7px;font-size:12px;line-height:20px;white-space:nowrap;background:#fafafa;border:1px solid #d9d9d9;border-radius:2px;opacity:1;transition:all .3s}.ant-tag,.ant-tag a,.ant-tag a:hover{color:#000000d9}.ant-tag>a:first-child:last-child{display:inline-block;margin:0 -8px;padding:0 8px}.ant-tag-close-icon{margin-left:3px;color:#00000073;font-size:10px;cursor:pointer;transition:all .3s}.ant-tag-close-icon:hover{color:#000000d9}.ant-tag-has-color{border-color:transparent}.ant-tag-has-color,.ant-tag-has-color a,.ant-tag-has-color a:hover,.ant-tag-has-color .anticon-close,.ant-tag-has-color .anticon-close:hover{color:#fff}.ant-tag-checkable{background-color:transparent;border-color:transparent;cursor:pointer}.ant-tag-checkable:not(.ant-tag-checkable-checked):hover{color:#1890ff}.ant-tag-checkable:active,.ant-tag-checkable-checked{color:#fff}.ant-tag-checkable-checked{background-color:#1890ff}.ant-tag-checkable:active{background-color:#096dd9}.ant-tag-hidden{display:none}.ant-tag-pink{color:#c41d7f;background:#fff0f6;border-color:#ffadd2}.ant-tag-pink-inverse{color:#fff;background:#eb2f96;border-color:#eb2f96}.ant-tag-magenta{color:#c41d7f;background:#fff0f6;border-color:#ffadd2}.ant-tag-magenta-inverse{color:#fff;background:#eb2f96;border-color:#eb2f96}.ant-tag-red{color:#cf1322;background:#fff1f0;border-color:#ffa39e}.ant-tag-red-inverse{color:#fff;background:#f5222d;border-color:#f5222d}.ant-tag-volcano{color:#d4380d;background:#fff2e8;border-color:#ffbb96}.ant-tag-volcano-inverse{color:#fff;background:#fa541c;border-color:#fa541c}.ant-tag-orange{color:#d46b08;background:#fff7e6;border-color:#ffd591}.ant-tag-orange-inverse{color:#fff;background:#fa8c16;border-color:#fa8c16}.ant-tag-yellow{color:#d4b106;background:#feffe6;border-color:#fffb8f}.ant-tag-yellow-inverse{color:#fff;background:#fadb14;border-color:#fadb14}.ant-tag-gold{color:#d48806;background:#fffbe6;border-color:#ffe58f}.ant-tag-gold-inverse{color:#fff;background:#faad14;border-color:#faad14}.ant-tag-cyan{color:#08979c;background:#e6fffb;border-color:#87e8de}.ant-tag-cyan-inverse{color:#fff;background:#13c2c2;border-color:#13c2c2}.ant-tag-lime{color:#7cb305;background:#fcffe6;border-color:#eaff8f}.ant-tag-lime-inverse{color:#fff;background:#a0d911;border-color:#a0d911}.ant-tag-green{color:#389e0d;background:#f6ffed;border-color:#b7eb8f}.ant-tag-green-inverse{color:#fff;background:#52c41a;border-color:#52c41a}.ant-tag-blue{color:#096dd9;background:#e6f7ff;border-color:#91d5ff}.ant-tag-blue-inverse{color:#fff;background:#1890ff;border-color:#1890ff}.ant-tag-geekblue{color:#1d39c4;background:#f0f5ff;border-color:#adc6ff}.ant-tag-geekblue-inverse{color:#fff;background:#2f54eb;border-color:#2f54eb}.ant-tag-purple{color:#531dab;background:#f9f0ff;border-color:#d3adf7}.ant-tag-purple-inverse{color:#fff;background:#722ed1;border-color:#722ed1}.ant-tag-success{color:#52c41a;background:#f6ffed;border-color:#b7eb8f}.ant-tag-processing{color:#1890ff;background:#e6f7ff;border-color:#91d5ff}.ant-tag-error{color:#f5222d;background:#fff1f0;border-color:#ffa39e}.ant-tag-warning{color:#fa8c16;background:#fff7e6;border-color:#ffd591}.ant-tag>.anticon+span,.ant-tag>span+.anticon{margin-left:7px}.ant-tag.ant-tag-rtl{margin-right:0;margin-left:8px;direction:rtl;text-align:right}.ant-tag-rtl .ant-tag-close-icon{margin-right:3px;margin-left:0}.ant-tag-rtl.ant-tag>.anticon+span,.ant-tag-rtl.ant-tag>span+.anticon{margin-right:7px;margin-left:0}\n';
var _style_5 = '.imc-condition-popover .ant-tag{display:flex}.tag-item{max-width:180px;line-height:22px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.imc-condition-popover .ant-radio-inner:after{top:4px;left:4px}.imc-condition-popover{overflow:hidden;display:flex;cursor:pointer;background:rgba(132,198,255,.2)}.imc-condition-popover .overlay-wrap{position:absolute;z-index:-1;display:none}.imc-condition-popover .tags-wrap{display:flex}.imc-condition-popover .popover-content{flex:1}.imc-condition-popover .tags-pane{background:#1890ff;display:flex;align-items:center;padding:4px;border-radius:2px;color:#fff}.imc-condition-popover .items-center{align-items:center}.imc-condition-popover .close{font-weight:600;line-height:12px;padding-right:3px}.imc-condition-popover .close::active{opacity:.8}.imc-condition-popover .action{padding:8px;float:right}.btn{line-height:1.5715;position:relative;display:inline-block;font-weight:400;white-space:nowrap;text-align:center;background-image:none;border:1px solid transparent;box-shadow:0 2px #00000004;cursor:pointer;transition:all .3s cubic-bezier(.645,.045,.355,1);user-select:none;touch-action:manipulation;height:32px;padding:4px 15px;font-size:14px;border-radius:2px;color:#000000d9;background:#fff;border-color:#d9d9d9}.btn :before{content:"";-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);position:absolute;width:100%;height:100%;left:0;top:0;border-radius:4px;pointer-events:none;opacity:1;z-index:1}.imc-condition-popover .btn:before{content:"";-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);position:absolute;width:100%;height:100%;left:0;top:0;border-radius:4px;pointer-events:none;opacity:1;z-index:1}.imc-condition-popover .btn:active:before{box-shadow:0 0 8px 2px #2f88ee4d;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.imc-condition-popover .primary-btn{background:#1890ff;color:#fff}.imc-condition-popover .primary-btn:hover{opacity:.8}.imc-condition-popover .reset-btn:hover{color:#1890ff;border:1px solid #1890ff}.ant-popover-placement-rightTop>.ant-popover-content>.ant-popover-arrow{top:var(--4aa15518)}\n';
const __default__ = defineComponent({
  components: {
    "a-popover": Popover$1,
    conditionPane,
    conditionTag,
    FilterTwoTone: FilterTwoTone$1,
    RightOutlined: RightOutlined$1
  },
  emits: ["delete", "confirm", "change"],
  props: {
    id: {
      type: String,
      default: ""
    },
    shadowId: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    trigger: {
      type: String,
      default: "click"
    },
    childTrigger: {
      type: String,
      default: "click"
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    confirmText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    restText: {
      type: String,
      default: "\u91CD\u7F6E"
    },
    wrapStyle: {
      type: [Object, String],
      default: () => ({})
    },
    childAutoAdjustOverflow: {
      type: [Boolean, String],
      default: true
    },
    autoArrowTop: {
      type: [Boolean, String],
      default: true
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props2, { emit: emit2, expose }) {
    console.log("20211230 10.48");
    const visible2 = ref(false);
    const overlay = ref(null);
    const overlayOutside = ref(null);
    const overlayModal = ref(null);
    const optionsState = ref(props2.options);
    const tagsValue = ref(props2.defaultValue);
    const visibleMap = reactive({});
    const activeKey = ref("");
    const arrowTop = ref(void 0);
    const handleVisibleChange2 = (key, e2) => {
      visibleMap[key] = e2;
    };
    const handleVisibleShow = (key) => {
      setTimeout(() => {
        visible2.value = true;
        for (let i2 in visibleMap) {
          if (i2 === key) {
            visibleMap[key] = true;
            activeKey.value = key;
          } else {
            visibleMap[i2] = false;
          }
        }
      });
    };
    watch(() => props2.options, (n2) => {
      optionsState.value = n2;
      props2.options.map((item) => {
        visibleMap[item.key] = false;
      });
    });
    const handleVisibleChangeParent = (e2) => {
      console.log(e2);
      setTimeout(() => {
        visible2.value = e2;
        if (!e2) {
          activeKey.value = "";
        }
      });
    };
    const overlayRefMap = computed(() => {
      const overlayMap = {};
      const contentMap = {};
      const tagsMap = {};
      const titleMap = {};
      props2.options.forEach((item) => {
        var _a, _b, _c, _d;
        if (!((_a = overlayMap[item.key]) == null ? void 0 : _a.value)) {
          overlayMap[item.key] = ref(null);
        }
        if (!((_b = contentMap[item.key]) == null ? void 0 : _b.value)) {
          contentMap[`${item.key}-content`] = ref(null);
        }
        if (!((_c = tagsMap[item.key]) == null ? void 0 : _c.value)) {
          tagsMap[item.key] = ref(null);
        }
        if (!((_d = titleMap[item.key]) == null ? void 0 : _d.value)) {
          titleMap[item.key] = ref(null);
        }
      });
      return {
        overlayMap,
        contentMap,
        tagsMap,
        titleMap
      };
    });
    const outsideElement = document.querySelector(`#${props2.id}`);
    outsideElement == null ? void 0 : outsideElement.childNodes;
    watchEffect(() => {
      var _a, _b;
      if (overlay.value) {
        const refStateContent = overlayRefMap.value.contentMap;
        const shadowId = props2.shadowId;
        const id2 = props2.id;
        for (let i2 in refStateContent) {
          let childSlotNode = null;
          if (shadowId) {
            const _id = id2 ? `#${id2} ` : "";
            childSlotNode = (_b = (_a = document.querySelector(`#${shadowId}`)) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector(`${_id}[slot=${i2}]`);
          } else if (id2) {
            childSlotNode = document.querySelector(`#${id2} [slot=${i2}]`);
          }
          if (!childSlotNode) {
            const div = document.createElement("div");
            i2.split("-");
            div.id = i2;
            div.slot = i2;
            outsideElement.append(div);
          }
        }
      }
    });
    watchEffect(() => {
      var _a;
      if (overlay.value && props2.id) {
        const refStateContent = overlayRefMap.value.contentMap;
        const outside = outsideElement == null ? void 0 : outsideElement.childNodes;
        if (outside == null ? void 0 : outside.length) {
          const refState = overlayRefMap.value.overlayMap;
          for (let i2 in refState) {
            insetSlot(refState[i2].value, i2, props2.id, props2.shadowId);
          }
          for (let i2 in refStateContent) {
            if ((_a = refStateContent[i2].value) == null ? void 0 : _a[0]) {
              insetSlot(refStateContent[i2].value[0], i2, props2.id, props2.shadowId);
            }
          }
        }
      }
    });
    const getTags = (data12) => {
      const options = data12.options;
      const tags = [];
      options == null ? void 0 : options.forEach((item) => {
        var _a, _b;
        const value7 = item.value;
        if ((_a = item == null ? void 0 : item.options) == null ? void 0 : _a.length) {
          if (typeof value7 === "string") {
            const optionsItem = (_b = item == null ? void 0 : item.options) == null ? void 0 : _b.find((iii) => iii.value === value7);
            optionsItem && tags.push(optionsItem);
          } else {
            value7 == null ? void 0 : value7.forEach((ii) => {
              var _a2;
              const optionsItem = (_a2 = item == null ? void 0 : item.options) == null ? void 0 : _a2.find((iii) => iii.value === ii);
              optionsItem && tags.push(optionsItem);
            });
          }
        } else {
          item.value && tags.push({ label: item.value, value: item.label });
        }
      });
      return __spreadValues({
        tags
      }, data12);
    };
    const updateTag = (_item) => {
      var _a;
      _item.options;
      const key = _item.key;
      let _index = void 0;
      const hasTagInTags = (_a = tagsValue == null ? void 0 : tagsValue.value) == null ? void 0 : _a.some((item, index2) => {
        if (item.key === key) {
          _index = index2;
        }
        return item.key === key;
      });
      nextTick(() => {
        const hasVal = _item.options.some((item) => {
          var _a2;
          return (_a2 = item.value) == null ? void 0 : _a2.length;
        });
        if (hasTagInTags) {
          if (hasVal) {
            const tags = getTags(_item);
            tagsValue.value[_index] = tags;
          } else {
            tagsValue.value.splice(_index, 1);
          }
        } else {
          if (hasVal) {
            const tags = getTags(_item);
            tagsValue.value.push(tags);
          }
        }
      });
    };
    const handleChange7 = (val, record, row) => {
      emit2("change", val, record, row);
      nextTick(() => {
        updateTag(row);
      });
    };
    const updateOptions = (key, options, deep = false) => {
      var _a, _b;
      const originItem = optionsState.value.find((item) => item.key === key);
      if (originItem) {
        if (deep) {
          originItem.options = options;
        } else {
          const _options = [];
          const _optionsMap = {};
          options.forEach((item) => {
            if (item.key) {
              _optionsMap[item.key] = item;
            }
          });
          if ((_a = originItem == null ? void 0 : originItem.options) == null ? void 0 : _a.length) {
            (_b = originItem == null ? void 0 : originItem.options) == null ? void 0 : _b.forEach((item) => {
              if (_optionsMap[item.key]) {
                _options.push(Object.assign(item, _optionsMap[item.key]));
              } else {
                _options.push(item);
              }
            });
            originItem.options = _options;
          } else {
            originItem.options = options;
          }
        }
        setTimeout(() => {
          updateTag(originItem);
        }, 100);
      }
    };
    const handleCloseTag = (index2, row) => {
      const item = tagsValue.value[index2];
      const key = item.key;
      const t2 = optionsState.value.find((item2) => item2.key === key);
      emit2("delete", index2, row);
      const _options = [];
      t2.options.forEach((item2) => {
        item2.value = void 0;
        _options.push(item2);
      });
      t2.options = _options;
      tagsValue.value.splice(index2, 1);
    };
    const handleConfirm = () => {
      emit2("confirm", optionsState.value, tagsValue.value);
    };
    const clear = () => {
      var _a;
      (_a = optionsState.value) == null ? void 0 : _a.forEach((item) => {
        const options = item.options;
        const _options = [];
        options == null ? void 0 : options.forEach((ii) => {
          ii.value = void 0;
          _options.push(ii);
        });
        item.options = _options;
      });
      tagsValue.value = [];
    };
    const handleClear = () => {
      clear();
      emit2("clear", optionsState.value);
    };
    const getTagsValue = (key) => {
      const obj = {};
      tagsValue.value.forEach((item) => {
        var _a;
        const _obj = {};
        (_a = item == null ? void 0 : item.options) == null ? void 0 : _a.forEach((_item) => {
          _obj[_item == null ? void 0 : _item.key] = _item == null ? void 0 : _item.value;
        });
        obj[item.key] = _obj;
      });
      return key ? obj[key] : obj;
    };
    const handleClickItem = (item) => {
      if (props2.childAutoAdjustOverflow && props2.autoArrowTop) {
        setTimeout(() => {
          var _a, _b, _c, _d;
          const ref2 = (_b = (_a = overlayRefMap.value) == null ? void 0 : _a.titleMap) == null ? void 0 : _b[activeKey == null ? void 0 : activeKey.value];
          console.log(ref2.value[0]);
          const rect = (_d = (_c = ref2 == null ? void 0 : ref2.value) == null ? void 0 : _c[0]) == null ? void 0 : _d.getBoundingClientRect();
          if (rect == null ? void 0 : rect.top) {
            arrowTop.value = rect.top + 12;
          } else {
            arrowTop.value = 12;
          }
        });
      }
      activeKey.value = item.key;
    };
    const handleShowVisible = () => {
      setTimeout(() => {
        visible2.value = true;
      });
    };
    expose({
      updateTag,
      updateOptions,
      clear,
      handleVisibleShow,
      getState: () => optionsState.value,
      getTagsValue
    });
    return {
      overlay,
      overlayOutside,
      overlayModal,
      handleChange: handleChange7,
      tagsValue,
      handleCloseTag,
      optionsState,
      handleConfirm,
      getStyleByString,
      handleClear,
      overlayRefMap,
      visibleMap,
      handleVisibleChange: handleVisibleChange2,
      handleVisibleShow,
      activeKey,
      handleVisibleChangeParent,
      handleClickItem,
      arrowTop,
      isTrue,
      visible: visible2,
      handleShowVisible
    };
  }
});
const __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "4aa15518": _ctx.arrowTop
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props2, ctx) => {
  __injectCSSVars__();
  return __setup__(props2, ctx);
} : __injectCSSVars__;
const _sfc_main = __default__;
const _hoisted_1 = { class: "popover-content" };
const _hoisted_2 = {
  ref: "overlay",
  style: { "max-height": "350px", "overflow": "auto", "min-width": "240px", "padding": "4px" }
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { style: { "font-size": "16px", "font-weight": "600", "margin-bottom": "8px" } };
const _hoisted_5 = { style: { "display": "flex", "flex-grow": "1" } };
const _hoisted_6 = { style: { "display": "flex", "flex-grow": "1", "flex-wrap": "wrap" } };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "action" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RightOutlined = resolveComponent("RightOutlined");
  const _component_condition_pane = resolveComponent("condition-pane");
  const _component_a_popover = resolveComponent("a-popover");
  const _component_FilterTwoTone = resolveComponent("FilterTwoTone");
  const _component_condition_tag = resolveComponent("condition-tag");
  return openBlock(), createElementBlock("div", {
    class: "imc-condition-popover",
    style: normalizeStyle(_ctx.getStyleByString(_ctx.wrapStyle))
  }, [
    createElementVNode("div", _hoisted_1, [
      createVNode(_component_a_popover, mergeProps({ title: _ctx.title }, _ctx.params, {
        visible: _ctx.visible,
        "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.visible = $event),
        overlayClassName: "imc-condition-popover--content",
        placement: "bottomLeft",
        trigger: _ctx.trigger,
        onClick: _ctx.handleShowVisible,
        onVisibleChange: _ctx.handleVisibleChangeParent
      }), {
        content: withCtx(() => [
          createElementVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.optionsState, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.key
              }, [
                createVNode(_component_a_popover, {
                  trigger: _ctx.childTrigger,
                  visible: _ctx.visibleMap[item.key],
                  "onUpdate:visible": ($event) => _ctx.visibleMap[item.key] = $event,
                  autoAdjustOverflow: _ctx.isTrue(_ctx.childAutoAdjustOverflow),
                  onVisibleChange: (e2) => _ctx.handleVisibleChange(item.key, e2),
                  placement: "rightTop"
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      class: "imc-condition-popover--overlayItem",
                      ref_for: true,
                      ref: _ctx.overlayRefMap.titleMap[item.key],
                      onClick: ($event) => _ctx.handleClickItem(item),
                      style: normalizeStyle({
                        color: _ctx.activeKey === item.key ? "#1890ff" : "#333"
                      })
                    }, [
                      createElementVNode("span", null, toDisplayString(item.label), 1),
                      createVNode(_component_RightOutlined, { style: { "color": "#999" } })
                    ], 12, _hoisted_3)
                  ]),
                  content: withCtx(() => [
                    createElementVNode("div", {
                      ref_for: true,
                      ref: _ctx.overlayRefMap.overlayMap[item.key],
                      style: { "overflow": "hidden", "position": "relative", "min-width": "240px" }
                    }, [
                      createElementVNode("div", _hoisted_4, toDisplayString(item.label), 1),
                      createVNode(_component_condition_pane, mergeProps({
                        onChange: (val, record) => _ctx.handleChange(val, record, item)
                      }, item), null, 16, ["onChange"])
                    ], 512),
                    createElementVNode("div", {
                      ref_for: true,
                      ref: _ctx.overlayRefMap.contentMap[`${item.key}-content`]
                    }, null, 512)
                  ]),
                  _: 2
                }, 1032, ["trigger", "visible", "onUpdate:visible", "autoAdjustOverflow", "onVisibleChange"])
              ]);
            }), 128))
          ], 512)
        ]),
        default: withCtx(() => [
          createElementVNode("span", _hoisted_5, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              createVNode(_component_FilterTwoTone, { style: { "font-size": "28px", "padding-top": "10px", "line-height": "24px", "margin": "0 8px" } })
            ]),
            createElementVNode("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tagsValue, (item, index2) => {
                return openBlock(), createElementBlock("div", {
                  style: { "margin": "8px", "display": "flex", "margin-left": "0" },
                  key: item.key,
                  onClick: ($event) => _ctx.handleVisibleShow(item.key)
                }, [
                  createVNode(_component_condition_tag, {
                    onClose: (e2) => _ctx.handleCloseTag(index2, item),
                    tags: item.tags,
                    label: item.label,
                    maxTagCount: 2
                  }, null, 8, ["onClose", "tags", "label"])
                ], 8, _hoisted_7);
              }), 128))
            ])
          ])
        ]),
        _: 3
      }, 16, ["title", "visible", "trigger", "onClick", "onVisibleChange"])
    ]),
    createElementVNode("div", _hoisted_8, [
      renderSlot(_ctx.$slots, "action", {}, () => [
        _ctx.restText ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: "btn reset-btn",
          style: { "margin-right": "8px" },
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
        }, toDisplayString(_ctx.restText), 1)) : createCommentVNode("", true),
        _ctx.confirmText ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "btn primary-btn",
          type: "primary",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
        }, toDisplayString(_ctx.confirmText), 1)) : createCommentVNode("", true)
      ])
    ])
  ], 4);
}
var ConditionPopover = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1, _style_2, _style_3, _style_4, _style_5]]]);
const CUSTOM_PREFIX = "imc-";
const ImcConditionPopover = defineCustomElement(ConditionPopover);
customElements.define(`${CUSTOM_PREFIX}condition-popover`, ImcConditionPopover);
export { ImcConditionPopover };
