class LoginPage{
    getUsernameField(){
        return cy.get('input[id="user-name"]')
    }
    getPasswordField(){
        return cy.get('#password')
    }
    getLoginButton(){
        return cy.get('input[type="submit"]')
    }
    login(username,password){
        this.getUsernameField().clear().type(username)
        if(password!=" "){
            this.getPasswordField().clear().type(password)
        }
        this.getLoginButton().click()
    }
    isLoginFailed(){
        cy.get('h3[data-test="error"]').should('be.visible')
    }
}
export default new LoginPage();