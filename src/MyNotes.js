import { LitElement, html, css } from 'lit-element';

export class MyNotes extends LitElement {
	static get styles() {
		return css`
			:host {
				width: 100%;
				height: 50%;
				display: flex;
				background-color: tomato;
				flex-wrap: wrap;
			}
		`;
	}


  render() {
    return html`
    	<slot></slot>
    `;
	}



}