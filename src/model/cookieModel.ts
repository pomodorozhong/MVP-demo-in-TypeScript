import { ICookieModel } from "../interface/model/cookieModel.interface";

export class CookieModel implements ICookieModel{
    private cookieCount: number;

    constructor() {
        this.cookieCount = 0;
    }

    addCookie() {
        this.cookieCount++;
    }

    getCookieCount() {
        return this.cookieCount;
    }
}