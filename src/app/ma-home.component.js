const template = document.createElement('template');
template.innerHTML = `
  <h1>My App</h1>
  <div>Contents of my app</div>
`;

export class MyAppHome extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    console.log('ma-home connected');
  }
}

customElements.define('ma-home', MyAppHome);
