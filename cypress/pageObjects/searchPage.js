class SearchPage {

    constructor() {
    }

    pageIsLoaded() {
        cy.location('pathname', {timeout: 10000})
            .should('include', '/zonvakantie');
        return this;
    }

    selectDestination(destination) {
        cy.get('#select-destination').click();
        cy.get('.country-list').find('li>a').contains(destination).click();
        return this;
    }

    selectDate(month, day) {
        cy.get('span[data-cy=calendar-date-label]').click();
        cy.wait(500);
        cy.get('div.current-month.has-future').click({force: true});
        cy.wait(500);
        cy.get('.future-months').find('a').contains(month).click({force: true});
        cy.get('.date').contains(day).click();
        return this;
    }

    selectDuration(duration) {
        cy.get('#select-duration').click();
        cy.get('ul[class=duration-list]').find('label').contains(duration).click();
        return this;
    }

    clickShowVacations() {
        cy.get('button.btn.primary.box-submit').click();
    }
}

export default SearchPage;