import { LitElement, html, css } from 'lit-element';

export class MyNote extends LitElement {
	static get styles() {
		return css`
			:host {
				width: 200px;
				height: 20%;
				background-color: green;
				margin: 5px 5px 5px 5px;
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