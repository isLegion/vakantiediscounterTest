class ResultPage {

    setTransportTypeFilter(transport, airport) {
        if (transport === options.transportType.flight) {
            cy.get('.transport-arranged').click();
        } else {
            cy.get('.transport-own').click();
        }
        cy.get('.options-list').find('.options-list__label-text').contains(airport).click();
        return this;
    }

    setBoardType(boardType) {
        cy.get('.options-list').find('.options-list__label-text').contains(boardType).click();
        return this;
    }

    isFilterDisplayed(filter) {
        cy.get('.search-facets>li').contains(filter).should('be.visible');
        return this;
    }

    selectItemInSearchResult(number) {
        cy.get('ul.search-results-list.list-view > li').eq(number).find('a >.properties-footer').click();
    }

}

export default ResultPage;