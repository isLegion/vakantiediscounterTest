export class Traveler {

    constructor(sex, name, lastName, birthday, nationality) {
        this._sex = sex;
        this._name = name;
        this._lastName = lastName;
        this._birthday = birthday;
        this._nationality = nationality;
    }

    get sex() {
        return this._sex;
    }

    get name() {
        return this._name;
    }

    get lastName() {
        return this._lastName;
    }

    get day() {
        return this._birthday.getDate().toString();
    }

    get month() {
        return this._birthday.getMonth().toString();
    }

    get year() {
        return this._birthday.getFullYear().toString();
    }

    get nationality() {
        return this._nationality;
    }
}