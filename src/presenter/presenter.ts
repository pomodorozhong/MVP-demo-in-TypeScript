import { IPresenter } from "../interface/presenter/presenter.interface";
import { IView } from "../interface/view/view.interface";
import { ICookieModel } from "../interface/model/cookieModel.interface";
import { View } from "../view/view"
import { CookieModel } from "../model/cookieModel";

export class Presenter implements IPresenter{
    private view: IView;
    private cookieModel: ICookieModel;

    constructor() {
        this.view = new View(document, this);
        this.cookieModel = new CookieModel();

        this.initialize();
    }

    // 這個函數，用來在網頁剛載入時，將畫面上顯示的東西與後台的資料同步
    // 在目前的程式功能中，具體做的事情就是將畫面顯示的餅乾數量，與 Model 內的餅乾數量進行同步
    initialize() {
        this.view.toSetCookieCount(this.cookieModel.getCookieCount());
    }

    toGrabCookie() {
        // Call Model function to update data.
        this.cookieModel.addCookie();

        // Call View function to update UI.
        this.view.toSetCookieCount(this.cookieModel.getCookieCount());
    }
}