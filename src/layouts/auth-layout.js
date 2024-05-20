import { html, css, LitElement } from 'lit';

export class AuthLayout extends LitElement {
    
    static styles = [
        css`
          :host {
            display: grid;
            grid-template-rows: auto 1fr auto; 
            height: 100vh;
          }

          footer{
            text-align: center;
            background-color: var(--primary-color);
            color: var(--welcome-color)

          }

          main{
            padding: 16px;
            background-color: white;
          }
        `
    ]

    render(){
        return html`
                <header>
                    <slot name="header"></slot>
                </header>

                <main>
                    <slot name="main"></slot>
                </main>

                <footer>
                    <slot name="footer"></slot>
                </footer>
        `;
    }

}

customElements.define("auth-layout", AuthLayout);