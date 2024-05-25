import { u as Qn, f as ea, o as Lo, l as Me, _ as g, n as E, e as pi, r as ot, i as pe, a as ke, s as ta, D as ia, b as _e, t as re, c as ra, d as oa, g as ar, m as mi, h as na, E as At, j as Oo, k as Do, p as je, q as aa, v as sr, w as lr, x as z, y as nt, z as sa } from "./styles-XARd1rOR.js";
import { s as oe, x as U, i as ne, A as O, D as Fo, T as It } from "./index-psEkNoq_.js";
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const la = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const da = { attribute: !0, type: String, converter: Qn, reflect: !1, hasChanged: ea }, ca = (i = da, t, e) => {
  const { kind: r, metadata: o } = e;
  let n = globalThis.litPropertyMetadata.get(o);
  if (n === void 0 && globalThis.litPropertyMetadata.set(o, n = /* @__PURE__ */ new Map()), n.set(e.name, i), r === "accessor") {
    const { name: d } = e;
    return { set(l) {
      const p = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(d, p, i);
    }, init(l) {
      return l !== void 0 && this.P(d, void 0, i), l;
    } };
  }
  if (r === "setter") {
    const { name: d } = e;
    return function(l) {
      const p = this[d];
      t.call(this, l), this.requestUpdate(d, p, i);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Vt(i) {
  return (t, e) => typeof e == "object" ? ca(i, t, e) : ((r, o, n) => {
    const d = o.hasOwnProperty(n);
    return o.constructor.createProperty(n, d ? { ...r, wrapped: !0 } : r), d ? Object.getOwnPropertyDescriptor(o, n) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Le(i) {
  return Vt({ ...i, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ha(i) {
  return Lo({ descriptor: (t) => ({ get() {
    var e, r;
    return (r = (e = this.renderRoot) === null || e === void 0 ? void 0 : e.querySelectorAll(i)) !== null && r !== void 0 ? r : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function fa(i, t, e) {
  let r, o = i;
  return typeof i == "object" ? (o = i.slot, r = i) : r = { flatten: t }, e ? Me({ slot: o, flatten: t, selector: e }) : Lo({ descriptor: (n) => ({ get() {
    var d, l;
    const p = "slot" + (o ? `[name=${o}]` : ":not([name])"), h = (d = this.renderRoot) === null || d === void 0 ? void 0 : d.querySelector(p);
    return (l = h == null ? void 0 : h.assignedNodes(r)) !== null && l !== void 0 ? l : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Uo(i, t = ze) {
  const e = dr(i, t);
  return e && (e.tabIndex = 0, e.focus()), e;
}
function Po(i, t = ze) {
  const e = Mo(i, t);
  return e && (e.tabIndex = 0, e.focus()), e;
}
function Ct(i, t = ze) {
  for (let e = 0; e < i.length; e++) {
    const r = i[e];
    if (r.tabIndex === 0 && t(r))
      return {
        item: r,
        index: e
      };
  }
  return null;
}
function dr(i, t = ze) {
  for (const e of i)
    if (t(e))
      return e;
  return null;
}
function Mo(i, t = ze) {
  for (let e = i.length - 1; e >= 0; e--) {
    const r = i[e];
    if (t(r))
      return r;
  }
  return null;
}
function ua(i, t, e = ze) {
  for (let r = 1; r < i.length; r++) {
    const o = (r + t) % i.length, n = i[o];
    if (e(n))
      return n;
  }
  return i[t] ? i[t] : null;
}
function pa(i, t, e = ze) {
  for (let r = 1; r < i.length; r++) {
    const o = (t - r + i.length) % i.length, n = i[o];
    if (e(n))
      return n;
  }
  return i[t] ? i[t] : null;
}
function Cr(i, t, e = ze) {
  if (t) {
    const r = ua(i, t.index, e);
    return r && (r.tabIndex = 0, r.focus()), r;
  } else
    return Uo(i, e);
}
function $r(i, t, e = ze) {
  if (t) {
    const r = pa(i, t.index, e);
    return r && (r.tabIndex = 0, r.focus()), r;
  } else
    return Po(i, e);
}
function ma() {
  return new Event("request-activation", { bubbles: !0, composed: !0 });
}
function ze(i) {
  return !i.disabled;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ie = {
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  Home: "Home",
  End: "End"
};
class zo {
  constructor(t) {
    this.handleKeydown = (h) => {
      const u = h.key;
      if (h.defaultPrevented || !this.isNavigableKey(u))
        return;
      const w = this.items;
      if (!w.length)
        return;
      const y = Ct(w, this.isActivatable);
      y && (y.item.tabIndex = -1), h.preventDefault();
      const v = this.isRtl(), S = v ? ie.ArrowRight : ie.ArrowLeft, I = v ? ie.ArrowLeft : ie.ArrowRight;
      switch (u) {
        case ie.ArrowDown:
        case I:
          Cr(w, y, this.isActivatable);
          break;
        case ie.ArrowUp:
        case S:
          $r(w, y, this.isActivatable);
          break;
        case ie.Home:
          Uo(w, this.isActivatable);
          break;
        case ie.End:
          Po(w, this.isActivatable);
          break;
      }
    }, this.onDeactivateItems = () => {
      const h = this.items;
      for (const u of h)
        this.deactivateItem(u);
    }, this.onRequestActivation = (h) => {
      this.onDeactivateItems();
      const u = h.target;
      this.activateItem(u), u.focus();
    }, this.onSlotchange = () => {
      const h = this.items;
      let u = !1;
      for (const y of h) {
        if (!y.disabled && y.tabIndex > -1 && !u) {
          u = !0, y.tabIndex = 0;
          continue;
        }
        y.tabIndex = -1;
      }
      if (u)
        return;
      const w = dr(h, this.isActivatable);
      w && (w.tabIndex = 0);
    };
    const { isItem: e, getPossibleItems: r, isRtl: o, deactivateItem: n, activateItem: d, isNavigableKey: l, isActivatable: p } = t;
    this.isItem = e, this.getPossibleItems = r, this.isRtl = o, this.deactivateItem = n, this.activateItem = d, this.isNavigableKey = l, this.isActivatable = p;
  }
  /**
   * The items being managed by the list. Additionally, attempts to see if the
   * object has a sub-item in the `.item` property.
   */
  get items() {
    const t = this.getPossibleItems(), e = [];
    for (const r of t) {
      if (this.isItem(r)) {
        e.push(r);
        continue;
      }
      const n = r.item;
      n && this.isItem(n) && e.push(n);
    }
    return e;
  }
  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem() {
    const t = this.items, e = Ct(t, this.isActivatable);
    return e && (e.item.tabIndex = -1), Cr(t, e, this.isActivatable);
  }
  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem() {
    const t = this.items, e = Ct(t, this.isActivatable);
    return e && (e.item.tabIndex = -1), $r(t, e, this.isActivatable);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ga = new Set(Object.values(ie));
class No extends oe {
  /** @export */
  get items() {
    return this.listController.items;
  }
  constructor() {
    super(), this.listController = new zo({
      isItem: (t) => t.hasAttribute("md-list-item"),
      getPossibleItems: () => this.slotItems,
      isRtl: () => getComputedStyle(this).direction === "rtl",
      deactivateItem: (t) => {
        t.tabIndex = -1;
      },
      activateItem: (t) => {
        t.tabIndex = 0;
      },
      isNavigableKey: (t) => ga.has(t),
      isActivatable: (t) => !t.disabled && t.type !== "text"
    }), this.internals = // Cast needed for closure
    this.attachInternals(), this.internals.role = "list", this.addEventListener("keydown", this.listController.handleKeydown);
  }
  render() {
    return U`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `;
  }
  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem() {
    return this.listController.activateNextItem();
  }
  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem() {
    return this.listController.activatePreviousItem();
  }
}
g([
  Me({ flatten: !0 })
], No.prototype, "slotItems", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const va = ne`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;
class Ho extends No {
}
Ho.styles = [va];
customElements.define("ew-list", Ho);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class cr extends oe {
  constructor() {
    super(...arguments), this.multiline = !1;
  }
  render() {
    return U`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `;
  }
  handleTextSlotChange() {
    let t = !1, e = 0;
    for (const r of this.textSlots)
      if (_a(r) && (e += 1), e > 1) {
        t = !0;
        break;
      }
    this.multiline = t;
  }
}
g([
  E({ type: Boolean, reflect: !0 })
], cr.prototype, "multiline", void 0);
g([
  ha(".text slot")
], cr.prototype, "textSlots", void 0);
function _a(i) {
  var t;
  for (const e of i.assignedNodes({ flatten: !0 })) {
    const r = e.nodeType === Node.ELEMENT_NODE, o = e.nodeType === Node.TEXT_NODE && ((t = e.textContent) == null ? void 0 : t.match(/\S/));
    if (r || o)
      return !0;
  }
  return !1;
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const ya = ne`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Zi = class extends cr {
};
Zi.styles = [ya];
Zi = g([
  pi("md-item")
], Zi);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zo = Symbol.for(""), ba = (i) => {
  if ((i == null ? void 0 : i.r) === Zo)
    return i == null ? void 0 : i._$litStatic$;
}, et = (i, ...t) => ({ _$litStatic$: t.reduce((e, r, o) => e + ((n) => {
  if (n._$litStatic$ !== void 0)
    return n._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(r) + i[o + 1], i[0]), r: Zo }), Br = /* @__PURE__ */ new Map(), xa = (i) => (t, ...e) => {
  const r = e.length;
  let o, n;
  const d = [], l = [];
  let p, h = 0, u = !1;
  for (; h < r; ) {
    for (p = t[h]; h < r && (n = e[h], (o = ba(n)) !== void 0); )
      p += o + t[++h], u = !0;
    h !== r && l.push(n), d.push(p), h++;
  }
  if (h === r && d.push(t[r]), u) {
    const w = d.join("$$lit$$");
    (t = Br.get(w)) === void 0 && (d.raw = d, Br.set(w, t = d)), e = l;
  }
  return i(t, ...e);
}, gi = xa(U);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ne extends oe {
  constructor() {
    super(...arguments), this.disabled = !1, this.type = "text", this.isListItem = !0, this.href = "", this.target = "";
  }
  get isDisabled() {
    return this.disabled && this.type !== "link";
  }
  willUpdate(t) {
    this.href && (this.type = "link"), super.willUpdate(t);
  }
  render() {
    return this.renderListItem(U`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
  }
  /**
   * Renders the root list item.
   *
   * @param content the child content of the list item.
   */
  renderListItem(t) {
    const e = this.type === "link";
    let r;
    switch (this.type) {
      case "link":
        r = et`a`;
        break;
      case "button":
        r = et`button`;
        break;
      default:
      case "text":
        r = et`li`;
        break;
    }
    const o = this.type !== "text", n = e && this.target ? this.target : O;
    return gi`
      <${r}
        id="item"
        tabindex="${this.isDisabled || !o ? -1 : 0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected || O}
        aria-checked=${this.ariaChecked || O}
        aria-expanded=${this.ariaExpanded || O}
        aria-haspopup=${this.ariaHasPopup || O}
        class="list-item ${ke(this.getRenderClasses())}"
        href=${this.href || O}
        target=${n}
        @focus=${this.onFocus}
      >${t}</${r}>
    `;
  }
  /**
   * Handles rendering of the ripple element.
   */
  renderRipple() {
    return this.type === "text" ? O : U` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`;
  }
  /**
   * Handles rendering of the focus ring.
   */
  renderFocusRing() {
    return this.type === "text" ? O : U` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
  }
  onFocusRingVisibilityChanged(t) {
  }
  /**
   * Classes applied to the list item root.
   */
  getRenderClasses() {
    return { disabled: this.isDisabled };
  }
  /**
   * Handles rendering the headline and supporting text.
   */
  renderBody() {
    return U`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
  }
  onFocus() {
    this.tabIndex === -1 && this.dispatchEvent(ma());
  }
  focus() {
    var t;
    (t = this.listItemRoot) == null || t.focus();
  }
}
ot(Ne);
Ne.shadowRootOptions = {
  ...oe.shadowRootOptions,
  delegatesFocus: !0
};
g([
  E({ type: Boolean, reflect: !0 })
], Ne.prototype, "disabled", void 0);
g([
  E({ reflect: !0 })
], Ne.prototype, "type", void 0);
g([
  E({ type: Boolean, attribute: "md-list-item", reflect: !0 })
], Ne.prototype, "isListItem", void 0);
g([
  E()
], Ne.prototype, "href", void 0);
g([
  E()
], Ne.prototype, "target", void 0);
g([
  pe(".list-item")
], Ne.prototype, "listItemRoot", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const wa = ne`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}/*# sourceMappingURL=list-item-styles.css.map */
`;
class Vo extends Ne {
}
Vo.styles = [wa];
customElements.define("ew-list-item", Vo);
class Wo extends ia {
}
Wo.styles = [ta];
customElements.define("ew-divider", Wo);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ot = Symbol("createValidator"), Dt = Symbol("getValidityAnchor"), Ai = Symbol("privateValidator"), Oe = Symbol("privateSyncValidity"), jt = Symbol("privateCustomValidationMessage");
function hr(i) {
  var t;
  class e extends i {
    constructor() {
      super(...arguments), this[t] = "";
    }
    get validity() {
      return this[Oe](), this[_e].validity;
    }
    get validationMessage() {
      return this[Oe](), this[_e].validationMessage;
    }
    get willValidate() {
      return this[Oe](), this[_e].willValidate;
    }
    checkValidity() {
      return this[Oe](), this[_e].checkValidity();
    }
    reportValidity() {
      return this[Oe](), this[_e].reportValidity();
    }
    setCustomValidity(o) {
      this[jt] = o, this[Oe]();
    }
    requestUpdate(o, n, d) {
      super.requestUpdate(o, n, d), this[Oe]();
    }
    firstUpdated(o) {
      super.firstUpdated(o), this[Oe]();
    }
    [(t = jt, Oe)]() {
      this[Ai] || (this[Ai] = this[Ot]());
      const { validity: o, validationMessage: n } = this[Ai].getValidity(), d = !!this[jt], l = this[jt] || n;
      this[_e].setValidity({ ...o, customError: d }, l, this[Dt]() ?? void 0);
    }
    [Ot]() {
      throw new Error("Implement [createValidator]");
    }
    [Dt]() {
      throw new Error("Implement [getValidityAnchor]");
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const pt = Symbol("getFormValue"), Vi = Symbol("getFormState");
function fr(i) {
  class t extends i {
    get form() {
      return this[_e].form;
    }
    get labels() {
      return this[_e].labels;
    }
    // Use @property for the `name` and `disabled` properties to add them to the
    // `observedAttributes` array and trigger `attributeChangedCallback()`.
    //
    // We don't use Lit's default getter/setter (`noAccessor: true`) because
    // the attributes need to be updated synchronously to work with synchronous
    // form APIs, and Lit updates attributes async by default.
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(r) {
      this.setAttribute("name", r);
    }
    get disabled() {
      return this.hasAttribute("disabled");
    }
    set disabled(r) {
      this.toggleAttribute("disabled", r);
    }
    attributeChangedCallback(r, o, n) {
      if (r === "name" || r === "disabled") {
        const d = r === "disabled" ? o !== null : o;
        this.requestUpdate(r, d);
        return;
      }
      super.attributeChangedCallback(r, o, n);
    }
    requestUpdate(r, o, n) {
      super.requestUpdate(r, o, n), this[_e].setFormValue(this[pt](), this[Vi]());
    }
    [pt]() {
      throw new Error("Implement [getFormValue]");
    }
    [Vi]() {
      return this[pt]();
    }
    formDisabledCallback(r) {
      this.disabled = r;
    }
  }
  return t.formAssociated = !0, g([
    E({ noAccessor: !0 })
  ], t.prototype, "name", null), g([
    E({ type: Boolean, noAccessor: !0 })
  ], t.prototype, "disabled", null), t;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ur {
  /**
   * Creates a new validator.
   *
   * @param getCurrentState A callback that returns the current state of
   *     constraint validation-related properties.
   */
  constructor(t) {
    this.getCurrentState = t, this.currentValidity = {
      validity: {},
      validationMessage: ""
    };
  }
  /**
   * Returns the current `ValidityStateFlags` and validation message for the
   * validator.
   *
   * If the constraint validation state has not changed, this will return a
   * cached result. This is important since `getValidity()` can be called
   * frequently in response to synchronous property changes.
   *
   * @return The current validity and validation message.
   */
  getValidity() {
    const t = this.getCurrentState();
    if (!(!this.prevState || !this.equals(this.prevState, t)))
      return this.currentValidity;
    const { validity: r, validationMessage: o } = this.computeValidity(t);
    return this.prevState = this.copy(t), this.currentValidity = {
      validationMessage: o,
      validity: {
        // Change any `ValidityState` instances into `ValidityStateFlags` since
        // `ValidityState` cannot be easily `{...spread}`.
        badInput: r.badInput,
        customError: r.customError,
        patternMismatch: r.patternMismatch,
        rangeOverflow: r.rangeOverflow,
        rangeUnderflow: r.rangeUnderflow,
        stepMismatch: r.stepMismatch,
        tooLong: r.tooLong,
        tooShort: r.tooShort,
        typeMismatch: r.typeMismatch,
        valueMissing: r.valueMissing
      }
    }, this.currentValidity;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ea extends ur {
  computeValidity(t) {
    return this.checkboxControl || (this.checkboxControl = document.createElement("input"), this.checkboxControl.type = "checkbox"), this.checkboxControl.checked = t.checked, this.checkboxControl.required = t.required, {
      validity: this.checkboxControl.validity,
      validationMessage: this.checkboxControl.validationMessage
    };
  }
  equals(t, e) {
    return t.checked === e.checked && t.required === e.required;
  }
  copy({ checked: t, required: e }) {
    return { checked: t, required: e };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Sa = hr(fr(mi(oe)));
class Ae extends Sa {
  constructor() {
    super(), this.checked = !1, this.indeterminate = !1, this.required = !1, this.value = "on", this.prevChecked = !1, this.prevDisabled = !1, this.prevIndeterminate = !1, this.addEventListener("click", (t) => {
      !ra(t) || !this.input || (this.focus(), oa(this.input));
    });
  }
  update(t) {
    (t.has("checked") || t.has("disabled") || t.has("indeterminate")) && (this.prevChecked = t.get("checked") ?? this.checked, this.prevDisabled = t.get("disabled") ?? this.disabled, this.prevIndeterminate = t.get("indeterminate") ?? this.indeterminate), super.update(t);
  }
  render() {
    const t = !this.prevChecked && !this.prevIndeterminate, e = this.prevChecked && !this.prevIndeterminate, r = this.prevIndeterminate, o = this.checked && !this.indeterminate, n = this.indeterminate, d = ke({
      disabled: this.disabled,
      selected: o || n,
      unselected: !o && !n,
      checked: o,
      indeterminate: n,
      "prev-unselected": t,
      "prev-checked": e,
      "prev-indeterminate": r,
      "prev-disabled": this.prevDisabled
    }), { ariaLabel: l, ariaInvalid: p } = this;
    return U`
      <div class="container ${d}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${n ? "mixed" : O}
          aria-label=${l || O}
          aria-invalid=${p || O}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `;
  }
  handleInput(t) {
    const e = t.target;
    this.checked = e.checked, this.indeterminate = e.indeterminate;
  }
  handleChange(t) {
    ar(this, t);
  }
  [pt]() {
    return !this.checked || this.indeterminate ? null : this.value;
  }
  [Vi]() {
    return String(this.checked);
  }
  formResetCallback() {
    this.checked = this.hasAttribute("checked");
  }
  formStateRestoreCallback(t) {
    this.checked = t === "true";
  }
  [Ot]() {
    return new Ea(() => this);
  }
  [Dt]() {
    return this.input;
  }
}
ot(Ae);
Ae.shadowRootOptions = {
  ...oe.shadowRootOptions,
  delegatesFocus: !0
};
g([
  E({ type: Boolean })
], Ae.prototype, "checked", void 0);
g([
  E({ type: Boolean })
], Ae.prototype, "indeterminate", void 0);
g([
  E({ type: Boolean })
], Ae.prototype, "required", void 0);
g([
  E()
], Ae.prototype, "value", void 0);
g([
  re()
], Ae.prototype, "prevChecked", void 0);
g([
  re()
], Ae.prototype, "prevDisabled", void 0);
g([
  re()
], Ae.prototype, "prevIndeterminate", void 0);
g([
  pe("input")
], Ae.prototype, "input", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const ka = ne`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, 9999px);height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}/*# sourceMappingURL=checkbox-styles.css.map */
`;
class qo extends Ae {
}
qo.styles = [ka];
customElements.define("ew-checkbox", qo);
class Aa {
  constructor(t) {
    this.targetElement = t, this.state = {
      bold: !1,
      italic: !1,
      underline: !1,
      strikethrough: !1,
      foregroundColor: null,
      backgroundColor: null,
      carriageReturn: !1,
      secret: !1
    };
  }
  logs() {
    return this.targetElement.innerText;
  }
  addLine(t) {
    const e = /(?:\033|\\033)(?:\[(.*?)[@-~]|\].*?(?:\007|\033\\))/g;
    let r = 0;
    this.state.carriageReturn && (t !== `
` && this.targetElement.removeChild(this.targetElement.lastChild), this.state.carriageReturn = !1), t.includes("\r") && (this.state.carriageReturn = !0);
    const o = document.createElement("span");
    o.classList.add("line"), this.targetElement.appendChild(o);
    const n = (l) => {
      if (l === "")
        return;
      const p = document.createElement("span");
      if (this.state.bold && p.classList.add("log-bold"), this.state.italic && p.classList.add("log-italic"), this.state.underline && p.classList.add("log-underline"), this.state.strikethrough && p.classList.add("log-strikethrough"), this.state.secret && p.classList.add("log-secret"), this.state.foregroundColor !== null && p.classList.add(`log-fg-${this.state.foregroundColor}`), this.state.backgroundColor !== null && p.classList.add(`log-bg-${this.state.backgroundColor}`), p.appendChild(document.createTextNode(l)), o.appendChild(p), this.state.secret) {
        const h = document.createElement("span");
        h.classList.add("log-secret-redacted"), h.appendChild(document.createTextNode("[redacted]")), o.appendChild(h);
      }
    };
    for (; ; ) {
      const l = e.exec(t);
      if (l === null)
        break;
      const p = l.index;
      if (n(t.substring(r, p)), r = p + l[0].length, l[1] !== void 0)
        for (const h of l[1].split(";"))
          switch (parseInt(h)) {
            case 0:
              this.state.bold = !1, this.state.italic = !1, this.state.underline = !1, this.state.strikethrough = !1, this.state.foregroundColor = null, this.state.backgroundColor = null, this.state.secret = !1;
              break;
            case 1:
              this.state.bold = !0;
              break;
            case 3:
              this.state.italic = !0;
              break;
            case 4:
              this.state.underline = !0;
              break;
            case 5:
              this.state.secret = !0;
              break;
            case 6:
              this.state.secret = !1;
              break;
            case 9:
              this.state.strikethrough = !0;
              break;
            case 22:
              this.state.bold = !1;
              break;
            case 23:
              this.state.italic = !1;
              break;
            case 24:
              this.state.underline = !1;
              break;
            case 29:
              this.state.strikethrough = !1;
              break;
            case 30:
              this.state.foregroundColor = "black";
              break;
            case 31:
              this.state.foregroundColor = "red";
              break;
            case 32:
              this.state.foregroundColor = "green";
              break;
            case 33:
              this.state.foregroundColor = "yellow";
              break;
            case 34:
              this.state.foregroundColor = "blue";
              break;
            case 35:
              this.state.foregroundColor = "magenta";
              break;
            case 36:
              this.state.foregroundColor = "cyan";
              break;
            case 37:
              this.state.foregroundColor = "white";
              break;
            case 39:
              this.state.foregroundColor = null;
              break;
            case 41:
              this.state.backgroundColor = "red";
              break;
            case 42:
              this.state.backgroundColor = "green";
              break;
            case 43:
              this.state.backgroundColor = "yellow";
              break;
            case 44:
              this.state.backgroundColor = "blue";
              break;
            case 45:
              this.state.backgroundColor = "magenta";
              break;
            case 46:
              this.state.backgroundColor = "cyan";
              break;
            case 47:
              this.state.backgroundColor = "white";
              break;
            case 40:
            case 49:
              this.state.backgroundColor = null;
              break;
          }
    }
    const d = this.targetElement.scrollTop > this.targetElement.scrollHeight - this.targetElement.offsetHeight - 50;
    n(t.substring(r)), d && (this.targetElement.scrollTop = this.targetElement.scrollHeight);
  }
}
const Ia = `
  .log {
    flex: 1;
    background-color: #1c1c1c;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-size: 12px;
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    border-radius: 3px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    color: #ddd;
  }

  .log-bold {
    font-weight: bold;
  }
  .log-italic {
    font-style: italic;
  }
  .log-underline {
    text-decoration: underline;
  }
  .log-strikethrough {
    text-decoration: line-through;
  }
  .log-underline.log-strikethrough {
    text-decoration: underline line-through;
  }
  .log-secret {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .log-secret-redacted {
    opacity: 0;
    width: 1px;
    font-size: 1px;
  }
  .log-fg-black {
    color: rgb(128, 128, 128);
  }
  .log-fg-red {
    color: rgb(255, 0, 0);
  }
  .log-fg-green {
    color: rgb(0, 255, 0);
  }
  .log-fg-yellow {
    color: rgb(255, 255, 0);
  }
  .log-fg-blue {
    color: rgb(0, 0, 255);
  }
  .log-fg-magenta {
    color: rgb(255, 0, 255);
  }
  .log-fg-cyan {
    color: rgb(0, 255, 255);
  }
  .log-fg-white {
    color: rgb(187, 187, 187);
  }
  .log-bg-black {
    background-color: rgb(0, 0, 0);
  }
  .log-bg-red {
    background-color: rgb(255, 0, 0);
  }
  .log-bg-green {
    background-color: rgb(0, 255, 0);
  }
  .log-bg-yellow {
    background-color: rgb(255, 255, 0);
  }
  .log-bg-blue {
    background-color: rgb(0, 0, 255);
  }
  .log-bg-magenta {
    background-color: rgb(255, 0, 255);
  }
  .log-bg-cyan {
    background-color: rgb(0, 255, 255);
  }
  .log-bg-white {
    background-color: rgb(255, 255, 255);
  }
`, Pe = (i) => new Promise((t) => setTimeout(t, i));
class Ta {
  constructor() {
    this.chunks = "";
  }
  transform(t, e) {
    this.chunks += t;
    const r = this.chunks.split(`\r
`);
    this.chunks = r.pop(), r.forEach((o) => e.enqueue(o + `\r
`));
  }
  flush(t) {
    t.enqueue(this.chunks);
  }
}
class Ra extends HTMLElement {
  constructor() {
    super(...arguments), this.allowInput = !0;
  }
  logs() {
    var t;
    return ((t = this._console) === null || t === void 0 ? void 0 : t.logs()) || "";
  }
  connectedCallback() {
    if (this._console)
      return;
    const t = this.attachShadow({ mode: "open" });
    if (t.innerHTML = `
      <style>
        :host, input {
          background-color: #1c1c1c;
          color: #ddd;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
            monospace;
          line-height: 1.45;
          display: flex;
          flex-direction: column;
        }
        form {
          display: flex;
          align-items: center;
          padding: 0 8px 0 16px;
        }
        input {
          flex: 1;
          padding: 4px;
          margin: 0 8px;
          border: 0;
          outline: none;
        }
        ${Ia}
      </style>
      <div class="log"></div>
      ${this.allowInput ? `<form>
                >
                <input autofocus>
              </form>
            ` : ""}
    `, this._console = new Aa(this.shadowRoot.querySelector("div")), this.allowInput) {
      const o = this.shadowRoot.querySelector("input");
      this.addEventListener("click", () => {
        var n;
        ((n = getSelection()) === null || n === void 0 ? void 0 : n.toString()) === "" && o.focus();
      }), o.addEventListener("keydown", (n) => {
        n.key === "Enter" && (n.preventDefault(), n.stopPropagation(), this._sendCommand());
      });
    }
    const e = new AbortController(), r = this._connect(e.signal);
    this._cancelConnection = () => (e.abort(), r);
  }
  async _connect(t) {
    this.logger.debug("Starting console read loop");
    try {
      await this.port.readable.pipeThrough(new TextDecoderStream(), {
        signal: t
      }).pipeThrough(new TransformStream(new Ta())).pipeTo(new WritableStream({
        write: (e) => {
          this._console.addLine(e.replace("\r", ""));
        }
      })), t.aborted || (this._console.addLine(""), this._console.addLine(""), this._console.addLine("Terminal disconnected"));
    } catch (e) {
      this._console.addLine(""), this._console.addLine(""), this._console.addLine(`Terminal disconnected: ${e}`);
    } finally {
      await Pe(100), this.logger.debug("Finished console read loop");
    }
  }
  async _sendCommand() {
    const t = this.shadowRoot.querySelector("input"), e = t.value, r = new TextEncoder(), o = this.port.writable.getWriter();
    await o.write(r.encode(e + `\r
`)), this._console.addLine(`> ${e}\r
`), t.value = "", t.focus();
    try {
      o.releaseLock();
    } catch (n) {
      console.error("Ignoring release lock error", n);
    }
  }
  async disconnect() {
    this._cancelConnection && (await this._cancelConnection(), this._cancelConnection = void 0);
  }
  async reset() {
    this.logger.debug("Triggering reset"), await this.port.setSignals({
      dataTerminalReady: !1,
      requestToSend: !0
    }), await Pe(250), await this.port.setSignals({
      dataTerminalReady: !1,
      requestToSend: !1
    }), await Pe(250), await new Promise((t) => setTimeout(t, 1e3));
  }
}
customElements.define("ewt-console", Ra);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Lr(i, t = !0) {
  return t && getComputedStyle(i).getPropertyValue("direction").trim() === "rtl";
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ca = mi(oe);
class le extends Ca {
  constructor() {
    super(...arguments), this.disabled = !1, this.flipIconInRtl = !1, this.href = "", this.target = "", this.ariaLabelSelected = "", this.toggle = !1, this.selected = !1, this.type = "submit", this.value = "", this.flipIcon = Lr(this, this.flipIconInRtl);
  }
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
    return this[_e].form;
  }
  /**
   * The labels this element is associated with.
   */
  get labels() {
    return this[_e].labels;
  }
  /**
   * Link buttons cannot be disabled.
   */
  willUpdate() {
    this.href && (this.disabled = !1);
  }
  render() {
    const t = this.href ? et`div` : et`button`, { ariaLabel: e, ariaHasPopup: r, ariaExpanded: o } = this, n = e && this.ariaLabelSelected, d = this.toggle ? this.selected : O;
    let l = O;
    return this.href || (l = n && this.selected ? this.ariaLabelSelected : e), gi`<${t}
        class="icon-button ${ke(this.getRenderClasses())}"
        id="button"
        aria-label="${l || O}"
        aria-haspopup="${!this.href && r || O}"
        aria-expanded="${!this.href && o || O}"
        aria-pressed="${d}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected ? O : this.renderIcon()}
        ${this.selected ? this.renderSelectedIcon() : O}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${t}>`;
  }
  renderLink() {
    const { ariaLabel: t } = this;
    return U`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target || O}"
        aria-label="${t || O}"></a>
    `;
  }
  getRenderClasses() {
    return {
      "flip-icon": this.flipIcon,
      selected: this.toggle && this.selected
    };
  }
  renderIcon() {
    return U`<span class="icon"><slot></slot></span>`;
  }
  renderSelectedIcon() {
    return U`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`;
  }
  renderTouchTarget() {
    return U`<span class="touch"></span>`;
  }
  renderFocusRing() {
    return U`<md-focus-ring
      part="focus-ring"
      for=${this.href ? "link" : "button"}></md-focus-ring>`;
  }
  renderRipple() {
    return U`<md-ripple
      for=${this.href ? "link" : O}
      ?disabled="${!this.href && this.disabled}"></md-ripple>`;
  }
  connectedCallback() {
    this.flipIcon = Lr(this, this.flipIconInRtl), super.connectedCallback();
  }
  async handleClick(t) {
    await 0, !(!this.toggle || this.disabled || t.defaultPrevented) && (this.selected = !this.selected, this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0 })));
  }
}
ot(le), na(le);
le.formAssociated = !0;
le.shadowRootOptions = {
  mode: "open",
  delegatesFocus: !0
};
g([
  E({ type: Boolean, reflect: !0 })
], le.prototype, "disabled", void 0);
g([
  E({ type: Boolean, attribute: "flip-icon-in-rtl" })
], le.prototype, "flipIconInRtl", void 0);
g([
  E()
], le.prototype, "href", void 0);
g([
  E()
], le.prototype, "target", void 0);
g([
  E({ attribute: "aria-label-selected" })
], le.prototype, "ariaLabelSelected", void 0);
g([
  E({ type: Boolean })
], le.prototype, "toggle", void 0);
g([
  E({ type: Boolean, reflect: !0 })
], le.prototype, "selected", void 0);
g([
  E()
], le.prototype, "type", void 0);
g([
  E({ reflect: !0 })
], le.prototype, "value", void 0);
g([
  re()
], le.prototype, "flipIcon", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const $a = ne`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Ba = ne`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;
class Ko extends le {
}
Ko.styles = [$a, Ba];
customElements.define("ew-icon-button", Ko);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const La = ne`:host{--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, 0px) );--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}/*# sourceMappingURL=filled-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class j extends oe {
  constructor() {
    super(...arguments), this.disabled = !1, this.error = !1, this.focused = !1, this.label = "", this.populated = !1, this.required = !1, this.resizable = !1, this.supportingText = "", this.errorText = "", this.count = -1, this.max = -1, this.hasStart = !1, this.hasEnd = !1, this.isAnimating = !1, this.refreshErrorAlert = !1, this.disableTransitions = !1;
  }
  get counterText() {
    const t = this.count ?? -1, e = this.max ?? -1;
    return t < 0 || e <= 0 ? "" : `${t} / ${e}`;
  }
  get supportingOrErrorText() {
    return this.error && this.errorText ? this.errorText : this.supportingText;
  }
  /**
   * Re-announces the field's error supporting text to screen readers.
   *
   * Error text announces to screen readers anytime it is visible and changes.
   * Use the method to re-announce the message when the text has not changed,
   * but announcement is still needed (such as for `reportValidity()`).
   */
  reannounceError() {
    this.refreshErrorAlert = !0;
  }
  update(t) {
    t.has("disabled") && t.get("disabled") !== void 0 && (this.disableTransitions = !0), this.disabled && this.focused && (t.set("focused", !0), this.focused = !1), this.animateLabelIfNeeded({
      wasFocused: t.get("focused"),
      wasPopulated: t.get("populated")
    }), super.update(t);
  }
  render() {
    var n, d, l;
    const t = this.renderLabel(
      /*isFloating*/
      !0
    ), e = this.renderLabel(
      /*isFloating*/
      !1
    ), r = (n = this.renderOutline) == null ? void 0 : n.call(this, t), o = {
      disabled: this.disabled,
      "disable-transitions": this.disableTransitions,
      error: this.error && !this.disabled,
      focused: this.focused,
      "with-start": this.hasStart,
      "with-end": this.hasEnd,
      populated: this.populated,
      resizable: this.resizable,
      required: this.required,
      "no-label": !this.label
    };
    return U`
      <div class="field ${ke(o)}">
        <div class="container-overflow">
          ${(d = this.renderBackground) == null ? void 0 : d.call(this)} ${(l = this.renderIndicator) == null ? void 0 : l.call(this)} ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e} ${r ? O : t}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `;
  }
  updated(t) {
    (t.has("supportingText") || t.has("errorText") || t.has("count") || t.has("max")) && this.updateSlottedAriaDescribedBy(), this.refreshErrorAlert && requestAnimationFrame(() => {
      this.refreshErrorAlert = !1;
    }), this.disableTransitions && requestAnimationFrame(() => {
      this.disableTransitions = !1;
    });
  }
  renderSupportingText() {
    const { supportingOrErrorText: t, counterText: e } = this;
    if (!t && !e)
      return O;
    const r = U`<span>${t}</span>`, o = e ? U`<span class="counter">${e}</span>` : O, d = this.error && this.errorText && !this.refreshErrorAlert ? "alert" : O;
    return U`
      <div class="supporting-text" role=${d}>${r}${o}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
  }
  updateSlottedAriaDescribedBy() {
    for (const t of this.slottedAriaDescribedBy)
      Fo(U`${this.supportingOrErrorText} ${this.counterText}`, t), t.setAttribute("hidden", "");
  }
  renderLabel(t) {
    if (!this.label)
      return O;
    let e;
    t ? e = this.focused || this.populated || this.isAnimating : e = !this.focused && !this.populated && !this.isAnimating;
    const r = {
      hidden: !e,
      floating: t,
      resting: !t
    }, o = `${this.label}${this.required ? "*" : ""}`;
    return U`
      <span class="label ${ke(r)}" aria-hidden=${!e}
        >${o}</span
      >
    `;
  }
  animateLabelIfNeeded({ wasFocused: t, wasPopulated: e }) {
    var n, d, l;
    if (!this.label)
      return;
    t ?? (t = this.focused), e ?? (e = this.populated);
    const r = t || e, o = this.focused || this.populated;
    r !== o && (this.isAnimating = !0, (n = this.labelAnimation) == null || n.cancel(), this.labelAnimation = (d = this.floatingLabelEl) == null ? void 0 : d.animate(this.getLabelKeyframes(), { duration: 150, easing: At.STANDARD }), (l = this.labelAnimation) == null || l.addEventListener("finish", () => {
      this.isAnimating = !1;
    }));
  }
  getLabelKeyframes() {
    const { floatingLabelEl: t, restingLabelEl: e } = this;
    if (!t || !e)
      return [];
    const { x: r, y: o, height: n } = t.getBoundingClientRect(), { x: d, y: l, height: p } = e.getBoundingClientRect(), h = t.scrollWidth, u = e.scrollWidth, w = u / h, y = d - r, v = l - o + Math.round((p - n * w) / 2), S = `translateX(${y}px) translateY(${v}px) scale(${w})`, I = "translateX(0) translateY(0) scale(1)", A = e.clientWidth, k = u > A ? `${A / w}px` : "";
    return this.focused || this.populated ? [
      { transform: S, width: k },
      { transform: I, width: k }
    ] : [
      { transform: I, width: k },
      { transform: S, width: k }
    ];
  }
  getSurfacePositionClientRect() {
    return this.containerEl.getBoundingClientRect();
  }
}
g([
  E({ type: Boolean })
], j.prototype, "disabled", void 0);
g([
  E({ type: Boolean })
], j.prototype, "error", void 0);
g([
  E({ type: Boolean })
], j.prototype, "focused", void 0);
g([
  E()
], j.prototype, "label", void 0);
g([
  E({ type: Boolean })
], j.prototype, "populated", void 0);
g([
  E({ type: Boolean })
], j.prototype, "required", void 0);
g([
  E({ type: Boolean })
], j.prototype, "resizable", void 0);
g([
  E({ attribute: "supporting-text" })
], j.prototype, "supportingText", void 0);
g([
  E({ attribute: "error-text" })
], j.prototype, "errorText", void 0);
g([
  E({ type: Number })
], j.prototype, "count", void 0);
g([
  E({ type: Number })
], j.prototype, "max", void 0);
g([
  E({ type: Boolean, attribute: "has-start" })
], j.prototype, "hasStart", void 0);
g([
  E({ type: Boolean, attribute: "has-end" })
], j.prototype, "hasEnd", void 0);
g([
  Me({ slot: "aria-describedby" })
], j.prototype, "slottedAriaDescribedBy", void 0);
g([
  re()
], j.prototype, "isAnimating", void 0);
g([
  re()
], j.prototype, "refreshErrorAlert", void 0);
g([
  re()
], j.prototype, "disableTransitions", void 0);
g([
  pe(".label.floating")
], j.prototype, "floatingLabelEl", void 0);
g([
  pe(".label.resting")
], j.prototype, "restingLabelEl", void 0);
g([
  pe(".container")
], j.prototype, "containerEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Oa extends j {
  renderBackground() {
    return U`
      <div class="background"></div>
      <div class="state-layer"></div>
    `;
  }
  renderIndicator() {
    return U`<div class="active-indicator"></div>`;
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Da = ne`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, 0px) );--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px)}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}/*# sourceMappingURL=filled-styles.css.map */
`;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Fa = ne`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Wi = class extends Oa {
};
Wi.styles = [Fa, Da];
Wi = g([
  pi("md-filled-field")
], Wi);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ua = (i) => i.strings === void 0, Pa = {}, Ma = (i, t = Pa) => i._$AH = t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Or = Oo(class extends Do {
  constructor(i) {
    if (super(i), i.type !== je.PROPERTY && i.type !== je.ATTRIBUTE && i.type !== je.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Ua(i))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(i) {
    return i;
  }
  update(i, [t]) {
    if (t === It || t === O)
      return t;
    const e = i.element, r = i.name;
    if (i.type === je.PROPERTY) {
      if (t === e[r])
        return It;
    } else if (i.type === je.BOOLEAN_ATTRIBUTE) {
      if (!!t === e.hasAttribute(r))
        return It;
    } else if (i.type === je.ATTRIBUTE && e.getAttribute(r) === t + "")
      return It;
    return Ma(i), t;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Go = "important", za = " !" + Go, di = Oo(class extends Do {
  constructor(i) {
    var t;
    if (super(i), i.type !== je.ATTRIBUTE || i.name !== "style" || ((t = i.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return Object.keys(i).reduce((t, e) => {
      const r = i[e];
      return r == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(i, [t]) {
    const { style: e } = i.element;
    if (this.ut === void 0) {
      this.ut = /* @__PURE__ */ new Set();
      for (const r in t)
        this.ut.add(r);
      return this.render(t);
    }
    this.ut.forEach((r) => {
      t[r] == null && (this.ut.delete(r), r.includes("-") ? e.removeProperty(r) : e[r] = "");
    });
    for (const r in t) {
      const o = t[r];
      if (o != null) {
        this.ut.add(r);
        const n = typeof o == "string" && o.endsWith(za);
        r.includes("-") || n ? e.setProperty(r, n ? o.slice(0, -11) : o, n ? Go : "") : e[r] = o;
      }
    }
    return It;
  }
});
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Na = {
  fromAttribute(i) {
    return i ?? "";
  },
  toAttribute(i) {
    return i || null;
  }
};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ci = Symbol("onReportValidity"), Xt = Symbol("privateCleanupFormListeners"), Jt = Symbol("privateDoNotReportInvalid"), Qt = Symbol("privateIsSelfReportingValidity"), ei = Symbol("privateCallOnReportValidity");
function Yo(i) {
  var t, e, r;
  class o extends i {
    // Mixins must have a constructor with `...args: any[]`
    // tslint:disable-next-line:no-any
    constructor(...d) {
      super(...d), this[t] = new AbortController(), this[e] = !1, this[r] = !1, this.addEventListener("invalid", (l) => {
        this[Jt] || !l.isTrusted || this.addEventListener("invalid", () => {
          this[ei](l);
        }, { once: !0 });
      }, {
        // Listen during the capture phase, which will happen before the
        // bubbling phase. That way, we can add a final event listener that
        // will run after other event listeners, and we can check if it was
        // default prevented. This works because invalid does not bubble.
        capture: !0
      });
    }
    checkValidity() {
      this[Jt] = !0;
      const d = super.checkValidity();
      return this[Jt] = !1, d;
    }
    reportValidity() {
      this[Qt] = !0;
      const d = super.reportValidity();
      return d && this[ei](null), this[Qt] = !1, d;
    }
    [(t = Xt, e = Jt, r = Qt, ei)](d) {
      const l = d == null ? void 0 : d.defaultPrevented;
      l || (this[ci](d), !(!l && (d == null ? void 0 : d.defaultPrevented))) || (this[Qt] || Va(this[_e].form, this)) && this.focus();
    }
    [ci](d) {
      throw new Error("Implement [onReportValidity]");
    }
    formAssociatedCallback(d) {
      super.formAssociatedCallback && super.formAssociatedCallback(d), this[Xt].abort(), d && (this[Xt] = new AbortController(), Ha(this, d, () => {
        this[ei](null);
      }, this[Xt].signal));
    }
  }
  return o;
}
function Ha(i, t, e, r) {
  const o = Za(t);
  let n = !1, d, l = !1;
  o.addEventListener("before", () => {
    l = !0, d = new AbortController(), n = !1, i.addEventListener("invalid", () => {
      n = !0;
    }, {
      signal: d.signal
    });
  }, { signal: r }), o.addEventListener("after", () => {
    l = !1, d == null || d.abort(), !n && e();
  }, { signal: r }), t.addEventListener("submit", () => {
    l || e();
  }, {
    signal: r
  });
}
const Ii = /* @__PURE__ */ new WeakMap();
function Za(i) {
  if (!Ii.has(i)) {
    const t = new EventTarget();
    Ii.set(i, t);
    for (const e of ["reportValidity", "requestSubmit"]) {
      const r = i[e];
      i[e] = function() {
        t.dispatchEvent(new Event("before"));
        const o = Reflect.apply(r, this, arguments);
        return t.dispatchEvent(new Event("after")), o;
      };
    }
  }
  return Ii.get(i);
}
function Va(i, t) {
  if (!i)
    return !0;
  let e;
  for (const r of i.elements)
    if (r.matches(":invalid")) {
      e = r;
      break;
    }
  return e === t;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Wa extends ur {
  computeValidity({ state: t, renderedControl: e }) {
    let r = e;
    St(t) && !r ? (r = this.inputControl || document.createElement("input"), this.inputControl = r) : r || (r = this.textAreaControl || document.createElement("textarea"), this.textAreaControl = r);
    const o = St(t) ? r : null;
    if (o && (o.type = t.type), r.value !== t.value && (r.value = t.value), r.required = t.required, o) {
      const n = t;
      n.pattern ? o.pattern = n.pattern : o.removeAttribute("pattern"), n.min ? o.min = n.min : o.removeAttribute("min"), n.max ? o.max = n.max : o.removeAttribute("max"), n.step ? o.step = n.step : o.removeAttribute("step");
    }
    return (t.minLength ?? -1) > -1 ? r.setAttribute("minlength", String(t.minLength)) : r.removeAttribute("minlength"), (t.maxLength ?? -1) > -1 ? r.setAttribute("maxlength", String(t.maxLength)) : r.removeAttribute("maxlength"), {
      validity: r.validity,
      validationMessage: r.validationMessage
    };
  }
  equals({ state: t }, { state: e }) {
    const r = t.type === e.type && t.value === e.value && t.required === e.required && t.minLength === e.minLength && t.maxLength === e.maxLength;
    return !St(t) || !St(e) ? r : r && t.pattern === e.pattern && t.min === e.min && t.max === e.max && t.step === e.step;
  }
  copy({ state: t }) {
    return {
      state: St(t) ? this.copyInput(t) : this.copyTextArea(t),
      renderedControl: null
    };
  }
  copyInput(t) {
    const { type: e, pattern: r, min: o, max: n, step: d } = t;
    return {
      ...this.copySharedState(t),
      type: e,
      pattern: r,
      min: o,
      max: n,
      step: d
    };
  }
  copyTextArea(t) {
    return {
      ...this.copySharedState(t),
      type: t.type
    };
  }
  copySharedState({ value: t, required: e, minLength: r, maxLength: o }) {
    return { value: t, required: e, minLength: r, maxLength: o };
  }
}
function St(i) {
  return i.type !== "textarea";
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const qa = Yo(hr(fr(mi(oe))));
class N extends qa {
  constructor() {
    super(...arguments), this.error = !1, this.errorText = "", this.label = "", this.required = !1, this.value = "", this.prefixText = "", this.suffixText = "", this.hasLeadingIcon = !1, this.hasTrailingIcon = !1, this.supportingText = "", this.textDirection = "", this.rows = 2, this.cols = 20, this.inputMode = "", this.max = "", this.maxLength = -1, this.min = "", this.minLength = -1, this.noSpinner = !1, this.pattern = "", this.placeholder = "", this.readOnly = !1, this.multiple = !1, this.step = "", this.type = "text", this.autocomplete = "", this.dirty = !1, this.focused = !1, this.nativeError = !1, this.nativeErrorText = "";
  }
  /**
   * Gets or sets the direction in which selection occurred.
   */
  get selectionDirection() {
    return this.getInputOrTextarea().selectionDirection;
  }
  set selectionDirection(t) {
    this.getInputOrTextarea().selectionDirection = t;
  }
  /**
   * Gets or sets the end position or offset of a text selection.
   */
  get selectionEnd() {
    return this.getInputOrTextarea().selectionEnd;
  }
  set selectionEnd(t) {
    this.getInputOrTextarea().selectionEnd = t;
  }
  /**
   * Gets or sets the starting position or offset of a text selection.
   */
  get selectionStart() {
    return this.getInputOrTextarea().selectionStart;
  }
  set selectionStart(t) {
    this.getInputOrTextarea().selectionStart = t;
  }
  /**
   * The text field's value as a number.
   */
  get valueAsNumber() {
    const t = this.getInput();
    return t ? t.valueAsNumber : NaN;
  }
  set valueAsNumber(t) {
    const e = this.getInput();
    e && (e.valueAsNumber = t, this.value = e.value);
  }
  /**
   * The text field's value as a Date.
   */
  get valueAsDate() {
    const t = this.getInput();
    return t ? t.valueAsDate : null;
  }
  set valueAsDate(t) {
    const e = this.getInput();
    e && (e.valueAsDate = t, this.value = e.value);
  }
  get hasError() {
    return this.error || this.nativeError;
  }
  /**
   * Selects all the text in the text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
   */
  select() {
    this.getInputOrTextarea().select();
  }
  setRangeText(...t) {
    this.getInputOrTextarea().setRangeText(...t), this.value = this.getInputOrTextarea().value;
  }
  /**
   * Sets the start and end positions of a selection in the text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
   *
   * @param start The offset into the text field for the start of the selection.
   * @param end The offset into the text field for the end of the selection.
   * @param direction The direction in which the selection is performed.
   */
  setSelectionRange(t, e, r) {
    this.getInputOrTextarea().setSelectionRange(t, e, r);
  }
  /**
   * Decrements the value of a numeric type text field by `step` or `n` `step`
   * number of times.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
   *
   * @param stepDecrement The number of steps to decrement, defaults to 1.
   */
  stepDown(t) {
    const e = this.getInput();
    e && (e.stepDown(t), this.value = e.value);
  }
  /**
   * Increments the value of a numeric type text field by `step` or `n` `step`
   * number of times.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
   *
   * @param stepIncrement The number of steps to increment, defaults to 1.
   */
  stepUp(t) {
    const e = this.getInput();
    e && (e.stepUp(t), this.value = e.value);
  }
  /**
   * Reset the text field to its default value.
   */
  reset() {
    this.dirty = !1, this.value = this.getAttribute("value") ?? "", this.nativeError = !1, this.nativeErrorText = "";
  }
  attributeChangedCallback(t, e, r) {
    t === "value" && this.dirty || super.attributeChangedCallback(t, e, r);
  }
  render() {
    const t = {
      disabled: this.disabled,
      error: !this.disabled && this.hasError,
      textarea: this.type === "textarea",
      "no-spinner": this.noSpinner
    };
    return U`
      <span class="text-field ${ke(t)}">
        ${this.renderField()}
      </span>
    `;
  }
  updated(t) {
    const e = this.getInputOrTextarea().value;
    this.value !== e && (this.value = e);
  }
  renderField() {
    return gi`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === "textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`;
  }
  renderLeadingIcon() {
    return U`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderTrailingIcon() {
    return U`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderInputOrTextarea() {
    const t = { direction: this.textDirection }, e = this.ariaLabel || this.label || O, r = this.autocomplete, o = (this.maxLength ?? -1) > -1, n = (this.minLength ?? -1) > -1;
    if (this.type === "textarea")
      return U`
        <textarea
          class="input"
          style=${di(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r || O}
          ?disabled=${this.disabled}
          maxlength=${o ? this.maxLength : O}
          minlength=${n ? this.minLength : O}
          placeholder=${this.placeholder || O}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Or(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;
    const d = this.renderPrefix(), l = this.renderSuffix(), p = this.inputMode;
    return U`
      <div class="input-wrapper">
        ${d}
        <input
          class="input"
          style=${di(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r || O}
          ?disabled=${this.disabled}
          inputmode=${p || O}
          max=${this.max || O}
          maxlength=${o ? this.maxLength : O}
          min=${this.min || O}
          minlength=${n ? this.minLength : O}
          pattern=${this.pattern || O}
          placeholder=${this.placeholder || O}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step || O}
          type=${this.type}
          .value=${Or(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${l}
      </div>
    `;
  }
  renderPrefix() {
    return this.renderAffix(
      this.prefixText,
      /* isSuffix */
      !1
    );
  }
  renderSuffix() {
    return this.renderAffix(
      this.suffixText,
      /* isSuffix */
      !0
    );
  }
  renderAffix(t, e) {
    return t ? U`<span class="${ke({
      suffix: e,
      prefix: !e
    })}">${t}</span>` : O;
  }
  getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText;
  }
  handleFocusChange() {
    var t;
    this.focused = ((t = this.inputOrTextarea) == null ? void 0 : t.matches(":focus")) ?? !1;
  }
  handleInput(t) {
    this.dirty = !0, this.value = t.target.value;
  }
  redispatchEvent(t) {
    ar(this, t);
  }
  getInputOrTextarea() {
    return this.inputOrTextarea || (this.connectedCallback(), this.scheduleUpdate()), this.isUpdatePending && this.scheduleUpdate(), this.inputOrTextarea;
  }
  getInput() {
    return this.type === "textarea" ? null : this.getInputOrTextarea();
  }
  handleIconChange() {
    this.hasLeadingIcon = this.leadingIcons.length > 0, this.hasTrailingIcon = this.trailingIcons.length > 0;
  }
  [pt]() {
    return this.value;
  }
  formResetCallback() {
    this.reset();
  }
  formStateRestoreCallback(t) {
    this.value = t;
  }
  focus() {
    this.getInputOrTextarea().focus();
  }
  [Ot]() {
    return new Wa(() => ({
      state: this,
      renderedControl: this.inputOrTextarea
    }));
  }
  [Dt]() {
    return this.inputOrTextarea;
  }
  [ci](t) {
    var r;
    t == null || t.preventDefault();
    const e = this.getErrorText();
    this.nativeError = !!t, this.nativeErrorText = this.validationMessage, e === this.getErrorText() && ((r = this.field) == null || r.reannounceError());
  }
}
ot(N);
N.shadowRootOptions = {
  ...oe.shadowRootOptions,
  delegatesFocus: !0
};
g([
  E({ type: Boolean, reflect: !0 })
], N.prototype, "error", void 0);
g([
  E({ attribute: "error-text" })
], N.prototype, "errorText", void 0);
g([
  E()
], N.prototype, "label", void 0);
g([
  E({ type: Boolean, reflect: !0 })
], N.prototype, "required", void 0);
g([
  E()
], N.prototype, "value", void 0);
g([
  E({ attribute: "prefix-text" })
], N.prototype, "prefixText", void 0);
g([
  E({ attribute: "suffix-text" })
], N.prototype, "suffixText", void 0);
g([
  E({ type: Boolean, attribute: "has-leading-icon" })
], N.prototype, "hasLeadingIcon", void 0);
g([
  E({ type: Boolean, attribute: "has-trailing-icon" })
], N.prototype, "hasTrailingIcon", void 0);
g([
  E({ attribute: "supporting-text" })
], N.prototype, "supportingText", void 0);
g([
  E({ attribute: "text-direction" })
], N.prototype, "textDirection", void 0);
g([
  E({ type: Number })
], N.prototype, "rows", void 0);
g([
  E({ type: Number })
], N.prototype, "cols", void 0);
g([
  E({ reflect: !0 })
], N.prototype, "inputMode", void 0);
g([
  E()
], N.prototype, "max", void 0);
g([
  E({ type: Number })
], N.prototype, "maxLength", void 0);
g([
  E()
], N.prototype, "min", void 0);
g([
  E({ type: Number })
], N.prototype, "minLength", void 0);
g([
  E({ type: Boolean, attribute: "no-spinner" })
], N.prototype, "noSpinner", void 0);
g([
  E()
], N.prototype, "pattern", void 0);
g([
  E({ reflect: !0, converter: Na })
], N.prototype, "placeholder", void 0);
g([
  E({ type: Boolean, reflect: !0 })
], N.prototype, "readOnly", void 0);
g([
  E({ type: Boolean, reflect: !0 })
], N.prototype, "multiple", void 0);
g([
  E()
], N.prototype, "step", void 0);
g([
  E({ reflect: !0 })
], N.prototype, "type", void 0);
g([
  E({ reflect: !0 })
], N.prototype, "autocomplete", void 0);
g([
  re()
], N.prototype, "dirty", void 0);
g([
  re()
], N.prototype, "focused", void 0);
g([
  re()
], N.prototype, "nativeError", void 0);
g([
  re()
], N.prototype, "nativeErrorText", void 0);
g([
  pe(".input")
], N.prototype, "inputOrTextarea", void 0);
g([
  pe(".field")
], N.prototype, "field", void 0);
g([
  Me({ slot: "leading-icon" })
], N.prototype, "leadingIcons", void 0);
g([
  Me({ slot: "trailing-icon" })
], N.prototype, "trailingIcons", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ka extends N {
  constructor() {
    super(...arguments), this.fieldTag = et`md-filled-field`;
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Ga = ne`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ya = Symbol.for(""), ja = (i, ...t) => ({ _$litStatic$: t.reduce((e, r, o) => e + ((n) => {
  if (n._$litStatic$ !== void 0)
    return n._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(r) + i[o + 1], i[0]), r: Ya });
class jo extends Ka {
  constructor() {
    super(...arguments), this.fieldTag = ja`md-filled-field`;
  }
}
jo.styles = [Ga, La];
customElements.define("ew-filled-text-field", jo);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Xa extends oe {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("aria-hidden", "true");
  }
  render() {
    return U`<span class="shadow"></span>`;
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Ja = ne`:host{display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let qi = class extends Xa {
};
qi.styles = [Ja];
qi = g([
  pi("md-elevation")
], qi);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Qa(i, t) {
  return new CustomEvent("close-menu", {
    bubbles: !0,
    composed: !0,
    detail: { initiator: i, reason: t, itemPath: [i] }
  });
}
const Dr = Qa, Ki = {
  SPACE: "Space",
  ENTER: "Enter"
}, Fr = {
  CLICK_SELECTION: "click-selection",
  KEYDOWN: "keydown"
}, es = {
  ESCAPE: "Escape",
  SPACE: Ki.SPACE,
  ENTER: Ki.ENTER
};
function Xo(i) {
  return Object.values(es).some((t) => t === i);
}
function ts(i) {
  return Object.values(Ki).some((t) => t === i);
}
function Gi(i, t) {
  const e = new Event("md-contains", { bubbles: !0, composed: !0 });
  let r = [];
  const o = (d) => {
    r = d.composedPath();
  };
  return t.addEventListener("md-contains", o), i.dispatchEvent(e), t.removeEventListener("md-contains", o), r.length > 0;
}
const Se = {
  NONE: "none",
  LIST_ROOT: "list-root",
  FIRST_ITEM: "first-item",
  LAST_ITEM: "last-item"
};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ur = {
  END_START: "end-start",
  END_END: "end-end",
  START_START: "start-start",
  START_END: "start-end"
};
class is {
  /**
   * @param host The host to connect the controller to.
   * @param getProperties A function that returns the properties for the
   * controller.
   */
  constructor(t, e) {
    this.host = t, this.getProperties = e, this.surfaceStylesInternal = {
      display: "none"
    }, this.lastValues = {
      isOpen: !1
    }, this.host.addController(this);
  }
  /**
   * The StyleInfo map to apply to the surface via Lit's stylemap
   */
  get surfaceStyles() {
    return this.surfaceStylesInternal;
  }
  /**
   * Calculates the surface's new position required so that the surface's
   * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
   * surface inside the window viewport. This positioning also respects RTL by
   * checking `getComputedStyle()` on the surface element.
   */
  async position() {
    const { surfaceEl: t, anchorEl: e, anchorCorner: r, surfaceCorner: o, positioning: n, xOffset: d, yOffset: l, repositionStrategy: p } = this.getProperties(), h = r.toLowerCase().trim(), u = o.toLowerCase().trim();
    if (!t || !e)
      return;
    const w = window.innerWidth, y = window.innerHeight, v = document.createElement("div");
    v.style.opacity = "0", v.style.position = "fixed", v.style.display = "block", v.style.inset = "0", document.body.appendChild(v);
    const S = v.getBoundingClientRect();
    v.remove();
    const I = window.innerHeight - S.bottom, A = window.innerWidth - S.right;
    this.surfaceStylesInternal = {
      display: "block",
      opacity: "0"
    }, this.host.requestUpdate(), await this.host.updateComplete, t.popover && t.isConnected && t.showPopover();
    const R = t.getSurfacePositionClientRect ? t.getSurfacePositionClientRect() : t.getBoundingClientRect(), k = e.getSurfacePositionClientRect ? e.getSurfacePositionClientRect() : e.getBoundingClientRect(), [C, x] = u.split("-"), [$, P] = h.split("-"), T = getComputedStyle(t).direction === "ltr";
    let { blockInset: D, blockOutOfBoundsCorrection: L, surfaceBlockProperty: B } = this.calculateBlock({
      surfaceRect: R,
      anchorRect: k,
      anchorBlock: $,
      surfaceBlock: C,
      yOffset: l,
      positioning: n,
      windowInnerHeight: y,
      blockScrollbarHeight: I
    });
    if (L) {
      const he = C === "start" ? "end" : "start", we = $ === "start" ? "end" : "start", Ee = this.calculateBlock({
        surfaceRect: R,
        anchorRect: k,
        anchorBlock: we,
        surfaceBlock: he,
        yOffset: l,
        positioning: n,
        windowInnerHeight: y,
        blockScrollbarHeight: I
      });
      L > Ee.blockOutOfBoundsCorrection && (D = Ee.blockInset, L = Ee.blockOutOfBoundsCorrection, B = Ee.surfaceBlockProperty);
    }
    let { inlineInset: F, inlineOutOfBoundsCorrection: J, surfaceInlineProperty: He } = this.calculateInline({
      surfaceRect: R,
      anchorRect: k,
      anchorInline: P,
      surfaceInline: x,
      xOffset: d,
      positioning: n,
      isLTR: T,
      windowInnerWidth: w,
      inlineScrollbarWidth: A
    });
    if (J) {
      const he = x === "start" ? "end" : "start", we = P === "start" ? "end" : "start", Ee = this.calculateInline({
        surfaceRect: R,
        anchorRect: k,
        anchorInline: we,
        surfaceInline: he,
        xOffset: d,
        positioning: n,
        isLTR: T,
        windowInnerWidth: w,
        inlineScrollbarWidth: A
      });
      Math.abs(J) > Math.abs(Ee.inlineOutOfBoundsCorrection) && (F = Ee.inlineInset, J = Ee.inlineOutOfBoundsCorrection, He = Ee.surfaceInlineProperty);
    }
    p === "move" && (D = D - L, F = F - J), this.surfaceStylesInternal = {
      display: "block",
      opacity: "1",
      [B]: `${D}px`,
      [He]: `${F}px`
    }, p === "resize" && (L && (this.surfaceStylesInternal.height = `${R.height - L}px`), J && (this.surfaceStylesInternal.width = `${R.width - J}px`)), this.host.requestUpdate();
  }
  /**
   * Calculates the css property, the inset, and the out of bounds correction
   * for the surface in the block direction.
   */
  calculateBlock(t) {
    const { surfaceRect: e, anchorRect: r, anchorBlock: o, surfaceBlock: n, yOffset: d, positioning: l, windowInnerHeight: p, blockScrollbarHeight: h } = t, u = l === "fixed" || l === "document" ? 1 : 0, w = l === "document" ? 1 : 0, y = n === "start" ? 1 : 0, v = n === "end" ? 1 : 0, I = (o !== n ? 1 : 0) * r.height + d, A = y * r.top + v * (p - r.bottom - h), R = y * window.scrollY - v * window.scrollY, k = Math.abs(Math.min(0, p - A - I - e.height));
    return { blockInset: u * A + w * R + I, blockOutOfBoundsCorrection: k, surfaceBlockProperty: n === "start" ? "inset-block-start" : "inset-block-end" };
  }
  /**
   * Calculates the css property, the inset, and the out of bounds correction
   * for the surface in the inline direction.
   */
  calculateInline(t) {
    const { isLTR: e, surfaceInline: r, anchorInline: o, anchorRect: n, surfaceRect: d, xOffset: l, positioning: p, windowInnerWidth: h, inlineScrollbarWidth: u } = t, w = p === "fixed" || p === "document" ? 1 : 0, y = p === "document" ? 1 : 0, v = e ? 1 : 0, S = e ? 0 : 1, I = r === "start" ? 1 : 0, A = r === "end" ? 1 : 0, k = (o !== r ? 1 : 0) * n.width + l, C = I * n.left + A * (h - n.right - u), x = I * (h - n.right - u) + A * n.left, $ = v * C + S * x, P = I * window.scrollX - A * window.scrollX, T = A * window.scrollX - I * window.scrollX, D = v * P + S * T, L = Math.abs(Math.min(0, h - $ - k - d.width)), B = w * $ + k + y * D;
    let F = r === "start" ? "inset-inline-start" : "inset-inline-end";
    return (p === "document" || p === "fixed") && (r === "start" && e || r === "end" && !e ? F = "left" : F = "right"), {
      inlineInset: B,
      inlineOutOfBoundsCorrection: L,
      surfaceInlineProperty: F
    };
  }
  hostUpdate() {
    this.onUpdate();
  }
  hostUpdated() {
    this.onUpdate();
  }
  /**
   * Checks whether the properties passed into the controller have changed since
   * the last positioning. If so, it will reposition if the surface is open or
   * close it if the surface should close.
   */
  async onUpdate() {
    const t = this.getProperties();
    let e = !1;
    for (const [d, l] of Object.entries(t))
      if (e = e || l !== this.lastValues[d], e)
        break;
    const r = this.lastValues.isOpen !== t.isOpen, o = !!t.anchorEl, n = !!t.surfaceEl;
    e && o && n && (this.lastValues.isOpen = t.isOpen, t.isOpen ? (this.lastValues = t, await this.position(), t.onOpen()) : r && (await t.beforeClose(), this.close(), t.onClose()));
  }
  /**
   * Hides the surface.
   */
  close() {
    this.surfaceStylesInternal = {
      display: "none"
    }, this.host.requestUpdate();
    const t = this.getProperties().surfaceEl;
    t != null && t.popover && (t != null && t.isConnected) && t.hidePopover();
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ge = {
  INDEX: 0,
  ITEM: 1,
  TEXT: 2
};
class rs {
  /**
   * @param getProperties A function that returns the options of the typeahead
   * controller:
   *
   * {
   *   getItems: A function that returns an array of menu items to be searched.
   *   typeaheadBufferTime: The maximum time between each keystroke to keep the
   *       current type buffer alive.
   * }
   */
  constructor(t) {
    this.getProperties = t, this.typeaheadRecords = [], this.typaheadBuffer = "", this.cancelTypeaheadTimeout = 0, this.isTypingAhead = !1, this.lastActiveRecord = null, this.onKeydown = (e) => {
      this.isTypingAhead ? this.typeahead(e) : this.beginTypeahead(e);
    }, this.endTypeahead = () => {
      this.isTypingAhead = !1, this.typaheadBuffer = "", this.typeaheadRecords = [];
    };
  }
  get items() {
    return this.getProperties().getItems();
  }
  get active() {
    return this.getProperties().active;
  }
  /**
   * Sets up typingahead
   */
  beginTypeahead(t) {
    this.active && (t.code === "Space" || t.code === "Enter" || t.code.startsWith("Arrow") || t.code === "Escape" || (this.isTypingAhead = !0, this.typeaheadRecords = this.items.map((e, r) => [
      r,
      e,
      e.typeaheadText.trim().toLowerCase()
    ]), this.lastActiveRecord = this.typeaheadRecords.find((e) => e[ge.ITEM].tabIndex === 0) ?? null, this.lastActiveRecord && (this.lastActiveRecord[ge.ITEM].tabIndex = -1), this.typeahead(t)));
  }
  /**
   * Performs the typeahead. Based on the normalized items and the current text
   * buffer, finds the _next_ item with matching text and activates it.
   *
   * @example
   *
   * items: Apple, Banana, Olive, Orange, Cucumber
   * buffer: ''
   * user types: o
   *
   * activates Olive
   *
   * @example
   *
   * items: Apple, Banana, Olive (active), Orange, Cucumber
   * buffer: 'o'
   * user types: l
   *
   * activates Olive
   *
   * @example
   *
   * items: Apple, Banana, Olive (active), Orange, Cucumber
   * buffer: ''
   * user types: o
   *
   * activates Orange
   *
   * @example
   *
   * items: Apple, Banana, Olive, Orange (active), Cucumber
   * buffer: ''
   * user types: o
   *
   * activates Olive
   */
  typeahead(t) {
    if (t.defaultPrevented)
      return;
    if (clearTimeout(this.cancelTypeaheadTimeout), t.code === "Enter" || t.code.startsWith("Arrow") || t.code === "Escape") {
      this.endTypeahead(), this.lastActiveRecord && (this.lastActiveRecord[ge.ITEM].tabIndex = -1);
      return;
    }
    t.code === "Space" && t.preventDefault(), this.cancelTypeaheadTimeout = setTimeout(this.endTypeahead, this.getProperties().typeaheadBufferTime), this.typaheadBuffer += t.key.toLowerCase();
    const e = this.lastActiveRecord ? this.lastActiveRecord[ge.INDEX] : -1, r = this.typeaheadRecords.length, o = (p) => (p[ge.INDEX] + r - e) % r, n = this.typeaheadRecords.filter((p) => !p[ge.ITEM].disabled && p[ge.TEXT].startsWith(this.typaheadBuffer)).sort((p, h) => o(p) - o(h));
    if (n.length === 0) {
      clearTimeout(this.cancelTypeaheadTimeout), this.lastActiveRecord && (this.lastActiveRecord[ge.ITEM].tabIndex = -1), this.endTypeahead();
      return;
    }
    const d = this.typaheadBuffer.length === 1;
    let l;
    this.lastActiveRecord === n[0] && d ? l = n[1] ?? n[0] : l = n[0], this.lastActiveRecord && (this.lastActiveRecord[ge.ITEM].tabIndex = -1), this.lastActiveRecord = l, l[ge.ITEM].tabIndex = 0, l[ge.ITEM].focus();
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Jo = 200, Qo = /* @__PURE__ */ new Set([
  ie.ArrowDown,
  ie.ArrowUp,
  ie.Home,
  ie.End
]), os = /* @__PURE__ */ new Set([
  ie.ArrowLeft,
  ie.ArrowRight,
  ...Qo
]);
function ns(i = document) {
  var e;
  let t = i.activeElement;
  for (; t && ((e = t == null ? void 0 : t.shadowRoot) != null && e.activeElement); )
    t = t.shadowRoot.activeElement;
  return t;
}
class X extends oe {
  /**
   * Whether the menu is animating upwards or downwards when opening. This is
   * helpful for calculating some animation calculations.
   */
  get openDirection() {
    return this.menuCorner.split("-")[0] === "start" ? "DOWN" : "UP";
  }
  /**
   * The element which the menu should align to. If `anchor` is set to a
   * non-empty idref string, then `anchorEl` will resolve to the element with
   * the given id in the same root node. Otherwise, `null`.
   */
  get anchorElement() {
    return this.anchor ? this.getRootNode().querySelector(`#${this.anchor}`) : this.currentAnchorElement;
  }
  set anchorElement(t) {
    this.currentAnchorElement = t, this.requestUpdate("anchorElement");
  }
  constructor() {
    super(), this.anchor = "", this.positioning = "absolute", this.quick = !1, this.hasOverflow = !1, this.open = !1, this.xOffset = 0, this.yOffset = 0, this.typeaheadDelay = Jo, this.anchorCorner = Ur.END_START, this.menuCorner = Ur.START_START, this.stayOpenOnOutsideClick = !1, this.stayOpenOnFocusout = !1, this.skipRestoreFocus = !1, this.defaultFocus = Se.FIRST_ITEM, this.typeaheadActive = !0, this.isSubmenu = !1, this.pointerPath = [], this.isRepositioning = !1, this.openCloseAnimationSignal = aa(), this.listController = new zo({
      isItem: (t) => t.hasAttribute("md-menu-item"),
      getPossibleItems: () => this.slotItems,
      isRtl: () => getComputedStyle(this).direction === "rtl",
      deactivateItem: (t) => {
        t.selected = !1, t.tabIndex = -1;
      },
      activateItem: (t) => {
        t.selected = !0, t.tabIndex = 0;
      },
      isNavigableKey: (t) => {
        if (!this.isSubmenu)
          return os.has(t);
        const r = getComputedStyle(this).direction === "rtl" ? ie.ArrowLeft : ie.ArrowRight;
        return t === r ? !0 : Qo.has(t);
      }
    }), this.lastFocusedElement = null, this.typeaheadController = new rs(() => ({
      getItems: () => this.items,
      typeaheadBufferTime: this.typeaheadDelay,
      active: this.typeaheadActive
    })), this.currentAnchorElement = null, this.internals = // Cast needed for closure
    this.attachInternals(), this.menuPositionController = new is(this, () => ({
      anchorCorner: this.anchorCorner,
      surfaceCorner: this.menuCorner,
      surfaceEl: this.surfaceEl,
      anchorEl: this.anchorElement,
      positioning: this.positioning === "popover" ? "document" : this.positioning,
      isOpen: this.open,
      xOffset: this.xOffset,
      yOffset: this.yOffset,
      onOpen: this.onOpened,
      beforeClose: this.beforeClose,
      onClose: this.onClosed,
      // We can't resize components that have overflow like menus with
      // submenus because the overflow-y will show menu items / content
      // outside the bounds of the menu. Popover API fixes this because each
      // submenu is hoisted to the top-layer and are not considered overflow
      // content.
      repositionStrategy: this.hasOverflow && this.positioning !== "popover" ? "move" : "resize"
    })), this.onWindowResize = () => {
      this.isRepositioning || this.positioning !== "document" && this.positioning !== "fixed" && this.positioning !== "popover" || (this.isRepositioning = !0, this.reposition(), this.isRepositioning = !1);
    }, this.handleFocusout = async (t) => {
      const e = this.anchorElement;
      if (this.stayOpenOnFocusout || !this.open || this.pointerPath.includes(e))
        return;
      if (t.relatedTarget) {
        if (Gi(t.relatedTarget, this) || this.pointerPath.length !== 0 && Gi(t.relatedTarget, e))
          return;
      } else if (this.pointerPath.includes(this))
        return;
      const r = this.skipRestoreFocus;
      this.skipRestoreFocus = !0, this.close(), await this.updateComplete, this.skipRestoreFocus = r;
    }, this.onOpened = async () => {
      this.lastFocusedElement = ns();
      const t = this.items, e = Ct(t);
      e && this.defaultFocus !== Se.NONE && (e.item.tabIndex = -1);
      let r = !this.quick;
      switch (this.quick ? this.dispatchEvent(new Event("opening")) : r = !!await this.animateOpen(), this.defaultFocus) {
        case Se.FIRST_ITEM:
          const o = dr(t);
          o && (o.tabIndex = 0, o.focus(), await o.updateComplete);
          break;
        case Se.LAST_ITEM:
          const n = Mo(t);
          n && (n.tabIndex = 0, n.focus(), await n.updateComplete);
          break;
        case Se.LIST_ROOT:
          this.focus();
          break;
        default:
        case Se.NONE:
          break;
      }
      r || this.dispatchEvent(new Event("opened"));
    }, this.beforeClose = async () => {
      var t, e;
      this.open = !1, this.skipRestoreFocus || (e = (t = this.lastFocusedElement) == null ? void 0 : t.focus) == null || e.call(t), this.quick || await this.animateClose();
    }, this.onClosed = () => {
      this.quick && (this.dispatchEvent(new Event("closing")), this.dispatchEvent(new Event("closed")));
    }, this.onWindowPointerdown = (t) => {
      this.pointerPath = t.composedPath();
    }, this.onDocumentClick = (t) => {
      if (!this.open)
        return;
      const e = t.composedPath();
      !this.stayOpenOnOutsideClick && !e.includes(this) && !e.includes(this.anchorElement) && (this.open = !1);
    }, this.internals.role = "menu", this.addEventListener("keydown", this.handleKeydown), this.addEventListener("keydown", this.captureKeydown, { capture: !0 }), this.addEventListener("focusout", this.handleFocusout);
  }
  /**
   * The menu items associated with this menu. The items must be `MenuItem`s and
   * have both the `md-menu-item` and `md-list-item` attributes.
   */
  get items() {
    return this.listController.items;
  }
  willUpdate(t) {
    if (t.has("open")) {
      if (this.open) {
        this.removeAttribute("aria-hidden");
        return;
      }
      this.setAttribute("aria-hidden", "true");
    }
  }
  update(t) {
    t.has("open") && (this.open ? this.setUpGlobalEventListeners() : this.cleanUpGlobalEventListeners()), t.has("positioning") && this.positioning === "popover" && // type required for Google JS conformance
    !this.showPopover && (this.positioning = "fixed"), super.update(t);
  }
  connectedCallback() {
    super.connectedCallback(), this.open && this.setUpGlobalEventListeners();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.cleanUpGlobalEventListeners();
  }
  render() {
    return this.renderSurface();
  }
  /**
   * Renders the positionable surface element and its contents.
   */
  renderSurface() {
    return U`
      <div
        class="menu ${ke(this.getSurfaceClasses())}"
        style=${di(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning === "popover" ? "manual" : O}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `;
  }
  /**
   * Renders the menu items' slot
   */
  renderMenuItems() {
    return U`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`;
  }
  /**
   * Renders the elevation component.
   */
  renderElevation() {
    return U`<md-elevation part="elevation"></md-elevation>`;
  }
  getSurfaceClasses() {
    return {
      open: this.open,
      fixed: this.positioning === "fixed",
      "has-overflow": this.hasOverflow
    };
  }
  captureKeydown(t) {
    t.target === this && !t.defaultPrevented && Xo(t.code) && (t.preventDefault(), this.close()), this.typeaheadController.onKeydown(t);
  }
  /**
   * Performs the opening animation:
   *
   * https://direct.googleplex.com/#/spec/295000003+271060003
   *
   * @return A promise that resolve to `true` if the animation was aborted,
   *     `false` if it was not aborted.
   */
  async animateOpen() {
    const t = this.surfaceEl, e = this.slotEl;
    if (!t || !e)
      return !0;
    const r = this.openDirection;
    this.dispatchEvent(new Event("opening")), t.classList.toggle("animating", !0);
    const o = this.openCloseAnimationSignal.start(), n = t.offsetHeight, d = r === "UP", l = this.items, p = 500, h = 50, u = 250, w = (p - u) / l.length, y = t.animate([{ height: "0px" }, { height: `${n}px` }], {
      duration: p,
      easing: At.EMPHASIZED
    }), v = e.animate([
      { transform: d ? `translateY(-${n}px)` : "" },
      { transform: "" }
    ], { duration: p, easing: At.EMPHASIZED }), S = t.animate([{ opacity: 0 }, { opacity: 1 }], h), I = [];
    for (let k = 0; k < l.length; k++) {
      const C = d ? l.length - 1 - k : k, x = l[C], $ = x.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: u,
        delay: w * k
      });
      x.classList.toggle("md-menu-hidden", !0), $.addEventListener("finish", () => {
        x.classList.toggle("md-menu-hidden", !1);
      }), I.push([x, $]);
    }
    let A = (k) => {
    };
    const R = new Promise((k) => {
      A = k;
    });
    return o.addEventListener("abort", () => {
      y.cancel(), v.cancel(), S.cancel(), I.forEach(([k, C]) => {
        k.classList.toggle("md-menu-hidden", !1), C.cancel();
      }), A(!0);
    }), y.addEventListener("finish", () => {
      t.classList.toggle("animating", !1), this.openCloseAnimationSignal.finish(), A(!1);
    }), await R;
  }
  /**
   * Performs the closing animation:
   *
   * https://direct.googleplex.com/#/spec/295000003+271060003
   */
  animateClose() {
    let t, e;
    const r = new Promise((P, T) => {
      t = P, e = T;
    }), o = this.surfaceEl, n = this.slotEl;
    if (!o || !n)
      return e(), r;
    const l = this.openDirection === "UP";
    this.dispatchEvent(new Event("closing")), o.classList.toggle("animating", !0);
    const p = this.openCloseAnimationSignal.start(), h = o.offsetHeight, u = this.items, w = 150, y = 50, v = w - y, S = 50, I = 50, A = 0.35, R = (w - I - S) / u.length, k = o.animate([
      { height: `${h}px` },
      { height: `${h * A}px` }
    ], {
      duration: w,
      easing: At.EMPHASIZED_ACCELERATE
    }), C = n.animate([
      { transform: "" },
      {
        transform: l ? `translateY(-${h * (1 - A)}px)` : ""
      }
    ], { duration: w, easing: At.EMPHASIZED_ACCELERATE }), x = o.animate([{ opacity: 1 }, { opacity: 0 }], { duration: y, delay: v }), $ = [];
    for (let P = 0; P < u.length; P++) {
      const T = l ? P : u.length - 1 - P, D = u[T], L = D.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: S,
        delay: I + R * P
      });
      L.addEventListener("finish", () => {
        D.classList.toggle("md-menu-hidden", !0);
      }), $.push([D, L]);
    }
    return p.addEventListener("abort", () => {
      k.cancel(), C.cancel(), x.cancel(), $.forEach(([P, T]) => {
        T.cancel(), P.classList.toggle("md-menu-hidden", !1);
      }), e();
    }), k.addEventListener("finish", () => {
      o.classList.toggle("animating", !1), $.forEach(([P]) => {
        P.classList.toggle("md-menu-hidden", !1);
      }), this.openCloseAnimationSignal.finish(), this.dispatchEvent(new Event("closed")), t(!0);
    }), r;
  }
  handleKeydown(t) {
    this.pointerPath = [], this.listController.handleKeydown(t);
  }
  setUpGlobalEventListeners() {
    document.addEventListener("click", this.onDocumentClick, { capture: !0 }), window.addEventListener("pointerdown", this.onWindowPointerdown), document.addEventListener("resize", this.onWindowResize, { passive: !0 }), window.addEventListener("resize", this.onWindowResize, { passive: !0 });
  }
  cleanUpGlobalEventListeners() {
    document.removeEventListener("click", this.onDocumentClick, {
      capture: !0
    }), window.removeEventListener("pointerdown", this.onWindowPointerdown), document.removeEventListener("resize", this.onWindowResize), window.removeEventListener("resize", this.onWindowResize);
  }
  onCloseMenu() {
    this.close();
  }
  onDeactivateItems(t) {
    t.stopPropagation(), this.listController.onDeactivateItems();
  }
  onRequestActivation(t) {
    t.stopPropagation(), this.listController.onRequestActivation(t);
  }
  handleDeactivateTypeahead(t) {
    t.stopPropagation(), this.typeaheadActive = !1;
  }
  handleActivateTypeahead(t) {
    t.stopPropagation(), this.typeaheadActive = !0;
  }
  handleStayOpenOnFocusout(t) {
    t.stopPropagation(), this.stayOpenOnFocusout = !0;
  }
  handleCloseOnFocusout(t) {
    t.stopPropagation(), this.stayOpenOnFocusout = !1;
  }
  close() {
    this.open = !1, this.slotItems.forEach((e) => {
      var r;
      (r = e.close) == null || r.call(e);
    });
  }
  show() {
    this.open = !0;
  }
  /**
   * Activates the next item in the menu. If at the end of the menu, the first
   * item will be activated.
   *
   * @return The activated menu item or `null` if there are no items.
   */
  activateNextItem() {
    return this.listController.activateNextItem() ?? null;
  }
  /**
   * Activates the previous item in the menu. If at the start of the menu, the
   * last item will be activated.
   *
   * @return The activated menu item or `null` if there are no items.
   */
  activatePreviousItem() {
    return this.listController.activatePreviousItem() ?? null;
  }
  /**
   * Repositions the menu if it is open.
   *
   * Useful for the case where document or window-positioned menus have their
   * anchors moved while open.
   */
  reposition() {
    this.open && this.menuPositionController.position();
  }
}
g([
  pe(".menu")
], X.prototype, "surfaceEl", void 0);
g([
  pe("slot")
], X.prototype, "slotEl", void 0);
g([
  E()
], X.prototype, "anchor", void 0);
g([
  E()
], X.prototype, "positioning", void 0);
g([
  E({ type: Boolean })
], X.prototype, "quick", void 0);
g([
  E({ type: Boolean, attribute: "has-overflow" })
], X.prototype, "hasOverflow", void 0);
g([
  E({ type: Boolean, reflect: !0 })
], X.prototype, "open", void 0);
g([
  E({ type: Number, attribute: "x-offset" })
], X.prototype, "xOffset", void 0);
g([
  E({ type: Number, attribute: "y-offset" })
], X.prototype, "yOffset", void 0);
g([
  E({ type: Number, attribute: "typeahead-delay" })
], X.prototype, "typeaheadDelay", void 0);
g([
  E({ attribute: "anchor-corner" })
], X.prototype, "anchorCorner", void 0);
g([
  E({ attribute: "menu-corner" })
], X.prototype, "menuCorner", void 0);
g([
  E({ type: Boolean, attribute: "stay-open-on-outside-click" })
], X.prototype, "stayOpenOnOutsideClick", void 0);
g([
  E({ type: Boolean, attribute: "stay-open-on-focusout" })
], X.prototype, "stayOpenOnFocusout", void 0);
g([
  E({ type: Boolean, attribute: "skip-restore-focus" })
], X.prototype, "skipRestoreFocus", void 0);
g([
  E({ attribute: "default-focus" })
], X.prototype, "defaultFocus", void 0);
g([
  Me({ flatten: !0 })
], X.prototype, "slotItems", void 0);
g([
  re()
], X.prototype, "typeaheadActive", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const as = ne`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=menu-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Yi = class extends X {
};
Yi.styles = [as];
Yi = g([
  pi("md-menu")
], Yi);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ss extends ur {
  computeValidity(t) {
    return this.selectControl || (this.selectControl = document.createElement("select")), Fo(U`<option value=${t.value}></option>`, this.selectControl), this.selectControl.value = t.value, this.selectControl.required = t.required, {
      validity: this.selectControl.validity,
      validationMessage: this.selectControl.validationMessage
    };
  }
  equals(t, e) {
    return t.value === e.value && t.required === e.required;
  }
  copy({ value: t, required: e }) {
    return { value: t, required: e };
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ls(i) {
  const t = [];
  for (let e = 0; e < i.length; e++) {
    const r = i[e];
    r.selected && t.push([r, e]);
  }
  return t;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var Pr;
const ti = Symbol("value"), ds = Yo(hr(fr(mi(oe))));
class W extends ds {
  /**
   * The value of the currently selected option.
   *
   * Note: For SSR, set `[selected]` on the requested option and `displayText`
   * rather than setting `value` setting `value` will incur a DOM query.
   */
  get value() {
    return this[ti];
  }
  set value(t) {
    this.lastUserSetValue = t, this.select(t);
  }
  get options() {
    var t;
    return ((t = this.menu) == null ? void 0 : t.items) ?? [];
  }
  /**
   * The index of the currently selected option.
   *
   * Note: For SSR, set `[selected]` on the requested option and `displayText`
   * rather than setting `selectedIndex` setting `selectedIndex` will incur a
   * DOM query.
   */
  get selectedIndex() {
    const [t, e] = (this.getSelectedOptions() ?? [])[0] ?? [];
    return e ?? -1;
  }
  set selectedIndex(t) {
    this.lastUserSetSelectedIndex = t, this.selectIndex(t);
  }
  /**
   * Returns an array of selected options.
   *
   * NOTE: md-select only suppoprts single selection.
   */
  get selectedOptions() {
    return (this.getSelectedOptions() ?? []).map(([t]) => t);
  }
  get hasError() {
    return this.error || this.nativeError;
  }
  constructor() {
    super(), this.quick = !1, this.required = !1, this.errorText = "", this.label = "", this.supportingText = "", this.error = !1, this.menuPositioning = "popover", this.clampMenuWidth = !1, this.typeaheadDelay = Jo, this.hasLeadingIcon = !1, this.displayText = "", this.menuAlign = "start", this[Pr] = "", this.lastUserSetValue = null, this.lastUserSetSelectedIndex = null, this.lastSelectedOption = null, this.lastSelectedOptionRecords = [], this.nativeError = !1, this.nativeErrorText = "", this.focused = !1, this.open = !1, this.defaultFocus = Se.NONE, this.prevOpen = this.open, this.selectWidth = 0, this.addEventListener("focus", this.handleFocus.bind(this)), this.addEventListener("blur", this.handleBlur.bind(this));
  }
  /**
   * Selects an option given the value of the option, and updates MdSelect's
   * value.
   */
  select(t) {
    const e = this.options.find((r) => r.value === t);
    e && this.selectItem(e);
  }
  /**
   * Selects an option given the index of the option, and updates MdSelect's
   * value.
   */
  selectIndex(t) {
    const e = this.options[t];
    e && this.selectItem(e);
  }
  /**
   * Reset the select to its default value.
   */
  reset() {
    for (const t of this.options)
      t.selected = t.hasAttribute("selected");
    this.updateValueAndDisplayText(), this.nativeError = !1, this.nativeErrorText = "";
  }
  [(Pr = ti, ci)](t) {
    var r;
    t == null || t.preventDefault();
    const e = this.getErrorText();
    this.nativeError = !!t, this.nativeErrorText = this.validationMessage, e === this.getErrorText() && ((r = this.field) == null || r.reannounceError());
  }
  update(t) {
    if (this.hasUpdated || this.initUserSelection(), this.prevOpen !== this.open && this.open) {
      const e = this.getBoundingClientRect();
      this.selectWidth = e.width;
    }
    this.prevOpen = this.open, super.update(t);
  }
  render() {
    return U`
      <span
        class="select ${ke(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `;
  }
  async firstUpdated(t) {
    var e;
    await ((e = this.menu) == null ? void 0 : e.updateComplete), this.lastSelectedOptionRecords.length || this.initUserSelection(), !this.lastSelectedOptionRecords.length && !la && !this.options.length && setTimeout(() => {
      this.updateValueAndDisplayText();
    }), super.firstUpdated(t);
  }
  getRenderClasses() {
    return {
      disabled: this.disabled,
      error: this.error,
      open: this.open
    };
  }
  renderField() {
    return gi`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled ? "-1" : "0"}
          aria-label=${this.ariaLabel || O}
          aria-describedby="description"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          .focused=${this.focused || this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`;
  }
  renderFieldContent() {
    return [
      this.renderLeadingIcon(),
      this.renderLabel(),
      this.renderTrailingIcon()
    ];
  }
  renderLeadingIcon() {
    return U`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderTrailingIcon() {
    return U`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `;
  }
  renderLabel() {
    return U`<div id="label">${this.displayText || U`&nbsp;`}</div>`;
  }
  renderMenu() {
    const t = this.label || this.ariaLabel;
    return U`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${t || O}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${di({
      "--__menu-min-width": `${this.selectWidth}px`,
      "--__menu-max-width": this.clampMenuWidth ? `${this.selectWidth}px` : void 0
    })}
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${this.menuAlign === "start" ? "end-start" : "end-end"}
        .menuCorner=${this.menuAlign === "start" ? "start-start" : "start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`;
  }
  renderMenuContent() {
    return U`<slot></slot>`;
  }
  /**
   * Handles opening the select on keydown and typahead selection when the menu
   * is closed.
   */
  handleKeydown(t) {
    var n, d;
    if (this.open || this.disabled || !this.menu)
      return;
    const e = this.menu.typeaheadController, r = t.code === "Space" || t.code === "ArrowDown" || t.code === "ArrowUp" || t.code === "End" || t.code === "Home" || t.code === "Enter";
    if (!e.isTypingAhead && r) {
      switch (t.preventDefault(), this.open = !0, t.code) {
        case "Space":
        case "ArrowDown":
        case "Enter":
          this.defaultFocus = Se.NONE;
          break;
        case "End":
          this.defaultFocus = Se.LAST_ITEM;
          break;
        case "ArrowUp":
        case "Home":
          this.defaultFocus = Se.FIRST_ITEM;
          break;
      }
      return;
    }
    if (t.key.length === 1) {
      e.onKeydown(t), t.preventDefault();
      const { lastActiveRecord: l } = e;
      if (!l)
        return;
      (d = (n = this.labelEl) == null ? void 0 : n.setAttribute) == null || d.call(n, "aria-live", "polite"), this.selectItem(l[ge.ITEM]) && this.dispatchInteractionEvents();
    }
  }
  handleClick() {
    this.open = !this.open;
  }
  handleFocus() {
    this.focused = !0;
  }
  handleBlur() {
    this.focused = !1;
  }
  /**
   * Handles closing the menu when the focus leaves the select's subtree.
   */
  handleFocusout(t) {
    t.relatedTarget && Gi(t.relatedTarget, this) || (this.open = !1);
  }
  /**
   * Gets a list of all selected select options as a list item record array.
   *
   * @return An array of selected list option records.
   */
  getSelectedOptions() {
    if (!this.menu)
      return this.lastSelectedOptionRecords = [], null;
    const t = this.menu.items;
    return this.lastSelectedOptionRecords = ls(t), this.lastSelectedOptionRecords;
  }
  async getUpdateComplete() {
    var t;
    return await ((t = this.menu) == null ? void 0 : t.updateComplete), super.getUpdateComplete();
  }
  /**
   * Gets the selected options from the DOM, and updates the value and display
   * text to the first selected option's value and headline respectively.
   *
   * @return Whether or not the selected option has changed since last update.
   */
  updateValueAndDisplayText() {
    const t = this.getSelectedOptions() ?? [];
    let e = !1;
    if (t.length) {
      const [r] = t[0];
      e = this.lastSelectedOption !== r, this.lastSelectedOption = r, this[ti] = r.value, this.displayText = r.displayText;
    } else
      e = this.lastSelectedOption !== null, this.lastSelectedOption = null, this[ti] = "", this.displayText = "";
    return e;
  }
  /**
   * Focuses and activates the last selected item upon opening, and resets other
   * active items.
   */
  async handleOpening(t) {
    var n, d, l;
    if ((d = (n = this.labelEl) == null ? void 0 : n.removeAttribute) == null || d.call(n, "aria-live"), this.redispatchEvent(t), this.defaultFocus !== Se.NONE)
      return;
    const e = this.menu.items, r = (l = Ct(e)) == null ? void 0 : l.item;
    let [o] = this.lastSelectedOptionRecords[0] ?? [null];
    r && r !== o && (r.tabIndex = -1), o = o ?? e[0], o && (o.tabIndex = 0, o.focus());
  }
  redispatchEvent(t) {
    ar(this, t);
  }
  handleClosed(t) {
    this.open = !1, this.redispatchEvent(t);
  }
  /**
   * Determines the reason for closing, and updates the UI accordingly.
   */
  handleCloseMenu(t) {
    const e = t.detail.reason, r = t.detail.itemPath[0];
    this.open = !1;
    let o = !1;
    e.kind === "click-selection" ? o = this.selectItem(r) : e.kind === "keydown" && ts(e.key) ? o = this.selectItem(r) : (r.tabIndex = -1, r.blur()), o && this.dispatchInteractionEvents();
  }
  /**
   * Selects a given option, deselects other options, and updates the UI.
   *
   * @return Whether the last selected option has changed.
   */
  selectItem(t) {
    return (this.getSelectedOptions() ?? []).forEach(([r]) => {
      t !== r && (r.selected = !1);
    }), t.selected = !0, this.updateValueAndDisplayText();
  }
  /**
   * Handles updating selection when an option element requests selection via
   * property / attribute change.
   */
  handleRequestSelection(t) {
    const e = t.target;
    this.lastSelectedOptionRecords.some(([r]) => r === e) || this.selectItem(e);
  }
  /**
   * Handles updating selection when an option element requests deselection via
   * property / attribute change.
   */
  handleRequestDeselection(t) {
    const e = t.target;
    this.lastSelectedOptionRecords.some(([r]) => r === e) && this.updateValueAndDisplayText();
  }
  /**
   * Attempts to initialize the selected option from user-settable values like
   * SSR, setting `value`, or `selectedIndex` at startup.
   */
  initUserSelection() {
    this.lastUserSetValue && !this.lastSelectedOptionRecords.length ? this.select(this.lastUserSetValue) : this.lastUserSetSelectedIndex !== null && !this.lastSelectedOptionRecords.length ? this.selectIndex(this.lastUserSetSelectedIndex) : this.updateValueAndDisplayText();
  }
  handleIconChange() {
    this.hasLeadingIcon = this.leadingIcons.length > 0;
  }
  /**
   * Dispatches the `input` and `change` events.
   */
  dispatchInteractionEvents() {
    this.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0 }));
  }
  getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText;
  }
  [pt]() {
    return this.value;
  }
  formResetCallback() {
    this.reset();
  }
  formStateRestoreCallback(t) {
    this.value = t;
  }
  [Ot]() {
    return new ss(() => this);
  }
  [Dt]() {
    return this.field;
  }
}
ot(W);
W.shadowRootOptions = {
  ...oe.shadowRootOptions,
  delegatesFocus: !0
};
g([
  E({ type: Boolean })
], W.prototype, "quick", void 0);
g([
  E({ type: Boolean })
], W.prototype, "required", void 0);
g([
  E({ type: String, attribute: "error-text" })
], W.prototype, "errorText", void 0);
g([
  E()
], W.prototype, "label", void 0);
g([
  E({ type: String, attribute: "supporting-text" })
], W.prototype, "supportingText", void 0);
g([
  E({ type: Boolean, reflect: !0 })
], W.prototype, "error", void 0);
g([
  E({ attribute: "menu-positioning" })
], W.prototype, "menuPositioning", void 0);
g([
  E({ type: Boolean, attribute: "clamp-menu-width" })
], W.prototype, "clampMenuWidth", void 0);
g([
  E({ type: Number, attribute: "typeahead-delay" })
], W.prototype, "typeaheadDelay", void 0);
g([
  E({ type: Boolean, attribute: "has-leading-icon" })
], W.prototype, "hasLeadingIcon", void 0);
g([
  E({ attribute: "display-text" })
], W.prototype, "displayText", void 0);
g([
  E({ attribute: "menu-align" })
], W.prototype, "menuAlign", void 0);
g([
  E()
], W.prototype, "value", null);
g([
  E({ type: Number, attribute: "selected-index" })
], W.prototype, "selectedIndex", null);
g([
  re()
], W.prototype, "nativeError", void 0);
g([
  re()
], W.prototype, "nativeErrorText", void 0);
g([
  re()
], W.prototype, "focused", void 0);
g([
  re()
], W.prototype, "open", void 0);
g([
  re()
], W.prototype, "defaultFocus", void 0);
g([
  pe(".field")
], W.prototype, "field", void 0);
g([
  pe("md-menu")
], W.prototype, "menu", void 0);
g([
  pe("#label")
], W.prototype, "labelEl", void 0);
g([
  Me({ slot: "leading-icon", flatten: !0 })
], W.prototype, "leadingIcons", void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class cs extends W {
  constructor() {
    super(...arguments), this.fieldTag = et`md-filled-field`;
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const hs = ne`:host{--_text-field-active-indicator-color: var(--md-filled-select-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-select-text-field-active-indicator-height, 1px);--_text-field-container-color: var(--md-filled-select-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_text-field-container-shape-start-start: var( --md-filled-select-text-field-container-shape-start-start, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-start-end: var( --md-filled-select-text-field-container-shape-start-end, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-end-end: var( --md-filled-select-text-field-container-shape-end-end, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-container-shape-end-start: var( --md-filled-select-text-field-container-shape-end-start, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-disabled-active-indicator-color: var(--md-filled-select-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-active-indicator-height: var(--md-filled-select-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-select-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-select-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-container-opacity: var(--md-filled-select-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-filled-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-filled-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-filled-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-filled-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-select-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-select-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-filled-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-select-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-filled-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-select-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-state-layer-opacity: var(--md-filled-select-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-filled-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-select-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-select-text-field-focus-active-indicator-height, 3px);--_text-field-focus-input-text-color: var(--md-filled-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-filled-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-active-indicator-color: var(--md-filled-select-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-active-indicator-height: var(--md-filled-select-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-filled-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-filled-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-select-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-state-layer-opacity: var(--md-filled-select-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-filled-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-filled-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-filled-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-filled-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-filled-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-filled-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-filled-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-filled-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-filled-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-filled-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-filled-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-filled-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-select-text-field-leading-icon-size, 24px);--_text-field-supporting-text-color: var(--md-filled-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-filled-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-filled-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-filled-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-filled-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-filled-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-select-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_text-field-active-indicator-color);--md-filled-field-active-indicator-height: var(--_text-field-active-indicator-height);--md-filled-field-container-color: var(--_text-field-container-color);--md-filled-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-filled-field-content-color: var(--_text-field-input-text-color);--md-filled-field-content-font: var(--_text-field-input-text-font);--md-filled-field-content-line-height: var(--_text-field-input-text-line-height);--md-filled-field-content-size: var(--_text-field-input-text-size);--md-filled-field-content-weight: var(--_text-field-input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_text-field-disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_text-field-disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_text-field-disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_text-field-disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_text-field-disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_text-field-error-active-indicator-color);--md-filled-field-error-content-color: var(--_text-field-error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_text-field-error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_text-field-error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_text-field-error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_text-field-error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-filled-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_text-field-focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_text-field-focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_text-field-hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_text-field-hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_text-field-hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_text-field-hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_text-field-label-text-color);--md-filled-field-label-text-font: var(--_text-field-label-text-font);--md-filled-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-filled-field-label-text-size: var(--_text-field-label-text-size);--md-filled-field-label-text-weight: var(--_text-field-label-text-weight);--md-filled-field-leading-content-color: var(--_text-field-leading-icon-color);--md-filled-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-filled-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-filled-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-filled-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=filled-select-styles.css.map */
`;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const fs = ne`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;
class en extends cs {
}
en.styles = [fs, hs];
customElements.define("ew-filled-select", en);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const us = ne`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=menu-item-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ps {
  /**
   * @param host The MenuItem in which to attach this controller to.
   * @param config The object that configures this controller's behavior.
   */
  constructor(t, e) {
    this.host = t, this.internalTypeaheadText = null, this.onClick = () => {
      this.host.keepOpen || this.host.dispatchEvent(Dr(this.host, {
        kind: Fr.CLICK_SELECTION
      }));
    }, this.onKeydown = (r) => {
      if (this.host.href && r.code === "Enter") {
        const n = this.getInteractiveElement();
        n instanceof HTMLAnchorElement && n.click();
      }
      if (r.defaultPrevented)
        return;
      const o = r.code;
      this.host.keepOpen && o !== "Escape" || Xo(o) && (r.preventDefault(), this.host.dispatchEvent(Dr(this.host, {
        kind: Fr.KEYDOWN,
        key: o
      })));
    }, this.getHeadlineElements = e.getHeadlineElements, this.getSupportingTextElements = e.getSupportingTextElements, this.getDefaultElements = e.getDefaultElements, this.getInteractiveElement = e.getInteractiveElement, this.host.addController(this);
  }
  /**
   * The text that is selectable via typeahead. If not set, defaults to the
   * innerText of the item slotted into the `"headline"` slot, and if there are
   * no slotted elements into headline, then it checks the _default_ slot, and
   * then the `"supporting-text"` slot if nothing is in _default_.
   */
  get typeaheadText() {
    if (this.internalTypeaheadText !== null)
      return this.internalTypeaheadText;
    const t = this.getHeadlineElements(), e = [];
    return t.forEach((r) => {
      r.textContent && r.textContent.trim() && e.push(r.textContent.trim());
    }), e.length === 0 && this.getDefaultElements().forEach((r) => {
      r.textContent && r.textContent.trim() && e.push(r.textContent.trim());
    }), e.length === 0 && this.getSupportingTextElements().forEach((r) => {
      r.textContent && r.textContent.trim() && e.push(r.textContent.trim());
    }), e.join(" ");
  }
  /**
   * The recommended tag name to render as the list item.
   */
  get tagName() {
    switch (this.host.type) {
      case "link":
        return "a";
      case "button":
        return "button";
      default:
      case "menuitem":
      case "option":
        return "li";
    }
  }
  /**
   * The recommended role of the menu item.
   */
  get role() {
    return this.host.type === "option" ? "option" : "menuitem";
  }
  hostConnected() {
    this.host.toggleAttribute("md-menu-item", !0);
  }
  hostUpdate() {
    this.host.href && (this.host.type = "link");
  }
  /**
   * Use to set the typeaheadText when it changes.
   */
  setTypeaheadText(t) {
    this.internalTypeaheadText = t;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ms() {
  return new Event("request-selection", {
    bubbles: !0,
    composed: !0
  });
}
function gs() {
  return new Event("request-deselection", {
    bubbles: !0,
    composed: !0
  });
}
class vs {
  /**
   * The recommended role of the select option.
   */
  get role() {
    return this.menuItemController.role;
  }
  /**
   * The text that is selectable via typeahead. If not set, defaults to the
   * innerText of the item slotted into the `"headline"` slot, and if there are
   * no slotted elements into headline, then it checks the _default_ slot, and
   * then the `"supporting-text"` slot if nothing is in _default_.
   */
  get typeaheadText() {
    return this.menuItemController.typeaheadText;
  }
  setTypeaheadText(t) {
    this.menuItemController.setTypeaheadText(t);
  }
  /**
   * The text that is displayed in the select field when selected. If not set,
   * defaults to the textContent of the item slotted into the `"headline"` slot,
   * and if there are no slotted elements into headline, then it checks the
   * _default_ slot, and then the `"supporting-text"` slot if nothing is in
   * _default_.
   */
  get displayText() {
    return this.internalDisplayText !== null ? this.internalDisplayText : this.menuItemController.typeaheadText;
  }
  setDisplayText(t) {
    this.internalDisplayText = t;
  }
  /**
   * @param host The SelectOption in which to attach this controller to.
   * @param config The object that configures this controller's behavior.
   */
  constructor(t, e) {
    this.host = t, this.internalDisplayText = null, this.lastSelected = this.host.selected, this.firstUpdate = !0, this.onClick = () => {
      this.menuItemController.onClick();
    }, this.onKeydown = (r) => {
      this.menuItemController.onKeydown(r);
    }, this.menuItemController = new ps(t, e), t.addController(this);
  }
  hostUpdate() {
    this.lastSelected !== this.host.selected && (this.host.ariaSelected = this.host.selected ? "true" : "false");
  }
  hostUpdated() {
    this.lastSelected !== this.host.selected && !this.firstUpdate && (this.host.selected ? this.host.dispatchEvent(ms()) : this.host.dispatchEvent(gs())), this.lastSelected = this.host.selected, this.firstUpdate = !1;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class me extends oe {
  constructor() {
    super(...arguments), this.disabled = !1, this.isMenuItem = !0, this.selected = !1, this.value = "", this.type = "option", this.selectOptionController = new vs(this, {
      getHeadlineElements: () => this.headlineElements,
      getSupportingTextElements: () => this.supportingTextElements,
      getDefaultElements: () => this.defaultElements,
      getInteractiveElement: () => this.listItemRoot
    });
  }
  /**
   * The text that is selectable via typeahead. If not set, defaults to the
   * innerText of the item slotted into the `"headline"` slot.
   */
  get typeaheadText() {
    return this.selectOptionController.typeaheadText;
  }
  set typeaheadText(t) {
    this.selectOptionController.setTypeaheadText(t);
  }
  /**
   * The text that is displayed in the select field when selected. If not set,
   * defaults to the textContent of the item slotted into the `"headline"` slot.
   */
  get displayText() {
    return this.selectOptionController.displayText;
  }
  set displayText(t) {
    this.selectOptionController.setDisplayText(t);
  }
  render() {
    return this.renderListItem(U`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
  }
  /**
   * Renders the root list item.
   *
   * @param content the child content of the list item.
   */
  renderListItem(t) {
    return U`
      <li
        id="item"
        tabindex=${this.disabled ? -1 : 0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel || O}
        aria-selected=${this.ariaSelected || O}
        aria-checked=${this.ariaChecked || O}
        aria-expanded=${this.ariaExpanded || O}
        aria-haspopup=${this.ariaHasPopup || O}
        class="list-item ${ke(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${t}</li
      >
    `;
  }
  /**
   * Handles rendering of the ripple element.
   */
  renderRipple() {
    return U` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`;
  }
  /**
   * Handles rendering of the focus ring.
   */
  renderFocusRing() {
    return U` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
  }
  /**
   * Classes applied to the list item root.
   */
  getRenderClasses() {
    return {
      disabled: this.disabled,
      selected: this.selected
    };
  }
  /**
   * Handles rendering the headline and supporting text.
   */
  renderBody() {
    return U`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
  }
  focus() {
    var t;
    (t = this.listItemRoot) == null || t.focus();
  }
}
ot(me);
me.shadowRootOptions = {
  ...oe.shadowRootOptions,
  delegatesFocus: !0
};
g([
  E({ type: Boolean, reflect: !0 })
], me.prototype, "disabled", void 0);
g([
  E({ type: Boolean, attribute: "md-menu-item", reflect: !0 })
], me.prototype, "isMenuItem", void 0);
g([
  E({ type: Boolean })
], me.prototype, "selected", void 0);
g([
  E()
], me.prototype, "value", void 0);
g([
  pe(".list-item")
], me.prototype, "listItemRoot", void 0);
g([
  Me({ slot: "headline" })
], me.prototype, "headlineElements", void 0);
g([
  Me({ slot: "supporting-text" })
], me.prototype, "supportingTextElements", void 0);
g([
  fa({ slot: "" })
], me.prototype, "defaultElements", void 0);
g([
  E({ attribute: "typeahead-text" })
], me.prototype, "typeaheadText", null);
g([
  E({ attribute: "display-text" })
], me.prototype, "displayText", null);
class tn extends me {
}
tn.styles = [us];
customElements.define("ew-select-option", tn);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _t extends oe {
  constructor() {
    super(...arguments), this.value = 0, this.max = 1, this.indeterminate = !1, this.fourColor = !1;
  }
  render() {
    const { ariaLabel: t } = this;
    return U`
      <div
        class="progress ${ke(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t || O}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate ? O : this.value}
        >${this.renderIndicator()}</div
      >
    `;
  }
  getRenderClasses() {
    return {
      indeterminate: this.indeterminate,
      "four-color": this.fourColor
    };
  }
}
ot(_t);
g([
  E({ type: Number })
], _t.prototype, "value", void 0);
g([
  E({ type: Number })
], _t.prototype, "max", void 0);
g([
  E({ type: Boolean })
], _t.prototype, "indeterminate", void 0);
g([
  E({ type: Boolean, attribute: "four-color" })
], _t.prototype, "fourColor", void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _s extends _t {
  renderIndicator() {
    return this.indeterminate ? this.renderIndeterminateContainer() : this.renderDeterminateContainer();
  }
  // Determinate mode is rendered with an svg so the progress arc can be
  // easily animated via stroke-dashoffset.
  renderDeterminateContainer() {
    const t = (1 - this.value / this.max) * 100;
    return U`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `;
  }
  // Indeterminate mode rendered with 2 bordered-divs. The borders are
  // clipped into half circles by their containers. The divs are then carefully
  // animated to produce changes to the spinner arc size.
  // This approach has 4.5x the FPS of rendering via svg on Chrome 111.
  // See https://lit.dev/playground/#gist=febb773565272f75408ab06a0eb49746.
  renderIndeterminateContainer() {
    return U` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`;
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const ys = ne`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}/*# sourceMappingURL=circular-progress-styles.css.map */
`;
class rn extends _s {
}
rn.styles = [ys];
customElements.define("ew-circular-progress", rn);
class vi extends lr {
  render() {
    return z`
      <div>
        <ew-circular-progress
          active
          ?indeterminate=${this.progress === void 0}
          .value=${this.progress !== void 0 ? this.progress / 100 : void 0}
        ></ew-circular-progress>
        ${this.progress !== void 0 ? z`<div>${this.progress}%</div>` : ""}
      </div>
      ${this.label}
    `;
  }
}
vi.styles = sr`
    :host {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    ew-circular-progress {
      margin-bottom: 16px;
    }
  `;
g([
  Vt()
], vi.prototype, "label", void 0);
g([
  Vt()
], vi.prototype, "progress", void 0);
customElements.define("ewt-page-progress", vi);
class _i extends lr {
  render() {
    return z`
      <div class="icon">${this.icon}</div>
      ${this.label}
    `;
  }
}
_i.styles = sr`
    :host {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .icon {
      font-size: 50px;
      line-height: 80px;
      color: black;
    }
  `;
g([
  Vt()
], _i.prototype, "icon", void 0);
g([
  Vt()
], _i.prototype, "label", void 0);
customElements.define("ewt-page-message", _i);
const bs = nt`
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </svg>
`, xs = nt`
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
    />
  </svg>
`, Mr = nt`
  <svg slot="start" viewBox="0 0 24 24">
    <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
  </svg>
`, ws = nt`
  <svg slot="start" viewBox="0 0 24 24">
    <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" />
  </svg>
`, zr = nt`
  <svg slot="start" viewBox="0 0 24 24">
    <path d="M20,19V7H4V19H20M20,3A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5C2,3.89 2.9,3 4,3H20M13,17V15H18V17H13M9.58,13L5.57,9H8.4L11.7,12.3C12.09,12.69 12.09,13.33 11.7,13.72L8.42,17H5.59L9.58,13Z" />
  </svg>
`, Nr = nt`
  <svg slot="start" viewBox="0 0 24 24">
  <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </svg>
`, Hr = nt`
  <svg slot="start" viewBox="0 0 24 24">
    <path d="m12.151 1.5882c-.3262 0-.6523.1291-.8996.3867l-8.3848 8.7354c-.0619.0644-.1223.1368-.1807.2154-.0588.0789-.1151.1638-.1688.2534-.2593.4325-.4552.9749-.5232 1.4555-.0026.018-.0076.0369-.0094.0548-.0121.0987-.0184.1944-.0184.2857v8.0124a1.2731 1.2731 0 001.2731 1.2731h7.8313l-3.4484-3.593a1.7399 1.7399 0 111.0803-1.125l2.6847 2.7972v-10.248a1.7399 1.7399 0 111.5276-0v7.187l2.6702-2.782a1.7399 1.7399 0 111.0566 1.1505l-3.7269 3.8831v2.7299h8.174a1.2471 1.2471 0 001.2471-1.2471v-8.0375c0-.0912-.0059-.1868-.0184-.2855-.0603-.4935-.2636-1.0617-.5326-1.5105-.0537-.0896-.1101-.1745-.1684-.253-.0588-.079-.1191-.1513-.181-.2158l-8.3848-8.7363c-.2473-.2577-.5735-.3866-.8995-.3864" />
  </svg>
`, Es = [
  73,
  77,
  80,
  82,
  79,
  86,
  1
  // protocol version
];
var ut;
(function(i) {
  i[i.CURRENT_STATE = 1] = "CURRENT_STATE", i[i.ERROR_STATE = 2] = "ERROR_STATE", i[i.RPC = 3] = "RPC", i[i.RPC_RESULT = 4] = "RPC_RESULT";
})(ut || (ut = {}));
var Ve;
(function(i) {
  i[i.READY = 2] = "READY", i[i.PROVISIONING = 3] = "PROVISIONING", i[i.PROVISIONED = 4] = "PROVISIONED";
})(Ve || (Ve = {}));
const Ss = {
  0: "NO_ERROR",
  1: "INVALID_RPC_PACKET",
  2: "UNKNOWN_RPC_COMMAND",
  3: "UNABLE_TO_CONNECT",
  254: "TIMEOUT",
  255: "UNKNOWN_ERROR"
};
class on extends Error {
  constructor() {
    super("Port is not ready");
  }
}
const ks = (i) => new Promise((t) => setTimeout(t, i)), As = (i, t = 2) => {
  let e = i.toString(16).toUpperCase();
  return e.startsWith("-") ? "-0x" + e.substring(1).padStart(t, "0") : "0x" + e.padStart(t, "0");
}, Zr = (i) => "[" + i.map((t) => As(t)).join(", ") + "]";
class Is extends EventTarget {
  constructor(t, e) {
    if (super(), this.port = t, this.logger = e, this.error = 0, t.readable === null)
      throw new Error("Port is not readable");
    if (t.writable === null)
      throw new Error("Port is not writable");
  }
  /**
   * Detect Improv Serial, fetch the state and return the next URL if provisioned.
   * @param timeout Timeout in ms to wait for the device to respond. Default to 1000ms.
   */
  async initialize(t = 1e3) {
    if (this.logger.log("Initializing Improv Serial"), this._processInput(), await ks(1e3), this._reader === void 0)
      throw new on();
    try {
      await new Promise(async (e, r) => {
        setTimeout(() => r(new Error("Improv Wi-Fi Serial not detected")), t), await this.requestCurrentState(), e(void 0);
      }), await this.requestInfo();
    } catch (e) {
      throw await this.close(), e;
    }
    return this.info;
  }
  async close() {
    this._reader && await new Promise((t) => {
      this._reader.cancel(), this.addEventListener("disconnect", t, { once: !0 });
    });
  }
  /**
   * This command will trigger at least one packet,
   * the Current State and if already provisioned,
   * the same response you would get if device provisioning
   * was successful (see below).
   */
  async requestCurrentState() {
    let t;
    try {
      await new Promise(async (r, o) => {
        this.addEventListener("state-changed", r, { once: !0 });
        const n = (d) => {
          this.removeEventListener("state-changed", r), o(d);
        };
        t = this._sendRPCWithResponse(2, []), t.catch(n);
      });
    } catch (r) {
      throw this._rpcFeedback = void 0, new Error(`Error fetching current state: ${r}`);
    }
    if (this.state !== Ve.PROVISIONED) {
      this._rpcFeedback = void 0;
      return;
    }
    const e = await t;
    this.nextUrl = e[0];
  }
  async requestInfo(t) {
    const e = await this._sendRPCWithResponse(3, [], t);
    this.info = {
      firmware: e[0],
      version: e[1],
      name: e[3],
      chipFamily: e[2]
    };
  }
  async provision(t, e, r) {
    const o = new TextEncoder(), n = o.encode(t), d = o.encode(e), l = [
      n.length,
      ...n,
      d.length,
      ...d
    ], p = await this._sendRPCWithResponse(1, l, r);
    this.nextUrl = p[0];
  }
  async scan() {
    const e = (await this._sendRPCWithMultipleResponses(4, [])).map(([r, o, n]) => ({
      name: r,
      rssi: parseInt(o),
      secured: n === "YES"
    }));
    return e.sort((r, o) => r.name.toLocaleLowerCase().localeCompare(o.name.toLocaleLowerCase())), e;
  }
  _sendRPC(t, e) {
    this.writePacketToStream(ut.RPC, [
      t,
      e.length,
      ...e
    ]);
  }
  async _sendRPCWithResponse(t, e, r) {
    if (this._rpcFeedback)
      throw new Error("Only 1 RPC command that requires feedback can be active");
    return await this._awaitRPCResultWithTimeout(new Promise((o, n) => {
      this._rpcFeedback = { command: t, resolve: o, reject: n }, this._sendRPC(t, e);
    }), r);
  }
  async _sendRPCWithMultipleResponses(t, e, r) {
    if (this._rpcFeedback)
      throw new Error("Only 1 RPC command that requires feedback can be active");
    return await this._awaitRPCResultWithTimeout(new Promise((o, n) => {
      this._rpcFeedback = {
        command: t,
        resolve: o,
        reject: n,
        receivedData: []
      }, this._sendRPC(t, e);
    }), r);
  }
  async _awaitRPCResultWithTimeout(t, e) {
    return e ? await new Promise((r, o) => {
      const n = setTimeout(() => this._setError(
        254
        /* ImprovSerialErrorState.TIMEOUT */
      ), e);
      t.finally(() => clearTimeout(n)), t.then(r, o);
    }) : await t;
  }
  async _processInput() {
    this.logger.debug("Starting read loop"), this._reader = this.port.readable.getReader();
    try {
      let t = [], e, r = 0;
      for (; ; ) {
        const { value: o, done: n } = await this._reader.read();
        if (n)
          break;
        if (!(!o || o.length === 0))
          for (const d of o) {
            if (e === !1) {
              d === 10 && (e = void 0);
              continue;
            }
            if (e === !0) {
              t.push(d), t.length === r && (this._handleIncomingPacket(t), e = void 0, t = []);
              continue;
            }
            if (d === 10) {
              t = [];
              continue;
            }
            if (t.push(d), t.length !== 9)
              continue;
            if (e = String.fromCharCode(...t.slice(0, 6)) === "IMPROV", !e) {
              t = [];
              continue;
            }
            r = 9 + t[8] + 1;
          }
      }
    } catch (t) {
      this.logger.error("Error while reading serial port", t);
    } finally {
      this._reader.releaseLock(), this._reader = void 0;
    }
    this.logger.debug("Finished read loop"), this.dispatchEvent(new Event("disconnect"));
  }
  _handleIncomingPacket(t) {
    const e = t.slice(6), r = e[0], o = e[1], n = e[2], d = e.slice(3, 3 + n);
    if (this.logger.debug("PROCESS", {
      version: r,
      packetType: o,
      packetLength: n,
      data: Zr(d)
    }), r !== 1) {
      this.logger.error("Received unsupported version", r);
      return;
    }
    let l = e[3 + n], p = 0;
    for (let h = 0; h < t.length - 1; h++)
      p += t[h];
    if (p = p & 255, p !== l) {
      this.logger.error(`Received invalid checksum ${l}. Expected ${p}`);
      return;
    }
    if (o === ut.CURRENT_STATE)
      this.state = d[0], this.dispatchEvent(new CustomEvent("state-changed", {
        detail: this.state
      }));
    else if (o === ut.ERROR_STATE)
      this._setError(d[0]);
    else if (o === ut.RPC_RESULT) {
      if (!this._rpcFeedback) {
        this.logger.error("Received result while not waiting for one");
        return;
      }
      const h = d[0];
      if (h !== this._rpcFeedback.command) {
        this.logger.error(`Received result for command ${h} but expected ${this._rpcFeedback.command}`);
        return;
      }
      const u = [], w = d[1];
      let y = 2;
      for (; y < 2 + w; )
        u.push(String.fromCodePoint(...d.slice(y + 1, y + d[y] + 1))), y += d[y] + 1;
      "receivedData" in this._rpcFeedback ? u.length > 0 ? this._rpcFeedback.receivedData.push(u) : (this._rpcFeedback.resolve(this._rpcFeedback.receivedData), this._rpcFeedback = void 0) : (this._rpcFeedback.resolve(u), this._rpcFeedback = void 0);
    } else
      this.logger.error("Unable to handle packet", e);
  }
  /**
   * Add header + checksum and write packet to stream
   */
  async writePacketToStream(t, e) {
    const r = new Uint8Array([
      ...Es,
      t,
      e.length,
      ...e,
      0,
      0
      // Will be newline
    ]);
    r[r.length - 2] = r.reduce((n, d) => n + d, 0) & 255, r[r.length - 1] = 10, this.logger.debug("Writing to stream:", Zr(new Array(...r)));
    const o = this.port.writable.getWriter();
    await o.write(r);
    try {
      o.releaseLock();
    } catch (n) {
      console.error("Ignoring release lock error", n);
    }
  }
  // Error is either received from device or is a timeout
  _setError(t) {
    this.error = t, t > 0 && this._rpcFeedback && (this._rpcFeedback.reject(Ss[t] || `UNKNOWN_ERROR (${t})`), this._rpcFeedback = void 0), this.dispatchEvent(new CustomEvent("error-changed", {
      detail: this.error
    }));
  }
}
class ae extends Error {
}
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Ts = 4, Vr = 0, Wr = 1, Rs = 2;
function yt(i) {
  let t = i.length;
  for (; --t >= 0; )
    i[t] = 0;
}
const Cs = 0, nn = 1, $s = 2, Bs = 3, Ls = 258, pr = 29, Wt = 256, Ft = Wt + 1 + pr, mt = 30, mr = 19, an = 2 * Ft + 1, Xe = 15, Ti = 16, Os = 7, gr = 256, sn = 16, ln = 17, dn = 18, ji = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), si = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), Ds = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), cn = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Fs = 512, Fe = new Array((Ft + 2) * 2);
yt(Fe);
const $t = new Array(mt * 2);
yt($t);
const Ut = new Array(Fs);
yt(Ut);
const Pt = new Array(Ls - Bs + 1);
yt(Pt);
const vr = new Array(pr);
yt(vr);
const hi = new Array(mt);
yt(hi);
function Ri(i, t, e, r, o) {
  this.static_tree = i, this.extra_bits = t, this.extra_base = e, this.elems = r, this.max_length = o, this.has_stree = i && i.length;
}
let hn, fn, un;
function Ci(i, t) {
  this.dyn_tree = i, this.max_code = 0, this.stat_desc = t;
}
const pn = (i) => i < 256 ? Ut[i] : Ut[256 + (i >>> 7)], Mt = (i, t) => {
  i.pending_buf[i.pending++] = t & 255, i.pending_buf[i.pending++] = t >>> 8 & 255;
}, ce = (i, t, e) => {
  i.bi_valid > Ti - e ? (i.bi_buf |= t << i.bi_valid & 65535, Mt(i, i.bi_buf), i.bi_buf = t >> Ti - i.bi_valid, i.bi_valid += e - Ti) : (i.bi_buf |= t << i.bi_valid & 65535, i.bi_valid += e);
}, Re = (i, t, e) => {
  ce(
    i,
    e[t * 2],
    e[t * 2 + 1]
    /*.Len*/
  );
}, mn = (i, t) => {
  let e = 0;
  do
    e |= i & 1, i >>>= 1, e <<= 1;
  while (--t > 0);
  return e >>> 1;
}, Us = (i) => {
  i.bi_valid === 16 ? (Mt(i, i.bi_buf), i.bi_buf = 0, i.bi_valid = 0) : i.bi_valid >= 8 && (i.pending_buf[i.pending++] = i.bi_buf & 255, i.bi_buf >>= 8, i.bi_valid -= 8);
}, Ps = (i, t) => {
  const e = t.dyn_tree, r = t.max_code, o = t.stat_desc.static_tree, n = t.stat_desc.has_stree, d = t.stat_desc.extra_bits, l = t.stat_desc.extra_base, p = t.stat_desc.max_length;
  let h, u, w, y, v, S, I = 0;
  for (y = 0; y <= Xe; y++)
    i.bl_count[y] = 0;
  for (e[i.heap[i.heap_max] * 2 + 1] = 0, h = i.heap_max + 1; h < an; h++)
    u = i.heap[h], y = e[e[u * 2 + 1] * 2 + 1] + 1, y > p && (y = p, I++), e[u * 2 + 1] = y, !(u > r) && (i.bl_count[y]++, v = 0, u >= l && (v = d[u - l]), S = e[u * 2], i.opt_len += S * (y + v), n && (i.static_len += S * (o[u * 2 + 1] + v)));
  if (I !== 0) {
    do {
      for (y = p - 1; i.bl_count[y] === 0; )
        y--;
      i.bl_count[y]--, i.bl_count[y + 1] += 2, i.bl_count[p]--, I -= 2;
    } while (I > 0);
    for (y = p; y !== 0; y--)
      for (u = i.bl_count[y]; u !== 0; )
        w = i.heap[--h], !(w > r) && (e[w * 2 + 1] !== y && (i.opt_len += (y - e[w * 2 + 1]) * e[w * 2], e[w * 2 + 1] = y), u--);
  }
}, gn = (i, t, e) => {
  const r = new Array(Xe + 1);
  let o = 0, n, d;
  for (n = 1; n <= Xe; n++)
    o = o + e[n - 1] << 1, r[n] = o;
  for (d = 0; d <= t; d++) {
    let l = i[d * 2 + 1];
    l !== 0 && (i[d * 2] = mn(r[l]++, l));
  }
}, Ms = () => {
  let i, t, e, r, o;
  const n = new Array(Xe + 1);
  for (e = 0, r = 0; r < pr - 1; r++)
    for (vr[r] = e, i = 0; i < 1 << ji[r]; i++)
      Pt[e++] = r;
  for (Pt[e - 1] = r, o = 0, r = 0; r < 16; r++)
    for (hi[r] = o, i = 0; i < 1 << si[r]; i++)
      Ut[o++] = r;
  for (o >>= 7; r < mt; r++)
    for (hi[r] = o << 7, i = 0; i < 1 << si[r] - 7; i++)
      Ut[256 + o++] = r;
  for (t = 0; t <= Xe; t++)
    n[t] = 0;
  for (i = 0; i <= 143; )
    Fe[i * 2 + 1] = 8, i++, n[8]++;
  for (; i <= 255; )
    Fe[i * 2 + 1] = 9, i++, n[9]++;
  for (; i <= 279; )
    Fe[i * 2 + 1] = 7, i++, n[7]++;
  for (; i <= 287; )
    Fe[i * 2 + 1] = 8, i++, n[8]++;
  for (gn(Fe, Ft + 1, n), i = 0; i < mt; i++)
    $t[i * 2 + 1] = 5, $t[i * 2] = mn(i, 5);
  hn = new Ri(Fe, ji, Wt + 1, Ft, Xe), fn = new Ri($t, si, 0, mt, Xe), un = new Ri(new Array(0), Ds, 0, mr, Os);
}, vn = (i) => {
  let t;
  for (t = 0; t < Ft; t++)
    i.dyn_ltree[t * 2] = 0;
  for (t = 0; t < mt; t++)
    i.dyn_dtree[t * 2] = 0;
  for (t = 0; t < mr; t++)
    i.bl_tree[t * 2] = 0;
  i.dyn_ltree[gr * 2] = 1, i.opt_len = i.static_len = 0, i.sym_next = i.matches = 0;
}, _n = (i) => {
  i.bi_valid > 8 ? Mt(i, i.bi_buf) : i.bi_valid > 0 && (i.pending_buf[i.pending++] = i.bi_buf), i.bi_buf = 0, i.bi_valid = 0;
}, qr = (i, t, e, r) => {
  const o = t * 2, n = e * 2;
  return i[o] < i[n] || i[o] === i[n] && r[t] <= r[e];
}, $i = (i, t, e) => {
  const r = i.heap[e];
  let o = e << 1;
  for (; o <= i.heap_len && (o < i.heap_len && qr(t, i.heap[o + 1], i.heap[o], i.depth) && o++, !qr(t, r, i.heap[o], i.depth)); )
    i.heap[e] = i.heap[o], e = o, o <<= 1;
  i.heap[e] = r;
}, Kr = (i, t, e) => {
  let r, o, n = 0, d, l;
  if (i.sym_next !== 0)
    do
      r = i.pending_buf[i.sym_buf + n++] & 255, r += (i.pending_buf[i.sym_buf + n++] & 255) << 8, o = i.pending_buf[i.sym_buf + n++], r === 0 ? Re(i, o, t) : (d = Pt[o], Re(i, d + Wt + 1, t), l = ji[d], l !== 0 && (o -= vr[d], ce(i, o, l)), r--, d = pn(r), Re(i, d, e), l = si[d], l !== 0 && (r -= hi[d], ce(i, r, l)));
    while (n < i.sym_next);
  Re(i, gr, t);
}, Xi = (i, t) => {
  const e = t.dyn_tree, r = t.stat_desc.static_tree, o = t.stat_desc.has_stree, n = t.stat_desc.elems;
  let d, l, p = -1, h;
  for (i.heap_len = 0, i.heap_max = an, d = 0; d < n; d++)
    e[d * 2] !== 0 ? (i.heap[++i.heap_len] = p = d, i.depth[d] = 0) : e[d * 2 + 1] = 0;
  for (; i.heap_len < 2; )
    h = i.heap[++i.heap_len] = p < 2 ? ++p : 0, e[h * 2] = 1, i.depth[h] = 0, i.opt_len--, o && (i.static_len -= r[h * 2 + 1]);
  for (t.max_code = p, d = i.heap_len >> 1; d >= 1; d--)
    $i(i, e, d);
  h = n;
  do
    d = i.heap[
      1
      /*SMALLEST*/
    ], i.heap[
      1
      /*SMALLEST*/
    ] = i.heap[i.heap_len--], $i(
      i,
      e,
      1
      /*SMALLEST*/
    ), l = i.heap[
      1
      /*SMALLEST*/
    ], i.heap[--i.heap_max] = d, i.heap[--i.heap_max] = l, e[h * 2] = e[d * 2] + e[l * 2], i.depth[h] = (i.depth[d] >= i.depth[l] ? i.depth[d] : i.depth[l]) + 1, e[d * 2 + 1] = e[l * 2 + 1] = h, i.heap[
      1
      /*SMALLEST*/
    ] = h++, $i(
      i,
      e,
      1
      /*SMALLEST*/
    );
  while (i.heap_len >= 2);
  i.heap[--i.heap_max] = i.heap[
    1
    /*SMALLEST*/
  ], Ps(i, t), gn(e, p, i.bl_count);
}, Gr = (i, t, e) => {
  let r, o = -1, n, d = t[0 * 2 + 1], l = 0, p = 7, h = 4;
  for (d === 0 && (p = 138, h = 3), t[(e + 1) * 2 + 1] = 65535, r = 0; r <= e; r++)
    n = d, d = t[(r + 1) * 2 + 1], !(++l < p && n === d) && (l < h ? i.bl_tree[n * 2] += l : n !== 0 ? (n !== o && i.bl_tree[n * 2]++, i.bl_tree[sn * 2]++) : l <= 10 ? i.bl_tree[ln * 2]++ : i.bl_tree[dn * 2]++, l = 0, o = n, d === 0 ? (p = 138, h = 3) : n === d ? (p = 6, h = 3) : (p = 7, h = 4));
}, Yr = (i, t, e) => {
  let r, o = -1, n, d = t[0 * 2 + 1], l = 0, p = 7, h = 4;
  for (d === 0 && (p = 138, h = 3), r = 0; r <= e; r++)
    if (n = d, d = t[(r + 1) * 2 + 1], !(++l < p && n === d)) {
      if (l < h)
        do
          Re(i, n, i.bl_tree);
        while (--l !== 0);
      else
        n !== 0 ? (n !== o && (Re(i, n, i.bl_tree), l--), Re(i, sn, i.bl_tree), ce(i, l - 3, 2)) : l <= 10 ? (Re(i, ln, i.bl_tree), ce(i, l - 3, 3)) : (Re(i, dn, i.bl_tree), ce(i, l - 11, 7));
      l = 0, o = n, d === 0 ? (p = 138, h = 3) : n === d ? (p = 6, h = 3) : (p = 7, h = 4);
    }
}, zs = (i) => {
  let t;
  for (Gr(i, i.dyn_ltree, i.l_desc.max_code), Gr(i, i.dyn_dtree, i.d_desc.max_code), Xi(i, i.bl_desc), t = mr - 1; t >= 3 && i.bl_tree[cn[t] * 2 + 1] === 0; t--)
    ;
  return i.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
}, Ns = (i, t, e, r) => {
  let o;
  for (ce(i, t - 257, 5), ce(i, e - 1, 5), ce(i, r - 4, 4), o = 0; o < r; o++)
    ce(i, i.bl_tree[cn[o] * 2 + 1], 3);
  Yr(i, i.dyn_ltree, t - 1), Yr(i, i.dyn_dtree, e - 1);
}, Hs = (i) => {
  let t = 4093624447, e;
  for (e = 0; e <= 31; e++, t >>>= 1)
    if (t & 1 && i.dyn_ltree[e * 2] !== 0)
      return Vr;
  if (i.dyn_ltree[9 * 2] !== 0 || i.dyn_ltree[10 * 2] !== 0 || i.dyn_ltree[13 * 2] !== 0)
    return Wr;
  for (e = 32; e < Wt; e++)
    if (i.dyn_ltree[e * 2] !== 0)
      return Wr;
  return Vr;
};
let jr = !1;
const Zs = (i) => {
  jr || (Ms(), jr = !0), i.l_desc = new Ci(i.dyn_ltree, hn), i.d_desc = new Ci(i.dyn_dtree, fn), i.bl_desc = new Ci(i.bl_tree, un), i.bi_buf = 0, i.bi_valid = 0, vn(i);
}, yn = (i, t, e, r) => {
  ce(i, (Cs << 1) + (r ? 1 : 0), 3), _n(i), Mt(i, e), Mt(i, ~e), e && i.pending_buf.set(i.window.subarray(t, t + e), i.pending), i.pending += e;
}, Vs = (i) => {
  ce(i, nn << 1, 3), Re(i, gr, Fe), Us(i);
}, Ws = (i, t, e, r) => {
  let o, n, d = 0;
  i.level > 0 ? (i.strm.data_type === Rs && (i.strm.data_type = Hs(i)), Xi(i, i.l_desc), Xi(i, i.d_desc), d = zs(i), o = i.opt_len + 3 + 7 >>> 3, n = i.static_len + 3 + 7 >>> 3, n <= o && (o = n)) : o = n = e + 5, e + 4 <= o && t !== -1 ? yn(i, t, e, r) : i.strategy === Ts || n === o ? (ce(i, (nn << 1) + (r ? 1 : 0), 3), Kr(i, Fe, $t)) : (ce(i, ($s << 1) + (r ? 1 : 0), 3), Ns(i, i.l_desc.max_code + 1, i.d_desc.max_code + 1, d + 1), Kr(i, i.dyn_ltree, i.dyn_dtree)), vn(i), r && _n(i);
}, qs = (i, t, e) => (i.pending_buf[i.sym_buf + i.sym_next++] = t, i.pending_buf[i.sym_buf + i.sym_next++] = t >> 8, i.pending_buf[i.sym_buf + i.sym_next++] = e, t === 0 ? i.dyn_ltree[e * 2]++ : (i.matches++, t--, i.dyn_ltree[(Pt[e] + Wt + 1) * 2]++, i.dyn_dtree[pn(t) * 2]++), i.sym_next === i.sym_end);
var Ks = Zs, Gs = yn, Ys = Ws, js = qs, Xs = Vs, Js = {
  _tr_init: Ks,
  _tr_stored_block: Gs,
  _tr_flush_block: Ys,
  _tr_tally: js,
  _tr_align: Xs
};
const Qs = (i, t, e, r) => {
  let o = i & 65535 | 0, n = i >>> 16 & 65535 | 0, d = 0;
  for (; e !== 0; ) {
    d = e > 2e3 ? 2e3 : e, e -= d;
    do
      o = o + t[r++] | 0, n = n + o | 0;
    while (--d);
    o %= 65521, n %= 65521;
  }
  return o | n << 16 | 0;
};
var zt = Qs;
const el = () => {
  let i, t = [];
  for (var e = 0; e < 256; e++) {
    i = e;
    for (var r = 0; r < 8; r++)
      i = i & 1 ? 3988292384 ^ i >>> 1 : i >>> 1;
    t[e] = i;
  }
  return t;
}, tl = new Uint32Array(el()), il = (i, t, e, r) => {
  const o = tl, n = r + e;
  i ^= -1;
  for (let d = r; d < n; d++)
    i = i >>> 8 ^ o[(i ^ t[d]) & 255];
  return i ^ -1;
};
var ee = il, tt = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, bt = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: rl, _tr_stored_block: Ji, _tr_flush_block: ol, _tr_tally: Ke, _tr_align: nl } = Js, {
  Z_NO_FLUSH: Ge,
  Z_PARTIAL_FLUSH: al,
  Z_FULL_FLUSH: sl,
  Z_FINISH: ye,
  Z_BLOCK: Xr,
  Z_OK: te,
  Z_STREAM_END: Jr,
  Z_STREAM_ERROR: $e,
  Z_DATA_ERROR: ll,
  Z_BUF_ERROR: Bi,
  Z_DEFAULT_COMPRESSION: dl,
  Z_FILTERED: cl,
  Z_HUFFMAN_ONLY: ii,
  Z_RLE: hl,
  Z_FIXED: fl,
  Z_DEFAULT_STRATEGY: ul,
  Z_UNKNOWN: pl,
  Z_DEFLATED: yi
} = bt, ml = 9, gl = 15, vl = 8, _l = 29, yl = 256, Qi = yl + 1 + _l, bl = 30, xl = 19, wl = 2 * Qi + 1, El = 15, H = 3, qe = 258, Be = qe + H + 1, Sl = 32, gt = 42, _r = 57, er = 69, tr = 73, ir = 91, rr = 103, Je = 113, Tt = 666, se = 1, xt = 2, it = 3, wt = 4, kl = 3, Qe = (i, t) => (i.msg = tt[t], t), Qr = (i) => i * 2 - (i > 4 ? 9 : 0), We = (i) => {
  let t = i.length;
  for (; --t >= 0; )
    i[t] = 0;
}, Al = (i) => {
  let t, e, r, o = i.w_size;
  t = i.hash_size, r = t;
  do
    e = i.head[--r], i.head[r] = e >= o ? e - o : 0;
  while (--t);
  t = o, r = t;
  do
    e = i.prev[--r], i.prev[r] = e >= o ? e - o : 0;
  while (--t);
};
let Il = (i, t, e) => (t << i.hash_shift ^ e) & i.hash_mask, Ye = Il;
const fe = (i) => {
  const t = i.state;
  let e = t.pending;
  e > i.avail_out && (e = i.avail_out), e !== 0 && (i.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + e), i.next_out), i.next_out += e, t.pending_out += e, i.total_out += e, i.avail_out -= e, t.pending -= e, t.pending === 0 && (t.pending_out = 0));
}, ue = (i, t) => {
  ol(i, i.block_start >= 0 ? i.block_start : -1, i.strstart - i.block_start, t), i.block_start = i.strstart, fe(i.strm);
}, Z = (i, t) => {
  i.pending_buf[i.pending++] = t;
}, kt = (i, t) => {
  i.pending_buf[i.pending++] = t >>> 8 & 255, i.pending_buf[i.pending++] = t & 255;
}, or = (i, t, e, r) => {
  let o = i.avail_in;
  return o > r && (o = r), o === 0 ? 0 : (i.avail_in -= o, t.set(i.input.subarray(i.next_in, i.next_in + o), e), i.state.wrap === 1 ? i.adler = zt(i.adler, t, o, e) : i.state.wrap === 2 && (i.adler = ee(i.adler, t, o, e)), i.next_in += o, i.total_in += o, o);
}, bn = (i, t) => {
  let e = i.max_chain_length, r = i.strstart, o, n, d = i.prev_length, l = i.nice_match;
  const p = i.strstart > i.w_size - Be ? i.strstart - (i.w_size - Be) : 0, h = i.window, u = i.w_mask, w = i.prev, y = i.strstart + qe;
  let v = h[r + d - 1], S = h[r + d];
  i.prev_length >= i.good_match && (e >>= 2), l > i.lookahead && (l = i.lookahead);
  do
    if (o = t, !(h[o + d] !== S || h[o + d - 1] !== v || h[o] !== h[r] || h[++o] !== h[r + 1])) {
      r += 2, o++;
      do
        ;
      while (h[++r] === h[++o] && h[++r] === h[++o] && h[++r] === h[++o] && h[++r] === h[++o] && h[++r] === h[++o] && h[++r] === h[++o] && h[++r] === h[++o] && h[++r] === h[++o] && r < y);
      if (n = qe - (y - r), r = y - qe, n > d) {
        if (i.match_start = t, d = n, n >= l)
          break;
        v = h[r + d - 1], S = h[r + d];
      }
    }
  while ((t = w[t & u]) > p && --e !== 0);
  return d <= i.lookahead ? d : i.lookahead;
}, vt = (i) => {
  const t = i.w_size;
  let e, r, o;
  do {
    if (r = i.window_size - i.lookahead - i.strstart, i.strstart >= t + (t - Be) && (i.window.set(i.window.subarray(t, t + t - r), 0), i.match_start -= t, i.strstart -= t, i.block_start -= t, i.insert > i.strstart && (i.insert = i.strstart), Al(i), r += t), i.strm.avail_in === 0)
      break;
    if (e = or(i.strm, i.window, i.strstart + i.lookahead, r), i.lookahead += e, i.lookahead + i.insert >= H)
      for (o = i.strstart - i.insert, i.ins_h = i.window[o], i.ins_h = Ye(i, i.ins_h, i.window[o + 1]); i.insert && (i.ins_h = Ye(i, i.ins_h, i.window[o + H - 1]), i.prev[o & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = o, o++, i.insert--, !(i.lookahead + i.insert < H)); )
        ;
  } while (i.lookahead < Be && i.strm.avail_in !== 0);
}, xn = (i, t) => {
  let e = i.pending_buf_size - 5 > i.w_size ? i.w_size : i.pending_buf_size - 5, r, o, n, d = 0, l = i.strm.avail_in;
  do {
    if (r = 65535, n = i.bi_valid + 42 >> 3, i.strm.avail_out < n || (n = i.strm.avail_out - n, o = i.strstart - i.block_start, r > o + i.strm.avail_in && (r = o + i.strm.avail_in), r > n && (r = n), r < e && (r === 0 && t !== ye || t === Ge || r !== o + i.strm.avail_in)))
      break;
    d = t === ye && r === o + i.strm.avail_in ? 1 : 0, Ji(i, 0, 0, d), i.pending_buf[i.pending - 4] = r, i.pending_buf[i.pending - 3] = r >> 8, i.pending_buf[i.pending - 2] = ~r, i.pending_buf[i.pending - 1] = ~r >> 8, fe(i.strm), o && (o > r && (o = r), i.strm.output.set(i.window.subarray(i.block_start, i.block_start + o), i.strm.next_out), i.strm.next_out += o, i.strm.avail_out -= o, i.strm.total_out += o, i.block_start += o, r -= o), r && (or(i.strm, i.strm.output, i.strm.next_out, r), i.strm.next_out += r, i.strm.avail_out -= r, i.strm.total_out += r);
  } while (d === 0);
  return l -= i.strm.avail_in, l && (l >= i.w_size ? (i.matches = 2, i.window.set(i.strm.input.subarray(i.strm.next_in - i.w_size, i.strm.next_in), 0), i.strstart = i.w_size, i.insert = i.strstart) : (i.window_size - i.strstart <= l && (i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, i.insert > i.strstart && (i.insert = i.strstart)), i.window.set(i.strm.input.subarray(i.strm.next_in - l, i.strm.next_in), i.strstart), i.strstart += l, i.insert += l > i.w_size - i.insert ? i.w_size - i.insert : l), i.block_start = i.strstart), i.high_water < i.strstart && (i.high_water = i.strstart), d ? wt : t !== Ge && t !== ye && i.strm.avail_in === 0 && i.strstart === i.block_start ? xt : (n = i.window_size - i.strstart, i.strm.avail_in > n && i.block_start >= i.w_size && (i.block_start -= i.w_size, i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, n += i.w_size, i.insert > i.strstart && (i.insert = i.strstart)), n > i.strm.avail_in && (n = i.strm.avail_in), n && (or(i.strm, i.window, i.strstart, n), i.strstart += n, i.insert += n > i.w_size - i.insert ? i.w_size - i.insert : n), i.high_water < i.strstart && (i.high_water = i.strstart), n = i.bi_valid + 42 >> 3, n = i.pending_buf_size - n > 65535 ? 65535 : i.pending_buf_size - n, e = n > i.w_size ? i.w_size : n, o = i.strstart - i.block_start, (o >= e || (o || t === ye) && t !== Ge && i.strm.avail_in === 0 && o <= n) && (r = o > n ? n : o, d = t === ye && i.strm.avail_in === 0 && r === o ? 1 : 0, Ji(i, i.block_start, r, d), i.block_start += r, fe(i.strm)), d ? it : se);
}, Li = (i, t) => {
  let e, r;
  for (; ; ) {
    if (i.lookahead < Be) {
      if (vt(i), i.lookahead < Be && t === Ge)
        return se;
      if (i.lookahead === 0)
        break;
    }
    if (e = 0, i.lookahead >= H && (i.ins_h = Ye(i, i.ins_h, i.window[i.strstart + H - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), e !== 0 && i.strstart - e <= i.w_size - Be && (i.match_length = bn(i, e)), i.match_length >= H)
      if (r = Ke(i, i.strstart - i.match_start, i.match_length - H), i.lookahead -= i.match_length, i.match_length <= i.max_lazy_match && i.lookahead >= H) {
        i.match_length--;
        do
          i.strstart++, i.ins_h = Ye(i, i.ins_h, i.window[i.strstart + H - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart;
        while (--i.match_length !== 0);
        i.strstart++;
      } else
        i.strstart += i.match_length, i.match_length = 0, i.ins_h = i.window[i.strstart], i.ins_h = Ye(i, i.ins_h, i.window[i.strstart + 1]);
    else
      r = Ke(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++;
    if (r && (ue(i, !1), i.strm.avail_out === 0))
      return se;
  }
  return i.insert = i.strstart < H - 1 ? i.strstart : H - 1, t === ye ? (ue(i, !0), i.strm.avail_out === 0 ? it : wt) : i.sym_next && (ue(i, !1), i.strm.avail_out === 0) ? se : xt;
}, dt = (i, t) => {
  let e, r, o;
  for (; ; ) {
    if (i.lookahead < Be) {
      if (vt(i), i.lookahead < Be && t === Ge)
        return se;
      if (i.lookahead === 0)
        break;
    }
    if (e = 0, i.lookahead >= H && (i.ins_h = Ye(i, i.ins_h, i.window[i.strstart + H - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), i.prev_length = i.match_length, i.prev_match = i.match_start, i.match_length = H - 1, e !== 0 && i.prev_length < i.max_lazy_match && i.strstart - e <= i.w_size - Be && (i.match_length = bn(i, e), i.match_length <= 5 && (i.strategy === cl || i.match_length === H && i.strstart - i.match_start > 4096) && (i.match_length = H - 1)), i.prev_length >= H && i.match_length <= i.prev_length) {
      o = i.strstart + i.lookahead - H, r = Ke(i, i.strstart - 1 - i.prev_match, i.prev_length - H), i.lookahead -= i.prev_length - 1, i.prev_length -= 2;
      do
        ++i.strstart <= o && (i.ins_h = Ye(i, i.ins_h, i.window[i.strstart + H - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart);
      while (--i.prev_length !== 0);
      if (i.match_available = 0, i.match_length = H - 1, i.strstart++, r && (ue(i, !1), i.strm.avail_out === 0))
        return se;
    } else if (i.match_available) {
      if (r = Ke(i, 0, i.window[i.strstart - 1]), r && ue(i, !1), i.strstart++, i.lookahead--, i.strm.avail_out === 0)
        return se;
    } else
      i.match_available = 1, i.strstart++, i.lookahead--;
  }
  return i.match_available && (r = Ke(i, 0, i.window[i.strstart - 1]), i.match_available = 0), i.insert = i.strstart < H - 1 ? i.strstart : H - 1, t === ye ? (ue(i, !0), i.strm.avail_out === 0 ? it : wt) : i.sym_next && (ue(i, !1), i.strm.avail_out === 0) ? se : xt;
}, Tl = (i, t) => {
  let e, r, o, n;
  const d = i.window;
  for (; ; ) {
    if (i.lookahead <= qe) {
      if (vt(i), i.lookahead <= qe && t === Ge)
        return se;
      if (i.lookahead === 0)
        break;
    }
    if (i.match_length = 0, i.lookahead >= H && i.strstart > 0 && (o = i.strstart - 1, r = d[o], r === d[++o] && r === d[++o] && r === d[++o])) {
      n = i.strstart + qe;
      do
        ;
      while (r === d[++o] && r === d[++o] && r === d[++o] && r === d[++o] && r === d[++o] && r === d[++o] && r === d[++o] && r === d[++o] && o < n);
      i.match_length = qe - (n - o), i.match_length > i.lookahead && (i.match_length = i.lookahead);
    }
    if (i.match_length >= H ? (e = Ke(i, 1, i.match_length - H), i.lookahead -= i.match_length, i.strstart += i.match_length, i.match_length = 0) : (e = Ke(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++), e && (ue(i, !1), i.strm.avail_out === 0))
      return se;
  }
  return i.insert = 0, t === ye ? (ue(i, !0), i.strm.avail_out === 0 ? it : wt) : i.sym_next && (ue(i, !1), i.strm.avail_out === 0) ? se : xt;
}, Rl = (i, t) => {
  let e;
  for (; ; ) {
    if (i.lookahead === 0 && (vt(i), i.lookahead === 0)) {
      if (t === Ge)
        return se;
      break;
    }
    if (i.match_length = 0, e = Ke(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++, e && (ue(i, !1), i.strm.avail_out === 0))
      return se;
  }
  return i.insert = 0, t === ye ? (ue(i, !0), i.strm.avail_out === 0 ? it : wt) : i.sym_next && (ue(i, !1), i.strm.avail_out === 0) ? se : xt;
};
function Te(i, t, e, r, o) {
  this.good_length = i, this.max_lazy = t, this.nice_length = e, this.max_chain = r, this.func = o;
}
const Rt = [
  /*      good lazy nice chain */
  new Te(0, 0, 0, 0, xn),
  /* 0 store only */
  new Te(4, 4, 8, 4, Li),
  /* 1 max speed, no lazy matches */
  new Te(4, 5, 16, 8, Li),
  /* 2 */
  new Te(4, 6, 32, 32, Li),
  /* 3 */
  new Te(4, 4, 16, 16, dt),
  /* 4 lazy matches */
  new Te(8, 16, 32, 32, dt),
  /* 5 */
  new Te(8, 16, 128, 128, dt),
  /* 6 */
  new Te(8, 32, 128, 256, dt),
  /* 7 */
  new Te(32, 128, 258, 1024, dt),
  /* 8 */
  new Te(32, 258, 258, 4096, dt)
  /* 9 max compression */
], Cl = (i) => {
  i.window_size = 2 * i.w_size, We(i.head), i.max_lazy_match = Rt[i.level].max_lazy, i.good_match = Rt[i.level].good_length, i.nice_match = Rt[i.level].nice_length, i.max_chain_length = Rt[i.level].max_chain, i.strstart = 0, i.block_start = 0, i.lookahead = 0, i.insert = 0, i.match_length = i.prev_length = H - 1, i.match_available = 0, i.ins_h = 0;
};
function $l() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = yi, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(wl * 2), this.dyn_dtree = new Uint16Array((2 * bl + 1) * 2), this.bl_tree = new Uint16Array((2 * xl + 1) * 2), We(this.dyn_ltree), We(this.dyn_dtree), We(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(El + 1), this.heap = new Uint16Array(2 * Qi + 1), We(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Qi + 1), We(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const qt = (i) => {
  if (!i)
    return 1;
  const t = i.state;
  return !t || t.strm !== i || t.status !== gt && //#ifdef GZIP
  t.status !== _r && //#endif
  t.status !== er && t.status !== tr && t.status !== ir && t.status !== rr && t.status !== Je && t.status !== Tt ? 1 : 0;
}, wn = (i) => {
  if (qt(i))
    return Qe(i, $e);
  i.total_in = i.total_out = 0, i.data_type = pl;
  const t = i.state;
  return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = //#ifdef GZIP
  t.wrap === 2 ? _r : (
    //#endif
    t.wrap ? gt : Je
  ), i.adler = t.wrap === 2 ? 0 : 1, t.last_flush = -2, rl(t), te;
}, En = (i) => {
  const t = wn(i);
  return t === te && Cl(i.state), t;
}, Bl = (i, t) => qt(i) || i.state.wrap !== 2 ? $e : (i.state.gzhead = t, te), Sn = (i, t, e, r, o, n) => {
  if (!i)
    return $e;
  let d = 1;
  if (t === dl && (t = 6), r < 0 ? (d = 0, r = -r) : r > 15 && (d = 2, r -= 16), o < 1 || o > ml || e !== yi || r < 8 || r > 15 || t < 0 || t > 9 || n < 0 || n > fl || r === 8 && d !== 1)
    return Qe(i, $e);
  r === 8 && (r = 9);
  const l = new $l();
  return i.state = l, l.strm = i, l.status = gt, l.wrap = d, l.gzhead = null, l.w_bits = r, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = o + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + H - 1) / H), l.window = new Uint8Array(l.w_size * 2), l.head = new Uint16Array(l.hash_size), l.prev = new Uint16Array(l.w_size), l.lit_bufsize = 1 << o + 6, l.pending_buf_size = l.lit_bufsize * 4, l.pending_buf = new Uint8Array(l.pending_buf_size), l.sym_buf = l.lit_bufsize, l.sym_end = (l.lit_bufsize - 1) * 3, l.level = t, l.strategy = n, l.method = e, En(i);
}, Ll = (i, t) => Sn(i, t, yi, gl, vl, ul), Ol = (i, t) => {
  if (qt(i) || t > Xr || t < 0)
    return i ? Qe(i, $e) : $e;
  const e = i.state;
  if (!i.output || i.avail_in !== 0 && !i.input || e.status === Tt && t !== ye)
    return Qe(i, i.avail_out === 0 ? Bi : $e);
  const r = e.last_flush;
  if (e.last_flush = t, e.pending !== 0) {
    if (fe(i), i.avail_out === 0)
      return e.last_flush = -1, te;
  } else if (i.avail_in === 0 && Qr(t) <= Qr(r) && t !== ye)
    return Qe(i, Bi);
  if (e.status === Tt && i.avail_in !== 0)
    return Qe(i, Bi);
  if (e.status === gt && e.wrap === 0 && (e.status = Je), e.status === gt) {
    let o = yi + (e.w_bits - 8 << 4) << 8, n = -1;
    if (e.strategy >= ii || e.level < 2 ? n = 0 : e.level < 6 ? n = 1 : e.level === 6 ? n = 2 : n = 3, o |= n << 6, e.strstart !== 0 && (o |= Sl), o += 31 - o % 31, kt(e, o), e.strstart !== 0 && (kt(e, i.adler >>> 16), kt(e, i.adler & 65535)), i.adler = 1, e.status = Je, fe(i), e.pending !== 0)
      return e.last_flush = -1, te;
  }
  if (e.status === _r) {
    if (i.adler = 0, Z(e, 31), Z(e, 139), Z(e, 8), e.gzhead)
      Z(
        e,
        (e.gzhead.text ? 1 : 0) + (e.gzhead.hcrc ? 2 : 0) + (e.gzhead.extra ? 4 : 0) + (e.gzhead.name ? 8 : 0) + (e.gzhead.comment ? 16 : 0)
      ), Z(e, e.gzhead.time & 255), Z(e, e.gzhead.time >> 8 & 255), Z(e, e.gzhead.time >> 16 & 255), Z(e, e.gzhead.time >> 24 & 255), Z(e, e.level === 9 ? 2 : e.strategy >= ii || e.level < 2 ? 4 : 0), Z(e, e.gzhead.os & 255), e.gzhead.extra && e.gzhead.extra.length && (Z(e, e.gzhead.extra.length & 255), Z(e, e.gzhead.extra.length >> 8 & 255)), e.gzhead.hcrc && (i.adler = ee(i.adler, e.pending_buf, e.pending, 0)), e.gzindex = 0, e.status = er;
    else if (Z(e, 0), Z(e, 0), Z(e, 0), Z(e, 0), Z(e, 0), Z(e, e.level === 9 ? 2 : e.strategy >= ii || e.level < 2 ? 4 : 0), Z(e, kl), e.status = Je, fe(i), e.pending !== 0)
      return e.last_flush = -1, te;
  }
  if (e.status === er) {
    if (e.gzhead.extra) {
      let o = e.pending, n = (e.gzhead.extra.length & 65535) - e.gzindex;
      for (; e.pending + n > e.pending_buf_size; ) {
        let l = e.pending_buf_size - e.pending;
        if (e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex, e.gzindex + l), e.pending), e.pending = e.pending_buf_size, e.gzhead.hcrc && e.pending > o && (i.adler = ee(i.adler, e.pending_buf, e.pending - o, o)), e.gzindex += l, fe(i), e.pending !== 0)
          return e.last_flush = -1, te;
        o = 0, n -= l;
      }
      let d = new Uint8Array(e.gzhead.extra);
      e.pending_buf.set(d.subarray(e.gzindex, e.gzindex + n), e.pending), e.pending += n, e.gzhead.hcrc && e.pending > o && (i.adler = ee(i.adler, e.pending_buf, e.pending - o, o)), e.gzindex = 0;
    }
    e.status = tr;
  }
  if (e.status === tr) {
    if (e.gzhead.name) {
      let o = e.pending, n;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > o && (i.adler = ee(i.adler, e.pending_buf, e.pending - o, o)), fe(i), e.pending !== 0)
            return e.last_flush = -1, te;
          o = 0;
        }
        e.gzindex < e.gzhead.name.length ? n = e.gzhead.name.charCodeAt(e.gzindex++) & 255 : n = 0, Z(e, n);
      } while (n !== 0);
      e.gzhead.hcrc && e.pending > o && (i.adler = ee(i.adler, e.pending_buf, e.pending - o, o)), e.gzindex = 0;
    }
    e.status = ir;
  }
  if (e.status === ir) {
    if (e.gzhead.comment) {
      let o = e.pending, n;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > o && (i.adler = ee(i.adler, e.pending_buf, e.pending - o, o)), fe(i), e.pending !== 0)
            return e.last_flush = -1, te;
          o = 0;
        }
        e.gzindex < e.gzhead.comment.length ? n = e.gzhead.comment.charCodeAt(e.gzindex++) & 255 : n = 0, Z(e, n);
      } while (n !== 0);
      e.gzhead.hcrc && e.pending > o && (i.adler = ee(i.adler, e.pending_buf, e.pending - o, o));
    }
    e.status = rr;
  }
  if (e.status === rr) {
    if (e.gzhead.hcrc) {
      if (e.pending + 2 > e.pending_buf_size && (fe(i), e.pending !== 0))
        return e.last_flush = -1, te;
      Z(e, i.adler & 255), Z(e, i.adler >> 8 & 255), i.adler = 0;
    }
    if (e.status = Je, fe(i), e.pending !== 0)
      return e.last_flush = -1, te;
  }
  if (i.avail_in !== 0 || e.lookahead !== 0 || t !== Ge && e.status !== Tt) {
    let o = e.level === 0 ? xn(e, t) : e.strategy === ii ? Rl(e, t) : e.strategy === hl ? Tl(e, t) : Rt[e.level].func(e, t);
    if ((o === it || o === wt) && (e.status = Tt), o === se || o === it)
      return i.avail_out === 0 && (e.last_flush = -1), te;
    if (o === xt && (t === al ? nl(e) : t !== Xr && (Ji(e, 0, 0, !1), t === sl && (We(e.head), e.lookahead === 0 && (e.strstart = 0, e.block_start = 0, e.insert = 0))), fe(i), i.avail_out === 0))
      return e.last_flush = -1, te;
  }
  return t !== ye ? te : e.wrap <= 0 ? Jr : (e.wrap === 2 ? (Z(e, i.adler & 255), Z(e, i.adler >> 8 & 255), Z(e, i.adler >> 16 & 255), Z(e, i.adler >> 24 & 255), Z(e, i.total_in & 255), Z(e, i.total_in >> 8 & 255), Z(e, i.total_in >> 16 & 255), Z(e, i.total_in >> 24 & 255)) : (kt(e, i.adler >>> 16), kt(e, i.adler & 65535)), fe(i), e.wrap > 0 && (e.wrap = -e.wrap), e.pending !== 0 ? te : Jr);
}, Dl = (i) => {
  if (qt(i))
    return $e;
  const t = i.state.status;
  return i.state = null, t === Je ? Qe(i, ll) : te;
}, Fl = (i, t) => {
  let e = t.length;
  if (qt(i))
    return $e;
  const r = i.state, o = r.wrap;
  if (o === 2 || o === 1 && r.status !== gt || r.lookahead)
    return $e;
  if (o === 1 && (i.adler = zt(i.adler, t, e, 0)), r.wrap = 0, e >= r.w_size) {
    o === 0 && (We(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
    let p = new Uint8Array(r.w_size);
    p.set(t.subarray(e - r.w_size, e), 0), t = p, e = r.w_size;
  }
  const n = i.avail_in, d = i.next_in, l = i.input;
  for (i.avail_in = e, i.next_in = 0, i.input = t, vt(r); r.lookahead >= H; ) {
    let p = r.strstart, h = r.lookahead - (H - 1);
    do
      r.ins_h = Ye(r, r.ins_h, r.window[p + H - 1]), r.prev[p & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = p, p++;
    while (--h);
    r.strstart = p, r.lookahead = H - 1, vt(r);
  }
  return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = H - 1, r.match_available = 0, i.next_in = d, i.input = l, i.avail_in = n, r.wrap = o, te;
};
var Ul = Ll, Pl = Sn, Ml = En, zl = wn, Nl = Bl, Hl = Ol, Zl = Dl, Vl = Fl, Wl = "pako deflate (from Nodeca project)", Bt = {
  deflateInit: Ul,
  deflateInit2: Pl,
  deflateReset: Ml,
  deflateResetKeep: zl,
  deflateSetHeader: Nl,
  deflate: Hl,
  deflateEnd: Zl,
  deflateSetDictionary: Vl,
  deflateInfo: Wl
};
const ql = (i, t) => Object.prototype.hasOwnProperty.call(i, t);
var Kl = function(i) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const e = t.shift();
    if (e) {
      if (typeof e != "object")
        throw new TypeError(e + "must be non-object");
      for (const r in e)
        ql(e, r) && (i[r] = e[r]);
    }
  }
  return i;
}, Gl = (i) => {
  let t = 0;
  for (let r = 0, o = i.length; r < o; r++)
    t += i[r].length;
  const e = new Uint8Array(t);
  for (let r = 0, o = 0, n = i.length; r < n; r++) {
    let d = i[r];
    e.set(d, o), o += d.length;
  }
  return e;
}, bi = {
  assign: Kl,
  flattenChunks: Gl
};
let kn = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  kn = !1;
}
const Nt = new Uint8Array(256);
for (let i = 0; i < 256; i++)
  Nt[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
Nt[254] = Nt[254] = 1;
var Yl = (i) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(i);
  let t, e, r, o, n, d = i.length, l = 0;
  for (o = 0; o < d; o++)
    e = i.charCodeAt(o), (e & 64512) === 55296 && o + 1 < d && (r = i.charCodeAt(o + 1), (r & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (r - 56320), o++)), l += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
  for (t = new Uint8Array(l), n = 0, o = 0; n < l; o++)
    e = i.charCodeAt(o), (e & 64512) === 55296 && o + 1 < d && (r = i.charCodeAt(o + 1), (r & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (r - 56320), o++)), e < 128 ? t[n++] = e : e < 2048 ? (t[n++] = 192 | e >>> 6, t[n++] = 128 | e & 63) : e < 65536 ? (t[n++] = 224 | e >>> 12, t[n++] = 128 | e >>> 6 & 63, t[n++] = 128 | e & 63) : (t[n++] = 240 | e >>> 18, t[n++] = 128 | e >>> 12 & 63, t[n++] = 128 | e >>> 6 & 63, t[n++] = 128 | e & 63);
  return t;
};
const jl = (i, t) => {
  if (t < 65534 && i.subarray && kn)
    return String.fromCharCode.apply(null, i.length === t ? i : i.subarray(0, t));
  let e = "";
  for (let r = 0; r < t; r++)
    e += String.fromCharCode(i[r]);
  return e;
};
var Xl = (i, t) => {
  const e = t || i.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(i.subarray(0, t));
  let r, o;
  const n = new Array(e * 2);
  for (o = 0, r = 0; r < e; ) {
    let d = i[r++];
    if (d < 128) {
      n[o++] = d;
      continue;
    }
    let l = Nt[d];
    if (l > 4) {
      n[o++] = 65533, r += l - 1;
      continue;
    }
    for (d &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && r < e; )
      d = d << 6 | i[r++] & 63, l--;
    if (l > 1) {
      n[o++] = 65533;
      continue;
    }
    d < 65536 ? n[o++] = d : (d -= 65536, n[o++] = 55296 | d >> 10 & 1023, n[o++] = 56320 | d & 1023);
  }
  return jl(n, o);
}, Jl = (i, t) => {
  t = t || i.length, t > i.length && (t = i.length);
  let e = t - 1;
  for (; e >= 0 && (i[e] & 192) === 128; )
    e--;
  return e < 0 || e === 0 ? t : e + Nt[i[e]] > t ? e : t;
}, Ht = {
  string2buf: Yl,
  buf2string: Xl,
  utf8border: Jl
};
function Ql() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var An = Ql;
const In = Object.prototype.toString, {
  Z_NO_FLUSH: ed,
  Z_SYNC_FLUSH: td,
  Z_FULL_FLUSH: id,
  Z_FINISH: rd,
  Z_OK: fi,
  Z_STREAM_END: od,
  Z_DEFAULT_COMPRESSION: nd,
  Z_DEFAULT_STRATEGY: ad,
  Z_DEFLATED: sd
} = bt;
function Kt(i) {
  this.options = bi.assign({
    level: nd,
    method: sd,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: ad
  }, i || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new An(), this.strm.avail_out = 0;
  let e = Bt.deflateInit2(
    this.strm,
    t.level,
    t.method,
    t.windowBits,
    t.memLevel,
    t.strategy
  );
  if (e !== fi)
    throw new Error(tt[e]);
  if (t.header && Bt.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let r;
    if (typeof t.dictionary == "string" ? r = Ht.string2buf(t.dictionary) : In.call(t.dictionary) === "[object ArrayBuffer]" ? r = new Uint8Array(t.dictionary) : r = t.dictionary, e = Bt.deflateSetDictionary(this.strm, r), e !== fi)
      throw new Error(tt[e]);
    this._dict_set = !0;
  }
}
Kt.prototype.push = function(i, t) {
  const e = this.strm, r = this.options.chunkSize;
  let o, n;
  if (this.ended)
    return !1;
  for (t === ~~t ? n = t : n = t === !0 ? rd : ed, typeof i == "string" ? e.input = Ht.string2buf(i) : In.call(i) === "[object ArrayBuffer]" ? e.input = new Uint8Array(i) : e.input = i, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    if (e.avail_out === 0 && (e.output = new Uint8Array(r), e.next_out = 0, e.avail_out = r), (n === td || n === id) && e.avail_out <= 6) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (o = Bt.deflate(e, n), o === od)
      return e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)), o = Bt.deflateEnd(this.strm), this.onEnd(o), this.ended = !0, o === fi;
    if (e.avail_out === 0) {
      this.onData(e.output);
      continue;
    }
    if (n > 0 && e.next_out > 0) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (e.avail_in === 0)
      break;
  }
  return !0;
};
Kt.prototype.onData = function(i) {
  this.chunks.push(i);
};
Kt.prototype.onEnd = function(i) {
  i === fi && (this.result = bi.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
function yr(i, t) {
  const e = new Kt(t);
  if (e.push(i, !0), e.err)
    throw e.msg || tt[e.err];
  return e.result;
}
function ld(i, t) {
  return t = t || {}, t.raw = !0, yr(i, t);
}
function dd(i, t) {
  return t = t || {}, t.gzip = !0, yr(i, t);
}
var cd = Kt, hd = yr, fd = ld, ud = dd, pd = bt, md = {
  Deflate: cd,
  deflate: hd,
  deflateRaw: fd,
  gzip: ud,
  constants: pd
};
const ri = 16209, gd = 16191;
var vd = function(t, e) {
  let r, o, n, d, l, p, h, u, w, y, v, S, I, A, R, k, C, x, $, P, T, D, L, B;
  const F = t.state;
  r = t.next_in, L = t.input, o = r + (t.avail_in - 5), n = t.next_out, B = t.output, d = n - (e - t.avail_out), l = n + (t.avail_out - 257), p = F.dmax, h = F.wsize, u = F.whave, w = F.wnext, y = F.window, v = F.hold, S = F.bits, I = F.lencode, A = F.distcode, R = (1 << F.lenbits) - 1, k = (1 << F.distbits) - 1;
  e:
    do {
      S < 15 && (v += L[r++] << S, S += 8, v += L[r++] << S, S += 8), C = I[v & R];
      t:
        for (; ; ) {
          if (x = C >>> 24, v >>>= x, S -= x, x = C >>> 16 & 255, x === 0)
            B[n++] = C & 65535;
          else if (x & 16) {
            $ = C & 65535, x &= 15, x && (S < x && (v += L[r++] << S, S += 8), $ += v & (1 << x) - 1, v >>>= x, S -= x), S < 15 && (v += L[r++] << S, S += 8, v += L[r++] << S, S += 8), C = A[v & k];
            i:
              for (; ; ) {
                if (x = C >>> 24, v >>>= x, S -= x, x = C >>> 16 & 255, x & 16) {
                  if (P = C & 65535, x &= 15, S < x && (v += L[r++] << S, S += 8, S < x && (v += L[r++] << S, S += 8)), P += v & (1 << x) - 1, P > p) {
                    t.msg = "invalid distance too far back", F.mode = ri;
                    break e;
                  }
                  if (v >>>= x, S -= x, x = n - d, P > x) {
                    if (x = P - x, x > u && F.sane) {
                      t.msg = "invalid distance too far back", F.mode = ri;
                      break e;
                    }
                    if (T = 0, D = y, w === 0) {
                      if (T += h - x, x < $) {
                        $ -= x;
                        do
                          B[n++] = y[T++];
                        while (--x);
                        T = n - P, D = B;
                      }
                    } else if (w < x) {
                      if (T += h + w - x, x -= w, x < $) {
                        $ -= x;
                        do
                          B[n++] = y[T++];
                        while (--x);
                        if (T = 0, w < $) {
                          x = w, $ -= x;
                          do
                            B[n++] = y[T++];
                          while (--x);
                          T = n - P, D = B;
                        }
                      }
                    } else if (T += w - x, x < $) {
                      $ -= x;
                      do
                        B[n++] = y[T++];
                      while (--x);
                      T = n - P, D = B;
                    }
                    for (; $ > 2; )
                      B[n++] = D[T++], B[n++] = D[T++], B[n++] = D[T++], $ -= 3;
                    $ && (B[n++] = D[T++], $ > 1 && (B[n++] = D[T++]));
                  } else {
                    T = n - P;
                    do
                      B[n++] = B[T++], B[n++] = B[T++], B[n++] = B[T++], $ -= 3;
                    while ($ > 2);
                    $ && (B[n++] = B[T++], $ > 1 && (B[n++] = B[T++]));
                  }
                } else if (x & 64) {
                  t.msg = "invalid distance code", F.mode = ri;
                  break e;
                } else {
                  C = A[(C & 65535) + (v & (1 << x) - 1)];
                  continue i;
                }
                break;
              }
          } else if (x & 64)
            if (x & 32) {
              F.mode = gd;
              break e;
            } else {
              t.msg = "invalid literal/length code", F.mode = ri;
              break e;
            }
          else {
            C = I[(C & 65535) + (v & (1 << x) - 1)];
            continue t;
          }
          break;
        }
    } while (r < o && n < l);
  $ = S >> 3, r -= $, S -= $ << 3, v &= (1 << S) - 1, t.next_in = r, t.next_out = n, t.avail_in = r < o ? 5 + (o - r) : 5 - (r - o), t.avail_out = n < l ? 257 + (l - n) : 257 - (n - l), F.hold = v, F.bits = S;
};
const ct = 15, eo = 852, to = 592, io = 0, Oi = 1, ro = 2, _d = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), yd = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), bd = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), xd = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), wd = (i, t, e, r, o, n, d, l) => {
  const p = l.bits;
  let h = 0, u = 0, w = 0, y = 0, v = 0, S = 0, I = 0, A = 0, R = 0, k = 0, C, x, $, P, T, D = null, L;
  const B = new Uint16Array(ct + 1), F = new Uint16Array(ct + 1);
  let J = null, He, he, we;
  for (h = 0; h <= ct; h++)
    B[h] = 0;
  for (u = 0; u < r; u++)
    B[t[e + u]]++;
  for (v = p, y = ct; y >= 1 && B[y] === 0; y--)
    ;
  if (v > y && (v = y), y === 0)
    return o[n++] = 1 << 24 | 64 << 16 | 0, o[n++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
  for (w = 1; w < y && B[w] === 0; w++)
    ;
  for (v < w && (v = w), A = 1, h = 1; h <= ct; h++)
    if (A <<= 1, A -= B[h], A < 0)
      return -1;
  if (A > 0 && (i === io || y !== 1))
    return -1;
  for (F[1] = 0, h = 1; h < ct; h++)
    F[h + 1] = F[h] + B[h];
  for (u = 0; u < r; u++)
    t[e + u] !== 0 && (d[F[t[e + u]]++] = u);
  if (i === io ? (D = J = d, L = 20) : i === Oi ? (D = _d, J = yd, L = 257) : (D = bd, J = xd, L = 0), k = 0, u = 0, h = w, T = n, S = v, I = 0, $ = -1, R = 1 << v, P = R - 1, i === Oi && R > eo || i === ro && R > to)
    return 1;
  for (; ; ) {
    He = h - I, d[u] + 1 < L ? (he = 0, we = d[u]) : d[u] >= L ? (he = J[d[u] - L], we = D[d[u] - L]) : (he = 96, we = 0), C = 1 << h - I, x = 1 << S, w = x;
    do
      x -= C, o[T + (k >> I) + x] = He << 24 | he << 16 | we | 0;
    while (x !== 0);
    for (C = 1 << h - 1; k & C; )
      C >>= 1;
    if (C !== 0 ? (k &= C - 1, k += C) : k = 0, u++, --B[h] === 0) {
      if (h === y)
        break;
      h = t[e + d[u]];
    }
    if (h > v && (k & P) !== $) {
      for (I === 0 && (I = v), T += w, S = h - I, A = 1 << S; S + I < y && (A -= B[S + I], !(A <= 0)); )
        S++, A <<= 1;
      if (R += 1 << S, i === Oi && R > eo || i === ro && R > to)
        return 1;
      $ = k & P, o[$] = v << 24 | S << 16 | T - n | 0;
    }
  }
  return k !== 0 && (o[T + k] = h - I << 24 | 64 << 16 | 0), l.bits = v, 0;
};
var Lt = wd;
const Ed = 0, Tn = 1, Rn = 2, {
  Z_FINISH: oo,
  Z_BLOCK: Sd,
  Z_TREES: oi,
  Z_OK: rt,
  Z_STREAM_END: kd,
  Z_NEED_DICT: Ad,
  Z_STREAM_ERROR: be,
  Z_DATA_ERROR: Cn,
  Z_MEM_ERROR: $n,
  Z_BUF_ERROR: Id,
  Z_DEFLATED: no
} = bt, xi = 16180, ao = 16181, so = 16182, lo = 16183, co = 16184, ho = 16185, fo = 16186, uo = 16187, po = 16188, mo = 16189, ui = 16190, De = 16191, Di = 16192, go = 16193, Fi = 16194, vo = 16195, _o = 16196, yo = 16197, bo = 16198, ni = 16199, ai = 16200, xo = 16201, wo = 16202, Eo = 16203, So = 16204, ko = 16205, Ui = 16206, Ao = 16207, Io = 16208, K = 16209, Bn = 16210, Ln = 16211, Td = 852, Rd = 592, Cd = 15, $d = Cd, To = (i) => (i >>> 24 & 255) + (i >>> 8 & 65280) + ((i & 65280) << 8) + ((i & 255) << 24);
function Bd() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const at = (i) => {
  if (!i)
    return 1;
  const t = i.state;
  return !t || t.strm !== i || t.mode < xi || t.mode > Ln ? 1 : 0;
}, On = (i) => {
  if (at(i))
    return be;
  const t = i.state;
  return i.total_in = i.total_out = t.total = 0, i.msg = "", t.wrap && (i.adler = t.wrap & 1), t.mode = xi, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(Td), t.distcode = t.distdyn = new Int32Array(Rd), t.sane = 1, t.back = -1, rt;
}, Dn = (i) => {
  if (at(i))
    return be;
  const t = i.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, On(i);
}, Fn = (i, t) => {
  let e;
  if (at(i))
    return be;
  const r = i.state;
  return t < 0 ? (e = 0, t = -t) : (e = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? be : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = e, r.wbits = t, Dn(i));
}, Un = (i, t) => {
  if (!i)
    return be;
  const e = new Bd();
  i.state = e, e.strm = i, e.window = null, e.mode = xi;
  const r = Fn(i, t);
  return r !== rt && (i.state = null), r;
}, Ld = (i) => Un(i, $d);
let Ro = !0, Pi, Mi;
const Od = (i) => {
  if (Ro) {
    Pi = new Int32Array(512), Mi = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      i.lens[t++] = 8;
    for (; t < 256; )
      i.lens[t++] = 9;
    for (; t < 280; )
      i.lens[t++] = 7;
    for (; t < 288; )
      i.lens[t++] = 8;
    for (Lt(Tn, i.lens, 0, 288, Pi, 0, i.work, { bits: 9 }), t = 0; t < 32; )
      i.lens[t++] = 5;
    Lt(Rn, i.lens, 0, 32, Mi, 0, i.work, { bits: 5 }), Ro = !1;
  }
  i.lencode = Pi, i.lenbits = 9, i.distcode = Mi, i.distbits = 5;
}, Pn = (i, t, e, r) => {
  let o;
  const n = i.state;
  return n.window === null && (n.wsize = 1 << n.wbits, n.wnext = 0, n.whave = 0, n.window = new Uint8Array(n.wsize)), r >= n.wsize ? (n.window.set(t.subarray(e - n.wsize, e), 0), n.wnext = 0, n.whave = n.wsize) : (o = n.wsize - n.wnext, o > r && (o = r), n.window.set(t.subarray(e - r, e - r + o), n.wnext), r -= o, r ? (n.window.set(t.subarray(e - r, e), 0), n.wnext = r, n.whave = n.wsize) : (n.wnext += o, n.wnext === n.wsize && (n.wnext = 0), n.whave < n.wsize && (n.whave += o))), 0;
}, Dd = (i, t) => {
  let e, r, o, n, d, l, p, h, u, w, y, v, S, I, A = 0, R, k, C, x, $, P, T, D;
  const L = new Uint8Array(4);
  let B, F;
  const J = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (at(i) || !i.output || !i.input && i.avail_in !== 0)
    return be;
  e = i.state, e.mode === De && (e.mode = Di), d = i.next_out, o = i.output, p = i.avail_out, n = i.next_in, r = i.input, l = i.avail_in, h = e.hold, u = e.bits, w = l, y = p, D = rt;
  e:
    for (; ; )
      switch (e.mode) {
        case xi:
          if (e.wrap === 0) {
            e.mode = Di;
            break;
          }
          for (; u < 16; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          if (e.wrap & 2 && h === 35615) {
            e.wbits === 0 && (e.wbits = 15), e.check = 0, L[0] = h & 255, L[1] = h >>> 8 & 255, e.check = ee(e.check, L, 2, 0), h = 0, u = 0, e.mode = ao;
            break;
          }
          if (e.head && (e.head.done = !1), !(e.wrap & 1) || /* check if zlib header allowed */
          (((h & 255) << 8) + (h >> 8)) % 31) {
            i.msg = "incorrect header check", e.mode = K;
            break;
          }
          if ((h & 15) !== no) {
            i.msg = "unknown compression method", e.mode = K;
            break;
          }
          if (h >>>= 4, u -= 4, T = (h & 15) + 8, e.wbits === 0 && (e.wbits = T), T > 15 || T > e.wbits) {
            i.msg = "invalid window size", e.mode = K;
            break;
          }
          e.dmax = 1 << e.wbits, e.flags = 0, i.adler = e.check = 1, e.mode = h & 512 ? mo : De, h = 0, u = 0;
          break;
        case ao:
          for (; u < 16; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          if (e.flags = h, (e.flags & 255) !== no) {
            i.msg = "unknown compression method", e.mode = K;
            break;
          }
          if (e.flags & 57344) {
            i.msg = "unknown header flags set", e.mode = K;
            break;
          }
          e.head && (e.head.text = h >> 8 & 1), e.flags & 512 && e.wrap & 4 && (L[0] = h & 255, L[1] = h >>> 8 & 255, e.check = ee(e.check, L, 2, 0)), h = 0, u = 0, e.mode = so;
        case so:
          for (; u < 32; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          e.head && (e.head.time = h), e.flags & 512 && e.wrap & 4 && (L[0] = h & 255, L[1] = h >>> 8 & 255, L[2] = h >>> 16 & 255, L[3] = h >>> 24 & 255, e.check = ee(e.check, L, 4, 0)), h = 0, u = 0, e.mode = lo;
        case lo:
          for (; u < 16; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          e.head && (e.head.xflags = h & 255, e.head.os = h >> 8), e.flags & 512 && e.wrap & 4 && (L[0] = h & 255, L[1] = h >>> 8 & 255, e.check = ee(e.check, L, 2, 0)), h = 0, u = 0, e.mode = co;
        case co:
          if (e.flags & 1024) {
            for (; u < 16; ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            e.length = h, e.head && (e.head.extra_len = h), e.flags & 512 && e.wrap & 4 && (L[0] = h & 255, L[1] = h >>> 8 & 255, e.check = ee(e.check, L, 2, 0)), h = 0, u = 0;
          } else
            e.head && (e.head.extra = null);
          e.mode = ho;
        case ho:
          if (e.flags & 1024 && (v = e.length, v > l && (v = l), v && (e.head && (T = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(
            r.subarray(
              n,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              n + v
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            T
          )), e.flags & 512 && e.wrap & 4 && (e.check = ee(e.check, r, v, n)), l -= v, n += v, e.length -= v), e.length))
            break e;
          e.length = 0, e.mode = fo;
        case fo:
          if (e.flags & 2048) {
            if (l === 0)
              break e;
            v = 0;
            do
              T = r[n + v++], e.head && T && e.length < 65536 && (e.head.name += String.fromCharCode(T));
            while (T && v < l);
            if (e.flags & 512 && e.wrap & 4 && (e.check = ee(e.check, r, v, n)), l -= v, n += v, T)
              break e;
          } else
            e.head && (e.head.name = null);
          e.length = 0, e.mode = uo;
        case uo:
          if (e.flags & 4096) {
            if (l === 0)
              break e;
            v = 0;
            do
              T = r[n + v++], e.head && T && e.length < 65536 && (e.head.comment += String.fromCharCode(T));
            while (T && v < l);
            if (e.flags & 512 && e.wrap & 4 && (e.check = ee(e.check, r, v, n)), l -= v, n += v, T)
              break e;
          } else
            e.head && (e.head.comment = null);
          e.mode = po;
        case po:
          if (e.flags & 512) {
            for (; u < 16; ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            if (e.wrap & 4 && h !== (e.check & 65535)) {
              i.msg = "header crc mismatch", e.mode = K;
              break;
            }
            h = 0, u = 0;
          }
          e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), i.adler = e.check = 0, e.mode = De;
          break;
        case mo:
          for (; u < 32; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          i.adler = e.check = To(h), h = 0, u = 0, e.mode = ui;
        case ui:
          if (e.havedict === 0)
            return i.next_out = d, i.avail_out = p, i.next_in = n, i.avail_in = l, e.hold = h, e.bits = u, Ad;
          i.adler = e.check = 1, e.mode = De;
        case De:
          if (t === Sd || t === oi)
            break e;
        case Di:
          if (e.last) {
            h >>>= u & 7, u -= u & 7, e.mode = Ui;
            break;
          }
          for (; u < 3; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          switch (e.last = h & 1, h >>>= 1, u -= 1, h & 3) {
            case 0:
              e.mode = go;
              break;
            case 1:
              if (Od(e), e.mode = ni, t === oi) {
                h >>>= 2, u -= 2;
                break e;
              }
              break;
            case 2:
              e.mode = _o;
              break;
            case 3:
              i.msg = "invalid block type", e.mode = K;
          }
          h >>>= 2, u -= 2;
          break;
        case go:
          for (h >>>= u & 7, u -= u & 7; u < 32; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          if ((h & 65535) !== (h >>> 16 ^ 65535)) {
            i.msg = "invalid stored block lengths", e.mode = K;
            break;
          }
          if (e.length = h & 65535, h = 0, u = 0, e.mode = Fi, t === oi)
            break e;
        case Fi:
          e.mode = vo;
        case vo:
          if (v = e.length, v) {
            if (v > l && (v = l), v > p && (v = p), v === 0)
              break e;
            o.set(r.subarray(n, n + v), d), l -= v, n += v, p -= v, d += v, e.length -= v;
            break;
          }
          e.mode = De;
          break;
        case _o:
          for (; u < 14; ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          if (e.nlen = (h & 31) + 257, h >>>= 5, u -= 5, e.ndist = (h & 31) + 1, h >>>= 5, u -= 5, e.ncode = (h & 15) + 4, h >>>= 4, u -= 4, e.nlen > 286 || e.ndist > 30) {
            i.msg = "too many length or distance symbols", e.mode = K;
            break;
          }
          e.have = 0, e.mode = yo;
        case yo:
          for (; e.have < e.ncode; ) {
            for (; u < 3; ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            e.lens[J[e.have++]] = h & 7, h >>>= 3, u -= 3;
          }
          for (; e.have < 19; )
            e.lens[J[e.have++]] = 0;
          if (e.lencode = e.lendyn, e.lenbits = 7, B = { bits: e.lenbits }, D = Lt(Ed, e.lens, 0, 19, e.lencode, 0, e.work, B), e.lenbits = B.bits, D) {
            i.msg = "invalid code lengths set", e.mode = K;
            break;
          }
          e.have = 0, e.mode = bo;
        case bo:
          for (; e.have < e.nlen + e.ndist; ) {
            for (; A = e.lencode[h & (1 << e.lenbits) - 1], R = A >>> 24, k = A >>> 16 & 255, C = A & 65535, !(R <= u); ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            if (C < 16)
              h >>>= R, u -= R, e.lens[e.have++] = C;
            else {
              if (C === 16) {
                for (F = R + 2; u < F; ) {
                  if (l === 0)
                    break e;
                  l--, h += r[n++] << u, u += 8;
                }
                if (h >>>= R, u -= R, e.have === 0) {
                  i.msg = "invalid bit length repeat", e.mode = K;
                  break;
                }
                T = e.lens[e.have - 1], v = 3 + (h & 3), h >>>= 2, u -= 2;
              } else if (C === 17) {
                for (F = R + 3; u < F; ) {
                  if (l === 0)
                    break e;
                  l--, h += r[n++] << u, u += 8;
                }
                h >>>= R, u -= R, T = 0, v = 3 + (h & 7), h >>>= 3, u -= 3;
              } else {
                for (F = R + 7; u < F; ) {
                  if (l === 0)
                    break e;
                  l--, h += r[n++] << u, u += 8;
                }
                h >>>= R, u -= R, T = 0, v = 11 + (h & 127), h >>>= 7, u -= 7;
              }
              if (e.have + v > e.nlen + e.ndist) {
                i.msg = "invalid bit length repeat", e.mode = K;
                break;
              }
              for (; v--; )
                e.lens[e.have++] = T;
            }
          }
          if (e.mode === K)
            break;
          if (e.lens[256] === 0) {
            i.msg = "invalid code -- missing end-of-block", e.mode = K;
            break;
          }
          if (e.lenbits = 9, B = { bits: e.lenbits }, D = Lt(Tn, e.lens, 0, e.nlen, e.lencode, 0, e.work, B), e.lenbits = B.bits, D) {
            i.msg = "invalid literal/lengths set", e.mode = K;
            break;
          }
          if (e.distbits = 6, e.distcode = e.distdyn, B = { bits: e.distbits }, D = Lt(Rn, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, B), e.distbits = B.bits, D) {
            i.msg = "invalid distances set", e.mode = K;
            break;
          }
          if (e.mode = ni, t === oi)
            break e;
        case ni:
          e.mode = ai;
        case ai:
          if (l >= 6 && p >= 258) {
            i.next_out = d, i.avail_out = p, i.next_in = n, i.avail_in = l, e.hold = h, e.bits = u, vd(i, y), d = i.next_out, o = i.output, p = i.avail_out, n = i.next_in, r = i.input, l = i.avail_in, h = e.hold, u = e.bits, e.mode === De && (e.back = -1);
            break;
          }
          for (e.back = 0; A = e.lencode[h & (1 << e.lenbits) - 1], R = A >>> 24, k = A >>> 16 & 255, C = A & 65535, !(R <= u); ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          if (k && !(k & 240)) {
            for (x = R, $ = k, P = C; A = e.lencode[P + ((h & (1 << x + $) - 1) >> x)], R = A >>> 24, k = A >>> 16 & 255, C = A & 65535, !(x + R <= u); ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            h >>>= x, u -= x, e.back += x;
          }
          if (h >>>= R, u -= R, e.back += R, e.length = C, k === 0) {
            e.mode = ko;
            break;
          }
          if (k & 32) {
            e.back = -1, e.mode = De;
            break;
          }
          if (k & 64) {
            i.msg = "invalid literal/length code", e.mode = K;
            break;
          }
          e.extra = k & 15, e.mode = xo;
        case xo:
          if (e.extra) {
            for (F = e.extra; u < F; ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            e.length += h & (1 << e.extra) - 1, h >>>= e.extra, u -= e.extra, e.back += e.extra;
          }
          e.was = e.length, e.mode = wo;
        case wo:
          for (; A = e.distcode[h & (1 << e.distbits) - 1], R = A >>> 24, k = A >>> 16 & 255, C = A & 65535, !(R <= u); ) {
            if (l === 0)
              break e;
            l--, h += r[n++] << u, u += 8;
          }
          if (!(k & 240)) {
            for (x = R, $ = k, P = C; A = e.distcode[P + ((h & (1 << x + $) - 1) >> x)], R = A >>> 24, k = A >>> 16 & 255, C = A & 65535, !(x + R <= u); ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            h >>>= x, u -= x, e.back += x;
          }
          if (h >>>= R, u -= R, e.back += R, k & 64) {
            i.msg = "invalid distance code", e.mode = K;
            break;
          }
          e.offset = C, e.extra = k & 15, e.mode = Eo;
        case Eo:
          if (e.extra) {
            for (F = e.extra; u < F; ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            e.offset += h & (1 << e.extra) - 1, h >>>= e.extra, u -= e.extra, e.back += e.extra;
          }
          if (e.offset > e.dmax) {
            i.msg = "invalid distance too far back", e.mode = K;
            break;
          }
          e.mode = So;
        case So:
          if (p === 0)
            break e;
          if (v = y - p, e.offset > v) {
            if (v = e.offset - v, v > e.whave && e.sane) {
              i.msg = "invalid distance too far back", e.mode = K;
              break;
            }
            v > e.wnext ? (v -= e.wnext, S = e.wsize - v) : S = e.wnext - v, v > e.length && (v = e.length), I = e.window;
          } else
            I = o, S = d - e.offset, v = e.length;
          v > p && (v = p), p -= v, e.length -= v;
          do
            o[d++] = I[S++];
          while (--v);
          e.length === 0 && (e.mode = ai);
          break;
        case ko:
          if (p === 0)
            break e;
          o[d++] = e.length, p--, e.mode = ai;
          break;
        case Ui:
          if (e.wrap) {
            for (; u < 32; ) {
              if (l === 0)
                break e;
              l--, h |= r[n++] << u, u += 8;
            }
            if (y -= p, i.total_out += y, e.total += y, e.wrap & 4 && y && (i.adler = e.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            e.flags ? ee(e.check, o, y, d - y) : zt(e.check, o, y, d - y)), y = p, e.wrap & 4 && (e.flags ? h : To(h)) !== e.check) {
              i.msg = "incorrect data check", e.mode = K;
              break;
            }
            h = 0, u = 0;
          }
          e.mode = Ao;
        case Ao:
          if (e.wrap && e.flags) {
            for (; u < 32; ) {
              if (l === 0)
                break e;
              l--, h += r[n++] << u, u += 8;
            }
            if (e.wrap & 4 && h !== (e.total & 4294967295)) {
              i.msg = "incorrect length check", e.mode = K;
              break;
            }
            h = 0, u = 0;
          }
          e.mode = Io;
        case Io:
          D = kd;
          break e;
        case K:
          D = Cn;
          break e;
        case Bn:
          return $n;
        case Ln:
        default:
          return be;
      }
  return i.next_out = d, i.avail_out = p, i.next_in = n, i.avail_in = l, e.hold = h, e.bits = u, (e.wsize || y !== i.avail_out && e.mode < K && (e.mode < Ui || t !== oo)) && Pn(i, i.output, i.next_out, y - i.avail_out), w -= i.avail_in, y -= i.avail_out, i.total_in += w, i.total_out += y, e.total += y, e.wrap & 4 && y && (i.adler = e.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  e.flags ? ee(e.check, o, y, i.next_out - y) : zt(e.check, o, y, i.next_out - y)), i.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === De ? 128 : 0) + (e.mode === ni || e.mode === Fi ? 256 : 0), (w === 0 && y === 0 || t === oo) && D === rt && (D = Id), D;
}, Fd = (i) => {
  if (at(i))
    return be;
  let t = i.state;
  return t.window && (t.window = null), i.state = null, rt;
}, Ud = (i, t) => {
  if (at(i))
    return be;
  const e = i.state;
  return e.wrap & 2 ? (e.head = t, t.done = !1, rt) : be;
}, Pd = (i, t) => {
  const e = t.length;
  let r, o, n;
  return at(i) || (r = i.state, r.wrap !== 0 && r.mode !== ui) ? be : r.mode === ui && (o = 1, o = zt(o, t, e, 0), o !== r.check) ? Cn : (n = Pn(i, t, e, e), n ? (r.mode = Bn, $n) : (r.havedict = 1, rt));
};
var Md = Dn, zd = Fn, Nd = On, Hd = Ld, Zd = Un, Vd = Dd, Wd = Fd, qd = Ud, Kd = Pd, Gd = "pako inflate (from Nodeca project)", Ue = {
  inflateReset: Md,
  inflateReset2: zd,
  inflateResetKeep: Nd,
  inflateInit: Hd,
  inflateInit2: Zd,
  inflate: Vd,
  inflateEnd: Wd,
  inflateGetHeader: qd,
  inflateSetDictionary: Kd,
  inflateInfo: Gd
};
function Yd() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var jd = Yd;
const Mn = Object.prototype.toString, {
  Z_NO_FLUSH: Xd,
  Z_FINISH: Jd,
  Z_OK: Zt,
  Z_STREAM_END: zi,
  Z_NEED_DICT: Ni,
  Z_STREAM_ERROR: Qd,
  Z_DATA_ERROR: Co,
  Z_MEM_ERROR: ec
} = bt;
function Gt(i) {
  this.options = bi.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, i || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(i && i.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15 || (t.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new An(), this.strm.avail_out = 0;
  let e = Ue.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (e !== Zt)
    throw new Error(tt[e]);
  if (this.header = new jd(), Ue.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Ht.string2buf(t.dictionary) : Mn.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (e = Ue.inflateSetDictionary(this.strm, t.dictionary), e !== Zt)))
    throw new Error(tt[e]);
}
Gt.prototype.push = function(i, t) {
  const e = this.strm, r = this.options.chunkSize, o = this.options.dictionary;
  let n, d, l;
  if (this.ended)
    return !1;
  for (t === ~~t ? d = t : d = t === !0 ? Jd : Xd, Mn.call(i) === "[object ArrayBuffer]" ? e.input = new Uint8Array(i) : e.input = i, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    for (e.avail_out === 0 && (e.output = new Uint8Array(r), e.next_out = 0, e.avail_out = r), n = Ue.inflate(e, d), n === Ni && o && (n = Ue.inflateSetDictionary(e, o), n === Zt ? n = Ue.inflate(e, d) : n === Co && (n = Ni)); e.avail_in > 0 && n === zi && e.state.wrap > 0 && i[e.next_in] !== 0; )
      Ue.inflateReset(e), n = Ue.inflate(e, d);
    switch (n) {
      case Qd:
      case Co:
      case Ni:
      case ec:
        return this.onEnd(n), this.ended = !0, !1;
    }
    if (l = e.avail_out, e.next_out && (e.avail_out === 0 || n === zi))
      if (this.options.to === "string") {
        let p = Ht.utf8border(e.output, e.next_out), h = e.next_out - p, u = Ht.buf2string(e.output, p);
        e.next_out = h, e.avail_out = r - h, h && e.output.set(e.output.subarray(p, p + h), 0), this.onData(u);
      } else
        this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out));
    if (!(n === Zt && l === 0)) {
      if (n === zi)
        return n = Ue.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, !0;
      if (e.avail_in === 0)
        break;
    }
  }
  return !0;
};
Gt.prototype.onData = function(i) {
  this.chunks.push(i);
};
Gt.prototype.onEnd = function(i) {
  i === Zt && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = bi.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
function br(i, t) {
  const e = new Gt(t);
  if (e.push(i), e.err)
    throw e.msg || tt[e.err];
  return e.result;
}
function tc(i, t) {
  return t = t || {}, t.raw = !0, br(i, t);
}
var ic = Gt, rc = br, oc = tc, nc = br, ac = bt, sc = {
  Inflate: ic,
  inflate: rc,
  inflateRaw: oc,
  ungzip: nc,
  constants: ac
};
const { Deflate: Uc, deflate: lc, deflateRaw: Pc, gzip: Mc } = md, { Inflate: dc, inflate: zc, inflateRaw: Nc, ungzip: Hc } = sc;
var cc = lc, hc = dc;
class zn {
  constructor(t, e = !1, r = !0) {
    this.device = t, this.tracing = e, this.slipReaderEnabled = !1, this.leftOver = new Uint8Array(0), this.baudrate = 0, this.traceLog = "", this.lastTraceTime = Date.now(), this._DTR_state = !1, this.slipReaderEnabled = r;
  }
  /**
   * Request the serial device vendor ID and Product ID as string.
   * @returns {string} Return the device VendorID and ProductID from SerialPortInfo as formatted string.
   */
  getInfo() {
    const t = this.device.getInfo();
    return t.usbVendorId && t.usbProductId ? `WebSerial VendorID 0x${t.usbVendorId.toString(16)} ProductID 0x${t.usbProductId.toString(16)}` : "";
  }
  /**
   * Request the serial device product id from SerialPortInfo.
   * @returns {number | undefined} Return the product ID.
   */
  getPid() {
    return this.device.getInfo().usbProductId;
  }
  /**
   * Format received or sent data for tracing output.
   * @param {string} message Message to format as trace line.
   */
  trace(t) {
    const o = `${`TRACE ${(Date.now() - this.lastTraceTime).toFixed(3)}`} ${t}`;
    console.log(o), this.traceLog += o + `
`;
  }
  async returnTrace() {
    try {
      await navigator.clipboard.writeText(this.traceLog), console.log("Text copied to clipboard!");
    } catch (t) {
      console.error("Failed to copy text:", t);
    }
  }
  hexify(t) {
    return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("").padEnd(16, " ");
  }
  hexConvert(t, e = !0) {
    if (e && t.length > 16) {
      let r = "", o = t;
      for (; o.length > 0; ) {
        const n = o.slice(0, 16), d = String.fromCharCode(...n).split("").map((l) => l === " " || l >= " " && l <= "~" && l !== "  " ? l : ".").join("");
        o = o.slice(16), r += `
    ${this.hexify(n.slice(0, 8))} ${this.hexify(n.slice(8))} | ${d}`;
      }
      return r;
    } else
      return this.hexify(t);
  }
  /**
   * Format data packet using the Serial Line Internet Protocol (SLIP).
   * @param {Uint8Array} data Binary unsigned 8 bit array data to format.
   * @returns {Uint8Array} Formatted unsigned 8 bit data array.
   */
  slipWriter(t) {
    const e = [];
    e.push(192);
    for (let r = 0; r < t.length; r++)
      t[r] === 219 ? e.push(219, 221) : t[r] === 192 ? e.push(219, 220) : e.push(t[r]);
    return e.push(192), new Uint8Array(e);
  }
  /**
   * Write binary data to device using the WebSerial device writable stream.
   * @param {Uint8Array} data 8 bit unsigned data array to write to device.
   */
  async write(t) {
    const e = this.slipWriter(t);
    if (this.device.writable) {
      const r = this.device.writable.getWriter();
      this.tracing && (console.log("Write bytes"), this.trace(`Write ${e.length} bytes: ${this.hexConvert(e)}`)), await r.write(e), r.releaseLock();
    }
  }
  /**
   * Concatenate buffer2 to buffer1 and return the resulting ArrayBuffer.
   * @param {ArrayBuffer} buffer1 First buffer to concatenate.
   * @param {ArrayBuffer} buffer2 Second buffer to concatenate.
   * @returns {ArrayBuffer} Result Array buffer.
   */
  _appendBuffer(t, e) {
    const r = new Uint8Array(t.byteLength + e.byteLength);
    return r.set(new Uint8Array(t), 0), r.set(new Uint8Array(e), t.byteLength), r.buffer;
  }
  /**
   * Take a data array and return the first well formed packet after
   * replacing the escape sequence. Reads at least 8 bytes.
   * @param {Uint8Array} data Unsigned 8 bit array from the device read stream.
   * @returns {Uint8Array} Formatted packet using SLIP escape sequences.
   */
  slipReader(t) {
    let e = 0, r = 0, o = 0, n = "init";
    for (; e < t.length; ) {
      if (n === "init" && t[e] == 192) {
        r = e + 1, n = "valid_data", e++;
        continue;
      }
      if (n === "valid_data" && t[e] == 192) {
        o = e - 1, n = "packet_complete";
        break;
      }
      e++;
    }
    if (n !== "packet_complete")
      return this.leftOver = t, new Uint8Array(0);
    this.leftOver = t.slice(o + 2);
    const d = new Uint8Array(o - r + 1);
    let l = 0;
    for (e = r; e <= o; e++, l++) {
      if (t[e] === 219 && t[e + 1] === 220) {
        d[l] = 192, e++;
        continue;
      }
      if (t[e] === 219 && t[e + 1] === 221) {
        d[l] = 219, e++;
        continue;
      }
      d[l] = t[e];
    }
    return d.slice(0, l);
  }
  /**
   * Read from serial device using the device ReadableStream.
   * @param {number} timeout Read timeout number
   * @param {number} minData Minimum packet array length
   * @returns {Uint8Array} 8 bit unsigned data array read from device.
   */
  async read(t = 0, e = 12) {
    let r, o = this.leftOver;
    if (this.leftOver = new Uint8Array(0), this.slipReaderEnabled) {
      const d = this.slipReader(o);
      if (d.length > 0)
        return d;
      o = this.leftOver, this.leftOver = new Uint8Array(0);
    }
    if (this.device.readable == null)
      return this.leftOver;
    const n = this.device.readable.getReader();
    try {
      t > 0 && (r = setTimeout(function() {
        n.cancel();
      }, t));
      do {
        const { value: d, done: l } = await n.read();
        if (l)
          throw this.leftOver = o, new Error("Timeout");
        o = new Uint8Array(this._appendBuffer(o.buffer, d.buffer));
      } while (o.length < e);
    } finally {
      t > 0 && clearTimeout(r), n.releaseLock();
    }
    if (this.tracing && (console.log("Read bytes"), this.trace(`Read ${o.length} bytes: ${this.hexConvert(o)}`)), this.slipReaderEnabled) {
      const d = this.slipReader(o);
      return this.tracing && (console.log("Slip reader results"), this.trace(`Read ${d.length} bytes: ${this.hexConvert(d)}`)), d;
    }
    return o;
  }
  /**
   * Read from serial device without slip formatting.
   * @param {number} timeout Read timeout in milliseconds (ms)
   * @returns {Uint8Array} 8 bit unsigned data array read from device.
   */
  async rawRead(t = 0) {
    if (this.leftOver.length != 0) {
      const o = this.leftOver;
      return this.leftOver = new Uint8Array(0), o;
    }
    if (!this.device.readable)
      return this.leftOver;
    const e = this.device.readable.getReader();
    let r;
    try {
      t > 0 && (r = setTimeout(function() {
        e.cancel();
      }, t));
      const { value: o, done: n } = await e.read();
      if (n)
        throw new Error("Timeout");
      return this.tracing && (console.log("Raw Read bytes"), this.trace(`Read ${o.length} bytes: ${this.hexConvert(o)}`)), o;
    } finally {
      t > 0 && clearTimeout(r), e.releaseLock();
    }
  }
  /**
   * Send the RequestToSend (RTS) signal to given state
   * # True for EN=LOW, chip in reset and False EN=HIGH, chip out of reset
   * @param {boolean} state Boolean state to set the signal
   */
  async setRTS(t) {
    await this.device.setSignals({ requestToSend: t }), await this.setDTR(this._DTR_state);
  }
  /**
   * Send the dataTerminalReady (DTS) signal to given state
   * # True for IO0=LOW, chip in reset and False IO0=HIGH
   * @param {boolean} state Boolean state to set the signal
   */
  async setDTR(t) {
    this._DTR_state = t, await this.device.setSignals({ dataTerminalReady: t });
  }
  /**
   * Connect to serial device using the Webserial open method.
   * @param {number} baud Number baud rate for serial connection.
   * @param {typeof import("w3c-web-serial").SerialOptions} serialOptions Serial Options for WebUSB SerialPort class.
   */
  async connect(t = 115200, e = {}) {
    await this.device.open({
      baudRate: t,
      dataBits: e == null ? void 0 : e.dataBits,
      stopBits: e == null ? void 0 : e.stopBits,
      bufferSize: e == null ? void 0 : e.bufferSize,
      parity: e == null ? void 0 : e.parity,
      flowControl: e == null ? void 0 : e.flowControl
    }), this.baudrate = t, this.leftOver = new Uint8Array(0);
  }
  async sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  /**
   * Wait for a given timeout ms for serial device unlock.
   * @param {number} timeout Timeout time in milliseconds (ms) to sleep
   */
  async waitForUnlock(t) {
    for (; this.device.readable && this.device.readable.locked || this.device.writable && this.device.writable.locked; )
      await this.sleep(t);
  }
  /**
   * Disconnect from serial device by running SerialPort.close() after streams unlock.
   */
  async disconnect() {
    await this.waitForUnlock(400), await this.device.close();
  }
}
function li(i) {
  return new Promise((t) => setTimeout(t, i));
}
async function fc(i) {
  await i.setRTS(!1), await i.setDTR(!1), await li(100), await i.setDTR(!0), await i.setRTS(!1), await li(100), await i.setRTS(!0), await i.setDTR(!1), await i.setRTS(!0), await li(100), await i.setRTS(!1), await i.setDTR(!1);
}
function uc(i) {
  const t = ["D", "R", "W"], e = i.split("|");
  for (const r of e) {
    const o = r[0], n = r.slice(1);
    if (!t.includes(o))
      return !1;
    if (o === "D" || o === "R") {
      if (n !== "0" && n !== "1")
        return !1;
    } else if (o === "W") {
      const d = parseInt(n);
      if (isNaN(d) || d <= 0)
        return !1;
    }
  }
  return !0;
}
async function pc(i, t) {
  const e = {
    D: async (r) => await i.setDTR(r),
    R: async (r) => await i.setRTS(r),
    W: async (r) => await li(r)
  };
  try {
    if (!uc(t))
      return;
    const o = t.split("|");
    for (const n of o) {
      const d = n[0], l = n.slice(1);
      d === "W" ? await e.W(Number(l)) : (d === "D" || d === "R") && await e[d](l === "1");
    }
  } catch {
    throw new Error("Invalid custom reset sequence");
  }
}
var nr = {}, wi = {};
wi.byteLength = vc;
wi.toByteArray = yc;
wi.fromByteArray = wc;
var Ce = [], ve = [], mc = typeof Uint8Array < "u" ? Uint8Array : Array, Hi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ht = 0, gc = Hi.length; ht < gc; ++ht)
  Ce[ht] = Hi[ht], ve[Hi.charCodeAt(ht)] = ht;
ve[45] = 62;
ve[95] = 63;
function Nn(i) {
  var t = i.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = i.indexOf("=");
  e === -1 && (e = t);
  var r = e === t ? 0 : 4 - e % 4;
  return [e, r];
}
function vc(i) {
  var t = Nn(i), e = t[0], r = t[1];
  return (e + r) * 3 / 4 - r;
}
function _c(i, t, e) {
  return (t + e) * 3 / 4 - e;
}
function yc(i) {
  var t, e = Nn(i), r = e[0], o = e[1], n = new mc(_c(i, r, o)), d = 0, l = o > 0 ? r - 4 : r, p;
  for (p = 0; p < l; p += 4)
    t = ve[i.charCodeAt(p)] << 18 | ve[i.charCodeAt(p + 1)] << 12 | ve[i.charCodeAt(p + 2)] << 6 | ve[i.charCodeAt(p + 3)], n[d++] = t >> 16 & 255, n[d++] = t >> 8 & 255, n[d++] = t & 255;
  return o === 2 && (t = ve[i.charCodeAt(p)] << 2 | ve[i.charCodeAt(p + 1)] >> 4, n[d++] = t & 255), o === 1 && (t = ve[i.charCodeAt(p)] << 10 | ve[i.charCodeAt(p + 1)] << 4 | ve[i.charCodeAt(p + 2)] >> 2, n[d++] = t >> 8 & 255, n[d++] = t & 255), n;
}
function bc(i) {
  return Ce[i >> 18 & 63] + Ce[i >> 12 & 63] + Ce[i >> 6 & 63] + Ce[i & 63];
}
function xc(i, t, e) {
  for (var r, o = [], n = t; n < e; n += 3)
    r = (i[n] << 16 & 16711680) + (i[n + 1] << 8 & 65280) + (i[n + 2] & 255), o.push(bc(r));
  return o.join("");
}
function wc(i) {
  for (var t, e = i.length, r = e % 3, o = [], n = 16383, d = 0, l = e - r; d < l; d += n)
    o.push(xc(i, d, d + n > l ? l : d + n));
  return r === 1 ? (t = i[e - 1], o.push(
    Ce[t >> 2] + Ce[t << 4 & 63] + "=="
  )) : r === 2 && (t = (i[e - 2] << 8) + i[e - 1], o.push(
    Ce[t >> 10] + Ce[t >> 4 & 63] + Ce[t << 2 & 63] + "="
  )), o.join("");
}
var xr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
xr.read = function(i, t, e, r, o) {
  var n, d, l = o * 8 - r - 1, p = (1 << l) - 1, h = p >> 1, u = -7, w = e ? o - 1 : 0, y = e ? -1 : 1, v = i[t + w];
  for (w += y, n = v & (1 << -u) - 1, v >>= -u, u += l; u > 0; n = n * 256 + i[t + w], w += y, u -= 8)
    ;
  for (d = n & (1 << -u) - 1, n >>= -u, u += r; u > 0; d = d * 256 + i[t + w], w += y, u -= 8)
    ;
  if (n === 0)
    n = 1 - h;
  else {
    if (n === p)
      return d ? NaN : (v ? -1 : 1) * (1 / 0);
    d = d + Math.pow(2, r), n = n - h;
  }
  return (v ? -1 : 1) * d * Math.pow(2, n - r);
};
xr.write = function(i, t, e, r, o, n) {
  var d, l, p, h = n * 8 - o - 1, u = (1 << h) - 1, w = u >> 1, y = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = r ? 0 : n - 1, S = r ? 1 : -1, I = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, d = u) : (d = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -d)) < 1 && (d--, p *= 2), d + w >= 1 ? t += y / p : t += y * Math.pow(2, 1 - w), t * p >= 2 && (d++, p /= 2), d + w >= u ? (l = 0, d = u) : d + w >= 1 ? (l = (t * p - 1) * Math.pow(2, o), d = d + w) : (l = t * Math.pow(2, w - 1) * Math.pow(2, o), d = 0)); o >= 8; i[e + v] = l & 255, v += S, l /= 256, o -= 8)
    ;
  for (d = d << o | l, h += o; h > 0; i[e + v] = d & 255, v += S, d /= 256, h -= 8)
    ;
  i[e + v - S] |= I * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(i) {
  const t = wi, e = xr, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  i.Buffer = l, i.SlowBuffer = k, i.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  i.kMaxLength = o, l.TYPED_ARRAY_SUPPORT = n(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function n() {
    try {
      const c = new Uint8Array(1), a = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(a, Uint8Array.prototype), Object.setPrototypeOf(c, a), c.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(l.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (l.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(l.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (l.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(c) {
    if (c > o)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
    const a = new Uint8Array(c);
    return Object.setPrototypeOf(a, l.prototype), a;
  }
  function l(c, a, s) {
    if (typeof c == "number") {
      if (typeof a == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return w(c);
    }
    return p(c, a, s);
  }
  l.poolSize = 8192;
  function p(c, a, s) {
    if (typeof c == "string")
      return y(c, a);
    if (ArrayBuffer.isView(c))
      return S(c);
    if (c == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
      );
    if (Ie(c, ArrayBuffer) || c && Ie(c.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ie(c, SharedArrayBuffer) || c && Ie(c.buffer, SharedArrayBuffer)))
      return I(c, a, s);
    if (typeof c == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const f = c.valueOf && c.valueOf();
    if (f != null && f !== c)
      return l.from(f, a, s);
    const m = A(c);
    if (m)
      return m;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof c[Symbol.toPrimitive] == "function")
      return l.from(c[Symbol.toPrimitive]("string"), a, s);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
    );
  }
  l.from = function(c, a, s) {
    return p(c, a, s);
  }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
  function h(c) {
    if (typeof c != "number")
      throw new TypeError('"size" argument must be of type number');
    if (c < 0)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
  }
  function u(c, a, s) {
    return h(c), c <= 0 ? d(c) : a !== void 0 ? typeof s == "string" ? d(c).fill(a, s) : d(c).fill(a) : d(c);
  }
  l.alloc = function(c, a, s) {
    return u(c, a, s);
  };
  function w(c) {
    return h(c), d(c < 0 ? 0 : R(c) | 0);
  }
  l.allocUnsafe = function(c) {
    return w(c);
  }, l.allocUnsafeSlow = function(c) {
    return w(c);
  };
  function y(c, a) {
    if ((typeof a != "string" || a === "") && (a = "utf8"), !l.isEncoding(a))
      throw new TypeError("Unknown encoding: " + a);
    const s = C(c, a) | 0;
    let f = d(s);
    const m = f.write(c, a);
    return m !== s && (f = f.slice(0, m)), f;
  }
  function v(c) {
    const a = c.length < 0 ? 0 : R(c.length) | 0, s = d(a);
    for (let f = 0; f < a; f += 1)
      s[f] = c[f] & 255;
    return s;
  }
  function S(c) {
    if (Ie(c, Uint8Array)) {
      const a = new Uint8Array(c);
      return I(a.buffer, a.byteOffset, a.byteLength);
    }
    return v(c);
  }
  function I(c, a, s) {
    if (a < 0 || c.byteLength < a)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (c.byteLength < a + (s || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let f;
    return a === void 0 && s === void 0 ? f = new Uint8Array(c) : s === void 0 ? f = new Uint8Array(c, a) : f = new Uint8Array(c, a, s), Object.setPrototypeOf(f, l.prototype), f;
  }
  function A(c) {
    if (l.isBuffer(c)) {
      const a = R(c.length) | 0, s = d(a);
      return s.length === 0 || c.copy(s, 0, 0, a), s;
    }
    if (c.length !== void 0)
      return typeof c.length != "number" || ki(c.length) ? d(0) : v(c);
    if (c.type === "Buffer" && Array.isArray(c.data))
      return v(c.data);
  }
  function R(c) {
    if (c >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return c | 0;
  }
  function k(c) {
    return +c != c && (c = 0), l.alloc(+c);
  }
  l.isBuffer = function(a) {
    return a != null && a._isBuffer === !0 && a !== l.prototype;
  }, l.compare = function(a, s) {
    if (Ie(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), Ie(s, Uint8Array) && (s = l.from(s, s.offset, s.byteLength)), !l.isBuffer(a) || !l.isBuffer(s))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (a === s)
      return 0;
    let f = a.length, m = s.length;
    for (let _ = 0, b = Math.min(f, m); _ < b; ++_)
      if (a[_] !== s[_]) {
        f = a[_], m = s[_];
        break;
      }
    return f < m ? -1 : m < f ? 1 : 0;
  }, l.isEncoding = function(a) {
    switch (String(a).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, l.concat = function(a, s) {
    if (!Array.isArray(a))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (a.length === 0)
      return l.alloc(0);
    let f;
    if (s === void 0)
      for (s = 0, f = 0; f < a.length; ++f)
        s += a[f].length;
    const m = l.allocUnsafe(s);
    let _ = 0;
    for (f = 0; f < a.length; ++f) {
      let b = a[f];
      if (Ie(b, Uint8Array))
        _ + b.length > m.length ? (l.isBuffer(b) || (b = l.from(b)), b.copy(m, _)) : Uint8Array.prototype.set.call(
          m,
          b,
          _
        );
      else if (l.isBuffer(b))
        b.copy(m, _);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      _ += b.length;
    }
    return m;
  };
  function C(c, a) {
    if (l.isBuffer(c))
      return c.length;
    if (ArrayBuffer.isView(c) || Ie(c, ArrayBuffer))
      return c.byteLength;
    if (typeof c != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof c
      );
    const s = c.length, f = arguments.length > 2 && arguments[2] === !0;
    if (!f && s === 0)
      return 0;
    let m = !1;
    for (; ; )
      switch (a) {
        case "ascii":
        case "latin1":
        case "binary":
          return s;
        case "utf8":
        case "utf-8":
          return Si(c).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return s * 2;
        case "hex":
          return s >>> 1;
        case "base64":
          return Rr(c).length;
        default:
          if (m)
            return f ? -1 : Si(c).length;
          a = ("" + a).toLowerCase(), m = !0;
      }
  }
  l.byteLength = C;
  function x(c, a, s) {
    let f = !1;
    if ((a === void 0 || a < 0) && (a = 0), a > this.length || ((s === void 0 || s > this.length) && (s = this.length), s <= 0) || (s >>>= 0, a >>>= 0, s <= a))
      return "";
    for (c || (c = "utf8"); ; )
      switch (c) {
        case "hex":
          return Vn(this, a, s);
        case "utf8":
        case "utf-8":
          return he(this, a, s);
        case "ascii":
          return Hn(this, a, s);
        case "latin1":
        case "binary":
          return Zn(this, a, s);
        case "base64":
          return He(this, a, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Wn(this, a, s);
        default:
          if (f)
            throw new TypeError("Unknown encoding: " + c);
          c = (c + "").toLowerCase(), f = !0;
      }
  }
  l.prototype._isBuffer = !0;
  function $(c, a, s) {
    const f = c[a];
    c[a] = c[s], c[s] = f;
  }
  l.prototype.swap16 = function() {
    const a = this.length;
    if (a % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let s = 0; s < a; s += 2)
      $(this, s, s + 1);
    return this;
  }, l.prototype.swap32 = function() {
    const a = this.length;
    if (a % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let s = 0; s < a; s += 4)
      $(this, s, s + 3), $(this, s + 1, s + 2);
    return this;
  }, l.prototype.swap64 = function() {
    const a = this.length;
    if (a % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let s = 0; s < a; s += 8)
      $(this, s, s + 7), $(this, s + 1, s + 6), $(this, s + 2, s + 5), $(this, s + 3, s + 4);
    return this;
  }, l.prototype.toString = function() {
    const a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? he(this, 0, a) : x.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(a) {
    if (!l.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : l.compare(this, a) === 0;
  }, l.prototype.inspect = function() {
    let a = "";
    const s = i.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim(), this.length > s && (a += " ... "), "<Buffer " + a + ">";
  }, r && (l.prototype[r] = l.prototype.inspect), l.prototype.compare = function(a, s, f, m, _) {
    if (Ie(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), !l.isBuffer(a))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a
      );
    if (s === void 0 && (s = 0), f === void 0 && (f = a ? a.length : 0), m === void 0 && (m = 0), _ === void 0 && (_ = this.length), s < 0 || f > a.length || m < 0 || _ > this.length)
      throw new RangeError("out of range index");
    if (m >= _ && s >= f)
      return 0;
    if (m >= _)
      return -1;
    if (s >= f)
      return 1;
    if (s >>>= 0, f >>>= 0, m >>>= 0, _ >>>= 0, this === a)
      return 0;
    let b = _ - m, M = f - s;
    const G = Math.min(b, M), q = this.slice(m, _), Y = a.slice(s, f);
    for (let V = 0; V < G; ++V)
      if (q[V] !== Y[V]) {
        b = q[V], M = Y[V];
        break;
      }
    return b < M ? -1 : M < b ? 1 : 0;
  };
  function P(c, a, s, f, m) {
    if (c.length === 0)
      return -1;
    if (typeof s == "string" ? (f = s, s = 0) : s > 2147483647 ? s = 2147483647 : s < -2147483648 && (s = -2147483648), s = +s, ki(s) && (s = m ? 0 : c.length - 1), s < 0 && (s = c.length + s), s >= c.length) {
      if (m)
        return -1;
      s = c.length - 1;
    } else if (s < 0)
      if (m)
        s = 0;
      else
        return -1;
    if (typeof a == "string" && (a = l.from(a, f)), l.isBuffer(a))
      return a.length === 0 ? -1 : T(c, a, s, f, m);
    if (typeof a == "number")
      return a = a & 255, typeof Uint8Array.prototype.indexOf == "function" ? m ? Uint8Array.prototype.indexOf.call(c, a, s) : Uint8Array.prototype.lastIndexOf.call(c, a, s) : T(c, [a], s, f, m);
    throw new TypeError("val must be string, number or Buffer");
  }
  function T(c, a, s, f, m) {
    let _ = 1, b = c.length, M = a.length;
    if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
      if (c.length < 2 || a.length < 2)
        return -1;
      _ = 2, b /= 2, M /= 2, s /= 2;
    }
    function G(Y, V) {
      return _ === 1 ? Y[V] : Y.readUInt16BE(V * _);
    }
    let q;
    if (m) {
      let Y = -1;
      for (q = s; q < b; q++)
        if (G(c, q) === G(a, Y === -1 ? 0 : q - Y)) {
          if (Y === -1 && (Y = q), q - Y + 1 === M)
            return Y * _;
        } else
          Y !== -1 && (q -= q - Y), Y = -1;
    } else
      for (s + M > b && (s = b - M), q = s; q >= 0; q--) {
        let Y = !0;
        for (let V = 0; V < M; V++)
          if (G(c, q + V) !== G(a, V)) {
            Y = !1;
            break;
          }
        if (Y)
          return q;
      }
    return -1;
  }
  l.prototype.includes = function(a, s, f) {
    return this.indexOf(a, s, f) !== -1;
  }, l.prototype.indexOf = function(a, s, f) {
    return P(this, a, s, f, !0);
  }, l.prototype.lastIndexOf = function(a, s, f) {
    return P(this, a, s, f, !1);
  };
  function D(c, a, s, f) {
    s = Number(s) || 0;
    const m = c.length - s;
    f ? (f = Number(f), f > m && (f = m)) : f = m;
    const _ = a.length;
    f > _ / 2 && (f = _ / 2);
    let b;
    for (b = 0; b < f; ++b) {
      const M = parseInt(a.substr(b * 2, 2), 16);
      if (ki(M))
        return b;
      c[s + b] = M;
    }
    return b;
  }
  function L(c, a, s, f) {
    return Yt(Si(a, c.length - s), c, s, f);
  }
  function B(c, a, s, f) {
    return Yt(Yn(a), c, s, f);
  }
  function F(c, a, s, f) {
    return Yt(Rr(a), c, s, f);
  }
  function J(c, a, s, f) {
    return Yt(jn(a, c.length - s), c, s, f);
  }
  l.prototype.write = function(a, s, f, m) {
    if (s === void 0)
      m = "utf8", f = this.length, s = 0;
    else if (f === void 0 && typeof s == "string")
      m = s, f = this.length, s = 0;
    else if (isFinite(s))
      s = s >>> 0, isFinite(f) ? (f = f >>> 0, m === void 0 && (m = "utf8")) : (m = f, f = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const _ = this.length - s;
    if ((f === void 0 || f > _) && (f = _), a.length > 0 && (f < 0 || s < 0) || s > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    m || (m = "utf8");
    let b = !1;
    for (; ; )
      switch (m) {
        case "hex":
          return D(this, a, s, f);
        case "utf8":
        case "utf-8":
          return L(this, a, s, f);
        case "ascii":
        case "latin1":
        case "binary":
          return B(this, a, s, f);
        case "base64":
          return F(this, a, s, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return J(this, a, s, f);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + m);
          m = ("" + m).toLowerCase(), b = !0;
      }
  }, l.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function He(c, a, s) {
    return a === 0 && s === c.length ? t.fromByteArray(c) : t.fromByteArray(c.slice(a, s));
  }
  function he(c, a, s) {
    s = Math.min(c.length, s);
    const f = [];
    let m = a;
    for (; m < s; ) {
      const _ = c[m];
      let b = null, M = _ > 239 ? 4 : _ > 223 ? 3 : _ > 191 ? 2 : 1;
      if (m + M <= s) {
        let G, q, Y, V;
        switch (M) {
          case 1:
            _ < 128 && (b = _);
            break;
          case 2:
            G = c[m + 1], (G & 192) === 128 && (V = (_ & 31) << 6 | G & 63, V > 127 && (b = V));
            break;
          case 3:
            G = c[m + 1], q = c[m + 2], (G & 192) === 128 && (q & 192) === 128 && (V = (_ & 15) << 12 | (G & 63) << 6 | q & 63, V > 2047 && (V < 55296 || V > 57343) && (b = V));
            break;
          case 4:
            G = c[m + 1], q = c[m + 2], Y = c[m + 3], (G & 192) === 128 && (q & 192) === 128 && (Y & 192) === 128 && (V = (_ & 15) << 18 | (G & 63) << 12 | (q & 63) << 6 | Y & 63, V > 65535 && V < 1114112 && (b = V));
        }
      }
      b === null ? (b = 65533, M = 1) : b > 65535 && (b -= 65536, f.push(b >>> 10 & 1023 | 55296), b = 56320 | b & 1023), f.push(b), m += M;
    }
    return Ee(f);
  }
  const we = 4096;
  function Ee(c) {
    const a = c.length;
    if (a <= we)
      return String.fromCharCode.apply(String, c);
    let s = "", f = 0;
    for (; f < a; )
      s += String.fromCharCode.apply(
        String,
        c.slice(f, f += we)
      );
    return s;
  }
  function Hn(c, a, s) {
    let f = "";
    s = Math.min(c.length, s);
    for (let m = a; m < s; ++m)
      f += String.fromCharCode(c[m] & 127);
    return f;
  }
  function Zn(c, a, s) {
    let f = "";
    s = Math.min(c.length, s);
    for (let m = a; m < s; ++m)
      f += String.fromCharCode(c[m]);
    return f;
  }
  function Vn(c, a, s) {
    const f = c.length;
    (!a || a < 0) && (a = 0), (!s || s < 0 || s > f) && (s = f);
    let m = "";
    for (let _ = a; _ < s; ++_)
      m += Xn[c[_]];
    return m;
  }
  function Wn(c, a, s) {
    const f = c.slice(a, s);
    let m = "";
    for (let _ = 0; _ < f.length - 1; _ += 2)
      m += String.fromCharCode(f[_] + f[_ + 1] * 256);
    return m;
  }
  l.prototype.slice = function(a, s) {
    const f = this.length;
    a = ~~a, s = s === void 0 ? f : ~~s, a < 0 ? (a += f, a < 0 && (a = 0)) : a > f && (a = f), s < 0 ? (s += f, s < 0 && (s = 0)) : s > f && (s = f), s < a && (s = a);
    const m = this.subarray(a, s);
    return Object.setPrototypeOf(m, l.prototype), m;
  };
  function Q(c, a, s) {
    if (c % 1 !== 0 || c < 0)
      throw new RangeError("offset is not uint");
    if (c + a > s)
      throw new RangeError("Trying to access beyond buffer length");
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function(a, s, f) {
    a = a >>> 0, s = s >>> 0, f || Q(a, s, this.length);
    let m = this[a], _ = 1, b = 0;
    for (; ++b < s && (_ *= 256); )
      m += this[a + b] * _;
    return m;
  }, l.prototype.readUintBE = l.prototype.readUIntBE = function(a, s, f) {
    a = a >>> 0, s = s >>> 0, f || Q(a, s, this.length);
    let m = this[a + --s], _ = 1;
    for (; s > 0 && (_ *= 256); )
      m += this[a + --s] * _;
    return m;
  }, l.prototype.readUint8 = l.prototype.readUInt8 = function(a, s) {
    return a = a >>> 0, s || Q(a, 1, this.length), this[a];
  }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(a, s) {
    return a = a >>> 0, s || Q(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(a, s) {
    return a = a >>> 0, s || Q(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(a, s) {
    return a = a >>> 0, s || Q(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(a, s) {
    return a = a >>> 0, s || Q(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, l.prototype.readBigUInt64LE = Ze(function(a) {
    a = a >>> 0, lt(a, "offset");
    const s = this[a], f = this[a + 7];
    (s === void 0 || f === void 0) && Et(a, this.length - 8);
    const m = s + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, _ = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + f * 2 ** 24;
    return BigInt(m) + (BigInt(_) << BigInt(32));
  }), l.prototype.readBigUInt64BE = Ze(function(a) {
    a = a >>> 0, lt(a, "offset");
    const s = this[a], f = this[a + 7];
    (s === void 0 || f === void 0) && Et(a, this.length - 8);
    const m = s * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], _ = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + f;
    return (BigInt(m) << BigInt(32)) + BigInt(_);
  }), l.prototype.readIntLE = function(a, s, f) {
    a = a >>> 0, s = s >>> 0, f || Q(a, s, this.length);
    let m = this[a], _ = 1, b = 0;
    for (; ++b < s && (_ *= 256); )
      m += this[a + b] * _;
    return _ *= 128, m >= _ && (m -= Math.pow(2, 8 * s)), m;
  }, l.prototype.readIntBE = function(a, s, f) {
    a = a >>> 0, s = s >>> 0, f || Q(a, s, this.length);
    let m = s, _ = 1, b = this[a + --m];
    for (; m > 0 && (_ *= 256); )
      b += this[a + --m] * _;
    return _ *= 128, b >= _ && (b -= Math.pow(2, 8 * s)), b;
  }, l.prototype.readInt8 = function(a, s) {
    return a = a >>> 0, s || Q(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, l.prototype.readInt16LE = function(a, s) {
    a = a >>> 0, s || Q(a, 2, this.length);
    const f = this[a] | this[a + 1] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, l.prototype.readInt16BE = function(a, s) {
    a = a >>> 0, s || Q(a, 2, this.length);
    const f = this[a + 1] | this[a] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, l.prototype.readInt32LE = function(a, s) {
    return a = a >>> 0, s || Q(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, l.prototype.readInt32BE = function(a, s) {
    return a = a >>> 0, s || Q(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, l.prototype.readBigInt64LE = Ze(function(a) {
    a = a >>> 0, lt(a, "offset");
    const s = this[a], f = this[a + 7];
    (s === void 0 || f === void 0) && Et(a, this.length - 8);
    const m = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (f << 24);
    return (BigInt(m) << BigInt(32)) + BigInt(s + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), l.prototype.readBigInt64BE = Ze(function(a) {
    a = a >>> 0, lt(a, "offset");
    const s = this[a], f = this[a + 7];
    (s === void 0 || f === void 0) && Et(a, this.length - 8);
    const m = (s << 24) + // Overflow
    this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(m) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + f);
  }), l.prototype.readFloatLE = function(a, s) {
    return a = a >>> 0, s || Q(a, 4, this.length), e.read(this, a, !0, 23, 4);
  }, l.prototype.readFloatBE = function(a, s) {
    return a = a >>> 0, s || Q(a, 4, this.length), e.read(this, a, !1, 23, 4);
  }, l.prototype.readDoubleLE = function(a, s) {
    return a = a >>> 0, s || Q(a, 8, this.length), e.read(this, a, !0, 52, 8);
  }, l.prototype.readDoubleBE = function(a, s) {
    return a = a >>> 0, s || Q(a, 8, this.length), e.read(this, a, !1, 52, 8);
  };
  function de(c, a, s, f, m, _) {
    if (!l.isBuffer(c))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (a > m || a < _)
      throw new RangeError('"value" argument is out of bounds');
    if (s + f > c.length)
      throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(a, s, f, m) {
    if (a = +a, s = s >>> 0, f = f >>> 0, !m) {
      const M = Math.pow(2, 8 * f) - 1;
      de(this, a, s, f, M, 0);
    }
    let _ = 1, b = 0;
    for (this[s] = a & 255; ++b < f && (_ *= 256); )
      this[s + b] = a / _ & 255;
    return s + f;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(a, s, f, m) {
    if (a = +a, s = s >>> 0, f = f >>> 0, !m) {
      const M = Math.pow(2, 8 * f) - 1;
      de(this, a, s, f, M, 0);
    }
    let _ = f - 1, b = 1;
    for (this[s + _] = a & 255; --_ >= 0 && (b *= 256); )
      this[s + _] = a / b & 255;
    return s + f;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 1, 255, 0), this[s] = a & 255, s + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 2, 65535, 0), this[s] = a & 255, this[s + 1] = a >>> 8, s + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 2, 65535, 0), this[s] = a >>> 8, this[s + 1] = a & 255, s + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 4, 4294967295, 0), this[s + 3] = a >>> 24, this[s + 2] = a >>> 16, this[s + 1] = a >>> 8, this[s] = a & 255, s + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 4, 4294967295, 0), this[s] = a >>> 24, this[s + 1] = a >>> 16, this[s + 2] = a >>> 8, this[s + 3] = a & 255, s + 4;
  };
  function wr(c, a, s, f, m) {
    Tr(a, f, m, c, s, 7);
    let _ = Number(a & BigInt(4294967295));
    c[s++] = _, _ = _ >> 8, c[s++] = _, _ = _ >> 8, c[s++] = _, _ = _ >> 8, c[s++] = _;
    let b = Number(a >> BigInt(32) & BigInt(4294967295));
    return c[s++] = b, b = b >> 8, c[s++] = b, b = b >> 8, c[s++] = b, b = b >> 8, c[s++] = b, s;
  }
  function Er(c, a, s, f, m) {
    Tr(a, f, m, c, s, 7);
    let _ = Number(a & BigInt(4294967295));
    c[s + 7] = _, _ = _ >> 8, c[s + 6] = _, _ = _ >> 8, c[s + 5] = _, _ = _ >> 8, c[s + 4] = _;
    let b = Number(a >> BigInt(32) & BigInt(4294967295));
    return c[s + 3] = b, b = b >> 8, c[s + 2] = b, b = b >> 8, c[s + 1] = b, b = b >> 8, c[s] = b, s + 8;
  }
  l.prototype.writeBigUInt64LE = Ze(function(a, s = 0) {
    return wr(this, a, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeBigUInt64BE = Ze(function(a, s = 0) {
    return Er(this, a, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeIntLE = function(a, s, f, m) {
    if (a = +a, s = s >>> 0, !m) {
      const G = Math.pow(2, 8 * f - 1);
      de(this, a, s, f, G - 1, -G);
    }
    let _ = 0, b = 1, M = 0;
    for (this[s] = a & 255; ++_ < f && (b *= 256); )
      a < 0 && M === 0 && this[s + _ - 1] !== 0 && (M = 1), this[s + _] = (a / b >> 0) - M & 255;
    return s + f;
  }, l.prototype.writeIntBE = function(a, s, f, m) {
    if (a = +a, s = s >>> 0, !m) {
      const G = Math.pow(2, 8 * f - 1);
      de(this, a, s, f, G - 1, -G);
    }
    let _ = f - 1, b = 1, M = 0;
    for (this[s + _] = a & 255; --_ >= 0 && (b *= 256); )
      a < 0 && M === 0 && this[s + _ + 1] !== 0 && (M = 1), this[s + _] = (a / b >> 0) - M & 255;
    return s + f;
  }, l.prototype.writeInt8 = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[s] = a & 255, s + 1;
  }, l.prototype.writeInt16LE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 2, 32767, -32768), this[s] = a & 255, this[s + 1] = a >>> 8, s + 2;
  }, l.prototype.writeInt16BE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 2, 32767, -32768), this[s] = a >>> 8, this[s + 1] = a & 255, s + 2;
  }, l.prototype.writeInt32LE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 4, 2147483647, -2147483648), this[s] = a & 255, this[s + 1] = a >>> 8, this[s + 2] = a >>> 16, this[s + 3] = a >>> 24, s + 4;
  }, l.prototype.writeInt32BE = function(a, s, f) {
    return a = +a, s = s >>> 0, f || de(this, a, s, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[s] = a >>> 24, this[s + 1] = a >>> 16, this[s + 2] = a >>> 8, this[s + 3] = a & 255, s + 4;
  }, l.prototype.writeBigInt64LE = Ze(function(a, s = 0) {
    return wr(this, a, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), l.prototype.writeBigInt64BE = Ze(function(a, s = 0) {
    return Er(this, a, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Sr(c, a, s, f, m, _) {
    if (s + f > c.length)
      throw new RangeError("Index out of range");
    if (s < 0)
      throw new RangeError("Index out of range");
  }
  function kr(c, a, s, f, m) {
    return a = +a, s = s >>> 0, m || Sr(c, a, s, 4), e.write(c, a, s, f, 23, 4), s + 4;
  }
  l.prototype.writeFloatLE = function(a, s, f) {
    return kr(this, a, s, !0, f);
  }, l.prototype.writeFloatBE = function(a, s, f) {
    return kr(this, a, s, !1, f);
  };
  function Ar(c, a, s, f, m) {
    return a = +a, s = s >>> 0, m || Sr(c, a, s, 8), e.write(c, a, s, f, 52, 8), s + 8;
  }
  l.prototype.writeDoubleLE = function(a, s, f) {
    return Ar(this, a, s, !0, f);
  }, l.prototype.writeDoubleBE = function(a, s, f) {
    return Ar(this, a, s, !1, f);
  }, l.prototype.copy = function(a, s, f, m) {
    if (!l.isBuffer(a))
      throw new TypeError("argument should be a Buffer");
    if (f || (f = 0), !m && m !== 0 && (m = this.length), s >= a.length && (s = a.length), s || (s = 0), m > 0 && m < f && (m = f), m === f || a.length === 0 || this.length === 0)
      return 0;
    if (s < 0)
      throw new RangeError("targetStart out of bounds");
    if (f < 0 || f >= this.length)
      throw new RangeError("Index out of range");
    if (m < 0)
      throw new RangeError("sourceEnd out of bounds");
    m > this.length && (m = this.length), a.length - s < m - f && (m = a.length - s + f);
    const _ = m - f;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(s, f, m) : Uint8Array.prototype.set.call(
      a,
      this.subarray(f, m),
      s
    ), _;
  }, l.prototype.fill = function(a, s, f, m) {
    if (typeof a == "string") {
      if (typeof s == "string" ? (m = s, s = 0, f = this.length) : typeof f == "string" && (m = f, f = this.length), m !== void 0 && typeof m != "string")
        throw new TypeError("encoding must be a string");
      if (typeof m == "string" && !l.isEncoding(m))
        throw new TypeError("Unknown encoding: " + m);
      if (a.length === 1) {
        const b = a.charCodeAt(0);
        (m === "utf8" && b < 128 || m === "latin1") && (a = b);
      }
    } else
      typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (s < 0 || this.length < s || this.length < f)
      throw new RangeError("Out of range index");
    if (f <= s)
      return this;
    s = s >>> 0, f = f === void 0 ? this.length : f >>> 0, a || (a = 0);
    let _;
    if (typeof a == "number")
      for (_ = s; _ < f; ++_)
        this[_] = a;
    else {
      const b = l.isBuffer(a) ? a : l.from(a, m), M = b.length;
      if (M === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (_ = 0; _ < f - s; ++_)
        this[_ + s] = b[_ % M];
    }
    return this;
  };
  const st = {};
  function Ei(c, a, s) {
    st[c] = class extends s {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: a.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${c}]`, this.stack, delete this.name;
      }
      get code() {
        return c;
      }
      set code(m) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: m,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${c}]: ${this.message}`;
      }
    };
  }
  Ei(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(c) {
      return c ? `${c} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Ei(
    "ERR_INVALID_ARG_TYPE",
    function(c, a) {
      return `The "${c}" argument must be of type number. Received type ${typeof a}`;
    },
    TypeError
  ), Ei(
    "ERR_OUT_OF_RANGE",
    function(c, a, s) {
      let f = `The value of "${c}" is out of range.`, m = s;
      return Number.isInteger(s) && Math.abs(s) > 2 ** 32 ? m = Ir(String(s)) : typeof s == "bigint" && (m = String(s), (s > BigInt(2) ** BigInt(32) || s < -(BigInt(2) ** BigInt(32))) && (m = Ir(m)), m += "n"), f += ` It must be ${a}. Received ${m}`, f;
    },
    RangeError
  );
  function Ir(c) {
    let a = "", s = c.length;
    const f = c[0] === "-" ? 1 : 0;
    for (; s >= f + 4; s -= 3)
      a = `_${c.slice(s - 3, s)}${a}`;
    return `${c.slice(0, s)}${a}`;
  }
  function qn(c, a, s) {
    lt(a, "offset"), (c[a] === void 0 || c[a + s] === void 0) && Et(a, c.length - (s + 1));
  }
  function Tr(c, a, s, f, m, _) {
    if (c > s || c < a) {
      const b = typeof a == "bigint" ? "n" : "";
      let M;
      throw _ > 3 ? a === 0 || a === BigInt(0) ? M = `>= 0${b} and < 2${b} ** ${(_ + 1) * 8}${b}` : M = `>= -(2${b} ** ${(_ + 1) * 8 - 1}${b}) and < 2 ** ${(_ + 1) * 8 - 1}${b}` : M = `>= ${a}${b} and <= ${s}${b}`, new st.ERR_OUT_OF_RANGE("value", M, c);
    }
    qn(f, m, _);
  }
  function lt(c, a) {
    if (typeof c != "number")
      throw new st.ERR_INVALID_ARG_TYPE(a, "number", c);
  }
  function Et(c, a, s) {
    throw Math.floor(c) !== c ? (lt(c, s), new st.ERR_OUT_OF_RANGE(s || "offset", "an integer", c)) : a < 0 ? new st.ERR_BUFFER_OUT_OF_BOUNDS() : new st.ERR_OUT_OF_RANGE(
      s || "offset",
      `>= ${s ? 1 : 0} and <= ${a}`,
      c
    );
  }
  const Kn = /[^+/0-9A-Za-z-_]/g;
  function Gn(c) {
    if (c = c.split("=")[0], c = c.trim().replace(Kn, ""), c.length < 2)
      return "";
    for (; c.length % 4 !== 0; )
      c = c + "=";
    return c;
  }
  function Si(c, a) {
    a = a || 1 / 0;
    let s;
    const f = c.length;
    let m = null;
    const _ = [];
    for (let b = 0; b < f; ++b) {
      if (s = c.charCodeAt(b), s > 55295 && s < 57344) {
        if (!m) {
          if (s > 56319) {
            (a -= 3) > -1 && _.push(239, 191, 189);
            continue;
          } else if (b + 1 === f) {
            (a -= 3) > -1 && _.push(239, 191, 189);
            continue;
          }
          m = s;
          continue;
        }
        if (s < 56320) {
          (a -= 3) > -1 && _.push(239, 191, 189), m = s;
          continue;
        }
        s = (m - 55296 << 10 | s - 56320) + 65536;
      } else
        m && (a -= 3) > -1 && _.push(239, 191, 189);
      if (m = null, s < 128) {
        if ((a -= 1) < 0)
          break;
        _.push(s);
      } else if (s < 2048) {
        if ((a -= 2) < 0)
          break;
        _.push(
          s >> 6 | 192,
          s & 63 | 128
        );
      } else if (s < 65536) {
        if ((a -= 3) < 0)
          break;
        _.push(
          s >> 12 | 224,
          s >> 6 & 63 | 128,
          s & 63 | 128
        );
      } else if (s < 1114112) {
        if ((a -= 4) < 0)
          break;
        _.push(
          s >> 18 | 240,
          s >> 12 & 63 | 128,
          s >> 6 & 63 | 128,
          s & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return _;
  }
  function Yn(c) {
    const a = [];
    for (let s = 0; s < c.length; ++s)
      a.push(c.charCodeAt(s) & 255);
    return a;
  }
  function jn(c, a) {
    let s, f, m;
    const _ = [];
    for (let b = 0; b < c.length && !((a -= 2) < 0); ++b)
      s = c.charCodeAt(b), f = s >> 8, m = s % 256, _.push(m), _.push(f);
    return _;
  }
  function Rr(c) {
    return t.toByteArray(Gn(c));
  }
  function Yt(c, a, s, f) {
    let m;
    for (m = 0; m < f && !(m + s >= a.length || m >= c.length); ++m)
      a[m + s] = c[m];
    return m;
  }
  function Ie(c, a) {
    return c instanceof a || c != null && c.constructor != null && c.constructor.name != null && c.constructor.name === a.name;
  }
  function ki(c) {
    return c !== c;
  }
  const Xn = function() {
    const c = "0123456789abcdef", a = new Array(256);
    for (let s = 0; s < 16; ++s) {
      const f = s * 16;
      for (let m = 0; m < 16; ++m)
        a[f + m] = c[s] + c[m];
    }
    return a;
  }();
  function Ze(c) {
    return typeof BigInt > "u" ? Jn : c;
  }
  function Jn() {
    throw new Error("BigInt not supported");
  }
})(nr);
async function Ec(i) {
  switch (i) {
    case 15736195: {
      const { ESP32ROM: t } = await import("./esp32-EbPWKUhs.js");
      return new t();
    }
    case 1867591791:
    case 2084675695: {
      const { ESP32C2ROM: t } = await import("./esp32c2-2fgFXqMw.js");
      return new t();
    }
    case 1763790959:
    case 456216687:
    case 1216438383:
    case 1130455151: {
      const { ESP32C3ROM: t } = await import("./esp32c3-xH1Qt6Gc.js");
      return new t();
    }
    case 752910447: {
      const { ESP32C6ROM: t } = await import("./esp32c6-zMbGMB7Y.js");
      return new t();
    }
    case 3619110528: {
      const { ESP32H2ROM: t } = await import("./esp32h2-8ZwADckm.js");
      return new t();
    }
    case 9: {
      const { ESP32S3ROM: t } = await import("./esp32s3-rTIWpJge.js");
      return new t();
    }
    case 1990: {
      const { ESP32S2ROM: t } = await import("./esp32s2-p2CBvNTW.js");
      return new t();
    }
    case 4293968129: {
      const { ESP8266ROM: t } = await import("./esp8266-uRWaJrRY.js");
      return new t();
    }
    default:
      return null;
  }
}
class Sc {
  /**
   * Create a new ESPLoader to perform serial communication
   * such as read/write flash memory and registers using a LoaderOptions object.
   * @param {LoaderOptions} options - LoaderOptions object argument for ESPLoader.
   * ```
   * const myLoader = new ESPLoader({ transport: Transport, baudrate: number, terminal?: IEspLoaderTerminal });
   * ```
   */
  constructor(t) {
    this.ESP_RAM_BLOCK = 6144, this.ESP_FLASH_BEGIN = 2, this.ESP_FLASH_DATA = 3, this.ESP_FLASH_END = 4, this.ESP_MEM_BEGIN = 5, this.ESP_MEM_END = 6, this.ESP_MEM_DATA = 7, this.ESP_WRITE_REG = 9, this.ESP_READ_REG = 10, this.ESP_SPI_ATTACH = 13, this.ESP_CHANGE_BAUDRATE = 15, this.ESP_FLASH_DEFL_BEGIN = 16, this.ESP_FLASH_DEFL_DATA = 17, this.ESP_FLASH_DEFL_END = 18, this.ESP_SPI_FLASH_MD5 = 19, this.ESP_ERASE_FLASH = 208, this.ESP_ERASE_REGION = 209, this.ESP_READ_FLASH = 210, this.ESP_RUN_USER_CODE = 211, this.ESP_IMAGE_MAGIC = 233, this.ESP_CHECKSUM_MAGIC = 239, this.ROM_INVALID_RECV_MSG = 5, this.ERASE_REGION_TIMEOUT_PER_MB = 3e4, this.ERASE_WRITE_TIMEOUT_PER_MB = 4e4, this.MD5_TIMEOUT_PER_MB = 8e3, this.CHIP_ERASE_TIMEOUT = 12e4, this.FLASH_READ_TIMEOUT = 1e5, this.MAX_TIMEOUT = this.CHIP_ERASE_TIMEOUT * 2, this.CHIP_DETECT_MAGIC_REG_ADDR = 1073745920, this.DETECTED_FLASH_SIZES = {
      18: "256KB",
      19: "512KB",
      20: "1MB",
      21: "2MB",
      22: "4MB",
      23: "8MB",
      24: "16MB"
    }, this.DETECTED_FLASH_SIZES_NUM = {
      18: 256,
      19: 512,
      20: 1024,
      21: 2048,
      22: 4096,
      23: 8192,
      24: 16384
    }, this.USB_JTAG_SERIAL_PID = 4097, this.romBaudrate = 115200, this.debugLogging = !1, this.checksum = function(e) {
      let r, o = 239;
      for (r = 0; r < e.length; r++)
        o ^= e[r];
      return o;
    }, this.timeoutPerMb = function(e, r) {
      const o = e * (r / 1e6);
      return o < 3e3 ? 3e3 : o;
    }, this.flashSizeBytes = function(e) {
      let r = -1;
      return e.indexOf("KB") !== -1 ? r = parseInt(e.slice(0, e.indexOf("KB"))) * 1024 : e.indexOf("MB") !== -1 && (r = parseInt(e.slice(0, e.indexOf("MB"))) * 1024 * 1024), r;
    }, this.IS_STUB = !1, this.FLASH_WRITE_SIZE = 16384, this.transport = t.transport, this.baudrate = t.baudrate, t.serialOptions && (this.serialOptions = t.serialOptions), t.romBaudrate && (this.romBaudrate = t.romBaudrate), t.terminal && (this.terminal = t.terminal, this.terminal.clean()), typeof t.debugLogging < "u" && (this.debugLogging = t.debugLogging), t.port && (this.transport = new zn(t.port)), typeof t.enableTracing < "u" && (this.transport.tracing = t.enableTracing), this.info("esptool.js"), this.info("Serial port " + this.transport.getInfo());
  }
  _sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  /**
   * Write to ESP Loader constructor's terminal with or without new line.
   * @param {string} str - String to write.
   * @param {boolean} withNewline - Add new line at the end ?
   */
  write(t, e = !0) {
    this.terminal ? e ? this.terminal.writeLine(t) : this.terminal.write(t) : console.log(t);
  }
  /**
   * Write error message to ESP Loader constructor's terminal with or without new line.
   * @param {string} str - String to write.
   * @param {boolean} withNewline - Add new line at the end ?
   */
  error(t, e = !0) {
    this.write(`Error: ${t}`, e);
  }
  /**
   * Write information message to ESP Loader constructor's terminal with or without new line.
   * @param {string} str - String to write.
   * @param {boolean} withNewline - Add new line at the end ?
   */
  info(t, e = !0) {
    this.write(t, e);
  }
  /**
   * Write debug message to ESP Loader constructor's terminal with or without new line.
   * @param {string} str - String to write.
   * @param {boolean} withNewline - Add new line at the end ?
   */
  debug(t, e = !0) {
    this.debugLogging && this.write(`Debug: ${t}`, e);
  }
  /**
   * Convert short integer to byte array
   * @param {number} i - Number to convert.
   * @returns {Uint8Array} Byte array.
   */
  _shortToBytearray(t) {
    return new Uint8Array([t & 255, t >> 8 & 255]);
  }
  /**
   * Convert an integer to byte array
   * @param {number} i - Number to convert.
   * @returns {ROM} The chip ROM class related to given magic hex number.
   */
  _intToByteArray(t) {
    return new Uint8Array([t & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]);
  }
  /**
   * Convert a byte array to short integer.
   * @param {number} i - Number to convert.
   * @param {number} j - Number to convert.
   * @returns {number} Return a short integer number.
   */
  _byteArrayToShort(t, e) {
    return t | e >> 8;
  }
  /**
   * Convert a byte array to integer.
   * @param {number} i - Number to convert.
   * @param {number} j - Number to convert.
   * @param {number} k - Number to convert.
   * @param {number} l - Number to convert.
   * @returns {number} Return a integer number.
   */
  _byteArrayToInt(t, e, r, o) {
    return t | e << 8 | r << 16 | o << 24;
  }
  /**
   * Append a buffer array after another buffer array
   * @param {ArrayBuffer} buffer1 - First array buffer.
   * @param {ArrayBuffer} buffer2 - magic hex number to select ROM.
   * @returns {ArrayBufferLike} Return an array buffer.
   */
  _appendBuffer(t, e) {
    const r = new Uint8Array(t.byteLength + e.byteLength);
    return r.set(new Uint8Array(t), 0), r.set(new Uint8Array(e), t.byteLength), r.buffer;
  }
  /**
   * Append a buffer array after another buffer array
   * @param {Uint8Array} arr1 - First array buffer.
   * @param {Uint8Array} arr2 - magic hex number to select ROM.
   * @returns {Uint8Array} Return a 8 bit unsigned array.
   */
  _appendArray(t, e) {
    const r = new Uint8Array(t.length + e.length);
    return r.set(t, 0), r.set(e, t.length), r;
  }
  /**
   * Convert a unsigned 8 bit integer array to byte string.
   * @param {Uint8Array} u8Array - magic hex number to select ROM.
   * @returns {string} Return the equivalent string.
   */
  ui8ToBstr(t) {
    let e = "";
    for (let r = 0; r < t.length; r++)
      e += String.fromCharCode(t[r]);
    return e;
  }
  /**
   * Convert a byte string to unsigned 8 bit integer array.
   * @param {string} bStr - binary string input
   * @returns {Uint8Array} Return a 8 bit unsigned integer array.
   */
  bstrToUi8(t) {
    const e = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
      e[r] = t.charCodeAt(r);
    return e;
  }
  /**
   * Flush the serial input by raw read with 200 ms timeout.
   */
  async flushInput() {
    try {
      await this.transport.rawRead(200);
    } catch (t) {
      this.error(t.message);
    }
  }
  /**
   * Use the device serial port read function with given timeout to create a valid packet.
   * @param {number} op Operation number
   * @param {number} timeout timeout number in milliseconds
   * @returns {[number, Uint8Array]} valid response packet.
   */
  async readPacket(t = null, e = 3e3) {
    for (let r = 0; r < 100; r++) {
      const o = await this.transport.read(e), n = o[0], d = o[1], l = this._byteArrayToInt(o[4], o[5], o[6], o[7]), p = o.slice(8);
      if (n == 1) {
        if (t == null || d == t)
          return [l, p];
        if (p[0] != 0 && p[1] == this.ROM_INVALID_RECV_MSG)
          throw await this.flushInput(), new ae("unsupported command error");
      }
    }
    throw new ae("invalid response");
  }
  /**
   * Write a serial command to the chip
   * @param {number} op - Operation number
   * @param {Uint8Array} data - Unsigned 8 bit array
   * @param {number} chk - channel number
   * @param {boolean} waitResponse - wait for response ?
   * @param {number} timeout - timeout number in milliseconds
   * @returns {Promise<[number, Uint8Array]>} Return a number and a 8 bit unsigned integer array.
   */
  async command(t = null, e = new Uint8Array(0), r = 0, o = !0, n = 3e3) {
    if (t != null) {
      this.transport.tracing && this.transport.trace(`command op:0x${t.toString(16).padStart(2, "0")} data len=${e.length} wait_response=${o ? 1 : 0} timeout=${(n / 1e3).toFixed(3)} data=${this.transport.hexConvert(e)}`);
      const d = new Uint8Array(8 + e.length);
      d[0] = 0, d[1] = t, d[2] = this._shortToBytearray(e.length)[0], d[3] = this._shortToBytearray(e.length)[1], d[4] = this._intToByteArray(r)[0], d[5] = this._intToByteArray(r)[1], d[6] = this._intToByteArray(r)[2], d[7] = this._intToByteArray(r)[3];
      let l;
      for (l = 0; l < e.length; l++)
        d[8 + l] = e[l];
      await this.transport.write(d);
    }
    return o ? this.readPacket(t, n) : [0, new Uint8Array(0)];
  }
  /**
   * Read a register from chip.
   * @param {number} addr - Register address number
   * @param {number} timeout - Timeout in milliseconds (Default: 3000ms)
   * @returns {number} - Command number value
   */
  async readReg(t, e = 3e3) {
    const r = this._intToByteArray(t);
    return (await this.command(this.ESP_READ_REG, r, void 0, void 0, e))[0];
  }
  /**
   * Write a number value to register address in chip.
   * @param {number} addr - Register address number
   * @param {number} value - Number value to write in register
   * @param {number} mask - Hex number for mask
   * @param {number} delayUs Delay number
   * @param {number} delayAfterUs Delay after previous delay
   */
  async writeReg(t, e, r = 4294967295, o = 0, n = 0) {
    let d = this._appendArray(this._intToByteArray(t), this._intToByteArray(e));
    d = this._appendArray(d, this._intToByteArray(r)), d = this._appendArray(d, this._intToByteArray(o)), n > 0 && (d = this._appendArray(d, this._intToByteArray(this.chip.UART_DATE_REG_ADDR)), d = this._appendArray(d, this._intToByteArray(0)), d = this._appendArray(d, this._intToByteArray(0)), d = this._appendArray(d, this._intToByteArray(n))), await this.checkCommand("write target memory", this.ESP_WRITE_REG, d);
  }
  /**
   * Sync chip by sending sync command.
   * @returns {[number, Uint8Array]} Command result
   */
  async sync() {
    this.debug("Sync");
    const t = new Uint8Array(36);
    let e;
    for (t[0] = 7, t[1] = 7, t[2] = 18, t[3] = 32, e = 0; e < 32; e++)
      t[4 + e] = 85;
    try {
      return await this.command(8, t, void 0, void 0, 100);
    } catch (r) {
      throw this.debug("Sync err " + r), r;
    }
  }
  /**
   * Attempt to connect to the chip by sending a reset sequence and later a sync command.
   * @param {string} mode - Reset mode to use
   * @param {boolean} esp32r0Delay - Enable delay for ESP32 R0
   * @returns {string} - Returns 'success' or 'error' message.
   */
  async _connectAttempt(t = "default_reset", e = !1) {
    if (this.debug("_connect_attempt " + t + " " + e), t !== "no_reset")
      if (this.transport.getPid() === this.USB_JTAG_SERIAL_PID)
        await fc(this.transport);
      else {
        const n = e ? "D0|R1|W100|W2000|D1|R0|W50|D0" : "D0|R1|W100|D1|R0|W50|D0";
        await pc(this.transport, n);
      }
    let r = 0, o = !0;
    for (; o; ) {
      try {
        const n = await this.transport.read(1e3);
        r += n.length;
      } catch (n) {
        if (this.debug(n.message), n instanceof Error) {
          o = !1;
          break;
        }
      }
      await this._sleep(50);
    }
    for (this.transport.slipReaderEnabled = !0, r = 7; r--; ) {
      try {
        const n = await this.sync();
        return this.debug(n[0].toString()), "success";
      } catch (n) {
        n instanceof Error && (e ? this.info("_", !1) : this.info(".", !1));
      }
      await this._sleep(50);
    }
    return "error";
  }
  /**
   * Perform a connection to chip.
   * @param {string} mode - Reset mode to use. Example: 'default_reset' | 'no_reset'
   * @param {number} attempts - Number of connection attempts
   * @param {boolean} detecting - Detect the connected chip
   */
  async connect(t = "default_reset", e = 7, r = !1) {
    let o, n;
    for (this.info("Connecting...", !1), await this.transport.connect(this.romBaudrate, this.serialOptions), o = 0; o < e && (n = await this._connectAttempt(t, !1), !(n === "success" || (n = await this._connectAttempt(t, !0), n === "success"))); o++)
      ;
    if (n !== "success")
      throw new ae("Failed to connect with the device");
    if (this.info(`
\r`, !1), !r) {
      const d = await this.readReg(1073745920) >>> 0;
      this.debug("Chip Magic " + d.toString(16));
      const l = await Ec(d);
      if (this.chip === null)
        throw new ae(`Unexpected CHIP magic value ${d}. Failed to autodetect chip type.`);
      this.chip = l;
    }
  }
  /**
   * Connect and detect the existing chip.
   * @param {string} mode Reset mode to use for connection.
   */
  async detectChip(t = "default_reset") {
    await this.connect(t), this.info("Detecting chip type... ", !1), this.chip != null ? this.info(this.chip.CHIP_NAME) : this.info("unknown!");
  }
  /**
   * Execute the command and check the command response.
   * @param {string} opDescription Command operation description.
   * @param {number} op Command operation number
   * @param {Uint8Array} data Command value
   * @param {number} chk Checksum to use
   * @param {number} timeout TImeout number in milliseconds (ms)
   * @returns {number} Command result
   */
  async checkCommand(t = "", e = null, r = new Uint8Array(0), o = 0, n = 3e3) {
    this.debug("check_command " + t);
    const d = await this.command(e, r, o, void 0, n);
    return d[1].length > 4 ? d[1] : d[0];
  }
  /**
   * Start downloading an application image to RAM
   * @param {number} size Image size number
   * @param {number} blocks Number of data blocks
   * @param {number} blocksize Size of each data block
   * @param {number} offset Image offset number
   */
  async memBegin(t, e, r, o) {
    this.debug("mem_begin " + t + " " + e + " " + r + " " + o.toString(16));
    let n = this._appendArray(this._intToByteArray(t), this._intToByteArray(e));
    n = this._appendArray(n, this._intToByteArray(r)), n = this._appendArray(n, this._intToByteArray(o)), await this.checkCommand("enter RAM download mode", this.ESP_MEM_BEGIN, n);
  }
  /**
   * Send a block of image to RAM
   * @param {Uint8Array} buffer Unsigned 8-bit array
   * @param {number} seq Sequence number
   */
  async memBlock(t, e) {
    let r = this._appendArray(this._intToByteArray(t.length), this._intToByteArray(e));
    r = this._appendArray(r, this._intToByteArray(0)), r = this._appendArray(r, this._intToByteArray(0)), r = this._appendArray(r, t);
    const o = this.checksum(t);
    await this.checkCommand("write to target RAM", this.ESP_MEM_DATA, r, o);
  }
  /**
   * Leave RAM download mode and run application
   * @param {number} entrypoint - Entrypoint number
   */
  async memFinish(t) {
    const e = t === 0 ? 1 : 0, r = this._appendArray(this._intToByteArray(e), this._intToByteArray(t));
    await this.checkCommand("leave RAM download mode", this.ESP_MEM_END, r, void 0, 50);
  }
  /**
   * Configure SPI flash pins
   * @param {number} hspiArg -  Argument for SPI attachment
   */
  async flashSpiAttach(t) {
    const e = this._intToByteArray(t);
    await this.checkCommand("configure SPI flash pins", this.ESP_SPI_ATTACH, e);
  }
  /**
   * Start downloading to Flash (performs an erase)
   * @param {number} size Size to erase
   * @param {number} offset Offset to erase
   * @returns {number} Number of blocks (of size self.FLASH_WRITE_SIZE) to write.
   */
  async flashBegin(t, e) {
    const r = Math.floor((t + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE), o = this.chip.getEraseSize(e, t), n = /* @__PURE__ */ new Date(), d = n.getTime();
    let l = 3e3;
    this.IS_STUB == !1 && (l = this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB, t)), this.debug("flash begin " + o + " " + r + " " + this.FLASH_WRITE_SIZE + " " + e + " " + t);
    let p = this._appendArray(this._intToByteArray(o), this._intToByteArray(r));
    p = this._appendArray(p, this._intToByteArray(this.FLASH_WRITE_SIZE)), p = this._appendArray(p, this._intToByteArray(e)), this.IS_STUB == !1 && (p = this._appendArray(p, this._intToByteArray(0))), await this.checkCommand("enter Flash download mode", this.ESP_FLASH_BEGIN, p, void 0, l);
    const h = n.getTime();
    return t != 0 && this.IS_STUB == !1 && this.info("Took " + (h - d) / 1e3 + "." + (h - d) % 1e3 + "s to erase flash block"), r;
  }
  /**
   * Start downloading compressed data to Flash (performs an erase)
   * @param {number} size Write size
   * @param {number} compsize Compressed size
   * @param {number} offset Offset for write
   * @returns {number} Returns number of blocks (size self.FLASH_WRITE_SIZE) to write.
   */
  async flashDeflBegin(t, e, r) {
    const o = Math.floor((e + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE), n = Math.floor((t + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE), d = /* @__PURE__ */ new Date(), l = d.getTime();
    let p, h;
    this.IS_STUB ? (p = t, h = 3e3) : (p = n * this.FLASH_WRITE_SIZE, h = this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB, p)), this.info("Compressed " + t + " bytes to " + e + "...");
    let u = this._appendArray(this._intToByteArray(p), this._intToByteArray(o));
    u = this._appendArray(u, this._intToByteArray(this.FLASH_WRITE_SIZE)), u = this._appendArray(u, this._intToByteArray(r)), (this.chip.CHIP_NAME === "ESP32-S2" || this.chip.CHIP_NAME === "ESP32-S3" || this.chip.CHIP_NAME === "ESP32-C3" || this.chip.CHIP_NAME === "ESP32-C2") && this.IS_STUB === !1 && (u = this._appendArray(u, this._intToByteArray(0))), await this.checkCommand("enter compressed flash mode", this.ESP_FLASH_DEFL_BEGIN, u, void 0, h);
    const w = d.getTime();
    return t != 0 && this.IS_STUB === !1 && this.info("Took " + (w - l) / 1e3 + "." + (w - l) % 1e3 + "s to erase flash block"), o;
  }
  /**
   * Write block to flash, retry if fail
   * @param {Uint8Array} data Unsigned 8-bit array data.
   * @param {number} seq Sequence number
   * @param {number} timeout Timeout in milliseconds (ms)
   */
  async flashBlock(t, e, r) {
    let o = this._appendArray(this._intToByteArray(t.length), this._intToByteArray(e));
    o = this._appendArray(o, this._intToByteArray(0)), o = this._appendArray(o, this._intToByteArray(0)), o = this._appendArray(o, t);
    const n = this.checksum(t);
    await this.checkCommand("write to target Flash after seq " + e, this.ESP_FLASH_DATA, o, n, r);
  }
  /**
   * Write block to flash, send compressed, retry if fail
   * @param {Uint8Array} data Unsigned int 8-bit array data to write
   * @param {number} seq Sequence number
   * @param {number} timeout Timeout in milliseconds (ms)
   */
  async flashDeflBlock(t, e, r) {
    let o = this._appendArray(this._intToByteArray(t.length), this._intToByteArray(e));
    o = this._appendArray(o, this._intToByteArray(0)), o = this._appendArray(o, this._intToByteArray(0)), o = this._appendArray(o, t);
    const n = this.checksum(t);
    this.debug("flash_defl_block " + t[0].toString(16) + " " + t[1].toString(16)), await this.checkCommand("write compressed data to flash after seq " + e, this.ESP_FLASH_DEFL_DATA, o, n, r);
  }
  /**
   * Leave flash mode and run/reboot
   * @param {boolean} reboot Reboot after leaving flash mode ?
   */
  async flashFinish(t = !1) {
    const e = t ? 0 : 1, r = this._intToByteArray(e);
    await this.checkCommand("leave Flash mode", this.ESP_FLASH_END, r);
  }
  /**
   * Leave compressed flash mode and run/reboot
   * @param {boolean} reboot Reboot after leaving flash mode ?
   */
  async flashDeflFinish(t = !1) {
    const e = t ? 0 : 1, r = this._intToByteArray(e);
    await this.checkCommand("leave compressed flash mode", this.ESP_FLASH_DEFL_END, r);
  }
  /**
   * Run an arbitrary SPI flash command.
   *
   * This function uses the "USR_COMMAND" functionality in the ESP
   * SPI hardware, rather than the precanned commands supported by
   * hardware. So the value of spiflashCommand is an actual command
   * byte, sent over the wire.
   *
   * After writing command byte, writes 'data' to MOSI and then
   * reads back 'readBits' of reply on MISO. Result is a number.
   * @param {number} spiflashCommand Command to execute in SPI
   * @param {Uint8Array} data Data to send
   * @param {number} readBits Number of bits to read
   * @returns {number} Register SPI_W0_REG value
   */
  async runSpiflashCommand(t, e, r) {
    const l = this.chip.SPI_REG_BASE, p = l + 0, h = l + this.chip.SPI_USR_OFFS, u = l + this.chip.SPI_USR1_OFFS, w = l + this.chip.SPI_USR2_OFFS, y = l + this.chip.SPI_W0_OFFS;
    let v;
    this.chip.SPI_MOSI_DLEN_OFFS != null ? v = async (T, D) => {
      const L = l + this.chip.SPI_MOSI_DLEN_OFFS, B = l + this.chip.SPI_MISO_DLEN_OFFS;
      T > 0 && await this.writeReg(L, T - 1), D > 0 && await this.writeReg(B, D - 1);
    } : v = async (T, D) => {
      const L = u, B = 17, F = 8, J = T === 0 ? 0 : T - 1, he = (D === 0 ? 0 : D - 1) << F | J << B;
      await this.writeReg(L, he);
    };
    const S = 1 << 18, I = 28;
    if (r > 32)
      throw new ae("Reading more than 32 bits back from a SPI flash operation is unsupported");
    if (e.length > 64)
      throw new ae("Writing more than 64 bytes of data with one SPI command is unsupported");
    const A = e.length * 8, R = await this.readReg(h), k = await this.readReg(w);
    let C = -2147483648, x;
    r > 0 && (C |= 268435456), A > 0 && (C |= 134217728), await v(A, r), await this.writeReg(h, C);
    let $ = 7 << I | t;
    if (await this.writeReg(w, $), A == 0)
      await this.writeReg(y, 0);
    else {
      if (e.length % 4 != 0) {
        const D = new Uint8Array(e.length % 4);
        e = this._appendArray(e, D);
      }
      let T = y;
      for (x = 0; x < e.length - 4; x += 4)
        $ = this._byteArrayToInt(e[x], e[x + 1], e[x + 2], e[x + 3]), await this.writeReg(T, $), T += 4;
    }
    for (await this.writeReg(p, S), x = 0; x < 10 && ($ = await this.readReg(p) & S, $ != 0); x++)
      ;
    if (x === 10)
      throw new ae("SPI command did not complete in time");
    const P = await this.readReg(y);
    return await this.writeReg(h, R), await this.writeReg(w, k), P;
  }
  /**
   * Read flash id by executing the SPIFLASH_RDID flash command.
   * @returns {Promise<number>} Register SPI_W0_REG value
   */
  async readFlashId() {
    const e = new Uint8Array(0);
    return await this.runSpiflashCommand(159, e, 24);
  }
  /**
   * Execute the erase flash command
   * @returns {Promise<number | Uint8Array>} Erase flash command result
   */
  async eraseFlash() {
    this.info("Erasing flash (this may take a while)...");
    let t = /* @__PURE__ */ new Date();
    const e = t.getTime(), r = await this.checkCommand("erase flash", this.ESP_ERASE_FLASH, void 0, void 0, this.CHIP_ERASE_TIMEOUT);
    t = /* @__PURE__ */ new Date();
    const o = t.getTime();
    return this.info("Chip erase completed successfully in " + (o - e) / 1e3 + "s"), r;
  }
  /**
   * Convert a number or unsigned 8-bit array to hex string
   * @param {number | Uint8Array } buffer Data to convert to hex string.
   * @returns {string} A hex string
   */
  toHex(t) {
    return Array.prototype.map.call(t, (e) => ("00" + e.toString(16)).slice(-2)).join("");
  }
  /**
   * Calculate the MD5 Checksum command
   * @param {number} addr Address number
   * @param {number} size Package size
   * @returns {string} MD5 Checksum string
   */
  async flashMd5sum(t, e) {
    const r = this.timeoutPerMb(this.MD5_TIMEOUT_PER_MB, e);
    let o = this._appendArray(this._intToByteArray(t), this._intToByteArray(e));
    o = this._appendArray(o, this._intToByteArray(0)), o = this._appendArray(o, this._intToByteArray(0));
    let n = await this.checkCommand("calculate md5sum", this.ESP_SPI_FLASH_MD5, o, void 0, r);
    return n instanceof Uint8Array && n.length > 16 && (n = n.slice(0, 16)), this.toHex(n);
  }
  async readFlash(t, e, r = null) {
    let o = this._appendArray(this._intToByteArray(t), this._intToByteArray(e));
    o = this._appendArray(o, this._intToByteArray(4096)), o = this._appendArray(o, this._intToByteArray(1024));
    const n = await this.checkCommand("read flash", this.ESP_READ_FLASH, o);
    if (n != 0)
      throw new ae("Failed to read memory: " + n);
    let d = new Uint8Array(0);
    for (; d.length < e; ) {
      const l = await this.transport.read(this.FLASH_READ_TIMEOUT);
      if (l instanceof Uint8Array)
        l.length > 0 && (d = this._appendArray(d, l), await this.transport.write(this._intToByteArray(d.length)), r && r(l, d.length, e));
      else
        throw new ae("Failed to read memory: " + l);
    }
    return d;
  }
  /**
   * Upload the flasher ROM bootloader (flasher stub) to the chip.
   * @returns {ROM} The Chip ROM
   */
  async runStub() {
    this.info("Uploading stub...");
    let t = nr.Buffer.from(this.chip.ROM_TEXT, "base64").toString("binary"), e = t.split("").map(function(l) {
      return l.charCodeAt(0);
    });
    const r = new Uint8Array(e);
    t = nr.Buffer.from(this.chip.ROM_DATA, "base64").toString("binary"), e = t.split("").map(function(l) {
      return l.charCodeAt(0);
    });
    const o = new Uint8Array(e);
    let n = Math.floor((r.length + this.ESP_RAM_BLOCK - 1) / this.ESP_RAM_BLOCK), d;
    for (await this.memBegin(r.length, n, this.ESP_RAM_BLOCK, this.chip.TEXT_START), d = 0; d < n; d++) {
      const l = d * this.ESP_RAM_BLOCK, p = l + this.ESP_RAM_BLOCK;
      await this.memBlock(r.slice(l, p), d);
    }
    for (n = Math.floor((o.length + this.ESP_RAM_BLOCK - 1) / this.ESP_RAM_BLOCK), await this.memBegin(o.length, n, this.ESP_RAM_BLOCK, this.chip.DATA_START), d = 0; d < n; d++) {
      const l = d * this.ESP_RAM_BLOCK, p = l + this.ESP_RAM_BLOCK;
      await this.memBlock(o.slice(l, p), d);
    }
    this.info("Running stub..."), await this.memFinish(this.chip.ENTRY);
    for (let l = 0; l < 100; l++) {
      const p = await this.transport.read(1e3, 6);
      if (p[0] === 79 && p[1] === 72 && p[2] === 65 && p[3] === 73)
        return this.info("Stub running..."), this.IS_STUB = !0, this.FLASH_WRITE_SIZE = 16384, this.chip;
    }
    throw new ae("Failed to start stub. Unexpected response");
  }
  /**
   * Change the chip baudrate.
   */
  async changeBaud() {
    this.info("Changing baudrate to " + this.baudrate);
    const t = this.IS_STUB ? this.transport.baudrate : 0, e = this._appendArray(this._intToByteArray(this.baudrate), this._intToByteArray(t)), r = await this.command(this.ESP_CHANGE_BAUDRATE, e);
    this.debug(r[0].toString()), this.info("Changed"), await this.transport.disconnect(), await this._sleep(50), await this.transport.connect(this.baudrate, this.serialOptions);
    try {
      let o = 64;
      for (; o--; ) {
        try {
          await this.sync();
          break;
        } catch (n) {
          this.debug(n.message);
        }
        await this._sleep(10);
      }
    } catch (o) {
      this.debug(o.message);
    }
  }
  /**
   * Execute the main function of ESPLoader.
   * @param {string} mode Reset mode to use
   * @returns {ROM} chip ROM
   */
  async main(t = "default_reset") {
    await this.detectChip(t);
    const e = await this.chip.getChipDescription(this);
    return this.info("Chip is " + e), this.info("Features: " + await this.chip.getChipFeatures(this)), this.info("Crystal is " + await this.chip.getCrystalFreq(this) + "MHz"), this.info("MAC: " + await this.chip.readMac(this)), await this.chip.readMac(this), typeof this.chip.postConnect < "u" && await this.chip.postConnect(this), await this.runStub(), this.romBaudrate !== this.baudrate && await this.changeBaud(), e;
  }
  /**
   * Parse a given flash size string to a number
   * @param {string} flsz Flash size to request
   * @returns {number} Flash size number
   */
  parseFlashSizeArg(t) {
    if (typeof this.chip.FLASH_SIZES[t] > "u")
      throw new ae("Flash size " + t + " is not supported by this chip type. Supported sizes: " + this.chip.FLASH_SIZES);
    return this.chip.FLASH_SIZES[t];
  }
  /**
   * Update the image flash parameters with given arguments.
   * @param {string} image binary image as string
   * @param {number} address flash address number
   * @param {string} flashSize Flash size string
   * @param {string} flashMode Flash mode string
   * @param {string} flashFreq Flash frequency string
   * @returns {string} modified image string
   */
  _updateImageFlashParams(t, e, r, o, n) {
    if (this.debug("_update_image_flash_params " + r + " " + o + " " + n), t.length < 8 || e != this.chip.BOOTLOADER_FLASH_OFFSET)
      return t;
    if (r === "keep" && o === "keep" && n === "keep")
      return this.info("Not changing the image"), t;
    const d = parseInt(t[0]);
    let l = parseInt(t[2]);
    const p = parseInt(t[3]);
    if (d !== this.ESP_IMAGE_MAGIC)
      return this.info("Warning: Image file at 0x" + e.toString(16) + " doesn't look like an image file, so not changing any flash settings."), t;
    o !== "keep" && (l = { qio: 0, qout: 1, dio: 2, dout: 3 }[o]);
    let h = p & 15;
    n !== "keep" && (h = { "40m": 0, "26m": 1, "20m": 2, "80m": 15 }[n]);
    let u = p & 240;
    r !== "keep" && (u = this.parseFlashSizeArg(r));
    const w = l << 8 | h + u;
    return this.info("Flash params set to " + w.toString(16)), parseInt(t[2]) !== l << 8 && (t = t.substring(0, 2) + (l << 8).toString() + t.substring(3)), parseInt(t[3]) !== h + u && (t = t.substring(0, 3) + (h + u).toString() + t.substring(4)), t;
  }
  /**
   * Write set of file images into given address based on given FlashOptions object.
   * @param {FlashOptions} options FlashOptions to configure how and what to write into flash.
   */
  async writeFlash(t) {
    if (this.debug("EspLoader program"), t.flashSize !== "keep") {
      const o = this.flashSizeBytes(t.flashSize);
      for (let n = 0; n < t.fileArray.length; n++)
        if (t.fileArray[n].data.length + t.fileArray[n].address > o)
          throw new ae(`File ${n + 1} doesn't fit in the available flash`);
    }
    this.IS_STUB === !0 && t.eraseAll === !0 && await this.eraseFlash();
    let e, r;
    for (let o = 0; o < t.fileArray.length; o++) {
      this.debug("Data Length " + t.fileArray[o].data.length), e = t.fileArray[o].data;
      const n = t.fileArray[o].data.length % 4;
      if (n > 0 && (e += "ÿÿÿÿ".substring(4 - n)), r = t.fileArray[o].address, this.debug("Image Length " + e.length), e.length === 0) {
        this.debug("Warning: File is empty");
        continue;
      }
      e = this._updateImageFlashParams(e, r, t.flashSize, t.flashMode, t.flashFreq);
      let d = null;
      t.calculateMD5Hash && (d = t.calculateMD5Hash(e), this.debug("Image MD5 " + d));
      const l = e.length;
      let p;
      if (t.compress) {
        const k = this.bstrToUi8(e);
        e = this.ui8ToBstr(cc(k, { level: 9 })), p = await this.flashDeflBegin(l, e.length, r);
      } else
        p = await this.flashBegin(l, r);
      let h = 0, u = 0;
      const w = e.length;
      t.reportProgress && t.reportProgress(o, 0, w);
      let y = /* @__PURE__ */ new Date();
      const v = y.getTime();
      let S = 5e3;
      const I = new hc({ chunkSize: 1 });
      let A = 0;
      for (I.onData = function(k) {
        A += k.byteLength;
      }; e.length > 0; ) {
        this.debug("Write loop " + r + " " + h + " " + p), this.info("Writing at 0x" + (r + A).toString(16) + "... (" + Math.floor(100 * (h + 1) / p) + "%)");
        const k = this.bstrToUi8(e.slice(0, this.FLASH_WRITE_SIZE));
        if (t.compress) {
          const C = A;
          I.push(k, !1);
          const x = A - C;
          let $ = 3e3;
          this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB, x) > 3e3 && ($ = this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB, x)), this.IS_STUB === !1 && (S = $), await this.flashDeflBlock(k, h, S), this.IS_STUB && (S = $);
        } else
          throw new ae("Yet to handle Non Compressed writes");
        u += k.length, e = e.slice(this.FLASH_WRITE_SIZE, e.length), h++, t.reportProgress && t.reportProgress(o, u, w);
      }
      this.IS_STUB && await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR, S), y = /* @__PURE__ */ new Date();
      const R = y.getTime() - v;
      if (t.compress && this.info("Wrote " + l + " bytes (" + u + " compressed) at 0x" + r.toString(16) + " in " + R / 1e3 + " seconds."), d) {
        const k = await this.flashMd5sum(r, l);
        if (new String(k).valueOf() != new String(d).valueOf())
          throw this.info("File  md5: " + d), this.info("Flash md5: " + k), new ae("MD5 of file does not match data in flash!");
        this.info("Hash of data verified.");
      }
    }
    this.info("Leaving..."), this.IS_STUB && (await this.flashBegin(0, 0), t.compress ? await this.flashDeflFinish() : await this.flashFinish());
  }
  /**
   * Read SPI flash manufacturer and device id.
   */
  async flashId() {
    this.debug("flash_id");
    const t = await this.readFlashId();
    this.info("Manufacturer: " + (t & 255).toString(16));
    const e = t >> 16 & 255;
    this.info("Device: " + (t >> 8 & 255).toString(16) + e.toString(16)), this.info("Detected flash size: " + this.DETECTED_FLASH_SIZES[e]);
  }
  async getFlashSize() {
    this.debug("flash_id");
    const e = await this.readFlashId() >> 16 & 255;
    return this.DETECTED_FLASH_SIZES_NUM[e];
  }
  /**
   * Perform a chip hard reset by setting RTS to LOW and then HIGH.
   */
  async hardReset() {
    await this.transport.setRTS(!0), await this._sleep(100), await this.transport.setRTS(!1);
  }
  /**
   * Soft reset the device chip. Soft reset with run user code is the closest.
   */
  async softReset() {
    if (!this.IS_STUB)
      await this.flashBegin(0, 0), await this.flashFinish(!1);
    else {
      if (this.chip.CHIP_NAME != "ESP8266")
        throw new ae("Soft resetting is currently only supported on ESP8266");
      await this.command(this.ESP_RUN_USER_CODE, void 0, void 0, !1);
    }
  }
}
const ft = async (i) => {
  await i.device.setSignals({
    dataTerminalReady: !1,
    requestToSend: !0
  }), await Pe(250), await i.device.setSignals({
    dataTerminalReady: !1,
    requestToSend: !1
  }), await Pe(250);
}, kc = async (i, t, e, r, o) => {
  let n, d;
  const l = (I) => i({
    ...I,
    manifest: r,
    build: n,
    chipFamily: d
  }), p = new zn(t), h = new Sc({
    transport: p,
    baudrate: 115200,
    romBaudrate: 115200,
    enableTracing: !1
  });
  window.esploader = h, l({
    state: "initializing",
    message: "Initializing...",
    details: { done: !1 }
  });
  try {
    await h.main(), await h.flashId();
  } catch (I) {
    console.error(I), l({
      state: "error",
      message: "Failed to initialize. Try resetting your device or holding the BOOT button while clicking INSTALL.",
      details: { error: "failed_initialize", details: I }
    }), await ft(p), await p.disconnect();
    return;
  }
  if (d = h.chip.CHIP_NAME, !h.chip.ROM_TEXT) {
    l({
      state: "error",
      message: `Chip ${d} is not supported`,
      details: {
        error: "not_supported",
        details: `Chip ${d} is not supported`
      }
    }), await ft(p), await p.disconnect();
    return;
  }
  if (l({
    state: "initializing",
    message: `Initialized. Found ${d}`,
    details: { done: !0 }
  }), n = r.builds.find((I) => I.chipFamily === d), !n) {
    l({
      state: "error",
      message: `Your ${d} board is not supported.`,
      details: { error: "not_supported", details: d }
    }), await ft(p), await p.disconnect();
    return;
  }
  l({
    state: "preparing",
    message: "Preparing installation...",
    details: { done: !1 }
  });
  const u = new URL(e, location.toString()).toString(), w = n.parts.map(async (I) => {
    const A = new URL(I.path, u).toString(), R = await fetch(A);
    if (!R.ok)
      throw new Error(`Downlading firmware ${I.path} failed: ${R.status}`);
    const k = new FileReader(), C = await R.blob();
    return new Promise((x) => {
      k.addEventListener("load", () => x(k.result)), k.readAsBinaryString(C);
    });
  }), y = [];
  let v = 0;
  for (let I = 0; I < w.length; I++)
    try {
      const A = await w[I];
      y.push({ data: A, address: n.parts[I].offset }), v += A.length;
    } catch (A) {
      l({
        state: "error",
        message: A.message,
        details: {
          error: "failed_firmware_download",
          details: A.message
        }
      }), await ft(p), await p.disconnect();
      return;
    }
  l({
    state: "preparing",
    message: "Installation prepared",
    details: { done: !0 }
  }), o && (l({
    state: "erasing",
    message: "Erasing device...",
    details: { done: !1 }
  }), await h.eraseFlash(), l({
    state: "erasing",
    message: "Device erased",
    details: { done: !0 }
  })), l({
    state: "writing",
    message: "Writing progress: 0%",
    details: {
      bytesTotal: v,
      bytesWritten: 0,
      percentage: 0
    }
  });
  let S = 0;
  try {
    await h.writeFlash({
      fileArray: y,
      flashSize: "keep",
      flashMode: "keep",
      flashFreq: "keep",
      eraseAll: !1,
      compress: !0,
      // report progress
      reportProgress: (I, A, R) => {
        const k = A / R * y[I].data.length, C = Math.floor((S + k) / v * 100);
        if (A === R) {
          S += k;
          return;
        }
        l({
          state: "writing",
          message: `Writing progress: ${C}%`,
          details: {
            bytesTotal: v,
            bytesWritten: S + A,
            percentage: C
          }
        });
      }
    });
  } catch (I) {
    l({
      state: "error",
      message: I.message,
      details: { error: "write_failed", details: I }
    }), await ft(p), await p.disconnect();
    return;
  }
  l({
    state: "writing",
    message: "Writing complete",
    details: {
      bytesTotal: v,
      bytesWritten: S,
      percentage: 100
    }
  }), await Pe(100), console.log("HARD RESET"), await ft(p), console.log("DISCONNECT"), await p.disconnect(), l({
    state: "finished",
    message: "All done!"
  });
}, Ac = (i, t = "") => {
  const e = document.createElement("a");
  e.target = "_blank", e.href = i, e.download = t, document.body.appendChild(e), e.dispatchEvent(new MouseEvent("click")), document.body.removeChild(e);
}, Ic = (i, t = "") => {
  const e = new Blob([i], { type: "text/plain" }), r = URL.createObjectURL(e);
  Ac(r, t), setTimeout(() => URL.revokeObjectURL(r), 0);
}, Tc = (i, t, e, r) => {
  r = r || {};
  const o = new CustomEvent(t, {
    bubbles: r.bubbles === void 0 ? !0 : r.bubbles,
    cancelable: !!r.cancelable,
    composed: r.composed === void 0 ? !0 : r.composed,
    detail: e
  });
  i.dispatchEvent(o);
}, Rc = async (i) => {
  const t = new URL(i, location.toString()).toString(), r = await (await fetch(t)).json();
  return "new_install_skip_erase" in r && (console.warn('Manifest option "new_install_skip_erase" is deprecated. Use "new_install_prompt_erase" instead.'), r.new_install_skip_erase && (r.new_install_prompt_erase = !0)), r;
}, Cc = "10.0.1";
console.log(`ESP Web Tools ${Cc} by Nabu Casa; https://esphome.github.io/esp-web-tools/`);
const $o = "⚠️", Bo = "🎉";
class xe extends lr {
  constructor() {
    super(...arguments), this.logger = console, this._state = "DASHBOARD", this._installErase = !1, this._installConfirmed = !1, this._provisionForce = !1, this._wasProvisioned = !1, this._busy = !1, this._selectedSsid = null, this._bodyOverflow = null, this._handleDisconnect = () => {
      this._state = "ERROR", this._error = "Disconnected";
    };
  }
  render() {
    if (!this.port)
      return z``;
    let t, e, r = !1;
    return this._client === void 0 && this._state !== "INSTALL" && this._state !== "LOGS" ? this._error ? [t, e] = this._renderError(this._error) : e = this._renderProgress("Connecting") : this._state === "INSTALL" ? [t, e, r] = this._renderInstall() : this._state === "ASK_ERASE" ? [t, e] = this._renderAskErase() : this._state === "ERROR" ? [t, e] = this._renderError(this._error) : this._state === "DASHBOARD" ? [t, e, r] = this._client ? this._renderDashboard() : this._renderDashboardNoImprov() : this._state === "PROVISION" ? [t, e] = this._renderProvision() : this._state === "LOGS" && ([t, e] = this._renderLogs()), z`
      <ew-dialog
        open
        .heading=${t}
        @cancel=${this._preventDefault}
        @closed=${this._handleClose}
      >
        ${t ? z`<div slot="headline">${t}</div>` : ""}
        ${r ? z`
              <ew-icon-button slot="headline" @click=${this._closeDialog}>
                ${bs}
              </ew-icon-button>
            ` : ""}
        ${e}
      </ew-dialog>
    `;
  }
  _renderProgress(t, e) {
    return z`
      <ewt-page-progress
        slot="content"
        .label=${t}
        .progress=${e}
      ></ewt-page-progress>
    `;
  }
  _renderError(t) {
    const e = "Error", r = z`
      <ewt-page-message
        slot="content"
        .icon=${$o}
        .label=${t}
      ></ewt-page-message>
      <div slot="actions">
        <ew-text-button @click=${this._closeDialog}>Close</ew-text-button>
      </div>
    `;
    return [e, r];
  }
  _renderDashboard() {
    const t = this._manifest.name;
    let e, r = !0;
    return e = z`
      <div slot="content">
        <ew-list>
          <ew-list-item>
            <div slot="headline">Connected to ${this._info.name}</div>
            <div slot="supporting-text">
              ${this._info.firmware}&nbsp;${this._info.version}
              (${this._info.chipFamily})
            </div>
          </ew-list-item>
          ${this._isSameVersion ? "" : z`
                <ew-list-item
                  type="button"
                  @click=${() => {
      this._isSameFirmware ? this._startInstall(!1) : this._manifest.new_install_prompt_erase ? this._state = "ASK_ERASE" : this._startInstall(!0);
    }}
                >
                  ${Mr}
                  <div slot="headline">
                    ${this._isSameFirmware ? `Update ${this._manifest.name}` : `Install ${this._manifest.name}`}
                  </div>
                </ew-list-item>
              `}
          ${this._client.nextUrl === void 0 ? "" : z`
                <ew-list-item
                  type="link"
                  href=${this._client.nextUrl}
                  target="_blank"
                >
                  ${Nr}
                  <div slot="headline">Visit Device</div>
                </ew-list-item>
              `}
          ${!this._manifest.home_assistant_domain || this._client.state !== Ve.PROVISIONED ? "" : z`
                <ew-list-item
                  type="link"
                  href=${`https://my.home-assistant.io/redirect/config_flow_start/?domain=${this._manifest.home_assistant_domain}`}
                  target="_blank"
                >
                  ${Hr}
                  <div slot="headline">Add to Home Assistant</div>
                </ew-list-item>
              `}
          <ew-list-item
            type="button"
            @click=${() => {
      this._state = "PROVISION", this._client.state === Ve.PROVISIONED && (this._provisionForce = !0);
    }}
          >
            ${ws}
            <div slot="headline">
              ${this._client.state === Ve.READY ? "Connect to Wi-Fi" : "Change Wi-Fi"}
            </div>
          </ew-list-item>
          <ew-list-item
            type="button"
            @click=${async () => {
      const o = this._client;
      o && (await this._closeClientWithoutEvents(o), await Pe(100)), this._client = void 0, this._state = "LOGS";
    }}
          >
            ${zr}
            <div slot="headline">Logs & Console</div>
          </ew-list-item>
          ${this._isSameFirmware && this._manifest.funding_url ? z`
                <ew-list-item
                  type="link"
                  href=${this._manifest.funding_url}
                  target="_blank"
                >
                  <div slot="headline">Fund Development</div>
                </ew-list-item>
              ` : ""}
          ${this._isSameVersion ? z`
                <ew-list-item
                  type="button"
                  class="danger"
                  @click=${() => this._startInstall(!0)}
                >
                  <div slot="headline">Erase User Data</div>
                </ew-list-item>
              ` : ""}
        </ew-list>
      </div>
    `, [t, e, r];
  }
  _renderDashboardNoImprov() {
    const t = this._manifest.name;
    let e, r = !0;
    return e = z`
      <div slot="content">
        <ew-list>
          <ew-list-item
            type="button"
            @click=${() => {
      this._manifest.new_install_prompt_erase ? this._state = "ASK_ERASE" : this._startInstall(!0);
    }}
          >
            ${Mr}
            <div slot="headline">${`Install ${this._manifest.name}`}</div>
          </ew-list-item>
          <ew-list-item
            type="button"
            @click=${async () => {
      this._client = void 0, this._state = "LOGS";
    }}
          >
            ${zr}
            <div slot="headline">Logs & Console</div>
          </ew-list-item>
        </ew-list>
      </div>
    `, [t, e, r];
  }
  _renderProvision() {
    var t;
    let e = "Configure Wi-Fi", r;
    if (this._busy)
      return [
        e,
        this._renderProgress(this._ssids === void 0 ? "Scanning for networks" : "Trying to connect")
      ];
    if (!this._provisionForce && this._client.state === Ve.PROVISIONED) {
      e = void 0;
      const o = !this._wasProvisioned && (this._client.nextUrl !== void 0 || "home_assistant_domain" in this._manifest);
      r = z`
        <div slot="content">
          <ewt-page-message
            .icon=${Bo}
            label="Device connected to the network!"
          ></ewt-page-message>
          ${o ? z`
                <ew-list>
                  ${this._client.nextUrl === void 0 ? "" : z`
                        <ew-list-item
                          type="link"
                          href=${this._client.nextUrl}
                          target="_blank"
                          @click=${() => {
        this._state = "DASHBOARD";
      }}
                        >
                          ${Nr}
                          <div slot="headline">Visit Device</div>
                        </ew-list-item>
                      `}
                  ${this._manifest.home_assistant_domain ? z`
                        <ew-list-item
                          type="link"
                          href=${`https://my.home-assistant.io/redirect/config_flow_start/?domain=${this._manifest.home_assistant_domain}`}
                          target="_blank"
                          @click=${() => {
        this._state = "DASHBOARD";
      }}
                        >
                          ${Hr}
                          <div slot="headline">Add to Home Assistant</div>
                        </ew-list-item>
                      ` : ""}
                  <ew-list-item
                    type="button"
                    @click=${() => {
        this._state = "DASHBOARD";
      }}
                  >
                    <div slot="start" class="fake-icon"></div>
                    <div slot="headline">Skip</div>
                  </ew-list-item>
                </ew-list>
              ` : ""}
        </div>

        ${o ? "" : z`
              <div slot="actions">
                <ew-text-button
                  @click=${() => {
        this._state = "DASHBOARD";
      }}
                >
                  Continue
                </ew-text-button>
              </div>
            `}
      `;
    } else {
      let o;
      switch (this._client.error) {
        case 3:
          o = "Unable to connect";
          break;
        case 254:
          o = "Timeout";
          break;
        case 0:
        case 2:
          break;
        default:
          o = `Unknown error (${this._client.error})`;
      }
      const n = (t = this._ssids) === null || t === void 0 ? void 0 : t.find((d) => d.name === this._selectedSsid);
      r = z`
        <ew-icon-button slot="headline" @click=${this._updateSsids}>
          ${xs}
        </ew-icon-button>
        <div slot="content">
          <div>Connect your device to the network to start using it.</div>
          ${o ? z`<p class="error">${o}</p>` : ""}
          ${this._ssids !== null ? z`
                <ew-filled-select
                  menu-positioning="fixed"
                  label="Network"
                  @change=${(d) => {
        const l = d.target.selectedIndex;
        this._selectedSsid = l === this._ssids.length ? null : this._ssids[l].name;
      }}
                >
                  ${this._ssids.map((d) => z`
                      <ew-select-option
                        .selected=${n === d}
                        .value=${d.name}
                      >
                        ${d.name}
                      </ew-select-option>
                    `)}
                  <ew-divider></ew-divider>
                  <ew-select-option .selected=${!n}>
                    Join other…
                  </ew-select-option>
                </ew-filled-select>
              ` : ""}
          ${// Show input box if command not supported or "Join Other" selected
      n ? "" : z`
                  <ew-filled-text-field
                    label="Network Name"
                    name="ssid"
                  ></ew-filled-text-field>
                `}
          ${!n || n.secured ? z`
                <ew-filled-text-field
                  label="Password"
                  name="password"
                  type="password"
                ></ew-filled-text-field>
              ` : ""}
        </div>
        <div slot="actions">
          <ew-text-button
            @click=${() => {
        this._state = "DASHBOARD";
      }}
          >
            ${this._installState && this._installErase ? "Skip" : "Back"}
          </ew-text-button>
          <ew-text-button @click=${this._doProvision}>Connect</ew-text-button>
        </div>
      `;
    }
    return [e, r];
  }
  _renderAskErase() {
    const t = "Erase device", e = z`
      <div slot="content">
        <div>
          Do you want to erase the device before installing
          ${this._manifest.name}? All data on the device will be lost.
        </div>
        <label class="formfield">
          <ew-checkbox touch-target="wrapper" class="danger"></ew-checkbox>
          Erase device
        </label>
      </div>
      <div slot="actions">
        <ew-text-button
          @click=${() => {
      this._state = "DASHBOARD";
    }}
        >
          Back
        </ew-text-button>
        <ew-text-button
          @click=${() => {
      const r = this.shadowRoot.querySelector("ew-checkbox");
      this._startInstall(r.checked);
    }}
        >
          Next
        </ew-text-button>
      </div>
    `;
    return [t, e];
  }
  _renderInstall() {
    let t, e;
    const o = !this._installErase && this._isSameFirmware;
    if (!this._installConfirmed && this._isSameVersion)
      t = "Erase User Data", e = z`
        <div slot="content">
          Do you want to reset your device and erase all user data from your
          device?
        </div>
        <div slot="actions">
          <ew-text-button class="danger" @click=${this._confirmInstall}>
            Erase User Data
          </ew-text-button>
        </div>
      `;
    else if (this._installConfirmed)
      if (!this._installState || this._installState.state === "initializing" || this._installState.state === "preparing")
        t = "Installing", e = this._renderProgress("Preparing installation");
      else if (this._installState.state === "erasing")
        t = "Installing", e = this._renderProgress("Erasing");
      else if (this._installState.state === "writing" || // When we're finished, keep showing this screen with 100% written
      // until Improv is initialized / not detected.
      this._installState.state === "finished" && this._client === void 0) {
        t = "Installing";
        let n, d;
        this._installState.state === "finished" ? d = "Wrapping up" : this._installState.details.percentage < 4 ? d = "Installing" : n = this._installState.details.percentage, e = this._renderProgress(z`
          ${d ? z`${d}<br />` : ""}
          <br />
          This will take
          ${this._installState.chipFamily === "ESP8266" ? "a minute" : "2 minutes"}.<br />
          Keep this page visible to prevent slow down
        `, n);
      } else if (this._installState.state === "finished") {
        t = void 0;
        const n = this._client !== null;
        e = z`
        <ewt-page-message
          slot="content"
          .icon=${Bo}
          label="Installation complete!"
        ></ewt-page-message>

        <div slot="actions">
          <ew-text-button
            @click=${() => {
          this._state = n && this._installErase ? "PROVISION" : "DASHBOARD";
        }}
          >
            Next
          </ew-text-button>
        </div>
      `;
      } else
        this._installState.state === "error" && (t = "Installation failed", e = z`
        <ewt-page-message
          slot="content"
          .icon=${$o}
          .label=${this._installState.message}
        ></ewt-page-message>
        <div slot="actions">
          <ew-text-button
            @click=${async () => {
          this._initialize(), this._state = "DASHBOARD";
        }}
          >
            Back
          </ew-text-button>
        </div>
      `);
    else {
      t = "Confirm Installation";
      const n = o ? "update to" : "install";
      e = z`
        <div slot="content">
          ${o ? z`Your device is running
                ${this._info.firmware}&nbsp;${this._info.version}.<br /><br />` : ""}
          Do you want to ${n}
          ${this._manifest.name}&nbsp;${this._manifest.version}?
          ${this._installErase ? z`<br /><br />All data on the device will be erased.` : ""}
        </div>
        <div slot="actions">
          <ew-text-button
            @click=${() => {
        this._state = "DASHBOARD";
      }}
          >
            Back
          </ew-text-button>
          <ew-text-button @click=${this._confirmInstall}>
            Install
          </ew-text-button>
        </div>
      `;
    }
    return [t, e, !1];
  }
  _renderLogs() {
    let t = "Logs", e;
    return e = z`
      <div slot="content">
        <ewt-console .port=${this.port} .logger=${this.logger}></ewt-console>
      </div>
      <div slot="actions">
        <ew-text-button
          @click=${async () => {
      await this.shadowRoot.querySelector("ewt-console").reset();
    }}
        >
          Reset Device
        </ew-text-button>
        <ew-text-button
          @click=${() => {
      Ic(this.shadowRoot.querySelector("ewt-console").logs(), "esp-web-tools-logs.txt"), this.shadowRoot.querySelector("ewt-console").reset();
    }}
        >
          Download Logs
        </ew-text-button>
        <ew-text-button
          @click=${async () => {
      await this.shadowRoot.querySelector("ewt-console").disconnect(), this._state = "DASHBOARD", this._initialize();
    }}
        >
          Back
        </ew-text-button>
      </div>
    `, [t, e];
  }
  willUpdate(t) {
    t.has("_state") && (this._state !== "ERROR" && (this._error = void 0), this._state === "PROVISION" ? this._updateSsids() : this._provisionForce = !1, this._state === "INSTALL" && (this._installConfirmed = !1, this._installState = void 0));
  }
  async _updateSsids(t = 0) {
    const e = this._ssids;
    this._ssids = void 0, this._busy = !0;
    let r;
    try {
      r = await this._client.scan();
    } catch {
      this._ssids === void 0 && (this._ssids = null, this._selectedSsid = null), this._busy = !1;
      return;
    }
    if (r.length === 0 && t < 3) {
      console.log("SCHEDULE RETRY", t), setTimeout(() => this._updateSsids(t + 1), 1e3);
      return;
    }
    e ? this._selectedSsid && !r.find((o) => o.name === this._selectedSsid) && (this._selectedSsid = r[0].name) : this._selectedSsid = r.length ? r[0].name : null, this._ssids = r, this._busy = !1;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this._bodyOverflow = document.body.style.overflow, document.body.style.overflow = "hidden", this._initialize();
  }
  updated(t) {
    super.updated(t), t.has("_state") && this.setAttribute("state", this._state), this._state === "PROVISION" && (t.has("_selectedSsid") && this._selectedSsid === null ? this._focusFormElement("ew-filled-text-field[name=ssid]") : t.has("_ssids") && this._focusFormElement());
  }
  _focusFormElement(t = "ew-filled-text-field, ew-filled-select") {
    const e = this.shadowRoot.querySelector(t);
    e && e.updateComplete.then(() => setTimeout(() => e.focus(), 100));
  }
  async _initialize(t = !1) {
    if (this.port.readable === null || this.port.writable === null) {
      this._state = "ERROR", this._error = "Serial port is not readable/writable. Close any other application using it and try again.";
      return;
    }
    try {
      this._manifest = await Rc(this.manifestPath);
    } catch {
      this._state = "ERROR", this._error = "Failed to download manifest";
      return;
    }
    if (this._manifest.new_install_improv_wait_time === 0) {
      this._client = null;
      return;
    }
    const e = new Is(this.port, this.logger);
    e.addEventListener("state-changed", () => {
      this.requestUpdate();
    }), e.addEventListener("error-changed", () => this.requestUpdate());
    try {
      const r = t ? this._manifest.new_install_improv_wait_time !== void 0 ? this._manifest.new_install_improv_wait_time * 1e3 : 1e4 : 1e3;
      this._info = await e.initialize(r), this._client = e, e.addEventListener("disconnect", this._handleDisconnect);
    } catch (r) {
      this._info = void 0, r instanceof on ? (this._state = "ERROR", this._error = "Serial port is not ready. Close any other application using it and try again.") : (this._client = null, this.logger.error("Improv initialization failed.", r));
    }
  }
  _startInstall(t) {
    this._state = "INSTALL", this._installErase = t, this._installConfirmed = !1;
  }
  async _confirmInstall() {
    this._installConfirmed = !0, this._installState = void 0, this._client && await this._closeClientWithoutEvents(this._client), this._client = void 0, await this.port.close(), kc((t) => {
      this._installState = t, t.state === "finished" ? Pe(100).then(() => this.port.open({ baudRate: 115200 })).then(() => this._initialize(!0)).then(() => this.requestUpdate()) : t.state === "error" && Pe(100).then(() => this.port.open({ baudRate: 115200 }));
    }, this.port, this.manifestPath, this._manifest, this._installErase);
  }
  async _doProvision() {
    var t;
    this._busy = !0, this._wasProvisioned = this._client.state === Ve.PROVISIONED;
    const e = this._selectedSsid === null ? this.shadowRoot.querySelector("ew-filled-text-field[name=ssid]").value : this._selectedSsid, r = ((t = this.shadowRoot.querySelector("ew-filled-text-field[name=password]")) === null || t === void 0 ? void 0 : t.value) || "";
    try {
      await this._client.provision(e, r, 3e4);
    } catch {
      return;
    } finally {
      this._busy = !1, this._provisionForce = !1;
    }
  }
  _closeDialog() {
    this.shadowRoot.querySelector("ew-dialog").close();
  }
  async _handleClose() {
    this._client && await this._closeClientWithoutEvents(this._client), Tc(this, "closed"), document.body.style.overflow = this._bodyOverflow, this.parentNode.removeChild(this);
  }
  /**
   * Return if the device runs same firmware as manifest.
   */
  get _isSameFirmware() {
    var t;
    return this._info ? !((t = this.overrides) === null || t === void 0) && t.checkSameFirmware ? this.overrides.checkSameFirmware(this._manifest, this._info) : this._info.firmware === this._manifest.name : !1;
  }
  /**
   * Return if the device runs same firmware and version as manifest.
   */
  get _isSameVersion() {
    return this._isSameFirmware && this._info.version === this._manifest.version;
  }
  async _closeClientWithoutEvents(t) {
    t.removeEventListener("disconnect", this._handleDisconnect), await t.close();
  }
  _preventDefault(t) {
    t.preventDefault();
  }
}
xe.styles = [
  sa,
  sr`
      :host {
        --mdc-dialog-max-width: 390px;
      }
      div[slot="headline"] {
        padding-right: 48px;
      }
      ew-icon-button[slot="headline"] {
        position: absolute;
        right: 4px;
        top: 8px;
      }
      ew-icon-button[slot="headline"] svg {
        padding: 8px;
        color: var(--text-color);
      }
      .dialog-nav svg {
        color: var(--text-color);
      }
      .table-row {
        display: flex;
      }
      .table-row.last {
        margin-bottom: 16px;
      }
      .table-row svg {
        width: 20px;
        margin-right: 8px;
      }
      ew-filled-text-field,
      ew-filled-select {
        display: block;
        margin-top: 16px;
      }
      label.formfield {
        display: inline-flex;
        align-items: center;
        padding-right: 8px;
      }
      ew-list {
        margin: 0 -24px;
        padding: 0;
      }
      ew-list-item svg {
        height: 24px;
      }
      ewt-page-message + ew-list {
        padding-top: 16px;
      }
      .fake-icon {
        width: 24px;
      }
      .error {
        color: var(--danger-color);
      }
      .danger {
        --mdc-theme-primary: var(--danger-color);
        --mdc-theme-secondary: var(--danger-color);
        --md-sys-color-primary: var(--danger-color);
        --md-sys-color-on-surface: var(--danger-color);
      }
      button.link {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        text-align: left;
        text-decoration: underline;
        cursor: pointer;
      }
      :host([state="LOGS"]) ew-dialog {
        max-width: 90vw;
        max-height: 90vh;
      }
      ewt-console {
        width: calc(80vw - 48px);
        height: calc(90vh - 168px);
      }
    `
];
g([
  Le()
], xe.prototype, "_client", void 0);
g([
  Le()
], xe.prototype, "_state", void 0);
g([
  Le()
], xe.prototype, "_installErase", void 0);
g([
  Le()
], xe.prototype, "_installConfirmed", void 0);
g([
  Le()
], xe.prototype, "_installState", void 0);
g([
  Le()
], xe.prototype, "_provisionForce", void 0);
g([
  Le()
], xe.prototype, "_error", void 0);
g([
  Le()
], xe.prototype, "_busy", void 0);
g([
  Le()
], xe.prototype, "_ssids", void 0);
g([
  Le()
], xe.prototype, "_selectedSsid", void 0);
customElements.define("ewt-install-dialog", xe);
export {
  xe as EwtInstallDialog
};
