"use strict";
var on = Object.create;
var ie = Object.defineProperty;
var un = Object.getOwnPropertyDescriptor;
var sn = Object.getOwnPropertyNames;
var cn = Object.getPrototypeOf,
  fn = Object.prototype.hasOwnProperty;
var xe = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports),
  ln = (t, o) => {
    for (var f in o) ie(t, f, { get: o[f], enumerable: !0 });
  },
  Pr = (t, o, f, y) => {
    if ((o && typeof o == "object") || typeof o == "function")
      for (let d of sn(o))
        !fn.call(t, d) &&
          d !== f &&
          ie(t, d, {
            get: () => o[d],
            enumerable: !(y = un(o, d)) || y.enumerable,
          });
    return t;
  };
var pn = (t, o, f) => (
    (f = t != null ? on(cn(t)) : {}),
    Pr(
      o || !t || !t.__esModule
        ? ie(f, "default", { value: t, enumerable: !0 })
        : f,
      t,
    )
  ),
  dn = (t) => Pr(ie({}, "__esModule", { value: !0 }), t);
var Ur = xe((l) => {
  "use strict";
  var K = Symbol.for("react.element"),
    vn = Symbol.for("react.portal"),
    yn = Symbol.for("react.fragment"),
    hn = Symbol.for("react.strict_mode"),
    mn = Symbol.for("react.profiler"),
    gn = Symbol.for("react.provider"),
    _n = Symbol.for("react.context"),
    bn = Symbol.for("react.forward_ref"),
    En = Symbol.for("react.suspense"),
    Rn = Symbol.for("react.memo"),
    Cn = Symbol.for("react.lazy"),
    Ar = Symbol.iterator;
  function wn(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Ar && t[Ar]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Ir = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $r = Object.assign,
    Dr = {};
  function W(t, o, f) {
    (this.props = t),
      (this.context = o),
      (this.refs = Dr),
      (this.updater = f || Ir);
  }
  W.prototype.isReactComponent = {};
  W.prototype.setState = function (t, o) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, t, o, "setState");
  };
  W.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Fr() {}
  Fr.prototype = W.prototype;
  function Ie(t, o, f) {
    (this.props = t),
      (this.context = o),
      (this.refs = Dr),
      (this.updater = f || Ir);
  }
  var $e = (Ie.prototype = new Fr());
  $e.constructor = Ie;
  $r($e, W.prototype);
  $e.isPureReactComponent = !0;
  var xr = Array.isArray,
    Lr = Object.prototype.hasOwnProperty,
    De = { current: null },
    Mr = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Nr(t, o, f) {
    var y,
      d = {},
      b = null,
      C = null;
    if (o != null)
      for (y in (o.ref !== void 0 && (C = o.ref),
      o.key !== void 0 && (b = "" + o.key),
      o))
        Lr.call(o, y) && !Mr.hasOwnProperty(y) && (d[y] = o[y]);
    var _ = arguments.length - 2;
    if (_ === 1) d.children = f;
    else if (1 < _) {
      for (var m = Array(_), T = 0; T < _; T++) m[T] = arguments[T + 2];
      d.children = m;
    }
    if (t && t.defaultProps)
      for (y in ((_ = t.defaultProps), _)) d[y] === void 0 && (d[y] = _[y]);
    return {
      $$typeof: K,
      type: t,
      key: b,
      ref: C,
      props: d,
      _owner: De.current,
    };
  }
  function Sn(t, o) {
    return {
      $$typeof: K,
      type: t.type,
      key: o,
      ref: t.ref,
      props: t.props,
      _owner: t._owner,
    };
  }
  function Fe(t) {
    return typeof t == "object" && t !== null && t.$$typeof === K;
  }
  function On(t) {
    var o = { "=": "=0", ":": "=2" };
    return (
      "$" +
      t.replace(/[=:]/g, function (f) {
        return o[f];
      })
    );
  }
  var jr = /\/+/g;
  function je(t, o) {
    return typeof t == "object" && t !== null && t.key != null
      ? On("" + t.key)
      : o.toString(36);
  }
  function ce(t, o, f, y, d) {
    var b = typeof t;
    (b === "undefined" || b === "boolean") && (t = null);
    var C = !1;
    if (t === null) C = !0;
    else
      switch (b) {
        case "string":
        case "number":
          C = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case K:
            case vn:
              C = !0;
          }
      }
    if (C)
      return (
        (C = t),
        (d = d(C)),
        (t = y === "" ? "." + je(C, 0) : y),
        xr(d)
          ? ((f = ""),
            t != null && (f = t.replace(jr, "$&/") + "/"),
            ce(d, o, f, "", function (T) {
              return T;
            }))
          : d != null &&
            (Fe(d) &&
              (d = Sn(
                d,
                f +
                  (!d.key || (C && C.key === d.key)
                    ? ""
                    : ("" + d.key).replace(jr, "$&/") + "/") +
                  t,
              )),
            o.push(d)),
        1
      );
    if (((C = 0), (y = y === "" ? "." : y + ":"), xr(t)))
      for (var _ = 0; _ < t.length; _++) {
        b = t[_];
        var m = y + je(b, _);
        C += ce(b, o, f, m, d);
      }
    else if (((m = wn(t)), typeof m == "function"))
      for (t = m.call(t), _ = 0; !(b = t.next()).done; )
        (b = b.value), (m = y + je(b, _++)), (C += ce(b, o, f, m, d));
    else if (b === "object")
      throw (
        ((o = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
            (o === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : o) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return C;
  }
  function se(t, o, f) {
    if (t == null) return t;
    var y = [],
      d = 0;
    return (
      ce(t, y, "", "", function (b) {
        return o.call(f, b, d++);
      }),
      y
    );
  }
  function Tn(t) {
    if (t._status === -1) {
      var o = t._result;
      (o = o()),
        o.then(
          function (f) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 1), (t._result = f));
          },
          function (f) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 2), (t._result = f));
          },
        ),
        t._status === -1 && ((t._status = 0), (t._result = o));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var A = { current: null },
    fe = { transition: null },
    kn = {
      ReactCurrentDispatcher: A,
      ReactCurrentBatchConfig: fe,
      ReactCurrentOwner: De,
    };
  function Vr() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  l.Children = {
    map: se,
    forEach: function (t, o, f) {
      se(
        t,
        function () {
          o.apply(this, arguments);
        },
        f,
      );
    },
    count: function (t) {
      var o = 0;
      return (
        se(t, function () {
          o++;
        }),
        o
      );
    },
    toArray: function (t) {
      return (
        se(t, function (o) {
          return o;
        }) || []
      );
    },
    only: function (t) {
      if (!Fe(t))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return t;
    },
  };
  l.Component = W;
  l.Fragment = yn;
  l.Profiler = mn;
  l.PureComponent = Ie;
  l.StrictMode = hn;
  l.Suspense = En;
  l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kn;
  l.act = Vr;
  l.cloneElement = function (t, o, f) {
    if (t == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          t +
          ".",
      );
    var y = $r({}, t.props),
      d = t.key,
      b = t.ref,
      C = t._owner;
    if (o != null) {
      if (
        (o.ref !== void 0 && ((b = o.ref), (C = De.current)),
        o.key !== void 0 && (d = "" + o.key),
        t.type && t.type.defaultProps)
      )
        var _ = t.type.defaultProps;
      for (m in o)
        Lr.call(o, m) &&
          !Mr.hasOwnProperty(m) &&
          (y[m] = o[m] === void 0 && _ !== void 0 ? _[m] : o[m]);
    }
    var m = arguments.length - 2;
    if (m === 1) y.children = f;
    else if (1 < m) {
      _ = Array(m);
      for (var T = 0; T < m; T++) _[T] = arguments[T + 2];
      y.children = _;
    }
    return { $$typeof: K, type: t.type, key: d, ref: b, props: y, _owner: C };
  };
  l.createContext = function (t) {
    return (
      (t = {
        $$typeof: _n,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (t.Provider = { $$typeof: gn, _context: t }),
      (t.Consumer = t)
    );
  };
  l.createElement = Nr;
  l.createFactory = function (t) {
    var o = Nr.bind(null, t);
    return (o.type = t), o;
  };
  l.createRef = function () {
    return { current: null };
  };
  l.forwardRef = function (t) {
    return { $$typeof: bn, render: t };
  };
  l.isValidElement = Fe;
  l.lazy = function (t) {
    return { $$typeof: Cn, _payload: { _status: -1, _result: t }, _init: Tn };
  };
  l.memo = function (t, o) {
    return { $$typeof: Rn, type: t, compare: o === void 0 ? null : o };
  };
  l.startTransition = function (t) {
    var o = fe.transition;
    fe.transition = {};
    try {
      t();
    } finally {
      fe.transition = o;
    }
  };
  l.unstable_act = Vr;
  l.useCallback = function (t, o) {
    return A.current.useCallback(t, o);
  };
  l.useContext = function (t) {
    return A.current.useContext(t);
  };
  l.useDebugValue = function () {};
  l.useDeferredValue = function (t) {
    return A.current.useDeferredValue(t);
  };
  l.useEffect = function (t, o) {
    return A.current.useEffect(t, o);
  };
  l.useId = function () {
    return A.current.useId();
  };
  l.useImperativeHandle = function (t, o, f) {
    return A.current.useImperativeHandle(t, o, f);
  };
  l.useInsertionEffect = function (t, o) {
    return A.current.useInsertionEffect(t, o);
  };
  l.useLayoutEffect = function (t, o) {
    return A.current.useLayoutEffect(t, o);
  };
  l.useMemo = function (t, o) {
    return A.current.useMemo(t, o);
  };
  l.useReducer = function (t, o, f) {
    return A.current.useReducer(t, o, f);
  };
  l.useRef = function (t) {
    return A.current.useRef(t);
  };
  l.useState = function (t) {
    return A.current.useState(t);
  };
  l.useSyncExternalStore = function (t, o, f) {
    return A.current.useSyncExternalStore(t, o, f);
  };
  l.useTransition = function () {
    return A.current.useTransition();
  };
  l.version = "18.3.1";
});
var Wr = xe((p, le) => {
  "use strict";
  process.env.NODE_ENV !== "production" &&
    (function () {
      "use strict";
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.3.1",
        o = Symbol.for("react.element"),
        f = Symbol.for("react.portal"),
        y = Symbol.for("react.fragment"),
        d = Symbol.for("react.strict_mode"),
        b = Symbol.for("react.profiler"),
        C = Symbol.for("react.provider"),
        _ = Symbol.for("react.context"),
        m = Symbol.for("react.forward_ref"),
        T = Symbol.for("react.suspense"),
        pe = Symbol.for("react.suspense_list"),
        D = Symbol.for("react.memo"),
        q = Symbol.for("react.lazy"),
        Br = Symbol.for("react.offscreen"),
        Me = Symbol.iterator,
        Hr = "@@iterator";
      function Ne(e) {
        if (e === null || typeof e != "object") return null;
        var r = (Me && e[Me]) || e[Hr];
        return typeof r == "function" ? r : null;
      }
      var Ve = { current: null },
        F = { transition: null },
        k = {
          current: null,
          isBatchingLegacy: !1,
          didScheduleLegacyUpdate: !1,
        },
        x = { current: null },
        Y = {},
        G = null;
      function Ue(e) {
        G = e;
      }
      (Y.setExtraStackFrame = function (e) {
        G = e;
      }),
        (Y.getCurrentStack = null),
        (Y.getStackAddendum = function () {
          var e = "";
          G && (e += G);
          var r = Y.getCurrentStack;
          return r && (e += r() || ""), e;
        });
      var Kr = !1,
        qr = !1,
        Gr = !1,
        Qr = !1,
        Xr = !1,
        L = {
          ReactCurrentDispatcher: Ve,
          ReactCurrentBatchConfig: F,
          ReactCurrentOwner: x,
        };
      (L.ReactDebugCurrentFrame = Y), (L.ReactCurrentActQueue = k);
      function M(e) {
        {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
            a < r;
            a++
          )
            n[a - 1] = arguments[a];
          We("warn", e, n);
        }
      }
      function h(e) {
        {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
            a < r;
            a++
          )
            n[a - 1] = arguments[a];
          We("error", e, n);
        }
      }
      function We(e, r, n) {
        {
          var a = L.ReactDebugCurrentFrame,
            u = a.getStackAddendum();
          u !== "" && ((r += "%s"), (n = n.concat([u])));
          var s = n.map(function (i) {
            return String(i);
          });
          s.unshift("Warning: " + r),
            Function.prototype.apply.call(console[e], console, s);
        }
      }
      var Ye = {};
      function de(e, r) {
        {
          var n = e.constructor,
            a = (n && (n.displayName || n.name)) || "ReactClass",
            u = a + "." + r;
          if (Ye[u]) return;
          h(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            r,
            a,
          ),
            (Ye[u] = !0);
        }
      }
      var ze = {
          isMounted: function (e) {
            return !1;
          },
          enqueueForceUpdate: function (e, r, n) {
            de(e, "forceUpdate");
          },
          enqueueReplaceState: function (e, r, n, a) {
            de(e, "replaceState");
          },
          enqueueSetState: function (e, r, n, a) {
            de(e, "setState");
          },
        },
        j = Object.assign,
        ve = {};
      Object.freeze(ve);
      function $(e, r, n) {
        (this.props = e),
          (this.context = r),
          (this.refs = ve),
          (this.updater = n || ze);
      }
      ($.prototype.isReactComponent = {}),
        ($.prototype.setState = function (e, r) {
          if (typeof e != "object" && typeof e != "function" && e != null)
            throw new Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, r, "setState");
        }),
        ($.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        });
      {
        var ye = {
            isMounted: [
              "isMounted",
              "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
            ],
            replaceState: [
              "replaceState",
              "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
            ],
          },
          Jr = function (e, r) {
            Object.defineProperty($.prototype, e, {
              get: function () {
                M(
                  "%s(...) is deprecated in plain JavaScript React classes. %s",
                  r[0],
                  r[1],
                );
              },
            });
          };
        for (var he in ye) ye.hasOwnProperty(he) && Jr(he, ye[he]);
      }
      function Be() {}
      Be.prototype = $.prototype;
      function me(e, r, n) {
        (this.props = e),
          (this.context = r),
          (this.refs = ve),
          (this.updater = n || ze);
      }
      var ge = (me.prototype = new Be());
      (ge.constructor = me), j(ge, $.prototype), (ge.isPureReactComponent = !0);
      function Zr() {
        var e = { current: null };
        return Object.seal(e), e;
      }
      var et = Array.isArray;
      function Q(e) {
        return et(e);
      }
      function rt(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag,
            n = (r && e[Symbol.toStringTag]) || e.constructor.name || "Object";
          return n;
        }
      }
      function tt(e) {
        try {
          return He(e), !1;
        } catch {
          return !0;
        }
      }
      function He(e) {
        return "" + e;
      }
      function X(e) {
        if (tt(e))
          return (
            h(
              "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
              rt(e),
            ),
            He(e)
          );
      }
      function nt(e, r, n) {
        var a = e.displayName;
        if (a) return a;
        var u = r.displayName || r.name || "";
        return u !== "" ? n + "(" + u + ")" : n;
      }
      function Ke(e) {
        return e.displayName || "Context";
      }
      function I(e) {
        if (e == null) return null;
        if (
          (typeof e.tag == "number" &&
            h(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
            ),
          typeof e == "function")
        )
          return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case y:
            return "Fragment";
          case f:
            return "Portal";
          case b:
            return "Profiler";
          case d:
            return "StrictMode";
          case T:
            return "Suspense";
          case pe:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case _:
              var r = e;
              return Ke(r) + ".Consumer";
            case C:
              var n = e;
              return Ke(n._context) + ".Provider";
            case m:
              return nt(e, e.render, "ForwardRef");
            case D:
              var a = e.displayName || null;
              return a !== null ? a : I(e.type) || "Memo";
            case q: {
              var u = e,
                s = u._payload,
                i = u._init;
              try {
                return I(i(s));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var z = Object.prototype.hasOwnProperty,
        qe = { key: !0, ref: !0, __self: !0, __source: !0 },
        Ge,
        Qe,
        _e;
      _e = {};
      function Xe(e) {
        if (z.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.ref !== void 0;
      }
      function Je(e) {
        if (z.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function at(e, r) {
        var n = function () {
          Ge ||
            ((Ge = !0),
            h(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              r,
            ));
        };
        (n.isReactWarning = !0),
          Object.defineProperty(e, "key", { get: n, configurable: !0 });
      }
      function ot(e, r) {
        var n = function () {
          Qe ||
            ((Qe = !0),
            h(
              "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              r,
            ));
        };
        (n.isReactWarning = !0),
          Object.defineProperty(e, "ref", { get: n, configurable: !0 });
      }
      function ut(e) {
        if (
          typeof e.ref == "string" &&
          x.current &&
          e.__self &&
          x.current.stateNode !== e.__self
        ) {
          var r = I(x.current.type);
          _e[r] ||
            (h(
              'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
              r,
              e.ref,
            ),
            (_e[r] = !0));
        }
      }
      var be = function (e, r, n, a, u, s, i) {
        var c = { $$typeof: o, type: e, key: r, ref: n, props: i, _owner: s };
        return (
          (c._store = {}),
          Object.defineProperty(c._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(c, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: a,
          }),
          Object.defineProperty(c, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: u,
          }),
          Object.freeze && (Object.freeze(c.props), Object.freeze(c)),
          c
        );
      };
      function it(e, r, n) {
        var a,
          u = {},
          s = null,
          i = null,
          c = null,
          v = null;
        if (r != null) {
          Xe(r) && ((i = r.ref), ut(r)),
            Je(r) && (X(r.key), (s = "" + r.key)),
            (c = r.__self === void 0 ? null : r.__self),
            (v = r.__source === void 0 ? null : r.__source);
          for (a in r) z.call(r, a) && !qe.hasOwnProperty(a) && (u[a] = r[a]);
        }
        var g = arguments.length - 2;
        if (g === 1) u.children = n;
        else if (g > 1) {
          for (var E = Array(g), R = 0; R < g; R++) E[R] = arguments[R + 2];
          Object.freeze && Object.freeze(E), (u.children = E);
        }
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (a in w) u[a] === void 0 && (u[a] = w[a]);
        }
        if (s || i) {
          var S =
            typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && at(u, S), i && ot(u, S);
        }
        return be(e, s, i, c, v, x.current, u);
      }
      function st(e, r) {
        var n = be(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function ct(e, r, n) {
        if (e == null)
          throw new Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              ".",
          );
        var a,
          u = j({}, e.props),
          s = e.key,
          i = e.ref,
          c = e._self,
          v = e._source,
          g = e._owner;
        if (r != null) {
          Xe(r) && ((i = r.ref), (g = x.current)),
            Je(r) && (X(r.key), (s = "" + r.key));
          var E;
          e.type && e.type.defaultProps && (E = e.type.defaultProps);
          for (a in r)
            z.call(r, a) &&
              !qe.hasOwnProperty(a) &&
              (r[a] === void 0 && E !== void 0 ? (u[a] = E[a]) : (u[a] = r[a]));
        }
        var R = arguments.length - 2;
        if (R === 1) u.children = n;
        else if (R > 1) {
          for (var w = Array(R), S = 0; S < R; S++) w[S] = arguments[S + 2];
          u.children = w;
        }
        return be(e.type, s, i, c, v, g, u);
      }
      function N(e) {
        return typeof e == "object" && e !== null && e.$$typeof === o;
      }
      var Ze = ".",
        ft = ":";
      function lt(e) {
        var r = /[=:]/g,
          n = { "=": "=0", ":": "=2" },
          a = e.replace(r, function (u) {
            return n[u];
          });
        return "$" + a;
      }
      var er = !1,
        pt = /\/+/g;
      function rr(e) {
        return e.replace(pt, "$&/");
      }
      function Ee(e, r) {
        return typeof e == "object" && e !== null && e.key != null
          ? (X(e.key), lt("" + e.key))
          : r.toString(36);
      }
      function J(e, r, n, a, u) {
        var s = typeof e;
        (s === "undefined" || s === "boolean") && (e = null);
        var i = !1;
        if (e === null) i = !0;
        else
          switch (s) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case o:
                case f:
                  i = !0;
              }
          }
        if (i) {
          var c = e,
            v = u(c),
            g = a === "" ? Ze + Ee(c, 0) : a;
          if (Q(v)) {
            var E = "";
            g != null && (E = rr(g) + "/"),
              J(v, r, E, "", function (an) {
                return an;
              });
          } else
            v != null &&
              (N(v) &&
                (v.key && (!c || c.key !== v.key) && X(v.key),
                (v = st(
                  v,
                  n +
                    (v.key && (!c || c.key !== v.key)
                      ? rr("" + v.key) + "/"
                      : "") +
                    g,
                ))),
              r.push(v));
          return 1;
        }
        var R,
          w,
          S = 0,
          O = a === "" ? Ze : a + ft;
        if (Q(e))
          for (var ue = 0; ue < e.length; ue++)
            (R = e[ue]), (w = O + Ee(R, ue)), (S += J(R, r, n, w, u));
        else {
          var Ae = Ne(e);
          if (typeof Ae == "function") {
            var Or = e;
            Ae === Or.entries &&
              (er ||
                M(
                  "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
                ),
              (er = !0));
            for (var tn = Ae.call(Or), Tr, nn = 0; !(Tr = tn.next()).done; )
              (R = Tr.value), (w = O + Ee(R, nn++)), (S += J(R, r, n, w, u));
          } else if (s === "object") {
            var kr = String(e);
            throw new Error(
              "Objects are not valid as a React child (found: " +
                (kr === "[object Object]"
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : kr) +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
        }
        return S;
      }
      function Z(e, r, n) {
        if (e == null) return e;
        var a = [],
          u = 0;
        return (
          J(e, a, "", "", function (s) {
            return r.call(n, s, u++);
          }),
          a
        );
      }
      function dt(e) {
        var r = 0;
        return (
          Z(e, function () {
            r++;
          }),
          r
        );
      }
      function vt(e, r, n) {
        Z(
          e,
          function () {
            r.apply(this, arguments);
          },
          n,
        );
      }
      function yt(e) {
        return (
          Z(e, function (r) {
            return r;
          }) || []
        );
      }
      function ht(e) {
        if (!N(e))
          throw new Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return e;
      }
      function mt(e) {
        var r = {
          $$typeof: _,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        };
        r.Provider = { $$typeof: C, _context: r };
        var n = !1,
          a = !1,
          u = !1;
        {
          var s = { $$typeof: _, _context: r };
          Object.defineProperties(s, {
            Provider: {
              get: function () {
                return (
                  a ||
                    ((a = !0),
                    h(
                      "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?",
                    )),
                  r.Provider
                );
              },
              set: function (i) {
                r.Provider = i;
              },
            },
            _currentValue: {
              get: function () {
                return r._currentValue;
              },
              set: function (i) {
                r._currentValue = i;
              },
            },
            _currentValue2: {
              get: function () {
                return r._currentValue2;
              },
              set: function (i) {
                r._currentValue2 = i;
              },
            },
            _threadCount: {
              get: function () {
                return r._threadCount;
              },
              set: function (i) {
                r._threadCount = i;
              },
            },
            Consumer: {
              get: function () {
                return (
                  n ||
                    ((n = !0),
                    h(
                      "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?",
                    )),
                  r.Consumer
                );
              },
            },
            displayName: {
              get: function () {
                return r.displayName;
              },
              set: function (i) {
                u ||
                  (M(
                    "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                    i,
                  ),
                  (u = !0));
              },
            },
          }),
            (r.Consumer = s);
        }
        return (r._currentRenderer = null), (r._currentRenderer2 = null), r;
      }
      var B = -1,
        Re = 0,
        tr = 1,
        gt = 2;
      function _t(e) {
        if (e._status === B) {
          var r = e._result,
            n = r();
          if (
            (n.then(
              function (s) {
                if (e._status === Re || e._status === B) {
                  var i = e;
                  (i._status = tr), (i._result = s);
                }
              },
              function (s) {
                if (e._status === Re || e._status === B) {
                  var i = e;
                  (i._status = gt), (i._result = s);
                }
              },
            ),
            e._status === B)
          ) {
            var a = e;
            (a._status = Re), (a._result = n);
          }
        }
        if (e._status === tr) {
          var u = e._result;
          return (
            u === void 0 &&
              h(
                `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                u,
              ),
            "default" in u ||
              h(
                `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                u,
              ),
            u.default
          );
        } else throw e._result;
      }
      function bt(e) {
        var r = { _status: B, _result: e },
          n = { $$typeof: q, _payload: r, _init: _t };
        {
          var a, u;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function () {
                return a;
              },
              set: function (s) {
                h(
                  "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.",
                ),
                  (a = s),
                  Object.defineProperty(n, "defaultProps", { enumerable: !0 });
              },
            },
            propTypes: {
              configurable: !0,
              get: function () {
                return u;
              },
              set: function (s) {
                h(
                  "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.",
                ),
                  (u = s),
                  Object.defineProperty(n, "propTypes", { enumerable: !0 });
              },
            },
          });
        }
        return n;
      }
      function Et(e) {
        e != null && e.$$typeof === D
          ? h(
              "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).",
            )
          : typeof e != "function"
            ? h(
                "forwardRef requires a render function but was given %s.",
                e === null ? "null" : typeof e,
              )
            : e.length !== 0 &&
              e.length !== 2 &&
              h(
                "forwardRef render functions accept exactly two parameters: props and ref. %s",
                e.length === 1
                  ? "Did you forget to use the ref parameter?"
                  : "Any additional parameter will be undefined.",
              ),
          e != null &&
            (e.defaultProps != null || e.propTypes != null) &&
            h(
              "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?",
            );
        var r = { $$typeof: m, render: e };
        {
          var n;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return n;
            },
            set: function (a) {
              (n = a), !e.name && !e.displayName && (e.displayName = a);
            },
          });
        }
        return r;
      }
      var nr;
      nr = Symbol.for("react.module.reference");
      function ar(e) {
        return !!(
          typeof e == "string" ||
          typeof e == "function" ||
          e === y ||
          e === b ||
          Xr ||
          e === d ||
          e === T ||
          e === pe ||
          Qr ||
          e === Br ||
          Kr ||
          qr ||
          Gr ||
          (typeof e == "object" &&
            e !== null &&
            (e.$$typeof === q ||
              e.$$typeof === D ||
              e.$$typeof === C ||
              e.$$typeof === _ ||
              e.$$typeof === m ||
              e.$$typeof === nr ||
              e.getModuleId !== void 0))
        );
      }
      function Rt(e, r) {
        ar(e) ||
          h(
            "memo: The first argument must be a component. Instead received: %s",
            e === null ? "null" : typeof e,
          );
        var n = { $$typeof: D, type: e, compare: r === void 0 ? null : r };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return a;
            },
            set: function (u) {
              (a = u), !e.name && !e.displayName && (e.displayName = u);
            },
          });
        }
        return n;
      }
      function P() {
        var e = Ve.current;
        return (
          e === null &&
            h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
          e
        );
      }
      function Ct(e) {
        var r = P();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e
            ? h(
                "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?",
              )
            : n.Provider === e &&
              h(
                "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?",
              );
        }
        return r.useContext(e);
      }
      function wt(e) {
        var r = P();
        return r.useState(e);
      }
      function St(e, r, n) {
        var a = P();
        return a.useReducer(e, r, n);
      }
      function Ot(e) {
        var r = P();
        return r.useRef(e);
      }
      function Tt(e, r) {
        var n = P();
        return n.useEffect(e, r);
      }
      function kt(e, r) {
        var n = P();
        return n.useInsertionEffect(e, r);
      }
      function Pt(e, r) {
        var n = P();
        return n.useLayoutEffect(e, r);
      }
      function At(e, r) {
        var n = P();
        return n.useCallback(e, r);
      }
      function xt(e, r) {
        var n = P();
        return n.useMemo(e, r);
      }
      function jt(e, r, n) {
        var a = P();
        return a.useImperativeHandle(e, r, n);
      }
      function It(e, r) {
        {
          var n = P();
          return n.useDebugValue(e, r);
        }
      }
      function $t() {
        var e = P();
        return e.useTransition();
      }
      function Dt(e) {
        var r = P();
        return r.useDeferredValue(e);
      }
      function Ft() {
        var e = P();
        return e.useId();
      }
      function Lt(e, r, n) {
        var a = P();
        return a.useSyncExternalStore(e, r, n);
      }
      var H = 0,
        or,
        ur,
        ir,
        sr,
        cr,
        fr,
        lr;
      function pr() {}
      pr.__reactDisabledLog = !0;
      function Mt() {
        {
          if (H === 0) {
            (or = console.log),
              (ur = console.info),
              (ir = console.warn),
              (sr = console.error),
              (cr = console.group),
              (fr = console.groupCollapsed),
              (lr = console.groupEnd);
            var e = {
              configurable: !0,
              enumerable: !0,
              value: pr,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e,
            });
          }
          H++;
        }
      }
      function Nt() {
        {
          if ((H--, H === 0)) {
            var e = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: j({}, e, { value: or }),
              info: j({}, e, { value: ur }),
              warn: j({}, e, { value: ir }),
              error: j({}, e, { value: sr }),
              group: j({}, e, { value: cr }),
              groupCollapsed: j({}, e, { value: fr }),
              groupEnd: j({}, e, { value: lr }),
            });
          }
          H < 0 &&
            h(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
            );
        }
      }
      var Ce = L.ReactCurrentDispatcher,
        we;
      function ee(e, r, n) {
        {
          if (we === void 0)
            try {
              throw Error();
            } catch (u) {
              var a = u.stack.trim().match(/\n( *(at )?)/);
              we = (a && a[1]) || "";
            }
          return (
            `
` +
            we +
            e
          );
        }
      }
      var Se = !1,
        re;
      {
        var Vt = typeof WeakMap == "function" ? WeakMap : Map;
        re = new Vt();
      }
      function dr(e, r) {
        if (!e || Se) return "";
        {
          var n = re.get(e);
          if (n !== void 0) return n;
        }
        var a;
        Se = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var s;
        (s = Ce.current), (Ce.current = null), Mt();
        try {
          if (r) {
            var i = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(i.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(i, []);
              } catch (O) {
                a = O;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (O) {
                a = O;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (O) {
              a = O;
            }
            e();
          }
        } catch (O) {
          if (O && a && typeof O.stack == "string") {
            for (
              var c = O.stack.split(`
`),
                v = a.stack.split(`
`),
                g = c.length - 1,
                E = v.length - 1;
              g >= 1 && E >= 0 && c[g] !== v[E];

            )
              E--;
            for (; g >= 1 && E >= 0; g--, E--)
              if (c[g] !== v[E]) {
                if (g !== 1 || E !== 1)
                  do
                    if ((g--, E--, E < 0 || c[g] !== v[E])) {
                      var R =
                        `
` + c[g].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          R.includes("<anonymous>") &&
                          (R = R.replace("<anonymous>", e.displayName)),
                        typeof e == "function" && re.set(e, R),
                        R
                      );
                    }
                  while (g >= 1 && E >= 0);
                break;
              }
          }
        } finally {
          (Se = !1), (Ce.current = s), Nt(), (Error.prepareStackTrace = u);
        }
        var w = e ? e.displayName || e.name : "",
          S = w ? ee(w) : "";
        return typeof e == "function" && re.set(e, S), S;
      }
      function Ut(e, r, n) {
        return dr(e, !1);
      }
      function Wt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function te(e, r, n) {
        if (e == null) return "";
        if (typeof e == "function") return dr(e, Wt(e));
        if (typeof e == "string") return ee(e);
        switch (e) {
          case T:
            return ee("Suspense");
          case pe:
            return ee("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case m:
              return Ut(e.render);
            case D:
              return te(e.type, r, n);
            case q: {
              var a = e,
                u = a._payload,
                s = a._init;
              try {
                return te(s(u), r, n);
              } catch {}
            }
          }
        return "";
      }
      var vr = {},
        yr = L.ReactDebugCurrentFrame;
      function ne(e) {
        if (e) {
          var r = e._owner,
            n = te(e.type, e._source, r ? r.type : null);
          yr.setExtraStackFrame(n);
        } else yr.setExtraStackFrame(null);
      }
      function Yt(e, r, n, a, u) {
        {
          var s = Function.call.bind(z);
          for (var i in e)
            if (s(e, i)) {
              var c = void 0;
              try {
                if (typeof e[i] != "function") {
                  var v = Error(
                    (a || "React class") +
                      ": " +
                      n +
                      " type `" +
                      i +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof e[i] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                  );
                  throw ((v.name = "Invariant Violation"), v);
                }
                c = e[i](
                  r,
                  i,
                  a,
                  n,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
                );
              } catch (g) {
                c = g;
              }
              c &&
                !(c instanceof Error) &&
                (ne(u),
                h(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  a || "React class",
                  n,
                  i,
                  typeof c,
                ),
                ne(null)),
                c instanceof Error &&
                  !(c.message in vr) &&
                  ((vr[c.message] = !0),
                  ne(u),
                  h("Failed %s type: %s", n, c.message),
                  ne(null));
            }
        }
      }
      function V(e) {
        if (e) {
          var r = e._owner,
            n = te(e.type, e._source, r ? r.type : null);
          Ue(n);
        } else Ue(null);
      }
      var Oe;
      Oe = !1;
      function hr() {
        if (x.current) {
          var e = I(x.current.type);
          if (e)
            return (
              `

Check the render method of \`` +
              e +
              "`."
            );
        }
        return "";
      }
      function zt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""),
            n = e.lineNumber;
          return (
            `

Check your code at ` +
            r +
            ":" +
            n +
            "."
          );
        }
        return "";
      }
      function Bt(e) {
        return e != null ? zt(e.__source) : "";
      }
      var mr = {};
      function Ht(e) {
        var r = hr();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n &&
            (r =
              `

Check the top-level render call using <` +
              n +
              ">.");
        }
        return r;
      }
      function gr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = Ht(r);
          if (!mr[n]) {
            mr[n] = !0;
            var a = "";
            e &&
              e._owner &&
              e._owner !== x.current &&
              (a = " It was passed a child from " + I(e._owner.type) + "."),
              V(e),
              h(
                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                n,
                a,
              ),
              V(null);
          }
        }
      }
      function _r(e, r) {
        if (typeof e == "object") {
          if (Q(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              N(a) && gr(a, r);
            }
          else if (N(e)) e._store && (e._store.validated = !0);
          else if (e) {
            var u = Ne(e);
            if (typeof u == "function" && u !== e.entries)
              for (var s = u.call(e), i; !(i = s.next()).done; )
                N(i.value) && gr(i.value, r);
          }
        }
      }
      function br(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string") return;
          var n;
          if (typeof r == "function") n = r.propTypes;
          else if (
            typeof r == "object" &&
            (r.$$typeof === m || r.$$typeof === D)
          )
            n = r.propTypes;
          else return;
          if (n) {
            var a = I(r);
            Yt(n, e.props, "prop", a, e);
          } else if (r.PropTypes !== void 0 && !Oe) {
            Oe = !0;
            var u = I(r);
            h(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              u || "Unknown",
            );
          }
          typeof r.getDefaultProps == "function" &&
            !r.getDefaultProps.isReactClassApproved &&
            h(
              "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.",
            );
        }
      }
      function Kt(e) {
        {
          for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
            var a = r[n];
            if (a !== "children" && a !== "key") {
              V(e),
                h(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  a,
                ),
                V(null);
              break;
            }
          }
          e.ref !== null &&
            (V(e),
            h("Invalid attribute `ref` supplied to `React.Fragment`."),
            V(null));
        }
      }
      function Er(e, r, n) {
        var a = ar(e);
        if (!a) {
          var u = "";
          (e === void 0 ||
            (typeof e == "object" &&
              e !== null &&
              Object.keys(e).length === 0)) &&
            (u +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var s = Bt(r);
          s ? (u += s) : (u += hr());
          var i;
          e === null
            ? (i = "null")
            : Q(e)
              ? (i = "array")
              : e !== void 0 && e.$$typeof === o
                ? ((i = "<" + (I(e.type) || "Unknown") + " />"),
                  (u =
                    " Did you accidentally export a JSX literal instead of a component?"))
                : (i = typeof e),
            h(
              "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              i,
              u,
            );
        }
        var c = it.apply(this, arguments);
        if (c == null) return c;
        if (a) for (var v = 2; v < arguments.length; v++) _r(arguments[v], e);
        return e === y ? Kt(c) : br(c), c;
      }
      var Rr = !1;
      function qt(e) {
        var r = Er.bind(null, e);
        return (
          (r.type = e),
          Rr ||
            ((Rr = !0),
            M(
              "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.",
            )),
          Object.defineProperty(r, "type", {
            enumerable: !1,
            get: function () {
              return (
                M(
                  "Factory.type is deprecated. Access the class directly before passing it to createFactory.",
                ),
                Object.defineProperty(this, "type", { value: e }),
                e
              );
            },
          }),
          r
        );
      }
      function Gt(e, r, n) {
        for (
          var a = ct.apply(this, arguments), u = 2;
          u < arguments.length;
          u++
        )
          _r(arguments[u], a.type);
        return br(a), a;
      }
      function Qt(e, r) {
        var n = F.transition;
        F.transition = {};
        var a = F.transition;
        F.transition._updatedFibers = new Set();
        try {
          e();
        } finally {
          if (((F.transition = n), n === null && a._updatedFibers)) {
            var u = a._updatedFibers.size;
            u > 10 &&
              M(
                "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
              ),
              a._updatedFibers.clear();
          }
        }
      }
      var Cr = !1,
        ae = null;
      function Xt(e) {
        if (ae === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7),
              n = le && le[r];
            ae = n.call(le, "timers").setImmediate;
          } catch {
            ae = function (u) {
              Cr === !1 &&
                ((Cr = !0),
                typeof MessageChannel > "u" &&
                  h(
                    "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.",
                  ));
              var s = new MessageChannel();
              (s.port1.onmessage = u), s.port2.postMessage(void 0);
            };
          }
        return ae(e);
      }
      var U = 0,
        wr = !1;
      function Sr(e) {
        {
          var r = U;
          U++, k.current === null && (k.current = []);
          var n = k.isBatchingLegacy,
            a;
          try {
            if (
              ((k.isBatchingLegacy = !0),
              (a = e()),
              !n && k.didScheduleLegacyUpdate)
            ) {
              var u = k.current;
              u !== null && ((k.didScheduleLegacyUpdate = !1), Pe(u));
            }
          } catch (w) {
            throw (oe(r), w);
          } finally {
            k.isBatchingLegacy = n;
          }
          if (
            a !== null &&
            typeof a == "object" &&
            typeof a.then == "function"
          ) {
            var s = a,
              i = !1,
              c = {
                then: function (w, S) {
                  (i = !0),
                    s.then(
                      function (O) {
                        oe(r), U === 0 ? Te(O, w, S) : w(O);
                      },
                      function (O) {
                        oe(r), S(O);
                      },
                    );
                },
              };
            return (
              !wr &&
                typeof Promise < "u" &&
                Promise.resolve()
                  .then(function () {})
                  .then(function () {
                    i ||
                      ((wr = !0),
                      h(
                        "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);",
                      ));
                  }),
              c
            );
          } else {
            var v = a;
            if ((oe(r), U === 0)) {
              var g = k.current;
              g !== null && (Pe(g), (k.current = null));
              var E = {
                then: function (w, S) {
                  k.current === null ? ((k.current = []), Te(v, w, S)) : w(v);
                },
              };
              return E;
            } else {
              var R = {
                then: function (w, S) {
                  w(v);
                },
              };
              return R;
            }
          }
        }
      }
      function oe(e) {
        e !== U - 1 &&
          h(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ",
          ),
          (U = e);
      }
      function Te(e, r, n) {
        {
          var a = k.current;
          if (a !== null)
            try {
              Pe(a),
                Xt(function () {
                  a.length === 0 ? ((k.current = null), r(e)) : Te(e, r, n);
                });
            } catch (u) {
              n(u);
            }
          else r(e);
        }
      }
      var ke = !1;
      function Pe(e) {
        if (!ke) {
          ke = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var n = e[r];
              do n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw ((e = e.slice(r + 1)), a);
          } finally {
            ke = !1;
          }
        }
      }
      var Jt = Er,
        Zt = Gt,
        en = qt,
        rn = { map: Z, forEach: vt, count: dt, toArray: yt, only: ht };
      (p.Children = rn),
        (p.Component = $),
        (p.Fragment = y),
        (p.Profiler = b),
        (p.PureComponent = me),
        (p.StrictMode = d),
        (p.Suspense = T),
        (p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
        (p.act = Sr),
        (p.cloneElement = Zt),
        (p.createContext = mt),
        (p.createElement = Jt),
        (p.createFactory = en),
        (p.createRef = Zr),
        (p.forwardRef = Et),
        (p.isValidElement = N),
        (p.lazy = bt),
        (p.memo = Rt),
        (p.startTransition = Qt),
        (p.unstable_act = Sr),
        (p.useCallback = At),
        (p.useContext = Ct),
        (p.useDebugValue = It),
        (p.useDeferredValue = Dt),
        (p.useEffect = Tt),
        (p.useId = Ft),
        (p.useImperativeHandle = jt),
        (p.useInsertionEffect = kt),
        (p.useLayoutEffect = Pt),
        (p.useMemo = xt),
        (p.useReducer = St),
        (p.useRef = Ot),
        (p.useState = wt),
        (p.useSyncExternalStore = Lt),
        (p.useTransition = $t),
        (p.version = t),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
            "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
            new Error(),
          );
    })();
});
var Yr = xe((In, Le) => {
  "use strict";
  process.env.NODE_ENV === "production"
    ? (Le.exports = Ur())
    : (Le.exports = Wr());
});
var An = {};
ln(An, { MyComponent: () => Pn });
module.exports = dn(An);
var zr = pn(Yr(), 1),
  Pn = () => zr.default.createElement("div", null, "MyComponent");
0 && (module.exports = { MyComponent });
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
