export class Contact {
    get city() {
        return this._city;
    }

    get extraContactName() {
        return this._extraContactName;
    }

    get extraPhoneNumber() {
        return this._extraPhoneNumber;
    }

    get country() {
        return this._country;
    }

    get postcode() {
        return this._postcode;
    }

    get street() {
        return this._street;
    }

    get houseNbr() {
        return this._houseNbr;
    }

    get email() {
        return this._email;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    constructor(country, postcode, city, street, houseNbr, email, phoneNumber, extraContactName, extraPhoneNumber) {

        this._country = country;
        this._postcode = postcode;
        this._street = street;
        this._houseNbr = houseNbr;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._extraContactName = extraContactName;
        this._extraPhoneNumber = extraPhoneNumber;
        this._city = city;
    }

}