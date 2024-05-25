import { i as O, s as B, T as qt, x as C, A as v } from "./index-psEkNoq_.js";
function c(s, t, e, i) {
  var o = arguments.length, r = o < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, e) : i, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    r = Reflect.decorate(s, t, e, i);
  else
    for (var l = s.length - 1; l >= 0; l--)
      (n = s[l]) && (r = (o < 3 ? n(r) : o > 3 ? n(t, e, r) : n(t, e)) || r);
  return o > 3 && r && Object.defineProperty(t, e, r), r;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis, ct = j.ShadowRoot && (j.ShadyCSS === void 0 || j.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, dt = Symbol(), mt = /* @__PURE__ */ new WeakMap();
let Pt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== dt)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ct && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = mt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && mt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Yt = (s) => new Pt(typeof s == "string" ? s : s + "", void 0, dt), Kt = (s, ...t) => {
  const e = s.length === 1 ? s[0] : t.reduce((i, o, r) => i + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + s[r + 1], s[0]);
  return new Pt(e, s, dt);
}, Zt = (s, t) => {
  if (ct)
    s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const i = document.createElement("style"), o = j.litNonce;
      o !== void 0 && i.setAttribute("nonce", o), i.textContent = e.cssText, s.appendChild(i);
    }
}, gt = ct ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return Yt(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Jt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: te, getOwnPropertySymbols: ee, getPrototypeOf: ie } = Object, $ = globalThis, vt = $.trustedTypes, se = vt ? vt.emptyScript : "", X = $.reactiveElementPolyfillSupport, L = (s, t) => s, ot = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? se : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, Tt = (s, t) => !Xt(s, t), bt = { attribute: !0, type: String, converter: ot, reflect: !1, hasChanged: Tt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), $.litPropertyMetadata ?? ($.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let I = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = bt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(t, i, e);
      o !== void 0 && Jt(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: o, set: r } = Qt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(n) {
      const l = o == null ? void 0 : o.call(this);
      r.call(this, n), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? bt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(L("elementProperties")))
      return;
    const t = ie(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(L("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(L("properties"))) {
      const e = this.properties, i = [...te(e), ...ee(e)];
      for (const o of i)
        this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [i, o] of e)
          this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const o = this._$Eu(e, i);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const o of i)
        e.unshift(gt(o));
    } else
      t !== void 0 && e.push(gt(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys())
      this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Zt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EC(t, e) {
    var r;
    const i = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const n = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : ot).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r;
    const i = this.constructor, o = i._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const n = i.getPropertyOptions(o), l = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((r = n.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? n.converter : ot;
      this._$Em = o, this[o] = l.fromAttribute(e, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, i) {
    if (t !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(t)), !(i.hasChanged ?? Tt)(this[t], e))
        return;
      this.P(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, i) {
    this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep)
          this[r] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0)
        for (const [r, n] of o)
          n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(e)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
I.elementStyles = [], I.shadowRootOptions = { mode: "open" }, I[L("elementProperties")] = /* @__PURE__ */ new Map(), I[L("finalized")] = /* @__PURE__ */ new Map(), X == null || X({ ReactiveElement: I }), ($.reactiveElementVersions ?? ($.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M = globalThis, q = M.trustedTypes, yt = q ? q.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, It = "$lit$", x = `lit$${(Math.random() + "").slice(9)}$`, kt = "?" + x, oe = `<${kt}>`, S = document, z = () => S.createComment(""), D = (s) => s === null || typeof s != "object" && typeof s != "function", Rt = Array.isArray, re = (s) => Rt(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", J = `[ 	
\f\r]`, N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _t = /-->/g, At = />/g, E = RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), xt = /'/g, $t = /"/g, Ot = /^(?:script|style|textarea|title)$/i, Nt = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), Ze = Nt(1), Xe = Nt(2), k = Symbol.for("lit-noChange"), f = Symbol.for("lit-nothing"), Et = /* @__PURE__ */ new WeakMap(), w = S.createTreeWalker(S, 129);
function Lt(s, t) {
  if (!Array.isArray(s) || !s.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return yt !== void 0 ? yt.createHTML(t) : t;
}
const ne = (s, t) => {
  const e = s.length - 1, i = [];
  let o, r = t === 2 ? "<svg>" : "", n = N;
  for (let l = 0; l < e; l++) {
    const a = s[l];
    let h, u, d = -1, y = 0;
    for (; y < a.length && (n.lastIndex = y, u = n.exec(a), u !== null); )
      y = n.lastIndex, n === N ? u[1] === "!--" ? n = _t : u[1] !== void 0 ? n = At : u[2] !== void 0 ? (Ot.test(u[2]) && (o = RegExp("</" + u[2], "g")), n = E) : u[3] !== void 0 && (n = E) : n === E ? u[0] === ">" ? (n = o ?? N, d = -1) : u[1] === void 0 ? d = -2 : (d = n.lastIndex - u[2].length, h = u[1], n = u[3] === void 0 ? E : u[3] === '"' ? $t : xt) : n === $t || n === xt ? n = E : n === _t || n === At ? n = N : (n = E, o = void 0);
    const A = n === E && s[l + 1].startsWith("/>") ? " " : "";
    r += n === N ? a + oe : d >= 0 ? (i.push(h), a.slice(0, d) + It + a.slice(d) + x + A) : a + x + (d === -2 ? l : A);
  }
  return [Lt(s, r + (s[e] || "<?>") + (t === 2 ? "</svg>" : "")), i];
};
class H {
  constructor({ strings: t, _$litType$: e }, i) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const l = t.length - 1, a = this.parts, [h, u] = ne(t, e);
    if (this.el = H.createElement(h, i), w.currentNode = this.el.content, e === 2) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (o = w.nextNode()) !== null && a.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes())
          for (const d of o.getAttributeNames())
            if (d.endsWith(It)) {
              const y = u[n++], A = o.getAttribute(d).split(x), T = /([.?@])?(.*)/.exec(y);
              a.push({ type: 1, index: r, name: T[2], strings: A, ctor: T[1] === "." ? le : T[1] === "?" ? ce : T[1] === "@" ? de : Y }), o.removeAttribute(d);
            } else
              d.startsWith(x) && (a.push({ type: 6, index: r }), o.removeAttribute(d));
        if (Ot.test(o.tagName)) {
          const d = o.textContent.split(x), y = d.length - 1;
          if (y > 0) {
            o.textContent = q ? q.emptyScript : "";
            for (let A = 0; A < y; A++)
              o.append(d[A], z()), w.nextNode(), a.push({ type: 2, index: ++r });
            o.append(d[y], z());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === kt)
          a.push({ type: 2, index: r });
        else {
          let d = -1;
          for (; (d = o.data.indexOf(x, d + 1)) !== -1; )
            a.push({ type: 7, index: r }), d += x.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = S.createElement("template");
    return i.innerHTML = t, i;
  }
}
function R(s, t, e = s, i) {
  var n, l;
  if (t === k)
    return t;
  let o = i !== void 0 ? (n = e._$Co) == null ? void 0 : n[i] : e._$Cl;
  const r = D(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1), r === void 0 ? o = void 0 : (o = new r(s), o._$AT(s, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = o : e._$Cl = o), o !== void 0 && (t = R(s, o._$AS(s, t.values), o, i)), t;
}
class ae {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? S).importNode(e, !0);
    w.currentNode = o;
    let r = w.nextNode(), n = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let h;
        a.type === 2 ? h = new F(r, r.nextSibling, this, t) : a.type === 1 ? h = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (h = new he(r, this, t)), this._$AV.push(h), a = i[++l];
      }
      n !== (a == null ? void 0 : a.index) && (r = w.nextNode(), n++);
    }
    return w.currentNode = S, o;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class F {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, o) {
    this.type = 2, this._$AH = f, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = R(this, t, e), D(t) ? t === f || t == null || t === "" ? (this._$AH !== f && this._$AR(), this._$AH = f) : t !== this._$AH && t !== k && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : re(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== f && D(this._$AH) ? this._$AA.nextSibling.data = t : this.T(S.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: e, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = H.createElement(Lt(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o)
      this._$AH.p(e);
    else {
      const n = new ae(o, this), l = n.u(this.options);
      n.p(e), this.T(l), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Et.get(t.strings);
    return e === void 0 && Et.set(t.strings, e = new H(t)), e;
  }
  k(t) {
    Rt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, o = 0;
    for (const r of t)
      o === e.length ? e.push(i = new F(this.S(z()), this.S(z()), this, this.options)) : i = e[o], i._$AI(r), o++;
    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Y {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, o, r) {
    this.type = 1, this._$AH = f, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = f;
  }
  _$AI(t, e = this, i, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0)
      t = R(this, t, e, 0), n = !D(t) || t !== this._$AH && t !== k, n && (this._$AH = t);
    else {
      const l = t;
      let a, h;
      for (t = r[0], a = 0; a < r.length - 1; a++)
        h = R(this, l[i + a], e, a), h === k && (h = this._$AH[a]), n || (n = !D(h) || h !== this._$AH[a]), h === f ? t = f : t !== f && (t += (h ?? "") + r[a + 1]), this._$AH[a] = h;
    }
    n && !o && this.j(t);
  }
  j(t) {
    t === f ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class le extends Y {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === f ? void 0 : t;
  }
}
class ce extends Y {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== f);
  }
}
class de extends Y {
  constructor(t, e, i, o, r) {
    super(t, e, i, o, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = R(this, t, e, 0) ?? f) === k)
      return;
    const i = this._$AH, o = t === f && i !== f || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, r = t !== f && (i === f || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class he {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    R(this, t);
  }
}
const Q = M.litHtmlPolyfillSupport;
Q == null || Q(H, F), (M.litHtmlVersions ?? (M.litHtmlVersions = [])).push("3.1.2");
const pe = (s, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = o = new F(t.insertBefore(z(), r), r, void 0, e ?? {});
  }
  return o._$AI(s), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class W extends I {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = pe(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return k;
  }
}
var St;
W._$litElement$ = !0, W.finalized = !0, (St = globalThis.litElementHydrateSupport) == null || St.call(globalThis, { LitElement: W });
const tt = globalThis.litElementPolyfillSupport;
tt == null || tt({ LitElement: W });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const ue = O`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = (s) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(s, t) : ((e, i) => {
  const { kind: o, elements: r } = i;
  return { kind: o, elements: r, finisher(n) {
    customElements.define(e, n);
  } };
})(s, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe = (s, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, s);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, s);
} }, me = (s, t, e) => {
  t.constructor.createProperty(e, s);
};
function m(s) {
  return (t, e) => e !== void 0 ? me(s, t, e) : fe(s, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function P(s) {
  return m({ ...s, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt = ({ finisher: s, descriptor: t }) => (e, i) => {
  var o;
  if (i === void 0) {
    const r = (o = e.originalKey) !== null && o !== void 0 ? o : e.key, n = t != null ? { kind: "method", placement: "prototype", key: r, descriptor: t(e.key) } : { ...e, key: r };
    return s != null && (n.finisher = function(l) {
      s(l, r);
    }), n;
  }
  {
    const r = e.constructor;
    t !== void 0 && Object.defineProperty(e, i, t(i)), s == null || s(r, i);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function _(s, t) {
  return Mt({ descriptor: (e) => {
    const i = { get() {
      var o, r;
      return (r = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(s)) !== null && r !== void 0 ? r : null;
    }, enumerable: !0, configurable: !0 };
    if (t) {
      const o = typeof e == "symbol" ? Symbol() : "__" + e;
      i.get = function() {
        var r, n;
        return this[o] === void 0 && (this[o] = (n = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(s)) !== null && n !== void 0 ? n : null), this[o];
      };
    }
    return i;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et;
const ge = ((et = window.HTMLSlotElement) === null || et === void 0 ? void 0 : et.prototype.assignedElements) != null ? (s, t) => s.assignedElements(t) : (s, t) => s.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
function ve(s) {
  const { slot: t, selector: e } = s ?? {};
  return Mt({ descriptor: (i) => ({ get() {
    var o;
    const r = "slot" + (t ? `[name=${t}]` : ":not([name])"), n = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(r), l = n != null ? ge(n, s) : [];
    return e ? l.filter((a) => a.matches(e)) : l;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const zt = Symbol("attachableController");
let G;
G = new MutationObserver((s) => {
  var t;
  for (const e of s)
    (t = e.target[zt]) == null || t.hostConnected();
});
class Dt {
  get htmlFor() {
    return this.host.getAttribute("for");
  }
  set htmlFor(t) {
    t === null ? this.host.removeAttribute("for") : this.host.setAttribute("for", t);
  }
  get control() {
    return this.host.hasAttribute("for") ? !this.htmlFor || !this.host.isConnected ? null : this.host.getRootNode().querySelector(`#${this.htmlFor}`) : this.currentControl || this.host.parentElement;
  }
  set control(t) {
    t ? this.attach(t) : this.detach();
  }
  /**
   * Creates a new controller for an `Attachable` element.
   *
   * @param host The `Attachable` element.
   * @param onControlChange A callback with two parameters for the previous and
   *     next control. An `Attachable` element may perform setup or teardown
   *     logic whenever the control changes.
   */
  constructor(t, e) {
    this.host = t, this.onControlChange = e, this.currentControl = null, t.addController(this), t[zt] = this, G == null || G.observe(t, { attributeFilter: ["for"] });
  }
  attach(t) {
    t !== this.currentControl && (this.setCurrentControl(t), this.host.removeAttribute("for"));
  }
  detach() {
    this.setCurrentControl(null), this.host.setAttribute("for", "");
  }
  /** @private */
  hostConnected() {
    this.setCurrentControl(this.control);
  }
  /** @private */
  hostDisconnected() {
    this.setCurrentControl(null);
  }
  setCurrentControl(t) {
    this.onControlChange(this.currentControl, t), this.currentControl = t;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const be = ["focusin", "focusout", "pointerdown"];
class pt extends B {
  constructor() {
    super(...arguments), this.visible = !1, this.inward = !1, this.attachableController = new Dt(this, this.onControlChange.bind(this));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(t) {
    this.attachableController.htmlFor = t;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(t) {
    this.attachableController.control = t;
  }
  attach(t) {
    this.attachableController.attach(t);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("aria-hidden", "true");
  }
  /** @private */
  handleEvent(t) {
    var e;
    if (!t[Ct]) {
      switch (t.type) {
        default:
          return;
        case "focusin":
          this.visible = ((e = this.control) == null ? void 0 : e.matches(":focus-visible")) ?? !1;
          break;
        case "focusout":
        case "pointerdown":
          this.visible = !1;
          break;
      }
      t[Ct] = !0;
    }
  }
  onControlChange(t, e) {
    for (const i of be)
      t == null || t.removeEventListener(i, this), e == null || e.addEventListener(i, this);
  }
  update(t) {
    t.has("visible") && this.dispatchEvent(new Event("visibility-changed")), super.update(t);
  }
}
c([
  m({ type: Boolean, reflect: !0 })
], pt.prototype, "visible", void 0);
c([
  m({ type: Boolean, reflect: !0 })
], pt.prototype, "inward", void 0);
const Ct = Symbol("handledByFocusRing");
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const ye = O`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let rt = class extends pt {
};
rt.styles = [ye];
rt = c([
  ht("md-focus-ring")
], rt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Ae = (s) => (...t) => ({ _$litDirective$: s, values: t });
class xe {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht = Ae(class extends xe {
  constructor(s) {
    var t;
    if (super(s), s.type !== _e.ATTRIBUTE || s.name !== "class" || ((t = s.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(s) {
    return " " + Object.keys(s).filter((t) => s[t]).join(" ") + " ";
  }
  update(s, [t]) {
    var e, i;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), s.strings !== void 0 && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in t)
        t[r] && !(!((e = this.nt) === null || e === void 0) && e.has(r)) && this.it.add(r);
      return this.render(t);
    }
    const o = s.element.classList;
    this.it.forEach((r) => {
      r in t || (o.remove(r), this.it.delete(r));
    });
    for (const r in t) {
      const n = !!t[r];
      n === this.it.has(r) || !((i = this.nt) === null || i === void 0) && i.has(r) || (n ? (o.add(r), this.it.add(r)) : (o.remove(r), this.it.delete(r)));
    }
    return qt;
  }
});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const U = {
  STANDARD: "cubic-bezier(0.2, 0, 0, 1)",
  STANDARD_ACCELERATE: "cubic-bezier(.3,0,1,1)",
  STANDARD_DECELERATE: "cubic-bezier(0,0,0,1)",
  EMPHASIZED: "cubic-bezier(.3,0,0,1)",
  EMPHASIZED_ACCELERATE: "cubic-bezier(.3,0,.8,.15)",
  EMPHASIZED_DECELERATE: "cubic-bezier(.05,.7,.1,1)"
};
function Qe() {
  let s = null;
  return {
    start() {
      return s == null || s.abort(), s = new AbortController(), s.signal;
    },
    finish() {
      s = null;
    }
  };
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $e = 450, wt = 225, Ee = 0.2, Ce = 10, we = 75, Se = 0.35, Pe = "::after", Te = "forwards";
var g;
(function(s) {
  s[s.INACTIVE = 0] = "INACTIVE", s[s.TOUCH_DELAY = 1] = "TOUCH_DELAY", s[s.HOLDING = 2] = "HOLDING", s[s.WAITING_FOR_CLICK = 3] = "WAITING_FOR_CLICK";
})(g || (g = {}));
const Ie = [
  "click",
  "contextmenu",
  "pointercancel",
  "pointerdown",
  "pointerenter",
  "pointerleave",
  "pointerup"
], ke = 150, it = window.matchMedia("(forced-colors: active)");
class V extends B {
  constructor() {
    super(...arguments), this.disabled = !1, this.hovered = !1, this.pressed = !1, this.rippleSize = "", this.rippleScale = "", this.initialSize = 0, this.state = g.INACTIVE, this.checkBoundsAfterContextMenu = !1, this.attachableController = new Dt(this, this.onControlChange.bind(this));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(t) {
    this.attachableController.htmlFor = t;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(t) {
    this.attachableController.control = t;
  }
  attach(t) {
    this.attachableController.attach(t);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("aria-hidden", "true");
  }
  render() {
    const t = {
      hovered: this.hovered,
      pressed: this.pressed
    };
    return C`<div class="surface ${Ht(t)}"></div>`;
  }
  update(t) {
    t.has("disabled") && this.disabled && (this.hovered = !1, this.pressed = !1), super.update(t);
  }
  /**
   * TODO(b/269799771): make private
   * @private only public for slider
   */
  handlePointerenter(t) {
    this.shouldReactToEvent(t) && (this.hovered = !0);
  }
  /**
   * TODO(b/269799771): make private
   * @private only public for slider
   */
  handlePointerleave(t) {
    this.shouldReactToEvent(t) && (this.hovered = !1, this.state !== g.INACTIVE && this.endPressAnimation());
  }
  handlePointerup(t) {
    if (this.shouldReactToEvent(t)) {
      if (this.state === g.HOLDING) {
        this.state = g.WAITING_FOR_CLICK;
        return;
      }
      if (this.state === g.TOUCH_DELAY) {
        this.state = g.WAITING_FOR_CLICK, this.startPressAnimation(this.rippleStartEvent);
        return;
      }
    }
  }
  async handlePointerdown(t) {
    if (this.shouldReactToEvent(t)) {
      if (this.rippleStartEvent = t, !this.isTouch(t)) {
        this.state = g.WAITING_FOR_CLICK, this.startPressAnimation(t);
        return;
      }
      this.checkBoundsAfterContextMenu && !this.inBounds(t) || (this.checkBoundsAfterContextMenu = !1, this.state = g.TOUCH_DELAY, await new Promise((e) => {
        setTimeout(e, ke);
      }), this.state === g.TOUCH_DELAY && (this.state = g.HOLDING, this.startPressAnimation(t)));
    }
  }
  handleClick() {
    if (!this.disabled) {
      if (this.state === g.WAITING_FOR_CLICK) {
        this.endPressAnimation();
        return;
      }
      this.state === g.INACTIVE && (this.startPressAnimation(), this.endPressAnimation());
    }
  }
  handlePointercancel(t) {
    this.shouldReactToEvent(t) && this.endPressAnimation();
  }
  handleContextmenu() {
    this.disabled || (this.checkBoundsAfterContextMenu = !0, this.endPressAnimation());
  }
  determineRippleSize() {
    const { height: t, width: e } = this.getBoundingClientRect(), i = Math.max(t, e), o = Math.max(Se * i, we), r = Math.floor(i * Ee), l = Math.sqrt(e ** 2 + t ** 2) + Ce;
    this.initialSize = r, this.rippleScale = `${(l + o) / r}`, this.rippleSize = `${r}px`;
  }
  getNormalizedPointerEventCoords(t) {
    const { scrollX: e, scrollY: i } = window, { left: o, top: r } = this.getBoundingClientRect(), n = e + o, l = i + r, { pageX: a, pageY: h } = t;
    return { x: a - n, y: h - l };
  }
  getTranslationCoordinates(t) {
    const { height: e, width: i } = this.getBoundingClientRect(), o = {
      x: (i - this.initialSize) / 2,
      y: (e - this.initialSize) / 2
    };
    let r;
    return t instanceof PointerEvent ? r = this.getNormalizedPointerEventCoords(t) : r = {
      x: i / 2,
      y: e / 2
    }, r = {
      x: r.x - this.initialSize / 2,
      y: r.y - this.initialSize / 2
    }, { startPoint: r, endPoint: o };
  }
  startPressAnimation(t) {
    var n;
    if (!this.mdRoot)
      return;
    this.pressed = !0, (n = this.growAnimation) == null || n.cancel(), this.determineRippleSize();
    const { startPoint: e, endPoint: i } = this.getTranslationCoordinates(t), o = `${e.x}px, ${e.y}px`, r = `${i.x}px, ${i.y}px`;
    this.growAnimation = this.mdRoot.animate({
      top: [0, 0],
      left: [0, 0],
      height: [this.rippleSize, this.rippleSize],
      width: [this.rippleSize, this.rippleSize],
      transform: [
        `translate(${o}) scale(1)`,
        `translate(${r}) scale(${this.rippleScale})`
      ]
    }, {
      pseudoElement: Pe,
      duration: $e,
      easing: U.STANDARD,
      fill: Te
    });
  }
  async endPressAnimation() {
    this.rippleStartEvent = void 0, this.state = g.INACTIVE;
    const t = this.growAnimation;
    let e = 1 / 0;
    if (typeof (t == null ? void 0 : t.currentTime) == "number" ? e = t.currentTime : t != null && t.currentTime && (e = t.currentTime.to("ms").value), e >= wt) {
      this.pressed = !1;
      return;
    }
    await new Promise((i) => {
      setTimeout(i, wt - e);
    }), this.growAnimation === t && (this.pressed = !1);
  }
  /**
   * Returns `true` if
   *  - the ripple element is enabled
   *  - the pointer is primary for the input type
   *  - the pointer is the pointer that started the interaction, or will start
   * the interaction
   *  - the pointer is a touch, or the pointer state has the primary button
   * held, or the pointer is hovering
   */
  shouldReactToEvent(t) {
    if (this.disabled || !t.isPrimary || this.rippleStartEvent && this.rippleStartEvent.pointerId !== t.pointerId)
      return !1;
    if (t.type === "pointerenter" || t.type === "pointerleave")
      return !this.isTouch(t);
    const e = t.buttons === 1;
    return this.isTouch(t) || e;
  }
  /**
   * Check if the event is within the bounds of the element.
   *
   * This is only needed for the "stuck" contextmenu longpress on Chrome.
   */
  inBounds({ x: t, y: e }) {
    const { top: i, left: o, bottom: r, right: n } = this.getBoundingClientRect();
    return t >= o && t <= n && e >= i && e <= r;
  }
  isTouch({ pointerType: t }) {
    return t === "touch";
  }
  /** @private */
  async handleEvent(t) {
    if (!(it != null && it.matches))
      switch (t.type) {
        case "click":
          this.handleClick();
          break;
        case "contextmenu":
          this.handleContextmenu();
          break;
        case "pointercancel":
          this.handlePointercancel(t);
          break;
        case "pointerdown":
          await this.handlePointerdown(t);
          break;
        case "pointerenter":
          this.handlePointerenter(t);
          break;
        case "pointerleave":
          this.handlePointerleave(t);
          break;
        case "pointerup":
          this.handlePointerup(t);
          break;
      }
  }
  onControlChange(t, e) {
    for (const i of Ie)
      t == null || t.removeEventListener(i, this), e == null || e.addEventListener(i, this);
  }
}
c([
  m({ type: Boolean, reflect: !0 })
], V.prototype, "disabled", void 0);
c([
  P()
], V.prototype, "hovered", void 0);
c([
  P()
], V.prototype, "pressed", void 0);
c([
  _(".surface")
], V.prototype, "mdRoot", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Re = O`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let nt = class extends V {
};
nt.styles = [Re];
nt = c([
  ht("md-ripple")
], nt);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ut = [
  "ariaAtomic",
  "ariaAutoComplete",
  "ariaBusy",
  "ariaChecked",
  "ariaColCount",
  "ariaColIndex",
  "ariaColSpan",
  "ariaCurrent",
  "ariaDisabled",
  "ariaExpanded",
  "ariaHasPopup",
  "ariaHidden",
  "ariaInvalid",
  "ariaKeyShortcuts",
  "ariaLabel",
  "ariaLevel",
  "ariaLive",
  "ariaModal",
  "ariaMultiLine",
  "ariaMultiSelectable",
  "ariaOrientation",
  "ariaPlaceholder",
  "ariaPosInSet",
  "ariaPressed",
  "ariaReadOnly",
  "ariaRequired",
  "ariaRoleDescription",
  "ariaRowCount",
  "ariaRowIndex",
  "ariaRowSpan",
  "ariaSelected",
  "ariaSetSize",
  "ariaSort",
  "ariaValueMax",
  "ariaValueMin",
  "ariaValueNow",
  "ariaValueText"
];
Ut.map(Bt);
function Bt(s) {
  return s.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ft(s) {
  for (const t of Ut)
    s.createProperty(t, {
      attribute: Bt(t),
      reflect: !0
    });
  s.addInitializer((t) => {
    const e = {
      hostConnected() {
        t.setAttribute("role", "presentation");
      }
    };
    t.addController(e);
  });
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ut = Symbol("internals"), st = Symbol("privateInternals");
function Oe(s) {
  class t extends s {
    get [ut]() {
      return this[st] || (this[st] = this.attachInternals()), this[st];
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ne(s) {
  s.addInitializer((t) => {
    const e = t;
    e.addEventListener("click", async (i) => {
      const { type: o, [ut]: r } = e, { form: n } = r;
      if (!(!n || o === "button") && (await new Promise((l) => {
        setTimeout(l);
      }), !i.defaultPrevented)) {
        if (o === "reset") {
          n.reset();
          return;
        }
        n.addEventListener("submit", (l) => {
          Object.defineProperty(l, "submitter", {
            configurable: !0,
            enumerable: !0,
            get: () => e
          });
        }, { capture: !0, once: !0 }), r.setFormValue(e.value), n.requestSubmit();
      }
    });
  });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Le(s) {
  const t = new MouseEvent("click", { bubbles: !0 });
  return s.dispatchEvent(t), t;
}
function Me(s) {
  return s.currentTarget !== s.target || s.composedPath()[0] !== s.target || s.target.disabled ? !1 : !ze(s);
}
function ze(s) {
  const t = at;
  return t && (s.preventDefault(), s.stopImmediatePropagation()), De(), t;
}
let at = !1;
async function De() {
  at = !0, await null, at = !1;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const He = Oe(B);
class b extends He {
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(t) {
    this.setAttribute("name", t);
  }
  /**
   * The associated form element with which this element's value will submit.
   */
  get form() {
    return this[ut].form;
  }
  constructor() {
    super(), this.disabled = !1, this.href = "", this.target = "", this.trailingIcon = !1, this.hasIcon = !1, this.type = "submit", this.value = "", this.handleActivationClick = (t) => {
      !Me(t) || !this.buttonElement || (this.focus(), Le(this.buttonElement));
    }, this.addEventListener("click", this.handleActivationClick);
  }
  focus() {
    var t;
    (t = this.buttonElement) == null || t.focus();
  }
  blur() {
    var t;
    (t = this.buttonElement) == null || t.blur();
  }
  render() {
    var o;
    const t = this.disabled && !this.href, e = this.href ? this.renderLink() : this.renderButton(), i = this.href ? "link" : "button";
    return C`
      ${(o = this.renderElevationOrOutline) == null ? void 0 : o.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple for=${i} ?disabled="${t}"></md-ripple>
      ${e}
    `;
  }
  renderButton() {
    const { ariaLabel: t, ariaHasPopup: e, ariaExpanded: i } = this;
    return C`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${t || v}"
      aria-haspopup="${e || v}"
      aria-expanded="${i || v}">
      ${this.renderContent()}
    </button>`;
  }
  renderLink() {
    const { ariaLabel: t, ariaHasPopup: e, ariaExpanded: i } = this;
    return C`<a
      id="link"
      class="button"
      aria-label="${t || v}"
      aria-haspopup="${e || v}"
      aria-expanded="${i || v}"
      href=${this.href}
      target=${this.target || v}
      >${this.renderContent()}
    </a>`;
  }
  renderContent() {
    const t = C`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;
    return C`
      <span class="touch"></span>
      ${this.trailingIcon ? v : t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? t : v}
    `;
  }
  handleSlotChange() {
    this.hasIcon = this.assignedIcons.length > 0;
  }
}
Ft(b), Ne(b);
b.formAssociated = !0;
b.shadowRootOptions = {
  mode: "open",
  delegatesFocus: !0
};
c([
  m({ type: Boolean, reflect: !0 })
], b.prototype, "disabled", void 0);
c([
  m()
], b.prototype, "href", void 0);
c([
  m()
], b.prototype, "target", void 0);
c([
  m({ type: Boolean, attribute: "trailing-icon", reflect: !0 })
], b.prototype, "trailingIcon", void 0);
c([
  m({ type: Boolean, attribute: "has-icon", reflect: !0 })
], b.prototype, "hasIcon", void 0);
c([
  m()
], b.prototype, "type", void 0);
c([
  m({ reflect: !0 })
], b.prototype, "value", void 0);
c([
  _(".button")
], b.prototype, "buttonElement", void 0);
c([
  ve({ slot: "icon", flatten: !0 })
], b.prototype, "assignedIcons", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ue extends b {
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Be = O`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;
class Vt extends Ue {
}
Vt.styles = [ue, Be];
customElements.define("ew-text-button", Vt);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class K extends B {
  constructor() {
    super(...arguments), this.inset = !1, this.insetStart = !1, this.insetEnd = !1;
  }
}
c([
  m({ type: Boolean, reflect: !0 })
], K.prototype, "inset", void 0);
c([
  m({ type: Boolean, reflect: !0, attribute: "inset-start" })
], K.prototype, "insetStart", void 0);
c([
  m({ type: Boolean, reflect: !0, attribute: "inset-end" })
], K.prototype, "insetEnd", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Fe = O`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ve(s, t) {
  t.bubbles && (!s.shadowRoot || t.composed) && t.stopPropagation();
  const e = Reflect.construct(t.constructor, [t.type, t]), i = s.dispatchEvent(e);
  return i || t.preventDefault(), i;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let lt = class extends K {
};
lt.styles = [Fe];
lt = c([
  ht("md-divider")
], lt);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const je = {
  dialog: [
    [
      // Dialog slide down
      [{ transform: "translateY(-50px)" }, { transform: "translateY(0)" }],
      { duration: 500, easing: U.EMPHASIZED }
    ]
  ],
  scrim: [
    [
      // Scrim fade in
      [{ opacity: 0 }, { opacity: 0.32 }],
      { duration: 500, easing: "linear" }
    ]
  ],
  container: [
    [
      // Container fade in
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 50, easing: "linear", pseudoElement: "::before" }
    ],
    [
      // Container grow
      // Note: current spec says to grow from 0dp->100% and shrink from
      // 100%->35%. We change this to 35%->100% to simplify the animation that
      // is supposed to clip content as it grows. From 0dp it's possible to see
      // text/actions appear before the container has fully grown.
      [{ height: "35%" }, { height: "100%" }],
      { duration: 500, easing: U.EMPHASIZED, pseudoElement: "::before" }
    ]
  ],
  headline: [
    [
      // Headline fade in
      [{ opacity: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 1 }],
      { duration: 250, easing: "linear", fill: "forwards" }
    ]
  ],
  content: [
    [
      // Content fade in
      [{ opacity: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 1 }],
      { duration: 250, easing: "linear", fill: "forwards" }
    ]
  ],
  actions: [
    [
      // Actions fade in
      [{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }],
      { duration: 300, easing: "linear", fill: "forwards" }
    ]
  ]
}, We = {
  dialog: [
    [
      // Dialog slide up
      [{ transform: "translateY(0)" }, { transform: "translateY(-50px)" }],
      { duration: 150, easing: U.EMPHASIZED_ACCELERATE }
    ]
  ],
  scrim: [
    [
      // Scrim fade out
      [{ opacity: 0.32 }, { opacity: 0 }],
      { duration: 150, easing: "linear" }
    ]
  ],
  container: [
    [
      // Container shrink
      [{ height: "100%" }, { height: "35%" }],
      {
        duration: 150,
        easing: U.EMPHASIZED_ACCELERATE,
        pseudoElement: "::before"
      }
    ],
    [
      // Container fade out
      [{ opacity: "1" }, { opacity: "0" }],
      { delay: 100, duration: 50, easing: "linear", pseudoElement: "::before" }
    ]
  ],
  headline: [
    [
      // Headline fade out
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 100, easing: "linear", fill: "forwards" }
    ]
  ],
  content: [
    [
      // Content fade out
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 100, easing: "linear", fill: "forwards" }
    ]
  ],
  actions: [
    [
      // Actions fade out
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 100, easing: "linear", fill: "forwards" }
    ]
  ]
};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class p extends B {
  /**
   * Opens the dialog when set to `true` and closes it when set to `false`.
   */
  get open() {
    return this.isOpen;
  }
  set open(t) {
    t !== this.isOpen && (this.isOpen = t, t ? (this.setAttribute("open", ""), this.show()) : (this.removeAttribute("open"), this.close()));
  }
  constructor() {
    super(), this.returnValue = "", this.getOpenAnimation = () => je, this.getCloseAnimation = () => We, this.isOpen = !1, this.isOpening = !1, this.isConnectedPromise = this.getIsConnectedPromise(), this.isAtScrollTop = !1, this.isAtScrollBottom = !1, this.nextClickIsFromContent = !1, this.hasHeadline = !1, this.hasActions = !1, this.hasIcon = !1, this.escapePressedWithoutCancel = !1, this.addEventListener("submit", this.handleSubmit), this.addEventListener("focus", () => {
      var t;
      (t = this.dialog) == null || t.focus();
    }), this.addEventListener("blur", () => {
      var t;
      (t = this.dialog) == null || t.blur();
    });
  }
  /**
   * Opens the dialog and fires a cancelable `open` event. After a dialog's
   * animation, an `opened` event is fired.
   *
   * Add an `autocomplete` attribute to a child of the dialog that should
   * receive focus after opening.
   *
   * @return A Promise that resolves after the animation is finished and the
   *     `opened` event was fired.
   */
  async show() {
    var i;
    this.isOpening = !0, await this.isConnectedPromise, await this.updateComplete;
    const t = this.dialog;
    if (t.open || !this.isOpening) {
      this.isOpening = !1;
      return;
    }
    if (!this.dispatchEvent(new Event("open", { cancelable: !0 }))) {
      this.open = !1;
      return;
    }
    t.showModal(), this.open = !0, this.scroller && (this.scroller.scrollTop = 0), (i = this.querySelector("[autofocus]")) == null || i.focus(), await this.animateDialog(this.getOpenAnimation()), this.dispatchEvent(new Event("opened")), this.isOpening = !1;
  }
  /**
   * Closes the dialog and fires a cancelable `close` event. After a dialog's
   * animation, a `closed` event is fired.
   *
   * @param returnValue A return value usually indicating which button was used
   *     to close a dialog. If a dialog is canceled by clicking the scrim or
   *     pressing Escape, it will not change the return value after closing.
   * @return A Promise that resolves after the animation is finished and the
   *     `closed` event was fired.
   */
  async close(t = this.returnValue) {
    if (this.isOpening = !1, !this.isConnected) {
      this.open = !1;
      return;
    }
    await this.updateComplete;
    const e = this.dialog;
    if (!e.open || this.isOpening) {
      this.open = !1;
      return;
    }
    const i = this.returnValue;
    if (this.returnValue = t, !this.dispatchEvent(new Event("close", { cancelable: !0 }))) {
      this.returnValue = i;
      return;
    }
    await this.animateDialog(this.getCloseAnimation()), e.close(t), this.open = !1, this.dispatchEvent(new Event("closed"));
  }
  connectedCallback() {
    super.connectedCallback(), this.isConnectedPromiseResolve();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.isConnectedPromise = this.getIsConnectedPromise();
  }
  render() {
    const t = this.open && !(this.isAtScrollTop && this.isAtScrollBottom), e = {
      "has-headline": this.hasHeadline,
      "has-actions": this.hasActions,
      "has-icon": this.hasIcon,
      scrollable: t,
      "show-top-divider": t && !this.isAtScrollTop,
      "show-bottom-divider": t && !this.isAtScrollBottom
    }, { ariaLabel: i } = this;
    return C`
      <div class="scrim"></div>
      <dialog
        class=${Ht(e)}
        aria-label=${i || v}
        aria-labelledby=${this.hasHeadline ? "headline" : v}
        role=${this.type === "alert" ? "alertdialog" : v}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue || v}>
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline || v}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `;
  }
  firstUpdated() {
    this.intersectionObserver = new IntersectionObserver((t) => {
      for (const e of t)
        this.handleAnchorIntersection(e);
    }, { root: this.scroller }), this.intersectionObserver.observe(this.topAnchor), this.intersectionObserver.observe(this.bottomAnchor);
  }
  handleDialogClick() {
    if (this.nextClickIsFromContent) {
      this.nextClickIsFromContent = !1;
      return;
    }
    this.dispatchEvent(new Event("cancel", { cancelable: !0 })) && this.close();
  }
  handleContentClick() {
    this.nextClickIsFromContent = !0;
  }
  handleSubmit(t) {
    const e = t.target, { submitter: i } = t;
    e.method !== "dialog" || !i || this.close(i.getAttribute("value") ?? this.returnValue);
  }
  handleCancel(t) {
    if (t.target !== this.dialog)
      return;
    this.escapePressedWithoutCancel = !1;
    const e = !Ve(this, t);
    t.preventDefault(), !e && this.close();
  }
  handleClose() {
    var t;
    this.escapePressedWithoutCancel && (this.escapePressedWithoutCancel = !1, (t = this.dialog) == null || t.dispatchEvent(new Event("cancel", { cancelable: !0 })));
  }
  handleKeydown(t) {
    t.key === "Escape" && (this.escapePressedWithoutCancel = !0, setTimeout(() => {
      this.escapePressedWithoutCancel = !1;
    }));
  }
  async animateDialog(t) {
    const { dialog: e, scrim: i, container: o, headline: r, content: n, actions: l } = this;
    if (!e || !i || !o || !r || !n || !l)
      return;
    const { container: a, dialog: h, scrim: u, headline: d, content: y, actions: A } = t, T = [
      [e, h ?? []],
      [i, u ?? []],
      [o, a ?? []],
      [r, d ?? []],
      [n, y ?? []],
      [l, A ?? []]
    ], ft = [];
    for (const [Z, Wt] of T)
      for (const Gt of Wt)
        ft.push(Z.animate(...Gt));
    await Promise.all(ft.map((Z) => Z.finished));
  }
  handleHeadlineChange(t) {
    const e = t.target;
    this.hasHeadline = e.assignedElements().length > 0;
  }
  handleActionsChange(t) {
    const e = t.target;
    this.hasActions = e.assignedElements().length > 0;
  }
  handleIconChange(t) {
    const e = t.target;
    this.hasIcon = e.assignedElements().length > 0;
  }
  handleAnchorIntersection(t) {
    const { target: e, isIntersecting: i } = t;
    e === this.topAnchor && (this.isAtScrollTop = i), e === this.bottomAnchor && (this.isAtScrollBottom = i);
  }
  getIsConnectedPromise() {
    return new Promise((t) => {
      this.isConnectedPromiseResolve = t;
    });
  }
}
Ft(p);
c([
  m({ type: Boolean })
], p.prototype, "open", null);
c([
  m({ attribute: !1 })
], p.prototype, "returnValue", void 0);
c([
  m()
], p.prototype, "type", void 0);
c([
  _("dialog")
], p.prototype, "dialog", void 0);
c([
  _(".scrim")
], p.prototype, "scrim", void 0);
c([
  _(".container")
], p.prototype, "container", void 0);
c([
  _(".headline")
], p.prototype, "headline", void 0);
c([
  _(".content")
], p.prototype, "content", void 0);
c([
  _(".actions")
], p.prototype, "actions", void 0);
c([
  P()
], p.prototype, "isAtScrollTop", void 0);
c([
  P()
], p.prototype, "isAtScrollBottom", void 0);
c([
  _(".scroller")
], p.prototype, "scroller", void 0);
c([
  _(".top.anchor")
], p.prototype, "topAnchor", void 0);
c([
  _(".bottom.anchor")
], p.prototype, "bottomAnchor", void 0);
c([
  P()
], p.prototype, "hasHeadline", void 0);
c([
  P()
], p.prototype, "hasActions", void 0);
c([
  P()
], p.prototype, "hasIcon", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Ge = O`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, 28px));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, 28px));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, 28px));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, 28px));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;
class jt extends p {
}
jt.styles = [Ge];
customElements.define("ew-dialog", jt);
const ii = Kt`
  :host {
    --roboto-font: Roboto, system-ui;
    --text-color: rgba(0, 0, 0, 0.6);
    --danger-color: #db4437;

    --md-sys-color-primary: #03a9f4;
    --md-sys-color-on-primary: #fff;
    --md-ref-typeface-brand: var(--roboto-font);
    --md-ref-typeface-plain: var(--roboto-font);

    --md-sys-color-surface: #fff;
    --md-sys-color-surface-container: #fff;
    --md-sys-color-surface-container-high: #fff;
    --md-sys-color-surface-container-highest: #f5f5f5;
    --md-sys-color-secondary-container: #e0e0e0;

    --md-sys-typescale-headline-font: var(--roboto-font);
    --md-sys-typescale-title-font: var(--roboto-font);
  }

  a {
    color: var(--md-sys-color-primary);
  }
`;
export {
  K as D,
  U as E,
  c as _,
  Ht as a,
  ut as b,
  Me as c,
  Le as d,
  ht as e,
  Tt as f,
  Ve as g,
  Ne as h,
  _ as i,
  Ae as j,
  xe as k,
  ve as l,
  Oe as m,
  m as n,
  Mt as o,
  _e as p,
  Qe as q,
  Ft as r,
  Fe as s,
  P as t,
  ot as u,
  Kt as v,
  W as w,
  Ze as x,
  Xe as y,
  ii as z
};
