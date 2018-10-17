import { $, ElementFinder, element, by } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;
    public filtroButton: ElementFinder;
    public buttonConfirmar: ElementFinder;
    public buttonTipoDeDia: ElementFinder;
    public buttonAccordion: ElementFinder;
    public buttonLinha: ElementFinder;
    public buttonConfirmarAdd: ElementFinder;
    public buttonPublicar: ElementFinder;

    constructor() {
        this.searchTextBox = $("#lst-ib");
        this.searchButton = $("input[value='Google Search']");
        this.logo = $('div#logocont');
        this.filtroButton = $(".navigation .mat-button:nth-child(1)");
        this.buttonConfirmar = $(".filtro-calendario .row .mat-button");
        this.buttonTipoDeDia = $(".dias-semana div:nth-child(1) .tipo-dias");
        this.buttonAccordion = $(".filtro-escala-padrao .mat-accordion .mat-expansion-panel");
        this.buttonLinha = $(".mat-expansion-panel-body .col-3:nth-child(1) .mat-button");
        this.buttonConfirmarAdd = $(".esc-padrao div > .row:nth-child(3) .mat-button:last-child");
        this.buttonPublicar = $('.button-publicar .mat-button:nth-child(1)');
    }

    getButtonDate(date) {
        return element(by.cssContainingText('.cal-box.mat-button', String(date)));
    }
}
