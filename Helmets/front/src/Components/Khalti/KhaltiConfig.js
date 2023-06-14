import KhaltiCheckout from "khalti-checkout-web";
import myKey from "./KhaltiKey";

let config = {
    "publicKey": myKey.publicTestKey,
    "productIdentity": "1234567890",
    "productName": "Helmets",
    "productUrl": "http://localhost:3000/checkOut",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config;
