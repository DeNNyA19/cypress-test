/// <reference types="Cypress" />
import { clickDepositAndPlay, getDepositLoginSubmitBtn, chooseSwishPaymentMethod, submitPersonalNumber, getBankIdTitle, clickBankIdCancel, enterAmountAndSubmit, getPersonalNumberInput, getAnyPatmentMethodButton } from '../util/comeon.util'

describe('ComeOn white labels', () => {

    const cashAmount = 200;

    before(() => {
        Cypress.config('defaultCommandTimeout', 10000);
        Cypress.on('uncaught:exception', () => {
            return false;
        });
        cy.setCookie('integrationtesting', 'true');
        cy.setCookie('CookieConsent', 'true');
    })

    it('Test Case (Mobile)', () => {
        cy.viewport(Cypress.env('device'));
        cy.visit('/');

        clickDepositAndPlay();
        getDepositLoginSubmitBtn().should('have.attr', 'disabled');
        enterAmountAndSubmit(cashAmount);
        chooseSwishPaymentMethod();
        getBankIdTitle().should('be.visible');
        clickBankIdCancel();
        getAnyPatmentMethodButton().should('be.visible');
    })

    it('Test Case (Desktop)', () => {
        cy.visit('/');

        clickDepositAndPlay();
        getDepositLoginSubmitBtn().should('have.attr', 'disabled');
        enterAmountAndSubmit(cashAmount);
        chooseSwishPaymentMethod();
        cy.fixture('comeon.user').then(user => {
            submitPersonalNumber(user.personalNumber);
            getBankIdTitle().should('be.visible');
            clickBankIdCancel();
            getPersonalNumberInput().should('be.visible');
        })
    })
})