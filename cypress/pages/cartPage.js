export class cartPageClass{

    weblocators={
    cartPageHeading : "span.title",
    product1:"a[id = 'item_4_title_link']",
    product2:"a[id = 'item_1_title_link']",
    checkoutButton:"button[id = 'checkout']"
    }
   
    getCartPageHeading(){
        return cy.get(this.weblocators.cartPageHeading).invoke('text')
    }

    getProduct1Name() {
		return cy.get(this.weblocators.product1).invoke('text')

	}

	getProduct2Name() {
		return cy.get(this.weblocators.product2).invoke('text')

	}

    clickCheckoutButton() {
        cy.get(this.weblocators.checkoutButton).click()
	}


}