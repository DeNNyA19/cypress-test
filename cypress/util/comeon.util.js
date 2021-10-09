/// <reference types="Cypress" />

export const clickDepositAndPlay = () => {
    cy.get("button[data-at='deposit-and-play-homepage']").click();
}

export const enterAmountAndSubmit = (amount) => {
    cy.get("input[data-at='amount-input-label']").type(amount);
    getDepositLoginSubmitBtn().click();
}

export const getDepositLoginSubmitBtn = () => {
    return cy.get("button[data-at='deposit-login-submit-button-noaccount']");
}

export const chooseSwishPaymentMethod = () => {
    cy.get("button[data-at='SWISH-paymentmethod-deposit-and-play']").click();
}

export const getAnyPatmentMethodButton =  () => {
    return cy.get("button[data-at*='paymentmethod-deposit-and-play']");
}

export const submitPersonalNumber = (personalNumber) => {
    getPersonalNumberInput().type(personalNumber);
    cy.get("button[data-at='register-login-bankid-button']").click()
}

export const getPersonalNumberInput = () => {
    return cy.get("input[data-at='input-personalNumber']");
}

export const getBankIdTitle = () => {
    return cy.get("h2:contains('BankID-app')");
}

export const clickBankIdCancel = () => {
    cy.get("button[data-at='bankid-loader-cancel'").click();
}