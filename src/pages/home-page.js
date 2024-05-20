import { html, css, LitElement } from 'lit';
import { Router } from '@vaadin/router';

import '@dile/dile-nav/dile-nav.js';
import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';

import { AutenticateUser } from '../mixins/autenticate-user';

import '../layouts/auth-layout.js';

class HomePage extends AutenticateUser(LitElement) {
  static styles = [
    css`
      :host{
        display: block;
        width: 100%;
        height: 100vh;
        --dile-nav-background-color: var(--primary-color, #464444);
      }

    
      h1{
        color: red;
        font-size: 1.3rem;
      }

      h2{
        color: var(--welcome-color, #5BBEFF);
      }

      .btn{
        padding: 10px 0px;
        color: white;
        background-color: #5BBEFF;
        border: none;
        transition: color 0.3s, border-color 0.3s;
        padding: 0.5rem 1rem;;

      }

      .btn:hover {
        background-color: white;
        color: black;
        cursor: pointer;
      }

      .option-btn{
        background-color: grey;
        padding: 0.3rem 1rem;
      }

      .container{
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
      }

      .container div{
        display: grid;
        place-content: center;
        padding: 1rem;
        border: solid 1px black;
        border-color: var(--primary-color);
        background-color: var(--welcome-color);
        height: 10vh;
      }

    `
  ]

  connectedCallback(){
    super.connectedCallback();
    this.isConnected();
  }

  render() {

    const userEmail = localStorage.getItem("email");

    return html`
          <auth-layout>
            <dile-nav slot="header" menu="right">
              <h2 slot="title">Bienvenido ${userEmail}</h2>
              <dile-menu-hamburger slot="menu" direction="left">
                <nav slot="menu">
                  <p><a href="one.html">Link one</a></p>
                  <p><a href="two.html">Link two</a></p>
                </nav>
              </dile-menu-hamburger>
              <button @click="${this.logout}" slot="actions" class="btn">Log out</button>
            </dile-nav>

            <div slot="main" class="container">
              <div><p>Opción 1</p> <button class="btn option-btn">+</button></div>
              <div><p>Opción 2</p> <button class="btn option-btn">+</button></div>
              <div><p>Opción 3</p> <button class="btn option-btn">+</button></div>
              <div><p>Opción 4</p> <button class="btn option-btn">+</button></div>
            </div>


            <p slot="footer">Todos los derechos reservados © </p>

          </auth-layout>
    `;
  }

  logout() {
    localStorage.removeItem('userAutenticate');
    localStorage.removeItem('email');
    console.log("usuario borrado");
    Router.go("/login");
  }

}

customElements.define('home-page', HomePage);