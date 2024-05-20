import { Router } from '@vaadin/router';

export const AutenticateUser = (Superclass) => class extends Superclass {

    static get properties() {
        return {
          users: { type: Array }
        };
      }

    constructor(){
        super();
        this.users = [
                { "email": "leoduca@neoris.com", "password": "instructor" },
                { "email": "root@root.com", "password": "toor" },
                { "email": "admin@admin.com", "password": "admin" },
                { "email": "alvaro@neoris.com", "password": "alvaro" }
            ]
        
    }

    isConnected(){
        if (!localStorage.getItem("userAutenticate") ){
            Router.go("/login");
        }
    }

    checkUser(email, password) {
        return this.users.some(user => user.email === email && user.password === password);

    }
}
    