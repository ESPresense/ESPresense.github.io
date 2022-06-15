import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import "esp-web-tools"

export class EspresenseReleases extends LitElement {
  response: Map<string, any>;
  href: string;
  version: string;
  flavor: string;

  static get properties() {
    return {
      href: { type: String },
      manifest: { type: String },
      response: { type: Map<string, any> },
      version: { type: String },
      flavor: { type: String }
    };
  }

  get manifest() {
    const params = new URLSearchParams({
      version: this.version,
      flavor: this.flavor,
    });
    return this.href + "?" + params.toString();
  }

  static styles = css`
    :host select {
      padding-left: 12px !important;
      font-family: Verdana, Helvetica, sans-serif;
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
      display: inline-block;
      padding: 10px 15px 10px 15px;
      border: none;
      border-radius: 2pt;
      box-shadow: 0 0 0 1pt rgb(238, 235, 238);
      outline: none;
      transition: .1s;
      background-color: rgb(245, 246, 250);
    }
  `;

  constructor() {
    super();
    this.response = new Map();
    this.href = "";
    this.version = "";
    this.flavor = "";
  }

  firstUpdated() {
    fetch("https://api.github.com/repos/ESPresense/ESPresense/releases")
      .then((r) => r.json())
      .then((r) => {
        this.response = r.filter((item) => item.assets.length > 5).reduce((p, c) => (p[c.prerelease ? "Beta" : "Release"] ? p[c.prerelease ? "Beta" : "Release"].push(c) : p[c.prerelease ? "Beta" : "Release"] = [c], p), new Map());
        this.version = this.response["Release"][0].name;
      });
  }

  flavorChanged(e) {
    this.flavor = e.target.value;
    console.log(this.flavor);
  }

  versionChanged(e) {
    this.version = e.target.value;
    console.log(this.version);
  }

  render() {
    const { response } = this;
    return html`
      <label for="flavor">Flavor:</label><select id="flavor" @change=${this.flavorChanged}><option value="">Standard</option><option value="verbose">Verbose</option><option value="m5atom">M5Atom</option><option value="m5stickc">M5StickC</option><option value="m5stickc-plus">M5StickC-plus</option></select>
      <label for="version">Version:</label><select id="version" @change=${this.versionChanged}>>${Object.keys(response).reverse().map((key) => html` <optgroup label="${key}">${response[key].map((i) => html` <option value=${i.name}>${i.name}</option> `)}</optgroup>`)}</select>
      <esp-web-install-button manifest=${this.manifest}></esp-web-install-button>
      <div class="powered">
      <span>Powered by <a href="https://esphome.github.io/esp-web-tools/" target="_blank">ESP Web Tools</a></span>
      </div>
    `;
  }
}
