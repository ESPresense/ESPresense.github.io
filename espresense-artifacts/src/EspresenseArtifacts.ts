import { html, css, LitElement } from 'lit';
import { Task, TaskStatus } from '@lit-labs/task';
import "esp-web-tools"

export class EspresenseArtifacts extends LitElement {
  response: Map<string, any>;
  href: string;
  flavor: string;
  run_id: number;

  static get properties() {
    return {
      href: { type: String },
      manifest: { type: String },
      response: { type: Map<string, any> },
      run_id: { type: Number },
      flavor: { type: String }
    };
  }

  get manifest() {
    const params = new URLSearchParams({
      flavor: this.flavor,
    });
    return this.href + this.run_id + ".json?" + params.toString();
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
    this.run_id = -1;
    this.flavor = "";
  }


  firstUpdated() {
    fetch("https://api.github.com/repos/ESPresense/ESPresense/actions/workflows/build.yml/runs?status=success&event=pull_request&per_page=100")
      .then((r) => r.json())
      .then((r) => {
        var wf = r.workflow_runs.filter(i => i.pull_requests.length > 0);
        this.response = wf.reduce((p, c) => (p[c.head_branch] ? p[c.head_branch].push(c) : p[c.head_branch] = [c], p), new Map());
        this.run_id = wf[0].id;
      });
  }

  flavorChanged(e) {
    this.flavor = e.target.value;
    console.log(this.flavor);
  }

  versionChanged(e) {
    this.run_id = e.target.value;
    console.log(this.run_id);
  }

  render() {
    const { response } = this;
    return html`
      <label for="flavor">Flavor:</label><select id="flavor" @change=${this.flavorChanged}><option value="">Standard</option><option value="verbose">Verbose</option><option value="m5atom">M5Atom</option><option value="m5stickc">M5StickC</option><option value="m5stickc-plus">M5StickC-plus</option></select>
      <label for="version">Artifact:</label><select id="version" @change=${this.versionChanged}>>${Object.keys(response).reverse().map((key) => html` <optgroup label="${key}">${response[key].map((i) => html` <option value=${i.id}>${i.head_sha.substring(0,7)}: ${i.head_commit.message}</option> `)}</optgroup>`)}</select>
      <esp-web-install-button manifest=${this.manifest}></esp-web-install-button>
      <div class="powered"><label>Powered by</label><a href="https://esphome.github.io/esp-web-tools/" target="_blank">ESP Web Tools</a></div>
    `;
  }
}
