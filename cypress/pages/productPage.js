export class productPageClass{

    weblocators={
    productPageHeading : "span.title",
    product1:"button[id = 'add-to-cart-sauce-labs-backpack']",
    product1Name:"a[id = 'item_4_title_link'] div",
    product2:"button[id = 'add-to-cart-sauce-labs-bolt-t-shirt']",
    product2Name:"a[id = 'item_1_title_link'] div",
    product3:"button[id = 'add-to-cart-sauce-labs-fleece-jacket']",
    product4:"button[id = 'add-to-cart-sauce-labs-bike-light']",
    removeProduct3:"button[id = 'remove-sauce-labs-bike-light']",
    removeProduct4:"button[id = 'remove-sauce-labs-fleece-jacket']",
    cartValue:"span.shopping_cart_badge",
    filterDropdown:"select[data-test='product-sort-container']",
    listOfProductsName:"div[class='inventory_item_name ']",
    cartButton:"div[id='shopping_cart_container']"
    }
   
    getProductPageHeading(){
        return cy.get(this.weblocators.productPageHeading).invoke('text')
    }

    // adding two products to cart
    addToCartProduct1() {
        cy.get(this.weblocators.product1).click()
	}

    addToCartProduct2() {
        cy.get(this.weblocators.product2).click()
	}

    addToCartProduct3() {
        cy.get(this.weblocators.product3).click()
	}

    addToCartProduct4() {
        cy.get(this.weblocators.product4).click()
	}

    // remove products from
	removeProduct3FromCart() {
        cy.get(this.weblocators.removeProduct3).click()
    }

    removeProduct4FromCart() {
        cy.get(this.weblocators.removeProduct4).click()
    }

    // get cart value
     getCartValue() {
        return cy.get(this.weblocators.cartValue).invoke('text')
	}

    // sorting operation
	sortProductsByValue(filterValue) {
		cy.get(this.weblocators.filterDropdown).select(filterValue)
	}

    getSortedProduct() {
		return cy.get(this.weblocators.listOfProductsName).first().invoke('text');
	}

    getProduct1Name() {
		return cy.get(this.weblocators.product1Name).invoke('text')

	}

	getProduct2Name() {
		return cy.get(this.weblocators.product2Name).invoke('text')

	}

    clickCartButton() {
		cy.get(this.weblocators.cartButton).click()
	}


}