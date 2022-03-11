import _ from "lodash";
import { LitElement, html } from "lit";
import "./components/more-expressions";
class MyElement extends LitElement {
  // TODO: Add a reactive property

  render() {
    return html`
      <more-expressions></more-expressions>
      <p>TODO: Add an expression</p>
    `;
  }
}
customElements.define("my-element", MyElement);
