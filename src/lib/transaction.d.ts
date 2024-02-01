export interface ITransaction {
	amount: number;
	callBackURL: string;
	externalTransactionId: string;
	failureUrl: string;
	number: string;
	serviceCode: string;
	successUrl: string;
}

export interface IConfirmWizall {
	otp: string;
	transactionId: string;
}

export interface IMerchantTransaction {
	ItemName: string;
	ItemPrice: number;
	callBackURL: string;
	customData: string;
	externalTransactionId: string;
	failureUrl: string;
	successUrl: string;
}
