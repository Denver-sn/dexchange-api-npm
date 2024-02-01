## DEXCHANGE-API - Node.js module

Node.js package to interact with the Dexchange API easily.

[https://dash-api.dexchange.sn/](https://dash-api.dexchange.sn/auth/signup)

## Installation

```bash
npm install dexchange-api
```

## Usage

### To use this lib, you need to have an API key. You can get one by signing up at [Dexchange](https://dash-api.dexchange.sn/auth/signup).

```javascript
const DAPI = require("dexchange-api");

const dapi = new DAPI("YOUR_API_KEY");

// Random data for initTransaction
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

// Random data for confrim wizall transaction
const randomConfirmWizall = {
	otp: generateRandomOTP(),
	transactionId: generateRandomUUID(),
};

dapi
	.confirmWizall(randomConfirmWizall)
	.then((confirmation) => console.log(confirmation))
	.catch((error) => console.log(error));

// Random data to init merchant transaction
const randomMerchantTransaction = {
	ItemName: "Random Item",
	ItemPrice: Math.floor(Math.random() * 1000) + 1,
	callBackURL: "https://example.com/merchant-callback",
	customData: "{customData: 'customData'}",
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
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
