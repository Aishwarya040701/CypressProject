const { cartPageClass } = require("../../pages/cartPage")
const { loginPageClass } = require("../../pages/loginPage")
const { overviewPageClass } = require("../../pages/overviewPage")
const { productPageClass } = require("../../pages/productPage")
const { yourInformationPageClass } = require("../../pages/yourInformationPage")

const loginPageObj=new loginPageClass
const productPageObj=new productPageClass
const cartPageObj=new cartPageClass
const yourInformationPageobj=new yourInformationPageClass
const overviewPageObj=new overviewPageClass

describe('Sauce demo app Test 1',()=>{
    it('Login with valid credentials test',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPageObj.enterUsername('standard_user')
        loginPageObj.enterPassword('secret_sauce')
        loginPageObj.clickOnLoginButton()
        productPageObj.getProductPageHeading().should('equal','Products')
    })

    it('Add two products to cart test',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPageObj.enterUsername('standard_user')
        loginPageObj.enterPassword('secret_sauce')
        loginPageObj.clickOnLoginButton()
        productPageObj.getProductPageHeading().should('equal','Products')
        productPageObj.addToCartProduct1()
        productPageObj.getCartValue().should('equal','1')
        productPageObj.addToCartProduct2()
        productPageObj.getCartValue().should('equal','2')
    })

    it.skip('Check cart value when products added to cart test',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPageObj.enterUsername('standard_user')
        loginPageObj.enterPassword('secret_sauce')
        loginPageObj.clickOnLoginButton()
        productPageObj.getProductPageHeading().should('equal','Products')
        productPageObj.addToCartProduct1()
        productPageObj.addToCartProduct2()
        productPageObj.addToCartProduct3()
        productPageObj.addToCartProduct4()
        productPageObj.getCartValue().should('equal','4')

    })
    
})