import MainPage from '../pageObjects/mainPage'
import SearchPage from "../pageObjects/searchPage";
import ResultPage from "../pageObjects/resultPage";
import TravelDetailPage from "../pageObjects/travelDetailPage";
import {Traveler} from "../data/traveler";
import {Contact} from "../data/contact";
import data from "../data/optionData";

global.options = data;

describe('Booking travel test', function () {

    context('Set screen size', function () {
        before(function () {
            cy.viewport(1280, 720);
        })
    });

    it('Check that the final price corresponds to the price on check-out page', function () {
        let birthday1 = new Date('1972-10-10');
        let birthday2 = new Date('1975-04-03');
        let travelerFirst = new Traveler('de heer', 'Jan', 'Visser', birthday1, 'Nederlandse');
        let travelerSecond = new Traveler('mevrouw', 'Mirjam', 'Visser', birthday2, 'Nederlandse');
        let contacts = new Contact('Nederland', '1852TB', 'Heiloo', 'Termijen', '23', 'jan.visser.dummy@gmail.com',
            '0612345678', ' Fam. Visser', '0612345687')

        const mainPage = new MainPage();
        mainPage.visit().chooseVacationType(options.vacationType.zonvakanties);

        const searchPage = new SearchPage();
        searchPage.pageIsLoaded()
            .selectDestination('Spanje')
            .selectDate('november', '15')
            .selectDuration('11-16 dagen')
            .clickShowVacations();

        const resultPage = new ResultPage();
        resultPage.setTransportTypeFilter(options.transportType.flight, 'Amsterdam')
            .setBoardType(options.boardType.allInclusive)
            .isFilterDisplayed(options.transportType.flight)
            .isFilterDisplayed('Amsterdam (Schiphol)')
            .isFilterDisplayed(options.boardType.allInclusive)
            .selectItemInSearchResult(0);

        const travelDetailPage = new TravelDetailPage();
        travelDetailPage.clickOnCheckPrice();
        let expectedPrice;
        cy.get('p.price.no-marker.with-info>span.price-number').then(($el) => {
                expectedPrice = $el.text()
            }
        );
        travelDetailPage.clickBookNow()
            .pageIsLoaded()
            .fillTravelerInformation(travelerFirst, 1)
            .fillTravelerInformation(travelerSecond, 2)
            .fillTravelerContacts(contacts)
            .continueToStep2()
            .continueToStep3();
        cy.get('div.price.with-info>span.price-rowtotal').should(($price) => {
            expect($price.text()).to.eq(expectedPrice.replace(',', ''))
        });
    })
});