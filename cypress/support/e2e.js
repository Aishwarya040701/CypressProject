// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
    if (!window.navigator || !navigator.serviceWorker) {
      return null;
    }
    const cypressPromise = new Cypress.Promise((resolve, reject) => {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        if(!registrations.length) resolve();
        Promise.all(registrations).then(() => {
          resolve();
        });
      });
    });
    cy.wrap('Unregister service workers').then(() => cypressPromise)
  });
// Alternatively you can use CommonJS syntax:
// require('./commands')