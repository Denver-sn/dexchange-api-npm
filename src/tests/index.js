const DAPI = require("../../dist/index");

const dapi = new DAPI("APIKEY");

// Exemple avec ITransaction
const randomTransaction = {
	amount: Math.floor(Math.random() * 1000) + 1,
	callBackURL: "https://example.com/callback",
	externalTransactionId: generateRandomUUID(),
	failureUrl: "https://example.com/failure",
	number: "771234567",
	serviceCode: "WAVE_SN_CASHOUT",
	successUrl: "https://example.com/success",
};

dapi
	.initTransaction(randomTransaction)
	.then((transaction) => console.log(transaction))
	.catch((error) => console.log(error));

// Exemple avec IConfirmWizall
const randomConfirmWizall = {
	otp: generateRandomOTP(),
	transactionId: generateRandomUUID(),
};

dapi
	.confirmWizall(randomConfirmWizall)
	.then((confirmation) => console.log(confirmation))
	.catch((error) => console.log(error));

// Exemple de données pour initier un paiement marchand
const randomMerchantTransaction = {
	ItemName: "Random Item",
	ItemPrice: Math.floor(Math.random() * 1000) + 1,
	callBackURL: "https://example.com/merchant-callback",
	customData: "Random Custom Data",
	externalTransactionId: generateRandomUUID(),
	failureUrl: "https://example.com/merchant-failure",
	successUrl: "https://example.com/merchant-success",
};

dapi
	.initMerchantTransaction(randomMerchantTransaction)
	.then((merchantTransaction) => console.log(merchantTransaction))
	.catch((error) => console.log(error));

// HELPERS
function generateRandomUUID() {
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function generateRandomOTP() {
	return Math.floor(Math.random() * 900000) + 100000 + "";
}
