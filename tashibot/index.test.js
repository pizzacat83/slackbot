/* eslint-env node, jest */

const tashibot = require('./index.js');
const Slack = require('../lib/slackMock.js');

let slack = null;

beforeEach(async () => {
	slack = new Slack();
	process.env.CHANNEL_SANDBOX = slack.fakeChannel;
	await tashibot(slack);
});

describe('tashibot', () => {
	it('responds to "飽きたし"', async () => {
		const {text, username} = await slack.getResponseTo('飽きたし');

		expect(username).toBe('tashibot');
		expect(text).toBe('秋田県秋田市');
	});
});
