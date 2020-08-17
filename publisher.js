const messagingApi = require('./messaging-api');
const readline = require('readline');

const TOPIC_ID = process.env.TOPIC_ID;
const NAME = process.env.NAME;

const terminal = readline.createInterface({
	input: process.stdin,
});

terminal.on('line', (text) => {
	const message = { name: NAME, text };
	messagingApi.publish(message, TOPIC_ID);
});
