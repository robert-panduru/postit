import { LitElement, html, css } from 'lit-element';

export class MyNote extends LitElement {
	static get styles() {
		return css`
			:host {
				width: 200px;
				height: 200px;
				background-color: green;
				margin: 10px 10px 10px 10px;
				text-align: center;
			}

			:host(:hover) {
				box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
			}
		`;
	}


  static get properties() {
    return {
      text: { type: String }
    };
  }

  render() {
    return html`
      <div>${this.text}</div>
    `;
	}
}