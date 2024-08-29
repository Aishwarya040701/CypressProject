export class loginPageClass{

    weblocators={
    username : "input[id='user-name']",
    password : "input[id='password']",
    loginButton : "input[id='login-button']"
    }
   
    enterUsername(username){
        cy.get(this.weblocators.username).type(username)
    }

    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
    }
    
    clickOnLoginButton(){
        cy.get(this.weblocators.loginButton).click()
    }

}