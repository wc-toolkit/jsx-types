/* eslint-disable no-undef */


/**
 * Test component
 * 
 * @status beta - A beta component
 * @dependency Button - A button component
 * @dependency Icon
 */
export class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        h1 {
          color: blue;
        }
      </style>
      <h1>Hello, World!</h1>
    `;
  }
}

customElements.define('my-component', MyComponent);