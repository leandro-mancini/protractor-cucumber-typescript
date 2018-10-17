import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^estou na página inicial "(.*?)"$/, async (text) => {
    if(text === 'Escala Globus7') {
        await expect(browser.getTitle()).to.eventually.equal("Escala Globus7");
    } else if(text === 'cucumber') {
        await expect(browser.getTitle()).to.eventually.equal(text+" - Google Search");
    } else if(text === 'protractor') {
        await expect(browser.getTitle()).to.eventually.equal(text+" - Google Search");
    }   
});
