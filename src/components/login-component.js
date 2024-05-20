import { html, css, LitElement } from 'lit';

import { AutenticateUser } from '../mixins/autenticate-user';

class LoginComponent extends AutenticateUser(LitElement) {
  constructor() {
    super();
    this.resetProperties();
  }

  static get properties(){
    return {
      email: { type: String },
      password: { type: String }
    }
  };

  static styles = [
    css`
      :host {
        width: 70%;
        display: block;
        height: 100%;
        padding: 2rem 1rem;
      }

      form{
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      label{
        color: white;
      }

      #inputPassword{
        margin-bottom: 2rem;
      }

      .btn{
        padding: 10px 0px;
        color: white;
        background-color: #1973B8;
        border: none;
        transition: color 0.3s, border-color 0.3s;

      }

      .btn:hover {
        background-color: white;
        color: black;
        cursor: pointer;
      }

    `
  ]
  
  connectedCallback(){
    super.connectedCallback();
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.checkUser(this.email, this.password);

    if (user){
      localStorage.setItem("email", this.email );
      this.dispatchCustomEvent('login-success', {email: this.email, password: this.password});
    }else{
      this.dispatchCustomEvent('login-error', {email: this.email, password: this.password});

    }
  
    this.resetProperties();
  }

  resetProperties(){
    this.email = "";
    this.password = "";
  }
  
  dispatchCustomEvent(eventName, detail){

    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }

  handleInput(event) {
    const {name, value } = event.target; 

    this[name] = value;
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <label for="inputUsername">Email</label>
        <input type="email" id="inputEmail" name="email" .value="${this.email}" @input=${this.handleInput} />

        <label for="inputPassword">Password</label>
        <input type="password" id="inputPassword" name="password" .value="${this.password}" @input=${this.handleInput} />

        <button class="btn" type="submit">Enviar</button>
      </form>   
    `;
  }
}

customElements.define("login-component", LoginComponent);
