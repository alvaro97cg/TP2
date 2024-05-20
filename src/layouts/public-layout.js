import { html, css, LitElement } from 'lit';

export class PublicLayout extends LitElement {
    
    static styles = [
        css`
          :host {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px;
            background-color: #004481;
            border-radius: 8px;
            width: 100%;
          }
        `
    ]

    render(){
        return html`
                <div>
                    <slot></slot>
                </div>
        `;
    }

}

customElements.define("public-layout", PublicLayout);