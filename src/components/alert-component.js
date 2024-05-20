import { html, css, LitElement } from 'lit';

class AlertComponent extends LitElement {
    static styles = [
      css`
        :host{
          box-sizing: border-box;
          text-align: center;
        }

        .alert{
          color: white;
          border-radius: 8px;
        }

        .error{
          background-color: var(--color-error, red);
        }

        .success{
          background-color: var(--color-success, green);
        }
      `
    ] 
    
    static get properties(){
      return {
        type: { type: String },
        message: { type: String }
      }
    };
  
    render() {
      return html`
        
        <div class="alert ${this.type}">${this.message}</div>
      `;
    }
  }
  
  customElements.define('alert-component', AlertComponent);