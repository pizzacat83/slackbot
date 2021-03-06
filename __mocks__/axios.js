/* eslint-env node, jest */

const axios = jest.fn((options) => Promise.resolve(axios.response));
axios.get = axios;
axios.post = axios;

axios.response = '';

axios.default = {
	defaults: {},
};

module.exports = axios;
