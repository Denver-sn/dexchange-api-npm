"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DAPI {
    constructor(API_KEY) {
        this.API_URL = "https://api-m.dexchange.sn";
        this.API_KEY = API_KEY;
    }
    /**
     * Get the balance of your account
     * @returns {Promise<any>}
     */
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.API_URL}${DAPI.Endpoint.BALANCE}`, {
                    method: "GET",
                    headers: this.getRequestHeaders(),
                });
                return this.handleResponse(response, "getting balance");
            }
            catch (error) {
                throw new Error(`Error while getting balance: ${error.message}`);
            }
        });
    }
    /**
     *
     * @param transaction : Follow the ITransaction interface
     * @returns  {Promise<any>} : Return the response object
     */
    initTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.API_URL}${DAPI.Endpoint.INIT_TRANSACTION}`, {
                    method: "POST",
                    headers: this.getRequestHeaders(),
                    body: JSON.stringify(transaction),
                });
                return this.handleResponse(response, "initializing transaction");
            }
            catch (error) {
                throw new Error(`Error while initializing transaction: ${error.message}`);
            }
        });
    }
    /**
     *
     * @param confirmWizall : Follow the IConfirmWizall interface
     * @returns  {Promise<any>} : Return the response object
     */
    confirmWizall(confirmWizall) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.API_URL}${DAPI.Endpoint.CONFIRM_WIZALL}`, {
                    method: "POST",
                    headers: this.getRequestHeaders(),
                    body: JSON.stringify(confirmWizall),
                });
                return this.handleResponse(response, "confirming wizall");
            }
            catch (error) {
                throw new Error(`Error while confirming wizall: ${error.message}`);
            }
        });
    }
    /**
     *
     * @param merchantTransaction : Follow the IMerchantTransaction interface
     * @returns {Promise<any>} : Return the response object
     */
    initMerchantTransaction(merchantTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.API_URL}${DAPI.Endpoint.INIT_MERCHANT_TRANSACTION}`, {
                    method: "POST",
                    headers: this.getRequestHeaders(),
                    body: JSON.stringify(merchantTransaction),
                });
                return this.handleResponse(response, "initializing merchant transaction");
            }
            catch (error) {
                throw new Error(`Error while initializing merchant transaction: ${error.message}`);
            }
        });
    }
    handleResponse(response, action) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!response.ok) {
                const error = yield response.json();
                throw new Error(`Error while ${action}: ${error.message}`);
            }
            return response.json();
        });
    }
    getRequestHeaders() {
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.API_KEY}`,
        };
    }
}
DAPI.Endpoint = {
    INIT_TRANSACTION: "/api/v1/transaction/init",
    INIT_MERCHANT_TRANSACTION: "/api/v1/transaction/merchant/get-link",
    CONFIRM_WIZALL: "/api/v1/transaction/confirm/wizall",
    BALANCE: "/api/v1/api-services/balance",
};
module.exports = DAPI;
