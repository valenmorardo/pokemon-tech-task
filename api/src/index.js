// 	   /\_/\
//    ( o.o )
// 	   > ^ <
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//		─────▄████▀█▄
//		───▄█████████████████▄
//		─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
//		▄███████▄.▲.▲▲▲▲▲▲▲▲
//		████████████████████▀▀


import startServer from "./config/startServer.js";

const runApp = async () => {
	try {
		await startServer();
	} catch (err) {
		console.log('ERROR !!!');
		if (typeof err === 'string') {
			throw new Error(err);
		} else {
			console.log(err);
			throw new Error('An unknown error occurred. Check start server function.');
		}
	}

	return true;
};
runApp();
