const messagingApi = require('./messaging-api');

const TOPIC_ID = process.env.TOPIC_ID;

function displayMessage({ name, text }) {
	console.log(`> ${name}: ${text}`);
}

function streamMessages() {
	const messagingSocket = messagingApi.subscribe(TOPIC_ID);

	messagingSocket.on('message', (data) => {
		const message = JSON.parse(data);
		displayMessage(message);
	});
}

streamMessages();
