"use strict";
var d = Object.create;
var e = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var C = Object.getPrototypeOf,
  M = Object.prototype.hasOwnProperty;
var c = (o, n) => {
    for (var t in n) e(o, t, { get: n[t], enumerable: !0 });
  },
  p = (o, n, t, m) => {
    if ((n && typeof n == "object") || typeof n == "function")
      for (let r of y(n))
        !M.call(o, r) &&
          r !== t &&
          e(o, r, {
            get: () => n[r],
            enumerable: !(m = v(n, r)) || m.enumerable,
          });
    return o;
  };
var f = (o, n, t) => (
    (t = o != null ? d(C(o)) : {}),
    p(
      n || !o || !o.__esModule
        ? e(t, "default", { value: o, enumerable: !0 })
        : t,
      o,
    )
  ),
  s = (o) => p(e({}, "__esModule", { value: !0 }), o);
var x = {};
c(x, { MyComponent: () => u });
module.exports = s(x);
var i = f(require("react"), 1),
  u = () => i.default.createElement("div", null, "MyComponent");
0 && (module.exports = { MyComponent });
