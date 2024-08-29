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

describe('Login Test',()=>{
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

    it('Check cart value when products added to cart test',()=>{
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

    it('Check cart value when products removed from cart test',()=>{
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
        productPageObj.removeProduct3FromCart()
        productPageObj.getCartValue().should('equal','3')
        productPageObj.removeProduct4FromCart()
        productPageObj.getCartValue().should('equal','2')

    })

    it('Check filter in products page test',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPageObj.enterUsername('standard_user')
        loginPageObj.enterPassword('secret_sauce')
        loginPageObj.clickOnLoginButton()
        productPageObj.getProductPageHeading().should('equal','Products')
        productPageObj.sortProductsByValue('za')
        productPageObj.getSortedProduct().should('equal','Test.allTheThings() T-Shirt (Red)')
        productPageObj.sortProductsByValue('lohi')
        productPageObj.getSortedProduct().should('equal','Sauce Labs Onesie')
        productPageObj.sortProductsByValue('hilo')
        productPageObj.getSortedProduct().should('equal','Sauce Labs Fleece Jacket')
        productPageObj.sortProductsByValue('az')
        productPageObj.getSortedProduct().should('equal','Sauce Labs Backpack')
    })
    
    it('Check products added in cart page test',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPageObj.enterUsername('standard_user')
        loginPageObj.enterPassword('secret_sauce')
        loginPageObj.clickOnLoginButton()
        productPageObj.getProductPageHeading().should('equal','Products')
        productPageObj.addToCartProduct1()
        productPageObj.getCartValue().should('equal','1')
        productPageObj.addToCartProduct2()
        productPageObj.getCartValue().should('equal','2')
        productPageObj.clickCartButton()
        cartPageObj.getCartPageHeading().should('equal','Your Cart')
        cartPageObj.getProduct1Name().should('equal', 'Sauce Labs Backpack')
        cartPageObj.getProduct2Name().should('equal', 'Sauce Labs Bolt T-Shirt')
    })

    it('Check registration with valid information that allow navigation to Overview page test',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPageObj.enterUsername('standard_user')
        loginPageObj.enterPassword('secret_sauce')
        loginPageObj.clickOnLoginButton()
        productPageObj.getProductPageHeading().should('equal','Products')
        productPageObj.addToCartProduct1()
        productPageObj.getCartValue().should('equal','1')
        productPageObj.addToCartProduct2()
        productPageObj.getCartValue().should('equal','2')
        productPageObj.clickCartButton()
        cartPageObj.getCartPageHeading().should('equal','Your Cart')
        cartPageObj.getProduct1Name().should('equal', 'Sauce Labs Backpack')
        cartPageObj.getProduct2Name().should('equal', 'Sauce Labs Bolt T-Shirt')
        cartPageObj.clickCheckoutButton()
        yourInformationPageobj.getYourInformationPageHeading().should('equal','Checkout: Your Information')
        yourInformationPageobj.enterDetails('Arya','Raj','573201')
        yourInformationPageobj.clickOnContinueButton()
        overviewPageObj.getOverviewPageHeading().should('equal','Checkout: Overview')
    })

	
    it('complete e2e process on saucedemo application test',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPageObj.enterUsername('standard_user')
        loginPageObj.enterPassword('secret_sauce')
        loginPageObj.clickOnLoginButton()
        productPageObj.getProductPageHeading().should('equal','Products')
        productPageObj.addToCartProduct1()
        productPageObj.getCartValue().should('equal','1')
        productPageObj.addToCartProduct2()
        productPageObj.getCartValue().should('equal','2')
        productPageObj.clickCartButton()
        cartPageObj.getCartPageHeading().should('equal','Your Cart')
        cartPageObj.getProduct1Name().should('equal', 'Sauce Labs Backpack')
        cartPageObj.getProduct2Name().should('equal', 'Sauce Labs Bolt T-Shirt')
        cartPageObj.clickCheckoutButton()
        yourInformationPageobj.getYourInformationPageHeading().should('equal','Checkout: Your Information')
        yourInformationPageobj.enterDetails('Arya','Raj','573201')
        yourInformationPageobj.clickOnContinueButton()
        overviewPageObj.getOverviewPageHeading().should('equal','Checkout: Overview')
        overviewPageObj.getProduct1Name().should('equal', 'Sauce Labs Backpack')
        overviewPageObj.getProduct2Name().should('equal', 'Sauce Labs Bolt T-Shirt')
        overviewPageObj.clickOnFinishButton()
        overviewPageObj.getOverviewPageHeading().should('equal','Checkout: Complete!')
        overviewPageObj.getThankyouMessage().should('equal','Thank you for your order!')

    })

    

    
})