/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = window, I = T.ShadowRoot && (T.ShadyCSS === void 0 || T.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, W = Symbol(), q = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== W)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (I && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = q.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && q.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ue = (o) => new ie(typeof o == "string" ? o : o + "", void 0, W), oe = (o, ...e) => {
  const t = o.length === 1 ? o[0] : e.reduce((s, i, r) => s + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[r + 1], o[0]);
  return new ie(t, o, W);
}, ve = (o, e) => {
  I ? o.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((t) => {
    const s = document.createElement("style"), i = T.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = t.cssText, o.appendChild(s);
  });
}, F = I ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules)
    t += s.cssText;
  return ue(t);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var j;
const H = window, Z = H.trustedTypes, fe = Z ? Z.emptyScript : "", J = H.reactiveElementPolyfillSupport, V = { toAttribute(o, e) {
  switch (e) {
    case Boolean:
      o = o ? fe : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, e) {
  let t = o;
  switch (e) {
    case Boolean:
      t = o !== null;
      break;
    case Number:
      t = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(o);
      } catch {
        t = null;
      }
  }
  return t;
} }, ne = (o, e) => e !== o && (e == e || o == o), L = { attribute: !0, type: String, converter: V, reflect: !1, hasChanged: ne };
let m = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(e) {
    var t;
    this.finalize(), ((t = this.h) !== null && t !== void 0 ? t : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, s) => {
      const i = this._$Ep(s, t);
      i !== void 0 && (this._$Ev.set(i, s), e.push(i));
    }), e;
  }
  static createProperty(e, t = L) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const s = typeof e == "symbol" ? Symbol() : "__" + e, i = this.getPropertyDescriptor(e, s, t);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    return { get() {
      return this[t];
    }, set(i) {
      const r = this[e];
      this[t] = i, this.requestUpdate(e, r, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || L;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties, s = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const i of s)
        this.createProperty(i, t[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const i of s)
        t.unshift(F(i));
    } else
      e !== void 0 && t.push(F(e));
    return t;
  }
  static _$Ep(e, t) {
    const s = t.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  u() {
    var e;
    this._$E_ = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((t) => t(this));
  }
  addController(e) {
    var t, s;
    ((t = this._$ES) !== null && t !== void 0 ? t : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((s = e.hostConnected) === null || s === void 0 || s.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return ve(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var s;
      return (s = t.hostConnected) === null || s === void 0 ? void 0 : s.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var s;
      return (s = t.hostDisconnected) === null || s === void 0 ? void 0 : s.call(t);
    });
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$EO(e, t, s = L) {
    var i;
    const r = this.constructor._$Ep(e, s);
    if (r !== void 0 && s.reflect === !0) {
      const n = (((i = s.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? s.converter : V).toAttribute(t, s.type);
      this._$El = e, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$El = null;
    }
  }
  _$AK(e, t) {
    var s;
    const i = this.constructor, r = i._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const n = i.getPropertyOptions(r), d = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((s = n.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? n.converter : V;
      this._$El = r, this[r] = d.fromAttribute(t, n.type), this._$El = null;
    }
  }
  requestUpdate(e, t, s) {
    let i = !0;
    e !== void 0 && (((s = s || this.constructor.getPropertyOptions(e)).hasChanged || ne)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), s.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, r) => this[r] = i), this._$Ei = void 0);
    let t = !1;
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
        var r;
        return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i);
      }), this.update(s)) : this._$Ek();
    } catch (i) {
      throw t = !1, this._$Ek(), i;
    }
    t && this._$AE(s);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((s) => {
      var i;
      return (i = s.hostUpdated) === null || i === void 0 ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((t, s) => this._$EO(s, this[s], t)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
m.finalized = !0, m.elementProperties = /* @__PURE__ */ new Map(), m.elementStyles = [], m.shadowRootOptions = { mode: "open" }, J == null || J({ ReactiveElement: m }), ((j = H.reactiveElementVersions) !== null && j !== void 0 ? j : H.reactiveElementVersions = []).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
const O = window, A = O.trustedTypes, K = A ? A.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, $ = `lit$${(Math.random() + "").slice(9)}$`, re = "?" + $, $e = `<${re}>`, S = document, C = (o = "") => S.createComment(o), P = (o) => o === null || typeof o != "object" && typeof o != "function", le = Array.isArray, ge = (o) => le(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, G = />/g, g = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Q = /'/g, X = /"/g, ae = /^(?:script|style|textarea|title)$/i, he = (o) => (e, ...t) => ({ _$litType$: o, strings: e, values: t }), _ = he(1), Pe = he(2), E = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), b = S.createTreeWalker(S, 129, null, !1), me = (o, e) => {
  const t = o.length - 1, s = [];
  let i, r = e === 2 ? "<svg>" : "", n = x;
  for (let l = 0; l < t; l++) {
    const a = o[l];
    let f, h, c = -1, u = 0;
    for (; u < a.length && (n.lastIndex = u, h = n.exec(a), h !== null); )
      u = n.lastIndex, n === x ? h[1] === "!--" ? n = Y : h[1] !== void 0 ? n = G : h[2] !== void 0 ? (ae.test(h[2]) && (i = RegExp("</" + h[2], "g")), n = g) : h[3] !== void 0 && (n = g) : n === g ? h[0] === ">" ? (n = i ?? x, c = -1) : h[1] === void 0 ? c = -2 : (c = n.lastIndex - h[2].length, f = h[1], n = h[3] === void 0 ? g : h[3] === '"' ? X : Q) : n === X || n === Q ? n = g : n === Y || n === G ? n = x : (n = g, i = void 0);
    const M = n === g && o[l + 1].startsWith("/>") ? " " : "";
    r += n === x ? a + $e : c >= 0 ? (s.push(f), a.slice(0, c) + "$lit$" + a.slice(c) + $ + M) : a + $ + (c === -2 ? (s.push(void 0), l) : M);
  }
  const d = r + (o[t] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(o) || !o.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [K !== void 0 ? K.createHTML(d) : d, s];
};
class U {
  constructor({ strings: e, _$litType$: t }, s) {
    let i;
    this.parts = [];
    let r = 0, n = 0;
    const d = e.length - 1, l = this.parts, [a, f] = me(e, t);
    if (this.el = U.createElement(a, s), b.currentNode = this.el.content, t === 2) {
      const h = this.el.content, c = h.firstChild;
      c.remove(), h.append(...c.childNodes);
    }
    for (; (i = b.nextNode()) !== null && l.length < d; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const h = [];
          for (const c of i.getAttributeNames())
            if (c.endsWith("$lit$") || c.startsWith($)) {
              const u = f[n++];
              if (h.push(c), u !== void 0) {
                const M = i.getAttribute(u.toLowerCase() + "$lit$").split($), R = /([.?@])?(.*)/.exec(u);
                l.push({ type: 1, index: r, name: R[2], strings: M, ctor: R[1] === "." ? be : R[1] === "?" ? Ae : R[1] === "@" ? Se : N });
              } else
                l.push({ type: 6, index: r });
            }
          for (const c of h)
            i.removeAttribute(c);
        }
        if (ae.test(i.tagName)) {
          const h = i.textContent.split($), c = h.length - 1;
          if (c > 0) {
            i.textContent = A ? A.emptyScript : "";
            for (let u = 0; u < c; u++)
              i.append(h[u], C()), b.nextNode(), l.push({ type: 2, index: ++r });
            i.append(h[c], C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === re)
          l.push({ type: 2, index: r });
        else {
          let h = -1;
          for (; (h = i.data.indexOf($, h + 1)) !== -1; )
            l.push({ type: 7, index: r }), h += $.length - 1;
        }
      r++;
    }
  }
  static createElement(e, t) {
    const s = S.createElement("template");
    return s.innerHTML = e, s;
  }
}
function w(o, e, t = o, s) {
  var i, r, n, d;
  if (e === E)
    return e;
  let l = s !== void 0 ? (i = t._$Co) === null || i === void 0 ? void 0 : i[s] : t._$Cl;
  const a = P(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== a && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), a === void 0 ? l = void 0 : (l = new a(o), l._$AT(o, t, s)), s !== void 0 ? ((n = (d = t)._$Co) !== null && n !== void 0 ? n : d._$Co = [])[s] = l : t._$Cl = l), l !== void 0 && (e = w(o, l._$AS(o, e.values), l, s)), e;
}
class _e {
  constructor(e, t) {
    this.u = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(e) {
    var t;
    const { el: { content: s }, parts: i } = this._$AD, r = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : S).importNode(s, !0);
    b.currentNode = r;
    let n = b.nextNode(), d = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (d === a.index) {
        let f;
        a.type === 2 ? f = new k(n, n.nextSibling, this, e) : a.type === 1 ? f = new a.ctor(n, a.name, a.strings, this, e) : a.type === 6 && (f = new Ee(n, this, e)), this.u.push(f), a = i[++l];
      }
      d !== (a == null ? void 0 : a.index) && (n = b.nextNode(), d++);
    }
    return r;
  }
  p(e) {
    let t = 0;
    for (const s of this.u)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}
class k {
  constructor(e, t, s, i) {
    var r;
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = i, this._$Cm = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0 ? t : this._$Cm;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = w(this, e, t), P(e) ? e === p || e == null || e === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : e !== this._$AH && e !== E && this.g(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ge(e) ? this.k(e) : this.g(e);
  }
  O(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  g(e) {
    this._$AH !== p && P(this._$AH) ? this._$AA.nextSibling.data = e : this.T(S.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var t;
    const { values: s, _$litType$: i } = e, r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = U.createElement(i.h, this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r)
      this._$AH.p(s);
    else {
      const n = new _e(r, this), d = n.v(this.options);
      n.p(s), this.T(d), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = ee.get(e.strings);
    return t === void 0 && ee.set(e.strings, t = new U(e)), t;
  }
  k(e) {
    le(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, i = 0;
    for (const r of e)
      i === t.length ? t.push(s = new k(this.O(C()), this.O(C()), this, this.options)) : s = t[i], s._$AI(r), i++;
    i < t.length && (this._$AR(s && s._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cm = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
}
class N {
  constructor(e, t, s, i, r) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, s, i) {
    const r = this.strings;
    let n = !1;
    if (r === void 0)
      e = w(this, e, t, 0), n = !P(e) || e !== this._$AH && e !== E, n && (this._$AH = e);
    else {
      const d = e;
      let l, a;
      for (e = r[0], l = 0; l < r.length - 1; l++)
        a = w(this, d[s + l], t, l), a === E && (a = this._$AH[l]), n || (n = !P(a) || a !== this._$AH[l]), a === p ? e = p : e !== p && (e += (a ?? "") + r[l + 1]), this._$AH[l] = a;
    }
    n && !i && this.j(e);
  }
  j(e) {
    e === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class be extends N {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === p ? void 0 : e;
  }
}
const ye = A ? A.emptyScript : "";
class Ae extends N {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== p ? this.element.setAttribute(this.name, ye) : this.element.removeAttribute(this.name);
  }
}
class Se extends N {
  constructor(e, t, s, i, r) {
    super(e, t, s, i, r), this.type = 5;
  }
  _$AI(e, t = this) {
    var s;
    if ((e = (s = w(this, e, t, 0)) !== null && s !== void 0 ? s : p) === E)
      return;
    const i = this._$AH, r = e === p && i !== p || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, n = e !== p && (i === p || r);
    r && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && s !== void 0 ? s : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Ee {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    w(this, e);
  }
}
const te = O.litHtmlPolyfillSupport;
te == null || te(U, k), ((z = O.litHtmlVersions) !== null && z !== void 0 ? z : O.litHtmlVersions = []).push("2.6.1");
const we = (o, e, t) => {
  var s, i;
  const r = (s = t == null ? void 0 : t.renderBefore) !== null && s !== void 0 ? s : e;
  let n = r._$litPart$;
  if (n === void 0) {
    const d = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
    r._$litPart$ = n = new k(e.insertBefore(C(), d), d, void 0, t ?? {});
  }
  return n._$AI(o), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var D, B;
class y extends m {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, t;
    const s = super.createRenderRoot();
    return (e = (t = this.renderOptions).renderBefore) !== null && e !== void 0 || (t.renderBefore = s.firstChild), s;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = we(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return E;
  }
}
y.finalized = !0, y._$litElement$ = !0, (D = globalThis.litElementHydrateSupport) === null || D === void 0 || D.call(globalThis, { LitElement: y });
const se = globalThis.litElementPolyfillSupport;
se == null || se({ LitElement: y });
((B = globalThis.litElementVersions) !== null && B !== void 0 ? B : globalThis.litElementVersions = []).push("3.2.2");
const de = async (o) => {
  import("./install-dialog-8712f1fb.js");
  let e;
  try {
    e = await navigator.serial.requestPort();
  } catch (s) {
    if (s.name === "NotFoundError") {
      import("./index-937b6fc1.js").then((i) => i.openNoPortPickedDialog(() => de(o)));
      return;
    }
    alert(`Error: ${s.message}`);
    return;
  }
  if (!e)
    return;
  try {
    await e.open({ baudRate: 115200 });
  } catch (s) {
    alert(s.message);
    return;
  }
  const t = document.createElement("ewt-install-dialog");
  t.port = e, t.manifestPath = o.manifest || o.getAttribute("manifest"), t.overrides = o.overrides, t.addEventListener("closed", () => {
    e.close();
  }, { once: !0 }), document.body.appendChild(t);
};
class v extends HTMLElement {
  connectedCallback() {
    if (this.renderRoot)
      return;
    if (this.renderRoot = this.attachShadow({ mode: "open" }), !v.isSupported || !v.isAllowed) {
      this.toggleAttribute("install-unsupported", !0), this.renderRoot.innerHTML = v.isAllowed ? "<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>" : "<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>";
      return;
    }
    this.toggleAttribute("install-supported", !0);
    const e = document.createElement("slot");
    e.addEventListener("click", async (s) => {
      s.preventDefault(), de(this);
    }), e.name = "activate";
    const t = document.createElement("button");
    if (t.innerText = "CONNECT", e.append(t), "adoptedStyleSheets" in Document.prototype && "replaceSync" in CSSStyleSheet.prototype) {
      const s = new CSSStyleSheet();
      s.replaceSync(v.style), this.renderRoot.adoptedStyleSheets = [s];
    } else {
      const s = document.createElement("style");
      s.innerText = v.style, this.renderRoot.append(s);
    }
    this.renderRoot.append(e);
  }
}
v.isSupported = "serial" in navigator;
v.isAllowed = window.isSecureContext;
v.style = `
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    padding: 8px 28px;
    color: var(--esp-tools-button-text-color, #fff);
    background-color: var(--esp-tools-button-color, #03a9f4);
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: 4px;
  }
  button:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.14), 0 1px 7px 0 rgba(0,0,0,.12), 0 3px 1px -1px rgba(0,0,0,.2);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
  :host([active]) button {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: unset;
    pointer-events: none;
  }
  improv-wifi-launch-button {
    display: block;
    margin-top: 16px;
  }
  .hidden {
    display: none;
  }`;
customElements.define("esp-web-install-button", v);
class ce extends y {
  constructor() {
    super(), this.response = /* @__PURE__ */ new Map(), this.href = "", this.version = "", this.flavor = "";
  }
  static get properties() {
    return {
      href: { type: String },
      manifest: { type: String },
      response: { type: Map },
      version: { type: String },
      flavor: { type: String }
    };
  }
  get manifest() {
    const e = new URLSearchParams({
      flavor: this.flavor
    });
    return this.href + this.version + ".json?" + e.toString();
  }
  firstUpdated() {
    fetch("https://api.github.com/repos/ESPresense/ESPresense/releases", { credentials: "same-origin" }).then((e) => e.json()).then((e) => {
      this.response = e.filter((t) => t.assets.length > 5).reduce((t, s) => (t[s.prerelease ? "Beta" : "Release"] ? t[s.prerelease ? "Beta" : "Release"].push(s) : t[s.prerelease ? "Beta" : "Release"] = [s], t), /* @__PURE__ */ new Map()), console.log(this.response), this.version = this.response.Release[0].tag_name;
    });
  }
  flavorChanged(e) {
    this.flavor = e.target.value, console.log(this.flavor);
  }
  versionChanged(e) {
    this.version = e.target.value, console.log(this.version);
  }
  render() {
    const { response: e } = this;
    return _`
    <div><label for="flavor">Flavor:</label><select id="flavor" @change=${this.flavorChanged}><option value="">Standard</option><option value="cdc">Cdc</option><option value="verbose">Verbose</option><option value="m5atom">M5Atom</option><option value="m5stickc">M5StickC</option><option value="m5stickc-plus">M5StickC-plus</option><option value="macchina-a0">Macchina A0</option></select></div>
      <div><label for="version">Version:</label><select id="version" @change=${this.versionChanged}>>${Object.keys(e).reverse().map((t) => _` <optgroup label="${t}">${e[t].map((s) => _` <option value=${s.tag_name} ?selected=${s.tag_name == this.version}>${s.name}</option> `)}</optgroup>`)}</select></div>
      <div class="but"><esp-web-install-button manifest=${this.manifest}></esp-web-install-button></div>
      <div class="powered"><label>Powered by</label><a href="https://esphome.github.io/esp-web-tools/" target="_blank">ESP Web Tools</a></div>
    `;
  }
}
ce.styles = oe`
    :host {
      font-family: sans-serif;
    }

    :host label {
      margin-right: 5px;
    }

    :host .powered {
      display: flex;
      justify-content: center;
      padding-top: 12px;
      font-size: 12px;
    }

    :host {
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      border: none;
      border-radius: 2pt;
      box-shadow: 0 0 0 1pt rgb(238, 235, 238);
      outline: none;
      transition: .1s;
      background-color: rgb(245, 246, 250);
    }

    :host div {
      padding: 5px 10px;
      display: flex;
    }

    :host div.but {
      margin: 0 auto;
      display: flex;
    }
  `;
class pe extends y {
  constructor() {
    super(), this.response = /* @__PURE__ */ new Map(), this.href = "", this.run_id = -1, this.flavor = "";
  }
  static get properties() {
    return {
      href: { type: String },
      manifest: { type: String },
      response: { type: Map },
      run_id: { type: Number },
      flavor: { type: String }
    };
  }
  get manifest() {
    const e = new URLSearchParams({
      flavor: this.flavor
    });
    return this.href + this.run_id + ".json?" + e.toString();
  }
  firstUpdated() {
    fetch("https://api.github.com/repos/ESPresense/ESPresense/actions/workflows/build.yml/runs?status=success&per_page=100", { credentials: "same-origin" }).then((e) => e.json()).then((e) => {
      var t = e.workflow_runs.filter((s) => s.pull_requests.length > 0 || s.head_branch == "master" && s.head_repository.full_name == "ESPresense/ESPresense");
      this.response = t.reduce((s, i) => (s[i.head_branch] ? s[i.head_branch].push(i) : s[i.head_branch] = [i], s), /* @__PURE__ */ new Map()), console.log(this.response), this.run_id = t[0].id;
    });
  }
  flavorChanged(e) {
    this.flavor = e.target.value, console.log(this.flavor);
  }
  versionChanged(e) {
    this.run_id = e.target.value, console.log(this.run_id);
  }
  render() {
    const { response: e } = this;
    return _`
      <div><label for="flavor">Flavor:</label><select id="flavor" @change=${this.flavorChanged}><option value="">Standard</option><option value="verbose">Verbose</option><option value="m5atom">M5Atom</option><option value="m5stickc">M5StickC</option><option value="m5stickc-plus">M5StickC-plus</option><option value="macchina-a0">Macchina A0</option></select></div>
      <div><label for="version">Artifact:</label><select id="version" @change=${this.versionChanged}>>${Object.keys(e).reverse().map((t) => _` <optgroup label="${t}">${e[t].map((s) => _` <option value=${s.id}>${s.head_sha.substring(0, 7)}: ${s.head_commit.message.split(`
`)[0]}</option> `)}</optgroup>`)}</select></div>
      <div class="but"><esp-web-install-button manifest=${this.manifest}></esp-web-install-button></div>
      <div class="powered"><label>Powered by</label><a href="https://esphome.github.io/esp-web-tools/" target="_blank">ESP Web Tools</a></div>
    `;
  }
}
pe.styles = oe`
    :host {
      font-family: sans-serif;
    }

    :host label {
      margin-right: 5px;
    }

    :host .powered {
      display: flex;
      justify-content: center;
      padding-top: 12px;
      font-size: 12px;
    }

    :host {
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      border: none;
      border-radius: 2pt;
      box-shadow: 0 0 0 1pt rgb(238, 235, 238);
      outline: none;
      transition: .1s;
      background-color: rgb(245, 246, 250);
    }

    :host div {
      padding: 5px 10px;
      display: flex;
    }

    :host div.but {
      margin: 0 auto;
      display: flex;
    }
  `;
window.customElements.define("espresense-releases", ce);
window.customElements.define("espresense-artifacts", pe);
export {
  p as b,
  oe as i,
  y as s,
  Pe as w,
  E as x,
  _ as y
};
