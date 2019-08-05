class TravelDetailPage {

    pageIsLoaded() {
        cy.location('pathname', {timeout: 10000})
            .should('include', '/boeking');
        return this;
    }

    clickOnCheckPrice() {
        cy.get('div[data-cy="price-check-button"]').click();
        return this;
    }

    clickBookNow() {
        cy.get('#offer-receipt-bookbutton').click();
        return this;
    }

    fillTravelerInformation(traveler, travelerNmb) {
        cy.get(`.passenger-0${travelerNmb}`).as('passenger');
        cy.get('@passenger').find('.radio-group>label').contains(traveler.sex).click();
        cy.get('@passenger').find('input[placeholder="Eerste voornaam zoals in paspoort"]').type(traveler.name);
        cy.get('@passenger').find('input[placeholder="Gehele achternaam zoals in paspoort"]').type(traveler.lastName);
        cy.get(`select[name="passenger-0${travelerNmb}_name-birthdate-1"]`).select(traveler.day);
        cy.get(`select[name="passenger-0${travelerNmb}_name-birthdate-2"]`).select(traveler.month);
        cy.get(`select[name="passenger-0${travelerNmb}_name-birthdate-3"]`).select(traveler.year);
        return this;
    }

    fillTravelerContacts(contact) {
        cy.get('input[name="passenger-01_address-postcode"]').type(contact.postcode);
        cy.get('#housenumber').type(contact.houseNbr);
        cy.get('input[name="passenger-01_address-street"]').type(contact.street);
        cy.get('input[name="passenger-01_address-city"]').type(contact.city);
        cy.get('input[name="passenger-01_email"]').type(contact.email);
        cy.get('input[name="passenger-01_telephone-primary"]').type(contact.phoneNumber);
        cy.get('input[name="stay-home_name"]').type(contact.extraContactName);
        cy.get('input[name="stay-home_tel"]').type(contact.extraPhoneNumber);
        return this;
    }

    continueToStep2() {
        cy.get('a[href="#booking-questions"]').contains('Naar stap 2: Aanvullende opties').click({force: true});
        cy.get('section.booking-steps>div').should("have.class", "hidden");
        return this;
    }

    continueToStep3() {
        cy.get('div').contains('Naar stap 3: Overzicht en betalen').click({force: true});
        cy.get('section.booking-steps>div').should("have.class", "hidden");
        return this;
    }
}

export default TravelDetailPage