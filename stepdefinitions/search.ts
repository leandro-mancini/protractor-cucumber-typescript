import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then, Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

When(/^clico no menu filtros$/, async () => {
    await browser.actions().mouseMove(search.filtroButton).perform().then(() => {
        search.filtroButton.click();
    });
});

Given(/^seleciono a data de amanhã$/, async () => {
    const date = new Date();
    const dd = date.getDate() + 1;

    await browser.sleep(1000);

    await browser.actions().mouseMove(search.getButtonDate(dd)).perform().then(() => {
        search.getButtonDate(dd).click();
    });
});

Then(/^clico no botão confirmar$/, async () => {
    await browser.sleep(1000);

    await browser.actions().mouseMove(search.buttonConfirmar).perform().then(() => {
        search.buttonConfirmar.click();
    });
});

When(/^devo selecionar o tipo de dia "(.*?)"$/, async (tipoDeDia) => {
    await browser.sleep(2000);

    await browser.actions().mouseMove(search.buttonTipoDeDia).perform().then(() => {
        search.buttonTipoDeDia.click();
    });
});

Given(/^devo expandir uma filial$/, async () => {
    await browser.sleep(1000);
    
    await browser.actions().mouseMove(search.buttonAccordion).perform().then(() => {
        search.buttonAccordion.click();
    });
});

Given(/^devo selecionar uma linha$/, async () => {
    await browser.sleep(1000);
    
    await browser.actions().mouseMove(search.buttonLinha).perform().then(() => {
        search.buttonLinha.click();
    });
});

Then(/^devo clicar no botão confirmar$/, async () => {
    await browser.sleep(1000);
    
    await browser.actions().mouseMove(search.buttonConfirmarAdd).perform().then(() => {
        search.buttonConfirmarAdd.click();
    });
});

Given(/^que eu esteja na página de serviços de escala$/, async () => {
    await browser.sleep(1000);

    await expect(browser.getTitle()).to.eventually.equal("Escala Globus7");
});

When(/^devo clicar no botão gerar escala$/, { timeout: 60000 }, async () => {
    await browser.sleep(5000);

    await browser.actions().mouseMove(search.buttonPublicar).perform().then(() => {
        search.buttonPublicar.click();
    });

    await browser.sleep(5000);
});

Then(/^devo visualizar minha escala gerada$/, function(callback) {
    callback(null, 'pending');
});