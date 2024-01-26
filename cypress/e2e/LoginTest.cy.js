import LoginPage from "../pages/LoginPage";

describe("Should validate login feature",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/v1/index.html")
    })
    it("validate login for correct credentials",()=>{
        cy.fixture('loginData.json').then(users=>{
            users.forEach(user=>{
                LoginPage.login(user.username,user.password)
                if(user.isLoginFail){
                    cy.log(LoginPage.isLoginFailed())
                }
            })
        })
    })
    it('validate login with empty username field',()=>{
        cy.fixture('loginData.json').then(users=>{
           const user= users[1]; 
           LoginPage.login(user.username,user.password)
        })
    })
})