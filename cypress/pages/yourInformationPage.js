export class yourInformationPageClass{

    weblocators={
    yourInformationPageHeading : "span.title",
    firstName:"input[id = 'first-name']",
    lastName:"input[id = 'last-name']",
    postalCode:"input[id = 'postal-code']",
    continueButton:"input[id = 'continue']"
    }
   
    getYourInformationPageHeading(){
        return cy.get(this.weblocators.yourInformationPageHeading).invoke('text')
    }

    enterDetails(firstNameData, LastNameData, postalCodeData) {
     cy.get(this.weblocators.firstName).type(firstNameData)
     cy.get(this.weblocators.lastName).type(LastNameData)
     cy.get(this.weblocators.postalCode).type(postalCodeData)
	}

    clickOnContinueButton() {
        cy.get(this.weblocators.continueButton).click()
	}


}