import { l as qr, o as jr, _ as c, e as f, B as rt, t as F, i as M, a as at, b as Ni, c as Ct, R as Hi, d as te, f as B, g as Fe, h as j, M as Ie, j as P, k as Lt, m as Ui, n as Vi, p as pe, q as ut, r as Wi, s as Qn, u as Jn, v as er, w as tr, x as Qr } from "./styles-0283799e.js";
import { x as _, i as Q, s as ot, T as Bt, A as Be, b as jt } from "./index-61c0afca.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Gi(i, t, e) {
  let n, r = i;
  return typeof i == "object" ? (r = i.slot, n = i) : n = { flatten: t }, e ? qr({ slot: r, flatten: t, selector: e }) : jr({ descriptor: (a) => ({ get() {
    var o, d;
    const h = "slot" + (r ? `[name=${r}]` : ":not([name])"), l = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(h);
    return (d = l == null ? void 0 : l.assignedNodes(n)) !== null && d !== void 0 ? d : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var ri, ai;
const Jr = (ai = (ri = window.ShadyDOM) === null || ri === void 0 ? void 0 : ri.inUse) !== null && ai !== void 0 ? ai : !1;
class Ve extends rt {
  constructor() {
    super(...arguments), this.disabled = !1, this.containingForm = null, this.formDataListener = (t) => {
      this.disabled || this.setFormData(t.formData);
    };
  }
  findFormElement() {
    if (!this.shadowRoot || Jr)
      return null;
    const e = this.getRootNode().querySelectorAll("form");
    for (const n of Array.from(e))
      if (n.contains(this))
        return n;
    return null;
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), this.containingForm = this.findFormElement(), (t = this.containingForm) === null || t === void 0 || t.addEventListener("formdata", this.formDataListener);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.containingForm) === null || t === void 0 || t.removeEventListener("formdata", this.formDataListener), this.containingForm = null;
  }
  click() {
    this.formElement && !this.disabled && (this.formElement.focus(), this.formElement.click());
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (t) => {
      this.dispatchEvent(new Event("change", t));
    });
  }
}
Ve.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
c([
  f({ type: Boolean })
], Ve.prototype, "disabled", void 0);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class K extends Ve {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.name = "", this.value = "on", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Hi(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const e = t.get("indeterminate"), n = t.get("checked"), r = t.get("disabled");
    if (e !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!e, !!r), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${o}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, e, n) {
    return n ? "disabled" : e ? "indeterminate" : t ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? this.renderRippleTemplate() : "";
  }
  /** @soyTemplate */
  renderRippleTemplate() {
    return _`<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`;
  }
  /**
   * @soyTemplate
   * @soyAttributes checkboxAttributes: input
   * @soyClasses checkboxClasses: .mdc-checkbox
   */
  render() {
    const t = this.indeterminate || this.checked, e = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": t,
      "mdc-checkbox--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      // transition animiation classes
      "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
      "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
      "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
      "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
      "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
      "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
    }, n = this.indeterminate ? "mixed" : void 0;
    return _`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${te(e)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${B(this.name)}"
              aria-checked="${B(n)}"
              aria-label="${B(this.ariaLabel)}"
              aria-labelledby="${B(this.ariaLabelledBy)}"
              aria-describedby="${B(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? "true" : "false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
  }
  setFormData(t) {
    this.name && this.checked && t.append(this.name, this.value);
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleBlur() {
    this.focused = !1, this.handleRippleBlur();
  }
  handleRippleMouseDown(t) {
    const e = () => {
      window.removeEventListener("mouseup", e), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", e), this.rippleHandlers.startPress(t);
  }
  handleRippleTouchStart(t) {
    this.rippleHandlers.startPress(t);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
  handleChange() {
    this.checked = this.formElement.checked, this.indeterminate = this.formElement.indeterminate;
  }
  resetAnimationClass() {
    this.animationClass = "";
  }
  get isRippleActive() {
    var t;
    return ((t = this.rippleElement) === null || t === void 0 ? void 0 : t.isActive) || !1;
  }
}
c([
  M(".mdc-checkbox")
], K.prototype, "mdcRoot", void 0);
c([
  M("input")
], K.prototype, "formElement", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], K.prototype, "checked", void 0);
c([
  f({ type: Boolean })
], K.prototype, "indeterminate", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], K.prototype, "disabled", void 0);
c([
  f({ type: String, reflect: !0 })
], K.prototype, "name", void 0);
c([
  f({ type: String })
], K.prototype, "value", void 0);
c([
  at,
  f({ type: String, attribute: "aria-label" })
], K.prototype, "ariaLabel", void 0);
c([
  at,
  f({ type: String, attribute: "aria-labelledby" })
], K.prototype, "ariaLabelledBy", void 0);
c([
  at,
  f({ type: String, attribute: "aria-describedby" })
], K.prototype, "ariaDescribedBy", void 0);
c([
  f({ type: Boolean })
], K.prototype, "reducedTouchTarget", void 0);
c([
  F()
], K.prototype, "animationClass", void 0);
c([
  F()
], K.prototype, "shouldRenderRipple", void 0);
c([
  F()
], K.prototype, "focused", void 0);
c([
  Ni("mwc-ripple")
], K.prototype, "ripple", void 0);
c([
  Ct({ passive: !0 })
], K.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ea = Q`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
class ir extends K {
}
ir.styles = [ea];
customElements.define("ewt-checkbox", ir);
class ta {
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
    let n = 0;
    this.state.carriageReturn && (t !== `
` && this.targetElement.removeChild(this.targetElement.lastChild), this.state.carriageReturn = !1), t.includes("\r") && (this.state.carriageReturn = !0);
    const r = document.createElement("span");
    r.classList.add("line"), this.targetElement.appendChild(r);
    const a = (d) => {
      if (d === "")
        return;
      const h = document.createElement("span");
      if (this.state.bold && h.classList.add("log-bold"), this.state.italic && h.classList.add("log-italic"), this.state.underline && h.classList.add("log-underline"), this.state.strikethrough && h.classList.add("log-strikethrough"), this.state.secret && h.classList.add("log-secret"), this.state.foregroundColor !== null && h.classList.add(`log-fg-${this.state.foregroundColor}`), this.state.backgroundColor !== null && h.classList.add(`log-bg-${this.state.backgroundColor}`), h.appendChild(document.createTextNode(d)), r.appendChild(h), this.state.secret) {
        const l = document.createElement("span");
        l.classList.add("log-secret-redacted"), l.appendChild(document.createTextNode("[redacted]")), r.appendChild(l);
      }
    };
    for (; ; ) {
      const d = e.exec(t);
      if (d === null)
        break;
      const h = d.index;
      if (a(t.substring(n, h)), n = h + d[0].length, d[1] !== void 0)
        for (const l of d[1].split(";"))
          switch (parseInt(l)) {
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
    const o = this.targetElement.scrollTop > this.targetElement.scrollHeight - this.targetElement.offsetHeight - 50;
    a(t.substring(n)), o && (this.targetElement.scrollTop = this.targetElement.scrollHeight);
  }
}
const ia = `
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
`, gt = (i) => new Promise((t) => setTimeout(t, i));
class na {
  constructor() {
    this.chunks = "";
  }
  transform(t, e) {
    this.chunks += t;
    const n = this.chunks.split(`\r
`);
    this.chunks = n.pop(), n.forEach((r) => e.enqueue(r + `\r
`));
  }
  flush(t) {
    t.enqueue(this.chunks);
  }
}
class ra extends HTMLElement {
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
        ${ia}
      </style>
      <div class="log"></div>
      ${this.allowInput ? `<form>
                >
                <input autofocus>
              </form>
            ` : ""}
    `, this._console = new ta(this.shadowRoot.querySelector("div")), this.allowInput) {
      const r = this.shadowRoot.querySelector("input");
      this.addEventListener("click", () => {
        var a;
        ((a = getSelection()) === null || a === void 0 ? void 0 : a.toString()) === "" && r.focus();
      }), r.addEventListener("keydown", (a) => {
        a.key === "Enter" && (a.preventDefault(), a.stopPropagation(), this._sendCommand());
      });
    }
    const e = new AbortController(), n = this._connect(e.signal);
    this._cancelConnection = () => (e.abort(), n);
  }
  async _connect(t) {
    this.logger.debug("Starting console read loop");
    try {
      await this.port.readable.pipeThrough(new TextDecoderStream(), {
        signal: t
      }).pipeThrough(new TransformStream(new na())).pipeTo(new WritableStream({
        write: (e) => {
          this._console.addLine(e.replace("\r", ""));
        }
      })), t.aborted || (this._console.addLine(""), this._console.addLine(""), this._console.addLine("Terminal disconnected"));
    } catch (e) {
      this._console.addLine(""), this._console.addLine(""), this._console.addLine(`Terminal disconnected: ${e}`);
    } finally {
      await gt(100), this.logger.debug("Finished console read loop");
    }
  }
  async _sendCommand() {
    const t = this.shadowRoot.querySelector("input"), e = t.value, n = new TextEncoder(), r = this.port.writable.getWriter();
    await r.write(n.encode(e + `\r
`)), this._console.addLine(`> ${e}\r
`), t.value = "", t.focus();
    try {
      r.releaseLock();
    } catch (a) {
      console.error("Ignoring release lock error", a);
    }
  }
  async disconnect() {
    this._cancelConnection && (await this._cancelConnection(), this._cancelConnection = void 0);
  }
  async reset() {
    this.logger.debug("Triggering reset."), await this.port.setSignals({
      dataTerminalReady: !1,
      requestToSend: !0
    }), await this.port.setSignals({
      dataTerminalReady: !1,
      requestToSend: !1
    }), await new Promise((t) => setTimeout(t, 1e3));
  }
}
customElements.define("ewt-console", ra);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var aa = {
  ROOT: "mdc-form-field"
}, oa = {
  LABEL_SELECTOR: ".mdc-form-field > label"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var da = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e) {
      var n = i.call(this, j(j({}, t.defaultAdapter), e)) || this;
      return n.click = function() {
        n.handleClick();
      }, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return oa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {
          activateInputRipple: function() {
          },
          deactivateInputRipple: function() {
          },
          deregisterInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, t.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, t.prototype.handleClick = function() {
      var e = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        e.adapter.deactivateInputRipple();
      });
    }, t;
  }(Ie)
);
const la = da;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class De extends rt {
  constructor() {
    super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = la;
  }
  createAdapter() {
    return {
      registerInteractionHandler: (t, e) => {
        this.labelEl.addEventListener(t, e);
      },
      deregisterInteractionHandler: (t, e) => {
        this.labelEl.removeEventListener(t, e);
      },
      activateInputRipple: async () => {
        const t = this.input;
        if (t instanceof Ve) {
          const e = await t.ripple;
          e && e.startPress();
        }
      },
      deactivateInputRipple: async () => {
        const t = this.input;
        if (t instanceof Ve) {
          const e = await t.ripple;
          e && e.endPress();
        }
      }
    };
  }
  get input() {
    var t, e;
    return (e = (t = this.slottedInputs) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : null;
  }
  render() {
    const t = {
      "mdc-form-field--align-end": this.alignEnd,
      "mdc-form-field--space-between": this.spaceBetween,
      "mdc-form-field--nowrap": this.nowrap
    };
    return _`
      <div class="mdc-form-field ${te(t)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
  }
  click() {
    this._labelClick();
  }
  _labelClick() {
    const t = this.input;
    t && (t.focus(), t.click());
  }
}
c([
  f({ type: Boolean })
], De.prototype, "alignEnd", void 0);
c([
  f({ type: Boolean })
], De.prototype, "spaceBetween", void 0);
c([
  f({ type: Boolean })
], De.prototype, "nowrap", void 0);
c([
  f({ type: String }),
  P(async function(i) {
    var t;
    (t = this.input) === null || t === void 0 || t.setAttribute("aria-label", i);
  })
], De.prototype, "label", void 0);
c([
  M(".mdc-form-field")
], De.prototype, "mdcRoot", void 0);
c([
  Gi("", !0, "*")
], De.prototype, "slottedInputs", void 0);
c([
  M("label")
], De.prototype, "labelEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const sa = Q`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
class nr extends De {
}
nr.styles = [sa];
customElements.define("ewt-formfield", nr);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class xe extends ot {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new Hi(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? _`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
  }
  focus() {
    const t = this.buttonElement;
    t && (this.rippleHandlers.startFocus(), t.focus());
  }
  blur() {
    const t = this.buttonElement;
    t && (this.rippleHandlers.endFocus(), t.blur());
  }
  /** @soyTemplate */
  render() {
    return _`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${B(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? _`<i class="material-icons">${this.icon}</i>` : ""}
    <span
      ><slot></slot
    ></span>
  </button>`;
  }
  handleRippleMouseDown(t) {
    const e = () => {
      window.removeEventListener("mouseup", e), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", e), this.rippleHandlers.startPress(t);
  }
  handleRippleTouchStart(t) {
    this.rippleHandlers.startPress(t);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}
c([
  f({ type: Boolean, reflect: !0 })
], xe.prototype, "disabled", void 0);
c([
  f({ type: String })
], xe.prototype, "icon", void 0);
c([
  at,
  f({ type: String, attribute: "aria-label" })
], xe.prototype, "ariaLabel", void 0);
c([
  at,
  f({ type: String, attribute: "aria-haspopup" })
], xe.prototype, "ariaHasPopup", void 0);
c([
  M("button")
], xe.prototype, "buttonElement", void 0);
c([
  Ni("mwc-ripple")
], xe.prototype, "ripple", void 0);
c([
  F()
], xe.prototype, "shouldRenderRipple", void 0);
c([
  Ct({ passive: !0 })
], xe.prototype, "handleRippleMouseDown", null);
c([
  Ct({ passive: !0 })
], xe.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ca = Q`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
class rr extends xe {
}
rr.styles = [ca];
customElements.define("ewt-icon-button", rr);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ha = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, en = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, ma = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fa = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e) {
      return i.call(this, j(j({}, t.defaultAdapter), e)) || this;
    }
    return Object.defineProperty(t, "strings", {
      get: function() {
        return ha;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "cssClasses", {
      get: function() {
        return ma;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return en;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.notch = function(e) {
      var n = t.cssClasses.OUTLINE_NOTCHED;
      e > 0 && (e += en.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(e), this.adapter.addClass(n);
    }, t.prototype.closeNotch = function() {
      var e = t.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
    }, t;
  }(Ie)
);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ot extends rt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = fa, this.width = 0, this.open = !1, this.lastOpen = this.open;
  }
  createAdapter() {
    return {
      addClass: (t) => this.mdcRoot.classList.add(t),
      removeClass: (t) => this.mdcRoot.classList.remove(t),
      setNotchWidthProperty: (t) => this.notchElement.style.setProperty("width", `${t}px`),
      removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width")
    };
  }
  openOrClose(t, e) {
    this.mdcFoundation && (t && e !== void 0 ? this.mdcFoundation.notch(e) : this.mdcFoundation.closeNotch());
  }
  render() {
    this.openOrClose(this.open, this.width);
    const t = te({
      "mdc-notched-outline--notched": this.open
    });
    return _`
      <span class="mdc-notched-outline ${t}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
c([
  M(".mdc-notched-outline")
], Ot.prototype, "mdcRoot", void 0);
c([
  f({ type: Number })
], Ot.prototype, "width", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], Ot.prototype, "open", void 0);
c([
  M(".mdc-notched-outline__notch")
], Ot.prototype, "notchElement", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ua = Q`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ki = class extends Ot {
};
ki.styles = [ua];
ki = c([
  Lt("mwc-notched-outline")
], ki);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pa = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e) {
      var n = i.call(this, j(j({}, t.defaultAdapter), e)) || this;
      return n.shakeAnimationEndHandler = function() {
        n.handleShakeAnimationEnd();
      }, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return pa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, t.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, t.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, t.prototype.shake = function(e) {
      var n = t.cssClasses.LABEL_SHAKE;
      e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, t.prototype.float = function(e) {
      var n = t.cssClasses, r = n.LABEL_FLOAT_ABOVE, a = n.LABEL_SHAKE;
      e ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(a));
    }, t.prototype.setRequired = function(e) {
      var n = t.cssClasses.LABEL_REQUIRED;
      e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, t.prototype.handleShakeAnimationEnd = function() {
      var e = t.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(e);
    }, t;
  }(Ie)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ga = (i) => ({
  addClass: (t) => i.classList.add(t),
  removeClass: (t) => i.classList.remove(t),
  getWidth: () => i.scrollWidth,
  registerInteractionHandler: (t, e) => {
    i.addEventListener(t, e);
  },
  deregisterInteractionHandler: (t, e) => {
    i.removeEventListener(t, e);
  }
});
class ba extends Vi {
  constructor(t) {
    switch (super(t), this.foundation = null, this.previousPart = null, t.type) {
      case pe.ATTRIBUTE:
      case pe.PROPERTY:
        break;
      default:
        throw new Error("FloatingLabel directive only support attribute and property parts");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(t, [e]) {
    if (t !== this.previousPart) {
      this.foundation && this.foundation.destroy(), this.previousPart = t;
      const n = t.element;
      n.classList.add("mdc-floating-label");
      const r = ga(n);
      this.foundation = new _a(r), this.foundation.init();
    }
    return this.render(e);
  }
  render(t) {
    return this.foundation;
  }
}
const ar = Ui(ba);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ze = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var xa = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e) {
      var n = i.call(this, j(j({}, t.defaultAdapter), e)) || this;
      return n.transitionEndHandler = function(r) {
        n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return ze;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, t.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, t.prototype.activate = function() {
      this.adapter.removeClass(ze.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ze.LINE_RIPPLE_ACTIVE);
    }, t.prototype.setRippleCenter = function(e) {
      this.adapter.setStyle("transform-origin", e + "px center");
    }, t.prototype.deactivate = function() {
      this.adapter.addClass(ze.LINE_RIPPLE_DEACTIVATING);
    }, t.prototype.handleTransitionEnd = function(e) {
      var n = this.adapter.hasClass(ze.LINE_RIPPLE_DEACTIVATING);
      e.propertyName === "opacity" && n && (this.adapter.removeClass(ze.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ze.LINE_RIPPLE_DEACTIVATING));
    }, t;
  }(Ie)
);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const va = (i) => ({
  addClass: (t) => i.classList.add(t),
  removeClass: (t) => i.classList.remove(t),
  hasClass: (t) => i.classList.contains(t),
  setStyle: (t, e) => i.style.setProperty(t, e),
  registerEventHandler: (t, e) => {
    i.addEventListener(t, e);
  },
  deregisterEventHandler: (t, e) => {
    i.removeEventListener(t, e);
  }
});
class ya extends Vi {
  constructor(t) {
    switch (super(t), this.previousPart = null, this.foundation = null, t.type) {
      case pe.ATTRIBUTE:
      case pe.PROPERTY:
        return;
      default:
        throw new Error("LineRipple only support attribute and property parts.");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(t, e) {
    if (this.previousPart !== t) {
      this.foundation && this.foundation.destroy(), this.previousPart = t;
      const n = t.element;
      n.classList.add("mdc-line-ripple");
      const r = va(n);
      this.foundation = new xa(r), this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const or = Ui(ya);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var oi = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, wa = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, tn = {
  LABEL_SCALE: 0.75
}, Ea = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], ka = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var nn = ["mousedown", "touchstart"], rn = ["click", "keydown"], Ia = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e, n) {
      n === void 0 && (n = {});
      var r = i.call(this, j(j({}, t.defaultAdapter), e)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = n.helperText, r.characterCounter = n.characterCounter, r.leadingIcon = n.leadingIcon, r.trailingIcon = n.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(a) {
        r.setTransformOrigin(a);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(a) {
        r.handleValidationAttributeChange(a);
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return wa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return oi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return tn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "shouldAlwaysFloat", {
      get: function() {
        var e = this.getNativeInput().type;
        return ka.indexOf(e) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      var e, n, r, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = ut(nn), d = o.next(); !d.done; d = o.next()) {
          var h = d.value;
          this.adapter.registerInputInteractionHandler(h, this.setPointerXOffset);
        }
      } catch (b) {
        e = { error: b };
      } finally {
        try {
          d && !d.done && (n = o.return) && n.call(o);
        } finally {
          if (e)
            throw e.error;
        }
      }
      try {
        for (var l = ut(rn), s = l.next(); !s.done; s = l.next()) {
          var h = s.value;
          this.adapter.registerTextFieldInteractionHandler(h, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          s && !s.done && (a = l.return) && a.call(l);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, t.prototype.destroy = function() {
      var e, n, r, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = ut(nn), d = o.next(); !d.done; d = o.next()) {
          var h = d.value;
          this.adapter.deregisterInputInteractionHandler(h, this.setPointerXOffset);
        }
      } catch (b) {
        e = { error: b };
      } finally {
        try {
          d && !d.done && (n = o.return) && n.call(o);
        } finally {
          if (e)
            throw e.error;
        }
      }
      try {
        for (var l = ut(rn), s = l.next(); !s.done; s = l.next()) {
          var h = s.value;
          this.adapter.deregisterTextFieldInteractionHandler(h, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          s && !s.done && (a = l.return) && a.call(l);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, t.prototype.handleTextFieldInteraction = function() {
      var e = this.adapter.getNativeInput();
      e && e.disabled || (this.receivedUserInput = !0);
    }, t.prototype.handleValidationAttributeChange = function(e) {
      var n = this;
      e.some(function(r) {
        return Ea.indexOf(r) > -1 ? (n.styleValidity(!0), n.adapter.setLabelRequired(n.getNativeInput().required), !0) : !1;
      }), e.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, t.prototype.notchOutline = function(e) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (e) {
          var n = this.adapter.getLabelWidth() * tn.LABEL_SCALE;
          this.adapter.notchOutline(n);
        } else
          this.adapter.closeOutline();
    }, t.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, t.prototype.setTransformOrigin = function(e) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var n = e.touches, r = n ? n[0] : e, a = r.target.getBoundingClientRect(), o = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, t.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, t.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, t.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var e = this.isValid();
      this.styleValidity(e), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, t.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, t.prototype.setValue = function(e) {
      if (this.getValue() !== e && (this.getNativeInput().value = e), this.setcharacterCounter(e.length), this.validateOnValueChange) {
        var n = this.isValid();
        this.styleValidity(n);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, t.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, t.prototype.setValid = function(e) {
      this.valid = e, this.styleValidity(e);
      var n = !e && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(n);
    }, t.prototype.setValidateOnValueChange = function(e) {
      this.validateOnValueChange = e;
    }, t.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, t.prototype.setUseNativeValidation = function(e) {
      this.useNativeValidation = e;
    }, t.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, t.prototype.setDisabled = function(e) {
      this.getNativeInput().disabled = e, this.styleDisabled(e);
    }, t.prototype.setHelperTextContent = function(e) {
      this.helperText && this.helperText.setContent(e);
    }, t.prototype.setLeadingIconAriaLabel = function(e) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(e);
    }, t.prototype.setLeadingIconContent = function(e) {
      this.leadingIcon && this.leadingIcon.setContent(e);
    }, t.prototype.setTrailingIconAriaLabel = function(e) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(e);
    }, t.prototype.setTrailingIconContent = function(e) {
      this.trailingIcon && this.trailingIcon.setContent(e);
    }, t.prototype.setcharacterCounter = function(e) {
      if (this.characterCounter) {
        var n = this.getNativeInput().maxLength;
        if (n === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(e, n);
      }
    }, t.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, t.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, t.prototype.styleValidity = function(e) {
      var n = t.cssClasses.INVALID;
      if (e ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText) {
        this.helperText.setValidity(e);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(oi.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(oi.ARIA_DESCRIBEDBY);
      }
    }, t.prototype.styleFocused = function(e) {
      var n = t.cssClasses.FOCUSED;
      e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, t.prototype.styleDisabled = function(e) {
      var n = t.cssClasses, r = n.DISABLED, a = n.INVALID;
      e ? (this.adapter.addClass(r), this.adapter.removeClass(a)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(e), this.trailingIcon && this.trailingIcon.setDisabled(e);
    }, t.prototype.styleFloating = function(e) {
      var n = t.cssClasses.LABEL_FLOATING;
      e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, t.prototype.getNativeInput = function() {
      var e = this.adapter ? this.adapter.getNativeInput() : null;
      return e || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, t;
  }(Ie)
);
const Sa = Ia;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Aa = (i) => i.strings === void 0, Ra = {}, Ta = (i, t = Ra) => i._$AH = t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ca = Ui(class extends Vi {
  constructor(i) {
    if (super(i), i.type !== pe.PROPERTY && i.type !== pe.ATTRIBUTE && i.type !== pe.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Aa(i))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(i) {
    return i;
  }
  update(i, [t]) {
    if (t === Bt || t === Be)
      return t;
    const e = i.element, n = i.name;
    if (i.type === pe.PROPERTY) {
      if (t === e[n])
        return Bt;
    } else if (i.type === pe.BOOLEAN_ATTRIBUTE) {
      if (!!t === e.hasAttribute(n))
        return Bt;
    } else if (i.type === pe.ATTRIBUTE && e.getAttribute(n) === t + "")
      return Bt;
    return Ta(i), t;
  }
});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const La = ["touchstart", "touchmove", "scroll", "mousewheel"], an = (i = {}) => {
  const t = {};
  for (const e in i)
    t[e] = i[e];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, t);
};
class R extends Ve {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Sa, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = an(), this.validityTransform = null;
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  get willValidate() {
    return this.formElement.willValidate;
  }
  get selectionStart() {
    return this.formElement.selectionStart;
  }
  get selectionEnd() {
    return this.formElement.selectionEnd;
  }
  focus() {
    const t = new CustomEvent("focus");
    this.formElement.dispatchEvent(t), this.formElement.focus();
  }
  blur() {
    const t = new CustomEvent("blur");
    this.formElement.dispatchEvent(t), this.formElement.blur();
  }
  select() {
    this.formElement.select();
  }
  setSelectionRange(t, e, n) {
    this.formElement.setSelectionRange(t, e, n);
  }
  update(t) {
    t.has("autoValidate") && this.mdcFoundation && this.mdcFoundation.setValidateOnValueChange(this.autoValidate), t.has("value") && typeof this.value != "string" && (this.value = `${this.value}`), super.update(t);
  }
  setFormData(t) {
    this.name && t.append(this.name, this.value);
  }
  /** @soyTemplate */
  render() {
    const t = this.charCounter && this.maxLength !== -1, e = !!this.helper || !!this.validationMessage || t, n = {
      "mdc-text-field--disabled": this.disabled,
      "mdc-text-field--no-label": !this.label,
      "mdc-text-field--filled": !this.outlined,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--with-leading-icon": this.icon,
      "mdc-text-field--with-trailing-icon": this.iconTrailing,
      "mdc-text-field--end-aligned": this.endAligned
    };
    return _`
      <label class="mdc-text-field ${te(n)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(e)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e, t)}
    `;
  }
  updated(t) {
    t.has("value") && t.get("value") !== void 0 && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity());
  }
  /** @soyTemplate */
  renderRipple() {
    return this.outlined ? "" : _`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  /** @soyTemplate */
  renderOutline() {
    return this.outlined ? _`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : "";
  }
  /** @soyTemplate */
  renderLabel() {
    return this.label ? _`
      <span
          .floatingLabelFoundation=${ar(this.label)}
          id="label">${this.label}</span>
    ` : "";
  }
  /** @soyTemplate */
  renderLeadingIcon() {
    return this.icon ? this.renderIcon(this.icon) : "";
  }
  /** @soyTemplate */
  renderTrailingIcon() {
    return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : "";
  }
  /** @soyTemplate */
  renderIcon(t, e = !1) {
    return _`<i class="material-icons mdc-text-field__icon ${te({
      "mdc-text-field__icon--leading": !e,
      "mdc-text-field__icon--trailing": e
    })}">${t}</i>`;
  }
  /** @soyTemplate */
  renderPrefix() {
    return this.prefix ? this.renderAffix(this.prefix) : "";
  }
  /** @soyTemplate */
  renderSuffix() {
    return this.suffix ? this.renderAffix(this.suffix, !0) : "";
  }
  /** @soyTemplate */
  renderAffix(t, e = !1) {
    return _`<span class="mdc-text-field__affix ${te({
      "mdc-text-field__affix--prefix": !e,
      "mdc-text-field__affix--suffix": e
    })}">
        ${t}</span>`;
  }
  /** @soyTemplate */
  renderInput(t) {
    const e = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0, a = this.validationMessage && !this.isUiValid, o = this.label ? "label" : void 0, d = t ? "helper-text" : void 0, h = this.focused || this.helperPersistent || a ? "helper-text" : void 0;
    return _`
      <input
          aria-labelledby=${B(o)}
          aria-controls="${B(d)}"
          aria-describedby="${B(h)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Ca(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${B(e)}"
          maxlength="${B(n)}"
          pattern="${B(this.pattern ? this.pattern : void 0)}"
          min="${B(this.min === "" ? void 0 : this.min)}"
          max="${B(this.max === "" ? void 0 : this.max)}"
          step="${B(this.step === null ? void 0 : this.step)}"
          size="${B(this.size === null ? void 0 : this.size)}"
          name="${B(this.name === "" ? void 0 : this.name)}"
          inputmode="${B(this.inputMode)}"
          autocapitalize="${B(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  /** @soyTemplate */
  renderLineRipple() {
    return this.outlined ? "" : _`
      <span .lineRippleFoundation=${or()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(t, e) {
    const n = this.validationMessage && !this.isUiValid, r = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": n
    }, a = this.focused || this.helperPersistent || n ? void 0 : "true", o = n ? this.validationMessage : this.helper;
    return t ? _`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${B(a)}"
             class="mdc-text-field-helper-text ${te(r)}"
             >${o}</div>
        ${this.renderCharCounter(e)}
      </div>` : "";
  }
  /** @soyTemplate */
  renderCharCounter(t) {
    const e = Math.min(this.value.length, this.maxLength);
    return t ? _`
      <span class="mdc-text-field-character-counter"
            >${e} / ${this.maxLength}</span>` : "";
  }
  onInputFocus() {
    this.focused = !0;
  }
  onInputBlur() {
    this.focused = !1, this.reportValidity();
  }
  checkValidity() {
    const t = this._checkValidity(this.value);
    if (!t) {
      const e = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(e);
    }
    return t;
  }
  reportValidity() {
    const t = this.checkValidity();
    return this.mdcFoundation.setValid(t), this.isUiValid = t, t;
  }
  _checkValidity(t) {
    const e = this.formElement.validity;
    let n = an(e);
    if (this.validityTransform) {
      const r = this.validityTransform(t, n);
      n = Object.assign(Object.assign({}, n), r), this.mdcFoundation.setUseNativeValidation(!1);
    } else
      this.mdcFoundation.setUseNativeValidation(!0);
    return this._validity = n, this._validity.valid;
  }
  setCustomValidity(t) {
    this.validationMessage = t, this.formElement.setCustomValidity(t);
  }
  handleInputChange() {
    this.value = this.formElement.value;
  }
  createAdapter() {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
  }
  getRootAdapterMethods() {
    return Object.assign({ registerTextFieldInteractionHandler: (t, e) => this.addEventListener(t, e), deregisterTextFieldInteractionHandler: (t, e) => this.removeEventListener(t, e), registerValidationAttributeChangeHandler: (t) => {
      const e = (a) => a.map((o) => o.attributeName).filter((o) => o), n = new MutationObserver((a) => {
        t(e(a));
      }), r = { attributes: !0 };
      return n.observe(this.formElement, r), n;
    }, deregisterValidationAttributeChangeHandler: (t) => t.disconnect() }, Wi(this.mdcRoot));
  }
  getInputAdapterMethods() {
    return {
      getNativeInput: () => this.formElement,
      // since HelperTextFoundation is not used, aria-describedby a11y logic
      // is implemented in render method instead of these adapter methods
      setInputAttr: () => {
      },
      removeInputAttr: () => {
      },
      isFocused: () => this.shadowRoot ? this.shadowRoot.activeElement === this.formElement : !1,
      registerInputInteractionHandler: (t, e) => this.formElement.addEventListener(t, e, { passive: t in La }),
      deregisterInputInteractionHandler: (t, e) => this.formElement.removeEventListener(t, e)
    };
  }
  getLabelAdapterMethods() {
    return {
      floatLabel: (t) => this.labelElement && this.labelElement.floatingLabelFoundation.float(t),
      getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0,
      hasLabel: () => !!this.labelElement,
      shakeLabel: (t) => this.labelElement && this.labelElement.floatingLabelFoundation.shake(t),
      setLabelRequired: (t) => {
        this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(t);
      }
    };
  }
  getLineRippleAdapterMethods() {
    return {
      activateLineRipple: () => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
      },
      deactivateLineRipple: () => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
      },
      setLineRippleTransformOrigin: (t) => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(t);
      }
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    var t;
    const e = await super.getUpdateComplete();
    return await ((t = this.outlineElement) === null || t === void 0 ? void 0 : t.updateComplete), e;
  }
  // tslint:enable:ban-ts-ignore
  firstUpdated() {
    var t;
    super.firstUpdated(), this.mdcFoundation.setValidateOnValueChange(this.autoValidate), this.validateOnInitialRender && this.reportValidity(), (t = this.outlineElement) === null || t === void 0 || t.updateComplete.then(() => {
      var e;
      this.outlineWidth = ((e = this.labelElement) === null || e === void 0 ? void 0 : e.floatingLabelFoundation.getWidth()) || 0;
    });
  }
  getOutlineAdapterMethods() {
    return {
      closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
      hasOutline: () => !!this.outlineElement,
      notchOutline: (t) => {
        this.outlineElement && !this.outlineOpen && (this.outlineWidth = t, this.outlineOpen = !0);
      }
    };
  }
  async layout() {
    await this.updateComplete;
    const t = this.labelElement;
    if (!t) {
      this.outlineOpen = !1;
      return;
    }
    const e = !!this.label && !!this.value;
    if (t.floatingLabelFoundation.float(e), !this.outlined)
      return;
    this.outlineOpen = e, await this.updateComplete;
    const n = t.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = n, await this.updateComplete);
  }
}
c([
  M(".mdc-text-field")
], R.prototype, "mdcRoot", void 0);
c([
  M("input")
], R.prototype, "formElement", void 0);
c([
  M(".mdc-floating-label")
], R.prototype, "labelElement", void 0);
c([
  M(".mdc-line-ripple")
], R.prototype, "lineRippleElement", void 0);
c([
  M("mwc-notched-outline")
], R.prototype, "outlineElement", void 0);
c([
  M(".mdc-notched-outline__notch")
], R.prototype, "notchElement", void 0);
c([
  f({ type: String })
], R.prototype, "value", void 0);
c([
  f({ type: String })
], R.prototype, "type", void 0);
c([
  f({ type: String })
], R.prototype, "placeholder", void 0);
c([
  f({ type: String }),
  P(function(i, t) {
    t !== void 0 && this.label !== t && this.layout();
  })
], R.prototype, "label", void 0);
c([
  f({ type: String })
], R.prototype, "icon", void 0);
c([
  f({ type: String })
], R.prototype, "iconTrailing", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], R.prototype, "disabled", void 0);
c([
  f({ type: Boolean })
], R.prototype, "required", void 0);
c([
  f({ type: Number })
], R.prototype, "minLength", void 0);
c([
  f({ type: Number })
], R.prototype, "maxLength", void 0);
c([
  f({ type: Boolean, reflect: !0 }),
  P(function(i, t) {
    t !== void 0 && this.outlined !== t && this.layout();
  })
], R.prototype, "outlined", void 0);
c([
  f({ type: String })
], R.prototype, "helper", void 0);
c([
  f({ type: Boolean })
], R.prototype, "validateOnInitialRender", void 0);
c([
  f({ type: String })
], R.prototype, "validationMessage", void 0);
c([
  f({ type: Boolean })
], R.prototype, "autoValidate", void 0);
c([
  f({ type: String })
], R.prototype, "pattern", void 0);
c([
  f({ type: String })
], R.prototype, "min", void 0);
c([
  f({ type: String })
], R.prototype, "max", void 0);
c([
  f({ type: String })
], R.prototype, "step", void 0);
c([
  f({ type: Number })
], R.prototype, "size", void 0);
c([
  f({ type: Boolean })
], R.prototype, "helperPersistent", void 0);
c([
  f({ type: Boolean })
], R.prototype, "charCounter", void 0);
c([
  f({ type: Boolean })
], R.prototype, "endAligned", void 0);
c([
  f({ type: String })
], R.prototype, "prefix", void 0);
c([
  f({ type: String })
], R.prototype, "suffix", void 0);
c([
  f({ type: String })
], R.prototype, "name", void 0);
c([
  f({ type: String })
], R.prototype, "inputMode", void 0);
c([
  f({ type: Boolean })
], R.prototype, "readOnly", void 0);
c([
  f({ type: String })
], R.prototype, "autocapitalize", void 0);
c([
  F()
], R.prototype, "outlineOpen", void 0);
c([
  F()
], R.prototype, "outlineWidth", void 0);
c([
  F()
], R.prototype, "isUiValid", void 0);
c([
  F()
], R.prototype, "focused", void 0);
c([
  Ct({ passive: !0 })
], R.prototype, "handleInputChange", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Oa = Q`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
class dr extends R {
}
dr.styles = [
  Oa,
  // rem -> em conversion
  Q`
      .mdc-floating-label {
        line-height: 1.15em;
      }
    `
];
customElements.define("ewt-textfield", dr);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class q extends ot {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Hi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
      {
        target: this,
        eventNames: ["click"],
        cb: () => {
          this.onClick();
        }
      },
      {
        target: this,
        eventNames: ["mouseenter"],
        cb: this.rippleHandlers.startHover
      },
      {
        target: this,
        eventNames: ["mouseleave"],
        cb: this.rippleHandlers.endHover
      },
      {
        target: this,
        eventNames: ["focus"],
        cb: this.rippleHandlers.startFocus
      },
      {
        target: this,
        eventNames: ["blur"],
        cb: this.rippleHandlers.endFocus
      },
      {
        target: this,
        eventNames: ["mousedown", "touchstart"],
        cb: (t) => {
          const e = t.type;
          this.onDown(e === "mousedown" ? "mouseup" : "touchend", t);
        }
      }
    ];
  }
  get text() {
    const t = this.textContent;
    return t ? t.trim() : "";
  }
  render() {
    const t = this.renderText(), e = this.graphic ? this.renderGraphic() : _``, n = this.hasMeta ? this.renderMeta() : _``;
    return _`
      ${this.renderRipple()}
      ${e}
      ${t}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? _`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? _`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return _`
      <span class="mdc-deprecated-list-item__graphic material-icons ${te(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return _`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return _`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return _`<slot></slot>`;
  }
  renderTwoline() {
    return _`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(t, e) {
    const n = () => {
      window.removeEventListener(t, n), this.rippleHandlers.endPress();
    };
    window.addEventListener(t, n), this.rippleHandlers.startPress(e);
  }
  fireRequestSelected(t, e) {
    if (this.noninteractive)
      return;
    const n = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: e, selected: t } });
    this.dispatchEvent(n);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const t of this.listeners)
      for (const e of t.eventNames)
        t.target.addEventListener(e, t.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of this.listeners)
      for (const e of t.eventNames)
        t.target.removeEventListener(e, t.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const t = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(t);
  }
}
c([
  M("slot")
], q.prototype, "slotElement", void 0);
c([
  Ni("mwc-ripple")
], q.prototype, "ripple", void 0);
c([
  f({ type: String })
], q.prototype, "value", void 0);
c([
  f({ type: String, reflect: !0 })
], q.prototype, "group", void 0);
c([
  f({ type: Number, reflect: !0 })
], q.prototype, "tabindex", void 0);
c([
  f({ type: Boolean, reflect: !0 }),
  P(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], q.prototype, "disabled", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], q.prototype, "twoline", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], q.prototype, "activated", void 0);
c([
  f({ type: String, reflect: !0 })
], q.prototype, "graphic", void 0);
c([
  f({ type: Boolean })
], q.prototype, "multipleGraphics", void 0);
c([
  f({ type: Boolean })
], q.prototype, "hasMeta", void 0);
c([
  f({ type: Boolean, reflect: !0 }),
  P(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], q.prototype, "noninteractive", void 0);
c([
  f({ type: Boolean, reflect: !0 }),
  P(function(i) {
    const t = this.getAttribute("role"), e = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (e && i ? this.setAttribute("aria-selected", "true") : e && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], q.prototype, "selected", void 0);
c([
  F()
], q.prototype, "shouldRenderRipple", void 0);
c([
  F()
], q.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const lr = Q`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ii = class extends q {
};
Ii.styles = [lr];
Ii = c([
  Lt("mwc-list-item")
], Ii);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var S = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, ne = /* @__PURE__ */ new Set();
ne.add(S.BACKSPACE);
ne.add(S.ENTER);
ne.add(S.SPACEBAR);
ne.add(S.PAGE_UP);
ne.add(S.PAGE_DOWN);
ne.add(S.END);
ne.add(S.HOME);
ne.add(S.ARROW_LEFT);
ne.add(S.ARROW_UP);
ne.add(S.ARROW_RIGHT);
ne.add(S.ARROW_DOWN);
ne.add(S.DELETE);
ne.add(S.ESCAPE);
ne.add(S.TAB);
var oe = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, re = /* @__PURE__ */ new Map();
re.set(oe.BACKSPACE, S.BACKSPACE);
re.set(oe.ENTER, S.ENTER);
re.set(oe.SPACEBAR, S.SPACEBAR);
re.set(oe.PAGE_UP, S.PAGE_UP);
re.set(oe.PAGE_DOWN, S.PAGE_DOWN);
re.set(oe.END, S.END);
re.set(oe.HOME, S.HOME);
re.set(oe.ARROW_LEFT, S.ARROW_LEFT);
re.set(oe.ARROW_UP, S.ARROW_UP);
re.set(oe.ARROW_RIGHT, S.ARROW_RIGHT);
re.set(oe.ARROW_DOWN, S.ARROW_DOWN);
re.set(oe.DELETE, S.DELETE);
re.set(oe.ESCAPE, S.ESCAPE);
re.set(oe.TAB, S.TAB);
var Me = /* @__PURE__ */ new Set();
Me.add(S.PAGE_UP);
Me.add(S.PAGE_DOWN);
Me.add(S.END);
Me.add(S.HOME);
Me.add(S.ARROW_LEFT);
Me.add(S.ARROW_UP);
Me.add(S.ARROW_RIGHT);
Me.add(S.ARROW_DOWN);
function V(i) {
  var t = i.key;
  if (ne.has(t))
    return t;
  var e = re.get(i.keyCode);
  return e || S.UNKNOWN;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Se, ye, $ = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Se = {}, Se["" + $.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Se["" + $.LIST_ITEM_CLASS] = "mdc-list-item", Se["" + $.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Se["" + $.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Se["" + $.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Se["" + $.ROOT] = "mdc-list";
var Ke = (ye = {}, ye["" + $.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ye["" + $.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ye["" + $.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ye["" + $.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ye["" + $.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ye["" + $.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ye["" + $.ROOT] = "mdc-deprecated-list", ye), Pt = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + $.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + $.LIST_ITEM_CLASS + ` a,
    .` + Ke[$.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ke[$.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + $.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + $.LIST_ITEM_CLASS + ` a,
    .` + $.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + $.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ke[$.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ke[$.LIST_ITEM_CLASS] + ` a,
    .` + Ke[$.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ke[$.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, J = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Si = (i, t) => i - t, Fa = (i, t) => {
  const e = Array.from(i), n = Array.from(t), r = { added: [], removed: [] }, a = e.sort(Si), o = n.sort(Si);
  let d = 0, h = 0;
  for (; d < a.length || h < o.length; ) {
    const l = a[d], s = o[h];
    if (l === s) {
      d++, h++;
      continue;
    }
    if (l !== void 0 && (s === void 0 || l < s)) {
      r.removed.push(l), d++;
      continue;
    }
    if (s !== void 0 && (l === void 0 || s < l)) {
      r.added.push(s), h++;
      continue;
    }
  }
  return r;
}, Da = ["input", "button", "textarea", "select"];
function bt(i) {
  return i instanceof Set;
}
const di = (i) => {
  const t = i === J.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return bt(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class Zi extends Ie {
  constructor(t) {
    super(Object.assign(Object.assign({}, Zi.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = J.UNSET_INDEX, this.focusedItemIndex_ = J.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Pt;
  }
  static get numbers() {
    return J;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {
      },
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {
      },
      notifySelected: () => {
      },
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {
      },
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {
      },
      setActivatedStateForElementIndex: () => {
      },
      setTabIndexForElementIndex: () => {
      },
      setAttributeForElementIndex: () => {
      },
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(t) {
    this.wrapFocus_ = t;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(t) {
    this.isMulti_ = t;
    const e = this.selectedIndex_;
    if (t) {
      if (!bt(e)) {
        const n = e === J.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([e]);
      }
    } else if (bt(e))
      if (e.size) {
        const n = Array.from(e).sort(Si);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = J.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(t) {
    this.isVertical_ = t;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(t) {
    this.useActivatedClass_ = t;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(t) {
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(di(t)) : this.setSingleSelectionAtIndex_(t));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(t, e) {
    e >= 0 && this.adapter.setTabIndexForElementIndex(e, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(t, e) {
    e >= 0 && this.adapter.setTabIndexForElementIndex(e, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(t, e, n) {
    const r = V(t) === "ArrowLeft", a = V(t) === "ArrowUp", o = V(t) === "ArrowRight", d = V(t) === "ArrowDown", h = V(t) === "Home", l = V(t) === "End", s = V(t) === "Enter", b = V(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || l ? (t.preventDefault(), this.focusLastElement()) : (d || h) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let u = this.adapter.getFocusedElementIndex();
    if (u === -1 && (u = n, u < 0))
      return;
    let m;
    if (this.isVertical_ && d || !this.isVertical_ && o)
      this.preventDefaultEvent(t), m = this.focusNextElement(u);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(t), m = this.focusPrevElement(u);
    else if (h)
      this.preventDefaultEvent(t), m = this.focusFirstElement();
    else if (l)
      this.preventDefaultEvent(t), m = this.focusLastElement();
    else if ((s || b) && e) {
      const g = t.target;
      if (g && g.tagName === "A" && s)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(u, !0);
    }
    this.focusedItemIndex_ = u, m !== void 0 && (this.setTabindexAtIndex_(m), this.focusedItemIndex_ = m);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, e, n) {
    t !== J.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, e, n), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const e = this.adapter.getListItemCount();
    let n = t + 1;
    if (n >= e)
      if (this.wrapFocus_)
        n = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(n), n;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(t) {
    let e = t - 1;
    if (e < 0)
      if (this.wrapFocus_)
        e = this.adapter.getListItemCount() - 1;
      else
        return t;
    return this.adapter.focusItemAtIndex(e), e;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const t = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(t), t;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(t, e) {
    this.isIndexValid_(t) && this.adapter.setDisabledStateForElementIndex(t, !e);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(t) {
    const n = `${t.target.tagName}`.toLowerCase();
    Da.indexOf(n) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, e = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== J.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), e && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, e = !0) {
    const n = di(this.selectedIndex_), r = Fa(n, t);
    if (!(!r.removed.length && !r.added.length)) {
      for (const a of r.removed)
        e && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of r.added)
        e && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === J.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, Pt.ARIA_CURRENT));
    const e = this.ariaCurrentAttrValue_ !== null, n = e ? Pt.ARIA_CURRENT : Pt.ARIA_SELECTED;
    this.selectedIndex_ !== J.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = e ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, n, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === J.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== J.UNSET_INDEX ? t = this.selectedIndex_ : bt(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let e = !1;
        for (const n of t)
          if (e = this.isIndexInRange_(n), e)
            break;
        return e;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === J.UNSET_INDEX || this.isIndexInRange_(t);
    } else
      return !1;
  }
  isIndexInRange_(t) {
    const e = this.adapter.getListItemCount();
    return t >= 0 && t < e;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(t, e, n) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let r = t;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, n, e) : e || n ? this.setSingleSelectionAtIndex_(t, e) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(J.UNSET_INDEX), e && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, e, n = !0) {
    let r = !1;
    e === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = e;
    const a = di(this.selectedIndex_);
    r ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, n);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ma(i, t = 50) {
  let e;
  return function(n = !0) {
    clearTimeout(e), e = setTimeout(() => {
      i(n);
    }, t);
  };
}
const Nt = (i) => i.hasAttribute("mwc-list-item");
function za() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), i();
}
class ce extends rt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Zi, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = Ma(this.layout.bind(this));
    this.debouncedLayout = (e = !0) => {
      za.call(this), t(e);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const t = await super.getUpdateComplete();
    return await this.itemsReady, t;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var t;
    const e = (t = this.assignedElements) !== null && t !== void 0 ? t : [], n = [];
    for (const o of e)
      Nt(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((o, d) => {
      this.itemRoles ? o.setAttribute("role", this.itemRoles) : o.removeAttribute("role"), o.selected && r.add(d);
    }), this.multi)
      this.select(r);
    else {
      const o = r.size ? r.entries().next().value[1] : -1;
      this.select(o);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const t = this.index;
    if (!bt(t))
      return t === -1 ? null : this.items[t];
    const e = [];
    for (const n of t)
      e.push(this.items[n]);
    return e;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, e = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, n = this.rootTabbable ? "0" : "-1";
    return _`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${B(t)}"
          aria-label="${B(e)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var t;
    const e = (t = this.assignedElements) !== null && t !== void 0 ? t : [];
    return this.emptyMessage !== void 0 && e.length === 0 ? _`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const e = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusIn(t, e);
    }
  }
  onFocusOut(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const e = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusOut(t, e);
    }
  }
  onKeydown(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const e = this.getIndexOfTarget(t), n = t.target, r = Nt(n);
      this.mdcFoundation.handleKeydown(t, r, e);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let e = this.getIndexOfTarget(t);
      if (e === -1 && (this.layout(), e = this.getIndexOfTarget(t), e === -1) || this.items[e].disabled)
        return;
      const r = t.detail.selected, a = t.detail.source;
      this.mdcFoundation.handleSingleSelection(e, a === "interaction", r), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const e = this.items, n = t.composedPath();
    for (const r of n) {
      let a = -1;
      if (Qn(r) && Nt(r) && (a = e.indexOf(r)), a !== -1)
        return a;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (t, e) => {
        if (!this.mdcRoot)
          return "";
        const r = this.items[t];
        return r ? r.getAttribute(e) : "";
      },
      setAttributeForElementIndex: (t, e, n) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[t];
        r && r.setAttribute(e, n);
      },
      focusItemAtIndex: (t) => {
        const e = this.items[t];
        e && e.focus();
      },
      setTabIndexForElementIndex: (t, e) => {
        const n = this.items[t];
        n && (n.tabindex = e);
      },
      notifyAction: (t) => {
        const e = { bubbles: !0, composed: !0 };
        e.detail = { index: t };
        const n = new CustomEvent("action", e);
        this.dispatchEvent(n);
      },
      notifySelected: (t, e) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: t, diff: e };
        const r = new CustomEvent("selected", n);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => Jn(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, e) => {
        const n = this.items[t];
        n && (n.disabled = e);
      },
      getDisabledStateForElementIndex: (t) => {
        const e = this.items[t];
        return e ? e.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, e) => {
        const n = this.items[t];
        n && (n.selected = e);
      },
      getSelectedStateForElementIndex: (t) => {
        const e = this.items[t];
        return e ? e.selected : !1;
      },
      setActivatedStateForElementIndex: (t, e) => {
        const n = this.items[t];
        n && (n.activated = e);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, e = !1) {
    const n = this.items[t];
    n && (n.selected = !0, n.activated = e);
  }
  deselectUi(t) {
    const e = this.items[t];
    e && (e.selected = !1, e.activated = !1);
  }
  select(t) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(t);
  }
  toggle(t, e) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(t, e);
  }
  onListItemConnected(t) {
    const e = t.target;
    this.layout(this.items.indexOf(e) === -1);
  }
  layout(t = !0) {
    t && this.updateItems();
    const e = this.items[0];
    for (const n of this.items)
      n.tabindex = -1;
    e && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = e) : e.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = er();
    if (!t.length)
      return -1;
    for (let e = t.length - 1; e >= 0; e--) {
      const n = t[e];
      if (Nt(n))
        return this.items.indexOf(n);
    }
    return -1;
  }
  focusItemAtIndex(t) {
    for (const e of this.items)
      if (e.tabindex === 0) {
        e.tabindex = -1;
        break;
      }
    this.items[t].tabindex = 0, this.items[t].focus();
  }
  focus() {
    const t = this.mdcRoot;
    t && t.focus();
  }
  blur() {
    const t = this.mdcRoot;
    t && t.blur();
  }
}
c([
  f({ type: String })
], ce.prototype, "emptyMessage", void 0);
c([
  M(".mdc-deprecated-list")
], ce.prototype, "mdcRoot", void 0);
c([
  Gi("", !0, "*")
], ce.prototype, "assignedElements", void 0);
c([
  Gi("", !0, '[tabindex="0"]')
], ce.prototype, "tabbableElements", void 0);
c([
  f({ type: Boolean }),
  P(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], ce.prototype, "activatable", void 0);
c([
  f({ type: Boolean }),
  P(function(i, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), t !== void 0 && this.layout();
  })
], ce.prototype, "multi", void 0);
c([
  f({ type: Boolean }),
  P(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], ce.prototype, "wrapFocus", void 0);
c([
  f({ type: String }),
  P(function(i, t) {
    t !== void 0 && this.updateItems();
  })
], ce.prototype, "itemRoles", void 0);
c([
  f({ type: String })
], ce.prototype, "innerRole", void 0);
c([
  f({ type: String })
], ce.prototype, "innerAriaLabel", void 0);
c([
  f({ type: Boolean })
], ce.prototype, "rootTabbable", void 0);
c([
  f({ type: Boolean, reflect: !0 }),
  P(function(i) {
    var t, e;
    if (i) {
      const n = (e = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else
      !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], ce.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $a = Q`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ai = class extends ce {
};
Ai.styles = [$a];
Ai = c([
  Lt("mwc-list")
], Ai);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ba = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Pa = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, mt = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, U;
(function(i) {
  i[i.BOTTOM = 1] = "BOTTOM", i[i.CENTER = 2] = "CENTER", i[i.RIGHT = 4] = "RIGHT", i[i.FLIP_RTL = 8] = "FLIP_RTL";
})(U || (U = {}));
var ee;
(function(i) {
  i[i.TOP_LEFT = 0] = "TOP_LEFT", i[i.TOP_RIGHT = 4] = "TOP_RIGHT", i[i.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", i[i.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", i[i.TOP_START = 8] = "TOP_START", i[i.TOP_END = 12] = "TOP_END", i[i.BOTTOM_START = 9] = "BOTTOM_START", i[i.BOTTOM_END = 13] = "BOTTOM_END";
})(ee || (ee = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var sr = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e) {
      var n = i.call(this, j(j({}, t.defaultAdapter), e)) || this;
      return n.isSurfaceOpen = !1, n.isQuickOpen = !1, n.isHoistedElement = !1, n.isFixedPosition = !1, n.isHorizontallyCenteredOnViewport = !1, n.maxHeight = 0, n.openBottomBias = 0, n.openAnimationEndTimerId = 0, n.closeAnimationEndTimerId = 0, n.animationRequestId = 0, n.anchorCorner = ee.TOP_START, n.originCorner = ee.TOP_START, n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, n.position = { x: 0, y: 0 }, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Ba;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Pa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return mt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "Corner", {
      get: function() {
        return ee;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      var e = t.cssClasses, n = e.ROOT, r = e.OPEN;
      if (!this.adapter.hasClass(n))
        throw new Error(n + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, t.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, t.prototype.setAnchorCorner = function(e) {
      this.anchorCorner = e;
    }, t.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ U.RIGHT;
    }, t.prototype.setAnchorMargin = function(e) {
      this.anchorMargin.top = e.top || 0, this.anchorMargin.right = e.right || 0, this.anchorMargin.bottom = e.bottom || 0, this.anchorMargin.left = e.left || 0;
    }, t.prototype.setIsHoisted = function(e) {
      this.isHoistedElement = e;
    }, t.prototype.setFixedPosition = function(e) {
      this.isFixedPosition = e;
    }, t.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, t.prototype.setAbsolutePosition = function(e, n) {
      this.position.x = this.isFinite(e) ? e : 0, this.position.y = this.isFinite(n) ? n : 0;
    }, t.prototype.setIsHorizontallyCenteredOnViewport = function(e) {
      this.isHorizontallyCenteredOnViewport = e;
    }, t.prototype.setQuickOpen = function(e) {
      this.isQuickOpen = e;
    }, t.prototype.setMaxHeight = function(e) {
      this.maxHeight = e;
    }, t.prototype.setOpenBottomBias = function(e) {
      this.openBottomBias = e;
    }, t.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, t.prototype.open = function() {
      var e = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(t.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(t.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        e.dimensions = e.adapter.getInnerDimensions(), e.autoposition(), e.adapter.addClass(t.cssClasses.OPEN), e.openAnimationEndTimerId = setTimeout(function() {
          e.openAnimationEndTimerId = 0, e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN), e.adapter.notifyOpen();
        }, mt.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, t.prototype.close = function(e) {
      var n = this;
      if (e === void 0 && (e = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, e || this.maybeRestoreFocus(), this.adapter.removeClass(t.cssClasses.OPEN), this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          n.adapter.removeClass(t.cssClasses.OPEN), n.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW), n.closeAnimationEndTimerId = setTimeout(function() {
            n.closeAnimationEndTimerId = 0, n.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED), n.adapter.notifyClose();
          }, mt.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, e || this.maybeRestoreFocus();
      }
    }, t.prototype.handleBodyClick = function(e) {
      var n = e.target;
      this.adapter.isElementInContainer(n) || this.close();
    }, t.prototype.handleKeydown = function(e) {
      var n = e.keyCode, r = e.key, a = r === "Escape" || n === 27;
      a && this.close();
    }, t.prototype.autoposition = function() {
      var e;
      this.measurements = this.getAutoLayoutmeasurements();
      var n = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(n), a = this.hasBit(n, U.BOTTOM) ? "bottom" : "top", o = this.hasBit(n, U.RIGHT) ? "right" : "left", d = this.getHorizontalOriginOffset(n), h = this.getVerticalOriginOffset(n), l = this.measurements, s = l.anchorSize, b = l.surfaceSize, u = (e = {}, e[o] = d, e[a] = h, e);
      s.width / b.width > mt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(u), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(u), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(n, U.BOTTOM) || this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW);
    }, t.prototype.getAutoLayoutmeasurements = function() {
      var e = this.adapter.getAnchorDimensions(), n = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return e || (e = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: e,
        bodySize: n,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: e.top,
          right: r.width - e.right,
          bottom: r.height - e.bottom,
          left: e.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: a
      };
    }, t.prototype.getoriginCorner = function() {
      var e = this.originCorner, n = this.measurements, r = n.viewportDistance, a = n.anchorSize, o = n.surfaceSize, d = t.numbers.MARGIN_TO_EDGE, h = this.hasBit(this.anchorCorner, U.BOTTOM), l, s;
      h ? (l = r.top - d + this.anchorMargin.bottom, s = r.bottom - d - this.anchorMargin.bottom) : (l = r.top - d + this.anchorMargin.top, s = r.bottom - d + a.height - this.anchorMargin.top);
      var b = s - o.height > 0;
      !b && l > s + this.openBottomBias && (e = this.setBit(e, U.BOTTOM));
      var u = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, U.FLIP_RTL), g = this.hasBit(this.anchorCorner, U.RIGHT) || this.hasBit(e, U.RIGHT), y = !1;
      u && m ? y = !g : y = g;
      var x, v;
      y ? (x = r.left + a.width + this.anchorMargin.right, v = r.right - this.anchorMargin.right) : (x = r.left + this.anchorMargin.left, v = r.right + a.width - this.anchorMargin.left);
      var E = x - o.width > 0, k = v - o.width > 0, p = this.hasBit(e, U.FLIP_RTL) && this.hasBit(e, U.RIGHT);
      return k && p && u || !E && p ? e = this.unsetBit(e, U.RIGHT) : (E && y && u || E && !y && g || !k && x >= v) && (e = this.setBit(e, U.RIGHT)), e;
    }, t.prototype.getMenuSurfaceMaxHeight = function(e) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var n = this.measurements.viewportDistance, r = 0, a = this.hasBit(e, U.BOTTOM), o = this.hasBit(this.anchorCorner, U.BOTTOM), d = t.numbers.MARGIN_TO_EDGE;
      return a ? (r = n.top + this.anchorMargin.top - d, o || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - d, o && (r -= this.measurements.anchorSize.height)), r;
    }, t.prototype.getHorizontalOriginOffset = function(e) {
      var n = this.measurements.anchorSize, r = this.hasBit(e, U.RIGHT), a = this.hasBit(this.anchorCorner, U.RIGHT);
      if (r) {
        var o = a ? n.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? n.width - this.anchorMargin.right : this.anchorMargin.left;
    }, t.prototype.getVerticalOriginOffset = function(e) {
      var n = this.measurements.anchorSize, r = this.hasBit(e, U.BOTTOM), a = this.hasBit(this.anchorCorner, U.BOTTOM), o = 0;
      return r ? o = a ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, t.prototype.adjustPositionForHoistedElement = function(e) {
      var n, r, a = this.measurements, o = a.windowScroll, d = a.viewportDistance, h = a.surfaceSize, l = a.viewportSize, s = Object.keys(e);
      try {
        for (var b = ut(s), u = b.next(); !u.done; u = b.next()) {
          var m = u.value, g = e[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            e[m] = (l.width - h.width) / 2;
            continue;
          }
          g += d[m], this.isFixedPosition || (m === "top" ? g += o.y : m === "bottom" ? g -= o.y : m === "left" ? g += o.x : g -= o.x), e[m] = g;
        }
      } catch (y) {
        n = { error: y };
      } finally {
        try {
          u && !u.done && (r = b.return) && r.call(b);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, t.prototype.maybeRestoreFocus = function() {
      var e = this, n = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (n || a) && setTimeout(function() {
        e.adapter.restoreFocus();
      }, mt.TOUCH_EVENT_WAIT_MS);
    }, t.prototype.hasBit = function(e, n) {
      return !!(e & n);
    }, t.prototype.setBit = function(e, n) {
      return e | n;
    }, t.prototype.unsetBit = function(e, n) {
      return e ^ n;
    }, t.prototype.isFinite = function(e) {
      return typeof e == "number" && isFinite(e);
    }, t;
  }(Ie)
);
const Na = sr;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ha = {
  TOP_LEFT: ee.TOP_LEFT,
  TOP_RIGHT: ee.TOP_RIGHT,
  BOTTOM_LEFT: ee.BOTTOM_LEFT,
  BOTTOM_RIGHT: ee.BOTTOM_RIGHT,
  TOP_START: ee.TOP_START,
  TOP_END: ee.TOP_END,
  BOTTOM_START: ee.BOTTOM_START,
  BOTTOM_END: ee.BOTTOM_END
};
class Z extends rt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Na, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = ee.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {
    };
  }
  render() {
    return this.renderSurface();
  }
  renderSurface() {
    const t = this.getRootClasses(), e = this.getRootStyles();
    return _`
      <div
          class=${te(t)}
          style="${tr(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        ${this.renderContent()}
      </div>`;
  }
  getRootClasses() {
    return {
      "mdc-menu-surface": !0,
      "mdc-menu-surface--fixed": this.fixed,
      "mdc-menu-surface--fullwidth": this.fullwidth
    };
  }
  getRootStyles() {
    return {
      top: this.styleTop,
      left: this.styleLeft,
      right: this.styleRight,
      bottom: this.styleBottom,
      "max-height": this.styleMaxHeight,
      "transform-origin": this.styleTransformOrigin
    };
  }
  renderContent() {
    return _`<slot></slot>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Wi(this.mdcRoot)), { hasAnchor: () => !!this.anchor, notifyClose: () => {
      const t = { bubbles: !0, composed: !0 }, e = new CustomEvent("closed", t);
      this.open = !1, this.mdcRoot.dispatchEvent(e);
    }, notifyClosing: () => {
      const t = { bubbles: !0, composed: !0 }, e = new CustomEvent("closing", t);
      this.mdcRoot.dispatchEvent(e);
    }, notifyOpen: () => {
      const t = { bubbles: !0, composed: !0 }, e = new CustomEvent("opened", t);
      this.open = !0, this.mdcRoot.dispatchEvent(e);
    }, notifyOpening: () => {
      const t = { bubbles: !0, composed: !0 }, e = new CustomEvent("opening", t);
      this.mdcRoot.dispatchEvent(e);
    }, isElementInContainer: () => !1, isRtl: () => this.mdcRoot ? getComputedStyle(this.mdcRoot).direction === "rtl" : !1, setTransformOrigin: (t) => {
      this.mdcRoot && (this.styleTransformOrigin = t);
    }, isFocused: () => Jn(this), saveFocus: () => {
      const t = er(), e = t.length;
      e || (this.previouslyFocused = null), this.previouslyFocused = t[e - 1];
    }, restoreFocus: () => {
      this.previouslyFocused && "focus" in this.previouslyFocused && this.previouslyFocused.focus();
    }, getInnerDimensions: () => {
      const t = this.mdcRoot;
      return t ? { width: t.offsetWidth, height: t.offsetHeight } : { width: 0, height: 0 };
    }, getAnchorDimensions: () => {
      const t = this.anchor;
      return t ? t.getBoundingClientRect() : null;
    }, getBodyDimensions: () => ({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }), getWindowDimensions: () => ({
      width: window.innerWidth,
      height: window.innerHeight
    }), getWindowScroll: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset
    }), setPosition: (t) => {
      this.mdcRoot && (this.styleLeft = "left" in t ? `${t.left}px` : "", this.styleRight = "right" in t ? `${t.right}px` : "", this.styleTop = "top" in t ? `${t.top}px` : "", this.styleBottom = "bottom" in t ? `${t.bottom}px` : "");
    }, setMaxHeight: async (t) => {
      this.mdcRoot && (this.styleMaxHeight = t, await this.updateComplete, this.styleMaxHeight = `var(--mdc-menu-max-height, ${t})`);
    } });
  }
  onKeydown(t) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(t);
  }
  onBodyClick(t) {
    if (this.stayOpenOnBodyClick)
      return;
    t.composedPath().indexOf(this) === -1 && this.close();
  }
  registerBodyClick() {
    this.onBodyClickBound = this.onBodyClick.bind(this), document.body.addEventListener("click", this.onBodyClickBound, { passive: !0, capture: !0 });
  }
  deregisterBodyClick() {
    document.body.removeEventListener("click", this.onBodyClickBound, { capture: !0 });
  }
  onOpenChanged(t, e) {
    this.mdcFoundation && (t ? this.mdcFoundation.open() : e !== void 0 && this.mdcFoundation.close());
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
c([
  M(".mdc-menu-surface")
], Z.prototype, "mdcRoot", void 0);
c([
  M("slot")
], Z.prototype, "slotElement", void 0);
c([
  f({ type: Boolean }),
  P(function(i) {
    this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(i);
  })
], Z.prototype, "absolute", void 0);
c([
  f({ type: Boolean })
], Z.prototype, "fullwidth", void 0);
c([
  f({ type: Boolean }),
  P(function(i) {
    this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(i);
  })
], Z.prototype, "fixed", void 0);
c([
  f({ type: Number }),
  P(function(i) {
    this.mdcFoundation && this.y !== null && i !== null && (this.mdcFoundation.setAbsolutePosition(i, this.y), this.mdcFoundation.setAnchorMargin({ left: i, top: this.y, right: -i, bottom: this.y }));
  })
], Z.prototype, "x", void 0);
c([
  f({ type: Number }),
  P(function(i) {
    this.mdcFoundation && this.x !== null && i !== null && (this.mdcFoundation.setAbsolutePosition(this.x, i), this.mdcFoundation.setAnchorMargin({ left: this.x, top: i, right: -this.x, bottom: i }));
  })
], Z.prototype, "y", void 0);
c([
  f({ type: Boolean }),
  P(function(i) {
    this.mdcFoundation && this.mdcFoundation.setQuickOpen(i);
  })
], Z.prototype, "quick", void 0);
c([
  f({ type: Boolean, reflect: !0 }),
  P(function(i, t) {
    this.onOpenChanged(i, t);
  })
], Z.prototype, "open", void 0);
c([
  f({ type: Boolean })
], Z.prototype, "stayOpenOnBodyClick", void 0);
c([
  F(),
  P(function(i) {
    this.mdcFoundation && (i ? this.mdcFoundation.setAnchorCorner(i) : this.mdcFoundation.setAnchorCorner(i));
  })
], Z.prototype, "bitwiseCorner", void 0);
c([
  f({ type: String }),
  P(function(i) {
    if (this.mdcFoundation) {
      const t = i === "START" || i === "END", e = this.previousMenuCorner === null, n = !e && i !== this.previousMenuCorner;
      t && (n || e && i === "END") && (this.bitwiseCorner = this.bitwiseCorner ^ U.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = i);
    }
  })
], Z.prototype, "menuCorner", void 0);
c([
  f({ type: String }),
  P(function(i) {
    if (this.mdcFoundation && i) {
      let t = Ha[i];
      this.menuCorner === "END" && (t = t ^ U.RIGHT), this.bitwiseCorner = t;
    }
  })
], Z.prototype, "corner", void 0);
c([
  F()
], Z.prototype, "styleTop", void 0);
c([
  F()
], Z.prototype, "styleLeft", void 0);
c([
  F()
], Z.prototype, "styleRight", void 0);
c([
  F()
], Z.prototype, "styleBottom", void 0);
c([
  F()
], Z.prototype, "styleMaxHeight", void 0);
c([
  F()
], Z.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ua = Q`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ri = class extends Z {
};
Ri.styles = [Ua];
Ri = c([
  Lt("mwc-menu-surface")
], Ri);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var li = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, qe = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Va = {
  FOCUS_ROOT_INDEX: -1
}, Pe;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.LIST_ROOT = 1] = "LIST_ROOT", i[i.FIRST_ITEM = 2] = "FIRST_ITEM", i[i.LAST_ITEM = 3] = "LAST_ITEM";
})(Pe || (Pe = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wa = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e) {
      var n = i.call(this, j(j({}, t.defaultAdapter), e)) || this;
      return n.closeAnimationEndTimerId = 0, n.defaultFocusState = Pe.LIST_ROOT, n.selectedIndex = -1, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return li;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return qe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Va;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, t.prototype.handleKeydown = function(e) {
      var n = e.key, r = e.keyCode, a = n === "Tab" || r === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, t.prototype.handleItemAction = function(e) {
      var n = this, r = this.adapter.getElementIndex(e);
      if (!(r < 0)) {
        this.adapter.notifySelected({ index: r });
        var a = this.adapter.getAttributeFromElementAtIndex(r, qe.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = n.adapter.getElementIndex(e);
          o >= 0 && n.adapter.isSelectableItemAtIndex(o) && n.setSelectedIndex(o);
        }, sr.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, t.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Pe.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Pe.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Pe.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, t.prototype.setDefaultFocusState = function(e) {
      this.defaultFocusState = e;
    }, t.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, t.prototype.setSelectedIndex = function(e) {
      if (this.validatedIndex(e), !this.adapter.isSelectableItemAtIndex(e))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var n = this.adapter.getSelectedSiblingOfItemAtIndex(e);
      n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, qe.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, li.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(e, li.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(e, qe.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = e;
    }, t.prototype.setEnabled = function(e, n) {
      this.validatedIndex(e), n ? (this.adapter.removeClassFromElementAtIndex(e, $.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(e, qe.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(e, $.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(e, qe.ARIA_DISABLED_ATTR, "true"));
    }, t.prototype.validatedIndex = function(e) {
      var n = this.adapter.getMenuItemCount(), r = e >= 0 && e < n;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, t;
  }(Ie)
);
const Ga = Wa;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class W extends rt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Ga, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.innerAriaLabel = null, this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null;
  }
  get listElement() {
    return this.listElement_ ? this.listElement_ : (this.listElement_ = this.renderRoot.querySelector("mwc-list"), this.listElement_);
  }
  get items() {
    const t = this.listElement;
    return t ? t.items : [];
  }
  get index() {
    const t = this.listElement;
    return t ? t.index : -1;
  }
  get selected() {
    const t = this.listElement;
    return t ? t.selected : null;
  }
  render() {
    return this.renderSurface();
  }
  renderSurface() {
    const t = this.getSurfaceClasses();
    return _`
      <mwc-menu-surface
        ?hidden=${!this.open}
        .anchor=${this.anchor}
        .open=${this.open}
        .quick=${this.quick}
        .corner=${this.corner}
        .x=${this.x}
        .y=${this.y}
        .absolute=${this.absolute}
        .fixed=${this.fixed}
        .fullwidth=${this.fullwidth}
        .menuCorner=${this.menuCorner}
        ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
        class=${te(t)}
        @closed=${this.onClosed}
        @opened=${this.onOpened}
        @keydown=${this.onKeydown}>
      ${this.renderList()}
    </mwc-menu-surface>`;
  }
  getSurfaceClasses() {
    return {
      "mdc-menu": !0,
      "mdc-menu-surface": !0
    };
  }
  renderList() {
    const t = this.innerRole === "menu" ? "menuitem" : "option", e = this.renderListClasses();
    return _`
      <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class=${te(e)}
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>`;
  }
  renderListClasses() {
    return {
      "mdc-deprecated-list": !0
    };
  }
  createAdapter() {
    return {
      addClassToElementAtIndex: (t, e) => {
        const n = this.listElement;
        if (!n)
          return;
        const r = n.items[t];
        r && (e === "mdc-menu-item--selected" ? this.forceGroupSelection && !r.selected && n.toggle(t, !0) : r.classList.add(e));
      },
      removeClassFromElementAtIndex: (t, e) => {
        const n = this.listElement;
        if (!n)
          return;
        const r = n.items[t];
        r && (e === "mdc-menu-item--selected" ? r.selected && n.toggle(t, !1) : r.classList.remove(e));
      },
      addAttributeToElementAtIndex: (t, e, n) => {
        const r = this.listElement;
        if (!r)
          return;
        const a = r.items[t];
        a && a.setAttribute(e, n);
      },
      removeAttributeFromElementAtIndex: (t, e) => {
        const n = this.listElement;
        if (!n)
          return;
        const r = n.items[t];
        r && r.removeAttribute(e);
      },
      getAttributeFromElementAtIndex: (t, e) => {
        const n = this.listElement;
        if (!n)
          return null;
        const r = n.items[t];
        return r ? r.getAttribute(e) : null;
      },
      elementContainsClass: (t, e) => t.classList.contains(e),
      closeSurface: () => {
        this.open = !1;
      },
      getElementIndex: (t) => {
        const e = this.listElement;
        return e ? e.items.indexOf(t) : -1;
      },
      notifySelected: () => {
      },
      getMenuItemCount: () => {
        const t = this.listElement;
        return t ? t.items.length : 0;
      },
      focusItemAtIndex: (t) => {
        const e = this.listElement;
        if (!e)
          return;
        const n = e.items[t];
        n && n.focus();
      },
      focusListRoot: () => {
        this.listElement && this.listElement.focus();
      },
      getSelectedSiblingOfItemAtIndex: (t) => {
        const e = this.listElement;
        if (!e)
          return -1;
        const n = e.items[t];
        if (!n || !n.group)
          return -1;
        for (let r = 0; r < e.items.length; r++) {
          if (r === t)
            continue;
          const a = e.items[r];
          if (a.selected && a.group === n.group)
            return r;
        }
        return -1;
      },
      isSelectableItemAtIndex: (t) => {
        const e = this.listElement;
        if (!e)
          return !1;
        const n = e.items[t];
        return n ? n.hasAttribute("group") : !1;
      }
    };
  }
  onKeydown(t) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(t);
  }
  onAction(t) {
    const e = this.listElement;
    if (this.mdcFoundation && e) {
      const n = t.detail.index, r = e.items[n];
      r && this.mdcFoundation.handleItemAction(r);
    }
  }
  onOpened() {
    this.open = !0, this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
  }
  onClosed() {
    this.open = !1;
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    return await this._listUpdateComplete, await super.getUpdateComplete();
  }
  // tslint:enable:ban-ts-ignore
  async firstUpdated() {
    super.firstUpdated();
    const t = this.listElement;
    t && (this._listUpdateComplete = t.updateComplete, await this._listUpdateComplete);
  }
  select(t) {
    const e = this.listElement;
    e && e.select(t);
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
  getFocusedItemIndex() {
    const t = this.listElement;
    return t ? t.getFocusedItemIndex() : -1;
  }
  focusItemAtIndex(t) {
    const e = this.listElement;
    e && e.focusItemAtIndex(t);
  }
  layout(t = !0) {
    const e = this.listElement;
    e && e.layout(t);
  }
}
c([
  M(".mdc-menu")
], W.prototype, "mdcRoot", void 0);
c([
  M("slot")
], W.prototype, "slotElement", void 0);
c([
  f({ type: Object })
], W.prototype, "anchor", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], W.prototype, "open", void 0);
c([
  f({ type: Boolean })
], W.prototype, "quick", void 0);
c([
  f({ type: Boolean })
], W.prototype, "wrapFocus", void 0);
c([
  f({ type: String })
], W.prototype, "innerRole", void 0);
c([
  f({ type: String })
], W.prototype, "innerAriaLabel", void 0);
c([
  f({ type: String })
], W.prototype, "corner", void 0);
c([
  f({ type: Number })
], W.prototype, "x", void 0);
c([
  f({ type: Number })
], W.prototype, "y", void 0);
c([
  f({ type: Boolean })
], W.prototype, "absolute", void 0);
c([
  f({ type: Boolean })
], W.prototype, "multi", void 0);
c([
  f({ type: Boolean })
], W.prototype, "activatable", void 0);
c([
  f({ type: Boolean })
], W.prototype, "fixed", void 0);
c([
  f({ type: Boolean })
], W.prototype, "forceGroupSelection", void 0);
c([
  f({ type: Boolean })
], W.prototype, "fullwidth", void 0);
c([
  f({ type: String })
], W.prototype, "menuCorner", void 0);
c([
  f({ type: Boolean })
], W.prototype, "stayOpenOnBodyClick", void 0);
c([
  f({ type: String }),
  P(function(i) {
    this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(Pe[i]);
  })
], W.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Za = Q`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ti = class extends W {
};
Ti.styles = [Za];
Ti = c([
  Lt("mwc-menu")
], Ti);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Xa = ["input", "button", "textarea", "select"], on = function(i) {
  var t = i.target;
  if (t) {
    var e = ("" + t.tagName).toLowerCase();
    Xa.indexOf(e) === -1 && i.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ya() {
  var i = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return i;
}
function dn(i, t) {
  for (var e = /* @__PURE__ */ new Map(), n = 0; n < i; n++) {
    var r = t(n).trim();
    if (r) {
      var a = r[0].toLowerCase();
      e.has(a) || e.set(a, []), e.get(a).push({ text: r.toLowerCase(), index: n });
    }
  }
  return e.forEach(function(o) {
    o.sort(function(d, h) {
      return d.index - h.index;
    });
  }), e;
}
function Ci(i, t) {
  var e = i.nextChar, n = i.focusItemAtIndex, r = i.sortedIndexByFirstChar, a = i.focusedItemIndex, o = i.skipFocus, d = i.isItemAtIndexDisabled;
  clearTimeout(t.bufferClearTimeout), t.bufferClearTimeout = setTimeout(function() {
    ja(t);
  }, J.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), t.typeaheadBuffer = t.typeaheadBuffer + e;
  var h;
  return t.typeaheadBuffer.length === 1 ? h = Ka(r, a, d, t) : h = qa(r, d, t), h !== -1 && !o && n(h), h;
}
function Ka(i, t, e, n) {
  var r = n.typeaheadBuffer[0], a = i.get(r);
  if (!a)
    return -1;
  if (r === n.currentFirstChar && a[n.sortedIndexCursor].index === t) {
    n.sortedIndexCursor = (n.sortedIndexCursor + 1) % a.length;
    var o = a[n.sortedIndexCursor].index;
    if (!e(o))
      return o;
  }
  n.currentFirstChar = r;
  var d = -1, h;
  for (h = 0; h < a.length; h++)
    if (!e(a[h].index)) {
      d = h;
      break;
    }
  for (; h < a.length; h++)
    if (a[h].index > t && !e(a[h].index)) {
      d = h;
      break;
    }
  return d !== -1 ? (n.sortedIndexCursor = d, a[n.sortedIndexCursor].index) : -1;
}
function qa(i, t, e) {
  var n = e.typeaheadBuffer[0], r = i.get(n);
  if (!r)
    return -1;
  var a = r[e.sortedIndexCursor];
  if (a.text.lastIndexOf(e.typeaheadBuffer, 0) === 0 && !t(a.index))
    return a.index;
  for (var o = (e.sortedIndexCursor + 1) % r.length, d = -1; o !== e.sortedIndexCursor; ) {
    var h = r[o], l = h.text.lastIndexOf(e.typeaheadBuffer, 0) === 0, s = !t(h.index);
    if (l && s) {
      d = o;
      break;
    }
    o = (o + 1) % r.length;
  }
  return d !== -1 ? (e.sortedIndexCursor = d, r[e.sortedIndexCursor].index) : -1;
}
function cr(i) {
  return i.typeaheadBuffer.length > 0;
}
function ja(i) {
  i.typeaheadBuffer = "";
}
function Qa(i, t) {
  var e = i.event, n = i.isTargetListItem, r = i.focusedItemIndex, a = i.focusItemAtIndex, o = i.sortedIndexByFirstChar, d = i.isItemAtIndexDisabled, h = V(e) === "ArrowLeft", l = V(e) === "ArrowUp", s = V(e) === "ArrowRight", b = V(e) === "ArrowDown", u = V(e) === "Home", m = V(e) === "End", g = V(e) === "Enter", y = V(e) === "Spacebar";
  if (e.altKey || e.ctrlKey || e.metaKey || h || l || s || b || u || m || g)
    return -1;
  var x = !y && e.key.length === 1;
  if (x) {
    on(e);
    var v = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: e.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return Ci(v, t);
  }
  if (!y)
    return -1;
  n && on(e);
  var E = n && cr(t);
  if (E) {
    var v = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return Ci(v, t);
  }
  return -1;
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var H = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, si = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, $e = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ja = (
  /** @class */
  function(i) {
    Fe(t, i);
    function t(e, n) {
      n === void 0 && (n = {});
      var r = i.call(this, j(j({}, t.defaultAdapter), e)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = $e.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = n.leadingIcon, r.helperText = n.helperText, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return H;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return $e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, t.prototype.setSelectedIndex = function(e, n, r) {
      n === void 0 && (n = !1), r === void 0 && (r = !1), !(e >= this.adapter.getMenuItemCount()) && (e === $e.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()), this.adapter.setSelectedIndex(e), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== e && this.handleChange(), this.lastSelectedIndex = e);
    }, t.prototype.setValue = function(e, n) {
      n === void 0 && (n = !1);
      var r = this.adapter.getMenuItemValues().indexOf(e);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        n
      );
    }, t.prototype.getValue = function() {
      var e = this.adapter.getSelectedIndex(), n = this.adapter.getMenuItemValues();
      return e !== $e.UNSET_INDEX ? n[e] : "";
    }, t.prototype.getDisabled = function() {
      return this.disabled;
    }, t.prototype.setDisabled = function(e) {
      this.disabled = e, this.disabled ? (this.adapter.addClass(H.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(H.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, t.prototype.openMenu = function() {
      this.adapter.addClass(H.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, t.prototype.setHelperTextContent = function(e) {
      this.helperText && this.helperText.setContent(e);
    }, t.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var e = this.getValue().length > 0, n = this.adapter.hasClass(H.FOCUSED), r = e || n, a = this.adapter.hasClass(H.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(a);
      }
    }, t.prototype.layoutOptions = function() {
      var e = this.adapter.getMenuItemValues(), n = e.indexOf(this.getValue());
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, t.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var e = this.getSelectedIndex(), n = e >= 0 ? e : 0;
        this.adapter.focusMenuItemAtIndex(n);
      }
    }, t.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, t.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(H.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, t.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var e = this.adapter.hasClass(H.REQUIRED);
      e && this.useDefaultValidation && this.setValid(this.isValid());
    }, t.prototype.handleMenuItemAction = function(e) {
      this.setSelectedIndex(
        e,
        /** closeMenu */
        !0
      );
    }, t.prototype.handleFocus = function() {
      this.adapter.addClass(H.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, t.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, t.prototype.handleClick = function(e) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(e), this.openMenu();
      }
    }, t.prototype.handleKeydown = function(e) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(H.FOCUSED))) {
        var n = V(e) === S.ENTER, r = V(e) === S.SPACEBAR, a = V(e) === S.ARROW_UP, o = V(e) === S.ARROW_DOWN, d = e.ctrlKey || e.metaKey;
        if (!d && (!r && e.key && e.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var h = r ? " " : e.key, l = this.adapter.typeaheadMatchItem(h, this.getSelectedIndex());
          l >= 0 && this.setSelectedIndex(l), e.preventDefault();
          return;
        }
        !n && !r && !a && !o || (this.openMenu(), e.preventDefault());
      }
    }, t.prototype.notchOutline = function(e) {
      if (this.adapter.hasOutline()) {
        var n = this.adapter.hasClass(H.FOCUSED);
        if (e) {
          var r = $e.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(a);
        } else
          n || this.adapter.closeOutline();
      }
    }, t.prototype.setLeadingIconAriaLabel = function(e) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(e);
    }, t.prototype.setLeadingIconContent = function(e) {
      this.leadingIcon && this.leadingIcon.setContent(e);
    }, t.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, t.prototype.setUseDefaultValidation = function(e) {
      this.useDefaultValidation = e;
    }, t.prototype.setValid = function(e) {
      this.useDefaultValidation || (this.customValidity = e), this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()), e ? (this.adapter.removeClass(H.INVALID), this.adapter.removeMenuClass(H.MENU_INVALID)) : (this.adapter.addClass(H.INVALID), this.adapter.addMenuClass(H.MENU_INVALID)), this.syncHelperTextValidity(e);
    }, t.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(H.REQUIRED) && !this.adapter.hasClass(H.DISABLED) ? this.getSelectedIndex() !== $e.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, t.prototype.setRequired = function(e) {
      e ? this.adapter.addClass(H.REQUIRED) : this.adapter.removeClass(H.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", e.toString()), this.adapter.setLabelRequired(e);
    }, t.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, t.prototype.init = function() {
      var e = this.adapter.getAnchorElement();
      e && (this.adapter.setMenuAnchorElement(e), this.adapter.setMenuAnchorCorner(ee.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(H.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(H.INVALID)), this.layout(), this.layoutOptions();
    }, t.prototype.blur = function() {
      this.adapter.removeClass(H.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var e = this.adapter.hasClass(H.REQUIRED);
      e && this.useDefaultValidation && this.setValid(this.isValid());
    }, t.prototype.syncHelperTextValidity = function(e) {
      if (this.helperText) {
        this.helperText.setValidity(e);
        var n = this.helperText.isVisible(), r = this.helperText.getId();
        n && r ? this.adapter.setSelectAnchorAttr(si.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(si.ARIA_DESCRIBEDBY);
      }
    }, t.prototype.setClickDebounceTimeout = function() {
      var e = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        e.recentlyClicked = !1;
      }, $e.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, t;
  }(Ie)
);
const eo = Ja;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ln = (i = {}) => {
  const t = {};
  for (const e in i)
    t[e] = i[e];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, t);
};
class z extends Ve {
  constructor() {
    super(...arguments), this.mdcFoundationClass = eo, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.name = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = Ya(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {
    }, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = ln();
  }
  get items() {
    return this.menuElement_ || (this.menuElement_ = this.menuElement), this.menuElement_ ? this.menuElement_.items : [];
  }
  get selected() {
    const t = this.menuElement;
    return t ? t.selected : null;
  }
  get index() {
    const t = this.menuElement;
    return t ? t.index : -1;
  }
  get shouldRenderHelperText() {
    return !!this.helper || !!this.validationMessage;
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  render() {
    const t = {
      "mdc-select--disabled": this.disabled,
      "mdc-select--no-label": !this.label,
      "mdc-select--filled": !this.outlined,
      "mdc-select--outlined": this.outlined,
      "mdc-select--with-leading-icon": !!this.icon,
      "mdc-select--required": this.required,
      "mdc-select--invalid": !this.isUiValid
    }, e = this.label ? "label" : void 0, n = this.shouldRenderHelperText ? "helper-text" : void 0;
    return _`
      <div
          class="mdc-select ${te(t)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${B(e)}
            aria-required=${this.required}
            aria-describedby=${B(n)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        ${this.renderMenu()}
      </div>
      ${this.renderHelperText()}`;
  }
  renderMenu() {
    const t = this.getMenuClasses();
    return _`
      <mwc-menu
        innerRole="listbox"
        wrapFocus
        class=" ${te(t)}"
        activatable
        .fullwidth=${this.fixedMenuPosition ? !1 : !this.naturalMenuWidth}
        .open=${this.menuOpen}
        .anchor=${this.anchorElement}
        .fixed=${this.fixedMenuPosition}
        @selected=${this.onSelected}
        @opened=${this.onOpened}
        @closed=${this.onClosed}
        @items-updated=${this.onItemsUpdated}
        @keydown=${this.handleTypeahead}>
      ${this.renderMenuContent()}
    </mwc-menu>`;
  }
  getMenuClasses() {
    return {
      "mdc-select__menu": !0,
      "mdc-menu": !0,
      "mdc-menu-surface": !0,
      "mdc-select__menu--invalid": !this.isUiValid
    };
  }
  renderMenuContent() {
    return _`<slot></slot>`;
  }
  renderRipple() {
    return this.outlined ? Be : _`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined ? _`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : Be;
  }
  renderLabel() {
    return this.label ? _`
      <span
          .floatingLabelFoundation=${ar(this.label)}
          id="label">${this.label}</span>
    ` : Be;
  }
  renderLeadingIcon() {
    return this.icon ? _`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : Be;
  }
  renderLineRipple() {
    return this.outlined ? Be : _`
      <span .lineRippleFoundation=${or()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText)
      return Be;
    const t = this.validationMessage && !this.isUiValid;
    return _`
        <p
          class="mdc-select-helper-text ${te({
      "mdc-select-helper-text--validation-msg": t
    })}"
          id="helper-text">${t ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Wi(this.mdcRoot)), { activateBottomLine: () => {
      this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
    }, deactivateBottomLine: () => {
      this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
    }, hasLabel: () => !!this.label, floatLabel: (t) => {
      this.labelElement && this.labelElement.floatingLabelFoundation.float(t);
    }, getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0, setLabelRequired: (t) => {
      this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(t);
    }, hasOutline: () => this.outlined, notchOutline: (t) => {
      this.outlineElement && !this.outlineOpen && (this.outlineWidth = t, this.outlineOpen = !0);
    }, closeOutline: () => {
      this.outlineElement && (this.outlineOpen = !1);
    }, setRippleCenter: (t) => {
      this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(t);
    }, notifyChange: async (t) => {
      if (!this.valueSetDirectly && t === this.value)
        return;
      this.valueSetDirectly = !1, this.value = t, await this.updateComplete;
      const e = new Event("change", { bubbles: !0 });
      this.dispatchEvent(e);
    }, setSelectedText: (t) => this.selectedText = t, isSelectAnchorFocused: () => {
      const t = this.anchorElement;
      return t ? t.getRootNode().activeElement === t : !1;
    }, getSelectAnchorAttr: (t) => {
      const e = this.anchorElement;
      return e ? e.getAttribute(t) : null;
    }, setSelectAnchorAttr: (t, e) => {
      const n = this.anchorElement;
      n && n.setAttribute(t, e);
    }, removeSelectAnchorAttr: (t) => {
      const e = this.anchorElement;
      e && e.removeAttribute(t);
    }, openMenu: () => {
      this.menuOpen = !0;
    }, closeMenu: () => {
      this.menuOpen = !1;
    }, addMenuClass: () => {
    }, removeMenuClass: () => {
    }, getAnchorElement: () => this.anchorElement, setMenuAnchorElement: () => {
    }, setMenuAnchorCorner: () => {
      const t = this.menuElement;
      t && (t.corner = "BOTTOM_START");
    }, setMenuWrapFocus: (t) => {
      const e = this.menuElement;
      e && (e.wrapFocus = t);
    }, focusMenuItemAtIndex: (t) => {
      const e = this.menuElement;
      if (!e)
        return;
      const n = e.items[t];
      n && n.focus();
    }, getMenuItemCount: () => {
      const t = this.menuElement;
      return t ? t.items.length : 0;
    }, getMenuItemValues: () => {
      const t = this.menuElement;
      return t ? t.items.map((n) => n.value) : [];
    }, getMenuItemTextAtIndex: (t) => {
      const e = this.menuElement;
      if (!e)
        return "";
      const n = e.items[t];
      return n ? n.text : "";
    }, getSelectedIndex: () => this.index, setSelectedIndex: () => {
    }, isTypeaheadInProgress: () => cr(this.typeaheadState), typeaheadMatchItem: (t, e) => {
      if (!this.menuElement)
        return -1;
      const n = {
        focusItemAtIndex: (a) => {
          this.menuElement.focusItemAtIndex(a);
        },
        focusedItemIndex: e || this.menuElement.getFocusedItemIndex(),
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: !1,
        isItemAtIndexDisabled: (a) => this.items[a].disabled
      }, r = Ci(n, this.typeaheadState);
      return r !== -1 && this.select(r), r;
    } });
  }
  checkValidity() {
    const t = this._checkValidity(this.value);
    if (!t) {
      const e = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(e);
    }
    return t;
  }
  reportValidity() {
    const t = this.checkValidity();
    return this.isUiValid = t, t;
  }
  _checkValidity(t) {
    const e = this.formElement.validity;
    let n = ln(e);
    if (this.validityTransform) {
      const r = this.validityTransform(t, n);
      n = Object.assign(Object.assign({}, n), r);
    }
    return this._validity = n, this._validity.valid;
  }
  setCustomValidity(t) {
    this.validationMessage = t, this.formElement.setCustomValidity(t);
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    return await this._menuUpdateComplete, await super.getUpdateComplete();
  }
  // tslint:enable:ban-ts-ignore
  async firstUpdated() {
    const t = this.menuElement;
    if (t && (this._menuUpdateComplete = t.updateComplete, await this._menuUpdateComplete), super.firstUpdated(), this.mdcFoundation.isValid = () => !0, this.mdcFoundation.setValid = () => {
    }, this.mdcFoundation.setDisabled(this.disabled), this.validateOnInitialRender && this.reportValidity(), !this.selected) {
      !this.items.length && this.slotElement && this.slotElement.assignedNodes({ flatten: !0 }).length && (await new Promise((n) => requestAnimationFrame(n)), await this.layout());
      const e = this.items.length && this.items[0].value === "";
      if (!this.value && e) {
        this.select(0);
        return;
      }
      this.selectByValue(this.value);
    }
    this.sortedIndexByFirstChar = dn(this.items.length, (e) => this.items[e].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = dn(this.items.length, (t) => this.items[t].text);
  }
  select(t) {
    const e = this.menuElement;
    e && e.select(t);
  }
  selectByValue(t) {
    let e = -1;
    for (let n = 0; n < this.items.length; n++)
      if (this.items[n].value === t) {
        e = n;
        break;
      }
    this.valueSetDirectly = !0, this.select(e), this.mdcFoundation.handleChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of this.listeners)
      t.target.removeEventListener(t.name, t.cb);
  }
  focus() {
    const t = new CustomEvent("focus"), e = this.anchorElement;
    e && (e.dispatchEvent(t), e.focus());
  }
  blur() {
    const t = new CustomEvent("blur"), e = this.anchorElement;
    e && (e.dispatchEvent(t), e.blur());
  }
  onFocus() {
    this.mdcFoundation && this.mdcFoundation.handleFocus();
  }
  onBlur() {
    this.mdcFoundation && this.mdcFoundation.handleBlur();
    const t = this.menuElement;
    t && !t.open && this.reportValidity();
  }
  onClick(t) {
    if (this.mdcFoundation) {
      this.focus();
      const e = t.target.getBoundingClientRect();
      let n = 0;
      "touches" in t ? n = t.touches[0].clientX : n = t.clientX;
      const r = n - e.left;
      this.mdcFoundation.handleClick(r);
    }
  }
  onKeydown(t) {
    const e = V(t) === S.ARROW_UP, n = V(t) === S.ARROW_DOWN;
    if (n || e) {
      const r = e && this.index > 0, a = n && this.index < this.items.length - 1;
      r ? this.select(this.index - 1) : a && this.select(this.index + 1), t.preventDefault(), this.mdcFoundation.openMenu();
      return;
    }
    this.mdcFoundation.handleKeydown(t);
  }
  // must capture to run before list foundation captures event
  handleTypeahead(t) {
    if (!this.menuElement)
      return;
    const e = this.menuElement.getFocusedItemIndex(), n = Qn(t.target) ? t.target : null, r = n ? n.hasAttribute("mwc-list-item") : !1, a = {
      event: t,
      focusItemAtIndex: (o) => {
        this.menuElement.focusItemAtIndex(o);
      },
      focusedItemIndex: e,
      isTargetListItem: r,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: (o) => this.items[o].disabled
    };
    Qa(a, this.typeaheadState);
  }
  async onSelected(t) {
    this.mdcFoundation || await this.updateComplete, this.mdcFoundation.handleMenuItemAction(t.detail.index);
    const e = this.items[t.detail.index];
    e && (this.value = e.value);
  }
  onOpened() {
    this.mdcFoundation && (this.menuOpen = !0, this.mdcFoundation.handleMenuOpened());
  }
  onClosed() {
    this.mdcFoundation && (this.menuOpen = !1, this.mdcFoundation.handleMenuClosed());
  }
  setFormData(t) {
    this.name && this.selected !== null && t.append(this.name, this.value);
  }
  async layout(t = !0) {
    this.mdcFoundation && this.mdcFoundation.layout(), await this.updateComplete;
    const e = this.menuElement;
    e && e.layout(t);
    const n = this.labelElement;
    if (!n) {
      this.outlineOpen = !1;
      return;
    }
    const r = !!this.label && !!this.value;
    if (n.floatingLabelFoundation.float(r), !this.outlined)
      return;
    this.outlineOpen = r, await this.updateComplete;
    const a = n.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = a);
  }
  async layoutOptions() {
    this.mdcFoundation && this.mdcFoundation.layoutOptions();
  }
}
c([
  M(".mdc-select")
], z.prototype, "mdcRoot", void 0);
c([
  M(".formElement")
], z.prototype, "formElement", void 0);
c([
  M("slot")
], z.prototype, "slotElement", void 0);
c([
  M("select")
], z.prototype, "nativeSelectElement", void 0);
c([
  M("input")
], z.prototype, "nativeInputElement", void 0);
c([
  M(".mdc-line-ripple")
], z.prototype, "lineRippleElement", void 0);
c([
  M(".mdc-floating-label")
], z.prototype, "labelElement", void 0);
c([
  M("mwc-notched-outline")
], z.prototype, "outlineElement", void 0);
c([
  M(".mdc-menu")
], z.prototype, "menuElement", void 0);
c([
  M(".mdc-select__anchor")
], z.prototype, "anchorElement", void 0);
c([
  f({ type: Boolean, attribute: "disabled", reflect: !0 }),
  P(function(i) {
    this.mdcFoundation && this.mdcFoundation.setDisabled(i);
  })
], z.prototype, "disabled", void 0);
c([
  f({ type: Boolean }),
  P(function(i, t) {
    t !== void 0 && this.outlined !== t && this.layout(!1);
  })
], z.prototype, "outlined", void 0);
c([
  f({ type: String }),
  P(function(i, t) {
    t !== void 0 && this.label !== t && this.layout(!1);
  })
], z.prototype, "label", void 0);
c([
  F()
], z.prototype, "outlineOpen", void 0);
c([
  F()
], z.prototype, "outlineWidth", void 0);
c([
  f({ type: String }),
  P(function(i) {
    if (this.mdcFoundation) {
      const t = this.selected === null && !!i, e = this.selected && this.selected.value !== i;
      (t || e) && this.selectByValue(i), this.reportValidity();
    }
  })
], z.prototype, "value", void 0);
c([
  f()
], z.prototype, "name", void 0);
c([
  F()
], z.prototype, "selectedText", void 0);
c([
  f({ type: String })
], z.prototype, "icon", void 0);
c([
  F()
], z.prototype, "menuOpen", void 0);
c([
  f({ type: String })
], z.prototype, "helper", void 0);
c([
  f({ type: Boolean })
], z.prototype, "validateOnInitialRender", void 0);
c([
  f({ type: String })
], z.prototype, "validationMessage", void 0);
c([
  f({ type: Boolean })
], z.prototype, "required", void 0);
c([
  f({ type: Boolean })
], z.prototype, "naturalMenuWidth", void 0);
c([
  F()
], z.prototype, "isUiValid", void 0);
c([
  f({ type: Boolean })
], z.prototype, "fixedMenuPosition", void 0);
c([
  Ct({ capture: !0 })
], z.prototype, "handleTypeahead", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const to = Q`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select__menu::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}}@media screen and (forced-colors: active)and (forced-colors: active),screen and (-ms-high-contrast: active)and (forced-colors: active){.mdc-select__menu::before{border-color:CanvasText}}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
class hr extends z {
}
hr.styles = [
  to,
  // rem -> em conversion
  Q`
      .mdc-floating-label {
        line-height: 1.15em;
      }
    `
];
customElements.define("ewt-select", hr);
class mr extends q {
}
mr.styles = [lr];
customElements.define("ewt-list-item", mr);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class dt extends ot {
  constructor() {
    super(...arguments), this.indeterminate = !1, this.progress = 0, this.density = 0, this.closed = !1;
  }
  open() {
    this.closed = !1;
  }
  close() {
    this.closed = !0;
  }
  /**
   * @soyTemplate
   */
  render() {
    const t = {
      "mdc-circular-progress--closed": this.closed,
      "mdc-circular-progress--indeterminate": this.indeterminate
    }, e = 48 + this.density * 4, n = {
      width: `${e}px`,
      height: `${e}px`
    };
    return _`
      <div
        class="mdc-circular-progress ${te(t)}"
        style="${tr(n)}"
        role="progressbar"
        aria-label="${B(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${B(this.indeterminate ? void 0 : this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`;
  }
  /**
   * @soyTemplate
   */
  renderDeterminateContainer() {
    const t = 48 + this.density * 4, e = t / 2, n = this.density >= -3 ? 18 + this.density * 11 / 6 : 12.5 + (this.density + 3) * 5 / 4, r = 2 * 3.1415926 * n, a = (1 - this.progress) * r, o = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
    return _`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${t} ${t}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${e}" cy="${e}" r="${n}"
                  stroke-width="${o}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${e}" cy="${e}" r="${n}"
                  stroke-dasharray="${2 * 3.1415926 * n}"
                  stroke-dashoffset="${a}"
                  stroke-width="${o}"></circle>
        </svg>
      </div>`;
  }
  /**
   * @soyTemplate
   */
  renderIndeterminateContainer() {
    return _`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
  }
  /**
   * @soyTemplate
   */
  renderIndeterminateSpinnerLayer() {
    const t = 48 + this.density * 4, e = t / 2, n = this.density >= -3 ? 18 + this.density * 11 / 6 : 12.5 + (this.density + 3) * 5 / 4, r = 2 * 3.1415926 * n, a = 0.5 * r, o = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
    return _`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${n}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${a}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${n}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${a}"
                    stroke-width="${o * 0.8}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${n}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${a}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>`;
  }
  update(t) {
    super.update(t), t.has("progress") && (this.progress > 1 && (this.progress = 1), this.progress < 0 && (this.progress = 0));
  }
}
c([
  f({ type: Boolean, reflect: !0 })
], dt.prototype, "indeterminate", void 0);
c([
  f({ type: Number, reflect: !0 })
], dt.prototype, "progress", void 0);
c([
  f({ type: Number, reflect: !0 })
], dt.prototype, "density", void 0);
c([
  f({ type: Boolean, reflect: !0 })
], dt.prototype, "closed", void 0);
c([
  at,
  f({ type: String, attribute: "aria-label" })
], dt.prototype, "ariaLabel", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const io = Q`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;
class fr extends dt {
}
fr.styles = [io];
customElements.define("ewt-circular-progress", fr);
class Qt extends ot {
  render() {
    return _`
      <div>
        <ewt-circular-progress
          active
          ?indeterminate=${this.progress === void 0}
          .progress=${this.progress !== void 0 ? this.progress / 100 : void 0}
          density="8"
        ></ewt-circular-progress>
        ${this.progress !== void 0 ? _`<div>${this.progress}%</div>` : ""}
      </div>
      ${this.label}
    `;
  }
}
Qt.styles = Q`
    :host {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    ewt-circular-progress {
      margin-bottom: 16px;
    }
  `;
c([
  f()
], Qt.prototype, "label", void 0);
c([
  f()
], Qt.prototype, "progress", void 0);
customElements.define("ewt-page-progress", Qt);
class Jt extends ot {
  render() {
    return _`
      <div class="icon">${this.icon}</div>
      ${this.label}
    `;
  }
}
Jt.styles = Q`
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
    ewt-circular-progress {
      margin-bottom: 16px;
    }
  `;
c([
  f()
], Jt.prototype, "icon", void 0);
c([
  f()
], Jt.prototype, "label", void 0);
customElements.define("ewt-page-message", Jt);
const no = jt`
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </svg>
`, ro = jt`
  <svg viewBox="0 0 24 24" title="Software">
    <path
      fill="currentColor"
      d="M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z"
    />
  </svg>
`, ao = jt`
  <svg viewBox="0 0 24 24" title="Chipset">
    <path
      fill="currentColor"
      d="M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z"
    />
  </svg>
`, oo = jt`
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
    />
  </svg>
`, lo = [
  "I".charCodeAt(0),
  "M".charCodeAt(0),
  "P".charCodeAt(0),
  "R".charCodeAt(0),
  "O".charCodeAt(0),
  "V".charCodeAt(0),
  1
  // protocol version
];
var et;
(function(i) {
  i[i.CURRENT_STATE = 1] = "CURRENT_STATE", i[i.ERROR_STATE = 2] = "ERROR_STATE", i[i.RPC = 3] = "RPC", i[i.RPC_RESULT = 4] = "RPC_RESULT";
})(et || (et = {}));
var Ae;
(function(i) {
  i[i.READY = 2] = "READY", i[i.PROVISIONING = 3] = "PROVISIONING", i[i.PROVISIONED = 4] = "PROVISIONED";
})(Ae || (Ae = {}));
const so = {
  0: "NO_ERROR",
  1: "INVALID_RPC_PACKET",
  2: "UNKNOWN_RPC_COMMAND",
  3: "UNABLE_TO_CONNECT",
  254: "TIMEOUT",
  255: "UNKNOWN_ERROR"
};
class ur extends Error {
  constructor() {
    super("Port is not ready");
  }
}
const co = (i) => new Promise((t) => setTimeout(t, i)), ho = (i, t = 2) => {
  let e = i.toString(16).toUpperCase();
  return e.startsWith("-") ? "-0x" + e.substring(1).padStart(t, "0") : "0x" + e.padStart(t, "0");
}, sn = (i) => "[" + i.map((t) => ho(t)).join(", ") + "]";
class mo extends EventTarget {
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
    if (this.logger.log("Initializing Improv Serial"), this._processInput(), await co(1e3), this._reader === void 0)
      throw new ur();
    try {
      await new Promise(async (e, n) => {
        setTimeout(() => n(new Error("Improv Wi-Fi Serial not detected")), t), await this.requestCurrentState(), e(void 0);
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
      await new Promise(async (n, r) => {
        this.addEventListener("state-changed", n, { once: !0 });
        const a = (o) => {
          this.removeEventListener("state-changed", n), r(o);
        };
        t = this._sendRPCWithResponse(2, []), t.catch(a);
      });
    } catch (n) {
      throw this._rpcFeedback = void 0, new Error(`Error fetching current state: ${n}`);
    }
    if (this.state !== Ae.PROVISIONED) {
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
  async provision(t, e, n) {
    const r = new TextEncoder(), a = r.encode(t), o = r.encode(e), d = [
      a.length,
      ...a,
      o.length,
      ...o
    ], h = await this._sendRPCWithResponse(1, d, n);
    this.nextUrl = h[0];
  }
  async scan() {
    const e = (await this._sendRPCWithMultipleResponses(4, [])).map(([n, r, a]) => ({
      name: n,
      rssi: parseInt(r),
      secured: a === "YES"
    }));
    return e.sort((n, r) => n.name.toLocaleLowerCase().localeCompare(r.name.toLocaleLowerCase())), e;
  }
  _sendRPC(t, e) {
    this.writePacketToStream(et.RPC, [
      t,
      e.length,
      ...e
    ]);
  }
  async _sendRPCWithResponse(t, e, n) {
    if (this._rpcFeedback)
      throw new Error("Only 1 RPC command that requires feedback can be active");
    return await this._awaitRPCResultWithTimeout(new Promise((r, a) => {
      this._rpcFeedback = { command: t, resolve: r, reject: a }, this._sendRPC(t, e);
    }), n);
  }
  async _sendRPCWithMultipleResponses(t, e, n) {
    if (this._rpcFeedback)
      throw new Error("Only 1 RPC command that requires feedback can be active");
    return await this._awaitRPCResultWithTimeout(new Promise((r, a) => {
      this._rpcFeedback = {
        command: t,
        resolve: r,
        reject: a,
        receivedData: []
      }, this._sendRPC(t, e);
    }), n);
  }
  async _awaitRPCResultWithTimeout(t, e) {
    return e ? await new Promise((n, r) => {
      const a = setTimeout(() => this._setError(
        254
        /* ImprovSerialErrorState.TIMEOUT */
      ), e);
      t.finally(() => clearTimeout(a)), t.then(n, r);
    }) : await t;
  }
  async _processInput() {
    this.logger.debug("Starting read loop"), this._reader = this.port.readable.getReader();
    try {
      let t = [], e, n = 0;
      for (; ; ) {
        const { value: r, done: a } = await this._reader.read();
        if (a)
          break;
        if (!(!r || r.length === 0))
          for (const o of r) {
            if (e === !1) {
              o === 10 && (e = void 0);
              continue;
            }
            if (e === !0) {
              t.push(o), t.length === n && (this._handleIncomingPacket(t), e = void 0, t = []);
              continue;
            }
            if (o === 10) {
              t = [];
              continue;
            }
            if (t.push(o), t.length !== 9)
              continue;
            if (e = String.fromCharCode(...t.slice(0, 6)) === "IMPROV", !e) {
              t = [];
              continue;
            }
            n = 9 + t[8] + 1;
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
    const e = t.slice(6), n = e[0], r = e[1], a = e[2], o = e.slice(3, 3 + a);
    if (this.logger.debug("PROCESS", {
      version: n,
      packetType: r,
      packetLength: a,
      data: sn(o)
    }), n !== 1) {
      this.logger.error("Received unsupported version", n);
      return;
    }
    let d = e[3 + a], h = 0;
    for (let l = 0; l < t.length - 1; l++)
      h += t[l];
    if (h = h & 255, h !== d) {
      this.logger.error(`Received invalid checksum ${d}. Expected ${h}`);
      return;
    }
    if (r === et.CURRENT_STATE)
      this.state = o[0], this.dispatchEvent(new CustomEvent("state-changed", {
        detail: this.state
      }));
    else if (r === et.ERROR_STATE)
      this._setError(o[0]);
    else if (r === et.RPC_RESULT) {
      if (!this._rpcFeedback) {
        this.logger.error("Received result while not waiting for one");
        return;
      }
      const l = o[0];
      if (l !== this._rpcFeedback.command) {
        this.logger.error(`Received result for command ${l} but expected ${this._rpcFeedback.command}`);
        return;
      }
      const s = [], b = o[1];
      let u = 2;
      for (; u < 2 + b; )
        s.push(String.fromCodePoint(...o.slice(u + 1, u + o[u] + 1))), u += o[u] + 1;
      "receivedData" in this._rpcFeedback ? s.length > 0 ? this._rpcFeedback.receivedData.push(s) : (this._rpcFeedback.resolve(this._rpcFeedback.receivedData), this._rpcFeedback = void 0) : (this._rpcFeedback.resolve(s), this._rpcFeedback = void 0);
    } else
      this.logger.error("Unable to handle packet", e);
  }
  /**
   * Add header + checksum and write packet to stream
   */
  async writePacketToStream(t, e) {
    const n = new Uint8Array([
      ...lo,
      t,
      e.length,
      ...e,
      0,
      0
      // Will be newline
    ]);
    n[n.length - 2] = n.reduce((a, o) => a + o, 0) & 255, n[n.length - 1] = 10, this.logger.debug("Writing to stream:", sn(new Array(...n)));
    const r = this.port.writable.getWriter();
    await r.write(n);
    try {
      r.releaseLock();
    } catch (a) {
      console.error("Ignoring release lock error", a);
    }
  }
  // Error is either received from device or is a timeout
  _setError(t) {
    this.error = t, t > 0 && this._rpcFeedback && (this._rpcFeedback.reject(so[t] || `UNKNOWN_ERROR (${t})`), this._rpcFeedback = void 0), this.dispatchEvent(new CustomEvent("error-changed", {
      detail: this.error
    }));
  }
}
class de extends Error {
}
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const fo = 4, cn = 0, hn = 1, uo = 2;
function lt(i) {
  let t = i.length;
  for (; --t >= 0; )
    i[t] = 0;
}
const po = 0, pr = 1, _o = 2, go = 3, bo = 258, Xi = 29, Ft = 256, wt = Ft + 1 + Xi, tt = 30, Yi = 19, _r = 2 * wt + 1, Ne = 15, ci = 16, xo = 7, Ki = 256, gr = 16, br = 17, xr = 18, Li = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), Zt = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), vo = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), vr = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), yo = 512, Ee = new Array((wt + 2) * 2);
lt(Ee);
const xt = new Array(tt * 2);
lt(xt);
const Et = new Array(yo);
lt(Et);
const kt = new Array(bo - go + 1);
lt(kt);
const qi = new Array(Xi);
lt(qi);
const Yt = new Array(tt);
lt(Yt);
function hi(i, t, e, n, r) {
  this.static_tree = i, this.extra_bits = t, this.extra_base = e, this.elems = n, this.max_length = r, this.has_stree = i && i.length;
}
let yr, wr, Er;
function mi(i, t) {
  this.dyn_tree = i, this.max_code = 0, this.stat_desc = t;
}
const kr = (i) => i < 256 ? Et[i] : Et[256 + (i >>> 7)], It = (i, t) => {
  i.pending_buf[i.pending++] = t & 255, i.pending_buf[i.pending++] = t >>> 8 & 255;
}, ae = (i, t, e) => {
  i.bi_valid > ci - e ? (i.bi_buf |= t << i.bi_valid & 65535, It(i, i.bi_buf), i.bi_buf = t >> ci - i.bi_valid, i.bi_valid += e - ci) : (i.bi_buf |= t << i.bi_valid & 65535, i.bi_valid += e);
}, _e = (i, t, e) => {
  ae(
    i,
    e[t * 2],
    e[t * 2 + 1]
    /*.Len*/
  );
}, Ir = (i, t) => {
  let e = 0;
  do
    e |= i & 1, i >>>= 1, e <<= 1;
  while (--t > 0);
  return e >>> 1;
}, wo = (i) => {
  i.bi_valid === 16 ? (It(i, i.bi_buf), i.bi_buf = 0, i.bi_valid = 0) : i.bi_valid >= 8 && (i.pending_buf[i.pending++] = i.bi_buf & 255, i.bi_buf >>= 8, i.bi_valid -= 8);
}, Eo = (i, t) => {
  const e = t.dyn_tree, n = t.max_code, r = t.stat_desc.static_tree, a = t.stat_desc.has_stree, o = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, h = t.stat_desc.max_length;
  let l, s, b, u, m, g, y = 0;
  for (u = 0; u <= Ne; u++)
    i.bl_count[u] = 0;
  for (e[i.heap[i.heap_max] * 2 + 1] = 0, l = i.heap_max + 1; l < _r; l++)
    s = i.heap[l], u = e[e[s * 2 + 1] * 2 + 1] + 1, u > h && (u = h, y++), e[s * 2 + 1] = u, !(s > n) && (i.bl_count[u]++, m = 0, s >= d && (m = o[s - d]), g = e[s * 2], i.opt_len += g * (u + m), a && (i.static_len += g * (r[s * 2 + 1] + m)));
  if (y !== 0) {
    do {
      for (u = h - 1; i.bl_count[u] === 0; )
        u--;
      i.bl_count[u]--, i.bl_count[u + 1] += 2, i.bl_count[h]--, y -= 2;
    } while (y > 0);
    for (u = h; u !== 0; u--)
      for (s = i.bl_count[u]; s !== 0; )
        b = i.heap[--l], !(b > n) && (e[b * 2 + 1] !== u && (i.opt_len += (u - e[b * 2 + 1]) * e[b * 2], e[b * 2 + 1] = u), s--);
  }
}, Sr = (i, t, e) => {
  const n = new Array(Ne + 1);
  let r = 0, a, o;
  for (a = 1; a <= Ne; a++)
    r = r + e[a - 1] << 1, n[a] = r;
  for (o = 0; o <= t; o++) {
    let d = i[o * 2 + 1];
    d !== 0 && (i[o * 2] = Ir(n[d]++, d));
  }
}, ko = () => {
  let i, t, e, n, r;
  const a = new Array(Ne + 1);
  for (e = 0, n = 0; n < Xi - 1; n++)
    for (qi[n] = e, i = 0; i < 1 << Li[n]; i++)
      kt[e++] = n;
  for (kt[e - 1] = n, r = 0, n = 0; n < 16; n++)
    for (Yt[n] = r, i = 0; i < 1 << Zt[n]; i++)
      Et[r++] = n;
  for (r >>= 7; n < tt; n++)
    for (Yt[n] = r << 7, i = 0; i < 1 << Zt[n] - 7; i++)
      Et[256 + r++] = n;
  for (t = 0; t <= Ne; t++)
    a[t] = 0;
  for (i = 0; i <= 143; )
    Ee[i * 2 + 1] = 8, i++, a[8]++;
  for (; i <= 255; )
    Ee[i * 2 + 1] = 9, i++, a[9]++;
  for (; i <= 279; )
    Ee[i * 2 + 1] = 7, i++, a[7]++;
  for (; i <= 287; )
    Ee[i * 2 + 1] = 8, i++, a[8]++;
  for (Sr(Ee, wt + 1, a), i = 0; i < tt; i++)
    xt[i * 2 + 1] = 5, xt[i * 2] = Ir(i, 5);
  yr = new hi(Ee, Li, Ft + 1, wt, Ne), wr = new hi(xt, Zt, 0, tt, Ne), Er = new hi(new Array(0), vo, 0, Yi, xo);
}, Ar = (i) => {
  let t;
  for (t = 0; t < wt; t++)
    i.dyn_ltree[t * 2] = 0;
  for (t = 0; t < tt; t++)
    i.dyn_dtree[t * 2] = 0;
  for (t = 0; t < Yi; t++)
    i.bl_tree[t * 2] = 0;
  i.dyn_ltree[Ki * 2] = 1, i.opt_len = i.static_len = 0, i.sym_next = i.matches = 0;
}, Rr = (i) => {
  i.bi_valid > 8 ? It(i, i.bi_buf) : i.bi_valid > 0 && (i.pending_buf[i.pending++] = i.bi_buf), i.bi_buf = 0, i.bi_valid = 0;
}, mn = (i, t, e, n) => {
  const r = t * 2, a = e * 2;
  return i[r] < i[a] || i[r] === i[a] && n[t] <= n[e];
}, fi = (i, t, e) => {
  const n = i.heap[e];
  let r = e << 1;
  for (; r <= i.heap_len && (r < i.heap_len && mn(t, i.heap[r + 1], i.heap[r], i.depth) && r++, !mn(t, n, i.heap[r], i.depth)); )
    i.heap[e] = i.heap[r], e = r, r <<= 1;
  i.heap[e] = n;
}, fn = (i, t, e) => {
  let n, r, a = 0, o, d;
  if (i.sym_next !== 0)
    do
      n = i.pending_buf[i.sym_buf + a++] & 255, n += (i.pending_buf[i.sym_buf + a++] & 255) << 8, r = i.pending_buf[i.sym_buf + a++], n === 0 ? _e(i, r, t) : (o = kt[r], _e(i, o + Ft + 1, t), d = Li[o], d !== 0 && (r -= qi[o], ae(i, r, d)), n--, o = kr(n), _e(i, o, e), d = Zt[o], d !== 0 && (n -= Yt[o], ae(i, n, d)));
    while (a < i.sym_next);
  _e(i, Ki, t);
}, Oi = (i, t) => {
  const e = t.dyn_tree, n = t.stat_desc.static_tree, r = t.stat_desc.has_stree, a = t.stat_desc.elems;
  let o, d, h = -1, l;
  for (i.heap_len = 0, i.heap_max = _r, o = 0; o < a; o++)
    e[o * 2] !== 0 ? (i.heap[++i.heap_len] = h = o, i.depth[o] = 0) : e[o * 2 + 1] = 0;
  for (; i.heap_len < 2; )
    l = i.heap[++i.heap_len] = h < 2 ? ++h : 0, e[l * 2] = 1, i.depth[l] = 0, i.opt_len--, r && (i.static_len -= n[l * 2 + 1]);
  for (t.max_code = h, o = i.heap_len >> 1; o >= 1; o--)
    fi(i, e, o);
  l = a;
  do
    o = i.heap[
      1
      /*SMALLEST*/
    ], i.heap[
      1
      /*SMALLEST*/
    ] = i.heap[i.heap_len--], fi(
      i,
      e,
      1
      /*SMALLEST*/
    ), d = i.heap[
      1
      /*SMALLEST*/
    ], i.heap[--i.heap_max] = o, i.heap[--i.heap_max] = d, e[l * 2] = e[o * 2] + e[d * 2], i.depth[l] = (i.depth[o] >= i.depth[d] ? i.depth[o] : i.depth[d]) + 1, e[o * 2 + 1] = e[d * 2 + 1] = l, i.heap[
      1
      /*SMALLEST*/
    ] = l++, fi(
      i,
      e,
      1
      /*SMALLEST*/
    );
  while (i.heap_len >= 2);
  i.heap[--i.heap_max] = i.heap[
    1
    /*SMALLEST*/
  ], Eo(i, t), Sr(e, h, i.bl_count);
}, un = (i, t, e) => {
  let n, r = -1, a, o = t[0 * 2 + 1], d = 0, h = 7, l = 4;
  for (o === 0 && (h = 138, l = 3), t[(e + 1) * 2 + 1] = 65535, n = 0; n <= e; n++)
    a = o, o = t[(n + 1) * 2 + 1], !(++d < h && a === o) && (d < l ? i.bl_tree[a * 2] += d : a !== 0 ? (a !== r && i.bl_tree[a * 2]++, i.bl_tree[gr * 2]++) : d <= 10 ? i.bl_tree[br * 2]++ : i.bl_tree[xr * 2]++, d = 0, r = a, o === 0 ? (h = 138, l = 3) : a === o ? (h = 6, l = 3) : (h = 7, l = 4));
}, pn = (i, t, e) => {
  let n, r = -1, a, o = t[0 * 2 + 1], d = 0, h = 7, l = 4;
  for (o === 0 && (h = 138, l = 3), n = 0; n <= e; n++)
    if (a = o, o = t[(n + 1) * 2 + 1], !(++d < h && a === o)) {
      if (d < l)
        do
          _e(i, a, i.bl_tree);
        while (--d !== 0);
      else
        a !== 0 ? (a !== r && (_e(i, a, i.bl_tree), d--), _e(i, gr, i.bl_tree), ae(i, d - 3, 2)) : d <= 10 ? (_e(i, br, i.bl_tree), ae(i, d - 3, 3)) : (_e(i, xr, i.bl_tree), ae(i, d - 11, 7));
      d = 0, r = a, o === 0 ? (h = 138, l = 3) : a === o ? (h = 6, l = 3) : (h = 7, l = 4);
    }
}, Io = (i) => {
  let t;
  for (un(i, i.dyn_ltree, i.l_desc.max_code), un(i, i.dyn_dtree, i.d_desc.max_code), Oi(i, i.bl_desc), t = Yi - 1; t >= 3 && i.bl_tree[vr[t] * 2 + 1] === 0; t--)
    ;
  return i.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
}, So = (i, t, e, n) => {
  let r;
  for (ae(i, t - 257, 5), ae(i, e - 1, 5), ae(i, n - 4, 4), r = 0; r < n; r++)
    ae(i, i.bl_tree[vr[r] * 2 + 1], 3);
  pn(i, i.dyn_ltree, t - 1), pn(i, i.dyn_dtree, e - 1);
}, Ao = (i) => {
  let t = 4093624447, e;
  for (e = 0; e <= 31; e++, t >>>= 1)
    if (t & 1 && i.dyn_ltree[e * 2] !== 0)
      return cn;
  if (i.dyn_ltree[9 * 2] !== 0 || i.dyn_ltree[10 * 2] !== 0 || i.dyn_ltree[13 * 2] !== 0)
    return hn;
  for (e = 32; e < Ft; e++)
    if (i.dyn_ltree[e * 2] !== 0)
      return hn;
  return cn;
};
let _n = !1;
const Ro = (i) => {
  _n || (ko(), _n = !0), i.l_desc = new mi(i.dyn_ltree, yr), i.d_desc = new mi(i.dyn_dtree, wr), i.bl_desc = new mi(i.bl_tree, Er), i.bi_buf = 0, i.bi_valid = 0, Ar(i);
}, Tr = (i, t, e, n) => {
  ae(i, (po << 1) + (n ? 1 : 0), 3), Rr(i), It(i, e), It(i, ~e), e && i.pending_buf.set(i.window.subarray(t, t + e), i.pending), i.pending += e;
}, To = (i) => {
  ae(i, pr << 1, 3), _e(i, Ki, Ee), wo(i);
}, Co = (i, t, e, n) => {
  let r, a, o = 0;
  i.level > 0 ? (i.strm.data_type === uo && (i.strm.data_type = Ao(i)), Oi(i, i.l_desc), Oi(i, i.d_desc), o = Io(i), r = i.opt_len + 3 + 7 >>> 3, a = i.static_len + 3 + 7 >>> 3, a <= r && (r = a)) : r = a = e + 5, e + 4 <= r && t !== -1 ? Tr(i, t, e, n) : i.strategy === fo || a === r ? (ae(i, (pr << 1) + (n ? 1 : 0), 3), fn(i, Ee, xt)) : (ae(i, (_o << 1) + (n ? 1 : 0), 3), So(i, i.l_desc.max_code + 1, i.d_desc.max_code + 1, o + 1), fn(i, i.dyn_ltree, i.dyn_dtree)), Ar(i), n && Rr(i);
}, Lo = (i, t, e) => (i.pending_buf[i.sym_buf + i.sym_next++] = t, i.pending_buf[i.sym_buf + i.sym_next++] = t >> 8, i.pending_buf[i.sym_buf + i.sym_next++] = e, t === 0 ? i.dyn_ltree[e * 2]++ : (i.matches++, t--, i.dyn_ltree[(kt[e] + Ft + 1) * 2]++, i.dyn_dtree[kr(t) * 2]++), i.sym_next === i.sym_end);
var Oo = Ro, Fo = Tr, Do = Co, Mo = Lo, zo = To, $o = {
  _tr_init: Oo,
  _tr_stored_block: Fo,
  _tr_flush_block: Do,
  _tr_tally: Mo,
  _tr_align: zo
};
const Bo = (i, t, e, n) => {
  let r = i & 65535 | 0, a = i >>> 16 & 65535 | 0, o = 0;
  for (; e !== 0; ) {
    o = e > 2e3 ? 2e3 : e, e -= o;
    do
      r = r + t[n++] | 0, a = a + r | 0;
    while (--o);
    r %= 65521, a %= 65521;
  }
  return r | a << 16 | 0;
};
var St = Bo;
const Po = () => {
  let i, t = [];
  for (var e = 0; e < 256; e++) {
    i = e;
    for (var n = 0; n < 8; n++)
      i = i & 1 ? 3988292384 ^ i >>> 1 : i >>> 1;
    t[e] = i;
  }
  return t;
}, No = new Uint32Array(Po()), Ho = (i, t, e, n) => {
  const r = No, a = n + e;
  i ^= -1;
  for (let o = n; o < a; o++)
    i = i >>> 8 ^ r[(i ^ t[o]) & 255];
  return i ^ -1;
};
var X = Ho, We = {
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
}, st = {
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
const { _tr_init: Uo, _tr_stored_block: Fi, _tr_flush_block: Vo, _tr_tally: Ce, _tr_align: Wo } = $o, {
  Z_NO_FLUSH: Le,
  Z_PARTIAL_FLUSH: Go,
  Z_FULL_FLUSH: Zo,
  Z_FINISH: he,
  Z_BLOCK: gn,
  Z_OK: Y,
  Z_STREAM_END: bn,
  Z_STREAM_ERROR: ge,
  Z_DATA_ERROR: Xo,
  Z_BUF_ERROR: ui,
  Z_DEFAULT_COMPRESSION: Yo,
  Z_FILTERED: Ko,
  Z_HUFFMAN_ONLY: Ht,
  Z_RLE: qo,
  Z_FIXED: jo,
  Z_DEFAULT_STRATEGY: Qo,
  Z_UNKNOWN: Jo,
  Z_DEFLATED: ei
} = st, ed = 9, td = 15, id = 8, nd = 29, rd = 256, Di = rd + 1 + nd, ad = 30, od = 19, dd = 2 * Di + 1, ld = 15, O = 3, Te = 258, be = Te + O + 1, sd = 32, it = 42, ji = 57, Mi = 69, zi = 73, $i = 91, Bi = 103, He = 113, pt = 666, ie = 1, ct = 2, Ge = 3, ht = 4, cd = 3, Ue = (i, t) => (i.msg = We[t], t), xn = (i) => i * 2 - (i > 4 ? 9 : 0), Re = (i) => {
  let t = i.length;
  for (; --t >= 0; )
    i[t] = 0;
}, hd = (i) => {
  let t, e, n, r = i.w_size;
  t = i.hash_size, n = t;
  do
    e = i.head[--n], i.head[n] = e >= r ? e - r : 0;
  while (--t);
  t = r, n = t;
  do
    e = i.prev[--n], i.prev[n] = e >= r ? e - r : 0;
  while (--t);
};
let md = (i, t, e) => (t << i.hash_shift ^ e) & i.hash_mask, Oe = md;
const le = (i) => {
  const t = i.state;
  let e = t.pending;
  e > i.avail_out && (e = i.avail_out), e !== 0 && (i.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + e), i.next_out), i.next_out += e, t.pending_out += e, i.total_out += e, i.avail_out -= e, t.pending -= e, t.pending === 0 && (t.pending_out = 0));
}, se = (i, t) => {
  Vo(i, i.block_start >= 0 ? i.block_start : -1, i.strstart - i.block_start, t), i.block_start = i.strstart, le(i.strm);
}, D = (i, t) => {
  i.pending_buf[i.pending++] = t;
}, ft = (i, t) => {
  i.pending_buf[i.pending++] = t >>> 8 & 255, i.pending_buf[i.pending++] = t & 255;
}, Pi = (i, t, e, n) => {
  let r = i.avail_in;
  return r > n && (r = n), r === 0 ? 0 : (i.avail_in -= r, t.set(i.input.subarray(i.next_in, i.next_in + r), e), i.state.wrap === 1 ? i.adler = St(i.adler, t, r, e) : i.state.wrap === 2 && (i.adler = X(i.adler, t, r, e)), i.next_in += r, i.total_in += r, r);
}, Cr = (i, t) => {
  let e = i.max_chain_length, n = i.strstart, r, a, o = i.prev_length, d = i.nice_match;
  const h = i.strstart > i.w_size - be ? i.strstart - (i.w_size - be) : 0, l = i.window, s = i.w_mask, b = i.prev, u = i.strstart + Te;
  let m = l[n + o - 1], g = l[n + o];
  i.prev_length >= i.good_match && (e >>= 2), d > i.lookahead && (d = i.lookahead);
  do
    if (r = t, !(l[r + o] !== g || l[r + o - 1] !== m || l[r] !== l[n] || l[++r] !== l[n + 1])) {
      n += 2, r++;
      do
        ;
      while (l[++n] === l[++r] && l[++n] === l[++r] && l[++n] === l[++r] && l[++n] === l[++r] && l[++n] === l[++r] && l[++n] === l[++r] && l[++n] === l[++r] && l[++n] === l[++r] && n < u);
      if (a = Te - (u - n), n = u - Te, a > o) {
        if (i.match_start = t, o = a, a >= d)
          break;
        m = l[n + o - 1], g = l[n + o];
      }
    }
  while ((t = b[t & s]) > h && --e !== 0);
  return o <= i.lookahead ? o : i.lookahead;
}, nt = (i) => {
  const t = i.w_size;
  let e, n, r;
  do {
    if (n = i.window_size - i.lookahead - i.strstart, i.strstart >= t + (t - be) && (i.window.set(i.window.subarray(t, t + t - n), 0), i.match_start -= t, i.strstart -= t, i.block_start -= t, i.insert > i.strstart && (i.insert = i.strstart), hd(i), n += t), i.strm.avail_in === 0)
      break;
    if (e = Pi(i.strm, i.window, i.strstart + i.lookahead, n), i.lookahead += e, i.lookahead + i.insert >= O)
      for (r = i.strstart - i.insert, i.ins_h = i.window[r], i.ins_h = Oe(i, i.ins_h, i.window[r + 1]); i.insert && (i.ins_h = Oe(i, i.ins_h, i.window[r + O - 1]), i.prev[r & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = r, r++, i.insert--, !(i.lookahead + i.insert < O)); )
        ;
  } while (i.lookahead < be && i.strm.avail_in !== 0);
}, Lr = (i, t) => {
  let e = i.pending_buf_size - 5 > i.w_size ? i.w_size : i.pending_buf_size - 5, n, r, a, o = 0, d = i.strm.avail_in;
  do {
    if (n = 65535, a = i.bi_valid + 42 >> 3, i.strm.avail_out < a || (a = i.strm.avail_out - a, r = i.strstart - i.block_start, n > r + i.strm.avail_in && (n = r + i.strm.avail_in), n > a && (n = a), n < e && (n === 0 && t !== he || t === Le || n !== r + i.strm.avail_in)))
      break;
    o = t === he && n === r + i.strm.avail_in ? 1 : 0, Fi(i, 0, 0, o), i.pending_buf[i.pending - 4] = n, i.pending_buf[i.pending - 3] = n >> 8, i.pending_buf[i.pending - 2] = ~n, i.pending_buf[i.pending - 1] = ~n >> 8, le(i.strm), r && (r > n && (r = n), i.strm.output.set(i.window.subarray(i.block_start, i.block_start + r), i.strm.next_out), i.strm.next_out += r, i.strm.avail_out -= r, i.strm.total_out += r, i.block_start += r, n -= r), n && (Pi(i.strm, i.strm.output, i.strm.next_out, n), i.strm.next_out += n, i.strm.avail_out -= n, i.strm.total_out += n);
  } while (o === 0);
  return d -= i.strm.avail_in, d && (d >= i.w_size ? (i.matches = 2, i.window.set(i.strm.input.subarray(i.strm.next_in - i.w_size, i.strm.next_in), 0), i.strstart = i.w_size, i.insert = i.strstart) : (i.window_size - i.strstart <= d && (i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, i.insert > i.strstart && (i.insert = i.strstart)), i.window.set(i.strm.input.subarray(i.strm.next_in - d, i.strm.next_in), i.strstart), i.strstart += d, i.insert += d > i.w_size - i.insert ? i.w_size - i.insert : d), i.block_start = i.strstart), i.high_water < i.strstart && (i.high_water = i.strstart), o ? ht : t !== Le && t !== he && i.strm.avail_in === 0 && i.strstart === i.block_start ? ct : (a = i.window_size - i.strstart, i.strm.avail_in > a && i.block_start >= i.w_size && (i.block_start -= i.w_size, i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, a += i.w_size, i.insert > i.strstart && (i.insert = i.strstart)), a > i.strm.avail_in && (a = i.strm.avail_in), a && (Pi(i.strm, i.window, i.strstart, a), i.strstart += a, i.insert += a > i.w_size - i.insert ? i.w_size - i.insert : a), i.high_water < i.strstart && (i.high_water = i.strstart), a = i.bi_valid + 42 >> 3, a = i.pending_buf_size - a > 65535 ? 65535 : i.pending_buf_size - a, e = a > i.w_size ? i.w_size : a, r = i.strstart - i.block_start, (r >= e || (r || t === he) && t !== Le && i.strm.avail_in === 0 && r <= a) && (n = r > a ? a : r, o = t === he && i.strm.avail_in === 0 && n === r ? 1 : 0, Fi(i, i.block_start, n, o), i.block_start += n, le(i.strm)), o ? Ge : ie);
}, pi = (i, t) => {
  let e, n;
  for (; ; ) {
    if (i.lookahead < be) {
      if (nt(i), i.lookahead < be && t === Le)
        return ie;
      if (i.lookahead === 0)
        break;
    }
    if (e = 0, i.lookahead >= O && (i.ins_h = Oe(i, i.ins_h, i.window[i.strstart + O - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), e !== 0 && i.strstart - e <= i.w_size - be && (i.match_length = Cr(i, e)), i.match_length >= O)
      if (n = Ce(i, i.strstart - i.match_start, i.match_length - O), i.lookahead -= i.match_length, i.match_length <= i.max_lazy_match && i.lookahead >= O) {
        i.match_length--;
        do
          i.strstart++, i.ins_h = Oe(i, i.ins_h, i.window[i.strstart + O - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart;
        while (--i.match_length !== 0);
        i.strstart++;
      } else
        i.strstart += i.match_length, i.match_length = 0, i.ins_h = i.window[i.strstart], i.ins_h = Oe(i, i.ins_h, i.window[i.strstart + 1]);
    else
      n = Ce(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++;
    if (n && (se(i, !1), i.strm.avail_out === 0))
      return ie;
  }
  return i.insert = i.strstart < O - 1 ? i.strstart : O - 1, t === he ? (se(i, !0), i.strm.avail_out === 0 ? Ge : ht) : i.sym_next && (se(i, !1), i.strm.avail_out === 0) ? ie : ct;
}, je = (i, t) => {
  let e, n, r;
  for (; ; ) {
    if (i.lookahead < be) {
      if (nt(i), i.lookahead < be && t === Le)
        return ie;
      if (i.lookahead === 0)
        break;
    }
    if (e = 0, i.lookahead >= O && (i.ins_h = Oe(i, i.ins_h, i.window[i.strstart + O - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), i.prev_length = i.match_length, i.prev_match = i.match_start, i.match_length = O - 1, e !== 0 && i.prev_length < i.max_lazy_match && i.strstart - e <= i.w_size - be && (i.match_length = Cr(i, e), i.match_length <= 5 && (i.strategy === Ko || i.match_length === O && i.strstart - i.match_start > 4096) && (i.match_length = O - 1)), i.prev_length >= O && i.match_length <= i.prev_length) {
      r = i.strstart + i.lookahead - O, n = Ce(i, i.strstart - 1 - i.prev_match, i.prev_length - O), i.lookahead -= i.prev_length - 1, i.prev_length -= 2;
      do
        ++i.strstart <= r && (i.ins_h = Oe(i, i.ins_h, i.window[i.strstart + O - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart);
      while (--i.prev_length !== 0);
      if (i.match_available = 0, i.match_length = O - 1, i.strstart++, n && (se(i, !1), i.strm.avail_out === 0))
        return ie;
    } else if (i.match_available) {
      if (n = Ce(i, 0, i.window[i.strstart - 1]), n && se(i, !1), i.strstart++, i.lookahead--, i.strm.avail_out === 0)
        return ie;
    } else
      i.match_available = 1, i.strstart++, i.lookahead--;
  }
  return i.match_available && (n = Ce(i, 0, i.window[i.strstart - 1]), i.match_available = 0), i.insert = i.strstart < O - 1 ? i.strstart : O - 1, t === he ? (se(i, !0), i.strm.avail_out === 0 ? Ge : ht) : i.sym_next && (se(i, !1), i.strm.avail_out === 0) ? ie : ct;
}, fd = (i, t) => {
  let e, n, r, a;
  const o = i.window;
  for (; ; ) {
    if (i.lookahead <= Te) {
      if (nt(i), i.lookahead <= Te && t === Le)
        return ie;
      if (i.lookahead === 0)
        break;
    }
    if (i.match_length = 0, i.lookahead >= O && i.strstart > 0 && (r = i.strstart - 1, n = o[r], n === o[++r] && n === o[++r] && n === o[++r])) {
      a = i.strstart + Te;
      do
        ;
      while (n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && r < a);
      i.match_length = Te - (a - r), i.match_length > i.lookahead && (i.match_length = i.lookahead);
    }
    if (i.match_length >= O ? (e = Ce(i, 1, i.match_length - O), i.lookahead -= i.match_length, i.strstart += i.match_length, i.match_length = 0) : (e = Ce(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++), e && (se(i, !1), i.strm.avail_out === 0))
      return ie;
  }
  return i.insert = 0, t === he ? (se(i, !0), i.strm.avail_out === 0 ? Ge : ht) : i.sym_next && (se(i, !1), i.strm.avail_out === 0) ? ie : ct;
}, ud = (i, t) => {
  let e;
  for (; ; ) {
    if (i.lookahead === 0 && (nt(i), i.lookahead === 0)) {
      if (t === Le)
        return ie;
      break;
    }
    if (i.match_length = 0, e = Ce(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++, e && (se(i, !1), i.strm.avail_out === 0))
      return ie;
  }
  return i.insert = 0, t === he ? (se(i, !0), i.strm.avail_out === 0 ? Ge : ht) : i.sym_next && (se(i, !1), i.strm.avail_out === 0) ? ie : ct;
};
function ue(i, t, e, n, r) {
  this.good_length = i, this.max_lazy = t, this.nice_length = e, this.max_chain = n, this.func = r;
}
const _t = [
  /*      good lazy nice chain */
  new ue(0, 0, 0, 0, Lr),
  /* 0 store only */
  new ue(4, 4, 8, 4, pi),
  /* 1 max speed, no lazy matches */
  new ue(4, 5, 16, 8, pi),
  /* 2 */
  new ue(4, 6, 32, 32, pi),
  /* 3 */
  new ue(4, 4, 16, 16, je),
  /* 4 lazy matches */
  new ue(8, 16, 32, 32, je),
  /* 5 */
  new ue(8, 16, 128, 128, je),
  /* 6 */
  new ue(8, 32, 128, 256, je),
  /* 7 */
  new ue(32, 128, 258, 1024, je),
  /* 8 */
  new ue(32, 258, 258, 4096, je)
  /* 9 max compression */
], pd = (i) => {
  i.window_size = 2 * i.w_size, Re(i.head), i.max_lazy_match = _t[i.level].max_lazy, i.good_match = _t[i.level].good_length, i.nice_match = _t[i.level].nice_length, i.max_chain_length = _t[i.level].max_chain, i.strstart = 0, i.block_start = 0, i.lookahead = 0, i.insert = 0, i.match_length = i.prev_length = O - 1, i.match_available = 0, i.ins_h = 0;
};
function _d() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ei, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(dd * 2), this.dyn_dtree = new Uint16Array((2 * ad + 1) * 2), this.bl_tree = new Uint16Array((2 * od + 1) * 2), Re(this.dyn_ltree), Re(this.dyn_dtree), Re(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(ld + 1), this.heap = new Uint16Array(2 * Di + 1), Re(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Di + 1), Re(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Dt = (i) => {
  if (!i)
    return 1;
  const t = i.state;
  return !t || t.strm !== i || t.status !== it && //#ifdef GZIP
  t.status !== ji && //#endif
  t.status !== Mi && t.status !== zi && t.status !== $i && t.status !== Bi && t.status !== He && t.status !== pt ? 1 : 0;
}, Or = (i) => {
  if (Dt(i))
    return Ue(i, ge);
  i.total_in = i.total_out = 0, i.data_type = Jo;
  const t = i.state;
  return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = //#ifdef GZIP
  t.wrap === 2 ? ji : (
    //#endif
    t.wrap ? it : He
  ), i.adler = t.wrap === 2 ? 0 : 1, t.last_flush = -2, Uo(t), Y;
}, Fr = (i) => {
  const t = Or(i);
  return t === Y && pd(i.state), t;
}, gd = (i, t) => Dt(i) || i.state.wrap !== 2 ? ge : (i.state.gzhead = t, Y), Dr = (i, t, e, n, r, a) => {
  if (!i)
    return ge;
  let o = 1;
  if (t === Yo && (t = 6), n < 0 ? (o = 0, n = -n) : n > 15 && (o = 2, n -= 16), r < 1 || r > ed || e !== ei || n < 8 || n > 15 || t < 0 || t > 9 || a < 0 || a > jo || n === 8 && o !== 1)
    return Ue(i, ge);
  n === 8 && (n = 9);
  const d = new _d();
  return i.state = d, d.strm = i, d.status = it, d.wrap = o, d.gzhead = null, d.w_bits = n, d.w_size = 1 << d.w_bits, d.w_mask = d.w_size - 1, d.hash_bits = r + 7, d.hash_size = 1 << d.hash_bits, d.hash_mask = d.hash_size - 1, d.hash_shift = ~~((d.hash_bits + O - 1) / O), d.window = new Uint8Array(d.w_size * 2), d.head = new Uint16Array(d.hash_size), d.prev = new Uint16Array(d.w_size), d.lit_bufsize = 1 << r + 6, d.pending_buf_size = d.lit_bufsize * 4, d.pending_buf = new Uint8Array(d.pending_buf_size), d.sym_buf = d.lit_bufsize, d.sym_end = (d.lit_bufsize - 1) * 3, d.level = t, d.strategy = a, d.method = e, Fr(i);
}, bd = (i, t) => Dr(i, t, ei, td, id, Qo), xd = (i, t) => {
  if (Dt(i) || t > gn || t < 0)
    return i ? Ue(i, ge) : ge;
  const e = i.state;
  if (!i.output || i.avail_in !== 0 && !i.input || e.status === pt && t !== he)
    return Ue(i, i.avail_out === 0 ? ui : ge);
  const n = e.last_flush;
  if (e.last_flush = t, e.pending !== 0) {
    if (le(i), i.avail_out === 0)
      return e.last_flush = -1, Y;
  } else if (i.avail_in === 0 && xn(t) <= xn(n) && t !== he)
    return Ue(i, ui);
  if (e.status === pt && i.avail_in !== 0)
    return Ue(i, ui);
  if (e.status === it && e.wrap === 0 && (e.status = He), e.status === it) {
    let r = ei + (e.w_bits - 8 << 4) << 8, a = -1;
    if (e.strategy >= Ht || e.level < 2 ? a = 0 : e.level < 6 ? a = 1 : e.level === 6 ? a = 2 : a = 3, r |= a << 6, e.strstart !== 0 && (r |= sd), r += 31 - r % 31, ft(e, r), e.strstart !== 0 && (ft(e, i.adler >>> 16), ft(e, i.adler & 65535)), i.adler = 1, e.status = He, le(i), e.pending !== 0)
      return e.last_flush = -1, Y;
  }
  if (e.status === ji) {
    if (i.adler = 0, D(e, 31), D(e, 139), D(e, 8), e.gzhead)
      D(
        e,
        (e.gzhead.text ? 1 : 0) + (e.gzhead.hcrc ? 2 : 0) + (e.gzhead.extra ? 4 : 0) + (e.gzhead.name ? 8 : 0) + (e.gzhead.comment ? 16 : 0)
      ), D(e, e.gzhead.time & 255), D(e, e.gzhead.time >> 8 & 255), D(e, e.gzhead.time >> 16 & 255), D(e, e.gzhead.time >> 24 & 255), D(e, e.level === 9 ? 2 : e.strategy >= Ht || e.level < 2 ? 4 : 0), D(e, e.gzhead.os & 255), e.gzhead.extra && e.gzhead.extra.length && (D(e, e.gzhead.extra.length & 255), D(e, e.gzhead.extra.length >> 8 & 255)), e.gzhead.hcrc && (i.adler = X(i.adler, e.pending_buf, e.pending, 0)), e.gzindex = 0, e.status = Mi;
    else if (D(e, 0), D(e, 0), D(e, 0), D(e, 0), D(e, 0), D(e, e.level === 9 ? 2 : e.strategy >= Ht || e.level < 2 ? 4 : 0), D(e, cd), e.status = He, le(i), e.pending !== 0)
      return e.last_flush = -1, Y;
  }
  if (e.status === Mi) {
    if (e.gzhead.extra) {
      let r = e.pending, a = (e.gzhead.extra.length & 65535) - e.gzindex;
      for (; e.pending + a > e.pending_buf_size; ) {
        let d = e.pending_buf_size - e.pending;
        if (e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex, e.gzindex + d), e.pending), e.pending = e.pending_buf_size, e.gzhead.hcrc && e.pending > r && (i.adler = X(i.adler, e.pending_buf, e.pending - r, r)), e.gzindex += d, le(i), e.pending !== 0)
          return e.last_flush = -1, Y;
        r = 0, a -= d;
      }
      let o = new Uint8Array(e.gzhead.extra);
      e.pending_buf.set(o.subarray(e.gzindex, e.gzindex + a), e.pending), e.pending += a, e.gzhead.hcrc && e.pending > r && (i.adler = X(i.adler, e.pending_buf, e.pending - r, r)), e.gzindex = 0;
    }
    e.status = zi;
  }
  if (e.status === zi) {
    if (e.gzhead.name) {
      let r = e.pending, a;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > r && (i.adler = X(i.adler, e.pending_buf, e.pending - r, r)), le(i), e.pending !== 0)
            return e.last_flush = -1, Y;
          r = 0;
        }
        e.gzindex < e.gzhead.name.length ? a = e.gzhead.name.charCodeAt(e.gzindex++) & 255 : a = 0, D(e, a);
      } while (a !== 0);
      e.gzhead.hcrc && e.pending > r && (i.adler = X(i.adler, e.pending_buf, e.pending - r, r)), e.gzindex = 0;
    }
    e.status = $i;
  }
  if (e.status === $i) {
    if (e.gzhead.comment) {
      let r = e.pending, a;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > r && (i.adler = X(i.adler, e.pending_buf, e.pending - r, r)), le(i), e.pending !== 0)
            return e.last_flush = -1, Y;
          r = 0;
        }
        e.gzindex < e.gzhead.comment.length ? a = e.gzhead.comment.charCodeAt(e.gzindex++) & 255 : a = 0, D(e, a);
      } while (a !== 0);
      e.gzhead.hcrc && e.pending > r && (i.adler = X(i.adler, e.pending_buf, e.pending - r, r));
    }
    e.status = Bi;
  }
  if (e.status === Bi) {
    if (e.gzhead.hcrc) {
      if (e.pending + 2 > e.pending_buf_size && (le(i), e.pending !== 0))
        return e.last_flush = -1, Y;
      D(e, i.adler & 255), D(e, i.adler >> 8 & 255), i.adler = 0;
    }
    if (e.status = He, le(i), e.pending !== 0)
      return e.last_flush = -1, Y;
  }
  if (i.avail_in !== 0 || e.lookahead !== 0 || t !== Le && e.status !== pt) {
    let r = e.level === 0 ? Lr(e, t) : e.strategy === Ht ? ud(e, t) : e.strategy === qo ? fd(e, t) : _t[e.level].func(e, t);
    if ((r === Ge || r === ht) && (e.status = pt), r === ie || r === Ge)
      return i.avail_out === 0 && (e.last_flush = -1), Y;
    if (r === ct && (t === Go ? Wo(e) : t !== gn && (Fi(e, 0, 0, !1), t === Zo && (Re(e.head), e.lookahead === 0 && (e.strstart = 0, e.block_start = 0, e.insert = 0))), le(i), i.avail_out === 0))
      return e.last_flush = -1, Y;
  }
  return t !== he ? Y : e.wrap <= 0 ? bn : (e.wrap === 2 ? (D(e, i.adler & 255), D(e, i.adler >> 8 & 255), D(e, i.adler >> 16 & 255), D(e, i.adler >> 24 & 255), D(e, i.total_in & 255), D(e, i.total_in >> 8 & 255), D(e, i.total_in >> 16 & 255), D(e, i.total_in >> 24 & 255)) : (ft(e, i.adler >>> 16), ft(e, i.adler & 65535)), le(i), e.wrap > 0 && (e.wrap = -e.wrap), e.pending !== 0 ? Y : bn);
}, vd = (i) => {
  if (Dt(i))
    return ge;
  const t = i.state.status;
  return i.state = null, t === He ? Ue(i, Xo) : Y;
}, yd = (i, t) => {
  let e = t.length;
  if (Dt(i))
    return ge;
  const n = i.state, r = n.wrap;
  if (r === 2 || r === 1 && n.status !== it || n.lookahead)
    return ge;
  if (r === 1 && (i.adler = St(i.adler, t, e, 0)), n.wrap = 0, e >= n.w_size) {
    r === 0 && (Re(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
    let h = new Uint8Array(n.w_size);
    h.set(t.subarray(e - n.w_size, e), 0), t = h, e = n.w_size;
  }
  const a = i.avail_in, o = i.next_in, d = i.input;
  for (i.avail_in = e, i.next_in = 0, i.input = t, nt(n); n.lookahead >= O; ) {
    let h = n.strstart, l = n.lookahead - (O - 1);
    do
      n.ins_h = Oe(n, n.ins_h, n.window[h + O - 1]), n.prev[h & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = h, h++;
    while (--l);
    n.strstart = h, n.lookahead = O - 1, nt(n);
  }
  return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = O - 1, n.match_available = 0, i.next_in = o, i.input = d, i.avail_in = a, n.wrap = r, Y;
};
var wd = bd, Ed = Dr, kd = Fr, Id = Or, Sd = gd, Ad = xd, Rd = vd, Td = yd, Cd = "pako deflate (from Nodeca project)", vt = {
  deflateInit: wd,
  deflateInit2: Ed,
  deflateReset: kd,
  deflateResetKeep: Id,
  deflateSetHeader: Sd,
  deflate: Ad,
  deflateEnd: Rd,
  deflateSetDictionary: Td,
  deflateInfo: Cd
};
const Ld = (i, t) => Object.prototype.hasOwnProperty.call(i, t);
var Od = function(i) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const e = t.shift();
    if (e) {
      if (typeof e != "object")
        throw new TypeError(e + "must be non-object");
      for (const n in e)
        Ld(e, n) && (i[n] = e[n]);
    }
  }
  return i;
}, Fd = (i) => {
  let t = 0;
  for (let n = 0, r = i.length; n < r; n++)
    t += i[n].length;
  const e = new Uint8Array(t);
  for (let n = 0, r = 0, a = i.length; n < a; n++) {
    let o = i[n];
    e.set(o, r), r += o.length;
  }
  return e;
}, ti = {
  assign: Od,
  flattenChunks: Fd
};
let Mr = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Mr = !1;
}
const At = new Uint8Array(256);
for (let i = 0; i < 256; i++)
  At[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
At[254] = At[254] = 1;
var Dd = (i) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(i);
  let t, e, n, r, a, o = i.length, d = 0;
  for (r = 0; r < o; r++)
    e = i.charCodeAt(r), (e & 64512) === 55296 && r + 1 < o && (n = i.charCodeAt(r + 1), (n & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (n - 56320), r++)), d += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
  for (t = new Uint8Array(d), a = 0, r = 0; a < d; r++)
    e = i.charCodeAt(r), (e & 64512) === 55296 && r + 1 < o && (n = i.charCodeAt(r + 1), (n & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (n - 56320), r++)), e < 128 ? t[a++] = e : e < 2048 ? (t[a++] = 192 | e >>> 6, t[a++] = 128 | e & 63) : e < 65536 ? (t[a++] = 224 | e >>> 12, t[a++] = 128 | e >>> 6 & 63, t[a++] = 128 | e & 63) : (t[a++] = 240 | e >>> 18, t[a++] = 128 | e >>> 12 & 63, t[a++] = 128 | e >>> 6 & 63, t[a++] = 128 | e & 63);
  return t;
};
const Md = (i, t) => {
  if (t < 65534 && i.subarray && Mr)
    return String.fromCharCode.apply(null, i.length === t ? i : i.subarray(0, t));
  let e = "";
  for (let n = 0; n < t; n++)
    e += String.fromCharCode(i[n]);
  return e;
};
var zd = (i, t) => {
  const e = t || i.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(i.subarray(0, t));
  let n, r;
  const a = new Array(e * 2);
  for (r = 0, n = 0; n < e; ) {
    let o = i[n++];
    if (o < 128) {
      a[r++] = o;
      continue;
    }
    let d = At[o];
    if (d > 4) {
      a[r++] = 65533, n += d - 1;
      continue;
    }
    for (o &= d === 2 ? 31 : d === 3 ? 15 : 7; d > 1 && n < e; )
      o = o << 6 | i[n++] & 63, d--;
    if (d > 1) {
      a[r++] = 65533;
      continue;
    }
    o < 65536 ? a[r++] = o : (o -= 65536, a[r++] = 55296 | o >> 10 & 1023, a[r++] = 56320 | o & 1023);
  }
  return Md(a, r);
}, $d = (i, t) => {
  t = t || i.length, t > i.length && (t = i.length);
  let e = t - 1;
  for (; e >= 0 && (i[e] & 192) === 128; )
    e--;
  return e < 0 || e === 0 ? t : e + At[i[e]] > t ? e : t;
}, Rt = {
  string2buf: Dd,
  buf2string: zd,
  utf8border: $d
};
function Bd() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var zr = Bd;
const $r = Object.prototype.toString, {
  Z_NO_FLUSH: Pd,
  Z_SYNC_FLUSH: Nd,
  Z_FULL_FLUSH: Hd,
  Z_FINISH: Ud,
  Z_OK: Kt,
  Z_STREAM_END: Vd,
  Z_DEFAULT_COMPRESSION: Wd,
  Z_DEFAULT_STRATEGY: Gd,
  Z_DEFLATED: Zd
} = st;
function Mt(i) {
  this.options = ti.assign({
    level: Wd,
    method: Zd,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Gd
  }, i || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zr(), this.strm.avail_out = 0;
  let e = vt.deflateInit2(
    this.strm,
    t.level,
    t.method,
    t.windowBits,
    t.memLevel,
    t.strategy
  );
  if (e !== Kt)
    throw new Error(We[e]);
  if (t.header && vt.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let n;
    if (typeof t.dictionary == "string" ? n = Rt.string2buf(t.dictionary) : $r.call(t.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(t.dictionary) : n = t.dictionary, e = vt.deflateSetDictionary(this.strm, n), e !== Kt)
      throw new Error(We[e]);
    this._dict_set = !0;
  }
}
Mt.prototype.push = function(i, t) {
  const e = this.strm, n = this.options.chunkSize;
  let r, a;
  if (this.ended)
    return !1;
  for (t === ~~t ? a = t : a = t === !0 ? Ud : Pd, typeof i == "string" ? e.input = Rt.string2buf(i) : $r.call(i) === "[object ArrayBuffer]" ? e.input = new Uint8Array(i) : e.input = i, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    if (e.avail_out === 0 && (e.output = new Uint8Array(n), e.next_out = 0, e.avail_out = n), (a === Nd || a === Hd) && e.avail_out <= 6) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (r = vt.deflate(e, a), r === Vd)
      return e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)), r = vt.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === Kt;
    if (e.avail_out === 0) {
      this.onData(e.output);
      continue;
    }
    if (a > 0 && e.next_out > 0) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (e.avail_in === 0)
      break;
  }
  return !0;
};
Mt.prototype.onData = function(i) {
  this.chunks.push(i);
};
Mt.prototype.onEnd = function(i) {
  i === Kt && (this.result = ti.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
function Qi(i, t) {
  const e = new Mt(t);
  if (e.push(i, !0), e.err)
    throw e.msg || We[e.err];
  return e.result;
}
function Xd(i, t) {
  return t = t || {}, t.raw = !0, Qi(i, t);
}
function Yd(i, t) {
  return t = t || {}, t.gzip = !0, Qi(i, t);
}
var Kd = Mt, qd = Qi, jd = Xd, Qd = Yd, Jd = st, el = {
  Deflate: Kd,
  deflate: qd,
  deflateRaw: jd,
  gzip: Qd,
  constants: Jd
};
const Ut = 16209, tl = 16191;
var il = function(t, e) {
  let n, r, a, o, d, h, l, s, b, u, m, g, y, x, v, E, k, p, A, G, w, L, T, I;
  const C = t.state;
  n = t.next_in, T = t.input, r = n + (t.avail_in - 5), a = t.next_out, I = t.output, o = a - (e - t.avail_out), d = a + (t.avail_out - 257), h = C.dmax, l = C.wsize, s = C.whave, b = C.wnext, u = C.window, m = C.hold, g = C.bits, y = C.lencode, x = C.distcode, v = (1 << C.lenbits) - 1, E = (1 << C.distbits) - 1;
  e:
    do {
      g < 15 && (m += T[n++] << g, g += 8, m += T[n++] << g, g += 8), k = y[m & v];
      t:
        for (; ; ) {
          if (p = k >>> 24, m >>>= p, g -= p, p = k >>> 16 & 255, p === 0)
            I[a++] = k & 65535;
          else if (p & 16) {
            A = k & 65535, p &= 15, p && (g < p && (m += T[n++] << g, g += 8), A += m & (1 << p) - 1, m >>>= p, g -= p), g < 15 && (m += T[n++] << g, g += 8, m += T[n++] << g, g += 8), k = x[m & E];
            i:
              for (; ; ) {
                if (p = k >>> 24, m >>>= p, g -= p, p = k >>> 16 & 255, p & 16) {
                  if (G = k & 65535, p &= 15, g < p && (m += T[n++] << g, g += 8, g < p && (m += T[n++] << g, g += 8)), G += m & (1 << p) - 1, G > h) {
                    t.msg = "invalid distance too far back", C.mode = Ut;
                    break e;
                  }
                  if (m >>>= p, g -= p, p = a - o, G > p) {
                    if (p = G - p, p > s && C.sane) {
                      t.msg = "invalid distance too far back", C.mode = Ut;
                      break e;
                    }
                    if (w = 0, L = u, b === 0) {
                      if (w += l - p, p < A) {
                        A -= p;
                        do
                          I[a++] = u[w++];
                        while (--p);
                        w = a - G, L = I;
                      }
                    } else if (b < p) {
                      if (w += l + b - p, p -= b, p < A) {
                        A -= p;
                        do
                          I[a++] = u[w++];
                        while (--p);
                        if (w = 0, b < A) {
                          p = b, A -= p;
                          do
                            I[a++] = u[w++];
                          while (--p);
                          w = a - G, L = I;
                        }
                      }
                    } else if (w += b - p, p < A) {
                      A -= p;
                      do
                        I[a++] = u[w++];
                      while (--p);
                      w = a - G, L = I;
                    }
                    for (; A > 2; )
                      I[a++] = L[w++], I[a++] = L[w++], I[a++] = L[w++], A -= 3;
                    A && (I[a++] = L[w++], A > 1 && (I[a++] = L[w++]));
                  } else {
                    w = a - G;
                    do
                      I[a++] = I[w++], I[a++] = I[w++], I[a++] = I[w++], A -= 3;
                    while (A > 2);
                    A && (I[a++] = I[w++], A > 1 && (I[a++] = I[w++]));
                  }
                } else if (p & 64) {
                  t.msg = "invalid distance code", C.mode = Ut;
                  break e;
                } else {
                  k = x[(k & 65535) + (m & (1 << p) - 1)];
                  continue i;
                }
                break;
              }
          } else if (p & 64)
            if (p & 32) {
              C.mode = tl;
              break e;
            } else {
              t.msg = "invalid literal/length code", C.mode = Ut;
              break e;
            }
          else {
            k = y[(k & 65535) + (m & (1 << p) - 1)];
            continue t;
          }
          break;
        }
    } while (n < r && a < d);
  A = g >> 3, n -= A, g -= A << 3, m &= (1 << g) - 1, t.next_in = n, t.next_out = a, t.avail_in = n < r ? 5 + (r - n) : 5 - (n - r), t.avail_out = a < d ? 257 + (d - a) : 257 - (a - d), C.hold = m, C.bits = g;
};
const Qe = 15, vn = 852, yn = 592, wn = 0, _i = 1, En = 2, nl = new Uint16Array([
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
]), rl = new Uint8Array([
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
]), al = new Uint16Array([
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
]), ol = new Uint8Array([
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
]), dl = (i, t, e, n, r, a, o, d) => {
  const h = d.bits;
  let l = 0, s = 0, b = 0, u = 0, m = 0, g = 0, y = 0, x = 0, v = 0, E = 0, k, p, A, G, w, L = null, T;
  const I = new Uint16Array(Qe + 1), C = new Uint16Array(Qe + 1);
  let ve = null, ni, Ye, $t;
  for (l = 0; l <= Qe; l++)
    I[l] = 0;
  for (s = 0; s < n; s++)
    I[t[e + s]]++;
  for (m = h, u = Qe; u >= 1 && I[u] === 0; u--)
    ;
  if (m > u && (m = u), u === 0)
    return r[a++] = 1 << 24 | 64 << 16 | 0, r[a++] = 1 << 24 | 64 << 16 | 0, d.bits = 1, 0;
  for (b = 1; b < u && I[b] === 0; b++)
    ;
  for (m < b && (m = b), x = 1, l = 1; l <= Qe; l++)
    if (x <<= 1, x -= I[l], x < 0)
      return -1;
  if (x > 0 && (i === wn || u !== 1))
    return -1;
  for (C[1] = 0, l = 1; l < Qe; l++)
    C[l + 1] = C[l] + I[l];
  for (s = 0; s < n; s++)
    t[e + s] !== 0 && (o[C[t[e + s]]++] = s);
  if (i === wn ? (L = ve = o, T = 20) : i === _i ? (L = nl, ve = rl, T = 257) : (L = al, ve = ol, T = 0), E = 0, s = 0, l = b, w = a, g = m, y = 0, A = -1, v = 1 << m, G = v - 1, i === _i && v > vn || i === En && v > yn)
    return 1;
  for (; ; ) {
    ni = l - y, o[s] + 1 < T ? (Ye = 0, $t = o[s]) : o[s] >= T ? (Ye = ve[o[s] - T], $t = L[o[s] - T]) : (Ye = 32 + 64, $t = 0), k = 1 << l - y, p = 1 << g, b = p;
    do
      p -= k, r[w + (E >> y) + p] = ni << 24 | Ye << 16 | $t | 0;
    while (p !== 0);
    for (k = 1 << l - 1; E & k; )
      k >>= 1;
    if (k !== 0 ? (E &= k - 1, E += k) : E = 0, s++, --I[l] === 0) {
      if (l === u)
        break;
      l = t[e + o[s]];
    }
    if (l > m && (E & G) !== A) {
      for (y === 0 && (y = m), w += b, g = l - y, x = 1 << g; g + y < u && (x -= I[g + y], !(x <= 0)); )
        g++, x <<= 1;
      if (v += 1 << g, i === _i && v > vn || i === En && v > yn)
        return 1;
      A = E & G, r[A] = m << 24 | g << 16 | w - a | 0;
    }
  }
  return E !== 0 && (r[w + E] = l - y << 24 | 64 << 16 | 0), d.bits = m, 0;
};
var yt = dl;
const ll = 0, Br = 1, Pr = 2, {
  Z_FINISH: kn,
  Z_BLOCK: sl,
  Z_TREES: Vt,
  Z_OK: Ze,
  Z_STREAM_END: cl,
  Z_NEED_DICT: hl,
  Z_STREAM_ERROR: me,
  Z_DATA_ERROR: Nr,
  Z_MEM_ERROR: Hr,
  Z_BUF_ERROR: ml,
  Z_DEFLATED: In
} = st, ii = 16180, Sn = 16181, An = 16182, Rn = 16183, Tn = 16184, Cn = 16185, Ln = 16186, On = 16187, Fn = 16188, Dn = 16189, qt = 16190, we = 16191, gi = 16192, Mn = 16193, bi = 16194, zn = 16195, $n = 16196, Bn = 16197, Pn = 16198, Wt = 16199, Gt = 16200, Nn = 16201, Hn = 16202, Un = 16203, Vn = 16204, Wn = 16205, xi = 16206, Gn = 16207, Zn = 16208, N = 16209, Ur = 16210, Vr = 16211, fl = 852, ul = 592, pl = 15, _l = pl, Xn = (i) => (i >>> 24 & 255) + (i >>> 8 & 65280) + ((i & 65280) << 8) + ((i & 255) << 24);
function gl() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Xe = (i) => {
  if (!i)
    return 1;
  const t = i.state;
  return !t || t.strm !== i || t.mode < ii || t.mode > Vr ? 1 : 0;
}, Wr = (i) => {
  if (Xe(i))
    return me;
  const t = i.state;
  return i.total_in = i.total_out = t.total = 0, i.msg = "", t.wrap && (i.adler = t.wrap & 1), t.mode = ii, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(fl), t.distcode = t.distdyn = new Int32Array(ul), t.sane = 1, t.back = -1, Ze;
}, Gr = (i) => {
  if (Xe(i))
    return me;
  const t = i.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, Wr(i);
}, Zr = (i, t) => {
  let e;
  if (Xe(i))
    return me;
  const n = i.state;
  return t < 0 ? (e = 0, t = -t) : (e = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? me : (n.window !== null && n.wbits !== t && (n.window = null), n.wrap = e, n.wbits = t, Gr(i));
}, Xr = (i, t) => {
  if (!i)
    return me;
  const e = new gl();
  i.state = e, e.strm = i, e.window = null, e.mode = ii;
  const n = Zr(i, t);
  return n !== Ze && (i.state = null), n;
}, bl = (i) => Xr(i, _l);
let Yn = !0, vi, yi;
const xl = (i) => {
  if (Yn) {
    vi = new Int32Array(512), yi = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      i.lens[t++] = 8;
    for (; t < 256; )
      i.lens[t++] = 9;
    for (; t < 280; )
      i.lens[t++] = 7;
    for (; t < 288; )
      i.lens[t++] = 8;
    for (yt(Br, i.lens, 0, 288, vi, 0, i.work, { bits: 9 }), t = 0; t < 32; )
      i.lens[t++] = 5;
    yt(Pr, i.lens, 0, 32, yi, 0, i.work, { bits: 5 }), Yn = !1;
  }
  i.lencode = vi, i.lenbits = 9, i.distcode = yi, i.distbits = 5;
}, Yr = (i, t, e, n) => {
  let r;
  const a = i.state;
  return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), n >= a.wsize ? (a.window.set(t.subarray(e - a.wsize, e), 0), a.wnext = 0, a.whave = a.wsize) : (r = a.wsize - a.wnext, r > n && (r = n), a.window.set(t.subarray(e - n, e - n + r), a.wnext), n -= r, n ? (a.window.set(t.subarray(e - n, e), 0), a.wnext = n, a.whave = a.wsize) : (a.wnext += r, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += r))), 0;
}, vl = (i, t) => {
  let e, n, r, a, o, d, h, l, s, b, u, m, g, y, x = 0, v, E, k, p, A, G, w, L;
  const T = new Uint8Array(4);
  let I, C;
  const ve = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Xe(i) || !i.output || !i.input && i.avail_in !== 0)
    return me;
  e = i.state, e.mode === we && (e.mode = gi), o = i.next_out, r = i.output, h = i.avail_out, a = i.next_in, n = i.input, d = i.avail_in, l = e.hold, s = e.bits, b = d, u = h, L = Ze;
  e:
    for (; ; )
      switch (e.mode) {
        case ii:
          if (e.wrap === 0) {
            e.mode = gi;
            break;
          }
          for (; s < 16; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          if (e.wrap & 2 && l === 35615) {
            e.wbits === 0 && (e.wbits = 15), e.check = 0, T[0] = l & 255, T[1] = l >>> 8 & 255, e.check = X(e.check, T, 2, 0), l = 0, s = 0, e.mode = Sn;
            break;
          }
          if (e.head && (e.head.done = !1), !(e.wrap & 1) || /* check if zlib header allowed */
          (((l & 255) << 8) + (l >> 8)) % 31) {
            i.msg = "incorrect header check", e.mode = N;
            break;
          }
          if ((l & 15) !== In) {
            i.msg = "unknown compression method", e.mode = N;
            break;
          }
          if (l >>>= 4, s -= 4, w = (l & 15) + 8, e.wbits === 0 && (e.wbits = w), w > 15 || w > e.wbits) {
            i.msg = "invalid window size", e.mode = N;
            break;
          }
          e.dmax = 1 << e.wbits, e.flags = 0, i.adler = e.check = 1, e.mode = l & 512 ? Dn : we, l = 0, s = 0;
          break;
        case Sn:
          for (; s < 16; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          if (e.flags = l, (e.flags & 255) !== In) {
            i.msg = "unknown compression method", e.mode = N;
            break;
          }
          if (e.flags & 57344) {
            i.msg = "unknown header flags set", e.mode = N;
            break;
          }
          e.head && (e.head.text = l >> 8 & 1), e.flags & 512 && e.wrap & 4 && (T[0] = l & 255, T[1] = l >>> 8 & 255, e.check = X(e.check, T, 2, 0)), l = 0, s = 0, e.mode = An;
        case An:
          for (; s < 32; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          e.head && (e.head.time = l), e.flags & 512 && e.wrap & 4 && (T[0] = l & 255, T[1] = l >>> 8 & 255, T[2] = l >>> 16 & 255, T[3] = l >>> 24 & 255, e.check = X(e.check, T, 4, 0)), l = 0, s = 0, e.mode = Rn;
        case Rn:
          for (; s < 16; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          e.head && (e.head.xflags = l & 255, e.head.os = l >> 8), e.flags & 512 && e.wrap & 4 && (T[0] = l & 255, T[1] = l >>> 8 & 255, e.check = X(e.check, T, 2, 0)), l = 0, s = 0, e.mode = Tn;
        case Tn:
          if (e.flags & 1024) {
            for (; s < 16; ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            e.length = l, e.head && (e.head.extra_len = l), e.flags & 512 && e.wrap & 4 && (T[0] = l & 255, T[1] = l >>> 8 & 255, e.check = X(e.check, T, 2, 0)), l = 0, s = 0;
          } else
            e.head && (e.head.extra = null);
          e.mode = Cn;
        case Cn:
          if (e.flags & 1024 && (m = e.length, m > d && (m = d), m && (e.head && (w = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(
            n.subarray(
              a,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              a + m
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            w
          )), e.flags & 512 && e.wrap & 4 && (e.check = X(e.check, n, m, a)), d -= m, a += m, e.length -= m), e.length))
            break e;
          e.length = 0, e.mode = Ln;
        case Ln:
          if (e.flags & 2048) {
            if (d === 0)
              break e;
            m = 0;
            do
              w = n[a + m++], e.head && w && e.length < 65536 && (e.head.name += String.fromCharCode(w));
            while (w && m < d);
            if (e.flags & 512 && e.wrap & 4 && (e.check = X(e.check, n, m, a)), d -= m, a += m, w)
              break e;
          } else
            e.head && (e.head.name = null);
          e.length = 0, e.mode = On;
        case On:
          if (e.flags & 4096) {
            if (d === 0)
              break e;
            m = 0;
            do
              w = n[a + m++], e.head && w && e.length < 65536 && (e.head.comment += String.fromCharCode(w));
            while (w && m < d);
            if (e.flags & 512 && e.wrap & 4 && (e.check = X(e.check, n, m, a)), d -= m, a += m, w)
              break e;
          } else
            e.head && (e.head.comment = null);
          e.mode = Fn;
        case Fn:
          if (e.flags & 512) {
            for (; s < 16; ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            if (e.wrap & 4 && l !== (e.check & 65535)) {
              i.msg = "header crc mismatch", e.mode = N;
              break;
            }
            l = 0, s = 0;
          }
          e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), i.adler = e.check = 0, e.mode = we;
          break;
        case Dn:
          for (; s < 32; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          i.adler = e.check = Xn(l), l = 0, s = 0, e.mode = qt;
        case qt:
          if (e.havedict === 0)
            return i.next_out = o, i.avail_out = h, i.next_in = a, i.avail_in = d, e.hold = l, e.bits = s, hl;
          i.adler = e.check = 1, e.mode = we;
        case we:
          if (t === sl || t === Vt)
            break e;
        case gi:
          if (e.last) {
            l >>>= s & 7, s -= s & 7, e.mode = xi;
            break;
          }
          for (; s < 3; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          switch (e.last = l & 1, l >>>= 1, s -= 1, l & 3) {
            case 0:
              e.mode = Mn;
              break;
            case 1:
              if (xl(e), e.mode = Wt, t === Vt) {
                l >>>= 2, s -= 2;
                break e;
              }
              break;
            case 2:
              e.mode = $n;
              break;
            case 3:
              i.msg = "invalid block type", e.mode = N;
          }
          l >>>= 2, s -= 2;
          break;
        case Mn:
          for (l >>>= s & 7, s -= s & 7; s < 32; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          if ((l & 65535) !== (l >>> 16 ^ 65535)) {
            i.msg = "invalid stored block lengths", e.mode = N;
            break;
          }
          if (e.length = l & 65535, l = 0, s = 0, e.mode = bi, t === Vt)
            break e;
        case bi:
          e.mode = zn;
        case zn:
          if (m = e.length, m) {
            if (m > d && (m = d), m > h && (m = h), m === 0)
              break e;
            r.set(n.subarray(a, a + m), o), d -= m, a += m, h -= m, o += m, e.length -= m;
            break;
          }
          e.mode = we;
          break;
        case $n:
          for (; s < 14; ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          if (e.nlen = (l & 31) + 257, l >>>= 5, s -= 5, e.ndist = (l & 31) + 1, l >>>= 5, s -= 5, e.ncode = (l & 15) + 4, l >>>= 4, s -= 4, e.nlen > 286 || e.ndist > 30) {
            i.msg = "too many length or distance symbols", e.mode = N;
            break;
          }
          e.have = 0, e.mode = Bn;
        case Bn:
          for (; e.have < e.ncode; ) {
            for (; s < 3; ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            e.lens[ve[e.have++]] = l & 7, l >>>= 3, s -= 3;
          }
          for (; e.have < 19; )
            e.lens[ve[e.have++]] = 0;
          if (e.lencode = e.lendyn, e.lenbits = 7, I = { bits: e.lenbits }, L = yt(ll, e.lens, 0, 19, e.lencode, 0, e.work, I), e.lenbits = I.bits, L) {
            i.msg = "invalid code lengths set", e.mode = N;
            break;
          }
          e.have = 0, e.mode = Pn;
        case Pn:
          for (; e.have < e.nlen + e.ndist; ) {
            for (; x = e.lencode[l & (1 << e.lenbits) - 1], v = x >>> 24, E = x >>> 16 & 255, k = x & 65535, !(v <= s); ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            if (k < 16)
              l >>>= v, s -= v, e.lens[e.have++] = k;
            else {
              if (k === 16) {
                for (C = v + 2; s < C; ) {
                  if (d === 0)
                    break e;
                  d--, l += n[a++] << s, s += 8;
                }
                if (l >>>= v, s -= v, e.have === 0) {
                  i.msg = "invalid bit length repeat", e.mode = N;
                  break;
                }
                w = e.lens[e.have - 1], m = 3 + (l & 3), l >>>= 2, s -= 2;
              } else if (k === 17) {
                for (C = v + 3; s < C; ) {
                  if (d === 0)
                    break e;
                  d--, l += n[a++] << s, s += 8;
                }
                l >>>= v, s -= v, w = 0, m = 3 + (l & 7), l >>>= 3, s -= 3;
              } else {
                for (C = v + 7; s < C; ) {
                  if (d === 0)
                    break e;
                  d--, l += n[a++] << s, s += 8;
                }
                l >>>= v, s -= v, w = 0, m = 11 + (l & 127), l >>>= 7, s -= 7;
              }
              if (e.have + m > e.nlen + e.ndist) {
                i.msg = "invalid bit length repeat", e.mode = N;
                break;
              }
              for (; m--; )
                e.lens[e.have++] = w;
            }
          }
          if (e.mode === N)
            break;
          if (e.lens[256] === 0) {
            i.msg = "invalid code -- missing end-of-block", e.mode = N;
            break;
          }
          if (e.lenbits = 9, I = { bits: e.lenbits }, L = yt(Br, e.lens, 0, e.nlen, e.lencode, 0, e.work, I), e.lenbits = I.bits, L) {
            i.msg = "invalid literal/lengths set", e.mode = N;
            break;
          }
          if (e.distbits = 6, e.distcode = e.distdyn, I = { bits: e.distbits }, L = yt(Pr, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, I), e.distbits = I.bits, L) {
            i.msg = "invalid distances set", e.mode = N;
            break;
          }
          if (e.mode = Wt, t === Vt)
            break e;
        case Wt:
          e.mode = Gt;
        case Gt:
          if (d >= 6 && h >= 258) {
            i.next_out = o, i.avail_out = h, i.next_in = a, i.avail_in = d, e.hold = l, e.bits = s, il(i, u), o = i.next_out, r = i.output, h = i.avail_out, a = i.next_in, n = i.input, d = i.avail_in, l = e.hold, s = e.bits, e.mode === we && (e.back = -1);
            break;
          }
          for (e.back = 0; x = e.lencode[l & (1 << e.lenbits) - 1], v = x >>> 24, E = x >>> 16 & 255, k = x & 65535, !(v <= s); ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          if (E && !(E & 240)) {
            for (p = v, A = E, G = k; x = e.lencode[G + ((l & (1 << p + A) - 1) >> p)], v = x >>> 24, E = x >>> 16 & 255, k = x & 65535, !(p + v <= s); ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            l >>>= p, s -= p, e.back += p;
          }
          if (l >>>= v, s -= v, e.back += v, e.length = k, E === 0) {
            e.mode = Wn;
            break;
          }
          if (E & 32) {
            e.back = -1, e.mode = we;
            break;
          }
          if (E & 64) {
            i.msg = "invalid literal/length code", e.mode = N;
            break;
          }
          e.extra = E & 15, e.mode = Nn;
        case Nn:
          if (e.extra) {
            for (C = e.extra; s < C; ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            e.length += l & (1 << e.extra) - 1, l >>>= e.extra, s -= e.extra, e.back += e.extra;
          }
          e.was = e.length, e.mode = Hn;
        case Hn:
          for (; x = e.distcode[l & (1 << e.distbits) - 1], v = x >>> 24, E = x >>> 16 & 255, k = x & 65535, !(v <= s); ) {
            if (d === 0)
              break e;
            d--, l += n[a++] << s, s += 8;
          }
          if (!(E & 240)) {
            for (p = v, A = E, G = k; x = e.distcode[G + ((l & (1 << p + A) - 1) >> p)], v = x >>> 24, E = x >>> 16 & 255, k = x & 65535, !(p + v <= s); ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            l >>>= p, s -= p, e.back += p;
          }
          if (l >>>= v, s -= v, e.back += v, E & 64) {
            i.msg = "invalid distance code", e.mode = N;
            break;
          }
          e.offset = k, e.extra = E & 15, e.mode = Un;
        case Un:
          if (e.extra) {
            for (C = e.extra; s < C; ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            e.offset += l & (1 << e.extra) - 1, l >>>= e.extra, s -= e.extra, e.back += e.extra;
          }
          if (e.offset > e.dmax) {
            i.msg = "invalid distance too far back", e.mode = N;
            break;
          }
          e.mode = Vn;
        case Vn:
          if (h === 0)
            break e;
          if (m = u - h, e.offset > m) {
            if (m = e.offset - m, m > e.whave && e.sane) {
              i.msg = "invalid distance too far back", e.mode = N;
              break;
            }
            m > e.wnext ? (m -= e.wnext, g = e.wsize - m) : g = e.wnext - m, m > e.length && (m = e.length), y = e.window;
          } else
            y = r, g = o - e.offset, m = e.length;
          m > h && (m = h), h -= m, e.length -= m;
          do
            r[o++] = y[g++];
          while (--m);
          e.length === 0 && (e.mode = Gt);
          break;
        case Wn:
          if (h === 0)
            break e;
          r[o++] = e.length, h--, e.mode = Gt;
          break;
        case xi:
          if (e.wrap) {
            for (; s < 32; ) {
              if (d === 0)
                break e;
              d--, l |= n[a++] << s, s += 8;
            }
            if (u -= h, i.total_out += u, e.total += u, e.wrap & 4 && u && (i.adler = e.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            e.flags ? X(e.check, r, u, o - u) : St(e.check, r, u, o - u)), u = h, e.wrap & 4 && (e.flags ? l : Xn(l)) !== e.check) {
              i.msg = "incorrect data check", e.mode = N;
              break;
            }
            l = 0, s = 0;
          }
          e.mode = Gn;
        case Gn:
          if (e.wrap && e.flags) {
            for (; s < 32; ) {
              if (d === 0)
                break e;
              d--, l += n[a++] << s, s += 8;
            }
            if (e.wrap & 4 && l !== (e.total & 4294967295)) {
              i.msg = "incorrect length check", e.mode = N;
              break;
            }
            l = 0, s = 0;
          }
          e.mode = Zn;
        case Zn:
          L = cl;
          break e;
        case N:
          L = Nr;
          break e;
        case Ur:
          return Hr;
        case Vr:
        default:
          return me;
      }
  return i.next_out = o, i.avail_out = h, i.next_in = a, i.avail_in = d, e.hold = l, e.bits = s, (e.wsize || u !== i.avail_out && e.mode < N && (e.mode < xi || t !== kn)) && Yr(i, i.output, i.next_out, u - i.avail_out), b -= i.avail_in, u -= i.avail_out, i.total_in += b, i.total_out += u, e.total += u, e.wrap & 4 && u && (i.adler = e.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  e.flags ? X(e.check, r, u, i.next_out - u) : St(e.check, r, u, i.next_out - u)), i.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === we ? 128 : 0) + (e.mode === Wt || e.mode === bi ? 256 : 0), (b === 0 && u === 0 || t === kn) && L === Ze && (L = ml), L;
}, yl = (i) => {
  if (Xe(i))
    return me;
  let t = i.state;
  return t.window && (t.window = null), i.state = null, Ze;
}, wl = (i, t) => {
  if (Xe(i))
    return me;
  const e = i.state;
  return e.wrap & 2 ? (e.head = t, t.done = !1, Ze) : me;
}, El = (i, t) => {
  const e = t.length;
  let n, r, a;
  return Xe(i) || (n = i.state, n.wrap !== 0 && n.mode !== qt) ? me : n.mode === qt && (r = 1, r = St(r, t, e, 0), r !== n.check) ? Nr : (a = Yr(i, t, e, e), a ? (n.mode = Ur, Hr) : (n.havedict = 1, Ze));
};
var kl = Gr, Il = Zr, Sl = Wr, Al = bl, Rl = Xr, Tl = vl, Cl = yl, Ll = wl, Ol = El, Fl = "pako inflate (from Nodeca project)", ke = {
  inflateReset: kl,
  inflateReset2: Il,
  inflateResetKeep: Sl,
  inflateInit: Al,
  inflateInit2: Rl,
  inflate: Tl,
  inflateEnd: Cl,
  inflateGetHeader: Ll,
  inflateSetDictionary: Ol,
  inflateInfo: Fl
};
function Dl() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var Ml = Dl;
const Kr = Object.prototype.toString, {
  Z_NO_FLUSH: zl,
  Z_FINISH: $l,
  Z_OK: Tt,
  Z_STREAM_END: wi,
  Z_NEED_DICT: Ei,
  Z_STREAM_ERROR: Bl,
  Z_DATA_ERROR: Kn,
  Z_MEM_ERROR: Pl
} = st;
function zt(i) {
  this.options = ti.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, i || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(i && i.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15 || (t.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zr(), this.strm.avail_out = 0;
  let e = ke.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (e !== Tt)
    throw new Error(We[e]);
  if (this.header = new Ml(), ke.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Rt.string2buf(t.dictionary) : Kr.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (e = ke.inflateSetDictionary(this.strm, t.dictionary), e !== Tt)))
    throw new Error(We[e]);
}
zt.prototype.push = function(i, t) {
  const e = this.strm, n = this.options.chunkSize, r = this.options.dictionary;
  let a, o, d;
  if (this.ended)
    return !1;
  for (t === ~~t ? o = t : o = t === !0 ? $l : zl, Kr.call(i) === "[object ArrayBuffer]" ? e.input = new Uint8Array(i) : e.input = i, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    for (e.avail_out === 0 && (e.output = new Uint8Array(n), e.next_out = 0, e.avail_out = n), a = ke.inflate(e, o), a === Ei && r && (a = ke.inflateSetDictionary(e, r), a === Tt ? a = ke.inflate(e, o) : a === Kn && (a = Ei)); e.avail_in > 0 && a === wi && e.state.wrap > 0 && i[e.next_in] !== 0; )
      ke.inflateReset(e), a = ke.inflate(e, o);
    switch (a) {
      case Bl:
      case Kn:
      case Ei:
      case Pl:
        return this.onEnd(a), this.ended = !0, !1;
    }
    if (d = e.avail_out, e.next_out && (e.avail_out === 0 || a === wi))
      if (this.options.to === "string") {
        let h = Rt.utf8border(e.output, e.next_out), l = e.next_out - h, s = Rt.buf2string(e.output, h);
        e.next_out = l, e.avail_out = n - l, l && e.output.set(e.output.subarray(h, h + l), 0), this.onData(s);
      } else
        this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out));
    if (!(a === Tt && d === 0)) {
      if (a === wi)
        return a = ke.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
      if (e.avail_in === 0)
        break;
    }
  }
  return !0;
};
zt.prototype.onData = function(i) {
  this.chunks.push(i);
};
zt.prototype.onEnd = function(i) {
  i === Tt && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ti.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
function Ji(i, t) {
  const e = new zt(t);
  if (e.push(i), e.err)
    throw e.msg || We[e.err];
  return e.result;
}
function Nl(i, t) {
  return t = t || {}, t.raw = !0, Ji(i, t);
}
var Hl = zt, Ul = Ji, Vl = Nl, Wl = Ji, Gl = st, Zl = {
  Inflate: Hl,
  inflate: Ul,
  inflateRaw: Vl,
  ungzip: Wl,
  constants: Gl
};
const { Deflate: _s, deflate: Xl, deflateRaw: gs, gzip: bs } = el, { Inflate: Yl, inflate: xs, inflateRaw: vs, ungzip: ys } = Zl;
var Kl = Xl, ql = Yl;
function Xt(i) {
  return new Promise((t) => setTimeout(t, i));
}
async function jl(i) {
  await i.setRTS(!1), await i.setDTR(!1), await Xt(100), await i.setDTR(!0), await i.setRTS(!1), await Xt(100), await i.setRTS(!0), await i.setDTR(!1), await i.setRTS(!0), await Xt(100), await i.setRTS(!1), await i.setDTR(!1);
}
function Ql(i) {
  const t = ["D", "R", "W"], e = i.split("|");
  for (const n of e) {
    const r = n[0], a = n.slice(1);
    if (!t.includes(r))
      return !1;
    if (r === "D" || r === "R") {
      if (a !== "0" && a !== "1")
        return !1;
    } else if (r === "W") {
      const o = parseInt(a);
      if (isNaN(o) || o <= 0)
        return !1;
    }
  }
  return !0;
}
async function Jl(i, t) {
  const e = {
    D: async (n) => await i.setDTR(n),
    R: async (n) => await i.setRTS(n),
    W: async (n) => await Xt(n)
  };
  try {
    if (!Ql(t))
      return;
    const r = t.split("|");
    for (const a of r) {
      const o = a[0], d = a.slice(1);
      o === "W" ? await e.W(Number(d)) : (o === "D" || o === "R") && await e[o](d === "1");
    }
  } catch {
    throw new Error("Invalid custom reset sequence");
  }
}
async function es(i) {
  switch (i) {
    case 15736195: {
      const { ESP32ROM: t } = await import("./esp32-6376a250.js");
      return new t();
    }
    case 1763790959:
    case 456216687: {
      const { ESP32C3ROM: t } = await import("./esp32c3-28eade98.js");
      return new t();
    }
    case 752910447: {
      const { ESP32C6ROM: t } = await import("./esp32c6-79be3d3d.js");
      return new t();
    }
    case 3619110528: {
      const { ESP32H2ROM: t } = await import("./esp32h2-4e69a873.js");
      return new t();
    }
    case 9: {
      const { ESP32S3ROM: t } = await import("./esp32s3-62aed6c7.js");
      return new t();
    }
    case 1990: {
      const { ESP32S2ROM: t } = await import("./esp32s2-b1391b79.js");
      return new t();
    }
    case 4293968129: {
      const { ESP8266ROM: t } = await import("./esp8266-9be57b57.js");
      return new t();
    }
    default:
      return null;
  }
}
class ts {
  constructor(t) {
    this.ESP_RAM_BLOCK = 6144, this.ESP_FLASH_BEGIN = 2, this.ESP_FLASH_DATA = 3, this.ESP_FLASH_END = 4, this.ESP_MEM_BEGIN = 5, this.ESP_MEM_END = 6, this.ESP_MEM_DATA = 7, this.ESP_WRITE_REG = 9, this.ESP_READ_REG = 10, this.ESP_SPI_ATTACH = 13, this.ESP_CHANGE_BAUDRATE = 15, this.ESP_FLASH_DEFL_BEGIN = 16, this.ESP_FLASH_DEFL_DATA = 17, this.ESP_FLASH_DEFL_END = 18, this.ESP_SPI_FLASH_MD5 = 19, this.ESP_ERASE_FLASH = 208, this.ESP_ERASE_REGION = 209, this.ESP_RUN_USER_CODE = 211, this.ESP_IMAGE_MAGIC = 233, this.ESP_CHECKSUM_MAGIC = 239, this.ROM_INVALID_RECV_MSG = 5, this.ERASE_REGION_TIMEOUT_PER_MB = 3e4, this.ERASE_WRITE_TIMEOUT_PER_MB = 4e4, this.MD5_TIMEOUT_PER_MB = 8e3, this.CHIP_ERASE_TIMEOUT = 12e4, this.MAX_TIMEOUT = this.CHIP_ERASE_TIMEOUT * 2, this.CHIP_DETECT_MAGIC_REG_ADDR = 1073745920, this.DETECTED_FLASH_SIZES = {
      18: "256KB",
      19: "512KB",
      20: "1MB",
      21: "2MB",
      22: "4MB",
      23: "8MB",
      24: "16MB"
    }, this.USB_JTAG_SERIAL_PID = 4097, this.romBaudrate = 115200, this.debugLogging = !1, this.checksum = function(e) {
      let n, r = 239;
      for (n = 0; n < e.length; n++)
        r ^= e[n];
      return r;
    }, this.timeout_per_mb = function(e, n) {
      const r = e * (n / 1e6);
      return r < 3e3 ? 3e3 : r;
    }, this.flash_size_bytes = function(e) {
      let n = -1;
      return e.indexOf("KB") !== -1 ? n = parseInt(e.slice(0, e.indexOf("KB"))) * 1024 : e.indexOf("MB") !== -1 && (n = parseInt(e.slice(0, e.indexOf("MB"))) * 1024 * 1024), n;
    }, this.IS_STUB = !1, this.FLASH_WRITE_SIZE = 16384, this.transport = t.transport, this.baudrate = t.baudrate, t.romBaudrate && (this.romBaudrate = t.romBaudrate), t.terminal && (this.terminal = t.terminal, this.terminal.clean()), t.debugLogging && (this.debugLogging = t.debugLogging), this.info("esptool.js"), this.info("Serial port " + this.transport.get_info());
  }
  _sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  write(t, e = !0) {
    this.terminal ? e ? this.terminal.writeLine(t) : this.terminal.write(t) : console.log(t);
  }
  error(t, e = !0) {
    this.write(`Error: ${t}`, e);
  }
  info(t, e = !0) {
    this.write(t, e);
  }
  debug(t, e = !0) {
    this.debugLogging && this.write(`Debug: ${t}`, e);
  }
  _short_to_bytearray(t) {
    return new Uint8Array([t & 255, t >> 8 & 255]);
  }
  _int_to_bytearray(t) {
    return new Uint8Array([t & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]);
  }
  _bytearray_to_short(t, e) {
    return t | e >> 8;
  }
  _bytearray_to_int(t, e, n, r) {
    return t | e << 8 | n << 16 | r << 24;
  }
  _appendBuffer(t, e) {
    const n = new Uint8Array(t.byteLength + e.byteLength);
    return n.set(new Uint8Array(t), 0), n.set(new Uint8Array(e), t.byteLength), n.buffer;
  }
  _appendArray(t, e) {
    const n = new Uint8Array(t.length + e.length);
    return n.set(t, 0), n.set(e, t.length), n;
  }
  ui8ToBstr(t) {
    let e = "";
    for (let n = 0; n < t.length; n++)
      e += String.fromCharCode(t[n]);
    return e;
  }
  bstrToUi8(t) {
    const e = new Uint8Array(t.length);
    for (let n = 0; n < t.length; n++)
      e[n] = t.charCodeAt(n);
    return e;
  }
  async flush_input() {
    try {
      await this.transport.rawRead(200);
    } catch (t) {
      this.error(t.message);
    }
  }
  async command(t = null, e = new Uint8Array(0), n = 0, r = !0, a = 3e3) {
    if (t != null) {
      const o = new Uint8Array(8 + e.length);
      o[0] = 0, o[1] = t, o[2] = this._short_to_bytearray(e.length)[0], o[3] = this._short_to_bytearray(e.length)[1], o[4] = this._int_to_bytearray(n)[0], o[5] = this._int_to_bytearray(n)[1], o[6] = this._int_to_bytearray(n)[2], o[7] = this._int_to_bytearray(n)[3];
      let d;
      for (d = 0; d < e.length; d++)
        o[8 + d] = e[d];
      await this.transport.write(o);
    }
    if (!r)
      return [0, new Uint8Array(0)];
    for (let o = 0; o < 100; o++) {
      const d = await this.transport.read(a), h = d[0], l = d[1], s = this._bytearray_to_int(d[4], d[5], d[6], d[7]), b = d.slice(8);
      if (h == 1) {
        if (t == null || l == t)
          return [s, b];
        if (b[0] != 0 && b[1] == this.ROM_INVALID_RECV_MSG)
          throw await this.flush_input(), new de("unsupported command error");
      }
    }
    throw new de("invalid response");
  }
  async read_reg(t, e = 3e3) {
    const n = this._int_to_bytearray(t);
    return (await this.command(this.ESP_READ_REG, n, void 0, void 0, e))[0];
  }
  async write_reg(t, e, n = 4294967295, r = 0, a = 0) {
    let o = this._appendArray(this._int_to_bytearray(t), this._int_to_bytearray(e));
    o = this._appendArray(o, this._int_to_bytearray(n)), o = this._appendArray(o, this._int_to_bytearray(r)), a > 0 && (o = this._appendArray(o, this._int_to_bytearray(this.chip.UART_DATE_REG_ADDR)), o = this._appendArray(o, this._int_to_bytearray(0)), o = this._appendArray(o, this._int_to_bytearray(0)), o = this._appendArray(o, this._int_to_bytearray(a))), await this.check_command("write target memory", this.ESP_WRITE_REG, o);
  }
  async sync() {
    this.debug("Sync");
    const t = new Uint8Array(36);
    let e;
    for (t[0] = 7, t[1] = 7, t[2] = 18, t[3] = 32, e = 0; e < 32; e++)
      t[4 + e] = 85;
    try {
      return await this.command(8, t, void 0, void 0, 100);
    } catch (n) {
      throw this.debug("Sync err " + n), n;
    }
  }
  async _connect_attempt(t = "default_reset", e = !1) {
    if (this.debug("_connect_attempt " + t + " " + e), t !== "no_reset")
      if (this.transport.get_pid() === this.USB_JTAG_SERIAL_PID)
        await jl(this.transport);
      else {
        const a = e ? "D0|R1|W100|W2000|D1|R0|W50|D0" : "D0|R1|W100|D1|R0|W50|D0";
        await Jl(this.transport, a);
      }
    let n = 0, r = !0;
    for (; r; ) {
      try {
        const a = await this.transport.read(1e3);
        n += a.length;
      } catch (a) {
        if (this.debug(a.message), a instanceof Error) {
          r = !1;
          break;
        }
      }
      await this._sleep(50);
    }
    for (this.transport.slip_reader_enabled = !0, n = 7; n--; ) {
      try {
        const a = await this.sync();
        return this.debug(a[0].toString()), "success";
      } catch (a) {
        a instanceof Error && (e ? this.info("_", !1) : this.info(".", !1));
      }
      await this._sleep(50);
    }
    return "error";
  }
  async connect(t = "default_reset", e = 7, n = !1) {
    let r, a;
    for (this.info("Connecting...", !1), await this.transport.connect(this.romBaudrate), r = 0; r < e && (a = await this._connect_attempt(t, !1), !(a === "success" || (a = await this._connect_attempt(t, !0), a === "success"))); r++)
      ;
    if (a !== "success")
      throw new de("Failed to connect with the device");
    if (this.info(`
\r`, !1), !n) {
      const o = await this.read_reg(1073745920) >>> 0;
      this.debug("Chip Magic " + o.toString(16));
      const d = await es(o);
      if (this.chip === null)
        throw new de(`Unexpected CHIP magic value ${o}. Failed to autodetect chip type.`);
      this.chip = d;
    }
  }
  async detect_chip(t = "default_reset") {
    await this.connect(t), this.info("Detecting chip type... ", !1), this.chip != null ? this.info(this.chip.CHIP_NAME) : this.info("unknown!");
  }
  async check_command(t = "", e = null, n = new Uint8Array(0), r = 0, a = 3e3) {
    this.debug("check_command " + t);
    const o = await this.command(e, n, r, void 0, a);
    return o[1].length > 4 ? o[1] : o[0];
  }
  async mem_begin(t, e, n, r) {
    this.debug("mem_begin " + t + " " + e + " " + n + " " + r.toString(16));
    let a = this._appendArray(this._int_to_bytearray(t), this._int_to_bytearray(e));
    a = this._appendArray(a, this._int_to_bytearray(n)), a = this._appendArray(a, this._int_to_bytearray(r)), await this.check_command("enter RAM download mode", this.ESP_MEM_BEGIN, a);
  }
  async mem_block(t, e) {
    let n = this._appendArray(this._int_to_bytearray(t.length), this._int_to_bytearray(e));
    n = this._appendArray(n, this._int_to_bytearray(0)), n = this._appendArray(n, this._int_to_bytearray(0)), n = this._appendArray(n, t);
    const r = this.checksum(t);
    await this.check_command("write to target RAM", this.ESP_MEM_DATA, n, r);
  }
  async mem_finish(t) {
    const e = t === 0 ? 1 : 0, n = this._appendArray(this._int_to_bytearray(e), this._int_to_bytearray(t));
    await this.check_command("leave RAM download mode", this.ESP_MEM_END, n, void 0, 50);
  }
  async flash_spi_attach(t) {
    const e = this._int_to_bytearray(t);
    await this.check_command("configure SPI flash pins", this.ESP_SPI_ATTACH, e);
  }
  async flash_begin(t, e) {
    const n = Math.floor((t + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE), r = this.chip.get_erase_size(e, t), a = /* @__PURE__ */ new Date(), o = a.getTime();
    let d = 3e3;
    this.IS_STUB == !1 && (d = this.timeout_per_mb(this.ERASE_REGION_TIMEOUT_PER_MB, t)), this.debug("flash begin " + r + " " + n + " " + this.FLASH_WRITE_SIZE + " " + e + " " + t);
    let h = this._appendArray(this._int_to_bytearray(r), this._int_to_bytearray(n));
    h = this._appendArray(h, this._int_to_bytearray(this.FLASH_WRITE_SIZE)), h = this._appendArray(h, this._int_to_bytearray(e)), this.IS_STUB == !1 && (h = this._appendArray(h, this._int_to_bytearray(0))), await this.check_command("enter Flash download mode", this.ESP_FLASH_BEGIN, h, void 0, d);
    const l = a.getTime();
    return t != 0 && this.IS_STUB == !1 && this.info("Took " + (l - o) / 1e3 + "." + (l - o) % 1e3 + "s to erase flash block"), n;
  }
  async flash_defl_begin(t, e, n) {
    const r = Math.floor((e + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE), a = Math.floor((t + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE), o = /* @__PURE__ */ new Date(), d = o.getTime();
    let h, l;
    this.IS_STUB ? (h = t, l = 3e3) : (h = a * this.FLASH_WRITE_SIZE, l = this.timeout_per_mb(this.ERASE_REGION_TIMEOUT_PER_MB, h)), this.info("Compressed " + t + " bytes to " + e + "...");
    let s = this._appendArray(this._int_to_bytearray(h), this._int_to_bytearray(r));
    s = this._appendArray(s, this._int_to_bytearray(this.FLASH_WRITE_SIZE)), s = this._appendArray(s, this._int_to_bytearray(n)), (this.chip.CHIP_NAME === "ESP32-S2" || this.chip.CHIP_NAME === "ESP32-S3" || this.chip.CHIP_NAME === "ESP32-C3") && this.IS_STUB === !1 && (s = this._appendArray(s, this._int_to_bytearray(0))), await this.check_command("enter compressed flash mode", this.ESP_FLASH_DEFL_BEGIN, s, void 0, l);
    const b = o.getTime();
    return t != 0 && this.IS_STUB === !1 && this.info("Took " + (b - d) / 1e3 + "." + (b - d) % 1e3 + "s to erase flash block"), r;
  }
  async flash_block(t, e, n) {
    let r = this._appendArray(this._int_to_bytearray(t.length), this._int_to_bytearray(e));
    r = this._appendArray(r, this._int_to_bytearray(0)), r = this._appendArray(r, this._int_to_bytearray(0)), r = this._appendArray(r, t);
    const a = this.checksum(t);
    await this.check_command("write to target Flash after seq " + e, this.ESP_FLASH_DATA, r, a, n);
  }
  async flash_defl_block(t, e, n) {
    let r = this._appendArray(this._int_to_bytearray(t.length), this._int_to_bytearray(e));
    r = this._appendArray(r, this._int_to_bytearray(0)), r = this._appendArray(r, this._int_to_bytearray(0)), r = this._appendArray(r, t);
    const a = this.checksum(t);
    this.debug("flash_defl_block " + t[0].toString(16) + " " + t[1].toString(16)), await this.check_command("write compressed data to flash after seq " + e, this.ESP_FLASH_DEFL_DATA, r, a, n);
  }
  async flash_finish(t = !1) {
    const e = t ? 0 : 1, n = this._int_to_bytearray(e);
    await this.check_command("leave Flash mode", this.ESP_FLASH_END, n);
  }
  async flash_defl_finish(t = !1) {
    const e = t ? 0 : 1, n = this._int_to_bytearray(e);
    await this.check_command("leave compressed flash mode", this.ESP_FLASH_DEFL_END, n);
  }
  async run_spiflash_command(t, e, n) {
    const d = this.chip.SPI_REG_BASE, h = d + 0, l = d + this.chip.SPI_USR_OFFS, s = d + this.chip.SPI_USR1_OFFS, b = d + this.chip.SPI_USR2_OFFS, u = d + this.chip.SPI_W0_OFFS;
    let m;
    this.chip.SPI_MOSI_DLEN_OFFS != null ? m = async (w, L) => {
      const T = d + this.chip.SPI_MOSI_DLEN_OFFS, I = d + this.chip.SPI_MISO_DLEN_OFFS;
      w > 0 && await this.write_reg(T, w - 1), L > 0 && await this.write_reg(I, L - 1);
    } : m = async (w, L) => {
      const T = s, I = 17, C = 8, ve = w === 0 ? 0 : w - 1, Ye = (L === 0 ? 0 : L - 1) << C | ve << I;
      await this.write_reg(T, Ye);
    };
    const g = 1 << 18, y = 28;
    if (n > 32)
      throw new de("Reading more than 32 bits back from a SPI flash operation is unsupported");
    if (e.length > 64)
      throw new de("Writing more than 64 bytes of data with one SPI command is unsupported");
    const x = e.length * 8, v = await this.read_reg(l), E = await this.read_reg(b);
    let k = -2147483648, p;
    n > 0 && (k |= 268435456), x > 0 && (k |= 134217728), await m(x, n), await this.write_reg(l, k);
    let A = 7 << y | t;
    if (await this.write_reg(b, A), x == 0)
      await this.write_reg(u, 0);
    else {
      if (e.length % 4 != 0) {
        const L = new Uint8Array(e.length % 4);
        e = this._appendArray(e, L);
      }
      let w = u;
      for (p = 0; p < e.length - 4; p += 4)
        A = this._bytearray_to_int(e[p], e[p + 1], e[p + 2], e[p + 3]), await this.write_reg(w, A), w += 4;
    }
    for (await this.write_reg(h, g), p = 0; p < 10 && (A = await this.read_reg(h) & g, A != 0); p++)
      ;
    if (p === 10)
      throw new de("SPI command did not complete in time");
    const G = await this.read_reg(u);
    return await this.write_reg(l, v), await this.write_reg(b, E), G;
  }
  async read_flash_id() {
    const e = new Uint8Array(0);
    return await this.run_spiflash_command(159, e, 24);
  }
  async erase_flash() {
    this.info("Erasing flash (this may take a while)...");
    let t = /* @__PURE__ */ new Date();
    const e = t.getTime(), n = await this.check_command("erase flash", this.ESP_ERASE_FLASH, void 0, void 0, this.CHIP_ERASE_TIMEOUT);
    t = /* @__PURE__ */ new Date();
    const r = t.getTime();
    return this.info("Chip erase completed successfully in " + (r - e) / 1e3 + "s"), n;
  }
  toHex(t) {
    return Array.prototype.map.call(t, (e) => ("00" + e.toString(16)).slice(-2)).join("");
  }
  async flash_md5sum(t, e) {
    const n = this.timeout_per_mb(this.MD5_TIMEOUT_PER_MB, e);
    let r = this._appendArray(this._int_to_bytearray(t), this._int_to_bytearray(e));
    r = this._appendArray(r, this._int_to_bytearray(0)), r = this._appendArray(r, this._int_to_bytearray(0));
    let a = await this.check_command("calculate md5sum", this.ESP_SPI_FLASH_MD5, r, void 0, n);
    return a instanceof Uint8Array && a.length > 16 && (a = a.slice(0, 16)), this.toHex(a);
  }
  async run_stub() {
    this.info("Uploading stub...");
    let t = atob(this.chip.ROM_TEXT), e = t.split("").map(function(d) {
      return d.charCodeAt(0);
    });
    const n = new Uint8Array(e);
    t = atob(this.chip.ROM_DATA), e = t.split("").map(function(d) {
      return d.charCodeAt(0);
    });
    const r = new Uint8Array(e);
    let a = Math.floor((n.length + this.ESP_RAM_BLOCK - 1) / this.ESP_RAM_BLOCK), o;
    for (await this.mem_begin(n.length, a, this.ESP_RAM_BLOCK, this.chip.TEXT_START), o = 0; o < a; o++) {
      const d = o * this.ESP_RAM_BLOCK, h = d + this.ESP_RAM_BLOCK;
      await this.mem_block(n.slice(d, h), o);
    }
    for (a = Math.floor((r.length + this.ESP_RAM_BLOCK - 1) / this.ESP_RAM_BLOCK), await this.mem_begin(r.length, a, this.ESP_RAM_BLOCK, this.chip.DATA_START), o = 0; o < a; o++) {
      const d = o * this.ESP_RAM_BLOCK, h = d + this.ESP_RAM_BLOCK;
      await this.mem_block(r.slice(d, h), o);
    }
    this.info("Running stub..."), await this.mem_finish(this.chip.ENTRY);
    for (let d = 0; d < 100; d++) {
      const h = await this.transport.read(1e3, 6);
      if (h[0] === 79 && h[1] === 72 && h[2] === 65 && h[3] === 73)
        return this.info("Stub running..."), this.IS_STUB = !0, this.FLASH_WRITE_SIZE = 16384, this.chip;
    }
    throw new de("Failed to start stub. Unexpected response");
  }
  async change_baud() {
    this.info("Changing baudrate to " + this.baudrate);
    const t = this.IS_STUB ? this.transport.baudrate : 0, e = this._appendArray(this._int_to_bytearray(this.baudrate), this._int_to_bytearray(t)), n = await this.command(this.ESP_CHANGE_BAUDRATE, e);
    this.debug(n[0].toString()), this.info("Changed"), await this.transport.disconnect(), await this._sleep(50), await this.transport.connect(this.baudrate);
    try {
      await this.transport.rawRead(500);
    } catch (r) {
      this.debug(r.message);
    }
  }
  async main_fn(t = "default_reset") {
    await this.detect_chip(t);
    const e = await this.chip.get_chip_description(this);
    return this.info("Chip is " + e), this.info("Features: " + await this.chip.get_chip_features(this)), this.info("Crystal is " + await this.chip.get_crystal_freq(this) + "MHz"), this.info("MAC: " + await this.chip.read_mac(this)), await this.chip.read_mac(this), typeof this.chip._post_connect < "u" && await this.chip._post_connect(this), await this.run_stub(), this.romBaudrate !== this.baudrate && await this.change_baud(), e;
  }
  parse_flash_size_arg(t) {
    if (typeof this.chip.FLASH_SIZES[t] > "u")
      throw new de("Flash size " + t + " is not supported by this chip type. Supported sizes: " + this.chip.FLASH_SIZES);
    return this.chip.FLASH_SIZES[t];
  }
  _update_image_flash_params(t, e, n, r, a) {
    if (this.debug("_update_image_flash_params " + n + " " + r + " " + a), t.length < 8 || e != this.chip.BOOTLOADER_FLASH_OFFSET)
      return t;
    if (n === "keep" && r === "keep" && a === "keep")
      return this.info("Not changing the image"), t;
    const o = parseInt(t[0]);
    let d = parseInt(t[2]);
    const h = parseInt(t[3]);
    if (o !== this.ESP_IMAGE_MAGIC)
      return this.info("Warning: Image file at 0x" + e.toString(16) + " doesn't look like an image file, so not changing any flash settings."), t;
    r !== "keep" && (d = { qio: 0, qout: 1, dio: 2, dout: 3 }[r]);
    let l = h & 15;
    a !== "keep" && (l = { "40m": 0, "26m": 1, "20m": 2, "80m": 15 }[a]);
    let s = h & 240;
    n !== "keep" && (s = this.parse_flash_size_arg(n));
    const b = d << 8 | l + s;
    return this.info("Flash params set to " + b.toString(16)), parseInt(t[2]) !== d << 8 && (t = t.substring(0, 2) + (d << 8).toString() + t.substring(2 + 1)), parseInt(t[3]) !== l + s && (t = t.substring(0, 3) + (l + s).toString() + t.substring(3 + 1)), t;
  }
  async write_flash(t) {
    if (this.debug("EspLoader program"), t.flashSize !== "keep") {
      const r = this.flash_size_bytes(t.flashSize);
      for (let a = 0; a < t.fileArray.length; a++)
        if (t.fileArray[a].data.length + t.fileArray[a].address > r)
          throw new de(`File ${a + 1} doesn't fit in the available flash`);
    }
    this.IS_STUB === !0 && t.eraseAll === !0 && await this.erase_flash();
    let e, n;
    for (let r = 0; r < t.fileArray.length; r++) {
      this.debug("Data Length " + t.fileArray[r].data.length), e = t.fileArray[r].data;
      const a = t.fileArray[r].data.length % 4;
      if (a > 0 && (e += "ÿÿÿÿ".substring(4 - a)), n = t.fileArray[r].address, this.debug("Image Length " + e.length), e.length === 0) {
        this.debug("Warning: File is empty");
        continue;
      }
      e = this._update_image_flash_params(e, n, t.flashSize, t.flashMode, t.flashFreq);
      let o = null;
      t.calculateMD5Hash && (o = t.calculateMD5Hash(e), this.debug("Image MD5 " + o));
      const d = e.length;
      let h;
      if (t.compress) {
        const E = this.bstrToUi8(e);
        e = this.ui8ToBstr(Kl(E, { level: 9 })), h = await this.flash_defl_begin(d, e.length, n);
      } else
        h = await this.flash_begin(d, n);
      let l = 0, s = 0;
      const b = e.length;
      t.reportProgress && t.reportProgress(r, 0, b);
      let u = /* @__PURE__ */ new Date();
      const m = u.getTime();
      let g = 5e3;
      const y = new ql({ chunkSize: 1 });
      let x = 0;
      for (y.onData = function(E) {
        x += E.byteLength;
      }; e.length > 0; ) {
        this.debug("Write loop " + n + " " + l + " " + h), this.info("Writing at 0x" + (n + x).toString(16) + "... (" + Math.floor(100 * (l + 1) / h) + "%)");
        const E = this.bstrToUi8(e.slice(0, this.FLASH_WRITE_SIZE));
        if (t.compress) {
          const k = x;
          y.push(E, !1);
          const p = x - k;
          let A = 3e3;
          this.timeout_per_mb(this.ERASE_WRITE_TIMEOUT_PER_MB, p) > 3e3 && (A = this.timeout_per_mb(this.ERASE_WRITE_TIMEOUT_PER_MB, p)), this.IS_STUB === !1 && (g = A), await this.flash_defl_block(E, l, g), this.IS_STUB && (g = A);
        } else
          throw new de("Yet to handle Non Compressed writes");
        s += E.length, e = e.slice(this.FLASH_WRITE_SIZE, e.length), l++, t.reportProgress && t.reportProgress(r, s, b);
      }
      this.IS_STUB && await this.read_reg(this.CHIP_DETECT_MAGIC_REG_ADDR, g), u = /* @__PURE__ */ new Date();
      const v = u.getTime() - m;
      if (t.compress && this.info("Wrote " + d + " bytes (" + s + " compressed) at 0x" + n.toString(16) + " in " + v / 1e3 + " seconds."), o) {
        const E = await this.flash_md5sum(n, d);
        if (new String(E).valueOf() != new String(o).valueOf())
          throw this.info("File  md5: " + o), this.info("Flash md5: " + E), new de("MD5 of file does not match data in flash!");
        this.info("Hash of data verified.");
      }
    }
    this.info("Leaving..."), this.IS_STUB && (await this.flash_begin(0, 0), t.compress ? await this.flash_defl_finish() : await this.flash_finish());
  }
  async flash_id() {
    this.debug("flash_id");
    const t = await this.read_flash_id();
    this.info("Manufacturer: " + (t & 255).toString(16));
    const e = t >> 16 & 255;
    this.info("Device: " + (t >> 8 & 255).toString(16) + e.toString(16)), this.info("Detected flash size: " + this.DETECTED_FLASH_SIZES[e]);
  }
  async hard_reset() {
    await this.transport.setRTS(!0), await this._sleep(100), await this.transport.setRTS(!1);
  }
  async soft_reset() {
    if (!this.IS_STUB)
      await this.flash_begin(0, 0), await this.flash_finish(!1);
    else {
      if (this.chip.CHIP_NAME != "ESP8266")
        throw new de("Soft resetting is currently only supported on ESP8266");
      await this.command(this.ESP_RUN_USER_CODE, void 0, void 0, !1);
    }
  }
}
class is {
  constructor(t) {
    this.device = t, this.slip_reader_enabled = !1, this.left_over = new Uint8Array(0), this.baudrate = 0, this._DTR_state = !1;
  }
  get_info() {
    const t = this.device.getInfo();
    return t.usbVendorId && t.usbProductId ? `WebSerial VendorID 0x${t.usbVendorId.toString(16)} ProductID 0x${t.usbProductId.toString(16)}` : "";
  }
  get_pid() {
    return this.device.getInfo().usbProductId;
  }
  slip_writer(t) {
    let e = 0, n = 0, r = 0;
    for (n = 0; n < t.length; n++)
      (t[n] === 192 || t[n] === 219) && e++;
    const a = new Uint8Array(2 + e + t.length);
    for (a[0] = 192, r = 1, n = 0; n < t.length; n++, r++) {
      if (t[n] === 192) {
        a[r++] = 219, a[r] = 220;
        continue;
      }
      if (t[n] === 219) {
        a[r++] = 219, a[r] = 221;
        continue;
      }
      a[r] = t[n];
    }
    return a[r] = 192, a;
  }
  async write(t) {
    const e = this.slip_writer(t);
    if (this.device.writable) {
      const n = this.device.writable.getWriter();
      await n.write(e), n.releaseLock();
    }
  }
  _appendBuffer(t, e) {
    const n = new Uint8Array(t.byteLength + e.byteLength);
    return n.set(new Uint8Array(t), 0), n.set(new Uint8Array(e), t.byteLength), n.buffer;
  }
  /* this function expects complete packet (hence reader reads for atleast 8 bytes. This function is
   * stateless and returns the first wellformed packet only after replacing escape sequence */
  slip_reader(t) {
    let e = 0, n = 0, r = 0, a = "init";
    for (; e < t.length; ) {
      if (a === "init" && t[e] == 192) {
        n = e + 1, a = "valid_data", e++;
        continue;
      }
      if (a === "valid_data" && t[e] == 192) {
        r = e - 1, a = "packet_complete";
        break;
      }
      e++;
    }
    if (a !== "packet_complete")
      return this.left_over = t, new Uint8Array(0);
    this.left_over = t.slice(r + 2);
    const o = new Uint8Array(r - n + 1);
    let d = 0;
    for (e = n; e <= r; e++, d++) {
      if (t[e] === 219 && t[e + 1] === 220) {
        o[d] = 192, e++;
        continue;
      }
      if (t[e] === 219 && t[e + 1] === 221) {
        o[d] = 219, e++;
        continue;
      }
      o[d] = t[e];
    }
    return o.slice(0, d);
  }
  async read(t = 0, e = 12) {
    let n, r = this.left_over;
    if (this.left_over = new Uint8Array(0), this.slip_reader_enabled) {
      const o = this.slip_reader(r);
      if (o.length > 0)
        return o;
      r = this.left_over, this.left_over = new Uint8Array(0);
    }
    if (this.device.readable == null)
      return this.left_over;
    const a = this.device.readable.getReader();
    try {
      t > 0 && (n = setTimeout(function() {
        a.cancel();
      }, t));
      do {
        const { value: o, done: d } = await a.read();
        if (d)
          throw this.left_over = r, new Error("Timeout");
        r = new Uint8Array(this._appendBuffer(r.buffer, o.buffer));
      } while (r.length < e);
    } finally {
      t > 0 && clearTimeout(n), a.releaseLock();
    }
    return this.slip_reader_enabled ? this.slip_reader(r) : r;
  }
  async rawRead(t = 0) {
    if (this.left_over.length != 0) {
      const r = this.left_over;
      return this.left_over = new Uint8Array(0), r;
    }
    if (!this.device.readable)
      return this.left_over;
    const e = this.device.readable.getReader();
    let n;
    try {
      t > 0 && (n = setTimeout(function() {
        e.cancel();
      }, t));
      const { value: r, done: a } = await e.read();
      if (a)
        throw new Error("Timeout");
      return r;
    } finally {
      t > 0 && clearTimeout(n), e.releaseLock();
    }
  }
  async setRTS(t) {
    await this.device.setSignals({ requestToSend: t }), await this.setDTR(this._DTR_state);
  }
  async setDTR(t) {
    this._DTR_state = t, await this.device.setSignals({ dataTerminalReady: t });
  }
  async connect(t = 115200) {
    await this.device.open({ baudRate: t }), this.baudrate = t, this.left_over = new Uint8Array(0);
  }
  async sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  async waitForUnlock(t) {
    for (; this.device.readable && this.device.readable.locked || this.device.writable && this.device.writable.locked; )
      await this.sleep(t);
  }
  async disconnect() {
    await this.waitForUnlock(400), await this.device.close();
  }
}
const Je = async (i) => {
  await i.device.setSignals({
    dataTerminalReady: !1,
    requestToSend: !0
  }), await i.device.setSignals({
    dataTerminalReady: !1,
    requestToSend: !1
  });
}, ns = async (i, t, e, n, r) => {
  let a, o;
  const d = (y) => i({
    ...y,
    manifest: n,
    build: a,
    chipFamily: o
  }), h = new is(t), l = new ts({
    transport: h,
    baudrate: 115200,
    romBaudrate: 115200
  });
  window.esploader = l, d({
    state: "initializing",
    message: "Initializing...",
    details: { done: !1 }
  });
  try {
    await l.main_fn(), await l.flash_id();
  } catch (y) {
    console.error(y), d({
      state: "error",
      message: "Failed to initialize. Try resetting your device or holding the BOOT button while clicking INSTALL.",
      details: { error: "failed_initialize", details: y }
    }), await Je(h), await h.disconnect();
    return;
  }
  if (o = l.chip.CHIP_NAME, !l.chip.ROM_TEXT) {
    d({
      state: "error",
      message: `Chip ${o} is not supported`,
      details: {
        error: "not_supported",
        details: `Chip ${o} is not supported`
      }
    }), await Je(h), await h.disconnect();
    return;
  }
  if (d({
    state: "initializing",
    message: `Initialized. Found ${o}`,
    details: { done: !0 }
  }), a = n.builds.find((y) => y.chipFamily === o), !a) {
    d({
      state: "error",
      message: `Your ${o} board is not supported.`,
      details: { error: "not_supported", details: o }
    }), await Je(h), await h.disconnect();
    return;
  }
  d({
    state: "preparing",
    message: "Preparing installation...",
    details: { done: !1 }
  });
  const s = new URL(e, location.toString()).toString(), b = a.parts.map(async (y) => {
    const x = new URL(y.path, s).toString(), v = await fetch(x);
    if (!v.ok)
      throw new Error(`Downlading firmware ${y.path} failed: ${v.status}`);
    const E = new FileReader(), k = await v.blob();
    return new Promise((p) => {
      E.addEventListener("load", () => p(E.result)), E.readAsBinaryString(k);
    });
  }), u = [];
  let m = 0;
  for (let y = 0; y < b.length; y++)
    try {
      const x = await b[y];
      u.push({ data: x, address: a.parts[y].offset }), m += x.length;
    } catch (x) {
      d({
        state: "error",
        message: x.message,
        details: {
          error: "failed_firmware_download",
          details: x.message
        }
      }), await Je(h), await h.disconnect();
      return;
    }
  d({
    state: "preparing",
    message: "Installation prepared",
    details: { done: !0 }
  }), r && (d({
    state: "erasing",
    message: "Erasing device...",
    details: { done: !1 }
  }), await l.erase_flash(), d({
    state: "erasing",
    message: "Device erased",
    details: { done: !0 }
  })), d({
    state: "writing",
    message: "Writing progress: 0%",
    details: {
      bytesTotal: m,
      bytesWritten: 0,
      percentage: 0
    }
  });
  let g = 0;
  try {
    await l.write_flash({
      fileArray: u,
      flashSize: "keep",
      flashMode: "keep",
      flashFreq: "keep",
      eraseAll: !1,
      compress: !0,
      // report progress
      reportProgress: (y, x, v) => {
        const E = x / v * u[y].data.length, k = Math.floor((g + E) / m * 100);
        if (x === v) {
          g += E;
          return;
        }
        d({
          state: "writing",
          message: `Writing progress: ${k}%`,
          details: {
            bytesTotal: m,
            bytesWritten: g + x,
            percentage: k
          }
        });
      }
    });
  } catch (y) {
    d({
      state: "error",
      message: y.message,
      details: { error: "write_failed", details: y }
    }), await Je(h), await h.disconnect();
    return;
  }
  d({
    state: "writing",
    message: "Writing complete",
    details: {
      bytesTotal: m,
      bytesWritten: g,
      percentage: 100
    }
  }), await gt(100), console.log("HARD RESET"), await Je(h), console.log("DISCONNECT"), await h.disconnect(), d({
    state: "finished",
    message: "All done!"
  });
}, rs = (i, t = "") => {
  const e = document.createElement("a");
  e.target = "_blank", e.href = i, e.download = t, document.body.appendChild(e), e.dispatchEvent(new MouseEvent("click")), document.body.removeChild(e);
}, as = (i, t = "") => {
  const e = new Blob([i], { type: "text/plain" }), n = URL.createObjectURL(e);
  rs(n, t), setTimeout(() => URL.revokeObjectURL(n), 0);
}, os = (i, t, e, n) => {
  n = n || {};
  const r = new CustomEvent(t, {
    bubbles: n.bubbles === void 0 ? !0 : n.bubbles,
    cancelable: !!n.cancelable,
    composed: n.composed === void 0 ? !0 : n.composed,
    detail: e
  });
  i.dispatchEvent(r);
}, ds = async (i) => {
  const t = new URL(i, location.toString()).toString(), n = await (await fetch(t)).json();
  return "new_install_skip_erase" in n && (console.warn('Manifest option "new_install_skip_erase" is deprecated. Use "new_install_prompt_erase" instead.'), n.new_install_skip_erase && (n.new_install_prompt_erase = !0)), n;
}, ls = "9.4.0";
console.log(`ESP Web Tools ${ls} by Nabu Casa; https://esphome.github.io/esp-web-tools/`);
const qn = "⚠️", jn = "🎉";
class fe extends ot {
  constructor() {
    super(...arguments), this.logger = console, this._state = "DASHBOARD", this._installErase = !1, this._installConfirmed = !1, this._provisionForce = !1, this._wasProvisioned = !1, this._busy = !1, this._selectedSsid = null, this._handleDisconnect = () => {
      this._state = "ERROR", this._error = "Disconnected";
    };
  }
  render() {
    if (!this.port)
      return _``;
    let t, e, n = !1, r = !1;
    return this._client === void 0 && this._state !== "INSTALL" && this._state !== "LOGS" ? this._error ? [t, e, n] = this._renderError(this._error) : (e = this._renderProgress("Connecting"), n = !0) : this._state === "INSTALL" ? [t, e, n, r] = this._renderInstall() : this._state === "ASK_ERASE" ? [t, e] = this._renderAskErase() : this._state === "ERROR" ? [t, e, n] = this._renderError(this._error) : this._state === "DASHBOARD" ? [t, e, n, r] = this._client ? this._renderDashboard() : this._renderDashboardNoImprov() : this._state === "PROVISION" ? [t, e, n] = this._renderProvision() : this._state === "LOGS" && ([t, e, n] = this._renderLogs()), _`
      <ewt-dialog
        open
        .heading=${t}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${n}
      >
        ${t && r ? _`
              <ewt-icon-button dialogAction="close">
                ${no}
              </ewt-icon-button>
            ` : ""}
        ${e}
      </ewt-dialog>
    `;
  }
  _renderProgress(t, e) {
    return _`
      <ewt-page-progress
        .label=${t}
        .progress=${e}
      ></ewt-page-progress>
    `;
  }
  _renderError(t) {
    const e = "Error", n = _`
      <ewt-page-message .icon=${qn} .label=${t}></ewt-page-message>
      <ewt-button
        slot="primaryAction"
        dialogAction="ok"
        label="Close"
      ></ewt-button>
    `;
    return [e, n, !1];
  }
  _renderDashboard() {
    const t = this._info.name;
    let e, n = !0, r = !0;
    return e = _`
      <div class="table-row">
        ${ro}
        <div>${this._info.firmware}&nbsp;${this._info.version}</div>
      </div>
      <div class="table-row last">
        ${ao}
        <div>${this._info.chipFamily}</div>
      </div>
      <div class="dashboard-buttons">
        ${this._isSameVersion ? "" : _`
              <div>
                <ewt-button
                  text-left
                  .label=${this._isSameFirmware ? `Update ${this._manifest.name}` : `Install ${this._manifest.name}`}
                  @click=${() => {
      this._isSameFirmware ? this._startInstall(!1) : this._manifest.new_install_prompt_erase ? this._state = "ASK_ERASE" : this._startInstall(!0);
    }}
                ></ewt-button>
              </div>
            `}
        ${this._client.nextUrl === void 0 ? "" : _`
              <div>
                <a
                  href=${this._client.nextUrl}
                  class="has-button"
                  target="_blank"
                >
                  <ewt-button label="Visit Device"></ewt-button>
                </a>
              </div>
            `}
        ${!this._manifest.home_assistant_domain || this._client.state !== Ae.PROVISIONED ? "" : _`
              <div>
                <a
                  href=${`https://my.home-assistant.io/redirect/config_flow_start/?domain=${this._manifest.home_assistant_domain}`}
                  class="has-button"
                  target="_blank"
                >
                  <ewt-button label="Add to Home Assistant"></ewt-button>
                </a>
              </div>
            `}
        <div>
          <ewt-button
            .label=${this._client.state === Ae.READY ? "Connect to Wi-Fi" : "Change Wi-Fi"}
            @click=${() => {
      this._state = "PROVISION", this._client.state === Ae.PROVISIONED && (this._provisionForce = !0);
    }}
          ></ewt-button>
        </div>
        <div>
          <ewt-button
            label="Logs & Console"
            @click=${async () => {
      const a = this._client;
      a && (await this._closeClientWithoutEvents(a), await gt(100)), this._client = void 0, this._state = "LOGS";
    }}
          ></ewt-button>
        </div>
        ${this._isSameFirmware && this._manifest.funding_url ? _`
              <div>
                <a
                  class="button"
                  href=${this._manifest.funding_url}
                  target="_blank"
                >
                  <ewt-button label="Fund Development"></ewt-button>
                </a>
              </div>
            ` : ""}
        ${this._isSameVersion ? _`
              <div>
                <ewt-button
                  class="danger"
                  label="Erase User Data"
                  @click=${() => this._startInstall(!0)}
                ></ewt-button>
              </div>
            ` : ""}
      </div>
    `, [t, e, n, r];
  }
  _renderDashboardNoImprov() {
    const t = "Device Dashboard";
    let e, n = !0, r = !0;
    return e = _`
      <div class="dashboard-buttons">
        <div>
          <ewt-button
            text-left
            .label=${`Install ${this._manifest.name}`}
            @click=${() => {
      this._manifest.new_install_prompt_erase ? this._state = "ASK_ERASE" : this._startInstall(!0);
    }}
          ></ewt-button>
        </div>

        <div>
          <ewt-button
            label="Logs & Console"
            @click=${async () => {
      this._client = void 0, this._state = "LOGS";
    }}
          ></ewt-button>
        </div>
      </div>
    `, [t, e, n, r];
  }
  _renderProvision() {
    var t;
    let e = "Configure Wi-Fi", n, r = !1;
    if (this._busy)
      return [
        e,
        this._renderProgress(this._ssids === void 0 ? "Scanning for networks" : "Trying to connect"),
        !0
      ];
    if (!this._provisionForce && this._client.state === Ae.PROVISIONED) {
      e = void 0;
      const a = !this._wasProvisioned && (this._client.nextUrl !== void 0 || "home_assistant_domain" in this._manifest);
      r = a, n = _`
        <ewt-page-message
          .icon=${jn}
          label="Device connected to the network!"
        ></ewt-page-message>
        ${a ? _`
              <div class="dashboard-buttons">
                ${this._client.nextUrl === void 0 ? "" : _`
                      <div>
                        <a
                          href=${this._client.nextUrl}
                          class="has-button"
                          target="_blank"
                          @click=${() => {
        this._state = "DASHBOARD";
      }}
                        >
                          <ewt-button label="Visit Device"></ewt-button>
                        </a>
                      </div>
                    `}
                ${this._manifest.home_assistant_domain ? _`
                      <div>
                        <a
                          href=${`https://my.home-assistant.io/redirect/config_flow_start/?domain=${this._manifest.home_assistant_domain}`}
                          class="has-button"
                          target="_blank"
                          @click=${() => {
        this._state = "DASHBOARD";
      }}
                        >
                          <ewt-button
                            label="Add to Home Assistant"
                          ></ewt-button>
                        </a>
                      </div>
                    ` : ""}
                <div>
                  <ewt-button
                    label="Skip"
                    @click=${() => {
        this._state = "DASHBOARD";
      }}
                  ></ewt-button>
                </div>
              </div>
            ` : _`
              <ewt-button
                slot="primaryAction"
                label="Continue"
                @click=${() => {
        this._state = "DASHBOARD";
      }}
              ></ewt-button>
            `}
      `;
    } else {
      let a;
      switch (this._client.error) {
        case 3:
          a = "Unable to connect";
          break;
        case 254:
          a = "Timeout";
          break;
        case 0:
        case 2:
          break;
        default:
          a = `Unknown error (${this._client.error})`;
      }
      const o = (t = this._ssids) === null || t === void 0 ? void 0 : t.find((d) => d.name === this._selectedSsid);
      n = _`
        <div>
          Enter the credentials of the Wi-Fi network that you want your device
          to connect to.
        </div>
        ${a ? _`<p class="error">${a}</p>` : ""}
        ${this._ssids !== null ? _`
              <ewt-select
                fixedMenuPosition
                label="Network"
                @selected=${(d) => {
        const h = d.detail.index;
        this._selectedSsid = h === this._ssids.length ? null : this._ssids[h].name;
      }}
                @closed=${(d) => d.stopPropagation()}
              >
                ${this._ssids.map((d) => _`
                    <ewt-list-item
                      .selected=${o === d}
                      .value=${d.name}
                    >
                      ${d.name}
                    </ewt-list-item>
                  `)}
                <ewt-list-item .selected=${!o} value="-1">
                  Join other…
                </ewt-list-item>
              </ewt-select>
              <ewt-icon-button @click=${this._updateSsids}>
                ${oo}
              </ewt-icon-button>
            ` : ""}
        ${// Show input box if command not supported or "Join Other" selected
      o ? "" : _`
                <ewt-textfield label="Network Name" name="ssid"></ewt-textfield>
              `}
        ${!o || o.secured ? _`
              <ewt-textfield
                label="Password"
                name="password"
                type="password"
              ></ewt-textfield>
            ` : ""}
        <ewt-button
          slot="primaryAction"
          label="Connect"
          @click=${this._doProvision}
        ></ewt-button>
        <ewt-button
          slot="secondaryAction"
          .label=${this._installState && this._installErase ? "Skip" : "Back"}
          @click=${() => {
        this._state = "DASHBOARD";
      }}
        ></ewt-button>
      `;
    }
    return [e, n, r];
  }
  _renderAskErase() {
    const t = "Erase device", e = _`
      <div>
        Do you want to erase the device before installing
        ${this._manifest.name}? All data on the device will be lost.
      </div>
      <ewt-formfield label="Erase device" class="danger">
        <ewt-checkbox></ewt-checkbox>
      </ewt-formfield>
      <ewt-button
        slot="primaryAction"
        label="Next"
        @click=${() => {
      const n = this.shadowRoot.querySelector("ewt-checkbox");
      this._startInstall(n.checked);
    }}
      ></ewt-button>
      <ewt-button
        slot="secondaryAction"
        label="Back"
        @click=${() => {
      this._state = "DASHBOARD";
    }}
      ></ewt-button>
    `;
    return [t, e];
  }
  _renderInstall() {
    let t, e, n = !1;
    const r = !1, a = !this._installErase && this._isSameFirmware;
    if (!this._installConfirmed && this._isSameVersion)
      t = "Erase User Data", e = _`
        Do you want to reset your device and erase all user data from your
        device?
        <ewt-button
          class="danger"
          slot="primaryAction"
          label="Erase User Data"
          @click=${this._confirmInstall}
        ></ewt-button>
      `;
    else if (this._installConfirmed)
      if (!this._installState || this._installState.state === "initializing" || this._installState.state === "preparing")
        t = "Installing", e = this._renderProgress("Preparing installation"), n = !0;
      else if (this._installState.state === "erasing")
        t = "Installing", e = this._renderProgress("Erasing"), n = !0;
      else if (this._installState.state === "writing" || // When we're finished, keep showing this screen with 100% written
      // until Improv is initialized / not detected.
      this._installState.state === "finished" && this._client === void 0) {
        t = "Installing";
        let o, d;
        this._installState.state === "finished" ? d = "Wrapping up" : this._installState.details.percentage < 4 ? d = "Installing" : o = this._installState.details.percentage, e = this._renderProgress(_`
          ${d ? _`${d}<br />` : ""}
          <br />
          This will take
          ${this._installState.chipFamily === "ESP8266" ? "a minute" : "2 minutes"}.<br />
          Keep this page visible to prevent slow down
        `, o), n = !0;
      } else if (this._installState.state === "finished") {
        t = void 0;
        const o = this._client !== null;
        e = _`
        <ewt-page-message
          .icon=${jn}
          label="Installation complete!"
        ></ewt-page-message>
        <ewt-button
          slot="primaryAction"
          label="Next"
          @click=${() => {
          this._state = o && this._installErase ? "PROVISION" : "DASHBOARD";
        }}
        ></ewt-button>
      `;
      } else
        this._installState.state === "error" && (t = "Installation failed", e = _`
        <ewt-page-message
          .icon=${qn}
          .label=${this._installState.message}
        ></ewt-page-message>
        <ewt-button
          slot="primaryAction"
          label="Back"
          @click=${async () => {
          this._initialize(), this._state = "DASHBOARD";
        }}
        ></ewt-button>
      `);
    else {
      t = "Confirm Installation";
      const o = a ? "update to" : "install";
      e = _`
        ${a ? _`Your device is running
              ${this._info.firmware}&nbsp;${this._info.version}.<br /><br />` : ""}
        Do you want to ${o}
        ${this._manifest.name}&nbsp;${this._manifest.version}?
        ${this._installErase ? _`<br /><br />All data on the device will be erased.` : ""}
        <ewt-button
          slot="primaryAction"
          label="Install"
          @click=${this._confirmInstall}
        ></ewt-button>
        <ewt-button
          slot="secondaryAction"
          label="Back"
          @click=${() => {
        this._state = "DASHBOARD";
      }}
        ></ewt-button>
      `;
    }
    return [t, e, n, r];
  }
  _renderLogs() {
    let t = "Logs", e, n = !1;
    return e = _`
      <ewt-console .port=${this.port} .logger=${this.logger}></ewt-console>
      <ewt-button
        slot="primaryAction"
        label="Back"
        @click=${async () => {
      await this.shadowRoot.querySelector("ewt-console").disconnect(), this._state = "DASHBOARD", this._initialize();
    }}
      ></ewt-button>
      <ewt-button
        slot="secondaryAction"
        label="Download Logs"
        @click=${() => {
      as(this.shadowRoot.querySelector("ewt-console").logs(), "esp-web-tools-logs.txt"), this.shadowRoot.querySelector("ewt-console").reset();
    }}
      ></ewt-button>
      <ewt-button
        slot="secondaryAction"
        label="Reset Device"
        @click=${async () => {
      await this.shadowRoot.querySelector("ewt-console").reset();
    }}
      ></ewt-button>
    `, [t, e, n];
  }
  willUpdate(t) {
    t.has("_state") && (this._state !== "ERROR" && (this._error = void 0), this._state === "PROVISION" ? this._updateSsids() : this._provisionForce = !1, this._state === "INSTALL" && (this._installConfirmed = !1, this._installState = void 0));
  }
  async _updateSsids(t = 0) {
    const e = this._ssids;
    this._ssids = void 0, this._busy = !0;
    let n;
    try {
      n = await this._client.scan();
    } catch {
      this._ssids === void 0 && (this._ssids = null, this._selectedSsid = null), this._busy = !1;
      return;
    }
    if (n.length === 0 && t < 3) {
      console.log("SCHEDULE RETRY", t), setTimeout(() => this._updateSsids(t + 1), 1e3);
      return;
    }
    e ? this._selectedSsid && !n.find((r) => r.name === this._selectedSsid) && (this._selectedSsid = n[0].name) : this._selectedSsid = n.length ? n[0].name : null, this._ssids = n, this._busy = !1;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this._initialize();
  }
  updated(t) {
    super.updated(t), t.has("_state") && this.setAttribute("state", this._state), this._state === "PROVISION" && (t.has("_selectedSsid") && this._selectedSsid === null ? this._focusFormElement("ewt-textfield[name=ssid]") : t.has("_ssids") && this._focusFormElement());
  }
  _focusFormElement(t = "ewt-textfield, ewt-select") {
    const e = this.shadowRoot.querySelector(t);
    e && e.updateComplete.then(() => setTimeout(() => e.focus(), 100));
  }
  async _initialize(t = !1) {
    if (this.port.readable === null || this.port.writable === null) {
      this._state = "ERROR", this._error = "Serial port is not readable/writable. Close any other application using it and try again.";
      return;
    }
    try {
      this._manifest = await ds(this.manifestPath);
    } catch {
      this._state = "ERROR", this._error = "Failed to download manifest";
      return;
    }
    if (this._manifest.new_install_improv_wait_time === 0) {
      this._client = null;
      return;
    }
    const e = new mo(this.port, this.logger);
    e.addEventListener("state-changed", () => {
      this.requestUpdate();
    }), e.addEventListener("error-changed", () => this.requestUpdate());
    try {
      const n = t ? this._manifest.new_install_improv_wait_time !== void 0 ? this._manifest.new_install_improv_wait_time * 1e3 : 1e4 : 1e3;
      this._info = await e.initialize(n), this._client = e, e.addEventListener("disconnect", this._handleDisconnect);
    } catch (n) {
      this._info = void 0, n instanceof ur ? (this._state = "ERROR", this._error = "Serial port is not ready. Close any other application using it and try again.") : (this._client = null, this.logger.error("Improv initialization failed.", n));
    }
  }
  _startInstall(t) {
    this._state = "INSTALL", this._installErase = t, this._installConfirmed = !1;
  }
  async _confirmInstall() {
    this._installConfirmed = !0, this._installState = void 0, this._client && await this._closeClientWithoutEvents(this._client), this._client = void 0, await this.port.close(), ns((t) => {
      this._installState = t, t.state === "finished" ? gt(100).then(() => this.port.open({ baudRate: 115200 })).then(() => this._initialize(!0)).then(() => this.requestUpdate()) : t.state === "error" && gt(100).then(() => this.port.open({ baudRate: 115200 }));
    }, this.port, this.manifestPath, this._manifest, this._installErase);
  }
  async _doProvision() {
    var t;
    this._busy = !0, this._wasProvisioned = this._client.state === Ae.PROVISIONED;
    const e = this._selectedSsid === null ? this.shadowRoot.querySelector("ewt-textfield[name=ssid]").value : this._selectedSsid, n = ((t = this.shadowRoot.querySelector("ewt-textfield[name=password]")) === null || t === void 0 ? void 0 : t.value) || "";
    try {
      await this._client.provision(e, n, 3e4);
    } catch {
      return;
    } finally {
      this._busy = !1, this._provisionForce = !1;
    }
  }
  async _handleClose() {
    this._client && await this._closeClientWithoutEvents(this._client), os(this, "closed"), this.parentNode.removeChild(this);
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
}
fe.styles = [
  Qr,
  Q`
      :host {
        --mdc-dialog-max-width: 390px;
      }
      ewt-icon-button {
        position: absolute;
        right: 4px;
        top: 10px;
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
      ewt-textfield,
      ewt-select {
        display: block;
        margin-top: 16px;
      }
      .dashboard-buttons {
        margin: 0 0 -16px -8px;
      }
      .dashboard-buttons div {
        display: block;
        margin: 4px 0;
      }
      a.has-button {
        text-decoration: none;
      }
      .error {
        color: var(--improv-danger-color);
      }
      .danger {
        --mdc-theme-primary: var(--improv-danger-color);
        --mdc-theme-secondary: var(--improv-danger-color);
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
      :host([state="LOGS"]) ewt-dialog {
        --mdc-dialog-max-width: 90vw;
      }
      ewt-console {
        width: calc(80vw - 48px);
        height: 80vh;
      }
      ewt-list-item[value="-1"] {
        border-top: 1px solid #ccc;
      }
    `
];
c([
  F()
], fe.prototype, "_client", void 0);
c([
  F()
], fe.prototype, "_state", void 0);
c([
  F()
], fe.prototype, "_installErase", void 0);
c([
  F()
], fe.prototype, "_installConfirmed", void 0);
c([
  F()
], fe.prototype, "_installState", void 0);
c([
  F()
], fe.prototype, "_provisionForce", void 0);
c([
  F()
], fe.prototype, "_error", void 0);
c([
  F()
], fe.prototype, "_busy", void 0);
c([
  F()
], fe.prototype, "_ssids", void 0);
c([
  F()
], fe.prototype, "_selectedSsid", void 0);
customElements.define("ewt-install-dialog", fe);
export {
  fe as EwtInstallDialog
};
