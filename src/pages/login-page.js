import { html, css, LitElement, nothing} from 'lit';

import { Router } from '@vaadin/router';

import '../components/login-component.js';
import '../components/alert-component.js';
import '../layouts/public-layout.js';

class LoginPage extends LitElement {
    constructor(){
        super();
        this.alertType = "";
        this.alertMessage = "";
    }

    static get properties(){
        return {
          alertType: { type: String },
          alertMessage: { type: String }
        }
    };

    handleLoginSuccess(event){
        this.alertType = "success";
        localStorage.setItem("userAutenticate", true);
        Router.go("/home");
    }

    handleLoginError(event){
        this.alertType = "error";
        this.alertMessage = `Error al iniciar sesión.`;
    }

    connectedCallback(){
        super.connectedCallback();    
        this.addEventListener('login-error', this.handleLoginError.bind(this));
        this.addEventListener('login-success', this.handleLoginSuccess.bind(this));
    }

    disconnectedCallback(){
        super.disconnectedCallback();
        this.removeEventListener('login-success', this.handleLoginSuccess.bind(this));
        this.removeEventListener('login-error', this.handleLoginError.bind(this));
    }

    static styles = [
        css`
            :host{
                width: 70%;
                margin-left: 15%;
                height: 100vh;
                display: grid;
                place-content: center;

            }
        `
    ]
    
    render() {

        return html`
            <public-layout>
                <login-component></login-component>
                ${this.alertType 
                    ? html`<alert-component .type=${this.alertType} .message="${this.alertMessage}"></alert-component>`
                    : nothing
                } 
            </public-layout>     
        `;
    }


}

customElements.define("login-page", LoginPage);