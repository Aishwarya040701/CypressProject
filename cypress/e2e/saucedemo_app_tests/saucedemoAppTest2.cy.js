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

describe('Sauce demo app Test 2',()=>{
 
    it('Check cart value when products removed from cart test',()=>{
        cy.visit('https://www.saucedemo.com/', {headers : {"Accept-Encoding":"gzip, deflate"}})
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
        cy.visit('https://www.saucedemo.com/', {headers : {"Accept-Encoding":"gzip, deflate"}})
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
        cy.visit('https://www.saucedemo.com/', {headers : {"Accept-Encoding":"gzip, deflate"}})
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
    
})