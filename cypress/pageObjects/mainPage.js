class MainPage {

    visit() {
        cy.visit('https://www.vakantiediscounter.nl/');
        return this;
    }

    chooseVacationType(vacationType) {
        if (Object.values(options.vacationType).includes(vacationType)) {
            cy.get(`section`).find('>article')
                .filter(`.vertical.${vacationType}`).click();
            return this;
        } else {
            throw new Error(`This vacationType doesn't exist`);
        }
    }
}

export default MainPage;