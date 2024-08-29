export class overviewPageClass{

    weblocators={
    overviewPageHeading : "span.title",
    product1:"a[id = 'item_4_title_link']",
    product2:"a[id = 'item_1_title_link']",
    finishButton:"button[id = 'finish']",
    thankyouMessage:"h2[class='complete-header']"
    }
   
    getOverviewPageHeading(){
        return cy.get(this.weblocators.overviewPageHeading).invoke('text')
    }

    clickOnFinishButton() {
        cy.get(this.weblocators.finishButton).click()
	}

    getProduct1Name() {
		return cy.get(this.weblocators.product1).invoke('text')

	}

	getProduct2Name() {
		return cy.get(this.weblocators.product2).invoke('text')

	}

    getThankyouMessage() {
        return cy.get(this.weblocators.thankyouMessage).invoke('text')
	}


}