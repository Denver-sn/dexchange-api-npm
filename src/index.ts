import {
	ITransaction,
	IConfirmWizall,
	IMerchantTransaction,
} from "./lib/transaction";

class DAPI {
	private readonly API_KEY: string;
	private readonly API_URL = "https://api-m.dexchange.sn";

	constructor(API_KEY: string) {
		this.API_KEY = API_KEY;
	}

	static Endpoint = {
		INIT_TRANSACTION: "/api/v1/transaction/init",
		INIT_MERCHANT_TRANSACTION: "/api/v1/transaction/merchant/get-link",
		CONFIRM_WIZALL: "/api/v1/transaction/confirm/wizall",
		BALANCE: "/api/v1/api-services/balance",
	};

	/**
	 * Get the balance of your account
	 * @returns {Promise<any>}
	 */
	public async getBalance(): Promise<any> {
		try {
			const response = await fetch(`${this.API_URL}${DAPI.Endpoint.BALANCE}`, {
				method: "GET",
				headers: this.getRequestHeaders(),
			});

			return this.handleResponse(response, "getting balance");
		} catch (error: any) {
			throw new Error(`Error while getting balance: ${error.message}`);
		}
	}

	/**
	 *
	 * @param transaction : Follow the ITransaction interface
	 * @returns  {Promise<any>} : Return the response object
	 */
	public async initTransaction(transaction: ITransaction): Promise<any> {
		try {
			const response = await fetch(
				`${this.API_URL}${DAPI.Endpoint.INIT_TRANSACTION}`,
				{
					method: "POST",
					headers: this.getRequestHeaders(),
					body: JSON.stringify(transaction),
				}
			);

			return this.handleResponse(response, "initializing transaction");
		} catch (error: any) {
			throw new Error(`Error while initializing transaction: ${error.message}`);
		}
	}

	/**
	 *
	 * @param confirmWizall : Follow the IConfirmWizall interface
	 * @returns  {Promise<any>} : Return the response object
	 */
	public async confirmWizall(confirmWizall: IConfirmWizall): Promise<any> {
		try {
			const response = await fetch(
				`${this.API_URL}${DAPI.Endpoint.CONFIRM_WIZALL}`,
				{
					method: "POST",
					headers: this.getRequestHeaders(),
					body: JSON.stringify(confirmWizall),
				}
			);

			return this.handleResponse(response, "confirming wizall");
		} catch (error: any) {
			throw new Error(`Error while confirming wizall: ${error.message}`);
		}
	}

	/**
	 *
	 * @param merchantTransaction : Follow the IMerchantTransaction interface
	 * @returns {Promise<any>} : Return the response object
	 */
	public async initMerchantTransaction(
		merchantTransaction: IMerchantTransaction
	): Promise<any> {
		try {
			const response = await fetch(
				`${this.API_URL}${DAPI.Endpoint.INIT_MERCHANT_TRANSACTION}`,
				{
					method: "POST",
					headers: this.getRequestHeaders(),
					body: JSON.stringify(merchantTransaction),
				}
			);

			return this.handleResponse(response, "initializing merchant transaction");
		} catch (error: any) {
			throw new Error(
				`Error while initializing merchant transaction: ${error.message}`
			);
		}
	}

	private async handleResponse(
		response: Response,
		action: string
	): Promise<any> {
		if (!response.ok) {
			const error = await response.json();
			throw new Error(`Error while ${action}: ${error.message}`);
		}

		return response.json();
	}

	private getRequestHeaders(): Record<string, string> {
		return {
			"Content-Type": "application/json",
			Authorization: `Bearer ${this.API_KEY}`,
		};
	}
}

export = DAPI;
